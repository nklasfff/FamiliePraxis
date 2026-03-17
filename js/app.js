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
      relationer: [260, 105],
      parterapi: [400, 180],
      familie: [400, 340],
      boern: [260, 415],
      aandedraet: [120, 340],
      individuel: [120, 180]
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
    html += '<g opacity="0.2">';
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
    // Circles
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
    html += '<g opacity="0.15">';
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
    html += '<g opacity="0.15">';
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
    html += '<circle cx="280" cy="260" r="65" fill="#2C5F5C" stroke="#1E4340" stroke-width="2"/>';
    html += '<text x="280" y="252" fill="#fff" font-family="Georgia,serif" font-size="14" text-anchor="middle" font-weight="600">Familien</text>';
    html += '<text x="280" y="272" fill="#fff" font-family="Georgia,serif" font-size="14" text-anchor="middle" font-weight="600">som helhed</text>';
    // Big "individuel" circle
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
    html += '<g opacity="0.12">';
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
    html += '<circle cx="265" cy="265" r="62" fill="#2C5F5C" stroke="#1E4340" stroke-width="2"/>';
    html += '<text x="265" y="257" fill="#fff" font-family="Georgia,serif" font-size="13" text-anchor="middle" font-weight="600">Familien</text>';
    html += '<text x="265" y="277" fill="#fff" font-family="Georgia,serif" font-size="13" text-anchor="middle" font-weight="600">som helhed</text>';
    // Multiple enlarged circles with warm color
    var mulCircles = [
      {x:220,y:95,r:52,l1:'Tilknytning',l2:'& tryghed',fill:'#B8956A',stroke:'#9E7A55',op:'0.85'},
      {x:410,y:175,r:42,l1:'Parforholdet',l2:'& nærvær',fill:'#3A7A76',stroke:'#2C5F5C',op:'0.55'},
      {x:395,y:360,r:68,l1:'Samspil',l2:'& mønstre',fill:'#9E6B7B',stroke:'#7D5563',op:'0.85'},
      {x:240,y:430,r:38,l1:'Barnets',l2:'stemme',fill:'#3A7A76',stroke:'#2C5F5C',op:'0.5'},
      {x:100,y:340,r:60,l1:'Åndedræt &',l2:'nervesystem',fill:'#B8956A',stroke:'#9E7A55',op:'0.8'},
      {x:110,y:170,r:70,l1:'Dig selv',l2:'& dine spor',fill:'#9E6B7B',stroke:'#7D5563',op:'0.85'}
    ];
    mulCircles.forEach(function(c){
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
