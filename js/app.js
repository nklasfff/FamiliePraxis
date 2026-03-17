// ============================================================
// FamiliePraxis — App Logic
// Rikke Veth · Familiepraxis · Frederiksberg
// ============================================================

(function () {
  'use strict';

  // ---------- State ----------
  var aktivPerspektiv = localStorage.getItem('fp_perspektiv') || null;
  var aktivCirkel = null;
  var aktivTab = 'overblik';
  var aktivTema = null;
  var aktivTrin = null;
  var isFirstVisit = !localStorage.getItem('fp_visited');

  // ---------- DOM refs ----------
  var onboarding = document.getElementById('onboarding');
  var appMain = document.getElementById('appMain');
  var perspektivBar = document.getElementById('perspektivBar');
  var perspektivLabel = document.getElementById('perspektivLabel');
  var perspektivSwitch = document.getElementById('perspektivSwitch');
  var welcomeSection = document.getElementById('welcomeSection');
  var bottomNav = document.getElementById('bottomNav');
  var sideMenu = document.getElementById('sideMenu');
  var menuOverlay = document.querySelector('.menu-overlay');
  var menuBody = document.getElementById('menuBody');
  var searchOverlay = document.getElementById('searchOverlay');
  var searchInput = document.getElementById('searchInput');
  var searchClear = document.getElementById('searchClear');
  var searchResults = document.getElementById('searchResults');
  var searchTags = document.getElementById('searchTags');

  // ---------- Init ----------
  function init() {
    if (aktivPerspektiv) {
      hideOnboarding(true);
      updatePerspektivUI();
    }
    bindEvents();
    renderMenuContent();
    renderSearchTags();
    if (isFirstVisit && aktivPerspektiv) {
      showWelcome();
    }
    if (aktivPerspektiv) {
      animateCircles();
      updateCircleTexts();
    }
    renderTrappen();
    renderTemaer();
    renderOevelser();
    drawConnectionLines();
  }

  // ---------- Onboarding ----------
  function hideOnboarding(instant) {
    if (instant) {
      onboarding.style.display = 'none';
    } else {
      onboarding.classList.add('hiding');
      setTimeout(function () { onboarding.style.display = 'none'; }, 600);
    }
  }

  function selectPerspektiv(p) {
    aktivPerspektiv = p;
    localStorage.setItem('fp_perspektiv', p);
    localStorage.setItem('fp_visited', 'true');
    isFirstVisit = true;
    hideOnboarding(false);
    updatePerspektivUI();
    showWelcome();
    animateCircles();
    updateCircleTexts();
    renderTrappen();
    renderTemaer();
    renderOevelser();
    renderMenuContent();
  }

  function updatePerspektivUI() {
    perspektivLabel.textContent = aktivPerspektiv === 'privat' ? 'Privat klient' : 'Fagprofessionel';
  }

  function showWelcome() {
    welcomeSection.style.display = 'block';
    setTimeout(function () {
      welcomeSection.style.opacity = '0';
      welcomeSection.style.transition = 'opacity 1s';
      setTimeout(function () { welcomeSection.style.display = 'none'; }, 1000);
    }, 20000);
  }

  // ---------- Circle Diagram ----------
  function animateCircles() {
    var groups = document.querySelectorAll('.cirkel-group');
    var order = ['centrum', 'relationer', 'parterapi', 'familie', 'boern', 'aandedraet', 'individuel'];
    order.forEach(function (id, i) {
      groups.forEach(function (g) {
        if (g.getAttribute('data-cirkel') === id) {
          setTimeout(function () { g.classList.add('visible'); }, i * 120);
        }
      });
    });
    // Fade in connection lines after circles
    setTimeout(function () {
      var lines = document.getElementById('connectionLines');
      if (lines) {
        lines.style.transition = 'opacity 0.8s';
        lines.setAttribute('opacity', '1');
      }
    }, order.length * 120 + 300);
  }

  function updateCircleTexts() {
    if (!aktivPerspektiv) return;
    var tekster = CIRKEL_TEKSTER[aktivPerspektiv];
    Object.keys(tekster).forEach(function (key) {
      var el1 = document.getElementById('txt' + capitalize(key) + '1');
      var el2 = document.getElementById('txt' + capitalize(key) + '2');
      if (el1) el1.textContent = tekster[key][0];
      if (el2) el2.textContent = tekster[key][1];
    });
  }

  function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  function drawConnectionLines() {
    var positions = {
      centrum: [260, 260],
      relationer: [260, 110],
      parterapi: [390, 185],
      familie: [390, 335],
      boern: [260, 410],
      aandedraet: [130, 335],
      individuel: [130, 185]
    };
    var linesGroup = document.getElementById('connectionLines');
    if (!linesGroup) return;
    linesGroup.innerHTML = '';
    SAMMENHAENGE.forEach(function (s) {
      var from = positions[s.fra];
      var to = positions[s.til];
      if (from && to) {
        var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', from[0]);
        line.setAttribute('y1', from[1]);
        line.setAttribute('x2', to[0]);
        line.setAttribute('y2', to[1]);
        linesGroup.appendChild(line);
      }
    });
  }

  // ---------- Navigation ----------
  function showView(viewName) {
    document.querySelectorAll('.view').forEach(function (v) {
      v.classList.remove('active');
    });
    var target = document.getElementById('view' + capitalize(viewName));
    if (target) target.classList.add('active');

    document.querySelectorAll('.nav-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-view') === viewName);
    });

    // Reset detail views
    if (viewName !== 'cirkelDetalje') {
      aktivCirkel = null;
    }
  }

  // ---------- Cirkel Detail ----------
  function showCirkelDetail(cirkelId) {
    aktivCirkel = cirkelId;
    aktivTab = 'overblik';
    renderCirkelDetail();
    showView('cirkelDetalje');
    // Deactivate nav buttons
    document.querySelectorAll('.nav-btn').forEach(function (b) { b.classList.remove('active'); });
  }

  function renderCirkelDetail() {
    var cirkel = CIRKLER.find(function (c) { return c.id === aktivCirkel; });
    if (!cirkel) return;
    var p = aktivPerspektiv || 'privat';
    var data = cirkel[p];
    var container = document.getElementById('cirkelDetaljeContent');

    var html = '<div class="cirkel-detail-header">' +
      '<span class="cirkel-detail-ikon">' + cirkel.ikon + '</span>' +
      '<h2 class="cirkel-detail-titel">' + cirkel.titel + '</h2>' +
      '</div>';

    // Tabs
    html += '<div class="cirkel-tabs">' +
      '<button class="cirkel-tab' + (aktivTab === 'overblik' ? ' active' : '') + '" data-tab="overblik">Overblik</button>' +
      '<button class="cirkel-tab' + (aktivTab === 'fordybelse' ? ' active' : '') + '" data-tab="fordybelse">Fordybelse</button>' +
      '<button class="cirkel-tab' + (aktivTab === 'sammenhaenge' ? ' active' : '') + '" data-tab="sammenhaenge">Sammenhænge</button>' +
      '</div>';

    // Tab content
    html += '<div class="cirkel-tab-content">';

    if (aktivTab === 'overblik') {
      html += '<p class="cirkel-beskrivelse">' + data.overblik.beskrivelse + '</p>';
      html += '<ul class="cirkel-punkter">';
      data.overblik.punkter.forEach(function (p) {
        html += '<li>' + p + '</li>';
      });
      html += '</ul>';
      html += '<div class="cirkel-tip"><div class="cirkel-tip-label">Tip</div>' + data.overblik.tip + '</div>';
    } else if (aktivTab === 'fordybelse') {
      data.dybde.forEach(function (afsnit) {
        html += '<p class="cirkel-dybde-afsnit">' + afsnit + '</p>';
      });
    } else if (aktivTab === 'sammenhaenge') {
      var relationer = SAMMENHAENGE.filter(function (s) {
        return s.fra === aktivCirkel || s.til === aktivCirkel;
      });
      if (relationer.length === 0) {
        html += '<p class="cirkel-beskrivelse">Ingen sammenhænge fundet.</p>';
      } else {
        relationer.forEach(function (s) {
          var otherId = s.fra === aktivCirkel ? s.til : s.fra;
          var otherName = CIRKEL_NAVNE[otherId] || otherId;
          var tekst = s[p] || s.privat;
          html += '<div class="sammenhaeng-card" data-goto="' + otherId + '">' +
            '<div class="sammenhaeng-label">↔ ' + otherName + '</div>' +
            '<div class="sammenhaeng-tekst">' + tekst + '</div>' +
            '</div>';
        });
      }
    }

    html += '</div>';
    container.innerHTML = html;

    // Bind tab clicks
    container.querySelectorAll('.cirkel-tab').forEach(function (tab) {
      tab.addEventListener('click', function () {
        aktivTab = this.getAttribute('data-tab');
        renderCirkelDetail();
      });
    });

    // Bind sammenhæng clicks
    container.querySelectorAll('.sammenhaeng-card').forEach(function (card) {
      card.addEventListener('click', function () {
        showCirkelDetail(this.getAttribute('data-goto'));
      });
    });
  }

  // ---------- Trappen ----------
  function renderTrappen() {
    var container = document.getElementById('trappeContainer');
    if (!container) return;
    var p = aktivPerspektiv || 'privat';
    var html = '';

    TRAPPEN.forEach(function (trin) {
      var data = trin[p];
      var isActive = aktivTrin === trin.trin;
      html += '<div class="trappe-trin' + (isActive ? ' active' : '') + '" data-trin="' + trin.trin + '">' +
        '<div class="trappe-trin-header">' +
        '<div class="trappe-indicator ' + trin.farve + '"></div>' +
        '<div class="trappe-trin-navn">' + trin.navn + '</div>' +
        '</div>' +
        '<div class="trappe-detail"><div class="trappe-detail-inner">' +
        '<p class="trappe-beskrivelse">' + data.beskrivelse + '</p>' +
        '<div class="trappe-section-title">Kropslige signaler</div>' +
        '<ul class="trappe-list">';
      data.kropsSignaler.forEach(function (s) { html += '<li>' + s + '</li>'; });
      html += '</ul>' +
        '<div class="trappe-section-title">Handlinger</div>' +
        '<ul class="trappe-list">';
      data.handlinger.forEach(function (h) { html += '<li>' + h + '</li>'; });
      html += '</ul></div></div></div>';
    });

    container.innerHTML = html;

    container.querySelectorAll('.trappe-trin').forEach(function (trin) {
      trin.addEventListener('click', function () {
        var trinNum = parseInt(this.getAttribute('data-trin'));
        aktivTrin = aktivTrin === trinNum ? null : trinNum;
        renderTrappen();
      });
    });
  }

  // ---------- Temaer ----------
  function renderTemaer() {
    var grid = document.getElementById('temaGrid');
    if (!grid) return;
    var p = aktivPerspektiv || 'privat';
    var html = '';

    TEMA_INDHOLD.forEach(function (tema) {
      var data = tema[p];
      var isActive = aktivTema === tema.id;
      html += '<div class="tema-card' + (isActive ? ' active' : '') + '" data-tema="' + tema.id + '">' +
        '<div class="tema-ikon">' + tema.ikon + '</div>' +
        '<div class="tema-titel">' + tema.titel + '</div>' +
        '<div class="tema-intro">' + data.intro + '</div>' +
        '<div class="tema-expanded"><div class="tema-expanded-inner">' +
        '<p class="tema-tekst">' + data.tekst + '</p>' +
        '<div class="tema-cirkler-label">Relaterede områder</div>' +
        '<div class="tema-cirkel-tags">';
      data.cirkler.forEach(function (c) {
        html += '<span class="tema-cirkel-tag">' + (CIRKEL_NAVNE[c] || c) + '</span>';
      });
      html += '</div></div></div></div>';
    });

    grid.innerHTML = html;

    grid.querySelectorAll('.tema-card').forEach(function (card) {
      card.addEventListener('click', function () {
        var temaId = this.getAttribute('data-tema');
        aktivTema = aktivTema === temaId ? null : temaId;
        renderTemaer();
      });
    });
  }

  // ---------- Øvelser ----------
  function renderOevelser() {
    var list = document.getElementById('oevelseList');
    if (!list) return;
    var html = '';

    OEVELSER.forEach(function (oev, idx) {
      var isActive = list.querySelector('.oevelse-card.active[data-idx="' + idx + '"]') !== null;
      html += '<div class="oevelse-card" data-idx="' + idx + '">' +
        '<div class="oevelse-header">' +
        '<div>' +
        '<div class="oevelse-title">' + oev.titel + '</div>' +
        '<div class="oevelse-meta">' + oev.tid + ' · ' + oev.sted + '</div>' +
        '<div class="oevelse-intro">' + oev.intro + '</div>' +
        '</div>' +
        '<span class="oevelse-chevron">▼</span>' +
        '</div>' +
        '<div class="oevelse-steps"><div class="oevelse-steps-inner">';
      oev.trin.forEach(function (trin, i) {
        html += '<div class="oevelse-step">' +
          '<div class="oevelse-step-num">' + (i + 1) + '</div>' +
          '<div class="oevelse-step-text">' + trin + '</div>' +
          '</div>';
      });
      html += '</div></div></div>';
    });

    list.innerHTML = html;

    list.querySelectorAll('.oevelse-card').forEach(function (card) {
      card.addEventListener('click', function () {
        var wasActive = this.classList.contains('active');
        list.querySelectorAll('.oevelse-card').forEach(function (c) { c.classList.remove('active'); });
        if (!wasActive) this.classList.add('active');
      });
    });
  }

  // ---------- Menu ----------
  function openMenu() {
    sideMenu.classList.add('open');
    menuOverlay.classList.add('active');
  }

  function closeMenu() {
    sideMenu.classList.remove('open');
    menuOverlay.classList.remove('active');
  }

  function renderMenuContent() {
    var html = '';

    // Perspektiv info
    html += '<div class="menu-section">' +
      '<div class="menu-section-title">Dit perspektiv</div>' +
      '<div class="menu-link" id="menuSwitchPerspektiv">' +
      (aktivPerspektiv === 'privat' ? '🏠 Privat klient' : '🏛️ Fagprofessionel') +
      ' — tryk for at skifte</div></div>';

    // Om Rikke
    html += '<div class="menu-section">' +
      '<div class="menu-section-title">Om terapeuten</div>' +
      '<div class="menu-info" style="margin-bottom:10px">Rikke Veth er familieterapeut med praksis på Frederiksberg. Hun arbejder med familier, par og individer — og tilbyder åndedrætsterapi, familiebehandling og supervision til kommuner.</div>' +
      '</div>';

    // Navigation
    html += '<div class="menu-section">' +
      '<div class="menu-section-title">Navigation</div>' +
      '<div class="menu-link" data-nav="hjem">Hjem</div>' +
      '<div class="menu-link" data-nav="trappen">Nervesystemets trappe</div>' +
      '<div class="menu-link" data-nav="temaer">Temaer</div>' +
      '<div class="menu-link" data-nav="oevelser">Øvelser</div>' +
      '</div>';

    // Kontakt
    html += '<div class="menu-section">' +
      '<div class="menu-section-title">Kontakt</div>' +
      '<div class="menu-contact-item"><span class="menu-contact-icon">📞</span>' + PRAKSIS_INFO.telefon + '</div>' +
      '<div class="menu-contact-item"><span class="menu-contact-icon">✉️</span>' + PRAKSIS_INFO.email + '</div>' +
      '<div class="menu-contact-item"><span class="menu-contact-icon">📍</span>' + PRAKSIS_INFO.adresse + '</div>' +
      '<div class="menu-contact-item"><span class="menu-contact-icon">🔢</span>CVR: ' + PRAKSIS_INFO.cvr + '</div>' +
      '</div>';

    // Indstillinger
    html += '<div class="menu-section">' +
      '<div class="menu-section-title">Indstillinger</div>' +
      buildToggle('Daglig påmindelse', 'fp_daily') +
      buildToggle('Morgen check-in', 'fp_morning') +
      buildToggle('Ugentlig opsummering', 'fp_weekly') +
      '</div>';

    // Privatliv
    html += '<div class="menu-section">' +
      '<div class="menu-section-title">Privatliv & data</div>' +
      '<div class="menu-info">Denne app gemmer kun data lokalt på din enhed. Ingen sporing, ingen cookies, ingen tredjeparter.</div>' +
      '</div>';

    menuBody.innerHTML = html;

    // Bind menu events
    var switchBtn = document.getElementById('menuSwitchPerspektiv');
    if (switchBtn) {
      switchBtn.addEventListener('click', function () {
        aktivPerspektiv = aktivPerspektiv === 'privat' ? 'professionel' : 'privat';
        localStorage.setItem('fp_perspektiv', aktivPerspektiv);
        updatePerspektivUI();
        updateCircleTexts();
        renderTrappen();
        renderTemaer();
        renderMenuContent();
        if (aktivCirkel) renderCirkelDetail();
        closeMenu();
      });
    }

    menuBody.querySelectorAll('[data-nav]').forEach(function (link) {
      link.addEventListener('click', function () {
        showView(this.getAttribute('data-nav'));
        closeMenu();
      });
    });
  }

  function buildToggle(label, key) {
    var checked = localStorage.getItem(key) === 'true' ? ' checked' : '';
    return '<div class="menu-toggle-row">' +
      '<span class="menu-toggle-label">' + label + '</span>' +
      '<label class="menu-toggle"><input type="checkbox"' + checked + ' data-setting="' + key + '">' +
      '<span class="menu-toggle-slider"></span></label></div>';
  }

  // ---------- Search ----------
  function openSearch() {
    searchOverlay.classList.add('active');
    setTimeout(function () { searchInput.focus(); }, 100);
  }

  function closeSearch() {
    searchOverlay.classList.remove('active');
    searchInput.value = '';
    searchResults.innerHTML = '';
    searchClear.classList.remove('visible');
  }

  function renderSearchTags() {
    var tags = ['Tilknytning', 'Åndedræt', 'Parforhold', 'Børn', 'Traume', 'Grænser', 'Stress', 'Sorg', 'Kommunikation', 'Nervesystem'];
    var html = '';
    tags.forEach(function (tag) {
      html += '<button class="search-tag">' + tag + '</button>';
    });
    searchTags.innerHTML = html;

    searchTags.querySelectorAll('.search-tag').forEach(function (tag) {
      tag.addEventListener('click', function () {
        searchInput.value = this.textContent;
        searchClear.classList.add('visible');
        performSearch(this.textContent);
      });
    });
  }

  function performSearch(query) {
    if (!query || query.length < 2) {
      searchResults.innerHTML = '';
      return;
    }
    var q = query.toLowerCase();
    var results = [];
    var p = aktivPerspektiv || 'privat';

    // Search circles
    CIRKLER.forEach(function (c) {
      var data = c[p];
      var match = c.titel.toLowerCase().indexOf(q) >= 0 ||
        data.overblik.beskrivelse.toLowerCase().indexOf(q) >= 0 ||
        data.dybde.join(' ').toLowerCase().indexOf(q) >= 0;
      if (match) {
        results.push({
          type: 'Cirkel',
          titel: c.ikon + ' ' + c.titel,
          snippet: data.overblik.beskrivelse.substring(0, 120) + '...',
          action: function () { closeSearch(); showCirkelDetail(c.id); }
        });
      }
    });

    // Search themes
    TEMA_INDHOLD.forEach(function (t) {
      var data = t[p];
      var match = t.titel.toLowerCase().indexOf(q) >= 0 ||
        data.tekst.toLowerCase().indexOf(q) >= 0;
      if (match) {
        results.push({
          type: 'Tema',
          titel: t.ikon + ' ' + t.titel,
          snippet: data.intro,
          action: function () { closeSearch(); showView('temaer'); }
        });
      }
    });

    // Search exercises
    OEVELSER.forEach(function (o) {
      var match = o.titel.toLowerCase().indexOf(q) >= 0 ||
        o.intro.toLowerCase().indexOf(q) >= 0;
      if (match) {
        results.push({
          type: 'Øvelse',
          titel: o.titel,
          snippet: o.intro,
          action: function () { closeSearch(); showView('oevelser'); }
        });
      }
    });

    // Search trappe
    TRAPPEN.forEach(function (t) {
      var data = t[p];
      if (t.navn.toLowerCase().indexOf(q) >= 0 || data.beskrivelse.toLowerCase().indexOf(q) >= 0) {
        results.push({
          type: 'Nervesystem',
          titel: t.navn,
          snippet: data.beskrivelse.substring(0, 120) + '...',
          action: function () { closeSearch(); showView('trappen'); }
        });
      }
    });

    // Search sammenhænge
    SAMMENHAENGE.forEach(function (s) {
      var tekst = s[p] || s.privat;
      if (tekst.toLowerCase().indexOf(q) >= 0) {
        results.push({
          type: 'Sammenhæng',
          titel: (CIRKEL_NAVNE[s.fra] || s.fra) + ' ↔ ' + (CIRKEL_NAVNE[s.til] || s.til),
          snippet: tekst.substring(0, 120) + '...',
          action: function () { closeSearch(); showCirkelDetail(s.fra); }
        });
      }
    });

    // Render
    var html = '';
    if (results.length === 0) {
      html = '<p style="color:var(--text-muted);text-align:center;padding:32px 0;">Ingen resultater for "' + escapeHtml(query) + '"</p>';
    } else {
      results.forEach(function (r, i) {
        html += '<div class="search-result-card" data-result="' + i + '">' +
          '<div class="search-result-type">' + r.type + '</div>' +
          '<div class="search-result-title">' + r.titel + '</div>' +
          '<div class="search-result-snippet">' + r.snippet + '</div>' +
          '</div>';
      });
    }
    searchResults.innerHTML = html;

    // Bind result clicks
    searchResults.querySelectorAll('.search-result-card').forEach(function (card) {
      card.addEventListener('click', function () {
        var idx = parseInt(this.getAttribute('data-result'));
        if (results[idx] && results[idx].action) results[idx].action();
      });
    });
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ---------- Event Binding ----------
  function bindEvents() {
    // Onboarding buttons
    document.querySelectorAll('.onboarding-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        selectPerspektiv(this.getAttribute('data-perspektiv'));
      });
    });

    // Perspektiv switch
    perspektivSwitch.addEventListener('click', function () {
      aktivPerspektiv = aktivPerspektiv === 'privat' ? 'professionel' : 'privat';
      localStorage.setItem('fp_perspektiv', aktivPerspektiv);
      updatePerspektivUI();
      updateCircleTexts();
      renderTrappen();
      renderTemaer();
      renderMenuContent();
      if (aktivCirkel) renderCirkelDetail();
    });

    // Bottom nav
    bottomNav.querySelectorAll('.nav-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        showView(this.getAttribute('data-view'));
      });
    });

    // Circle clicks
    document.querySelectorAll('.cirkel-group').forEach(function (g) {
      g.addEventListener('click', function () {
        var id = this.getAttribute('data-cirkel');
        showCirkelDetail(id);
      });
    });

    // Back button
    document.getElementById('backFromCirkel').addEventListener('click', function () {
      showView('hjem');
    });

    // Menu
    document.querySelector('.menu-btn').addEventListener('click', openMenu);
    menuOverlay.addEventListener('click', closeMenu);
    document.querySelector('.menu-close-btn').addEventListener('click', closeMenu);

    // Search
    document.querySelector('.search-btn').addEventListener('click', openSearch);
    searchInput.addEventListener('input', function () {
      var val = this.value;
      searchClear.classList.toggle('visible', val.length > 0);
      performSearch(val);
    });
    searchClear.addEventListener('click', function () {
      searchInput.value = '';
      searchClear.classList.remove('visible');
      searchResults.innerHTML = '';
      searchInput.focus();
    });

    // Close search on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        if (searchOverlay.classList.contains('active')) closeSearch();
        if (sideMenu.classList.contains('open')) closeMenu();
      }
    });

    // Settings toggles (delegated)
    document.addEventListener('change', function (e) {
      if (e.target.getAttribute('data-setting')) {
        localStorage.setItem(e.target.getAttribute('data-setting'), e.target.checked);
      }
    });
  }

  // ---------- Start ----------
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
