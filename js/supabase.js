// ============================================================
// FamiliePraxis — Supabase Backend
// REST-klient uden SDK-afhængighed (ren fetch)
// Automatisk fallback til lokale data hvis Supabase ikke er sat op
// ============================================================

var FPBackend = (function () {
  'use strict';

  // ---------- Konfiguration ----------
  // Læses fra <meta> tags i HTML — ingen hardcoded nøgler
  var config = {
    url: null,
    anonKey: null,
    ready: false
  };

  // Cache: undgå at overbelaste databasen
  var cache = {};
  var CACHE_TTL = 5 * 60 * 1000; // 5 minutter

  // Auth state
  var session = null;

  // ---------- Init ----------
  function init() {
    var metaUrl = document.querySelector('meta[name="supabase-url"]');
    var metaKey = document.querySelector('meta[name="supabase-anon-key"]');

    if (metaUrl && metaKey && metaUrl.content && metaKey.content) {
      config.url = metaUrl.content.replace(/\/$/, '');
      config.anonKey = metaKey.content;
      config.ready = true;
    }

    // Gendan session fra localStorage
    try {
      var saved = localStorage.getItem('fp_admin_session');
      if (saved) session = JSON.parse(saved);
    } catch (e) { /* ignore */ }

    return config.ready;
  }

  // ---------- Hjælpefunktioner ----------
  function isReady() {
    return config.ready;
  }

  function headers(withAuth) {
    var h = {
      'apikey': config.anonKey,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    };
    if (withAuth && session && session.access_token) {
      h['Authorization'] = 'Bearer ' + session.access_token;
    } else {
      h['Authorization'] = 'Bearer ' + config.anonKey;
    }
    return h;
  }

  function restUrl(table, query) {
    return config.url + '/rest/v1/' + table + (query || '');
  }

  function authUrl(path) {
    return config.url + '/auth/v1/' + path;
  }

  // ---------- Cache ----------
  function cacheGet(key) {
    var entry = cache[key];
    if (entry && (Date.now() - entry.time < CACHE_TTL)) {
      return entry.data;
    }
    return null;
  }

  function cacheSet(key, data) {
    cache[key] = { data: data, time: Date.now() };
  }

  function cacheClear(prefix) {
    if (!prefix) {
      cache = {};
      return;
    }
    Object.keys(cache).forEach(function (k) {
      if (k.indexOf(prefix) === 0) delete cache[k];
    });
  }

  // ---------- Generisk REST ----------
  function fetchJSON(url, options) {
    return fetch(url, options).then(function (res) {
      if (!res.ok) {
        return res.text().then(function (text) {
          throw new Error('Supabase fejl ' + res.status + ': ' + text);
        });
      }
      if (res.status === 204) return null;
      return res.json();
    });
  }

  // ---------- CRUD funktioner ----------

  // Hent alle rækker fra en tabel (med cache)
  function getAll(table, query) {
    var cacheKey = table + (query || '');
    var cached = cacheGet(cacheKey);
    if (cached) return Promise.resolve(cached);

    return fetchJSON(restUrl(table, query || '?select=*&order=sort_order.asc.nullslast,created_at.asc'), {
      method: 'GET',
      headers: headers(false)
    }).then(function (data) {
      cacheSet(cacheKey, data);
      return data;
    });
  }

  // Hent én række
  function getOne(table, id) {
    return fetchJSON(restUrl(table, '?id=eq.' + id + '&select=*'), {
      method: 'GET',
      headers: headers(false)
    }).then(function (data) {
      return data && data.length > 0 ? data[0] : null;
    });
  }

  // Opret
  function create(table, data) {
    cacheClear(table);
    return fetchJSON(restUrl(table), {
      method: 'POST',
      headers: headers(true),
      body: JSON.stringify(data)
    });
  }

  // Opdater
  function update(table, id, data) {
    cacheClear(table);
    return fetchJSON(restUrl(table, '?id=eq.' + id), {
      method: 'PATCH',
      headers: headers(true),
      body: JSON.stringify(data)
    });
  }

  // Slet
  function remove(table, id) {
    cacheClear(table);
    return fetchJSON(restUrl(table, '?id=eq.' + id), {
      method: 'DELETE',
      headers: headers(true)
    });
  }

  // ---------- Auth (til admin-panel) ----------
  function login(email, password) {
    return fetchJSON(authUrl('token?grant_type=password'), {
      method: 'POST',
      headers: {
        'apikey': config.anonKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password })
    }).then(function (data) {
      session = data;
      localStorage.setItem('fp_admin_session', JSON.stringify(data));
      return data;
    });
  }

  function logout() {
    session = null;
    localStorage.removeItem('fp_admin_session');
    cacheClear();
  }

  function isLoggedIn() {
    return !!(session && session.access_token);
  }

  function getUser() {
    return session ? session.user : null;
  }

  // ---------- Specialiserede hent-funktioner ----------

  function getOevelser() {
    return getAll('exercises', '?select=*&is_active=eq.true&order=sort_order.asc.nullslast,created_at.asc');
  }

  function getCirkler() {
    return getAll('circles', '?select=*&is_active=eq.true&order=sort_order.asc.nullslast');
  }

  function getTemaer() {
    return getAll('themes', '?select=*&is_active=eq.true&order=sort_order.asc.nullslast');
  }

  function getTrappen() {
    return getAll('ladder_states', '?select=*&order=trin.asc');
  }

  function getSammenhaenge() {
    return getAll('connections', '?select=*&order=created_at.asc');
  }

  function getMorgenCheckin() {
    return getAll('morning_checkins', '?select=*&is_active=eq.true&order=sort_order.asc.nullslast');
  }

  // ---------- Email-tilmelding ----------
  function subscribeEmail(email, name, perspektiv) {
    return fetchJSON(restUrl('email_subscribers'), {
      method: 'POST',
      headers: headers(false),
      body: JSON.stringify({
        email: email,
        name: name || null,
        perspektiv: perspektiv || 'privat',
        subscribed_at: new Date().toISOString()
      })
    });
  }

  function getSubscribers() {
    return getAll('email_subscribers', '?select=*&order=subscribed_at.desc');
  }

  // ---------- Indholdsversion ----------
  function getContentVersion() {
    return getAll('content_versions', '?select=*&order=created_at.desc&limit=1')
      .then(function (data) {
        return data && data.length > 0 ? data[0].version : null;
      });
  }

  // ---------- Public API ----------
  return {
    init: init,
    isReady: isReady,

    // CRUD
    getAll: getAll,
    getOne: getOne,
    create: create,
    update: update,
    remove: remove,

    // Specialiseret
    getOevelser: getOevelser,
    getCirkler: getCirkler,
    getTemaer: getTemaer,
    getTrappen: getTrappen,
    getSammenhaenge: getSammenhaenge,
    getMorgenCheckin: getMorgenCheckin,
    getContentVersion: getContentVersion,

    // Email
    subscribeEmail: subscribeEmail,
    getSubscribers: getSubscribers,

    // Auth
    login: login,
    logout: logout,
    isLoggedIn: isLoggedIn,
    getUser: getUser,

    // Cache
    cacheClear: cacheClear
  };
})();
