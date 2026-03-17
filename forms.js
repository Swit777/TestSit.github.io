/* ═══════════════════════════════════════════════════════════
   SAVUR — FORMS.JS
   ═══════════════════════════════════════════════════════════ */

var FORMSPREE_ID = 'xwvrezlk';

/* ─── Обязательные поля ───────────────────────────────────── */
var REQUIRED_KEYS = ['f_name', 'f_phone', 'f_address', 'f_program', 'f_days', 'f_duration'];

/* ─── Утилиты ─────────────────────────────────────────────── */

function getVal(el) {
  if (!el) return '';
  if (el.classList && el.classList.contains('phone-iti')) {
    var iti = null;
    if (window.intlTelInputGlobals && window.intlTelInputGlobals.getInstance) {
      iti = window.intlTelInputGlobals.getInstance(el);
    }
    if (iti) return iti.getNumber();
    return el.value || '';
  }
  return el.value || '';
}

function collectFields(container) {
  var data = {};
  container.querySelectorAll('input, select, textarea').forEach(function(el) {
    if (el.type === 'hidden') return;
    var group = el.closest('.fg, .cta-form-group, .omg');
    var labelEl = group ? group.querySelector('label') : null;
    var key = labelEl ? labelEl.textContent.replace('*', '').trim() : (el.name || el.placeholder || el.type);
    if (!key) return;
    var val = getVal(el);
    if (val && val.trim()) data[key] = val.trim();
  });
  return data;
}

/* ─── Ошибки валидации ────────────────────────────────────── */

function setFieldError(group, hasError) {
  var input = group.querySelector('input, select, textarea');
  var label = group.querySelector('label');
  if (hasError) {
    if (input) { input.style.borderColor = '#e53935'; input.style.boxShadow = '0 0 0 3px rgba(229,57,53,.18)'; }
    if (label && !label.querySelector('.req-star')) {
      var star = document.createElement('span');
      star.className = 'req-star';
      star.textContent = ' *';
      star.style.cssText = 'color:#e53935;font-weight:700;';
      label.appendChild(star);
    }
  } else {
    if (input) { input.style.borderColor = ''; input.style.boxShadow = ''; }
    if (label) { var s = label.querySelector('.req-star'); if (s) s.remove(); }
  }
}

function validateForm(container) {
  var hasErrors = false;
  REQUIRED_KEYS.forEach(function(key) {
    var label = container.querySelector('label[data-i18n="' + key + '"]');
    if (!label) return;
    var group = label.closest('.fg, .cta-form-group, .omg');
    if (!group) return;
    var isEmpty = false;
    var phoneInput = group.querySelector('.phone-iti');
    if (phoneInput) {
      var iti = null;
      if (window.intlTelInputGlobals && window.intlTelInputGlobals.getInstance) {
        iti = window.intlTelInputGlobals.getInstance(phoneInput);
      }
      var v = iti ? iti.getNumber() : phoneInput.value;
      isEmpty = !v || v.replace(/\D/g, '').length < 7;
    } else {
      var field = group.querySelector('input, select, textarea');
      isEmpty = !field || !field.value || field.value.trim() === '';
    }
    setFieldError(group, isEmpty);
    if (isEmpty) hasErrors = true;
  });
  return !hasErrors;
}

function clearErrors(container) {
  container.querySelectorAll('.fg, .cta-form-group, .omg').forEach(function(g) { setFieldError(g, false); });
}

document.addEventListener('input', function(e) {
  var group = e.target.closest('.fg, .cta-form-group, .omg');
  if (group) setFieldError(group, false);
}, true);

document.addEventListener('change', function(e) {
  if (e.target.tagName !== 'SELECT') return;
  var group = e.target.closest('.fg, .cta-form-group, .omg');
  if (group && e.target.value) setFieldError(group, false);
}, true);

/* ─── Статус отправки ─────────────────────────────────────── */

function showStatus(btn, state, msg) {
  var wrap = btn.parentNode;
  var existing = wrap.querySelector('.form-status');
  if (existing) existing.remove();
  var div = document.createElement('div');
  div.className = 'form-status';
  div.style.cssText = [
    'margin-top:12px', 'padding:12px 16px', 'border-radius:10px',
    'font-size:14px', 'font-weight:600', 'font-family:Nunito,sans-serif', 'text-align:center',
    state === 'ok'
      ? 'background:#e8f5e0;color:#2d5a1b;border:1.5px solid #b2d89a'
      : 'background:#fdecea;color:#b71c1c;border:1.5px solid #f5b4b0'
  ].join(';');
  div.textContent = msg;
  wrap.appendChild(div);
  if (state === 'ok') setTimeout(function() { if (div.parentNode) div.remove(); }, 5000);
}

function setLoading(btn, loading) {
  btn.disabled = loading;
  btn.dataset.origText = btn.dataset.origText || btn.textContent;
  btn.textContent = loading ? 'Отправка...' : btn.dataset.origText;
  btn.style.opacity = loading ? '0.7' : '';
}

/* ─── Отправка ────────────────────────────────────────────── */

function sendToFormspree(fields, btn, successMsg, errorMsg) {
  if (FORMSPREE_ID === 'YOUR_FORM_ID') { showStatus(btn, 'err', '⚠ Formspree не настроен.'); return; }
  setLoading(btn, true);
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
      var form = btn.closest('.cta-form-wrap, .contact-form-panel, .order-modal-body');
      if (form) {
        form.querySelectorAll('input:not([type=hidden]), textarea').forEach(function(el) { el.value = ''; });
        form.querySelectorAll('select').forEach(function(el) { el.selectedIndex = 0; });
        clearErrors(form);
      }
    } else {
      showStatus(btn, 'err', errorMsg);
    }
  })
  .catch(function() { setLoading(btn, false); showStatus(btn, 'err', errorMsg); });
}

/* ═══════════════════════════════════════════════════════════
   ФИКС PLACEHOLDER ТЕЛЕФОНА
   ITI после загрузки utils.js перезаписывает placeholder
   на английский. Следим через MutationObserver и сразу
   восстанавливаем правильный текст из TRANSLATIONS.
   ═══════════════════════════════════════════════════════════ */

function getCorrectPhonePlaceholder() {
  var lang = localStorage.getItem('savur_lang') || 'ru';
  if (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[lang] && TRANSLATIONS[lang]['f_phone']) {
    return TRANSLATIONS[lang]['f_phone'];
  }
  /* запасные значения если TRANSLATIONS ещё не загружен */
  var fallbacks = { ru: 'Номер телефона', ro: 'Număr de telefon', en: 'Phone number' };
  return fallbacks[lang] || 'Номер телефона';
}

function fixPhonePlaceholders() {
  document.querySelectorAll('.phone-iti').forEach(function(el) {
    var correct = getCorrectPhonePlaceholder();
    if (el.placeholder !== correct) {
      el.placeholder = correct;
      el.setAttribute('placeholder', correct);
    }
  });
}

function watchPhonePlaceholders() {
  document.querySelectorAll('.phone-iti').forEach(function(el) {
    var observer = new MutationObserver(function() {
      var correct = getCorrectPhonePlaceholder();
      if (el.placeholder !== correct) {
        /* отключаем наблюдатель пока сами меняем, чтобы не зациклиться */
        observer.disconnect();
        el.placeholder = correct;
        el.setAttribute('placeholder', correct);
        /* включаем обратно */
        observer.observe(el, { attributes: true, attributeFilter: ['placeholder'] });
      }
    });
    observer.observe(el, { attributes: true, attributeFilter: ['placeholder'] });
  });

  /* Также исправляем сразу и ещё раз через 300/800/1500ms — на случай если
     utils.js подгружается с задержкой и меняет placeholder позже */
  fixPhonePlaceholders();
  setTimeout(fixPhonePlaceholders, 300);
  setTimeout(fixPhonePlaceholders, 800);
  setTimeout(fixPhonePlaceholders, 1500);
}

/* ─── Инициализация форм ──────────────────────────────────── */

function initForms() {
  var successMsg = '✓ Сообщение отправлено! Мы свяжемся с вами в ближайшее время.';
  var errorMsg   = '✗ Ошибка отправки. Попробуйте ещё раз или позвоните нам.';

  /* ── 1. Главная ── */
  var ctaBtn = document.querySelector('.btn-cta-submit');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', function() {
      var container = ctaBtn.closest('.cta-form-wrap');
      if (!container) return;
      if (!validateForm(container)) return;
      sendToFormspree(collectFields(container), ctaBtn, successMsg, errorMsg);
    });
  }

  /* ── 2. Контакты ── */
  var contactBtn = document.querySelector('.btn-submit');
  if (contactBtn) {
    contactBtn.addEventListener('click', function() {
      var container = contactBtn.closest('.contact-form-panel');
      if (!container) return;
      if (!validateForm(container)) return;
      sendToFormspree(collectFields(container), contactBtn, successMsg, errorMsg);
    });
  }

  /* ── 3. Модальная форма ── */
  var orderBtn = document.querySelector('.btn-om-submit');
  if (orderBtn) {
    orderBtn.addEventListener('click', function() {
      var container = orderBtn.closest('.order-modal-body');
      if (!container) return;
      if (!validateForm(container)) return;
      sendToFormspree(collectFields(container), orderBtn, successMsg, errorMsg);
    });
  }

  /* Запускаем слежку за placeholder телефона */
  watchPhonePlaceholders();
}

/* ─── Запуск ─────────────────────────────────────────────── */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initForms);
} else {
  initForms();
}
