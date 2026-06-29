// ============================================================
// APP.JS — Lógica principal de la plataforma
// ============================================================

// ---- Estado global ----
const STATE = {
  currentView: 'home',
  currentChapter: null,
  currentSection: 0,
  currentParams: {},
  progress: JSON.parse(localStorage.getItem('progress')) || {},
  quizState: null,
  examState: null,
  flashcardState: null,
  theme: localStorage.getItem('theme') || 'dark',
  lang: localStorage.getItem('lang') || 'es'
};

// ---- Persistencia ----
function saveProgress() {
  localStorage.setItem('progress', JSON.stringify(STATE.progress));
}

function markSectionComplete(chapterId, sectionId) {
  if (!STATE.progress[chapterId]) STATE.progress[chapterId] = {};
  STATE.progress[chapterId][sectionId] = true;
  saveProgress();
  updateSidebarProgress();
}

function isSectionComplete(chapterId, sectionId) {
  return STATE.progress[chapterId]?.[sectionId] === true;
}

function isChapterComplete(chapterId) {
  const chapter = CHAPTERS.find(c => c.id === chapterId);
  if (!chapter) return false;
  return chapter.sections.every(s => isSectionComplete(chapterId, s.id));
}

function getOverallProgress() {
  const totalSections = CHAPTERS.reduce((sum, c) => sum + c.sections.length, 0);
  const completedSections = CHAPTERS.reduce((sum, c) =>
    sum + c.sections.filter(s => isSectionComplete(c.id, s.id)).length, 0);
  return Math.round((completedSections / totalSections) * 100);
}

// ---- Idioma / Language ----
const CATEGORY_EN = {
  'Fundamentos': 'Fundamentals',
  '7 Principios': '7 Principles',
  'Proceso de Prueba': 'Test Process',
  'Niveles de Prueba': 'Test Levels',
  'Tipos de Prueba': 'Test Types',
  'Técnicas': 'Techniques',
  'Prueba Estática': 'Static Testing',
  'Gestión': 'Management',
  'Agile': 'Agile',
  'Herramientas': 'Tools'
};

function t(es, en) {
  return STATE.lang === 'en' ? en : es;
}

function getChapter(id) {
  const base = CHAPTERS.find(c => c.id === id);
  if (!base) return null;
  if (STATE.lang !== 'en') return base;
  const en = typeof CH_EN !== 'undefined' ? CH_EN.find(c => c.id === id) : null;
  if (!en) return base;
  return {
    ...base,
    title: en.title || base.title,
    description: en.description || base.description,
    sections: base.sections.map((s, i) => ({
      ...s,
      title: en.sections?.[i]?.title || s.title,
      content: en.sections?.[i]?.content || s.content
    })),
    quiz: base.quiz.map((q, i) => en.quiz?.[i] ? {
      ...q,
      question: en.quiz[i].question,
      options: en.quiz[i].options,
      explanation: en.quiz[i].explanation
    } : q)
  };
}

function getFlashcard(card) {
  if (STATE.lang !== 'en') return card;
  const idx = FLASHCARDS.indexOf(card);
  const en = typeof FC_EN !== 'undefined' ? FC_EN[idx] : null;
  if (!en) return card;
  return { ...card, front: en.front || card.front, back: en.back || card.back };
}

function getGlossaryTerm(rawTerm) {
  if (STATE.lang !== 'en') return rawTerm;
  const idx = GLOSSARY.indexOf(rawTerm);
  const en = typeof GLOS_EN !== 'undefined' ? GLOS_EN[idx] : null;
  if (!en) return rawTerm;
  return { ...rawTerm, term: en.term || rawTerm.term, definition: en.definition || rawTerm.definition };
}

function getExamQuestion(q) {
  if (STATE.lang !== 'en') return q;
  const en = typeof EXAM_EN !== 'undefined' && q._originalIdx !== undefined ? EXAM_EN[q._originalIdx] : null;
  if (!en) return q;
  return { ...q, question: en.question || q.question, options: en.options || q.options };
}

function toggleLang() {
  STATE.lang = STATE.lang === 'es' ? 'en' : 'es';
  localStorage.setItem('lang', STATE.lang);
  updateLangBtn();
  updateNavLabels();
  renderView(STATE.currentView, STATE.currentParams || {});
}

function updateLangBtn() {
  const btn = document.getElementById('toggleLang');
  if (btn) btn.textContent = STATE.lang === 'en' ? '🇪🇸 Español' : '🇺🇸 English';
}

function updateNavLabels() {
  const isEn = STATE.lang === 'en';
  const labels = [
    isEn ? '🏠 Home'              : '🏠 Inicio',
    isEn ? '🧪 Ch. 1 — Fundamentals' : '🧪 Cap. 1 — Fundamentos',
    isEn ? '🔄 Ch. 2 — SDLC'     : '🔄 Cap. 2 — SDLC',
    isEn ? '📋 Ch. 3 — Static'   : '📋 Cap. 3 — Estática',
    isEn ? '🎯 Ch. 4 — Techniques': '🎯 Cap. 4 — Técnicas',
    isEn ? '📊 Ch. 5 — Management': '📊 Cap. 5 — Gestión',
    isEn ? '🔧 Ch. 6 — Tools'    : '🔧 Cap. 6 — Herramientas',
    isEn ? '📝 Mock Exam'         : '📝 Simulacro ISTQB',
    isEn ? '🃏 Flashcards'        : '🃏 Flashcards',
    isEn ? '📖 Glossary'          : '📖 Glosario',
    isEn ? '🗂️ Templates'         : '🗂️ Plantillas',
  ];
  document.querySelectorAll('.nav-link').forEach((link, i) => {
    if (labels[i] !== undefined) link.textContent = labels[i];
  });
  updateLangBtn();
}

// ---- Tema ----
function applyTheme() {
  document.body.classList.toggle('light-theme', STATE.theme === 'light');
  const btn = document.getElementById('toggleTheme');
  if (btn) btn.textContent = STATE.theme === 'light'
    ? t('🌙 Modo Oscuro', '🌙 Dark Mode')
    : t('☀️ Modo Claro', '☀️ Light Mode');
}

function toggleTheme() {
  STATE.theme = STATE.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', STATE.theme);
  applyTheme();
}

// ---- Router / Navegación ----
function navigate(view, params = {}) {
  STATE.currentView = view;
  STATE.currentParams = params;
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const activeLink = document.querySelector(`[data-view="${view}"]`);
  if (activeLink) activeLink.classList.add('active');

  const main = document.getElementById('mainContent');
  renderView(view, params);
  main.classList.add('fade-in');
  setTimeout(() => main.classList.remove('fade-in'), 300);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderView(view, params) {
  const main = document.getElementById('mainContent');
  switch (view) {
    case 'home':           main.innerHTML = renderHome(); break;
    case 'chapter':        renderChapterView(params.id, main); break;
    case 'quiz':           renderQuizView(params.chapterId, main); break;
    case 'exam':           renderExamView(main); break;
    case 'flashcards':     renderFlashcardsView(main); break;
    case 'glossary':       renderGlossaryView(main); break;
    case 'templates':      main.innerHTML = renderTemplatesView(); break;
    case 'template-detail':main.innerHTML = renderTemplateDetail(params.id); break;
    default:               main.innerHTML = renderHome();
  }
}

// ---- HOME ----
function renderHome() {
  const overall = getOverallProgress();

  const chaptersHTML = CHAPTERS.map(chapter => {
    const ch = getChapter(chapter.id);
    const complete = isChapterComplete(chapter.id);
    const done = chapter.sections.filter(s => isSectionComplete(chapter.id, s.id)).length;
    const pct  = Math.round((done / chapter.sections.length) * 100);
    return `
    <div class="chapter-card ${complete ? 'completed' : ''}" onclick="navigate('chapter', {id: ${chapter.id}})">
      <div class="chapter-num">${chapter.icon}</div>
      <div class="chapter-info">
        <h3>${ch.title}</h3>
        <p class="chapter-desc">${ch.description}</p>
        <div class="chapter-meta">
          <span class="meta-badge">⏱ ${chapter.duration}</span>
          <span class="meta-badge">${chapter.sections.length} ${t('secciones', 'sections')}</span>
          <span class="meta-badge progress-badge">${done}/${chapter.sections.length} ${t('completadas', 'completed')}</span>
        </div>
        <div class="mini-progress">
          <div class="mini-fill" style="width:${pct}%; background:${chapter.color}"></div>
        </div>
      </div>
      <div class="chapter-right">
        ${complete ? '<div class="check-badge">✓</div>' : '<span class="chapter-arrow">›</span>'}
      </div>
    </div>`;
  }).join('');

  return `
  <div class="home-view">
    <div class="bento-top">
      <div class="hero-card">
        <div class="hero-content">
          <div class="hero-eyebrow">✦ ISTQB® Certified Tester FL 2018</div>
          <h2>${t('Plataforma QA', 'QA Platform')}<br>Foundation Level</h2>
          <p>${t(
            'Preparación completa para la certificación internacional basada en el syllabus oficial ISTQB® 2018 en español.',
            'Complete preparation for the international certification based on the official ISTQB® 2018 syllabus.'
          )}</p>
          <div class="hero-progress">
            <div class="hero-progress-header">
              <span class="hero-progress-label">${t('Tu progreso', 'Your progress')}</span>
              <span class="hero-progress-pct" id="progressPercent">${overall}%</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" id="progressFill" style="width:${overall}%"></div>
            </div>
          </div>
          <p class="progress-text"></p>
          <div class="hero-actions">
            <button class="btn-hero-primary" onclick="navigate('exam')">🎯 ${t('Simulacro ISTQB', 'ISTQB Mock Exam')}</button>
            <button class="btn-hero-ghost"   onclick="navigate('flashcards')">🃏 Flashcards</button>
            <button class="btn-hero-ghost"   onclick="navigate('glossary')">📖 ${t('Glosario', 'Glossary')}</button>
          </div>
        </div>
      </div>

      <div class="bento-stats">
        <div class="stat-card" onclick="navigate('chapter',{id:1})">
          <div class="stat-icon blue">📚</div>
          <div class="stat-info">
            <div class="stat-value">6</div>
            <div class="stat-label">${t('Capítulos', 'Chapters')}</div>
          </div>
        </div>
        <div class="stat-card" onclick="navigate('exam')">
          <div class="stat-icon violet">🏆</div>
          <div class="stat-info">
            <div class="stat-value">40</div>
            <div class="stat-label">${t('Preguntas', 'Questions')}</div>
          </div>
        </div>
        <div class="stat-card" onclick="navigate('flashcards')">
          <div class="stat-icon green">🃏</div>
          <div class="stat-info">
            <div class="stat-value">${FLASHCARDS.length}</div>
            <div class="stat-label">Flashcards</div>
          </div>
        </div>
        <div class="stat-card" onclick="navigate('glossary')">
          <div class="stat-icon yellow">📖</div>
          <div class="stat-info">
            <div class="stat-value">${GLOSSARY.length}</div>
            <div class="stat-label">${t('Términos', 'Terms')}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="bento-actions">
      <div class="action-card" onclick="navigate('exam')">
        <div class="action-card-icon">🎯</div>
        <div class="action-card-title">${t('Simulacro ISTQB', 'ISTQB Mock Exam')}</div>
        <div class="action-card-desc">${t(
          '40 preguntas aleatorizadas con temporizador de 60 min. Idéntico al examen real de certificación.',
          '40 randomized questions with a 60 min timer. Identical to the real certification exam.'
        )}</div>
        <div class="action-card-cta">${t('Comenzar ahora', 'Start now')}</div>
      </div>
      <div class="action-card" onclick="navigate('flashcards')">
        <div class="action-card-icon">🃏</div>
        <div class="action-card-title">Flashcards</div>
        <div class="action-card-desc">${FLASHCARDS.length} ${t('tarjetas con los conceptos clave del ISTQB.', 'cards with key ISTQB concepts.')}</div>
        <div class="action-card-cta">${t('Repasar', 'Review')}</div>
      </div>
      <div class="action-card" onclick="navigate('glossary')">
        <div class="action-card-icon">📖</div>
        <div class="action-card-title">${t('Glosario', 'Glossary')}</div>
        <div class="action-card-desc">${GLOSSARY.length} ${t('términos oficiales ISTQB con búsqueda.', 'official ISTQB terms with search.')}</div>
        <div class="action-card-cta">${t('Explorar', 'Explore')}</div>
      </div>
    </div>

    <div class="istqb-tip">
      <strong>💡 ${t('Tip para el examen', 'Exam tip')}:</strong> ${t(
        '40 preguntas de opción múltiple · 65% para aprobar (26/40) · 60 minutos · Enfócate en los 7 principios y la triada Error → Defecto → Fallo.',
        '40 multiple choice questions · 65% to pass (26/40) · 60 minutes · Focus on the 7 principles and the Error → Defect → Failure triad.'
      )}
    </div>

    <p class="section-title">${t('Capítulos del programa de estudio', 'Study program chapters')}</p>
    <div class="chapters-list">${chaptersHTML}</div>
  </div>`;
}

// ---- CHAPTER VIEW ----
function renderChapterView(chapterId, container) {
  const chapter = getChapter(chapterId);
  if (!chapter) { container.innerHTML = renderHome(); return; }

  STATE.currentChapter = chapterId;
  STATE.currentSection = 0;

  container.innerHTML = `
  <div class="chapter-view">
    <div class="chapter-header" style="border-left: 4px solid ${chapter.color}">
      <button class="back-btn" onclick="navigate('home')">← ${t('Volver', 'Back')}</button>
      <div class="chapter-title-area">
        <span class="big-icon">${chapter.icon}</span>
        <div>
          <h2>${chapter.title}</h2>
          <p>${chapter.description}</p>
        </div>
      </div>
    </div>

    <div class="chapter-layout">
      <div class="chapter-sidebar">
        ${chapter.sections.map((s, i) => `
          <div class="section-nav-item ${isSectionComplete(chapterId, s.id) ? 'done' : ''}"
               id="nav-${s.id}"
               onclick="showSection(${i})">
            <span class="section-check">${isSectionComplete(chapterId, s.id) ? '✓' : (i+1)}</span>
            ${s.title}
          </div>
        `).join('')}
        <div class="quiz-nav-item" onclick="navigate('quiz', {chapterId: ${chapterId}})">
          🎯 ${t('Quiz del Capítulo', 'Chapter Quiz')}
        </div>
      </div>

      <div class="section-content" id="sectionContent">
        ${renderSection(chapter, 0)}
      </div>
    </div>
  </div>`;
}

function renderSection(chapter, index) {
  const section = chapter.sections[index];
  const isLast = index === chapter.sections.length - 1;
  const isDone = isSectionComplete(chapter.id, section.id);

  return `
  <div class="section-body">
    <div class="section-heading">
      <span class="section-num">${section.id}</span>
      <h3>${section.title}</h3>
    </div>
    <div class="section-text">${section.content}</div>
    <div class="section-actions">
      ${index > 0 ? `<button class="btn-nav" onclick="showSection(${index-1})">← ${t('Anterior', 'Previous')}</button>` : '<div></div>'}
      <div class="center-actions">
        ${!isDone
          ? `<button class="btn-complete" onclick="completeSection('${chapter.id}', '${section.id}', ${index})">
              ✓ ${t('Marcar como completada', 'Mark as complete')}
             </button>`
          : `<span class="done-label">✓ ${t('Completada', 'Completed')}</span>`}
      </div>
      ${!isLast
        ? `<button class="btn-nav primary" onclick="showSection(${index+1})">${t('Siguiente', 'Next')} →</button>`
        : `<button class="btn-nav quiz" onclick="navigate('quiz', {chapterId: ${chapter.id}})">🎯 ${t('Hacer Quiz', 'Take Quiz')} →</button>`
      }
    </div>
  </div>`;
}

function showSection(index) {
  const chapter = getChapter(STATE.currentChapter);
  if (!chapter) return;
  STATE.currentSection = index;
  document.getElementById('sectionContent').innerHTML = renderSection(chapter, index);
  document.querySelectorAll('.section-nav-item').forEach((el, i) => {
    el.classList.toggle('active', i === index);
  });
}

function completeSection(chapterId, sectionId, index) {
  markSectionComplete(parseInt(chapterId), sectionId);
  const chapter = getChapter(parseInt(chapterId));
  document.getElementById('sectionContent').innerHTML = renderSection(chapter, index);
  const navItem = document.getElementById(`nav-${sectionId}`);
  if (navItem) navItem.classList.add('done');
  updateSidebarProgress();
}

function updateSidebarProgress() {
  const overall = getOverallProgress();
  const fill = document.getElementById('progressFill');
  const pct  = document.getElementById('progressPercent');
  if (fill) fill.style.width = `${overall}%`;
  if (pct)  pct.textContent = overall;
}

// ---- QUIZ VIEW ----
function renderQuizView(chapterId, container) {
  const chapter = getChapter(parseInt(chapterId));
  if (!chapter) return;

  STATE.quizState = {
    chapterId: parseInt(chapterId),
    questions: [...chapter.quiz],
    current: 0,
    answers: {},
    finished: false
  };

  container.innerHTML = renderQuizQuestion();
}

function renderQuizQuestion() {
  const qs = STATE.quizState;
  const chapter = getChapter(qs.chapterId);
  const q = qs.questions[qs.current];
  const total = qs.questions.length;
  const answered = qs.answers[qs.current];

  return `
  <div class="quiz-view">
    <div class="quiz-header">
      <button class="back-btn" onclick="navigate('chapter', {id: ${qs.chapterId}})">← ${t('Volver', 'Back')}</button>
      <h2>${t('Quiz', 'Quiz')} — ${chapter.title}</h2>
      <span class="quiz-progress-label">${qs.current + 1} / ${total}</span>
    </div>
    <div class="quiz-progress-bar">
      <div class="quiz-progress-fill" style="width: ${((qs.current+1)/total)*100}%"></div>
    </div>
    <div class="question-card">
      <p class="question-text">${q.question}</p>
      <div class="options-list">
        ${q.options.map((opt, i) => {
          let cls = 'option-btn';
          if (answered !== undefined) {
            if (i === q.answer) cls += ' correct';
            else if (i === answered && i !== q.answer) cls += ' wrong';
            else cls += ' disabled';
          }
          return `<button class="${cls}" onclick="answerQuiz(${i})" ${answered !== undefined ? 'disabled' : ''}>${opt}</button>`;
        }).join('')}
      </div>
      ${answered !== undefined ? `
        <div class="explanation-box ${answered === q.answer ? 'correct-exp' : 'wrong-exp'}">
          <strong>${answered === q.answer ? `✓ ${t('¡Correcto!', 'Correct!')}` : `✗ ${t('Incorrecto', 'Incorrect')}`}</strong>
          <p>${q.explanation}</p>
        </div>
        <div class="next-btn-row">
          ${qs.current < total - 1
            ? `<button class="btn-nav primary" onclick="nextQuizQuestion()">${t('Siguiente', 'Next')} →</button>`
            : `<button class="btn-nav quiz" onclick="finishQuiz()">${t('Ver resultados', 'View results')} 🎯</button>`
          }
        </div>` : ''}
    </div>
  </div>`;
}

function answerQuiz(optionIndex) {
  STATE.quizState.answers[STATE.quizState.current] = optionIndex;
  document.getElementById('mainContent').innerHTML = renderQuizQuestion();
}

function nextQuizQuestion() {
  STATE.quizState.current++;
  document.getElementById('mainContent').innerHTML = renderQuizQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function finishQuiz() {
  const qs = STATE.quizState;
  const correct = qs.questions.filter((q, i) => qs.answers[i] === q.answer).length;
  const pct = Math.round((correct / qs.questions.length) * 100);
  const passed = pct >= 65;

  document.getElementById('mainContent').innerHTML = `
  <div class="quiz-view">
    <div class="results-card ${passed ? 'passed' : 'failed'}">
      <div class="result-icon">${passed ? '🏆' : '📚'}</div>
      <h2>${passed ? t('¡Excelente!', 'Excellent!') : t('Sigue practicando', 'Keep practicing')}</h2>
      <div class="score-display">${correct}/${qs.questions.length}</div>
      <div class="score-pct">${pct}%</div>
      <p>${passed
        ? t('Superaste el umbral de aprobación (65%).', 'You passed the passing threshold (65%).')
        : t('Necesitas 65% para aprobar. Revisa el capítulo y vuelve a intentarlo.', 'You need 65% to pass. Review the chapter and try again.')
      }</p>
      <div class="result-actions">
        <button class="action-btn primary"   onclick="navigate('chapter', {id: ${qs.chapterId}})">📖 ${t('Revisar Capítulo', 'Review Chapter')}</button>
        <button class="action-btn secondary" onclick="navigate('quiz', {chapterId: ${qs.chapterId}})">🔄 ${t('Intentar de Nuevo', 'Try Again')}</button>
        <button class="action-btn secondary" onclick="navigate('home')">🏠 ${t('Inicio', 'Home')}</button>
      </div>
    </div>
    <div class="quiz-review">
      <h3>${t('Revisión de Respuestas', 'Answer Review')}</h3>
      ${qs.questions.map((q, i) => `
        <div class="review-item ${qs.answers[i] === q.answer ? 'correct' : 'wrong'}">
          <p class="review-q"><strong>${i+1}.</strong> ${q.question}</p>
          <p class="review-correct">✓ ${t('Correcta', 'Correct')}: ${q.options[q.answer]}</p>
          ${qs.answers[i] !== q.answer ? `<p class="review-wrong">✗ ${t('Tu respuesta', 'Your answer')}: ${q.options[qs.answers[i]] || t('Sin responder', 'Unanswered')}</p>` : ''}
          <p class="review-exp">${q.explanation}</p>
        </div>
      `).join('')}
    </div>
  </div>`;
}

// ---- EXAM VIEW ----
function renderExamView(container) {
  const shuffled = EXAM_QUESTIONS.map((q, i) => ({...q, _originalIdx: i})).sort(() => Math.random() - 0.5);

  STATE.examState = {
    questions: shuffled,
    current: 0,
    answers: {},
    startTime: Date.now(),
    timeLimit: 60 * 60 * 1000,
    finished: false,
    timerInterval: null
  };

  container.innerHTML = `
  <div class="exam-view">
    <div class="exam-header">
      <button class="back-btn" onclick="confirmExamExit()">← ${t('Salir', 'Exit')}</button>
      <h2>🎯 ${t('Simulacro ISTQB Foundation Level', 'ISTQB Foundation Level Mock Exam')}</h2>
      <div class="timer-box" id="examTimer">60:00</div>
    </div>
    <div class="exam-progress-bar">
      <div class="exam-progress-fill" id="examFill" style="width: 0%"></div>
    </div>
    <div id="examContent">${renderExamQuestion()}</div>
  </div>`;

  startExamTimer();
}

function renderExamQuestion() {
  const es = STATE.examState;
  const baseQ = es.questions[es.current];
  const q = getExamQuestion(baseQ);
  const total = es.questions.length;
  const answered = es.answers[es.current];

  return `
  <div class="question-card exam-question">
    <div class="question-meta">
      <span>${t('Pregunta', 'Question')} ${es.current + 1} ${t('de', 'of')} ${total}</span>
      <span>${Object.keys(es.answers).length} ${t('respondidas', 'answered')}</span>
    </div>
    <p class="question-text">${q.question}</p>
    <div class="options-list">
      ${q.options.map((opt, i) => `
        <button class="option-btn ${answered === i ? 'selected' : ''}"
                onclick="selectExamAnswer(${i})">
          <span class="opt-letter">${['A','B','C','D'][i]}</span> ${opt}
        </button>
      `).join('')}
    </div>
    <div class="exam-nav">
      ${es.current > 0 ? `<button class="btn-nav" onclick="prevExamQuestion()">← ${t('Anterior', 'Previous')}</button>` : '<div></div>'}
      ${es.current < total - 1
        ? `<button class="btn-nav primary" onclick="nextExamQuestion()">${t('Siguiente', 'Next')} →</button>`
        : `<button class="btn-nav quiz" onclick="finishExam()">✓ ${t('Finalizar Examen', 'Finish Exam')}</button>`
      }
    </div>
    <div class="question-dots">
      ${es.questions.map((_, i) => `
        <span class="dot ${es.answers[i] !== undefined ? 'answered' : ''} ${i === es.current ? 'current' : ''}"
              onclick="jumpToQuestion(${i})">${i+1}</span>
      `).join('')}
    </div>
  </div>`;
}

function selectExamAnswer(index) {
  STATE.examState.answers[STATE.examState.current] = index;
  const fill = Math.round((Object.keys(STATE.examState.answers).length / STATE.examState.questions.length) * 100);
  const bar = document.getElementById('examFill');
  if (bar) bar.style.width = `${fill}%`;
  document.getElementById('examContent').innerHTML = renderExamQuestion();
}

function nextExamQuestion() {
  if (STATE.examState.current < STATE.examState.questions.length - 1) {
    STATE.examState.current++;
    document.getElementById('examContent').innerHTML = renderExamQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function prevExamQuestion() {
  if (STATE.examState.current > 0) {
    STATE.examState.current--;
    document.getElementById('examContent').innerHTML = renderExamQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function jumpToQuestion(index) {
  STATE.examState.current = index;
  document.getElementById('examContent').innerHTML = renderExamQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startExamTimer() {
  const timerEl = document.getElementById('examTimer');
  STATE.examState.timerInterval = setInterval(() => {
    const elapsed = Date.now() - STATE.examState.startTime;
    const remaining = STATE.examState.timeLimit - elapsed;
    if (remaining <= 0) {
      clearInterval(STATE.examState.timerInterval);
      finishExam();
      return;
    }
    const mins = Math.floor(remaining / 60000);
    const secs = Math.floor((remaining % 60000) / 1000);
    if (timerEl) {
      timerEl.textContent = `${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
      timerEl.classList.toggle('warning', remaining < 300000);
    }
  }, 1000);
}

function confirmExamExit() {
  if (confirm(t(
    '¿Seguro que quieres salir del examen? Se perderá tu progreso.',
    'Are you sure you want to exit the exam? Your progress will be lost.'
  ))) {
    if (STATE.examState?.timerInterval) clearInterval(STATE.examState.timerInterval);
    navigate('home');
  }
}

function finishExam() {
  if (STATE.examState?.timerInterval) clearInterval(STATE.examState.timerInterval);
  const es = STATE.examState;
  const correct = es.questions.filter((q, i) => es.answers[i] === q.answer).length;
  const total = es.questions.length;
  const pct = Math.round((correct / total) * 100);
  const passed = correct >= 26;
  const elapsed = Math.floor((Date.now() - es.startTime) / 1000);
  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;

  const byChapter = {};
  es.questions.forEach((q, i) => {
    if (!byChapter[q.chapter]) byChapter[q.chapter] = { correct: 0, total: 0 };
    byChapter[q.chapter].total++;
    if (es.answers[i] === q.answer) byChapter[q.chapter].correct++;
  });

  const main = document.getElementById('mainContent');
  main.innerHTML = `
  <div class="exam-view">
    <div class="results-card ${passed ? 'passed' : 'failed'}">
      <div class="result-icon">${passed ? '🏆' : '📚'}</div>
      <h2>${passed ? t('¡Aprobado!', 'Passed!') : t('No Aprobado', 'Not Passed')}</h2>
      <div class="score-display">${correct}/${total}</div>
      <div class="score-pct">${pct}%</div>
      <p>${passed
        ? t(`¡Superaste el umbral (65%)! Tiempo: ${mins}m ${secs}s`, `You passed the threshold (65%)! Time: ${mins}m ${secs}s`)
        : t(`Necesitas 26/40 (65%) para aprobar. Tiempo: ${mins}m ${secs}s`, `You need 26/40 (65%) to pass. Time: ${mins}m ${secs}s`)
      }</p>

      <div class="chapter-breakdown">
        <h3>${t('Rendimiento por Capítulo', 'Performance by Chapter')}</h3>
        ${Object.entries(byChapter).map(([chId, data]) => {
          const ch = getChapter(parseInt(chId));
          const chPct = Math.round((data.correct / data.total) * 100);
          return `<div class="chapter-result">
            <span>${ch?.icon || '📚'} ${ch?.title || t('Capítulo ', 'Chapter ') + chId}</span>
            <div class="mini-progress"><div class="mini-fill" style="width:${chPct}%; background:${chPct >= 65 ? '#22c55e' : '#ef4444'}"></div></div>
            <span>${data.correct}/${data.total} (${chPct}%)</span>
          </div>`;
        }).join('')}
      </div>

      <div class="result-actions">
        <button class="action-btn primary"   onclick="navigate('exam')">🔄 ${t('Nuevo Examen', 'New Exam')}</button>
        <button class="action-btn secondary" onclick="navigate('flashcards')">🃏 ${t('Repasar Flashcards', 'Review Flashcards')}</button>
        <button class="action-btn secondary" onclick="navigate('home')">🏠 ${t('Inicio', 'Home')}</button>
      </div>
    </div>

    <div class="quiz-review">
      <h3>${t('Revisión Completa', 'Full Review')}</h3>
      ${es.questions.map((q, i) => {
        const dq = getExamQuestion(q);
        return `
        <div class="review-item ${es.answers[i] === q.answer ? 'correct' : 'wrong'}">
          <p class="review-q"><strong>${i+1}.</strong> ${dq.question}</p>
          <p class="review-correct">✓ ${t('Correcta', 'Correct')}: ${dq.options[q.answer]}</p>
          ${es.answers[i] !== q.answer ? `<p class="review-wrong">✗ ${t('Tu respuesta', 'Your answer')}: ${dq.options[es.answers[i]] ?? t('Sin responder', 'Unanswered')}</p>` : ''}
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

// ---- FLASHCARDS VIEW ----
function renderFlashcardsView(container) {
  const categories = [...new Set(FLASHCARDS.map(f => f.category))];

  STATE.flashcardState = {
    deck: [...FLASHCARDS].sort(() => Math.random() - 0.5),
    current: 0,
    flipped: false,
    known: new Set(),
    category: 'all'
  };

  container.innerHTML = `
  <div class="flashcards-view">
    <div class="fc-header">
      <button class="back-btn" onclick="navigate('home')">← ${t('Volver', 'Back')}</button>
      <h2>🃏 Flashcards ISTQB</h2>
    </div>

    <div class="fc-controls">
      <div class="category-filter">
        <button class="filter-btn active" onclick="filterFlashcards('all', this)">${t('Todas', 'All')}</button>
        ${categories.map(cat => {
          const display = STATE.lang === 'en' ? (CATEGORY_EN[cat] || cat) : cat;
          return `<button class="filter-btn" onclick="filterFlashcards('${cat}', this)">${display}</button>`;
        }).join('')}
      </div>
      <div class="fc-stats" id="fcStats"></div>
    </div>

    <div id="flashcardArea"></div>
  </div>`;

  renderFlashcard();
}

function filterFlashcards(category, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  STATE.flashcardState.category = category;
  STATE.flashcardState.deck = (category === 'all' ? FLASHCARDS : FLASHCARDS.filter(f => f.category === category))
    .sort(() => Math.random() - 0.5);
  STATE.flashcardState.current = 0;
  STATE.flashcardState.flipped = false;
  STATE.flashcardState.known = new Set();
  renderFlashcard();
}

function renderFlashcard() {
  const fs = STATE.flashcardState;
  const area = document.getElementById('flashcardArea');
  const stats = document.getElementById('fcStats');

  if (!area) return;

  if (fs.current >= fs.deck.length) {
    area.innerHTML = `
    <div class="fc-complete">
      <div class="result-icon">🎉</div>
      <h3>${t('¡Completaste el mazo!', 'Deck complete!')}</h3>
      <p>${t('Conocidas', 'Known')}: ${fs.known.size} / ${fs.deck.length}</p>
      <button class="action-btn primary"   onclick="restartFlashcards()">🔄 ${t('Repetir', 'Repeat')}</button>
      <button class="action-btn secondary" onclick="navigate('home')">🏠 ${t('Inicio', 'Home')}</button>
    </div>`;
    return;
  }

  if (stats) stats.textContent = `${fs.current + 1} / ${fs.deck.length} — ${t('Conocidas', 'Known')}: ${fs.known.size}`;

  const rawCard = fs.deck[fs.current];
  const card = getFlashcard(rawCard);
  const displayCat = STATE.lang === 'en' ? (CATEGORY_EN[rawCard.category] || rawCard.category) : rawCard.category;
  const backLines = card.back.split('\n');

  area.innerHTML = `
  <div class="flashcard-container">
    <div class="flashcard ${fs.flipped ? 'flipped' : ''}" onclick="flipCard()">
      <div class="fc-inner">
        <div class="fc-front">
          <div class="fc-cat">${displayCat}</div>
          <div class="fc-text">${card.front}</div>
          <div class="fc-hint">${t('Haz clic para revelar', 'Click to reveal')}</div>
        </div>
        <div class="fc-back">
          <div class="fc-cat">${displayCat}</div>
          <div class="fc-text">${backLines.map(l => `<p>${l}</p>`).join('')}</div>
        </div>
      </div>
    </div>
    <div class="fc-actions ${fs.flipped ? 'visible' : ''}">
      <button class="fc-btn no"  onclick="fcAnswer(false)">✗ ${t("No la sabía", "Didn't know it")}</button>
      <button class="fc-btn yes" onclick="fcAnswer(true)">✓ ${t('La sabía', 'Knew it')}</button>
    </div>
    <div class="fc-keyboard-hint">${t('Espacio = voltear · ← No sabía · → Sí sabía', "Space = flip · ← Didn't know · → Knew it")}</div>
  </div>`;
}

function flipCard() {
  STATE.flashcardState.flipped = !STATE.flashcardState.flipped;
  renderFlashcard();
}

function fcAnswer(knew) {
  if (knew) STATE.flashcardState.known.add(STATE.flashcardState.current);
  STATE.flashcardState.current++;
  STATE.flashcardState.flipped = false;
  renderFlashcard();
}

function restartFlashcards() {
  STATE.flashcardState.current = 0;
  STATE.flashcardState.flipped = false;
  STATE.flashcardState.known = new Set();
  STATE.flashcardState.deck.sort(() => Math.random() - 0.5);
  renderFlashcard();
}

document.addEventListener('keydown', (e) => {
  if (STATE.currentView !== 'flashcards') return;
  if (e.code === 'Space') { e.preventDefault(); flipCard(); }
  if (e.code === 'ArrowRight' && STATE.flashcardState?.flipped) fcAnswer(true);
  if (e.code === 'ArrowLeft'  && STATE.flashcardState?.flipped) fcAnswer(false);
});

// ---- GLOSSARY VIEW ----
function renderGlossaryView(container) {
  container.innerHTML = `
  <div class="glossary-view">
    <div class="glossary-header">
      <button class="back-btn" onclick="navigate('home')">← ${t('Volver', 'Back')}</button>
      <h2>📖 ${t('Glosario ISTQB', 'ISTQB Glossary')}</h2>
    </div>
    <div class="search-box">
      <input type="text" id="glossarySearch" placeholder="${t('Buscar término...', 'Search term...')}" oninput="filterGlossary()" autofocus>
    </div>
    <div id="glossaryList">${renderGlossaryList(GLOSSARY)}</div>
  </div>`;
}

function renderGlossaryList(terms) {
  const sorted = [...terms].sort((a, b) => {
    const ta = getGlossaryTerm(a).term;
    const tb = getGlossaryTerm(b).term;
    return ta.localeCompare(tb);
  });
  return sorted.map(raw => {
    const term = getGlossaryTerm(raw);
    return `
    <div class="glossary-item">
      <dt>${term.term}</dt>
      <dd>${term.definition}</dd>
    </div>`;
  }).join('');
}

function filterGlossary() {
  const query = document.getElementById('glossarySearch').value.toLowerCase();
  const filtered = GLOSSARY.filter(raw => {
    const t2 = getGlossaryTerm(raw);
    return t2.term.toLowerCase().includes(query) || t2.definition.toLowerCase().includes(query);
  });
  document.getElementById('glossaryList').innerHTML = renderGlossaryList(filtered);
}

// ---- TEMPLATES VIEW ----
function renderTemplatesView() {
  const cardsHTML = TEMPLATES.map(tpl => {
    const title = STATE.lang === 'en' ? (tpl.titleEn || tpl.title) : tpl.title;
    const desc  = STATE.lang === 'en' ? (tpl.descriptionEn || tpl.description) : tpl.description;
    const tags  = STATE.lang === 'en' ? (tpl.tagsEn  || tpl.tags)  : tpl.tags;
    return `
    <div class="tpl-card" onclick="navigate('template-detail', {id: '${tpl.id}'})">
      <div class="tpl-card-icon" style="background:${tpl.color}18; color:${tpl.color}">${tpl.icon}</div>
      <div class="tpl-card-body">
        <h3>${title}</h3>
        <p>${desc}</p>
        <div class="tpl-tags">${tags.map(tag => `<span class="tpl-tag">${tag}</span>`).join('')}</div>
      </div>
      <div class="tpl-card-arrow">›</div>
    </div>`;
  }).join('');

  return `
  <div class="templates-view">
    <div class="tpl-header">
      <h2>🗂️ ${t('Plantillas Profesionales de QA', 'Professional QA Templates')}</h2>
      <p>${t(
        'Documentos estándar de la industria basados en las mejores prácticas ISTQB. Cada plantilla incluye guías por campo y un ejemplo completado con un caso real.',
        'Industry-standard documents based on ISTQB best practices. Each template includes field guides and a completed example with a real case.'
      )}</p>
    </div>
    <div class="tpl-grid">${cardsHTML}</div>
    <div class="tpl-note">
      💡 <strong>${t('Cómo usarlas', 'How to use them')}:</strong> ${t(
        'Estudia la estructura de cada plantilla y su ejemplo completado. En un examen ISTQB podrían preguntarte qué campos incluye un plan de prueba o un reporte de defecto.',
        'Study the structure of each template and its completed example. The ISTQB exam may ask you what fields a test plan or defect report includes.'
      )}
    </div>
  </div>`;
}

function renderTemplateDetail(id) {
  const tpl = TEMPLATES.find(t => t.id === id);
  if (!tpl) return renderTemplatesView();

  const isEn    = STATE.lang === 'en';
  const fields  = isEn ? (tpl.fieldsEn  || tpl.fields)  : tpl.fields;
  const title   = isEn ? (tpl.titleEn   || tpl.title)   : tpl.title;
  const desc    = isEn ? (tpl.descriptionEn || tpl.description) : tpl.description;
  const tags    = isEn ? (tpl.tagsEn    || tpl.tags)    : tpl.tags;
  const example = isEn ? (tpl.exampleEn || tpl.example) : tpl.example;

  const formFieldsHTML = fields.map((f, i) => `
    <div class="tpl-field" id="field-${i}">
      <div class="tpl-field-header">
        <label class="tpl-field-label">${f.label}</label>
        <span class="tpl-field-tip" onclick="toggleTip(${i})">💡 ${t('Guía', 'Guide')}</span>
      </div>
      <div class="tpl-tip-text" id="tip-${i}" style="display:none">${f.tip}</div>
      ${f.type === 'textarea'
        ? `<textarea class="tpl-input tpl-textarea" placeholder="${f.placeholder}" rows="4"></textarea>`
        : f.type === 'select'
          ? `<select class="tpl-input tpl-select"><option value="" disabled selected>— ${t('Seleccionar', 'Select')} —</option>${f.options.map(o => `<option>${o}</option>`).join('')}</select>`
          : `<input class="tpl-input" type="text" placeholder="${f.placeholder}" />`
      }
    </div>`).join('');

  const exampleRowsHTML = Object.entries(example.fields).map(([key, val]) => `
    <div class="ex-row">
      <div class="ex-key">${key}</div>
      <div class="ex-val">${val.replace(/\n/g, '<br>')}</div>
    </div>`).join('');

  return `
  <div class="template-detail-view">
    <button class="back-btn" onclick="navigate('templates')">← ${t('Plantillas', 'Templates')}</button>

    <div class="tpl-detail-header" style="border-left: 4px solid ${tpl.color}">
      <span class="tpl-detail-icon">${tpl.icon}</span>
      <div>
        <h2>${title}</h2>
        <p>${desc}</p>
        <div class="tpl-tags">${tags.map(tag => `<span class="tpl-tag">${tag}</span>`).join('')}</div>
      </div>
    </div>

    <div class="tpl-layout">
      <div class="tpl-panel">
        <div class="tpl-panel-header">
          <span class="tpl-panel-title">📝 ${t('Plantilla en blanco', 'Blank template')}</span>
          <button class="tpl-clear-btn" onclick="clearTemplate()">${t('Limpiar', 'Clear')}</button>
        </div>
        <div class="tpl-form" id="tplForm">${formFieldsHTML}</div>
      </div>

      <div class="tpl-panel">
        <div class="tpl-panel-header">
          <span class="tpl-panel-title">✅ ${t('Ejemplo completado', 'Completed example')}</span>
          <button class="tpl-copy-btn" onclick="copyExample('${id}')">${t('Copiar texto', 'Copy text')}</button>
        </div>
        <div class="tpl-example-title">${example.title}</div>
        <div class="tpl-example-rows">${exampleRowsHTML}</div>
      </div>
    </div>
  </div>`;
}

function toggleTip(i) {
  const el = document.getElementById(`tip-${i}`);
  if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

function clearTemplate() {
  document.querySelectorAll('.tpl-input').forEach(el => {
    if (el.tagName === 'SELECT') el.selectedIndex = 0;
    else el.value = '';
  });
}

function copyExample(id) {
  const tpl = TEMPLATES.find(t => t.id === id);
  if (!tpl) return;
  const example = STATE.lang === 'en' ? (tpl.exampleEn || tpl.example) : tpl.example;
  const text = Object.entries(example.fields).map(([k, v]) => `${k}:\n${v}`).join('\n\n---\n\n');
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector('.tpl-copy-btn');
    if (btn) {
      btn.textContent = `✓ ${t('Copiado', 'Copied')}`;
      setTimeout(() => btn.textContent = t('Copiar texto', 'Copy text'), 2000);
    }
  });
}

// ---- SIDEBAR ----
function setupSidebarNav() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const view   = link.dataset.view;
      const params = link.dataset.params ? JSON.parse(link.dataset.params) : {};
      if (view) navigate(view, params);
    });
  });
}

// Expose functions globally for inline onclick handlers
window.navigate         = navigate;
window.showSection      = showSection;
window.completeSection  = completeSection;
window.answerQuiz       = answerQuiz;
window.nextQuizQuestion = nextQuizQuestion;
window.finishQuiz       = finishQuiz;
window.selectExamAnswer = selectExamAnswer;
window.nextExamQuestion = nextExamQuestion;
window.prevExamQuestion = prevExamQuestion;
window.jumpToQuestion   = jumpToQuestion;
window.confirmExamExit  = confirmExamExit;
window.finishExam       = finishExam;
window.flipCard         = flipCard;
window.fcAnswer         = fcAnswer;
window.restartFlashcards= restartFlashcards;
window.filterFlashcards = filterFlashcards;
window.filterGlossary   = filterGlossary;
window.toggleTheme      = toggleTheme;
window.toggleLang       = toggleLang;
window.toggleTip        = toggleTip;
window.clearTemplate    = clearTemplate;
window.copyExample      = copyExample;

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  document.getElementById('toggleTheme').addEventListener('click', toggleTheme);
  document.getElementById('toggleLang').addEventListener('click', toggleLang);
  setupSidebarNav();
  updateNavLabels();
  navigate('home');
});
