(() => {
'use strict';
const translations = {
  "Перейти к содержимому": "Skip to content",
  "Экспертиза": "Expertise",
  "Подход": "Approach",
  "Обо мне": "About",
  "Обсудить проект": "Let’s talk",
  "Превращаю": "Turning",
  "в работающие": "into working",
  "системы": "systems",
  "Помогаю командам разрабатывать быстрее,": "Helping teams build faster,",
  "автоматизировать сложное и находить точные ответы": "automate complex work and find accurate answers",
  "в собственных данных.": "in their own data.",
  "Обсудим вашу задачу": "Let’s discuss your project",
  "Моя экспертиза": "Explore my expertise",
  "От первого прототипа": "From the first prototype",
  "до надёжного production.": "to reliable production.",
  "Правильный контекст": "The right context",
  "Умные агенты": "Intelligent agents",
  "Проверяемый результат": "Verified outcomes",
  "ИНСТРУМЕНТЫ.": "TOOLS.",
  "НЕ ОГРАНИЧЕНИЯ.": "NOT LIMITATIONS.",
  "01 / ЭКСПЕРТИЗА": "01 / EXPERTISE",
  "Технологии под задачу. Результат под бизнес.": "Built for your challenge. Aligned with your business.",
  "Меньше рутины.": "Less busywork.",
  "Больше возможностей.": "More possibilities.",
  "Три направления, одна цель —": "Three areas of expertise. One goal:",
  "AI, который приносит практическую пользу.": "AI that makes a practical difference.",
  "Разработка с AI.": "AI-powered development.",
  "Система, а не автодополнение.": "A complete engineering workflow.",
  "Настраиваю Claude Code, Codex, Cursor и OpenCode под ваш репозиторий, команду и процессы — от постановки задачи до релиза.": "I configure Claude Code, Codex, Cursor and OpenCode around your repository, team and workflow — from the brief to the release.",
  "Полный цикл: планирование → код → ревью → тесты → CI/CD и деплой.": "The full cycle: planning → code → review → testing → CI/CD and deployment.",
  "Правила проекта, skills, MCP-интеграции и управление контекстом.": "Project rules, skills, MCP integrations and context management.",
  "Оптимизация расхода токенов: выбор моделей, кеширование и точные инструкции.": "Token efficiency through model selection, caching and precise instructions.",
  "Рефакторинг, сокращение лишнего кода и исправление уязвимостей.": "Refactoring, removing unnecessary code and fixing vulnerabilities.",
  "Проверки качества, sandbox-подход и контроль действий агента.": "Quality gates, sandboxing and oversight of agent actions.",
  "Агенты, которые доводят": "Agents that take tasks",
  "задачи до результата.": "all the way to completion.",
  "Проектирую сложные агентные системы для бизнес-процессов: с состоянием, памятью, инструментами и понятными границами автономности.": "I design complex agent systems for business workflows, with state, memory, tools and clearly defined autonomy.",
  "Многошаговые процессы и команды специализированных агентов.": "Multi-step workflows and teams of specialized agents.",
  "Интеграции с CRM, API, базами данных и внутренними сервисами.": "Integrations with CRMs, APIs, databases and internal services.",
  "Human-in-the-loop: согласование важных решений человеком.": "Human-in-the-loop approval for consequential decisions.",
  "Сохранение состояния, повторные попытки и восстановление после ошибок.": "Persistent state, retries and recovery from failures.",
  "Трассировка, оценка качества, контроль стоимости и задержек.": "Tracing, quality evaluation, cost control and latency monitoring.",
  "Знания вашей компании.": "Your company’s knowledge.",
  "Ответы, которым можно доверять.": "Answers you can trust.",
  "Строю RAG-системы на внутренней базе знаний. Подбираю каждый этап поиска и генерации по результатам измерений на ваших данных.": "I build RAG systems on your internal knowledge base, tuning every retrieval and generation step using evaluations on your data.",
  "Векторный, лексический (BM25) и гибридный поиск.": "Vector, lexical (BM25) and hybrid retrieval.",
  "Подбор chunking, эмбеддингов и модели reranker; дообучение на доменных данных.": "Chunking, embedding and reranker selection, with fine-tuning on domain-specific data.",
  "Query transformation: multi-query, HyDE, декомпозиция и переписывание запросов.": "Query transformation: multi-query, HyDE, decomposition and query rewriting.",
  "Расширение контекста: parent-child retrieval, соседние фрагменты и metadata enrichment.": "Context expansion: parent-child retrieval, neighboring chunks and metadata enrichment.",
  "Источники в ответах, проверка groundedness и отказ от ответа при нехватке данных.": "Source citations, groundedness checks and abstention when evidence is insufficient.",
  "Контроль доступа к документам, обновление индекса и защита от prompt injection.": "Document access control, index updates and prompt injection defenses.",
  "Найти нужное.": "Retrieve what matters.",
  "Сгенерировать": "Generate",
  "точное.": "with precision.",
  "Качество ответа начинается задолго до промпта.": "Answer quality starts long before the prompt.",
  "Собираю весь путь — от документа до проверенного ответа.": "I engineer the entire path, from document to verified answer.",
  "ЦЕЛЕВОЙ ОРИЕНТИР": "PROJECT TARGET",
  "до": "up to",
  "точности на согласованном тестовом наборе": "accuracy on an agreed evaluation dataset",
  "Выберите стратегию поиска ↓": "Choose a retrieval strategy ↓",
  "Векторный": "Vector",
  "Лексический": "Lexical",
  "Гибридный": "Hybrid",
  "Смысл + точные совпадения.": "Meaning + exact matches.",
  "Объединяем семантический поиск и BM25, сводим результаты через fusion и поднимаем самые релевантные фрагменты с помощью reranker.": "Combine semantic retrieval and BM25, merge results through fusion and promote the most relevant passages with a reranker.",
  "Для разнородной базы знаний: тексты, названия, коды и термины.": "For mixed knowledge bases: prose, names, codes and terminology.",
  "Запрос пользователя": "User query",
  "Векторный поиск": "Vector retrieval",
  "Смысл и контекст": "Meaning and context",
  "Термины и совпадения": "Terms and matches",
  "Контекст для LLM": "Context for the LLM",
  "Дополнительно: мультиязычный поиск, OCR сложных документов, таблицы, versioning базы знаний и регрессионные evals.": "Also available: multilingual retrieval, OCR for complex documents, tables, knowledge versioning and regression evaluations.",
  "*96% — возможная цель проекта, а не гарантия. Метрика, тестовая выборка и критерии приёмки согласуются заранее. Результат зависит от данных, домена и сложности вопросов.": "*96% is a potential project target, not a guarantee. Metrics, evaluation data and acceptance criteria are agreed in advance. Results depend on the data, domain and complexity of the questions.",
  "02 / ПОДХОД": "02 / APPROACH",
  "Прозрачный процесс. Измеримое качество.": "A transparent process. Measurable quality.",
  "От «а что, если»": "From “what if”",
  "до «уже работает».": "to “it’s live.”",
  "Начинаем с вашей задачи.": "We start with your challenge.",
  "Заканчиваем системой, которую можно поддерживать.": "We deliver a system your team can maintain.",
  "Разобраться": "Discover",
  "Аудит процессов, данных и ограничений. Определяем сценарий, метрики успеха и стоимость ошибки.": "Audit workflows, data and constraints. Define the use case, success metrics and the cost of errors.",
  "Результат: план и критерии качества": "Deliverable: a plan and quality criteria",
  "Проверить": "Validate",
  "Прототип на ваших данных. Сравниваем подходы, измеряем качество, задержки и стоимость.": "Prototype on your data. Compare approaches and measure quality, latency and cost.",
  "Результат: PoC и оценка эффекта": "Deliverable: a PoC and impact assessment",
  "Внедрить": "Deploy",
  "Интеграции, тесты, безопасность и деплой. Подготавливаем систему к реальной нагрузке.": "Integrations, testing, security and deployment. Prepare the system for real-world workloads.",
  "Результат: рабочее решение": "Deliverable: a working solution",
  "Улучшать": "Improve",
  "Мониторинг, evals и обратная связь. Оптимизируем качество, токены и стоимость эксплуатации.": "Monitoring, evaluations and feedback. Optimize quality, token usage and operating costs.",
  "Результат: контроль и развитие": "Deliverable: visibility and ongoing improvement",
  "03 / ОБО МНЕ": "03 / ABOUT",
  "Соединяю AI с инженерной практикой.": "Bringing AI and engineering together.",
  "Мой фокус — системы, которые решают конкретную задачу бизнеса. С понятной архитектурой, проверяемым качеством и контролируемой стоимостью.": "I focus on systems that solve a specific business problem, with clear architecture, verifiable quality and controlled costs.",
  "Помогу выбрать подход, собрать решение и передать команде знания для дальнейшей работы. От разового аудита до полного цикла внедрения.": "I help you choose an approach, build the solution and equip your team to keep it running — from a one-off audit to full implementation.",
  "С чего": "Where do",
  "начнём": "we start",
  "Расскажите, что хотите улучшить.": "Tell me what you want to improve.",
  "Обсудим, где AI даст реальный эффект": "Let’s explore where AI can make a difference",
  "и какой первый шаг имеет смысл.": "and find the right first step.",
  "Скопировать email": "Copy email",
  "Немного о вашей задаче": "A little about your project",
  "Как к вам обращаться": "Your name",
  "Что вас интересует": "What are you interested in?",
  "Давайте определим вместе": "Let’s figure it out together",
  "AI-разработка и coding-системы": "AI development and coding workflows",
  "Агенты и автоматизация бизнеса": "Agents and business automation",
  "RAG и корпоративная база знаний": "RAG and company knowledge",
  "Аудит существующей AI-системы": "Audit of an existing AI system",
  "О проекте": "About your project",
  "Подготовить письмо": "Prepare email",
  "Откроется ваше почтовое приложение с готовым письмом. Отправку подтверждаете вы. Данные формы не сохраняются на сайте.": "Your email app will open with a draft. You review and send it. Form data is not stored on this site.",
  "Наверх ↑": "Back to top ↑",
  "AI Engineer Andrei Dashkevich. Настройка Claude Code, Codex, Cursor и OpenCode, агентные системы на LangGraph и LangChain, точные RAG-системы для бизнеса.": "AI Engineer Andrei Dashkevich. Claude Code, Codex, Cursor and OpenCode workflows, LangGraph and LangChain agent systems, and accurate RAG for business.",
  "От идеи до production. AI-разработка, бизнес-агенты и поиск по знаниям компании.": "From idea to production. AI development, business agents and retrieval over company knowledge.",
  "Andrei Dashkevich — главная": "Andrei Dashkevich — home",
  "Основная навигация": "Main navigation",
  "Включить тёмную тему": "Switch to dark mode",
  "Сменить тему": "Change theme",
  "Открыть меню": "Open menu",
  "Мобильная навигация": "Mobile navigation",
  "Концептуальная схема AI-системы: контекст, агенты и валидация": "AI system concept: context, agents and validation",
  "Технологии": "Technologies",
  "Стратегия поиска": "Retrieval strategy",
  "Ваше имя": "Your name",
  "Какая задача, что уже есть и какого результата хотите достичь?": "What is the challenge, what do you have already, and what outcome are you aiming for?",
  "НЕЗАВИСИМЫЙ AI ENGINEER": "INDEPENDENT AI ENGINEER",
  "АРХИТЕКТУРА СИСТЕМЫ": "SYSTEM ARCHITECTURE",
  "01 / ЗНАНИЯ": "01 / KNOWLEDGE",
  "02 / ОРКЕСТРАЦИЯ": "02 / ORCHESTRATION",
  "03 / ОЦЕНКА КАЧЕСТВА": "03 / EVALUATION",
  "СОЗДАНО ДЛЯ РЕАЛЬНЫХ ЗАДАЧ": "ENGINEERED FOR REAL-WORLD IMPACT",
  "РАЗРАБОТКА С AI": "AI-POWERED DEVELOPMENT",
  "АВТОМАТИЗАЦИЯ С ПОМОЩЬЮ АГЕНТОВ": "AGENTIC BUSINESS AUTOMATION",
  "ГЕНЕРАЦИЯ С ПОИСКОМ ПО ИСТОЧНИКАМ": "RETRIEVAL-AUGMENTED GENERATION",
  "ПОДРОБНЕЕ / СИСТЕМЫ ЗНАНИЙ": "DEEP DIVE / KNOWLEDGE SYSTEMS",
  "ЛАБОРАТОРИЯ ПОИСКА": "RETRIEVAL LAB",
  "СНАЧАЛА ИНЖЕНЕРИЯ. ЗАТЕМ AI.": "ENGINEER FIRST. AI SECOND.",
  "СОЗДАДИМ ЧТО-НИБУДЬ ПОЛЕЗНОЕ": "LET’S BUILD SOMETHING USEFUL",
  "КРАКОВ, ПОЛЬША · УДАЛЁННО": "KRAKÓW, POLAND · REMOTE",
  "Создано осмысленно. Спроектировано для результата.": "Built with intention. Engineered for impact.",
  "Выбор языка": "Language selection",
  "Включить светлую тему": "Switch to light mode",
  "Закрыть меню": "Close menu",
  "Поиск по смыслу, а не по словам.": "Find meaning beyond keywords.",
  "Эмбеддинги находят семантически близкие фрагменты, даже если вопрос и документ сформулированы по-разному. Подбираем модель под язык и предметную область.": "Embeddings find semantically related passages even when the question and document use different wording. The model is selected for your language and domain.",
  "Для естественных вопросов, синонимов и смысловых связей.": "For natural-language questions, synonyms and semantic relationships.",
  "Нужное слово. Точное совпадение.": "The right term. An exact match.",
  "BM25 ранжирует документы по совпадениям терминов с учётом их редкости и длины документа. Полезен для артикулов, аббревиатур и специфичной терминологии.": "BM25 ranks documents by term matches, accounting for term rarity and document length. Useful for product codes, abbreviations and domain-specific terminology.",
  "Для кодов, идентификаторов, названий и редких терминов.": "For codes, identifiers, names and rare terms.",
  "Email скопирован.": "Email copied.",
  "Выделите и скопируйте адрес выше.": "Select and copy the email address above.",
  "Пожалуйста, заполните имя и описание задачи.": "Please enter your name and describe your project.",
  "Письмо подготовлено. Если почтовое приложение не открылось, напишите напрямую на адрес слева или скопируйте email.": "Your draft is ready. If your email app did not open, use the email link or copy the address.",
  "AI-проект:": "AI project:",
  "Здравствуйте, Andrei!": "Hello, Andrei!",
  "Имя": "Name",
  "Email для ответа": "Reply email",
  "Интересует": "Interested in",
  "Пожалуйста, заполните это поле.": "Please fill out this field.",
  "Пожалуйста, укажите корректный email.": "Please enter a valid email address."
};
const reverseTranslations = new Map(Object.entries(translations).map(([ru, en]) => [en, ru]));
const textRecords = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
let textNode;
while ((textNode = walker.nextNode())) {
  if (textNode.parentElement.closest('script, style, [data-language], .retrieval-tabs button > span')) continue;
  const english = textNode.textContent.trim();
  const russian = reverseTranslations.get(english);
  if (russian) textRecords.push({node: textNode, english, russian, before: textNode.textContent.match(/^\s*/)[0], after: textNode.textContent.match(/\s*$/)[0]});
}
const attributeRecords = [];
document.querySelectorAll('[aria-label], [title], [placeholder], meta[content]').forEach(element => {
  for (const name of ['aria-label', 'title', 'placeholder', 'content']) {
    const english = element.getAttribute(name);
    const russian = reverseTranslations.get(english);
    if (russian) attributeRecords.push({element, name, english, russian});
  }
});
let language = 'en';
try { if (localStorage.getItem('ad-language') === 'ru') language = 'ru'; } catch {}
function t(russian) { return language === 'ru' ? russian : (translations[russian] || russian); }
function setLanguage(next, persist = true) {
  if (next !== 'en' && next !== 'ru') return;
  language = next;
  document.documentElement.lang = next;
  for (const r of textRecords) r.node.textContent = r.before + (next === 'ru' ? r.russian : r.english) + r.after;
  for (const r of attributeRecords) r.element.setAttribute(r.name, next === 'ru' ? r.russian : r.english);
  document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === next)));
  if (persist) { try { localStorage.setItem('ad-language', next); } catch {} }
  document.dispatchEvent(new CustomEvent('ad:languagechange'));
}
document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
window.AD_I18N = {t, setLanguage, get language() { return language; }};
setLanguage(language, false);

})();
