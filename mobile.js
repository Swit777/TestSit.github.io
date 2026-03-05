/* ═══════════════════════════════════════════════
   VITAFIT – MOBILE.JS  v3
   Left drawer + phone btn + scroll-to-top
   ═══════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── определяем текущую страницу ── */
  var page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  var isHome     = page === '' || page === 'index.html';
  var isPrograms = page === 'programs.html';
  var isContacts = page === 'contacts.html';

  /* ── получаем текущий язык ── */
  function getLang() { return localStorage.getItem('vitafit_lang') || 'ru'; }

  /* ────────────────────────────────────────────────
     1. ИНЖЕКТИРУЕМ ЛЕВЫЙ DRAWER
     ──────────────────────────────────────────────── */
  function buildDrawer() {
    var drawer = document.createElement('div');
    drawer.className = 'mob-drawer';
    drawer.id = 'mobDrawer';

    var lang = getLang();

    drawer.innerHTML =
      '<div class="mob-overlay" id="mobOverlay"></div>' +
      '<div class="mob-panel">' +
        '<div class="mob-header">' +
          '<a href="index.html" class="mob-logo">VITAFIT<small>\u00ab healthy food \u00bb</small></a>' +
          '<button class="mob-close" id="mobClose" aria-label="Close">&#x2715;</button>' +
        '</div>' +

        '<ul class="mob-links">' +
          '<li><a href="index.html" class="' + (isHome ? 'active' : '') + '" data-i18n="nav_home">' +
            '<span class="mob-icon">🏠</span><span data-i18n="nav_home">Главная</span></a></li>' +
          '<li><a href="programs.html" class="' + (isPrograms ? 'active' : '') + '" data-i18n="nav_programs">' +
            '<span class="mob-icon">🥗</span><span data-i18n="nav_programs">Программы</span></a></li>' +
          '<li><a href="contacts.html" class="' + (isContacts ? 'active' : '') + '" data-i18n="nav_contacts">' +
            '<span class="mob-icon">📬</span><span data-i18n="nav_contacts">Контакты</span></a></li>' +
        '</ul>' +

        '<a class="mob-cta" href="contacts.html" data-i18n="nav_connect">Связаться</a>' +

        '<div class="mob-phone-block">' +
          '<div class="mob-phone-label">Телефон</div>' +
          '<a class="mob-phone-link" href="tel:+37300000000" id="mobPhoneLink">+373 00 000 000</a>' +
        '</div>' +

        '<div class="mob-lang" id="mobLangRow">' +
          '<button class="mob-lang-btn' + (lang==='ro' ? ' active' : '') + '" data-lang="ro">RO</button>' +
          '<button class="mob-lang-btn' + (lang==='en' ? ' active' : '') + '" data-lang="en">ENG</button>' +
          '<button class="mob-lang-btn' + (lang==='ru' ? ' active' : '') + '" data-lang="ru">RU</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(drawer);

    /* закрытие */
    document.getElementById('mobOverlay').addEventListener('click', closeDrawer);
    document.getElementById('mobClose').addEventListener('click', closeDrawer);
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeDrawer(); });

    /* закрытие при переходе по ссылке */
    drawer.querySelectorAll('.mob-links a, .mob-cta').forEach(function(a) {
      a.addEventListener('click', function() { closeDrawer(true); });
    });

    /* переключение языка */
    drawer.querySelectorAll('.mob-lang-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var l = btn.dataset.lang;
        localStorage.setItem('vitafit_lang', l);
        drawer.querySelectorAll('.mob-lang-btn').forEach(function(b) {
          b.classList.toggle('active', b.dataset.lang === l);
        });
        /* синхронизация с lang.js */
        if (typeof setLanguage === 'function') { setLanguage(l); }
        else { location.reload(); }
      });
    });

    /* синхронизация номера телефона из nav */
    var navPhone = document.querySelector('nav .nav-phone');
    if (navPhone) {
      var num = navPhone.textContent.trim();
      var href = navPhone.getAttribute('href');
      var link = document.getElementById('mobPhoneLink');
      if (link) { link.textContent = num; link.setAttribute('href', href || '#'); }
    }
  }

  /* ── открыть / закрыть ── */
  function openDrawer() {
    var d = document.getElementById('mobDrawer');
    var b = document.getElementById('navBurger');
    if (!d) return;
    d.classList.add('open');
    if (b) { b.classList.add('open'); b.setAttribute('aria-expanded', 'true'); }
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer(instant) {
    var d = document.getElementById('mobDrawer');
    var b = document.getElementById('navBurger');
    if (!d) return;
    d.classList.remove('open');
    if (b) { b.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); }
    document.body.style.overflow = '';
  }

  /* ────────────────────────────────────────────────
     2. ИНЖЕКТИРУЕМ БУРГЕР-КНОПКУ И КНОПКУ ТЕЛЕФОНА
     ──────────────────────────────────────────────── */
  function buildNavBtns() {
    var nav = document.querySelector('nav');
    if (!nav) return;

    /* убираем старый бургер если есть */
    var old = nav.querySelector('.nav-burger');
    if (old) old.remove();

    /* ── бургер (слева от лого) ── */
    var burger = document.createElement('button');
    burger.className = 'nav-burger';
    burger.id = 'navBurger';
    burger.setAttribute('aria-label', 'Меню');
    burger.setAttribute('aria-expanded', 'false');
    burger.innerHTML = '<span></span><span></span><span></span>';
    burger.addEventListener('click', openDrawer);

    /* ── кнопка телефона (в .nav-right) ── */
    var phoneBtn = document.createElement('a');
    phoneBtn.className = 'nav-phone-btn';
    phoneBtn.id = 'navPhoneBtn';
    phoneBtn.setAttribute('aria-label', 'Позвонить');

    /* берём href из оригинальной ссылки */
    var origPhone = nav.querySelector('.nav-phone');
    phoneBtn.href = origPhone ? origPhone.getAttribute('href') : 'tel:+37300000000';
    phoneBtn.textContent = '📞';

    /* вставляем бургер ПЕРВЫМ ребёнком nav */
    nav.insertBefore(burger, nav.firstChild);

    /* вставляем phoneBtn в .nav-right */
    var navRight = nav.querySelector('.nav-right');
    if (navRight) navRight.insertBefore(phoneBtn, navRight.firstChild);
    else nav.appendChild(phoneBtn);
  }

  /* ────────────────────────────────────────────────
     3. КНОПКА «ВВЕРХ»
     ──────────────────────────────────────────────── */
  function buildScrollTop() {
    var btn = document.createElement('button');
    btn.className = 'scroll-top-btn';
    btn.setAttribute('aria-label', 'Наверх');
    btn.textContent = '↑';
    document.body.appendChild(btn);
    window.addEventListener('scroll', function() {
      btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    btn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ────────────────────────────────────────────────
     4. INIT
     ──────────────────────────────────────────────── */
  function init() {
    buildNavBtns();
    buildDrawer();
    buildScrollTop();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
