/* ═══════════════════════════════════════════════════════════
   SAVUR — FORMS.JS
   Отправка форм через Formspree на britcovdenis@gmail.com

   ШАГ 1: Зарегистрируйтесь на https://formspree.io
   ШАГ 2: Создайте новую форму (New Form) → укажите britcovdenis@gmail.com
   ШАГ 3: Скопируйте ваш Form ID (выглядит как: xpwzrqkj)
   ШАГ 4: Вставьте ID в строку ниже вместо YOUR_FORM_ID
   ═══════════════════════════════════════════════════════════ */

var FORMSPREE_ID = 'xwvrezlk'; // ← сюда вставить ID из formspree.io

/* ─── Утилиты ─────────────────────────────────────────────── */

function getVal(el) {
  if (!el) return '';
  // intl-tel-input — берём полный номер с кодом страны
  if (el.classList && el.classList.contains('phone-iti')) {
    var iti = window.intlTelInputGlobals && window.intlTelInputGlobals.getInstance
      ? window.intlTelInputGlobals.getInstance(el) : null;
    if (iti) return iti.getNumber();
  }
  return el.value || '';
}

function collectFields(container) {
  var data = {};
  var inputs = container.querySelectorAll('input, select, textarea');
  inputs.forEach(function(el) {
    if (el.type === 'hidden') return;
    var label = el.closest('.fg, .cta-form-group, .omg');
    var labelEl = label ? label.querySelector('label') : null;
    var key = labelEl ? labelEl.textContent.trim() : (el.name || el.placeholder || el.type);
    if (!key) return;
    var val = getVal(el);
    if (val) data[key] = val;
  });
  return data;
}

/* ─── Показ статуса ───────────────────────────────────────── */

function showStatus(btn, state, msg) {
  var wrap = btn.parentNode;
  var existing = wrap.querySelector('.form-status');
  if (existing) existing.remove();

  var div = document.createElement('div');
  div.className = 'form-status';
  div.style.cssText = [
    'margin-top:12px',
    'padding:12px 16px',
    'border-radius:10px',
    'font-size:14px',
    'font-weight:600',
    'font-family:Nunito,sans-serif',
    'text-align:center',
    state === 'ok'
      ? 'background:#e8f5e0;color:#2d5a1b;border:1.5px solid #b2d89a'
      : 'background:#fdecea;color:#b71c1c;border:1.5px solid #f5b4b0'
  ].join(';');
  div.textContent = msg;
  wrap.appendChild(div);

  if (state === 'ok') {
    setTimeout(function() { if (div.parentNode) div.remove(); }, 5000);
  }
}

function setLoading(btn, loading) {
  btn.disabled = loading;
  btn.dataset.origText = btn.dataset.origText || btn.textContent;
  btn.textContent = loading ? 'Отправка...' : btn.dataset.origText;
  btn.style.opacity = loading ? '0.7' : '';
}

/* ─── Отправка через Formspree ────────────────────────────── */

function sendToFormspree(fields, btn, successMsg, errorMsg) {
  if (FORMSPREE_ID === 'YOUR_FORM_ID') {
    showStatus(btn, 'err',
      '⚠ Formspree не настроен. Зарегистрируйтесь на formspree.io и вставьте ID в forms.js');
    return;
  }

  setLoading(btn, true);

  // Добавляем метку источника
  fields['_source'] = window.location.pathname.split('/').pop() || 'index.html';
  fields['_replyto'] = fields['Email'] || '';

  fetch('https://formspree.io/f/' + FORMSPREE_ID, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(fields)
  })
  .then(function(r) { return r.json().then(function(d) { return { ok: r.ok, data: d }; }); })
  .then(function(res) {
    setLoading(btn, false);
    if (res.ok) {
      showStatus(btn, 'ok', successMsg);
      // сбрасываем поля
      var form = btn.closest('.cta-form-wrap, .contact-form-panel, .order-modal-body');
      if (form) {
        form.querySelectorAll('input:not([type=hidden]), textarea').forEach(function(el) {
          el.value = '';
        });
        form.querySelectorAll('select').forEach(function(el) {
          el.selectedIndex = 0;
        });
      }
    } else {
      showStatus(btn, 'err', errorMsg);
    }
  })
  .catch(function() {
    setLoading(btn, false);
    showStatus(btn, 'err', errorMsg);
  });
}

/* ─── Инициализация форм ──────────────────────────────────── */

function initForms() {

  var successMsg = '✓ Сообщение отправлено! Мы свяжемся с вами в ближайшее время.';
  var errorMsg   = '✗ Ошибка отправки. Попробуйте ещё раз или позвоните нам.';

  /* ── 1. Форма на главной (index.html) ── */
  var ctaBtn = document.querySelector('.btn-cta-submit');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', function() {
      var container = ctaBtn.closest('.cta-form-wrap');
      if (!container) return;
      var fields = collectFields(container);
      sendToFormspree(fields, ctaBtn, successMsg, errorMsg);
    });
  }

  /* ── 2. Форма на странице Контакты (contacts.html) ── */
  var contactBtn = document.querySelector('.btn-submit');
  if (contactBtn) {
    contactBtn.addEventListener('click', function() {
      var container = contactBtn.closest('.contact-form-panel');
      if (!container) return;
      var fields = collectFields(container);
      sendToFormspree(fields, contactBtn, successMsg, errorMsg);
    });
  }

  /* ── 3. Модальная форма Order Program (programs.html) ── */
  var orderBtn = document.querySelector('.btn-om-submit');
  if (orderBtn) {
    orderBtn.addEventListener('click', function() {
      var container = orderBtn.closest('.order-modal-body');
      if (!container) return;
      var fields = collectFields(container);
      sendToFormspree(fields, orderBtn, successMsg, errorMsg);
    });
  }
}

/* ─── Запуск ─────────────────────────────────────────────── */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initForms);
} else {
  initForms();
}
