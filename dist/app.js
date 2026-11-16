(() => {
'use strict';
const root = document.documentElement;
const {t} = window.AD_I18N;
const themeButton = document.querySelector('.theme-toggle');
function updateThemeLabel() {
  const isDark = root.dataset.theme === 'dark';
  themeButton.setAttribute('aria-label', t(isDark ? 'Включить светлую тему' : 'Включить тёмную тему'));
  document.querySelector('meta[name="theme-color"]').content = isDark ? '#141416' : '#f8f8fa';
}
updateThemeLabel();
themeButton.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('ad-theme', root.dataset.theme); } catch {}
  updateThemeLabel();
});
const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
function updateMenuLabel() {
  menuButton.setAttribute('aria-label', t(menuButton.getAttribute('aria-expanded') === 'true' ? 'Закрыть меню' : 'Открыть меню'));
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  mobileNav.hidden = !open;
  menuButton.textContent = open ? '×' : '☰';
  updateMenuLabel();
});
mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
  mobileNav.hidden = true;
  updateMenuLabel();
}));
const modes = {
  dense: {index:'01 / DENSE RETRIEVAL', title:'Поиск по смыслу, а не по словам.', copy:'Эмбеддинги находят семантически близкие фрагменты, даже если вопрос и документ сформулированы по-разному. Подбираем модель под язык и предметную область.', use:'Для естественных вопросов, синонимов и смысловых связей.', rank:'Reranker'},
  sparse: {index:'02 / SPARSE RETRIEVAL', title:'Нужное слово. Точное совпадение.', copy:'BM25 ранжирует документы по совпадениям терминов с учётом их редкости и длины документа. Полезен для артикулов, аббревиатур и специфичной терминологии.', use:'Для кодов, идентификаторов, названий и редких терминов.', rank:'Reranker'},
  hybrid: {index:'03 / HYBRID RETRIEVAL', title:'Смысл + точные совпадения.', copy:'Объединяем семантический поиск и BM25, сводим результаты через fusion и поднимаем самые релевантные фрагменты с помощью reranker.', use:'Для разнородной базы знаний: тексты, названия, коды и термины.', rank:'Fusion + Reranker'}
};
const tabs = [...document.querySelectorAll('[role="tab"]')];
let activeMode = 'hybrid';
function selectMode(tab) {
  activeMode = tab.dataset.mode;
  const m = modes[activeMode];
  tabs.forEach(button => {
    button.setAttribute('aria-selected', String(button === tab));
    button.tabIndex = button === tab ? 0 : -1;
  });
  document.querySelector('#retrieval-panel').setAttribute('aria-labelledby', tab.id);
  document.querySelector('.panel-index').textContent = m.index;
  document.querySelector('#retrieval-title').textContent = t(m.title);
  document.querySelector('#retrieval-copy').textContent = t(m.copy);
  document.querySelector('#retrieval-use').textContent = t(m.use);
  document.querySelector('#rank-label').textContent = m.rank;
  document.querySelector('#dense-node').classList.toggle('active', activeMode !== 'sparse');
  document.querySelector('#sparse-node').classList.toggle('active', activeMode !== 'dense');
}
tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => selectMode(tab));
  tab.addEventListener('keydown', e => {
    let next;
    if (e.key === 'ArrowRight') next = (i + 1) % tabs.length;
    if (e.key === 'ArrowLeft') next = (i + tabs.length - 1) % tabs.length;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { e.preventDefault(); selectMode(tabs[next]); tabs[next].focus(); }
  });
});
const email = 'adashkevich@appcloud.com.pl';
function showStatus(selector, message) {
  const element = document.querySelector(selector);
  element.dataset.message = message;
  element.textContent = t(message);
}
document.querySelector('.copy-email').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(email); showStatus('.copy-status', 'Email скопирован.'); }
  catch { showStatus('.copy-status', 'Выделите и скопируйте адрес выше.'); }
});
const contactForm = document.querySelector('#contact-form');
const formFields = [...contactForm.querySelectorAll('input, textarea')];
function validateField(field) {
  field.setCustomValidity('');
  if (field.required && !field.value.trim()) field.setCustomValidity(t('Пожалуйста, заполните это поле.'));
  else if (field.validity.typeMismatch) field.setCustomValidity(t('Пожалуйста, укажите корректный email.'));
}
contactForm.noValidate = true;
formFields.forEach(field => field.addEventListener('input', () => field.setCustomValidity('')));
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  formFields.forEach(validateField);
  if (!contactForm.reportValidity()) return;
  const d = new FormData(contactForm);
  const service = contactForm.querySelector('select').selectedOptions[0].textContent;
  const subject = `${t('AI-проект:')} ${service}`;
  const body = `${t('Здравствуйте, Andrei!')}\n\n${t('Имя')}: ${String(d.get('name')).trim()}\n${t('Email для ответа')}: ${d.get('email')}\n${t('Интересует')}: ${service}\n\n${String(d.get('message')).trim()}\n`;
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  showStatus('.form-status', 'Письмо подготовлено. Если почтовое приложение не открылось, напишите напрямую на адрес слева или скопируйте email.');
  document.querySelector('.form-status').focus();
});
document.addEventListener('ad:languagechange', () => {
  updateThemeLabel();
  updateMenuLabel();
  selectMode(tabs.find(tab => tab.dataset.mode === activeMode));
  document.querySelectorAll('[data-message]').forEach(element => { element.textContent = t(element.dataset.message); });
  formFields.forEach(field => field.setCustomValidity(''));
});

})();
