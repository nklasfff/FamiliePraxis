// ============================================================
// FamiliePraxis — App Logic
// Rikke Veth · Familiepraxis · Frederiksberg
// ============================================================

(function () {
  'use strict';

  // ---------- SVG Icon Library ----------
  var SVG_ATTRS = ' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">';
  function svgWrap(size, inner) { return '<svg width="' + size + '" height="' + size + '"' + SVG_ATTRS + inner + '</svg>'; }

  var IKONER = {
    // Cirkler
    leaf:        function(s){ return svgWrap(s||20, '<path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.5 4.5 0 0 0 8 20c4 0 8.5-3 11-8"/><path d="M2 22c1.5-3.5 3-7 6-9.5"/>'); },
    heart:       function(s){ return svgWrap(s||20, '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>'); },
    heartDouble: function(s){ return svgWrap(s||20, '<path d="M16 4a4.5 4.5 0 0 0-4 2.3A4.5 4.5 0 0 0 3 9.5C3 14 8 18 12 21c4-3 9-7 9-11.5A4.5 4.5 0 0 0 16 4z"/><path d="M12 7.3A4.5 4.5 0 0 1 16 4"/>'); },
    homeHeart:   function(s){ return svgWrap(s||20, '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M12 11a2 2 0 0 0-2 2c0 1.5 2 3 2 3s2-1.5 2-3a2 2 0 0 0-2-2z"/>'); },
    butterfly:   function(s){ return svgWrap(s||20, '<path d="M12 3v18"/><path d="M4.5 8c0-3 2-5.5 4.5-5.5 2 0 3 2 3 4.5s-1 4.5-3 4.5C6.5 11.5 4.5 11 4.5 8z"/><path d="M19.5 8c0-3-2-5.5-4.5-5.5-2 0-3 2-3 4.5s1 4.5 3 4.5c2.5 0 4.5-.5 4.5-3.5z"/><path d="M7 15c-1 2-2 4.5 0 5.5s3-1 5-3.5"/><path d="M17 15c1 2 2 4.5 0 5.5s-3-1-5-3.5"/>'); },
    wind:        function(s){ return svgWrap(s||20, '<path d="M9.59 4.59A2 2 0 1 1 11 8H2"/><path d="M12.59 19.41A2 2 0 1 0 14 16H2"/><path d="M17.73 7.73A2.5 2.5 0 1 1 19.5 12H2"/>'); },
    sprout:      function(s){ return svgWrap(s||20, '<path d="M7 20h10"/><path d="M12 20v-8"/><path d="M12 12C12 8 8 5 4 5c0 4 3 7 8 7"/><path d="M12 12c0-4 4-7 8-7-0 4-3 7-8 7"/>'); },

    // Temaer
    chatBubble:  function(s){ return svgWrap(s||20, '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'); },
    heartCrack:  function(s){ return svgWrap(s||20, '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/><path d="M12 8l-2 4h4l-2 4"/>'); },
    shield:      function(s){ return svgWrap(s||20, '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'); },
    lightning:   function(s){ return svgWrap(s||20, '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>'); },
    dove:        function(s){ return svgWrap(s||20, '<path d="M18 8c0-3.3-2.7-6-6-6-1.5 0-2.8.5-3.8 1.5L3 9l4 1-2 4 5-2 1 4 4-5c2.8-.3 5-2.7 5-5.5"/><path d="M12.5 3.5L16 7"/>'); },
    star:        function(s){ return svgWrap(s||20, '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>'); },
    sparkles:    function(s){ return svgWrap(s||20, '<path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5z"/><path d="M18 14l.75 2.25L21 17l-2.25.75L18 20l-.75-2.25L15 17l2.25-.75z"/>'); },

    // Onboarding
    house:       function(s){ return svgWrap(s||24, '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>'); },
    building:    function(s){ return svgWrap(s||24, '<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="9" y1="6" x2="9" y2="6.01"/><line x1="15" y1="6" x2="15" y2="6.01"/><line x1="9" y1="10" x2="9" y2="10.01"/><line x1="15" y1="10" x2="15" y2="10.01"/><line x1="9" y1="14" x2="9" y2="14.01"/><line x1="15" y1="14" x2="15" y2="14.01"/><path d="M9 22v-4h6v4"/>'); },
    handshake:   function(s){ return svgWrap(s||24, '<path d="M17 11h3a2 2 0 0 0 0-4h-3.5L14 4.5 11.5 7 8 4H4a2 2 0 0 0 0 4h3"/><path d="M7 11l3.5 3.5L14 11l3 3"/><path d="M10.5 14.5L8 17l3 3 5-5"/>'); },

    // Kommune metode-kort
    lungs:       function(s){ return svgWrap(s||20, '<path d="M12 4v8"/><path d="M12 12c-3 0-5 2-5 5s1 4 3 4c1.5 0 2-1 2-2V12"/><path d="M12 12c3 0 5 2 5 5s-1 4-3 4c-1.5 0-2-1-2-2"/>'); },
    brain:       function(s){ return svgWrap(s||20, '<path d="M12 2a4 4 0 0 0-4 4c0 1 .5 2 1 2.5"/><path d="M12 2a4 4 0 0 1 4 4c0 1-.5 2-1 2.5"/><path d="M8 8.5A3.5 3.5 0 0 0 5 12c0 1.5 1 2.5 2 3"/><path d="M16 8.5A3.5 3.5 0 0 1 19 12c0 1.5-1 2.5-2 3"/><path d="M7 15a4 4 0 0 0 5 4v-7"/><path d="M17 15a4 4 0 0 1-5 4v-7"/>'); },
    eye:         function(s){ return svgWrap(s||20, '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'); },

    // Kontakt
    phone:       function(s){ return svgWrap(s||16, '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>'); },
    mail:        function(s){ return svgWrap(s||16, '<rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22 7 12 13 2 7"/>'); },
    mapPin:      function(s){ return svgWrap(s||16, '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>'); },
    hash:        function(s){ return svgWrap(s||16, '<line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/>'); },

    // UI & status
    arrowLeftRight: function(s){ return svgWrap(s||18, '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>'); },
    refresh:     function(s){ return svgWrap(s||14, '<polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>'); },
    hourglass:   function(s){ return svgWrap(s||14, '<path d="M5 3h14"/><path d="M5 21h14"/><path d="M7 3v3a5 5 0 0 0 5 5 5 5 0 0 0 5-5V3"/><path d="M7 21v-3a5 5 0 0 1 5-5 5 5 0 0 1 5 5v3"/>'); },
    check:       function(s){ return svgWrap(s||14, '<polyline points="20 6 9 17 4 12"/>'); },
    checkCircle: function(s){ return svgWrap(s||14, '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'); },

    // Navigation
    arrowBack:   function(s){ return svgWrap(s||18, '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>'); },
    chevUp:      function(s){ return svgWrap(s||16, '<polyline points="18 15 12 9 6 15"/>'); },
    chevDown:    function(s){ return svgWrap(s||16, '<polyline points="6 9 12 15 18 9"/>'); },

    // Social
    linkedin:    function(s){ return svgWrap(s||16, '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>'); },

    // Favoritter
    bookmark:    function(s){ return svgWrap(s||18, '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>'); },
    bookmarkFill:function(s){ return '<svg width="'+(s||18)+'" height="'+(s||18)+'" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>'; },
    share:       function(s){ return svgWrap(s||18, '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>'); }
  };

  // ---------- State ----------
  var aktivPerspektiv = localStorage.getItem('fp_perspektiv') || null;
  var aktivCirkel = null;
  var aktivTab = 'overblik';
  var aktivTema = null;
  var aktivTrin = null;
  var isFirstVisit = !localStorage.getItem('fp_visited');

  // ---------- Favoritter ----------
  function getFavoritter() {
    try { return JSON.parse(localStorage.getItem('fp_favoritter') || '[]'); } catch(e) { return []; }
  }

  function saveFavoritter(fav) {
    localStorage.setItem('fp_favoritter', JSON.stringify(fav));
  }

  function isFavorit(type, id) {
    return getFavoritter().some(function(f) { return f.type === type && f.id === id; });
  }

  function toggleFavorit(type, id, titel) {
    var fav = getFavoritter();
    var idx = -1;
    fav.forEach(function(f, i) { if (f.type === type && f.id === id) idx = i; });
    if (idx >= 0) {
      fav.splice(idx, 1);
    } else {
      fav.push({ type: type, id: id, titel: titel, dato: new Date().toISOString().slice(0,10) });
    }
    saveFavoritter(fav);
    return idx < 0; // true if added, false if removed
  }

  function buildActionBar(type, id, titel, shareText) {
    var saved = isFavorit(type, id);
    return '<div class="action-bar" data-action-type="' + type + '" data-action-id="' + id + '" data-action-titel="' + escapeAttr(titel) + '" data-action-share="' + escapeAttr(shareText || titel) + '">' +
      '<button class="action-btn action-btn-save' + (saved ? ' active' : '') + '" title="' + (saved ? 'Fjern fra favoritter' : 'Gem som favorit') + '">' +
      (saved ? IKONER.bookmarkFill(16) : IKONER.bookmark(16)) +
      '<span>' + (saved ? 'Gemt' : 'Gem') + '</span></button>' +
      '<button class="action-btn action-btn-share" title="Del">' +
      IKONER.share(16) + '<span>Del</span></button>' +
      '</div>';
  }

  function escapeAttr(str) {
    return (str || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;');
  }

  function bindActionBars(container) {
    container.querySelectorAll('.action-bar').forEach(function(bar) {
      var type = bar.getAttribute('data-action-type');
      var id = bar.getAttribute('data-action-id');
      var titel = bar.getAttribute('data-action-titel');
      var shareText = bar.getAttribute('data-action-share');

      var saveBtn = bar.querySelector('.action-btn-save');
      saveBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        var added = toggleFavorit(type, id, titel);
        this.classList.toggle('active', added);
        this.innerHTML = (added ? IKONER.bookmarkFill(16) : IKONER.bookmark(16)) + '<span>' + (added ? 'Gemt' : 'Gem') + '</span>';
        this.title = added ? 'Fjern fra favoritter' : 'Gem som favorit';
        // Update menu badge
        updateFavoritBadge();
      });

      var shareBtn = bar.querySelector('.action-btn-share');
      shareBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (navigator.share) {
          navigator.share({ title: 'Familiepraxis — ' + titel, text: shareText, url: window.location.href });
        } else {
          // Fallback: copy text
          var ta = document.createElement('textarea');
          ta.value = titel + '\n\n' + shareText + '\n\nFra Familiepraxis-appen';
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
          // Visual feedback
          var span = this.querySelector('span');
          span.textContent = 'Kopieret';
          var self = this;
          setTimeout(function() { span.textContent = 'Del'; }, 1500);
        }
      });
    });
  }

  function updateFavoritBadge() {
    var badge = document.getElementById('favoritBadge');
    if (!badge) return;
    var count = getFavoritter().length;
    badge.textContent = count;
    badge.style.display = count > 0 ? 'inline-flex' : 'none';
  }

  // ---------- DOM refs ----------
  var onboarding = document.getElementById('onboarding');
  var appMain = document.getElementById('appMain');
  var perspektivBar = document.getElementById('perspektivBar');
  var perspektivLabel = document.getElementById('perspektivLabel');
  var perspektivSwitch = document.getElementById('perspektivSwitch');
  var heroDesc = document.getElementById('heroDesc');
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
    // Migrer gamle kommune-perspektiv til professionel
    if (aktivPerspektiv === 'kommune') {
      aktivPerspektiv = 'professionel';
      localStorage.setItem('fp_perspektiv', 'professionel');
      localStorage.setItem('fp_from_kommune', 'true');
    }
    if (aktivPerspektiv) {
      hideOnboarding(true);
      updatePerspektivUI();
      updateHeroDesc();
    }
    bindEvents();
    renderMenuContent();
    renderSearchTags();
    if (aktivPerspektiv) {
      animateCircles();
      updateCircleTexts();
    }
    renderTrappen();
    renderTemaer();
    renderOevelser();
    renderMuligt();
    bindMuligtForm();
    drawConnectionLines();
    renderMorgenCheckin();
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
    var isKommune = (p === 'kommune');
    // Kommune er ikke et perspektiv — det er en side. Brug professionel indhold.
    aktivPerspektiv = isKommune ? 'professionel' : p;
    localStorage.setItem('fp_perspektiv', aktivPerspektiv);
    if (isKommune) localStorage.setItem('fp_from_kommune', 'true');
    localStorage.setItem('fp_visited', 'true');
    isFirstVisit = true;
    hideOnboarding(false);
    updatePerspektivUI();
    updateHeroDesc();
    animateCircles();
    updateCircleTexts();
    renderTrappen();
    renderTemaer();
    renderOevelser();
    renderMenuContent();
    if (isKommune) {
      renderKommune();
      showView('kommune');
      document.querySelectorAll('.nav-btn').forEach(function (b) { b.classList.remove('active'); });
    } else {
      // Vis hjem med velkomsttekst
      showView('hjem');
    }
  }

  // Helper: get content perspective key
  function contentPerspektiv() {
    return aktivPerspektiv || 'privat';
  }

  function updatePerspektivUI() {
    var labels = { privat: 'Privat klient', professionel: 'Fagprofessionel' };
    perspektivLabel.textContent = labels[aktivPerspektiv] || 'Privat klient';
  }

  function updateHeroDesc() {
    if (!heroDesc) return;
    if (aktivPerspektiv === 'professionel') {
      heroDesc.textContent = 'Velkommen. Her finder du det faglige fundament bag Rikkes arbejde — nervesystemet, tilknytning, kommunikation og de øvelser hun bruger i terapi med familier, par og individer. Brug appen som inspiration, opslagsværk eller som supplement til supervision.';
    } else {
      heroDesc.textContent = 'Velkommen. Denne app er dit rum — et stille sted, hvor du kan udforske det, der fylder i din familie, dit parforhold eller i dig selv. Tryk på en cirkel for at begynde, eller brug menuen til at finde øvelser, temaer og redskaber.';
    }
  }

  // ---------- Morgen Check-in ----------
  function renderMorgenCheckin() {
    var container = document.getElementById('morgenCheckin');
    if (!container) return;

    // Only show if morning check-in is enabled
    if (localStorage.getItem('fp_morning') !== 'true') {
      container.style.display = 'none';
      return;
    }

    // Only show between 5:00 and 11:00
    var hour = new Date().getHours();
    if (hour < 5 || hour >= 11) {
      container.style.display = 'none';
      return;
    }

    // Check if already dismissed today
    var today = new Date().toISOString().slice(0, 10);
    if (localStorage.getItem('fp_checkin_dismissed') === today) {
      container.style.display = 'none';
      return;
    }

    // Select variant based on day of year (deterministic — same for all users)
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var dayOfYear = Math.floor((now - start) / 86400000);
    var variantIndex = dayOfYear % MORGEN_CHECKIN.length;
    var variant = MORGEN_CHECKIN[variantIndex];

    // Get greeting based on day of week + season
    var dage = ['soendag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'loerdag'];
    var dagKey = dage[now.getDay()];
    var maaned = now.getMonth(); // 0-11
    var saesonKey = maaned >= 2 && maaned <= 4 ? 'foraar' : maaned >= 5 && maaned <= 7 ? 'sommer' : maaned >= 8 && maaned <= 10 ? 'efteraar' : 'vinter';
    // Alternate between day greeting and season greeting
    var hilsen = dayOfYear % 2 === 0 ? MORGEN_HILSNER[dagKey] : MORGEN_HILSNER[saesonKey];

    // Render question state
    var html = '<div class="morgen-inner">';
    html += '<button class="morgen-close" id="morgenClose">&times;</button>';
    html += '<div class="morgen-icon">' + IKONER.sprout(28) + '</div>';
    html += '<div class="morgen-hilsen">' + hilsen + '</div>';
    html += '<div class="morgen-spoergsmaal">' + variant.spoergsmaal + '</div>';
    html += '<div class="morgen-svar-wrap">';
    for (var i = 0; i < variant.svar.length; i++) {
      html += '<button class="morgen-svar-btn" data-svar-idx="' + i + '">' + variant.svar[i].label + '</button>';
    }
    html += '</div></div>';

    container.innerHTML = html;
    container.style.display = 'block';

    // Bind close button
    document.getElementById('morgenClose').addEventListener('click', function () {
      localStorage.setItem('fp_checkin_dismissed', today);
      container.style.opacity = '0';
      container.style.transition = 'opacity 0.4s';
      setTimeout(function () { container.style.display = 'none'; }, 400);
    });

    // Bind answer buttons
    container.querySelectorAll('.morgen-svar-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var idx = parseInt(this.getAttribute('data-svar-idx'));
        var svar = variant.svar[idx];
        showMorgenRespons(container, svar, today);
      });
    });
  }

  function showMorgenRespons(container, svar, today) {
    var html = '<div class="morgen-inner morgen-respons-state">';
    html += '<button class="morgen-close" id="morgenCloseRespons">&times;</button>';
    html += '<div class="morgen-icon">' + IKONER.sprout(28) + '</div>';
    html += '<div class="morgen-respons-tekst">' + svar.respons + '</div>';
    html += '<button class="morgen-link-btn" data-morgen-nav="' + svar.link + '">' + svar.linkTekst + ' &rarr;</button>';
    html += '</div>';

    container.innerHTML = html;

    // Bind close
    document.getElementById('morgenCloseRespons').addEventListener('click', function () {
      localStorage.setItem('fp_checkin_dismissed', today);
      container.style.opacity = '0';
      container.style.transition = 'opacity 0.4s';
      setTimeout(function () { container.style.display = 'none'; }, 400);
    });

    // Bind navigation link
    container.querySelector('.morgen-link-btn').addEventListener('click', function () {
      var nav = this.getAttribute('data-morgen-nav');
      localStorage.setItem('fp_checkin_dismissed', today);
      container.style.display = 'none';
      showView(nav);
    });
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
    var tekster = CIRKEL_TEKSTER[contentPerspektiv()];
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
      relationer: [260, 95],
      parterapi: [403, 175],
      familie: [403, 345],
      boern: [260, 425],
      aandedraet: [117, 345],
      individuel: [117, 175]
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

    // Reset all expanded/active states when leaving a view
    if (viewName !== 'cirkelDetalje') {
      aktivCirkel = null;
      aktivTab = 'overblik';
    }
    if (viewName !== 'trappen' && aktivTrin !== null) {
      aktivTrin = null;
      renderTrappen();
    }
    if (viewName !== 'temaer' && aktivTema !== null) {
      aktivTema = null;
      renderTemaer();
    }
    if (viewName !== 'oevelser') {
      var oevelseList = document.getElementById('oevelseList');
      if (oevelseList) {
        oevelseList.querySelectorAll('.oevelse-card.active').forEach(function (c) { c.classList.remove('active'); });
      }
    }
    // Skjul muligt-formularen hvis vi forlader den side
    if (viewName !== 'muligt') {
      var addForm = document.getElementById('muligtAddForm');
      if (addForm) addForm.style.display = 'none';
    }

    // Ensure kommune content is rendered when navigating to it
    if (viewName === 'kommune') {
      renderKommune();
    }
    // Ensure dynamik content is rendered when navigating to it
    if (viewName === 'dynamik') {
      renderDynamik();
    }

    // Scroll to top on view change
    if (appMain) appMain.scrollTop = 0;
    window.scrollTo(0, 0);
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
    var p = contentPerspektiv();
    var data = cirkel[p];
    var container = document.getElementById('cirkelDetaljeContent');

    var html = '<div class="cirkel-detail-header">' +
      '<span class="cirkel-detail-ikon">' + (IKONER[cirkel.ikon] ? IKONER[cirkel.ikon](28) : cirkel.ikon) + '</span>' +
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
      html += buildActionBar('fordybelse', aktivCirkel, cirkel.titel + ' — Fordybelse', data.dybde.join('\n\n'));
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
    bindActionBars(container);
  }

  // ---------- Trappen ----------
  function renderTrappen() {
    var container = document.getElementById('trappeContainer');
    if (!container) return;
    var p = contentPerspektiv();
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
      html += '</ul>' + buildActionBar('trappen', trin.navn, trin.navn, data.beskrivelse) + '</div></div></div>';
    });

    container.innerHTML = html;

    container.querySelectorAll('.trappe-trin').forEach(function (trin) {
      trin.addEventListener('click', function (e) {
        if (e.target.closest('.action-bar')) return;
        var trinNum = parseInt(this.getAttribute('data-trin'));
        aktivTrin = aktivTrin === trinNum ? null : trinNum;
        renderTrappen();
      });
    });
    bindActionBars(container);
  }

  // ---------- Temaer ----------
  function renderTemaer() {
    var grid = document.getElementById('temaGrid');
    if (!grid) return;
    var p = contentPerspektiv();
    var html = '';

    TEMA_INDHOLD.forEach(function (tema) {
      var data = tema[p];
      var isActive = aktivTema === tema.id;
      html += '<div class="tema-card' + (isActive ? ' active' : '') + '" data-tema="' + tema.id + '">' +
        '<div class="tema-ikon">' + (IKONER[tema.ikon] ? IKONER[tema.ikon](24) : tema.ikon) + '</div>' +
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
      html += buildActionBar('oevelse', oev.titel, oev.titel, oev.intro + '\n\n' + oev.trin.join('\n'));
      html += '</div></div></div>';
    });

    list.innerHTML = html;

    list.querySelectorAll('.oevelse-card').forEach(function (card) {
      card.addEventListener('click', function (e) {
        if (e.target.closest('.action-bar')) return; // Don't toggle card when clicking action bar
        var wasActive = this.classList.contains('active');
        list.querySelectorAll('.oevelse-card').forEach(function (c) { c.classList.remove('active'); });
        if (!wasActive) this.classList.add('active');
      });
    });
    bindActionBars(list);
  }

  // ---------- Nyhedsbrev ----------
  function renderNyhedsbrev() {
    var container = document.getElementById('nyhedsbrevContent');
    if (!container) return;

    var tilmeldt = localStorage.getItem('fp_nyhedsbrev_email');

    if (!tilmeldt) {
      // Tilmeldingsformular
      container.innerHTML =
        '<div class="nyhedsbrev-signup">' +
          '<div class="nyhedsbrev-hero">' +
            '<div class="nyhedsbrev-hero-icon">' +
              '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">' +
                '<rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22 7 12 13 2 7"/>' +
              '</svg>' +
            '</div>' +
            '<h2 class="nyhedsbrev-title">Rikkes Nyhedsbrev</h2>' +
            '<p class="nyhedsbrev-subtitle">Modtag indsigt, øvelser og refleksioner om familieliv, relationer og nervesystemet — direkte fra Rikke.</p>' +
          '</div>' +
          '<div class="nyhedsbrev-gave-preview">' +
            '<div class="nyhedsbrev-gave-badge">Gave ved tilmelding</div>' +
            '<h3 class="nyhedsbrev-gave-title">Rytmen i alt — et personligt brev fra Rikke Veth</h3>' +
            '<p class="nyhedsbrev-gave-desc">Fra trommeslager til terapeut. Rikke fortæller om sin rejse — fra scenen til terapilokalet — og de fem ting, musikken lærte hende om at møde mennesker. Med fem illustrationer.</p>' +
          '</div>' +
          '<form class="nyhedsbrev-form" id="nyhedsbrevForm">' +
            '<input type="email" class="nyhedsbrev-input" id="nyhedsbrevEmail" placeholder="Din e-mailadresse" required>' +
            '<button type="submit" class="nyhedsbrev-btn">Tilmeld & modtag mini-bog</button>' +
            '<p class="nyhedsbrev-privacy">Ingen spam. Kun indhold med mening. Du kan altid afmelde dig.</p>' +
          '</form>' +
        '</div>';

      var form = document.getElementById('nyhedsbrevForm');
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var email = document.getElementById('nyhedsbrevEmail').value.trim();
        if (!email) return;
        localStorage.setItem('fp_nyhedsbrev_email', email);
        renderNyhedsbrev();
      });
    } else {
      // Vis mini-bogen
      container.innerHTML = buildMiniBog();
    }
  }

  function buildMiniBog() {
    // Simple, abstrakte illustrationer — geometriske former i appens farver
    // 1: Koncentriske cirkler (rytme, puls)
    var ill1 = '<svg class="bog-ill" viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg">' +
      '<rect width="240" height="120" rx="12" fill="var(--primary-pale)"/>' +
      '<circle cx="120" cy="60" r="10" stroke="var(--primary)" stroke-width="1.5" fill="none"/>' +
      '<circle cx="120" cy="60" r="22" stroke="var(--primary)" stroke-width="1" fill="none" opacity="0.6"/>' +
      '<circle cx="120" cy="60" r="34" stroke="var(--primary)" stroke-width="0.8" fill="none" opacity="0.35"/>' +
      '<circle cx="120" cy="60" r="46" stroke="var(--primary)" stroke-width="0.5" fill="none" opacity="0.15"/>' +
      '</svg>';

    // 2: To lodrette streger der nærmer sig hinanden (lytte, pause)
    var ill2 = '<svg class="bog-ill" viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg">' +
      '<rect width="240" height="120" rx="12" fill="var(--amber-bg)"/>' +
      '<line x1="105" y1="30" x2="105" y2="90" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/>' +
      '<line x1="135" y1="30" x2="135" y2="90" stroke="var(--primary)" stroke-width="2" stroke-linecap="round"/>' +
      '<circle cx="120" cy="60" r="3" fill="var(--primary)" opacity="0.3"/>' +
      '</svg>';

    // 3: Tre bølgelinjer (åndedræt, krop)
    var ill3 = '<svg class="bog-ill" viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg">' +
      '<rect width="240" height="120" rx="12" fill="var(--sage-bg)"/>' +
      '<path d="M50 45 Q95 30 120 45 Q145 60 190 45" stroke="var(--sage)" stroke-width="1.5" fill="none" stroke-linecap="round"/>' +
      '<path d="M50 60 Q95 45 120 60 Q145 75 190 60" stroke="var(--primary)" stroke-width="1.5" fill="none" stroke-linecap="round"/>' +
      '<path d="M50 75 Q95 60 120 75 Q145 90 190 75" stroke="var(--sage)" stroke-width="1.5" fill="none" stroke-linecap="round"/>' +
      '</svg>';

    // 4: Brudt cirkel der samles (fortælling, heling)
    var ill4 = '<svg class="bog-ill" viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg">' +
      '<rect width="240" height="120" rx="12" fill="var(--rose-bg)"/>' +
      '<path d="M88 40 A35 35 0 0 1 152 40" stroke="var(--rose)" stroke-width="1.5" fill="none" stroke-linecap="round"/>' +
      '<path d="M152 80 A35 35 0 0 1 88 80" stroke="var(--primary)" stroke-width="1.5" fill="none" stroke-linecap="round"/>' +
      '<circle cx="88" cy="60" r="2.5" fill="var(--rose)" opacity="0.5"/>' +
      '<circle cx="152" cy="60" r="2.5" fill="var(--primary)" opacity="0.5"/>' +
      '</svg>';

    // 5: Enkelt spire/blad (vækst, begyndelse)
    var ill5 = '<svg class="bog-ill" viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg">' +
      '<rect width="240" height="120" rx="12" fill="var(--primary-pale)"/>' +
      '<line x1="120" y1="95" x2="120" y2="55" stroke="var(--primary)" stroke-width="1.5" stroke-linecap="round"/>' +
      '<path d="M120 55 Q110 40 100 35 Q115 40 120 55" stroke="var(--primary)" stroke-width="1.2" fill="var(--primary)" opacity="0.15"/>' +
      '<path d="M120 65 Q130 50 140 45 Q125 52 120 65" stroke="var(--sage)" stroke-width="1.2" fill="var(--sage)" opacity="0.15"/>' +
      '</svg>';

    return '<div class="minibog">' +
      '<div class="minibog-header">' +
        '<div class="minibog-badge">Din gave</div>' +
        '<h2 class="minibog-titel">Rytmen i alt</h2>' +
        '<p class="minibog-author">Et personligt brev af Rikke Veth</p>' +
        '<p class="minibog-intro">Fra trommestolens puls til terapirummets stilhed. Om det, musikken lærte mig — og det, børnene lærte mig bagefter.</p>' +
      '</div>' +

      '<div class="minibog-kapitel">' +
        '<p class="minibog-aabning">Kære dig.</p>' +
        '<p>Jeg ved ikke, hvem du er. Måske er du en forælder, der ligger vågen om natten og spekulerer på, om du gør det godt nok. Måske er du en fagperson, der bærer andres tunge historier med hjem. Eller måske er du bare et menneske, der leder efter noget, der giver mening.</p>' +
        '<p>Jeg vil gerne fortælle dig noget. Ikke en teori. Ikke en metode. Men en historie — min historie — og de fem ting, den lærte mig om at møde mennesker.</p>' +
        '<p>Den begynder med en tromme.</p>' +
      '</div>' +

      // Kapitel 1
      '<div class="minibog-kapitel">' +
        ill1 +
        '<h3 class="minibog-kap-titel">Alt har en rytme</h3>' +
        '<p>Som ung var jeg trommeslager. Ikke sådan lidt — det var alt, jeg var. Jeg spillede med nogle af de bedste bands i Danmark, og der var noget ved det, der fangede mig dybere end musikken selv. Det var <em>samspillet</em>. Følelsen af at sidde bag trommerne og mærke, hvordan hele bandet åndede sammen.</p>' +
        '<p>En trommeslager styrer ikke musikken. Hun lytter. Hun mærker, hvor de andre er på vej hen, og så møder hun dem der. Nogle gange skal rytmen bære. Andre gange skal den trække sig. Det kræver noget, som ingen musikteori kan lære dig: evnen til at mærke rummet.</p>' +
        '<p>Mange år senere sidder jeg i mit terapilokale med en familie, der er gået i stå. Og pludselig genkender jeg det. Familien har en rytme — ligesom et band. Når den ene taler, tier den anden. Når barnet larmer, trækker moderen sig. Der er et mønster. Ikke kaos. Mønster. Og som med musik: man kan ikke ændre rytmen, før man har hørt den.</p>' +
        '<p>Det var det første, trommerne lærte mig: Alt har en rytme. Også smerte. Også familier. Og forandring begynder med at lytte til den rytme, der allerede er der.</p>' +
      '</div>' +

      // Kapitel 2
      '<div class="minibog-kapitel">' +
        ill2 +
        '<h3 class="minibog-kap-titel">Pausen er det vigtigste slag</h3>' +
        '<p>I musik er det ikke tonerne, der skaber følelse. Det er pauserne. Stilheden mellem slagene. Den tomhed, der giver det næste slag sin kraft. Enhver trommeslager ved det: det du <em>ikke</em> spiller, er lige så vigtigt som det, du spiller.</p>' +
        '<p>Det har taget mig år at forstå, at det samme gælder, når man sidder overfor et barn, der ikke vil tale. En 8-årig dreng, der trækker hætten ned over øjnene og kigger i gulvet. Førhen ville jeg have stillet spørgsmål. Prøvet at finde vej ind. Nu ved jeg: pausen er vejen ind. At tåle stilheden. At lade den vare. At vise barnet, at jeg kan holde rummet, også når det er tomt.</p>' +
        '<p>For mange af de børn, jeg møder, har aldrig oplevet en voksen, der bare var der uden at ville noget. Uden at dømme, instruere eller reparere. Bare var der. Den oplevelse er ikke ingenting. For et barn, der har levet i larm og uro, er den alt.</p>' +
        '<p>I et band lærte jeg at spille pausen. I terapirummet lærte jeg, at pausen er der, hvor tilliden vokser.</p>' +
      '</div>' +

      // Kapitel 3
      '<div class="minibog-kapitel">' +
        ill3 +
        '<h3 class="minibog-kap-titel">Kroppen ved det først</h3>' +
        '<p>Når du spiller trommer, tænker du ikke. Du mærker. Dine hænder og fødder ved, hvad de skal, før din hjerne når at formulere det. Musikken bor i kroppen — i musklerne, i åndedrættet, i den puls, der synkroniserer sig med de andre i bandet.</p>' +
        '<p>Det tog mig lang tid at forstå, at det samme gælder for smerte. Traumer bor ikke i hovedet. De bor i kroppen. I det åndedræt, der aldrig helt slipper. I skuldrene, der altid er oppe ved ørerne. I maven, der knuger sig sammen, når stemmen bliver en anelse for høj.</p>' +
        '<p>Jeg mødte engang en pige på 14, der ikke kunne sætte ord på, hvad der var sket i hendes familie. Men hendes krop kunne. Hendes vejrtrækning blev flad og hurtig, når vi nærmede os det svære. Hendes hænder knyttede sig. Det var ikke modstand. Det var hendes krop, der fortalte sin historie. Og da vi begyndte at lytte til kroppen i stedet for at insistere på ord, åbnede der sig noget.</p>' +
        '<p>Åndedrættet er den mest direkte vej til nervesystemet. Det vidste jeg fra musikken — at ånde med rytmen, lade kroppen finde sin puls. Nu bruger jeg det hver dag: at hjælpe mennesker med at finde den vejrtrækning, der fortæller deres krop, at det er trygt nu. At faren er overstået. At de må lande.</p>' +
      '</div>' +

      // Kapitel 4
      '<div class="minibog-kapitel">' +
        ill4 +
        '<h3 class="minibog-kap-titel">Historien bag larmen</h3>' +
        '<p>I et band er der altid én, der spiller for højt. Og den uerfarne reaktion er irritation. Men en god musiker spørger: <em>Hvorfor</em> spiller han for højt? Er han usikker? Kan han ikke høre sig selv? Er monitoren i stykker? Problemet er sjældent det, det ligner.</p>' +
        '<p>Det samme gælder børn. Det barn, der slår, råber eller vælter møblerne — det barn, som alle er trætte af — det barn spiller for højt, fordi det ikke kan høre sig selv. Fordi ingen har lyttet til det, det faktisk prøver at sige. Adfærden er ikke problemet. Adfærden er kommunikation.</p>' +
        '<p>Jeg husker en dreng på 9. Skolens "vanskelige barn." Tre underretninger. To skoleskift. Alle havde fokuseret på hans vrede. Ingen havde spurgt, hvad der lå bag den. Da jeg endelig sad med ham — efter uger med stille tegning og pausen, der gjorde ham tryg — sagde han noget, jeg aldrig glemmer: "Jeg råber, fordi det er det eneste, der er højt nok til at nogen hører det."</p>' +
        '<p>Hver familie har en fortælling om sig selv. "Vi er dem, der altid har problemer." "I vores familie klarer man sig selv." De fortællinger er ikke sandheder — de er historier. Og historier kan genfortælles. Når vi hjælper et barn med at finde en ny fortælling om sig selv, ændrer vi ikke bare barnet. Vi ændrer hele familiens partitur.</p>' +
      '</div>' +

      // Kapitel 5
      '<div class="minibog-kapitel">' +
        ill5 +
        '<h3 class="minibog-kap-titel">Mennesket før partituret</h3>' +
        '<p>De bedste koncerter, jeg spillede, var dem, hvor vi lagde partituret væk. Hvor vi stoppede med at tænke over, hvad vi <em>skulle</em> spille, og bare lyttede til hinanden. Hvor teknikken forsvandt, og kun musikken var tilbage.</p>' +
        '<p>Det er det sidste og vigtigste, musikken lærte mig: mennesket kommer før metoden. Altid. Jeg har læst bøgerne. Jeg kender teorierne. Narrativ terapi, systemisk familieterapi, polyvagal regulering, mentaliseringsbaseret behandling. Det er mine redskaber, og de er gode. Men de er ikke det, der helbreder.</p>' +
        '<p>Det, der helbreder, er mødet. Øjeblikket, hvor et andet menneske mærker, at det bliver set. Virkelig set. Ikke som en diagnose, en sag eller et problem — men som et menneske. Det øjeblik kan ingen manual skabe. Det opstår, når jeg lægger partituret væk og bare er til stede med det, der er.</p>' +
        '<p>For de børn og unge, der er mit hjerteblod i dette arbejde, er det ofte det allervigtigste: en voksen, der ser dem som dem, de er — ikke som dem, de er blevet gjort til. En voksen, der tror på, at der bag al den larm, al den stilhed, al den smerte, er et menneske, der bare gerne vil høres.</p>' +
      '</div>' +

      '<div class="minibog-footer">' +
        '<p class="minibog-footer-text">Jeg lagde trommestikkerne fra mig for mange år siden. Men rytmen har jeg aldrig sluppet. Den banker stadig — i hvert møde, i hvert åndedrag, i hvert øjeblik af stilhed, der langsomt fylder sig med tillid.</p>' +
        '<p class="minibog-footer-text">Hvis du kender et barn, der spiller for højt — eller for stille — så vid, at der er en historie bag. Og at den historie kan få et nyt kapitel.</p>' +
        '<p class="minibog-footer-sign">Med varme fra terapilokalet på Frederiksberg,<br><strong>Rikke Veth</strong><br>Familieterapeut · Familiepraxis</p>' +
      '</div>' +
    '</div>';
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

    // Perspektiv info + skift (kun privat/professionel)
    var perspIkon = aktivPerspektiv === 'privat' ? IKONER.house(16) : IKONER.building(16);
    var perspNavn = aktivPerspektiv === 'privat' ? 'Privat klient' : 'Fagprofessionel';
    html += '<div class="menu-section">' +
      '<div class="menu-section-title">Dit perspektiv</div>' +
      '<div class="menu-info" style="margin-bottom:8px">' + perspIkon + ' ' + perspNavn + '</div>' +
      '<div class="menu-link" id="menuSwitchPerspektiv">' + IKONER.arrowLeftRight(15) + ' Skift perspektiv</div></div>';

    // Om Rikke
    html += '<div class="menu-section">' +
      '<div class="menu-section-title" style="text-align:center">Om terapeuten</div>' +
      '<div style="text-align:center;margin-bottom:12px"><img src="img/rikke-veth.png" alt="Rikke Veth" class="menu-terapeut-foto"></div>' +
      '<div class="menu-info" style="margin-bottom:10px">Rikke Veth er familieterapeut med mange års erfaring i arbejdet med udsatte familier og børn. Hun tilbyder familieterapi, parterapi, individuel terapi og åndedrætsterapi for private — og familiebehandling, undersøgelser og supervision til kommuner. Hendes styrke ligger i at skabe udvikling, hvor følelser, kommunikation og samspil går i hårdknude.</div>' +
      '</div>';

    // Navigation
    var favCount = getFavoritter().length;
    html += '<div class="menu-section">' +
      '<div class="menu-section-title">Navigation</div>' +
      '<div class="menu-link" data-nav="hjem">Hjem</div>' +
      '<div class="menu-link" data-nav="trappen">Nervesystemets trappe</div>' +
      '<div class="menu-link" data-nav="temaer">Temaer</div>' +
      '<div class="menu-link" data-nav="oevelser">Øvelser</div>' +
      '<div class="menu-link" data-nav="muligt">Hvad er muligt lige nu?</div>' +
      '<div class="menu-link" data-nav="kommune">' + IKONER.handshake(15) + ' Samarbejde med kommuner</div>' +
      '<div class="menu-link menu-link-favoritter" id="menuFavoritter">' + IKONER.bookmark(15) + ' Mine favoritter <span class="menu-favorit-badge" id="favoritBadge" style="' + (favCount > 0 ? '' : 'display:none') + '">' + favCount + '</span></div>' +
      '</div>';

    // Kontakt
    html += '<div class="menu-section">' +
      '<div class="menu-section-title">Kontakt</div>' +
      '<div class="menu-contact-item"><span class="menu-contact-icon">' + IKONER.phone(15) + '</span>' + PRAKSIS_INFO.telefon + '</div>' +
      '<div class="menu-contact-item"><span class="menu-contact-icon">' + IKONER.mail(15) + '</span>' + PRAKSIS_INFO.email + '</div>' +
      '<div class="menu-contact-item"><span class="menu-contact-icon">' + IKONER.mapPin(15) + '</span>' + PRAKSIS_INFO.adresse + '</div>' +
      '<div class="menu-contact-item"><span class="menu-contact-icon">' + IKONER.hash(15) + '</span>CVR: ' + PRAKSIS_INFO.cvr + '</div>' +
      '<a href="https://linkedin.com/in/rikke-veth-63940b8" target="_blank" rel="noopener" class="menu-contact-item menu-contact-link"><span class="menu-contact-icon">' + IKONER.linkedin(15) + '</span>LinkedIn</a>' +
      '<div class="menu-contact-item menu-contact-link menu-nyhedsbrev-link" id="menuNyhedsbrev"><span class="menu-contact-icon">' + IKONER.mail(15) + '</span>Tilmeld dig mit nyhedsbrev</div>' +
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
        // Kun to perspektiver: privat og professionel
        aktivPerspektiv = aktivPerspektiv === 'privat' ? 'professionel' : 'privat';
        localStorage.setItem('fp_perspektiv', aktivPerspektiv);
        updatePerspektivUI();
        updateHeroDesc();
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

    var favLink = document.getElementById('menuFavoritter');
    if (favLink) {
      favLink.addEventListener('click', function () {
        showFavoritter();
        closeMenu();
      });
    }

    var nyhedsbrevLink = document.getElementById('menuNyhedsbrev');
    if (nyhedsbrevLink) {
      nyhedsbrevLink.addEventListener('click', function () {
        renderNyhedsbrev();
        showView('nyhedsbrev');
        closeMenu();
      });
    }
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
    var p = contentPerspektiv();

    // Search circles
    CIRKLER.forEach(function (c) {
      var data = c[p];
      var match = c.titel.toLowerCase().indexOf(q) >= 0 ||
        data.overblik.beskrivelse.toLowerCase().indexOf(q) >= 0 ||
        data.dybde.join(' ').toLowerCase().indexOf(q) >= 0;
      if (match) {
        results.push({
          type: 'Cirkel',
          titel: (IKONER[c.ikon] ? IKONER[c.ikon](16) : '') + ' ' + c.titel,
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
          titel: (IKONER[t.ikon] ? IKONER[t.ikon](16) : '') + ' ' + t.titel,
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

  // ---------- Hvad er muligt lige nu ----------
  var MULIGT_DEFAULTS = [
    { id: 'okonomi', titel: 'Økonomi', farve: 'amber', status: 'none', note: '' },
    { id: 'boern', titel: 'Børnene', farve: 'sage', status: 'none', note: '' },
    { id: 'folelser', titel: 'Følelser & relationer', farve: 'rose', status: 'none', note: '' },
    { id: 'kommunen', titel: 'Kommunen & systemet', farve: 'stone', status: 'none', note: '' },
    { id: 'bolig', titel: 'Bolig & hverdag', farve: 'amber', status: 'none', note: '' },
    { id: 'krop', titel: 'Krop & helbred', farve: 'sage', status: 'none', note: '' }
  ];

  function getMuligtData() {
    var saved = localStorage.getItem('fp_muligt');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return MULIGT_DEFAULTS.map(function (d) { return Object.assign({}, d); });
  }

  function saveMuligtData(data) {
    localStorage.setItem('fp_muligt', JSON.stringify(data));
  }

  function renderMuligt() {
    var board = document.getElementById('muligtBoard');
    if (!board) return;
    var data = getMuligtData();

    var statusLabels = {
      'none': '',
      'working': 'Under arbejde',
      'waiting': 'Vi venter',
      'temp': 'For nu',
      'done': 'Løst'
    };

    var statusIcons = {
      'none': '<span class="muligt-check muligt-check-empty"></span>',
      'working': '<span class="muligt-check muligt-check-working">' + IKONER.refresh(14) + '</span>',
      'waiting': '<span class="muligt-check muligt-check-waiting">' + IKONER.hourglass(14) + '</span>',
      'temp': '<span class="muligt-check muligt-check-temp">' + IKONER.check(14) + '</span>',
      'done': '<span class="muligt-check muligt-check-done">' + IKONER.checkCircle(14) + '</span>'
    };

    var html = '';
    data.forEach(function (item, idx) {
      var statusClass = 'muligt-status-' + item.status;
      html += '<div class="muligt-card muligt-farve-' + item.farve + ' ' + statusClass + '" data-idx="' + idx + '">';
      html += '<div class="muligt-card-header">';
      html += '<div class="muligt-card-check" data-idx="' + idx + '">' + statusIcons[item.status] + '</div>';
      html += '<h3 class="muligt-card-titel">' + item.titel + '</h3>';
      html += '<button class="muligt-card-delete" data-idx="' + idx + '" title="Fjern">&times;</button>';
      html += '</div>';
      if (item.status !== 'none') {
        html += '<div class="muligt-card-badge">' + statusLabels[item.status] + '</div>';
      }
      html += '<div class="muligt-card-note-wrap">';
      html += '<textarea class="muligt-card-note" data-idx="' + idx + '" placeholder="Hvad kan vi gøre lige nu?" rows="2">' + (item.note || '') + '</textarea>';
      html += '</div>';
      html += '<div class="muligt-card-statuses">';
      html += '<button class="muligt-status-btn' + (item.status === 'working' ? ' active' : '') + '" data-idx="' + idx + '" data-status="working" title="Under arbejde">' + IKONER.refresh(14) + '</button>';
      html += '<button class="muligt-status-btn' + (item.status === 'waiting' ? ' active' : '') + '" data-idx="' + idx + '" data-status="waiting" title="Vi venter">' + IKONER.hourglass(14) + '</button>';
      html += '<button class="muligt-status-btn' + (item.status === 'temp' ? ' active' : '') + '" data-idx="' + idx + '" data-status="temp" title="For nu — midlertidigt">' + IKONER.check(14) + '</button>';
      html += '<button class="muligt-status-btn' + (item.status === 'done' ? ' active' : '') + '" data-idx="' + idx + '" data-status="done" title="Løst">' + IKONER.checkCircle(14) + '</button>';
      html += '</div>';
      html += '</div>';
    });

    board.innerHTML = html;

    // Bind events
    board.querySelectorAll('.muligt-status-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var d = getMuligtData();
        var i = parseInt(this.getAttribute('data-idx'));
        var newStatus = this.getAttribute('data-status');
        d[i].status = d[i].status === newStatus ? 'none' : newStatus;
        saveMuligtData(d);
        renderMuligt();
      });
    });

    board.querySelectorAll('.muligt-card-note').forEach(function (ta) {
      ta.addEventListener('input', function () {
        var d = getMuligtData();
        var i = parseInt(this.getAttribute('data-idx'));
        d[i].note = this.value;
        saveMuligtData(d);
      });
    });

    board.querySelectorAll('.muligt-card-delete').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var d = getMuligtData();
        var i = parseInt(this.getAttribute('data-idx'));
        d.splice(i, 1);
        saveMuligtData(d);
        renderMuligt();
      });
    });

    board.querySelectorAll('.muligt-card-check').forEach(function (el) {
      el.addEventListener('click', function () {
        var d = getMuligtData();
        var i = parseInt(this.getAttribute('data-idx'));
        var order = ['none', 'working', 'waiting', 'temp', 'done'];
        var cur = order.indexOf(d[i].status);
        d[i].status = order[(cur + 1) % order.length];
        saveMuligtData(d);
        renderMuligt();
      });
    });
  }

  function bindMuligtForm() {
    var addBtn = document.getElementById('muligtAddBtn');
    var form = document.getElementById('muligtAddForm');
    var input = document.getElementById('muligtInput');
    var save = document.getElementById('muligtSave');
    var cancel = document.getElementById('muligtCancel');
    var colorPick = document.getElementById('muligtColorPick');
    var selectedColor = 'sage';

    if (!addBtn) return;

    addBtn.addEventListener('click', function () {
      form.style.display = 'block';
      addBtn.style.display = 'none';
      input.focus();
      selectedColor = 'sage';
      colorPick.querySelectorAll('.muligt-color-dot').forEach(function (d, i) {
        d.classList.toggle('active', i === 0);
      });
    });

    colorPick.querySelectorAll('.muligt-color-dot').forEach(function (dot) {
      dot.addEventListener('click', function () {
        selectedColor = this.getAttribute('data-color');
        colorPick.querySelectorAll('.muligt-color-dot').forEach(function (d) {
          d.classList.remove('active');
        });
        this.classList.add('active');
      });
    });

    save.addEventListener('click', function () {
      var val = input.value.trim();
      if (!val) return;
      var d = getMuligtData();
      d.push({
        id: 'custom_' + Date.now(),
        titel: val,
        farve: selectedColor,
        status: 'none',
        note: ''
      });
      saveMuligtData(d);
      input.value = '';
      form.style.display = 'none';
      addBtn.style.display = 'block';
      renderMuligt();
    });

    cancel.addEventListener('click', function () {
      input.value = '';
      form.style.display = 'none';
      addBtn.style.display = 'block';
    });

    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        save.click();
      }
    });
  }

  // ---------- Kommune & Samarbejde ----------
  function renderKommune() {
    var container = document.getElementById('kommuneContent');
    if (!container) return;

    var html = '';

    // ===== TRIN 1: Velkomst-landing =====
    html += '<div class="kommune-welcome">';
    html += '<div class="kommune-welcome-inner">';
    html += '<div class="kommune-welcome-medallion">';
    html += '<div class="kommune-welcome-circle">' + IKONER.handshake(36) + '</div>';
    html += '</div>';
    html += '<h2 class="kommune-welcome-title">Velkommen til et trygt rum for forandring</h2>';
    html += '<p class="kommune-welcome-subtitle">Til dig, der overvejer et samarbejde med Rikke Veth</p>';
    html += '<p class="kommune-welcome-text">Rikke er familieterapeut med mange års erfaring i arbejdet med udsatte familier og børn. Hun integrerer narrativ-systemisk terapi, åndedrætsterapi, polyvagal forståelse og mentalisering — fordi de familier, hun møder, har brug for mere end ét perspektiv.</p>';
    html += '<p class="kommune-welcome-text">Nedenfor kan du læse om Rikkes metoder og samarbejdsformer. Du er også velkommen til at udforske hele appen — cirkelmodellen, temaer, øvelser og nervesystemets trappe — som giver et indblik i det faglige fundament bag hendes arbejde.</p>';
    html += '<div class="kommune-welcome-scroll">';
    html += '<button class="kommune-welcome-scroll-btn" id="kommuneScrollDown">' + IKONER.chevDown(20) + ' Læs mere om samarbejdet</button>';
    html += '</div>';
    html += '</div>';
    html += '</div>';

    // ===== TRIN 1.5: Quick-nav til resten af appen =====
    html += '<div class="kommune-appnav">';
    html += '<p class="kommune-appnav-label">Udforsk også Rikkes faglige univers</p>';
    html += '<div class="kommune-appnav-grid">';
    html += '<button class="kommune-appnav-btn" data-goto="hjem">' + IKONER.leaf(20) + '<span>Cirkelmodellen</span></button>';
    html += '<button class="kommune-appnav-btn" data-goto="trappen">' + IKONER.lightning(20) + '<span>Nervesystemets trappe</span></button>';
    html += '<button class="kommune-appnav-btn" data-goto="temaer">' + IKONER.chatBubble(20) + '<span>Temaer</span></button>';
    html += '<button class="kommune-appnav-btn" data-goto="oevelser">' + IKONER.wind(20) + '<span>Øvelser</span></button>';
    html += '</div>';
    html += '</div>';

    // ===== TRIN 2: Rikkes tilgang (faglig præsentation) =====
    html += '<div class="kommune-faglig" id="kommuneFaglig">';

    // Section: What makes Rikke unique
    html += '<div class="kommune-section">';
    html += '<h3 class="kommune-section-title">Hvad adskiller Rikkes tilgang?</h3>';
    html += '<p class="kommune-text">De fleste familiebehandlere arbejder med én metode. Rikke integrerer flere — fordi de familier, hun møder, har brug for mere end ét perspektiv.</p>';

    html += '<div class="kommune-cards">';
    html += '<div class="kommune-card kommune-card-sage">';
    html += '<div class="kommune-card-icon">' + IKONER.leaf(24) + '</div>';
    html += '<h4>Narrativ-systemisk terapi</h4>';
    html += '<p>Rikke arbejder med familiens fortælling — ikke kun symptomerne. Hun finder de historier, der fastholder familien i destruktive mønstre, og hjælper med at skabe nye fortællinger, der bærer.</p>';
    html += '</div>';

    html += '<div class="kommune-card kommune-card-rose">';
    html += '<div class="kommune-card-icon">' + IKONER.lungs(24) + '</div>';
    html += '<h4>Åndedrætsterapi</h4>';
    html += '<p>Mange udsatte forældre har et nervesystem i konstant alarmberedskab. Rikke bruger åndedrættet som direkte adgang til regulering — et lille <em>tryk på maven</em>, der blidt udvider det rum, familien kan være i.</p>';
    html += '</div>';

    html += '<div class="kommune-card kommune-card-amber">';
    html += '<div class="kommune-card-icon">' + IKONER.brain(24) + '</div>';
    html += '<h4>Polyvagal forståelse</h4>';
    html += '<p>Porges\' polyvagale teori giver Rikke et præcist sprog for, hvorfor forældre reagerer, som de gør. Det flytter fokus fra skyld til nervesystem — og åbner for reel forandring.</p>';
    html += '</div>';

    html += '<div class="kommune-card kommune-card-stone">';
    html += '<div class="kommune-card-icon">' + IKONER.eye(24) + '</div>';
    html += '<h4>Mentalisering (MBT)</h4>';
    html += '<p>Rikke hjælper forældre med at se deres barn som et selvstændigt menneske med egne følelser og behov — den grundlæggende kapacitet, der er forstyrret i udsatte familier.</p>';
    html += '</div>';
    html += '</div>';
    html += '</div>';

    // Section: Samarbejdsformer
    html += '<div class="kommune-section">';
    html += '<h3 class="kommune-section-title">Konkrete samarbejdsformer</h3>';
    html += '<p class="kommune-text">Rikke tilbyder fleksible forløb, der kan tilpasses jeres kommunes behov og de specifikke familier, I arbejder med.</p>';

    html += '<div class="kommune-forloeb">';

    html += '<div class="kommune-forloeb-item">';
    html += '<div class="kommune-forloeb-header">';
    html += '<span class="kommune-forloeb-tag">§75</span>';
    html += '<h4>Familiebehandling</h4>';
    html += '</div>';
    html += '<p>Familiebehandling er Rikkes kerneopgave og faglige ståsted. Hun arbejder der, hvor følelser, kommunikation og samspil går i hårdknude — altid med respekt for familiens grænser, men med et lille <em>tryk på maven</em>, der skaber den bevægelse, der gør forandring mulig. Rikke møder både udsatte og ressourcestærke familier, i hjemmet, på praksis eller i bilen på vej til en samtale.</p>';
    html += '<div class="kommune-forloeb-detaljer">';
    html += '<span>8-16 sessioner</span><span>Hjemme eller praksis</span><span>Tilpasset rapportering</span>';
    html += '</div>';
    html += '</div>';

    html += '<div class="kommune-forloeb-item">';
    html += '<div class="kommune-forloeb-header">';
    html += '<span class="kommune-forloeb-tag">§50</span>';
    html += '<h4>Undersøgelse & afdækning</h4>';
    html += '</div>';
    html += '<p>En målrettet, tidsafgrænset indsats i tæt samarbejde med familien og kommunen. Rikke afdækker ressourcer, udfordringer og dynamikker — med fuld transparens, så der aldrig forekommer oplysninger i rapporten, som familien ikke på forhånd er bekendt med.</p>';
    html += '<div class="kommune-forloeb-detaljer">';
    html += '<span>Typisk 3 måneder</span><span>Hjemme & i netværk</span><span>Beslutningsgrundlag</span>';
    html += '</div>';
    html += '</div>';

    html += '<div class="kommune-forloeb-item">';
    html += '<div class="kommune-forloeb-header">';
    html += '<span class="kommune-forloeb-tag kommune-forloeb-tag-alt">Supervision</span>';
    html += '<h4>Faglig supervision & sparring</h4>';
    html += '</div>';
    html += '<p>For socialrådgivere, familiebehandlere, pædagoger, psykologer, plejefamilier og tværfaglige teams. Rikke sammenligner familiearbejde med et vendespil — supervision er rummet, hvor I sammen vender brikkerne og ser sammenhængen, der giver nye perspektiver på fastlåste situationer.</p>';
    html += '<div class="kommune-forloeb-detaljer">';
    html += '<span>Enkelt eller fast aftale</span><span>Gruppe eller individuel</span><span>Fleksibel model</span>';
    html += '</div>';
    html += '</div>';

    html += '<div class="kommune-forloeb-item">';
    html += '<div class="kommune-forloeb-header">';
    html += '<span class="kommune-forloeb-tag kommune-forloeb-tag-alt">§75</span>';
    html += '<h4>Støtte under anbringelse</h4>';
    html += '</div>';
    html += '<p>Når børn anbringes, bærer de ofte en skyld, der ikke er deres. Rikke støtter forældrene i at bearbejde sorg og afmagt, så samvær bliver roligt og forudsigeligt. Hun beskriver sin rolle som kaospilot — den, der binder samarbejdet sammen mellem hjem, anbringelsessted og myndighed, og sikrer arbejdsro for alle parter.</p>';
    html += '<div class="kommune-forloeb-detaljer">';
    html += '<span>Løbende forløb</span><span>Samvær & stabilitet</span><span>Tværfaglig koordinering</span>';
    html += '</div>';
    html += '</div>';

    html += '</div>';
    html += '</div>';

    // Section: De familier Rikke møder
    html += '<div class="kommune-section">';
    html += '<h3 class="kommune-section-title">De familier Rikke arbejder med</h3>';
    html += '<p class="kommune-text">Rikkes speciale er familier, hvor standardtilgange ofte ikke rækker. Det er familier med:</p>';
    html += '<ul class="kommune-list">';
    html += '<li><strong>Intergenerationelle traumer</strong> — forældrene bærer selv ubearbejdede spor fra deres egen barndom, som ubevidst gentages i opdragelsen</li>';
    html += '<li><strong>Desorganiseret tilknytning</strong> — barnet har lært, at den person, der skal give tryghed, også er kilden til frygt</li>';
    html += '<li><strong>Parentificering</strong> — barnet har overtaget voksenrollen og bærer ansvar, det ikke kan bære</li>';
    html += '<li><strong>Kompleks PTSD hos forældre</strong> — kronisk traumatisering der påvirker hele familiesystemet</li>';
    html += '<li><strong>Anbringelsestruede børn</strong> — hvor den rigtige intervention på det rigtige tidspunkt kan gøre forskellen</li>';
    html += '<li><strong>Højkonfliktskilsmisser</strong> — hvor børnene fanges i forældrenes kamp og mister deres stemme</li>';
    html += '</ul>';
    html += '</div>';

    html += '</div>'; // end .kommune-faglig

    // ===== Bro-sektion: Udforsk appen =====
    html += '<div class="kommune-bridge">';
    html += '<div class="kommune-bridge-inner">';
    html += '<h3 class="kommune-bridge-title">Se det faglige fundament</h3>';
    html += '<p class="kommune-bridge-text">Denne app er det samme værktøj, Rikke deler med sine klienter. Udforsk cirkelmodellen, nervesystemets trappe, temaer og øvelser — og se, hvad familier møder i et forløb med Rikke.</p>';
    html += '<div class="kommune-bridge-btns">';
    html += '<button class="kommune-bridge-btn" data-goto="hjem">' + IKONER.leaf(20) + ' Cirkelmodellen</button>';
    html += '<button class="kommune-bridge-btn" data-goto="trappen">' + IKONER.lightning(20) + ' Nervesystemets trappe</button>';
    html += '<button class="kommune-bridge-btn" data-goto="temaer">' + IKONER.chatBubble(20) + ' Temaer</button>';
    html += '<button class="kommune-bridge-btn" data-goto="oevelser">' + IKONER.wind(20) + ' Øvelser</button>';
    html += '</div>';
    html += '</div>';
    html += '</div>';

    // ===== Contact CTA =====
    html += '<div class="kommune-cta">';
    html += '<h3 class="kommune-cta-title">Klar til en samtale?</h3>';
    html += '<p class="kommune-cta-text">Rikke tager gerne en uforpligtende samtale om, hvordan et samarbejde kan se ud for jeres kommune.</p>';
    html += '<div class="kommune-cta-info">';
    html += '<a href="tel:' + PRAKSIS_INFO.telefon.replace(/\s/g, '') + '" class="kommune-cta-btn kommune-cta-btn-primary">' + IKONER.phone(18) + ' Ring ' + PRAKSIS_INFO.telefon + '</a>';
    html += '<a href="mailto:' + PRAKSIS_INFO.email + '" class="kommune-cta-btn kommune-cta-btn-secondary">' + IKONER.mail(18) + ' Skriv til ' + PRAKSIS_INFO.email + '</a>';
    html += '<a href="https://linkedin.com/in/rikke-veth-63940b8" target="_blank" rel="noopener" class="kommune-cta-btn kommune-cta-btn-linkedin">' + IKONER.linkedin(18) + ' Se Rikkes LinkedIn</a>';
    html += '</div>';
    html += '<p class="kommune-cta-cvr">CVR: ' + PRAKSIS_INFO.cvr + ' · ' + PRAKSIS_INFO.adresse + '</p>';
    html += '</div>';

    container.innerHTML = html;

    // Bind: scroll-down button
    var scrollBtn = document.getElementById('kommuneScrollDown');
    if (scrollBtn) {
      scrollBtn.addEventListener('click', function () {
        var target = document.getElementById('kommuneFaglig');
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }

    // Bind: all data-goto buttons (app navigation)
    container.querySelectorAll('[data-goto]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        showView(this.getAttribute('data-goto'));
      });
    });
  }

  // ---------- Favoritter View ----------
  function renderFavoritter() {
    var container = document.getElementById('favoritterContent');
    if (!container) return;
    var fav = getFavoritter();

    if (fav.length === 0) {
      container.innerHTML = '<div class="favoritter-empty">' +
        '<div class="favoritter-empty-icon">' + IKONER.bookmark(32) + '</div>' +
        '<p>Du har ikke gemt noget endnu.</p>' +
        '<p class="favoritter-empty-hint">Tryk på ' + IKONER.bookmark(14) + ' Gem når du finder indhold, du vil vende tilbage til.</p>' +
        '</div>';
      return;
    }

    var typeLabels = { oevelse: 'Øvelse', fordybelse: 'Fordybelse', trappen: 'Nervesystemet' };
    var typeIcons = { oevelse: IKONER.wind(16), fordybelse: IKONER.leaf(16), trappen: IKONER.lightning(16) };

    // Group by type
    var groups = {};
    fav.forEach(function(f) {
      if (!groups[f.type]) groups[f.type] = [];
      groups[f.type].push(f);
    });

    var html = '';
    Object.keys(groups).forEach(function(type) {
      html += '<div class="favoritter-group">';
      html += '<div class="favoritter-group-title">' + (typeIcons[type] || '') + ' ' + (typeLabels[type] || type) + '</div>';
      groups[type].forEach(function(f) {
        html += '<div class="favoritter-item" data-fav-type="' + f.type + '" data-fav-id="' + escapeAttr(f.id) + '">' +
          '<div class="favoritter-item-info">' +
          '<div class="favoritter-item-titel">' + f.titel + '</div>' +
          '<div class="favoritter-item-dato">Gemt ' + f.dato + '</div>' +
          '</div>' +
          '<button class="favoritter-item-remove" data-fav-type="' + f.type + '" data-fav-id="' + escapeAttr(f.id) + '" title="Fjern">&times;</button>' +
          '</div>';
      });
      html += '</div>';
    });

    container.innerHTML = html;

    // Bind clicks to navigate
    container.querySelectorAll('.favoritter-item').forEach(function(item) {
      item.addEventListener('click', function(e) {
        if (e.target.closest('.favoritter-item-remove')) return;
        var type = this.getAttribute('data-fav-type');
        var id = this.getAttribute('data-fav-id');
        if (type === 'oevelse') { showView('oevelser'); }
        else if (type === 'fordybelse') { showCirkelDetail(id); }
        else if (type === 'trappen') { showView('trappen'); }
      });
    });

    // Bind remove buttons
    container.querySelectorAll('.favoritter-item-remove').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        var type = this.getAttribute('data-fav-type');
        var id = this.getAttribute('data-fav-id');
        toggleFavorit(type, id, '');
        renderFavoritter();
        updateFavoritBadge();
      });
    });
  }

  function showFavoritter() {
    renderFavoritter();
    showView('favoritter');
    document.querySelectorAll('.nav-btn').forEach(function(b) { b.classList.remove('active'); });
  }

  function showKommune() {
    renderKommune();
    showView('kommune');
    document.querySelectorAll('.nav-btn').forEach(function (b) { b.classList.remove('active'); });
  }

  // ---------- Dynamik Side ----------
  function renderDynamik() {
    var container = document.getElementById('dynamikContent');
    if (!container) return;

    var html = '';

    // Header
    html += '<h2 class="dynamik-title">Dynamikken bag cirkelmodellen</h2>';
    html += '<p class="dynamik-lead">Cirkelmodellen er ikke bare en illustration. Den er et spejl af den måde din familie faktisk fungerer — som ét sammenhængende system, hvor intet område står alene. Forstår du denne dynamik, forstår du også hvorfor forandring kræver mere end én isoleret indsats.</p>';

    // === SECTION 1: Balance ===
    html += '<div class="dynamik-section">';
    html += '<h3 class="dynamik-section-title">Når alt er i balance</h3>';

    // SVG balanced
    html += '<div class="dynamik-svg-wrap">';
    html += '<svg viewBox="0 0 520 520" class="dynamik-svg">';
    // Connection lines
    html += '<g opacity="0.35">';
    var balPos = {c:[260,260],r:[260,110],p:[390,185],f:[390,335],b:[260,410],a:[130,335],i:[130,185]};
    var keys = ['r','p','f','b','a','i'];
    keys.forEach(function(k){
      html += '<line x1="'+balPos.c[0]+'" y1="'+balPos.c[1]+'" x2="'+balPos[k][0]+'" y2="'+balPos[k][1]+'" stroke="#2C5F5C" stroke-width="1" stroke-dasharray="4,4"/>';
    });
    for(var x=0;x<keys.length;x++){
      for(var y=x+1;y<keys.length;y++){
        html += '<line x1="'+balPos[keys[x]][0]+'" y1="'+balPos[keys[x]][1]+'" x2="'+balPos[keys[y]][0]+'" y2="'+balPos[keys[y]][1]+'" stroke="#2C5F5C" stroke-width="0.5" stroke-dasharray="3,5"/>';
      }
    }
    html += '</g>';
    // Circles — white mask first, then colored circle on top
    html += '<circle cx="260" cy="260" r="72" fill="#fff"/>';
    html += '<circle cx="260" cy="260" r="72" fill="#2C5F5C" stroke="#1E4340" stroke-width="2"/>';
    html += '<text x="260" y="252" fill="#fff" font-family="Georgia,serif" font-size="15" text-anchor="middle" font-weight="600">Familien</text>';
    html += '<text x="260" y="274" fill="#fff" font-family="Georgia,serif" font-size="15" text-anchor="middle" font-weight="600">som helhed</text>';
    var balCircles = [
      {x:260,y:110,l1:'Tilknytning',l2:'& tryghed'},
      {x:390,y:185,l1:'Parforholdet',l2:'& nærvær'},
      {x:390,y:335,l1:'Samspil',l2:'& mønstre'},
      {x:260,y:410,l1:'Barnets',l2:'stemme'},
      {x:130,y:335,l1:'Åndedræt',l2:'& nervesystem'},
      {x:130,y:185,l1:'Dig selv',l2:'& dine spor'}
    ];
    balCircles.forEach(function(c){
      html += '<circle cx="'+c.x+'" cy="'+c.y+'" r="56" fill="#fff"/>';
      html += '<circle cx="'+c.x+'" cy="'+c.y+'" r="56" fill="#3A7A76" stroke="#2C5F5C" stroke-width="1.5" opacity="0.88"/>';
      html += '<text x="'+c.x+'" y="'+(c.y-6)+'" fill="#fff" font-family="Georgia,serif" font-size="13" text-anchor="middle">'+c.l1+'</text>';
      html += '<text x="'+c.x+'" y="'+(c.y+12)+'" fill="#fff" font-family="Georgia,serif" font-size="13" text-anchor="middle">'+c.l2+'</text>';
    });
    html += '</svg>';
    html += '<p class="dynamik-svg-caption">Systemet i balance — alle områder støtter hinanden</p>';
    html += '</div>';

    html += '<p class="dynamik-text">Når familien fungerer, arbejder alle syv dimensioner sammen i en gensidig vekselvirkning. I narrativ-systemisk forståelse er det den tilstand hvor familiens fortælling bærer alle medlemmer — hvor hver stemme har plads, og hvor relationer er fleksible nok til at rumme konflikter uden at bryde sammen.</p>';
    html += '<p class="dynamik-text">I denne tilstand er tilknytningen tryg. Parforholdet bærer. Barnet mærker at det er set og hørt. Åndedrættet er dybt og frit. Og de mønstre, der præger samspillet, er bløde nok til at tillade forandring. Familiens nervesystem — det fælles reguleringssystem — kører i et roligt, stabilt gear.</p>';
    html += '<p class="dynamik-text">Læg mærke til figuren. Symmetrien. De lige afstande. Forbindelseslinjerne der fordeler sig jævnt. Du kan se det med det samme — her er noget der fungerer. Symmetrien afspejler et system i harmoni.</p>';
    html += '</div>';

    // === SECTION 2: Under pressure ===
    html += '<div class="dynamik-section">';
    html += '<h3 class="dynamik-section-title">Når systemet er under pres</h3>';

    html += '<div class="dynamik-svg-wrap">';
    html += '<svg viewBox="0 0 520 520" class="dynamik-svg">';
    // Shifted positions
    var presPos = {c:[270,255],r:[240,100],p:[405,165],f:[380,355],b:[280,420],a:[115,310],i:[145,200]};
    html += '<g opacity="0.35">';
    var pk = ['r','p','f','b','a','i'];
    pk.forEach(function(k){
      html += '<line x1="'+presPos.c[0]+'" y1="'+presPos.c[1]+'" x2="'+presPos[k][0]+'" y2="'+presPos[k][1]+'" stroke="#2C5F5C" stroke-width="1" stroke-dasharray="4,4"/>';
    });
    for(var x2=0;x2<pk.length;x2++){
      for(var y2=x2+1;y2<pk.length;y2++){
        html += '<line x1="'+presPos[pk[x2]][0]+'" y1="'+presPos[pk[x2]][1]+'" x2="'+presPos[pk[y2]][0]+'" y2="'+presPos[pk[y2]][1]+'" stroke="#2C5F5C" stroke-width="0.5" stroke-dasharray="3,5"/>';
      }
    }
    html += '</g>';
    html += '<circle cx="270" cy="255" r="68" fill="#fff"/>';
    html += '<circle cx="270" cy="255" r="68" fill="#2C5F5C" stroke="#1E4340" stroke-width="2"/>';
    html += '<text x="270" y="247" fill="#fff" font-family="Georgia,serif" font-size="14" text-anchor="middle" font-weight="600">Familien</text>';
    html += '<text x="270" y="267" fill="#fff" font-family="Georgia,serif" font-size="14" text-anchor="middle" font-weight="600">som helhed</text>';
    var presCircles = [
      {x:240,y:100,r:48,l1:'Tilknytning',l2:'& tryghed',op:'0.7'},
      {x:405,y:165,r:44,l1:'Parforholdet',l2:'& nærvær',op:'0.65'},
      {x:380,y:355,r:62,l1:'Samspil',l2:'& mønstre',op:'0.9'},
      {x:280,y:420,r:50,l1:'Barnets',l2:'stemme',op:'0.75'},
      {x:115,y:310,r:58,l1:'Åndedræt &',l2:'nervesystem',op:'0.85'},
      {x:145,y:200,r:42,l1:'Dig selv',l2:'& dine spor',op:'0.6'}
    ];
    presCircles.forEach(function(c){
      html += '<circle cx="'+c.x+'" cy="'+c.y+'" r="'+c.r+'" fill="#fff"/>';
      html += '<circle cx="'+c.x+'" cy="'+c.y+'" r="'+c.r+'" fill="#3A7A76" stroke="#2C5F5C" stroke-width="1.5" opacity="'+c.op+'"/>';
      html += '<text x="'+c.x+'" y="'+(c.y-6)+'" fill="#fff" font-family="Georgia,serif" font-size="12" text-anchor="middle">'+c.l1+'</text>';
      html += '<text x="'+c.x+'" y="'+(c.y+10)+'" fill="#fff" font-family="Georgia,serif" font-size="12" text-anchor="middle">'+c.l2+'</text>';
    });
    html += '</svg>';
    html += '<p class="dynamik-svg-caption">Systemet under pres — symmetrien er brudt</p>';
    html += '</div>';

    html += '<p class="dynamik-text">Men livet ser ikke altid sådan ud. Stress, traumer, anbringelser, skilsmisse, vold, misbrug, kronisk pres fra kommunale systemer — alt dette trækker familien ud af balance. Og det sker ikke isoleret. Når ét område belastes, mærker alle de andre det.</p>';
    html += '<p class="dynamik-text">Se på figuren. Sammenlign den med den forrige. Symmetrien er brudt. Nogle cirkler er trukket tættere sammen, andre skubbet fra hinanden. Cirklerne har ændret størrelse — nogle er svundet ind, andre vokset. Det er præcis sådan det føles i en familie under pres.</p>';
    html += '<p class="dynamik-text">Noget er skævt. Noget sidder fast. Du kan mærke det i kroppen, i samspillet ved aftenbordet, i den måde I taler til hinanden på — men det er svært at sætte fingeren på, hvad det egentlig er. Og det er fordi det ikke er ét enkelt problem. Det er hele familiesystemet der er trukket ud af sin naturlige balance.</p>';
    html += '</div>';

    // === SECTION 3: One area dominates ===
    html += '<div class="dynamik-section">';
    html += '<h3 class="dynamik-section-title">Når ét område dominerer</h3>';

    html += '<div class="dynamik-svg-wrap">';
    html += '<svg viewBox="0 0 520 520" class="dynamik-svg">';
    // "Dig selv & dine spor" (trauma/individuel) dominates - it's big and pulls everything
    var domPos = {c:[280,260],r:[255,115],p:[395,200],f:[370,350],b:[260,415],a:[120,320],i:[100,165]};
    html += '<g opacity="0.35">';
    var dk = ['r','p','f','b','a','i'];
    dk.forEach(function(k){
      html += '<line x1="'+domPos.c[0]+'" y1="'+domPos.c[1]+'" x2="'+domPos[k][0]+'" y2="'+domPos[k][1]+'" stroke="#2C5F5C" stroke-width="1" stroke-dasharray="4,4"/>';
    });
    for(var x3=0;x3<dk.length;x3++){
      for(var y3=x3+1;y3<dk.length;y3++){
        html += '<line x1="'+domPos[dk[x3]][0]+'" y1="'+domPos[dk[x3]][1]+'" x2="'+domPos[dk[y3]][0]+'" y2="'+domPos[dk[y3]][1]+'" stroke="#2C5F5C" stroke-width="0.5" stroke-dasharray="3,5"/>';
      }
    }
    html += '</g>';
    html += '<circle cx="280" cy="260" r="65" fill="#fff"/>';
    html += '<circle cx="280" cy="260" r="65" fill="#2C5F5C" stroke="#1E4340" stroke-width="2"/>';
    html += '<text x="280" y="252" fill="#fff" font-family="Georgia,serif" font-size="14" text-anchor="middle" font-weight="600">Familien</text>';
    html += '<text x="280" y="272" fill="#fff" font-family="Georgia,serif" font-size="14" text-anchor="middle" font-weight="600">som helhed</text>';
    // Big "individuel" circle — white mask first
    html += '<circle cx="100" cy="165" r="78" fill="#fff"/>';
    html += '<circle cx="100" cy="165" r="78" fill="#9E6B7B" stroke="#7D5563" stroke-width="2" opacity="0.85"/>';
    html += '<text x="100" y="155" fill="#fff" font-family="Georgia,serif" font-size="14" text-anchor="middle" font-weight="600">Ubearbejdede</text>';
    html += '<text x="100" y="175" fill="#fff" font-family="Georgia,serif" font-size="14" text-anchor="middle" font-weight="600">spor</text>';
    // Other circles - smaller, pulled toward trauma
    var domCircles = [
      {x:255,y:115,r:42,l1:'Tilknytning',l2:'& tryghed',op:'0.6'},
      {x:395,y:200,r:40,l1:'Parforholdet',l2:'& nærvær',op:'0.55'},
      {x:370,y:350,r:48,l1:'Samspil',l2:'& mønstre',op:'0.7'},
      {x:260,y:415,r:44,l1:'Barnets',l2:'stemme',op:'0.65'},
      {x:120,y:320,r:46,l1:'Åndedræt &',l2:'nervesystem',op:'0.7'}
    ];
    domCircles.forEach(function(c){
      html += '<circle cx="'+c.x+'" cy="'+c.y+'" r="'+c.r+'" fill="#fff"/>';
      html += '<circle cx="'+c.x+'" cy="'+c.y+'" r="'+c.r+'" fill="#3A7A76" stroke="#2C5F5C" stroke-width="1.5" opacity="'+c.op+'"/>';
      html += '<text x="'+c.x+'" y="'+(c.y-6)+'" fill="#fff" font-family="Georgia,serif" font-size="11" text-anchor="middle">'+c.l1+'</text>';
      html += '<text x="'+c.x+'" y="'+(c.y+8)+'" fill="#fff" font-family="Georgia,serif" font-size="11" text-anchor="middle">'+c.l2+'</text>';
    });
    html += '</svg>';
    html += '<p class="dynamik-svg-caption">Ubearbejdede spor fra fortiden trækker hele familiesystemet mod sig</p>';
    html += '</div>';

    html += '<p class="dynamik-text">Lad os se nærmere på hvad der sker, når ét specifikt område er under pres — for eksempel ubearbejdede spor fra en forælders egen barndom.</p>';
    html += '<p class="dynamik-text">Traumet bliver ikke i sin egen cirkel. Det udvider sig. Det fylder mere. Og i takt med at det vokser, trækker det alle andre områder ud af deres naturlige position:</p>';

    html += '<ul class="dynamik-list">';
    html += '<li><strong>Tilknytning & tryghed:</strong> Barnets tilknytning bliver utryg. Forælderen kan ikke give den ro, barnet har brug for, fordi forælderens eget nervesystem er i alarmberedskab. Barnet tilpasser sig — bliver enten usynligt eller uroligt.</li>';
    html += '<li><strong>Parforholdet:</strong> Partneren oplever en mur eller en eksplosivitet, der ikke handler om dem — men om noget, der skete for længe siden. Nærhed bliver svær. Konflikter eskalerer, fordi nervesystemerne ikke kan mødes.</li>';
    html += '<li><strong>Samspil & mønstre:</strong> Familiens mønstre stivner. De samme konflikter gentager sig. Rollerne låser sig fast — én tager ansvar, én trækker sig, børnene navigerer i et minefelt, de ikke har sprog for.</li>';
    html += '<li><strong>Barnets stemme:</strong> Barnet mister sin stemme. I en familie, hvor en forælder bærer uforløste traumer, lærer barnet at læse stemninger frem for at mærke sig selv. Det er parentificering — barnet bliver den følelsesmæssige voksen.</li>';
    html += '<li><strong>Åndedræt & nervesystem:</strong> Åndedrættet bliver overfladisk. Kroppen holder. Nervesystemet sidder fast i sympatisk aktivering eller dorsal nedlukning — og det smitter fra forælder til barn, fra barn til forælder.</li>';
    html += '</ul>';

    html += '<p class="dynamik-text">Det er ikke svaghed. Det er nervesystemets og familiesystemets forsøg på at overleve. Men prisen er, at hele systemets balance går tabt.</p>';
    html += '</div>';

    // === SECTION 4: Multiple areas ===
    html += '<div class="dynamik-section">';
    html += '<h3 class="dynamik-section-title">Når flere områder belastes samtidig</h3>';

    html += '<div class="dynamik-svg-wrap">';
    html += '<svg viewBox="0 0 520 520" class="dynamik-svg">';
    var mulPos = {c:[265,265],r:[220,95],p:[410,175],f:[395,360],b:[240,430],a:[100,340],i:[110,170]};
    html += '<g opacity="0.35">';
    var mk = ['r','p','f','b','a','i'];
    mk.forEach(function(k){
      html += '<line x1="'+mulPos.c[0]+'" y1="'+mulPos.c[1]+'" x2="'+mulPos[k][0]+'" y2="'+mulPos[k][1]+'" stroke="#2C5F5C" stroke-width="1" stroke-dasharray="4,4"/>';
    });
    for(var x4=0;x4<mk.length;x4++){
      for(var y4=x4+1;y4<mk.length;y4++){
        html += '<line x1="'+mulPos[mk[x4]][0]+'" y1="'+mulPos[mk[x4]][1]+'" x2="'+mulPos[mk[y4]][0]+'" y2="'+mulPos[mk[y4]][1]+'" stroke="#2C5F5C" stroke-width="0.5" stroke-dasharray="3,5"/>';
      }
    }
    html += '</g>';
    html += '<circle cx="265" cy="265" r="62" fill="#fff"/>';
    html += '<circle cx="265" cy="265" r="62" fill="#2C5F5C" stroke="#1E4340" stroke-width="2"/>';
    html += '<text x="265" y="257" fill="#fff" font-family="Georgia,serif" font-size="13" text-anchor="middle" font-weight="600">Familien</text>';
    html += '<text x="265" y="277" fill="#fff" font-family="Georgia,serif" font-size="13" text-anchor="middle" font-weight="600">som helhed</text>';
    // Multiple enlarged circles with warm color — white mask first
    var mulCircles = [
      {x:220,y:95,r:52,l1:'Tilknytning',l2:'& tryghed',fill:'#B8956A',stroke:'#9E7A55',op:'0.85'},
      {x:410,y:175,r:42,l1:'Parforholdet',l2:'& nærvær',fill:'#3A7A76',stroke:'#2C5F5C',op:'0.55'},
      {x:395,y:360,r:68,l1:'Samspil',l2:'& mønstre',fill:'#9E6B7B',stroke:'#7D5563',op:'0.85'},
      {x:240,y:430,r:38,l1:'Barnets',l2:'stemme',fill:'#3A7A76',stroke:'#2C5F5C',op:'0.5'},
      {x:100,y:340,r:60,l1:'Åndedræt &',l2:'nervesystem',fill:'#B8956A',stroke:'#9E7A55',op:'0.8'},
      {x:110,y:170,r:70,l1:'Dig selv',l2:'& dine spor',fill:'#9E6B7B',stroke:'#7D5563',op:'0.85'}
    ];
    mulCircles.forEach(function(c){
      html += '<circle cx="'+c.x+'" cy="'+c.y+'" r="'+c.r+'" fill="#fff"/>';
      html += '<circle cx="'+c.x+'" cy="'+c.y+'" r="'+c.r+'" fill="'+c.fill+'" stroke="'+c.stroke+'" stroke-width="1.5" opacity="'+c.op+'"/>';
      html += '<text x="'+c.x+'" y="'+(c.y-6)+'" fill="#fff" font-family="Georgia,serif" font-size="11" text-anchor="middle">'+c.l1+'</text>';
      html += '<text x="'+c.x+'" y="'+(c.y+8)+'" fill="#fff" font-family="Georgia,serif" font-size="11" text-anchor="middle">'+c.l2+'</text>';
    });
    html += '</svg>';
    html += '<p class="dynamik-svg-caption">Flere områder under pres — systemet trækkes i flere retninger</p>';
    html += '</div>';

    html += '<p class="dynamik-text">I virkeligheden er det sjældent kun ét område, der er belastet. En familie med intergenerationelle traumer har ofte også forstyrrede tilknytningsmønstre OG et parforhold under pres OG et barn der reagerer OG et nervesystem der sidder fast i alarmberedskab. Hvert presset område forstærker de andre.</p>';
    html += '<p class="dynamik-text">Det er derfor isolerede tilgange ofte rammer et loft. At arbejde kun med barnet uden at forstå forældrenes mønstre. At fokusere på parforholdet uden at adressere de ubearbejdede spor fra barndommen. At lave åndedrætsterapi uden at inddrage familiedynamikken. Hver tilgang kan noget — men ingen af dem alene kan genskabe balancen i et system, der trækkes i flere retninger samtidig.</p>';
    html += '<p class="dynamik-text">Det er netop her, Rikkes narrative-systemiske tilgang adskiller sig. Hun arbejder ikke med isolerede symptomer. Hun ser hele familiesystemet — og forstår, at forandring i én dimension sender bølger gennem alle de andre.</p>';
    html += '</div>';

    // === SECTION 5: Why wholeness matters ===
    html += '<div class="dynamik-section">';
    html += '<h3 class="dynamik-section-title">Hvorfor helheden er afgørende</h3>';
    html += '<p class="dynamik-text">Cirkelmodellen er ikke bare et kort — den er en behandlingsfilosofi. Når vi forstår, at alt påvirker alt i en familie, ændrer det måden vi arbejder med forandring på. Vi behandler ikke symptomer. Vi adresserer systemet.</p>';
    html += '<p class="dynamik-text">Det er derfor Rikkes arbejde integrerer narrativ-systemisk terapi med polyvagal regulering, åndedrætsterapi og mentaliseringsbaseret tilgang. Ikke fordi kompleksitet er målet, men fordi familiesystemet selv er en integreret helhed. Balance vender tilbage, når vi møder familien på dens egne præmisser — med tålmodighed, med nærvær, og med forståelse for, at forandring i ét familiemedlem skaber bevægelse i hele systemet.</p>';
    html += '</div>';

    // === For the client ===
    html += '<div class="dynamik-callout dynamik-callout-privat">';
    html += '<h3 class="dynamik-callout-title">For dig og din familie</h3>';
    html += '<p class="dynamik-text">Når du ser den skæve figur, genkender du måske din egen familie. Den trækken. Den fornemmelse af, at alt er lidt forskudt — at I elsker hinanden, men ikke kan nå hinanden.</p>';
    html += '<p class="dynamik-text">Vid at det ikke er permanent. Jeres familiesystem har kapaciteten til balance — det har bare brug for de rette betingelser for at finde tilbage. Rikkes arbejde handler om at skabe de betingelser: at hjælpe jer med at finde de fortællinger, der bærer, de åndedrag der regulerer, og det samspil der forbinder jer igen.</p>';
    html += '<p class="dynamik-text">Udforsk cirklerne ovenfor. Start der, hvor du mærker mest. Og vid, at uanset hvor du begynder, arbejder du med hele systemet.</p>';
    html += '</div>';

    // === For the professional ===
    html += '<div class="dynamik-callout dynamik-callout-prof">';
    html += '<h3 class="dynamik-callout-title">For dig som fagprofessionel</h3>';
    html += '<p class="dynamik-text">Modellen giver dig en ramme for at forstå, hvorfor enkeltstående indsatser i §50-undersøgelser eller §75-støtte ofte når et loft. Når du kan se hele familiesystemet — ikke bare det symptom, familien er henvist med — kan du identificere, hvilke forbindelser der er belastet, og hvor reguleringen har brug for støtte.</p>';
    html += '<p class="dynamik-text">Det er fundamentet i Rikkes metode: narrativ-systemisk helhedsbehandling, hvor polyvagal forståelse, mentalisering og åndedrætsterapi integreres i arbejdet med udsatte familier. Det er også den tilgang, hun tilbyder i supervision og faglig sparring med kommuner.</p>';
    html += '</div>';

    // Back to top
    html += '<button class="dynamik-to-top" onclick="window.scrollTo({top:0,behavior:\'smooth\'})">↑ Tilbage til toppen</button>';

    container.innerHTML = html;
  }

  function showDynamik() {
    renderDynamik();
    showView('dynamik');
    document.querySelectorAll('.nav-btn').forEach(function (b) { b.classList.remove('active'); });
  }

  // ---------- Event Binding ----------
  function bindEvents() {
    // Onboarding buttons
    document.querySelectorAll('.onboarding-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        selectPerspektiv(this.getAttribute('data-perspektiv'));
      });
    });

    // Perspektiv switch (kun privat/professionel)
    perspektivSwitch.addEventListener('click', function () {
      aktivPerspektiv = aktivPerspektiv === 'privat' ? 'professionel' : 'privat';
      localStorage.setItem('fp_perspektiv', aktivPerspektiv);
      updatePerspektivUI();
      updateHeroDesc();
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

    // Back button from cirkel detail
    document.getElementById('backFromCirkel').addEventListener('click', function () {
      showView('hjem');
    });

    // Back buttons from trappen, temaer, oevelser, dynamik
    document.querySelectorAll('.back-to-hjem').forEach(function (btn) {
      btn.addEventListener('click', function () {
        showView('hjem');
      });
    });

    // Dynamik link
    var dynamikLink = document.getElementById('dynamikLink');
    if (dynamikLink) {
      dynamikLink.addEventListener('click', function () {
        showDynamik();
      });
    }

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
