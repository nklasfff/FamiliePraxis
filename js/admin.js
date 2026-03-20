// ============================================================
// FamiliePraxis — Admin Panel
// Vanilla JS CRUD-panel til indholdsredigering via FPBackend
// ============================================================

(function () {
  'use strict';

  // ---------- Konstanter ----------
  var CIRKEL_IDS = [
    { id: 'centrum', label: 'Centrum' },
    { id: 'relationer', label: 'Relationer' },
    { id: 'parterapi', label: 'Parterapi' },
    { id: 'familie', label: 'Familie' },
    { id: 'boern', label: 'Børn' },
    { id: 'aandedraet', label: 'Åndedræt' },
    { id: 'individuel', label: 'Individuel' }
  ];

  var IKON_OPTIONS = [
    { id: 'chatBubble', label: 'Chat-boble' },
    { id: 'heartCrack', label: 'Knust hjerte' },
    { id: 'shield', label: 'Skjold' },
    { id: 'lightning', label: 'Lyn' },
    { id: 'dove', label: 'Due' },
    { id: 'star', label: 'Stjerne' },
    { id: 'sparkles', label: 'Gnister' },
    { id: 'leaf', label: 'Blad' }
  ];

  // ---------- Hjælpefunktioner ----------
  function $(sel) { return document.querySelector(sel); }
  function $$(sel) { return document.querySelectorAll(sel); }

  function show(el) { el.style.display = ''; }
  function hide(el) { el.style.display = 'none'; }

  function toast(msg, type) {
    var t = $('#toast');
    t.textContent = msg;
    t.className = 'toast toast-' + (type || 'success') + ' show';
    setTimeout(function () { t.classList.remove('show'); }, 3000);
  }

  function escHtml(str) {
    if (!str) return '';
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ---------- Init ----------
  function init() {
    FPBackend.init();
    bindNav();
    bindAuth();

    if (FPBackend.isLoggedIn()) {
      showAdmin();
    } else {
      showLogin();
    }
  }

  // ---------- Auth ----------
  function showLogin() {
    show($('#login-screen'));
    hide($('#admin-app'));
  }

  function showAdmin() {
    hide($('#login-screen'));
    $('#admin-app').style.display = 'flex';
    $('#admin-app').style.flexDirection = 'column';

    var user = FPBackend.getUser();
    $('#user-email').textContent = user ? user.email : '';

    loadCurrentSection();
  }

  function bindAuth() {
    $('#login-form').addEventListener('submit', function (e) {
      e.preventDefault();
      var email = $('#login-email').value.trim();
      var pw = $('#login-password').value;
      var errEl = $('#login-error');
      var btn = $('#login-btn');

      errEl.style.display = 'none';
      btn.disabled = true;
      btn.textContent = 'Logger ind...';

      FPBackend.login(email, pw)
        .then(function () {
          btn.disabled = false;
          btn.textContent = 'Log ind';
          showAdmin();
        })
        .catch(function (err) {
          btn.disabled = false;
          btn.textContent = 'Log ind';
          errEl.textContent = 'Forkert email eller adgangskode. Prøv igen.';
          errEl.style.display = 'block';
        });
    });

    $('#logout-btn').addEventListener('click', function () {
      FPBackend.logout();
      showLogin();
    });
  }

  // ---------- Navigation ----------
  var currentSection = 'exercises';

  function bindNav() {
    $$('.nav-item').forEach(function (item) {
      item.addEventListener('click', function () {
        var section = this.getAttribute('data-section');
        switchSection(section);
        // Luk mobil-sidebar
        $('#admin-sidebar').classList.remove('open');
        $('#sidebar-overlay').classList.remove('show');
      });
    });

    // Hamburger
    $('#hamburger-btn').addEventListener('click', function () {
      $('#admin-sidebar').classList.toggle('open');
      $('#sidebar-overlay').classList.toggle('show');
    });
    $('#sidebar-overlay').addEventListener('click', function () {
      $('#admin-sidebar').classList.remove('open');
      this.classList.remove('show');
    });
  }

  function switchSection(section) {
    currentSection = section;
    $$('.nav-item').forEach(function (n) { n.classList.remove('active'); });
    $$('.section').forEach(function (s) { s.classList.remove('active'); });

    var navBtn = document.querySelector('.nav-item[data-section="' + section + '"]');
    if (navBtn) navBtn.classList.add('active');

    var sec = $('#section-' + section);
    if (sec) sec.classList.add('active');

    loadCurrentSection();
  }

  function loadCurrentSection() {
    switch (currentSection) {
      case 'exercises': loadExercises(); break;
      case 'themes': loadThemes(); break;
      case 'circles': loadCircles(); break;
      case 'ladder': loadLadder(); break;
      case 'checkins': loadCheckins(); break;
      case 'subscribers': loadSubscribers(); break;
    }
  }

  // ============================================================
  // ØVELSER
  // ============================================================
  function loadExercises() {
    var list = $('#exercise-list');
    list.innerHTML = '<div class="loading">Indlæser øvelser...</div>';
    $('#exercise-form-area').innerHTML = '';

    FPBackend.getAll('exercises', '?select=*&order=sort_order.asc.nullslast,created_at.asc')
      .then(function (data) {
        if (!data || data.length === 0) {
          list.innerHTML = '<p style="color:var(--text-muted);padding:16px;">Ingen øvelser fundet.</p>';
          return;
        }
        var html = '<table class="data-table"><thead><tr>' +
          '<th>Titel</th><th>Cirkel</th><th>Tid</th><th>Rækkefølge</th><th>Status</th><th>Handlinger</th>' +
          '</tr></thead><tbody>';
        data.forEach(function (ex) {
          html += '<tr>' +
            '<td>' + escHtml(ex.titel) + '</td>' +
            '<td>' + escHtml(ex.cirkel || '') + '</td>' +
            '<td>' + escHtml(ex.tid || '') + '</td>' +
            '<td>' + (ex.sort_order != null ? ex.sort_order : '-') + '</td>' +
            '<td><span class="badge ' + (ex.is_active !== false ? 'badge-active' : 'badge-inactive') + '">' +
              (ex.is_active !== false ? 'Aktiv' : 'Inaktiv') + '</span></td>' +
            '<td class="table-actions">' +
              '<button class="btn btn-secondary btn-sm" onclick="AdminPanel.editExercise(\'' + ex.id + '\')">Rediger</button>' +
              '<button class="btn btn-danger btn-sm" onclick="AdminPanel.deleteExercise(\'' + ex.id + '\')">Slet</button>' +
            '</td></tr>';
        });
        html += '</tbody></table>';
        list.innerHTML = html;
      })
      .catch(function (err) {
        list.innerHTML = '<p style="color:var(--danger);padding:16px;">Kunne ikke indlæse øvelser: ' + escHtml(err.message) + '</p>';
      });

    // Ny øvelse-knap
    $('#btn-new-exercise').onclick = function () {
      showExerciseForm(null);
    };
  }

  function showExerciseForm(exercise) {
    var isEdit = !!exercise;
    var area = $('#exercise-form-area');
    var ex = exercise || { trin: [], is_active: true };

    var cirkelOptions = '<option value="">Vælg cirkel...</option>';
    CIRKEL_IDS.forEach(function (c) {
      cirkelOptions += '<option value="' + c.id + '"' + (ex.cirkel === c.id ? ' selected' : '') + '>' + c.label + '</option>';
    });

    var trinHtml = '';
    var trin = ex.trin || [];
    if (!Array.isArray(trin)) trin = [];
    trin.forEach(function (t, i) {
      trinHtml += buildArrayItem('exercise-trin', i, typeof t === 'string' ? t : (t.tekst || t.text || JSON.stringify(t)), true);
    });

    area.innerHTML =
      '<div class="form-card">' +
        '<h3>' + (isEdit ? 'Rediger øvelse' : 'Ny øvelse') + '</h3>' +
        '<div class="form-row">' +
          '<div class="form-group"><label>ID (unikt)</label>' +
            '<input id="ex-id" value="' + escHtml(ex.id || '') + '" ' + (isEdit ? 'readonly style="opacity:0.6"' : '') + ' placeholder="f.eks. grundøvelse-1">' +
          '</div>' +
          '<div class="form-group"><label>Titel</label>' +
            '<input id="ex-titel" value="' + escHtml(ex.titel || '') + '" placeholder="Øvelsens titel">' +
          '</div>' +
        '</div>' +
        '<div class="form-row">' +
          '<div class="form-group"><label>Tid</label>' +
            '<input id="ex-tid" value="' + escHtml(ex.tid || '') + '" placeholder="f.eks. 10 min">' +
          '</div>' +
          '<div class="form-group"><label>Sted</label>' +
            '<input id="ex-sted" value="' + escHtml(ex.sted || '') + '" placeholder="f.eks. Roligt sted">' +
          '</div>' +
        '</div>' +
        '<div class="form-group"><label>Intro</label>' +
          '<textarea id="ex-intro" placeholder="Kort introduktion til øvelsen">' + escHtml(ex.intro || '') + '</textarea>' +
        '</div>' +
        '<div class="array-container">' +
          '<label>Trin</label>' +
          '<div id="ex-trin-items">' + trinHtml + '</div>' +
          '<button class="btn btn-secondary btn-sm" onclick="AdminPanel.addExerciseTrin()">+ Tilføj trin</button>' +
        '</div>' +
        '<div class="form-row">' +
          '<div class="form-group"><label>Cirkel</label>' +
            '<select id="ex-cirkel">' + cirkelOptions + '</select>' +
          '</div>' +
          '<div class="form-group"><label>Rækkefølge</label>' +
            '<input type="number" id="ex-sort" value="' + (ex.sort_order != null ? ex.sort_order : '') + '" placeholder="0">' +
          '</div>' +
        '</div>' +
        '<div class="form-group">' +
          '<div class="toggle-wrap">' +
            '<input type="checkbox" class="toggle" id="ex-active"' + (ex.is_active !== false ? ' checked' : '') + '>' +
            '<label for="ex-active">Aktiv</label>' +
          '</div>' +
        '</div>' +
        '<div style="display:flex;gap:8px;margin-top:16px;">' +
          '<button class="btn btn-primary" onclick="AdminPanel.saveExercise(' + (isEdit ? 'true' : 'false') + ')">Gem</button>' +
          '<button class="btn btn-secondary" onclick="AdminPanel.cancelExercise()">Annuller</button>' +
        '</div>' +
      '</div>';

    area.scrollIntoView({ behavior: 'smooth' });
  }

  function addExerciseTrin() {
    var container = $('#ex-trin-items');
    var idx = container.children.length;
    container.insertAdjacentHTML('beforeend', buildArrayItem('exercise-trin', idx, '', true));
  }

  function saveExercise(isEdit) {
    var data = {
      id: $('#ex-id').value.trim(),
      titel: $('#ex-titel').value.trim(),
      tid: $('#ex-tid').value.trim(),
      sted: $('#ex-sted').value.trim(),
      intro: $('#ex-intro').value.trim(),
      trin: collectArrayValues('ex-trin-items'),
      cirkel: $('#ex-cirkel').value,
      sort_order: $('#ex-sort').value ? parseInt($('#ex-sort').value) : null,
      is_active: $('#ex-active').checked
    };

    if (!data.id || !data.titel) {
      toast('ID og titel er påkrævet.', 'error');
      return;
    }

    var promise = isEdit
      ? FPBackend.update('exercises', data.id, data)
      : FPBackend.create('exercises', data);

    promise
      .then(function () {
        toast(isEdit ? 'Øvelse opdateret!' : 'Øvelse oprettet!');
        FPBackend.cacheClear('exercises');
        loadExercises();
      })
      .catch(function (err) {
        toast('Fejl: ' + err.message, 'error');
      });
  }

  function editExercise(id) {
    FPBackend.getOne('exercises', id).then(function (ex) {
      if (ex) showExerciseForm(ex);
      else toast('Kunne ikke finde øvelsen.', 'error');
    });
  }

  function deleteExercise(id) {
    if (!confirm('Er du sikker på at du vil slette denne øvelse?')) return;
    FPBackend.remove('exercises', id)
      .then(function () {
        toast('Øvelse slettet.');
        FPBackend.cacheClear('exercises');
        loadExercises();
      })
      .catch(function (err) { toast('Fejl: ' + err.message, 'error'); });
  }

  function cancelExercise() {
    $('#exercise-form-area').innerHTML = '';
  }

  // ============================================================
  // TEMAER
  // ============================================================
  function loadThemes() {
    var list = $('#theme-list');
    list.innerHTML = '<div class="loading">Indlæser temaer...</div>';
    $('#theme-form-area').innerHTML = '';

    FPBackend.getAll('themes', '?select=*&order=sort_order.asc.nullslast,created_at.asc')
      .then(function (data) {
        if (!data || data.length === 0) {
          list.innerHTML = '<p style="color:var(--text-muted);padding:16px;">Ingen temaer fundet.</p>';
          return;
        }
        var html = '<table class="data-table"><thead><tr>' +
          '<th>Titel</th><th>Ikon</th><th>Rækkefølge</th><th>Status</th><th>Handlinger</th>' +
          '</tr></thead><tbody>';
        data.forEach(function (t) {
          html += '<tr>' +
            '<td>' + escHtml(t.titel) + '</td>' +
            '<td>' + escHtml(t.ikon || '') + '</td>' +
            '<td>' + (t.sort_order != null ? t.sort_order : '-') + '</td>' +
            '<td><span class="badge ' + (t.is_active !== false ? 'badge-active' : 'badge-inactive') + '">' +
              (t.is_active !== false ? 'Aktiv' : 'Inaktiv') + '</span></td>' +
            '<td class="table-actions">' +
              '<button class="btn btn-secondary btn-sm" onclick="AdminPanel.editTheme(\'' + t.id + '\')">Rediger</button>' +
              '<button class="btn btn-danger btn-sm" onclick="AdminPanel.deleteTheme(\'' + t.id + '\')">Slet</button>' +
            '</td></tr>';
        });
        html += '</tbody></table>';
        list.innerHTML = html;
      })
      .catch(function (err) {
        list.innerHTML = '<p style="color:var(--danger);padding:16px;">Kunne ikke indlæse temaer: ' + escHtml(err.message) + '</p>';
      });

    $('#btn-new-theme').onclick = function () {
      showThemeForm(null);
    };
  }

  function showThemeForm(theme) {
    var isEdit = !!theme;
    var area = $('#theme-form-area');
    var t = theme || { privat_cirkler: [], professionel_cirkler: [], is_active: true };

    var ikonOptions = '<option value="">Vælg ikon...</option>';
    IKON_OPTIONS.forEach(function (ic) {
      ikonOptions += '<option value="' + ic.id + '"' + (t.ikon === ic.id ? ' selected' : '') + '>' + ic.label + ' (' + ic.id + ')</option>';
    });

    var privatCirkler = Array.isArray(t.privat_cirkler) ? t.privat_cirkler : [];
    var profCirkler = Array.isArray(t.professionel_cirkler) ? t.professionel_cirkler : [];

    function cirkelCheckboxes(prefix, selected) {
      var html = '<div class="checkbox-group">';
      CIRKEL_IDS.forEach(function (c) {
        var checked = selected.indexOf(c.id) !== -1 ? ' checked' : '';
        html += '<label><input type="checkbox" name="' + prefix + '" value="' + c.id + '"' + checked + '> ' + c.label + '</label>';
      });
      html += '</div>';
      return html;
    }

    area.innerHTML =
      '<div class="form-card">' +
        '<h3>' + (isEdit ? 'Rediger tema' : 'Nyt tema') + '</h3>' +
        '<div class="form-row">' +
          '<div class="form-group"><label>ID</label>' +
            '<input id="th-id" value="' + escHtml(t.id || '') + '" ' + (isEdit ? 'readonly style="opacity:0.6"' : '') + ' placeholder="f.eks. trauma">' +
          '</div>' +
          '<div class="form-group"><label>Titel</label>' +
            '<input id="th-titel" value="' + escHtml(t.titel || '') + '">' +
          '</div>' +
        '</div>' +
        '<div class="form-row">' +
          '<div class="form-group"><label>Ikon</label>' +
            '<select id="th-ikon">' + ikonOptions + '</select>' +
          '</div>' +
          '<div class="form-group"><label>Rækkefølge</label>' +
            '<input type="number" id="th-sort" value="' + (t.sort_order != null ? t.sort_order : '') + '">' +
          '</div>' +
        '</div>' +
        '<hr style="border:none;border-top:1px solid var(--border);margin:16px 0;">' +
        '<h4 style="color:var(--primary);margin-bottom:12px;">Privat perspektiv</h4>' +
        '<div class="form-group"><label>Intro (privat)</label>' +
          '<textarea id="th-privat-intro">' + escHtml(t.privat_intro || '') + '</textarea>' +
        '</div>' +
        '<div class="form-group"><label>Tekst (privat)</label>' +
          '<textarea id="th-privat-tekst">' + escHtml(t.privat_tekst || '') + '</textarea>' +
        '</div>' +
        '<div class="form-group"><label>Cirkler (privat)</label>' +
          cirkelCheckboxes('th-privat-cirkler', privatCirkler) +
        '</div>' +
        '<hr style="border:none;border-top:1px solid var(--border);margin:16px 0;">' +
        '<h4 style="color:var(--primary);margin-bottom:12px;">Professionelt perspektiv</h4>' +
        '<div class="form-group"><label>Intro (professionel)</label>' +
          '<textarea id="th-prof-intro">' + escHtml(t.professionel_intro || '') + '</textarea>' +
        '</div>' +
        '<div class="form-group"><label>Tekst (professionel)</label>' +
          '<textarea id="th-prof-tekst">' + escHtml(t.professionel_tekst || '') + '</textarea>' +
        '</div>' +
        '<div class="form-group"><label>Cirkler (professionel)</label>' +
          cirkelCheckboxes('th-prof-cirkler', profCirkler) +
        '</div>' +
        '<hr style="border:none;border-top:1px solid var(--border);margin:16px 0;">' +
        '<div class="form-group">' +
          '<div class="toggle-wrap">' +
            '<input type="checkbox" class="toggle" id="th-active"' + (t.is_active !== false ? ' checked' : '') + '>' +
            '<label for="th-active">Aktiv</label>' +
          '</div>' +
        '</div>' +
        '<div style="display:flex;gap:8px;margin-top:16px;">' +
          '<button class="btn btn-primary" onclick="AdminPanel.saveTheme(' + (isEdit ? 'true' : 'false') + ')">Gem</button>' +
          '<button class="btn btn-secondary" onclick="AdminPanel.cancelTheme()">Annuller</button>' +
        '</div>' +
      '</div>';

    area.scrollIntoView({ behavior: 'smooth' });
  }

  function collectCheckboxes(name) {
    var vals = [];
    $$('input[name="' + name + '"]:checked').forEach(function (cb) {
      vals.push(cb.value);
    });
    return vals;
  }

  function saveTheme(isEdit) {
    var data = {
      id: $('#th-id').value.trim(),
      titel: $('#th-titel').value.trim(),
      ikon: $('#th-ikon').value,
      privat_intro: $('#th-privat-intro').value.trim(),
      privat_tekst: $('#th-privat-tekst').value.trim(),
      privat_cirkler: collectCheckboxes('th-privat-cirkler'),
      professionel_intro: $('#th-prof-intro').value.trim(),
      professionel_tekst: $('#th-prof-tekst').value.trim(),
      professionel_cirkler: collectCheckboxes('th-prof-cirkler'),
      sort_order: $('#th-sort').value ? parseInt($('#th-sort').value) : null,
      is_active: $('#th-active').checked
    };

    if (!data.id || !data.titel) {
      toast('ID og titel er påkrævet.', 'error');
      return;
    }

    var promise = isEdit
      ? FPBackend.update('themes', data.id, data)
      : FPBackend.create('themes', data);

    promise
      .then(function () {
        toast(isEdit ? 'Tema opdateret!' : 'Tema oprettet!');
        FPBackend.cacheClear('themes');
        loadThemes();
      })
      .catch(function (err) { toast('Fejl: ' + err.message, 'error'); });
  }

  function editTheme(id) {
    FPBackend.getOne('themes', id).then(function (t) {
      if (t) showThemeForm(t);
      else toast('Kunne ikke finde temaet.', 'error');
    });
  }

  function deleteTheme(id) {
    if (!confirm('Er du sikker på at du vil slette dette tema?')) return;
    FPBackend.remove('themes', id)
      .then(function () {
        toast('Tema slettet.');
        FPBackend.cacheClear('themes');
        loadThemes();
      })
      .catch(function (err) { toast('Fejl: ' + err.message, 'error'); });
  }

  function cancelTheme() {
    $('#theme-form-area').innerHTML = '';
  }

  // ============================================================
  // CIRKLER
  // ============================================================
  function loadCircles() {
    var list = $('#circle-list');
    list.innerHTML = '<div class="loading">Indlæser cirkler...</div>';
    $('#circle-form-area').innerHTML = '';

    FPBackend.getAll('circles', '?select=*&order=sort_order.asc.nullslast')
      .then(function (data) {
        if (!data || data.length === 0) {
          list.innerHTML = '<p style="color:var(--text-muted);padding:16px;">Ingen cirkler fundet.</p>';
          return;
        }
        var html = '<table class="data-table"><thead><tr>' +
          '<th>ID</th><th>Ikon</th><th>Rækkefølge</th><th>Handlinger</th>' +
          '</tr></thead><tbody>';
        data.forEach(function (c) {
          html += '<tr>' +
            '<td><strong>' + escHtml(c.id) + '</strong></td>' +
            '<td>' + escHtml(c.ikon || '') + '</td>' +
            '<td>' + (c.sort_order != null ? c.sort_order : '-') + '</td>' +
            '<td class="table-actions">' +
              '<button class="btn btn-secondary btn-sm" onclick="AdminPanel.editCircle(\'' + c.id + '\')">Rediger</button>' +
            '</td></tr>';
        });
        html += '</tbody></table>';
        list.innerHTML = html;
      })
      .catch(function (err) {
        list.innerHTML = '<p style="color:var(--danger);padding:16px;">Kunne ikke indlæse cirkler: ' + escHtml(err.message) + '</p>';
      });
  }

  function showCircleForm(circle) {
    var area = $('#circle-form-area');
    var c = circle || {};

    var privatPunkter = Array.isArray(c.privat_overblik_punkter) ? c.privat_overblik_punkter : [];
    var profPunkter = Array.isArray(c.professionel_overblik_punkter) ? c.professionel_overblik_punkter : [];
    var privatDybde = Array.isArray(c.privat_dybde) ? c.privat_dybde : [];
    var profDybde = Array.isArray(c.professionel_dybde) ? c.professionel_dybde : [];

    function arrayItemsHtml(prefix, items) {
      var html = '';
      items.forEach(function (val, i) {
        html += buildArrayItem(prefix, i, typeof val === 'string' ? val : JSON.stringify(val), true);
      });
      return html;
    }

    area.innerHTML =
      '<div class="form-card">' +
        '<h3>Rediger cirkel: ' + escHtml(c.id) + '</h3>' +
        '<div class="form-row">' +
          '<div class="form-group"><label>Ikon</label>' +
            '<input id="ci-ikon" value="' + escHtml(c.ikon || '') + '">' +
          '</div>' +
          '<div class="form-group"><label>Rækkefølge</label>' +
            '<input type="number" id="ci-sort" value="' + (c.sort_order != null ? c.sort_order : '') + '">' +
          '</div>' +
        '</div>' +
        '<hr style="border:none;border-top:1px solid var(--border);margin:16px 0;">' +
        '<h4 style="color:var(--primary);margin-bottom:12px;">Privat perspektiv</h4>' +
        '<div class="form-group"><label>Overblik-beskrivelse</label>' +
          '<textarea id="ci-priv-besk">' + escHtml(c.privat_overblik_beskrivelse || '') + '</textarea>' +
        '</div>' +
        '<div class="array-container">' +
          '<label>Overblik-punkter (privat)</label>' +
          '<div id="ci-priv-punkter-items">' + arrayItemsHtml('ci-priv-punkter', privatPunkter) + '</div>' +
          '<button class="btn btn-secondary btn-sm" onclick="AdminPanel.addArrayItem(\'ci-priv-punkter-items\')">+ Tilføj punkt</button>' +
        '</div>' +
        '<div class="form-group"><label>Overblik-tip (privat)</label>' +
          '<textarea id="ci-priv-tip">' + escHtml(c.privat_overblik_tip || '') + '</textarea>' +
        '</div>' +
        '<div class="array-container">' +
          '<label>Dybde (privat)</label>' +
          '<div id="ci-priv-dybde-items">' + arrayItemsHtml('ci-priv-dybde', privatDybde) + '</div>' +
          '<button class="btn btn-secondary btn-sm" onclick="AdminPanel.addArrayItem(\'ci-priv-dybde-items\')">+ Tilføj</button>' +
        '</div>' +
        '<hr style="border:none;border-top:1px solid var(--border);margin:16px 0;">' +
        '<h4 style="color:var(--primary);margin-bottom:12px;">Professionelt perspektiv</h4>' +
        '<div class="form-group"><label>Overblik-beskrivelse</label>' +
          '<textarea id="ci-prof-besk">' + escHtml(c.professionel_overblik_beskrivelse || '') + '</textarea>' +
        '</div>' +
        '<div class="array-container">' +
          '<label>Overblik-punkter (professionel)</label>' +
          '<div id="ci-prof-punkter-items">' + arrayItemsHtml('ci-prof-punkter', profPunkter) + '</div>' +
          '<button class="btn btn-secondary btn-sm" onclick="AdminPanel.addArrayItem(\'ci-prof-punkter-items\')">+ Tilføj punkt</button>' +
        '</div>' +
        '<div class="form-group"><label>Overblik-tip (professionel)</label>' +
          '<textarea id="ci-prof-tip">' + escHtml(c.professionel_overblik_tip || '') + '</textarea>' +
        '</div>' +
        '<div class="array-container">' +
          '<label>Dybde (professionel)</label>' +
          '<div id="ci-prof-dybde-items">' + arrayItemsHtml('ci-prof-dybde', profDybde) + '</div>' +
          '<button class="btn btn-secondary btn-sm" onclick="AdminPanel.addArrayItem(\'ci-prof-dybde-items\')">+ Tilføj</button>' +
        '</div>' +
        '<div style="display:flex;gap:8px;margin-top:16px;">' +
          '<button class="btn btn-primary" onclick="AdminPanel.saveCircle(\'' + c.id + '\')">Gem</button>' +
          '<button class="btn btn-secondary" onclick="AdminPanel.cancelCircle()">Annuller</button>' +
        '</div>' +
      '</div>';

    area.scrollIntoView({ behavior: 'smooth' });
  }

  function saveCircle(id) {
    var data = {
      ikon: $('#ci-ikon').value.trim(),
      sort_order: $('#ci-sort').value ? parseInt($('#ci-sort').value) : null,
      privat_overblik_beskrivelse: $('#ci-priv-besk').value.trim(),
      privat_overblik_punkter: collectArrayValues('ci-priv-punkter-items'),
      privat_overblik_tip: $('#ci-priv-tip').value.trim(),
      privat_dybde: collectArrayValues('ci-priv-dybde-items'),
      professionel_overblik_beskrivelse: $('#ci-prof-besk').value.trim(),
      professionel_overblik_punkter: collectArrayValues('ci-prof-punkter-items'),
      professionel_overblik_tip: $('#ci-prof-tip').value.trim(),
      professionel_dybde: collectArrayValues('ci-prof-dybde-items')
    };

    FPBackend.update('circles', id, data)
      .then(function () {
        toast('Cirkel opdateret!');
        FPBackend.cacheClear('circles');
        loadCircles();
      })
      .catch(function (err) { toast('Fejl: ' + err.message, 'error'); });
  }

  function editCircle(id) {
    FPBackend.getOne('circles', id).then(function (c) {
      if (c) showCircleForm(c);
      else toast('Kunne ikke finde cirklen.', 'error');
    });
  }

  function cancelCircle() {
    $('#circle-form-area').innerHTML = '';
  }

  // ============================================================
  // TRAPPEN
  // ============================================================
  function loadLadder() {
    var list = $('#ladder-list');
    list.innerHTML = '<div class="loading">Indlæser trappen...</div>';

    FPBackend.getAll('ladder_states', '?select=*&order=trin.asc')
      .then(function (data) {
        if (!data || data.length === 0) {
          list.innerHTML = '<p style="color:var(--text-muted);padding:16px;">Ingen trappetrin fundet.</p>';
          return;
        }
        var html = '';
        data.forEach(function (step) {
          html += buildLadderCard(step);
        });
        list.innerHTML = html;
      })
      .catch(function (err) {
        list.innerHTML = '<p style="color:var(--danger);padding:16px;">Kunne ikke indlæse trappen: ' + escHtml(err.message) + '</p>';
      });
  }

  function buildLadderCard(step) {
    var s = step;
    return '<div class="form-card" id="ladder-card-' + s.id + '">' +
      '<h3>Trin ' + (s.trin || '?') + ': ' + escHtml(s.navn || s.id) + '</h3>' +
      '<div class="form-group"><label>Navn</label>' +
        '<input id="ld-navn-' + s.id + '" value="' + escHtml(s.navn || '') + '">' +
      '</div>' +
      '<hr style="border:none;border-top:1px solid var(--border);margin:16px 0;">' +
      '<h4 style="color:var(--primary);margin-bottom:12px;">Privat perspektiv</h4>' +
      '<div class="form-group"><label>Beskrivelse (privat)</label>' +
        '<textarea id="ld-priv-besk-' + s.id + '">' + escHtml(s.privat_beskrivelse || '') + '</textarea>' +
      '</div>' +
      '<div class="form-group"><label>Krop (privat)</label>' +
        '<textarea id="ld-priv-krop-' + s.id + '">' + escHtml(s.privat_krop || '') + '</textarea>' +
      '</div>' +
      '<div class="form-group"><label>Følelser (privat)</label>' +
        '<textarea id="ld-priv-foelelser-' + s.id + '">' + escHtml(s.privat_foelelser || '') + '</textarea>' +
      '</div>' +
      '<div class="form-group"><label>Adfærd (privat)</label>' +
        '<textarea id="ld-priv-adfaerd-' + s.id + '">' + escHtml(s.privat_adfaerd || '') + '</textarea>' +
      '</div>' +
      '<div class="form-group"><label>Tip (privat)</label>' +
        '<textarea id="ld-priv-tip-' + s.id + '">' + escHtml(s.privat_tip || '') + '</textarea>' +
      '</div>' +
      '<hr style="border:none;border-top:1px solid var(--border);margin:16px 0;">' +
      '<h4 style="color:var(--primary);margin-bottom:12px;">Professionelt perspektiv</h4>' +
      '<div class="form-group"><label>Beskrivelse (professionel)</label>' +
        '<textarea id="ld-prof-besk-' + s.id + '">' + escHtml(s.professionel_beskrivelse || '') + '</textarea>' +
      '</div>' +
      '<div class="form-group"><label>Krop (professionel)</label>' +
        '<textarea id="ld-prof-krop-' + s.id + '">' + escHtml(s.professionel_krop || '') + '</textarea>' +
      '</div>' +
      '<div class="form-group"><label>Følelser (professionel)</label>' +
        '<textarea id="ld-prof-foelelser-' + s.id + '">' + escHtml(s.professionel_foelelser || '') + '</textarea>' +
      '</div>' +
      '<div class="form-group"><label>Adfærd (professionel)</label>' +
        '<textarea id="ld-prof-adfaerd-' + s.id + '">' + escHtml(s.professionel_adfaerd || '') + '</textarea>' +
      '</div>' +
      '<div class="form-group"><label>Tip (professionel)</label>' +
        '<textarea id="ld-prof-tip-' + s.id + '">' + escHtml(s.professionel_tip || '') + '</textarea>' +
      '</div>' +
      '<button class="btn btn-primary" style="margin-top:12px;" onclick="AdminPanel.saveLadder(\'' + s.id + '\')">Gem ændringer</button>' +
    '</div>';
  }

  function saveLadder(id) {
    var data = {
      navn: $('#ld-navn-' + id).value.trim(),
      privat_beskrivelse: $('#ld-priv-besk-' + id).value.trim(),
      privat_krop: $('#ld-priv-krop-' + id).value.trim(),
      privat_foelelser: $('#ld-priv-foelelser-' + id).value.trim(),
      privat_adfaerd: $('#ld-priv-adfaerd-' + id).value.trim(),
      privat_tip: $('#ld-priv-tip-' + id).value.trim(),
      professionel_beskrivelse: $('#ld-prof-besk-' + id).value.trim(),
      professionel_krop: $('#ld-prof-krop-' + id).value.trim(),
      professionel_foelelser: $('#ld-prof-foelelser-' + id).value.trim(),
      professionel_adfaerd: $('#ld-prof-adfaerd-' + id).value.trim(),
      professionel_tip: $('#ld-prof-tip-' + id).value.trim()
    };

    FPBackend.update('ladder_states', id, data)
      .then(function () {
        toast('Trappetrin opdateret!');
        FPBackend.cacheClear('ladder_states');
      })
      .catch(function (err) { toast('Fejl: ' + err.message, 'error'); });
  }

  // ============================================================
  // MORGEN CHECK-IN
  // ============================================================
  function loadCheckins() {
    var list = $('#checkin-list');
    list.innerHTML = '<div class="loading">Indlæser morgen check-ins...</div>';
    $('#checkin-form-area').innerHTML = '';

    FPBackend.getAll('morning_checkins', '?select=*&order=sort_order.asc.nullslast,created_at.asc')
      .then(function (data) {
        if (!data || data.length === 0) {
          list.innerHTML = '<p style="color:var(--text-muted);padding:16px;">Ingen check-ins fundet.</p>';
          return;
        }
        var html = '<table class="data-table"><thead><tr>' +
          '<th>Spørgsmål</th><th>Svar</th><th>Rækkefølge</th><th>Status</th><th>Handlinger</th>' +
          '</tr></thead><tbody>';
        data.forEach(function (ci) {
          var svarCount = Array.isArray(ci.svar) ? ci.svar.length : 0;
          html += '<tr>' +
            '<td>' + escHtml((ci.spoergsmaal || '').substring(0, 60)) + (ci.spoergsmaal && ci.spoergsmaal.length > 60 ? '...' : '') + '</td>' +
            '<td>' + svarCount + ' svar</td>' +
            '<td>' + (ci.sort_order != null ? ci.sort_order : '-') + '</td>' +
            '<td><span class="badge ' + (ci.is_active !== false ? 'badge-active' : 'badge-inactive') + '">' +
              (ci.is_active !== false ? 'Aktiv' : 'Inaktiv') + '</span></td>' +
            '<td class="table-actions">' +
              '<button class="btn btn-secondary btn-sm" onclick="AdminPanel.editCheckin(\'' + ci.id + '\')">Rediger</button>' +
              '<button class="btn btn-danger btn-sm" onclick="AdminPanel.deleteCheckin(\'' + ci.id + '\')">Slet</button>' +
            '</td></tr>';
        });
        html += '</tbody></table>';
        list.innerHTML = html;
      })
      .catch(function (err) {
        list.innerHTML = '<p style="color:var(--danger);padding:16px;">Kunne ikke indlæse check-ins: ' + escHtml(err.message) + '</p>';
      });

    $('#btn-new-checkin').onclick = function () {
      showCheckinForm(null);
    };
  }

  function showCheckinForm(checkin) {
    var isEdit = !!checkin;
    var area = $('#checkin-form-area');
    var ci = checkin || { svar: [{}, {}, {}, {}], is_active: true };

    var svar = Array.isArray(ci.svar) ? ci.svar : [];
    // Sørg for præcis 4 svar
    while (svar.length < 4) svar.push({ label: '', respons: '', link: '', linkTekst: '' });

    var svarHtml = '<div class="svar-container">';
    for (var i = 0; i < 4; i++) {
      var s = svar[i] || {};
      svarHtml +=
        '<div class="svar-item">' +
          '<h4>Svar ' + (i + 1) + '</h4>' +
          '<div class="form-group"><label>Label</label>' +
            '<input class="ci-svar-label" value="' + escHtml(s.label || '') + '" placeholder="Svartekst">' +
          '</div>' +
          '<div class="form-group"><label>Respons</label>' +
            '<textarea class="ci-svar-respons" placeholder="Personlig respons">' + escHtml(s.respons || '') + '</textarea>' +
          '</div>' +
          '<div class="form-row">' +
            '<div class="form-group"><label>Link</label>' +
              '<input class="ci-svar-link" value="' + escHtml(s.link || '') + '" placeholder="f.eks. oevelse:grundøvelse">' +
            '</div>' +
            '<div class="form-group"><label>Link-tekst</label>' +
              '<input class="ci-svar-linktekst" value="' + escHtml(s.linkTekst || '') + '" placeholder="f.eks. Prøv øvelsen">' +
            '</div>' +
          '</div>' +
        '</div>';
    }
    svarHtml += '</div>';

    area.innerHTML =
      '<div class="form-card">' +
        '<h3>' + (isEdit ? 'Rediger morgen check-in' : 'Ny morgen check-in') + '</h3>' +
        '<div class="form-group"><label>ID</label>' +
          '<input id="ci-id" value="' + escHtml(ci.id || '') + '" ' + (isEdit ? 'readonly style="opacity:0.6"' : '') + ' placeholder="f.eks. checkin-26">' +
        '</div>' +
        '<div class="form-group"><label>Spørgsmål</label>' +
          '<textarea id="ci-spoergsmaal" placeholder="Dagens spørgsmål">' + escHtml(ci.spoergsmaal || '') + '</textarea>' +
        '</div>' +
        '<div class="form-group"><label>Svar (4 stk.)</label>' + svarHtml + '</div>' +
        '<div class="form-row">' +
          '<div class="form-group"><label>Rækkefølge</label>' +
            '<input type="number" id="ci-sort" value="' + (ci.sort_order != null ? ci.sort_order : '') + '">' +
          '</div>' +
          '<div class="form-group">' +
            '<label>&nbsp;</label>' +
            '<div class="toggle-wrap">' +
              '<input type="checkbox" class="toggle" id="ci-active"' + (ci.is_active !== false ? ' checked' : '') + '>' +
              '<label for="ci-active">Aktiv</label>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div style="display:flex;gap:8px;margin-top:16px;">' +
          '<button class="btn btn-primary" onclick="AdminPanel.saveCheckin(' + (isEdit ? 'true' : 'false') + ')">Gem</button>' +
          '<button class="btn btn-secondary" onclick="AdminPanel.cancelCheckin()">Annuller</button>' +
        '</div>' +
      '</div>';

    area.scrollIntoView({ behavior: 'smooth' });
  }

  function saveCheckin(isEdit) {
    var svarEls = {
      labels: $$('.ci-svar-label'),
      respons: $$('.ci-svar-respons'),
      links: $$('.ci-svar-link'),
      linkTekster: $$('.ci-svar-linktekst')
    };

    var svar = [];
    for (var i = 0; i < 4; i++) {
      svar.push({
        label: svarEls.labels[i] ? svarEls.labels[i].value.trim() : '',
        respons: svarEls.respons[i] ? svarEls.respons[i].value.trim() : '',
        link: svarEls.links[i] ? svarEls.links[i].value.trim() : '',
        linkTekst: svarEls.linkTekster[i] ? svarEls.linkTekster[i].value.trim() : ''
      });
    }

    var data = {
      id: $('#ci-id').value.trim(),
      spoergsmaal: $('#ci-spoergsmaal').value.trim(),
      svar: svar,
      sort_order: $('#ci-sort').value ? parseInt($('#ci-sort').value) : null,
      is_active: $('#ci-active').checked
    };

    if (!data.id || !data.spoergsmaal) {
      toast('ID og spørgsmål er påkrævet.', 'error');
      return;
    }

    var promise = isEdit
      ? FPBackend.update('morning_checkins', data.id, data)
      : FPBackend.create('morning_checkins', data);

    promise
      .then(function () {
        toast(isEdit ? 'Check-in opdateret!' : 'Check-in oprettet!');
        FPBackend.cacheClear('morning_checkins');
        loadCheckins();
      })
      .catch(function (err) { toast('Fejl: ' + err.message, 'error'); });
  }

  function editCheckin(id) {
    FPBackend.getOne('morning_checkins', id).then(function (ci) {
      if (ci) showCheckinForm(ci);
      else toast('Kunne ikke finde check-in.', 'error');
    });
  }

  function deleteCheckin(id) {
    if (!confirm('Er du sikker på at du vil slette denne morgen check-in?')) return;
    FPBackend.remove('morning_checkins', id)
      .then(function () {
        toast('Check-in slettet.');
        FPBackend.cacheClear('morning_checkins');
        loadCheckins();
      })
      .catch(function (err) { toast('Fejl: ' + err.message, 'error'); });
  }

  function cancelCheckin() {
    $('#checkin-form-area').innerHTML = '';
  }

  // ============================================================
  // EMAIL-TILMELDINGER
  // ============================================================
  function loadSubscribers() {
    var list = $('#subscriber-list');
    list.innerHTML = '<div class="loading">Indlæser tilmeldinger...</div>';

    FPBackend.getSubscribers()
      .then(function (data) {
        if (!data || data.length === 0) {
          list.innerHTML = '<p style="color:var(--text-muted);padding:16px;">Ingen tilmeldinger endnu.</p>';
          $('#subscriber-count').textContent = '0 tilmeldinger';
          return;
        }
        $('#subscriber-count').textContent = data.length + ' tilmelding' + (data.length !== 1 ? 'er' : '');

        var html = '<table class="data-table"><thead><tr>' +
          '<th>Email</th><th>Navn</th><th>Perspektiv</th><th>Tilmeldt</th>' +
          '</tr></thead><tbody>';
        data.forEach(function (sub) {
          var date = sub.subscribed_at ? new Date(sub.subscribed_at).toLocaleDateString('da-DK') : '-';
          html += '<tr>' +
            '<td>' + escHtml(sub.email) + '</td>' +
            '<td>' + escHtml(sub.name || '-') + '</td>' +
            '<td>' + escHtml(sub.perspektiv || '-') + '</td>' +
            '<td>' + date + '</td>' +
            '</tr>';
        });
        html += '</tbody></table>';
        list.innerHTML = html;

        // Gem data til CSV-eksport
        subscriberData = data;
      })
      .catch(function (err) {
        list.innerHTML = '<p style="color:var(--danger);padding:16px;">Kunne ikke indlæse tilmeldinger: ' + escHtml(err.message) + '</p>';
      });

    $('#btn-export-csv').onclick = exportCSV;
  }

  var subscriberData = [];

  function exportCSV() {
    if (!subscriberData || subscriberData.length === 0) {
      toast('Ingen data at eksportere.', 'error');
      return;
    }

    var csv = 'Email,Navn,Perspektiv,Tilmeldt\n';
    subscriberData.forEach(function (sub) {
      csv += '"' + (sub.email || '').replace(/"/g, '""') + '",';
      csv += '"' + (sub.name || '').replace(/"/g, '""') + '",';
      csv += '"' + (sub.perspektiv || '').replace(/"/g, '""') + '",';
      csv += '"' + (sub.subscribed_at || '').replace(/"/g, '""') + '"\n';
    });

    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'familiepraxis-tilmeldinger-' + new Date().toISOString().split('T')[0] + '.csv';
    a.click();
    URL.revokeObjectURL(url);
    toast('CSV eksporteret!');
  }

  // ============================================================
  // Generiske array-hjælpere
  // ============================================================
  function buildArrayItem(prefix, index, value, useTextarea) {
    var tag = useTextarea ? 'textarea' : 'input';
    var inputHtml = useTextarea
      ? '<textarea class="array-value" rows="2">' + escHtml(value || '') + '</textarea>'
      : '<input class="array-value" value="' + escHtml(value || '') + '">';

    return '<div class="array-item">' +
      inputHtml +
      '<button class="btn-remove-item" onclick="this.parentElement.remove()" title="Fjern">&times;</button>' +
    '</div>';
  }

  function addArrayItem(containerId) {
    var container = $('#' + containerId);
    if (!container) return;
    var idx = container.children.length;
    container.insertAdjacentHTML('beforeend', buildArrayItem(containerId, idx, '', true));
  }

  function collectArrayValues(containerId) {
    var container = $('#' + containerId);
    if (!container) return [];
    var values = [];
    container.querySelectorAll('.array-value').forEach(function (input) {
      var val = input.value.trim();
      if (val) values.push(val);
    });
    return values;
  }

  // ============================================================
  // Public API (for onclick handlers)
  // ============================================================
  window.AdminPanel = {
    // Øvelser
    editExercise: editExercise,
    deleteExercise: deleteExercise,
    saveExercise: saveExercise,
    cancelExercise: cancelExercise,
    addExerciseTrin: addExerciseTrin,

    // Temaer
    editTheme: editTheme,
    deleteTheme: deleteTheme,
    saveTheme: saveTheme,
    cancelTheme: cancelTheme,

    // Cirkler
    editCircle: editCircle,
    saveCircle: saveCircle,
    cancelCircle: cancelCircle,

    // Trappen
    saveLadder: saveLadder,

    // Morgen check-in
    editCheckin: editCheckin,
    deleteCheckin: deleteCheckin,
    saveCheckin: saveCheckin,
    cancelCheckin: cancelCheckin,

    // Generisk array
    addArrayItem: addArrayItem
  };

  // ---------- Start ----------
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
