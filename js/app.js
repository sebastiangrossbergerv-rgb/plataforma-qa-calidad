// ============================================================
// APP.JS — Lógica principal de la plataforma
// ============================================================

// ---- Estado global ----
const STATE = {
  currentView: 'home',
  currentChapter: null,
  currentSection: 0,
  progress: JSON.parse(localStorage.getItem('progress')) || {},
  quizState: null,
  examState: null,
  flashcardState: null,
  theme: localStorage.getItem('theme') || 'dark'
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

// ---- Tema ----
function applyTheme() {
  document.body.classList.toggle('light-theme', STATE.theme === 'light');
  const btn = document.getElementById('toggleTheme');
  if (btn) btn.textContent = STATE.theme === 'light' ? '🌙 Modo Oscuro' : '☀️ Modo Claro';
}

function toggleTheme() {
  STATE.theme = STATE.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', STATE.theme);
  applyTheme();
}

// ---- Router / Navegación ----
function navigate(view, params = {}) {
  STATE.currentView = view;
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
    case 'home': main.innerHTML = renderHome(); break;
    case 'chapter': renderChapterView(params.id, main); break;
    case 'quiz': renderQuizView(params.chapterId, main); break;
    case 'exam': renderExamView(main); break;
    case 'flashcards': renderFlashcardsView(main); break;
    case 'glossary': renderGlossaryView(main); break;
    default: main.innerHTML = renderHome();
  }
}

// ---- HOME ----
function renderHome() {
  const overall = getOverallProgress();
  const totalSections = CHAPTERS.reduce((s, c) => s + c.sections.length, 0);
  const doneSections  = CHAPTERS.reduce((s, c) => s + c.sections.filter(sec => isSectionComplete(c.id, sec.id)).length, 0);

  const chaptersHTML = CHAPTERS.map(chapter => {
    const complete = isChapterComplete(chapter.id);
    const done = chapter.sections.filter(s => isSectionComplete(chapter.id, s.id)).length;
    const pct  = Math.round((done / chapter.sections.length) * 100);
    return `
    <div class="chapter-card ${complete ? 'completed' : ''}" onclick="navigate('chapter', {id: ${chapter.id}})">
      <div class="chapter-num">${chapter.icon}</div>
      <div class="chapter-info">
        <h3>${chapter.title}</h3>
        <p class="chapter-desc">${chapter.description}</p>
        <div class="chapter-meta">
          <span class="meta-badge">⏱ ${chapter.duration}</span>
          <span class="meta-badge">${chapter.sections.length} secciones</span>
          <span class="meta-badge progress-badge">${done}/${chapter.sections.length} completadas</span>
        </div>
        <div class="mini-progress">
          <div class="mini-fill" style="width:${pct}%; background:${chapter.color}"></div>
        </div>
      </div>
      <div class="chapter-right">
        ${complete
          ? '<div class="check-badge">✓</div>'
          : '<span class="chapter-arrow">›</span>'}
      </div>
    </div>`;
  }).join('');

  return `
  <div class="home-view">
    <!-- Bento top -->
    <div class="bento-top">
      <div class="hero-card">
        <div class="hero-content">
          <div class="hero-eyebrow">✦ ISTQB® Certified Tester FL 2018</div>
          <h2>Plataforma QA<br>Foundation Level</h2>
          <p>Preparación completa para la certificación internacional basada en el syllabus oficial ISTQB® 2018 en español.</p>

          <div class="hero-progress">
            <div class="hero-progress-header">
              <span class="hero-progress-label">Tu progreso</span>
              <span class="hero-progress-pct" id="progressPercent">${overall}%</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" id="progressFill" style="width:${overall}%"></div>
            </div>
          </div>
          <p class="progress-text"></p>

          <div class="hero-actions">
            <button class="btn-hero-primary" onclick="navigate('exam')">🎯 Simulacro ISTQB</button>
            <button class="btn-hero-ghost"    onclick="navigate('flashcards')">🃏 Flashcards</button>
            <button class="btn-hero-ghost"    onclick="navigate('glossary')">📖 Glosario</button>
          </div>
        </div>
      </div>

      <div class="bento-stats">
        <div class="stat-card" onclick="navigate('chapter',{id:1})">
          <div class="stat-icon blue">📚</div>
          <div class="stat-info">
            <div class="stat-value">6</div>
            <div class="stat-label">Capítulos</div>
          </div>
        </div>
        <div class="stat-card" onclick="navigate('exam')">
          <div class="stat-icon violet">🏆</div>
          <div class="stat-info">
            <div class="stat-value">40</div>
            <div class="stat-label">Preguntas</div>
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
            <div class="stat-label">Términos</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Action cards -->
    <div class="bento-actions">
      <div class="action-card" onclick="navigate('exam')">
        <div class="action-card-icon">🎯</div>
        <div class="action-card-title">Simulacro ISTQB</div>
        <div class="action-card-desc">40 preguntas aleatorizadas con temporizador de 60 min. Idéntico al examen real de certificación.</div>
        <div class="action-card-cta">Comenzar ahora</div>
      </div>
      <div class="action-card" onclick="navigate('flashcards')">
        <div class="action-card-icon">🃏</div>
        <div class="action-card-title">Flashcards</div>
        <div class="action-card-desc">${FLASHCARDS.length} tarjetas con los conceptos clave del ISTQB.</div>
        <div class="action-card-cta">Repasar</div>
      </div>
      <div class="action-card" onclick="navigate('glossary')">
        <div class="action-card-icon">📖</div>
        <div class="action-card-title">Glosario</div>
        <div class="action-card-desc">${GLOSSARY.length} términos oficiales ISTQB con búsqueda.</div>
        <div class="action-card-cta">Explorar</div>
      </div>
    </div>

    <div class="istqb-tip">
      <strong>💡 Tip para el examen:</strong> 40 preguntas de opción múltiple · 65% para aprobar (26/40) · 60 minutos · Enfócate en los 7 principios y la triada Error → Defecto → Fallo.
    </div>

    <p class="section-title">Capítulos del programa de estudio</p>
    <div class="chapters-list">${chaptersHTML}</div>
  </div>`;
}

// ---- CHAPTER VIEW ----
function renderChapterView(chapterId, container) {
  const chapter = CHAPTERS.find(c => c.id === chapterId);
  if (!chapter) { container.innerHTML = renderHome(); return; }

  STATE.currentChapter = chapterId;
  STATE.currentSection = 0;

  container.innerHTML = `
  <div class="chapter-view">
    <div class="chapter-header" style="border-left: 4px solid ${chapter.color}">
      <button class="back-btn" onclick="navigate('home')">← Volver</button>
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
          🎯 Quiz del Capítulo
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
      ${index > 0 ? `<button class="btn-nav" onclick="showSection(${index-1})">← Anterior</button>` : '<div></div>'}
      <div class="center-actions">
        ${!isDone ? `
          <button class="btn-complete" onclick="completeSection('${chapter.id}', '${section.id}', ${index})">
            ✓ Marcar como completada
          </button>` : `<span class="done-label">✓ Completada</span>`}
      </div>
      ${!isLast
        ? `<button class="btn-nav primary" onclick="showSection(${index+1})">Siguiente →</button>`
        : `<button class="btn-nav quiz" onclick="navigate('quiz', {chapterId: ${chapter.id}})">🎯 Hacer Quiz →</button>`
      }
    </div>
  </div>`;
}

function showSection(index) {
  const chapter = CHAPTERS.find(c => c.id === STATE.currentChapter);
  if (!chapter) return;
  STATE.currentSection = index;
  document.getElementById('sectionContent').innerHTML = renderSection(chapter, index);

  document.querySelectorAll('.section-nav-item').forEach((el, i) => {
    el.classList.toggle('active', i === index);
  });
}

function completeSection(chapterId, sectionId, index) {
  markSectionComplete(parseInt(chapterId), sectionId);
  const chapter = CHAPTERS.find(c => c.id === parseInt(chapterId));
  document.getElementById('sectionContent').innerHTML = renderSection(chapter, index);

  const navItem = document.getElementById(`nav-${sectionId}`);
  if (navItem) navItem.classList.add('done');
  updateSidebarProgress();
}

function updateSidebarProgress() {
  const overall = getOverallProgress();
  const fill = document.getElementById('progressFill');
  const pct = document.getElementById('progressPercent');
  if (fill) fill.style.width = `${overall}%`;
  if (pct) pct.textContent = overall;
}

// ---- QUIZ VIEW ----
function renderQuizView(chapterId, container) {
  const chapter = CHAPTERS.find(c => c.id === parseInt(chapterId));
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
  const chapter = CHAPTERS.find(c => c.id === qs.chapterId);
  const q = qs.questions[qs.current];
  const total = qs.questions.length;
  const answered = qs.answers[qs.current];

  return `
  <div class="quiz-view">
    <div class="quiz-header">
      <button class="back-btn" onclick="navigate('chapter', {id: ${qs.chapterId}})">← Volver</button>
      <h2>Quiz — ${chapter.title}</h2>
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
          <strong>${answered === q.answer ? '✓ ¡Correcto!' : '✗ Incorrecto'}</strong>
          <p>${q.explanation}</p>
        </div>
        <div class="next-btn-row">
          ${qs.current < total - 1
            ? `<button class="btn-nav primary" onclick="nextQuizQuestion()">Siguiente →</button>`
            : `<button class="btn-nav quiz" onclick="finishQuiz()">Ver resultados 🎯</button>`
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
  const chapter = CHAPTERS.find(c => c.id === qs.chapterId);
  const correct = qs.questions.filter((q, i) => qs.answers[i] === q.answer).length;
  const pct = Math.round((correct / qs.questions.length) * 100);
  const passed = pct >= 65;

  document.getElementById('mainContent').innerHTML = `
  <div class="quiz-view">
    <div class="results-card ${passed ? 'passed' : 'failed'}">
      <div class="result-icon">${passed ? '🏆' : '📚'}</div>
      <h2>${passed ? '¡Excelente!' : 'Sigue practicando'}</h2>
      <div class="score-display">${correct}/${qs.questions.length}</div>
      <div class="score-pct">${pct}%</div>
      <p>${passed ? 'Superaste el umbral de aprobación (65%).' : 'Necesitas 65% para aprobar. Revisa el capítulo y vuelve a intentarlo.'}</p>
      <div class="result-actions">
        <button class="action-btn primary" onclick="navigate('chapter', {id: ${qs.chapterId}})">📖 Revisar Capítulo</button>
        <button class="action-btn secondary" onclick="navigate('quiz', {chapterId: ${qs.chapterId}})">🔄 Intentar de Nuevo</button>
        <button class="action-btn secondary" onclick="navigate('home')">🏠 Inicio</button>
      </div>
    </div>
    <div class="quiz-review">
      <h3>Revisión de Respuestas</h3>
      ${qs.questions.map((q, i) => `
        <div class="review-item ${qs.answers[i] === q.answer ? 'correct' : 'wrong'}">
          <p class="review-q"><strong>${i+1}.</strong> ${q.question}</p>
          <p class="review-correct">✓ Correcta: ${q.options[q.answer]}</p>
          ${qs.answers[i] !== q.answer ? `<p class="review-wrong">✗ Tu respuesta: ${q.options[qs.answers[i]] || 'Sin responder'}</p>` : ''}
          <p class="review-exp">${q.explanation}</p>
        </div>
      `).join('')}
    </div>
  </div>`;
}

// ---- EXAM VIEW ----
function renderExamView(container) {
  const shuffled = [...EXAM_QUESTIONS].sort(() => Math.random() - 0.5);

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
      <button class="back-btn" onclick="confirmExamExit()">← Salir</button>
      <h2>🎯 Simulacro ISTQB Foundation Level</h2>
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
  const q = es.questions[es.current];
  const total = es.questions.length;
  const answered = es.answers[es.current];

  return `
  <div class="question-card exam-question">
    <div class="question-meta">
      <span>Pregunta ${es.current + 1} de ${total}</span>
      <span>${Object.keys(es.answers).length} respondidas</span>
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
      ${es.current > 0 ? `<button class="btn-nav" onclick="prevExamQuestion()">← Anterior</button>` : '<div></div>'}
      ${es.current < total - 1
        ? `<button class="btn-nav primary" onclick="nextExamQuestion()">Siguiente →</button>`
        : `<button class="btn-nav quiz" onclick="finishExam()">✓ Finalizar Examen</button>`
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
  if (confirm('¿Seguro que quieres salir del examen? Se perderá tu progreso.')) {
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
      <h2>${passed ? '¡Aprobado!' : 'No Aprobado'}</h2>
      <div class="score-display">${correct}/${total}</div>
      <div class="score-pct">${pct}%</div>
      <p>${passed ? `¡Superaste el umbral (65%)! Tiempo: ${mins}m ${secs}s` : `Necesitas 26/40 (65%) para aprobar. Tiempo: ${mins}m ${secs}s`}</p>

      <div class="chapter-breakdown">
        <h3>Rendimiento por Capítulo</h3>
        ${Object.entries(byChapter).map(([chId, data]) => {
          const ch = CHAPTERS.find(c => c.id === parseInt(chId));
          const chPct = Math.round((data.correct / data.total) * 100);
          return `<div class="chapter-result">
            <span>${ch?.icon || '📚'} ${ch?.title || 'Capítulo '+chId}</span>
            <div class="mini-progress"><div class="mini-fill" style="width:${chPct}%; background: ${chPct >= 65 ? '#22c55e' : '#ef4444'}"></div></div>
            <span>${data.correct}/${data.total} (${chPct}%)</span>
          </div>`;
        }).join('')}
      </div>

      <div class="result-actions">
        <button class="action-btn primary" onclick="navigate('exam')">🔄 Nuevo Examen</button>
        <button class="action-btn secondary" onclick="navigate('flashcards')">🃏 Repasar Flashcards</button>
        <button class="action-btn secondary" onclick="navigate('home')">🏠 Inicio</button>
      </div>
    </div>

    <div class="quiz-review">
      <h3>Revisión Completa</h3>
      ${es.questions.map((q, i) => `
        <div class="review-item ${es.answers[i] === q.answer ? 'correct' : 'wrong'}">
          <p class="review-q"><strong>${i+1}.</strong> ${q.question}</p>
          <p class="review-correct">✓ Correcta: ${q.options[q.answer]}</p>
          ${es.answers[i] !== q.answer ? `<p class="review-wrong">✗ Tu respuesta: ${q.options[es.answers[i]] ?? 'Sin responder'}</p>` : ''}
        </div>
      `).join('')}
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
      <button class="back-btn" onclick="navigate('home')">← Volver</button>
      <h2>🃏 Flashcards ISTQB</h2>
    </div>

    <div class="fc-controls">
      <div class="category-filter">
        <button class="filter-btn active" onclick="filterFlashcards('all', this)">Todas</button>
        ${categories.map(cat => `<button class="filter-btn" onclick="filterFlashcards('${cat}', this)">${cat}</button>`).join('')}
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
      <h3>¡Completaste el mazo!</h3>
      <p>Conocidas: ${fs.known.size} / ${fs.deck.length}</p>
      <button class="action-btn primary" onclick="restartFlashcards()">🔄 Repetir</button>
      <button class="action-btn secondary" onclick="navigate('home')">🏠 Inicio</button>
    </div>`;
    return;
  }

  if (stats) stats.textContent = `${fs.current + 1} / ${fs.deck.length} — Conocidas: ${fs.known.size}`;

  const card = fs.deck[fs.current];
  const lines = (fs.flipped ? card.back : card.front).split('\n');

  area.innerHTML = `
  <div class="flashcard-container">
    <div class="flashcard ${fs.flipped ? 'flipped' : ''}" onclick="flipCard()">
      <div class="fc-inner">
        <div class="fc-front">
          <div class="fc-cat">${card.category}</div>
          <div class="fc-text">${card.front}</div>
          <div class="fc-hint">Haz clic para revelar</div>
        </div>
        <div class="fc-back">
          <div class="fc-cat">${card.category}</div>
          <div class="fc-text">${lines.map(l => `<p>${l}</p>`).join('')}</div>
        </div>
      </div>
    </div>
    <div class="fc-actions ${fs.flipped ? 'visible' : ''}">
      <button class="fc-btn no" onclick="fcAnswer(false)">✗ No la sabía</button>
      <button class="fc-btn yes" onclick="fcAnswer(true)">✓ La sabía</button>
    </div>
    <div class="fc-keyboard-hint">Espacio = voltear · ← No sabía · → Sí sabía</div>
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

// Flashcard keyboard navigation
document.addEventListener('keydown', (e) => {
  if (STATE.currentView !== 'flashcards') return;
  if (e.code === 'Space') { e.preventDefault(); flipCard(); }
  if (e.code === 'ArrowRight' && STATE.flashcardState?.flipped) fcAnswer(true);
  if (e.code === 'ArrowLeft' && STATE.flashcardState?.flipped) fcAnswer(false);
});

// ---- GLOSSARY VIEW ----
function renderGlossaryView(container) {
  container.innerHTML = `
  <div class="glossary-view">
    <div class="glossary-header">
      <button class="back-btn" onclick="navigate('home')">← Volver</button>
      <h2>📖 Glosario ISTQB</h2>
    </div>
    <div class="search-box">
      <input type="text" id="glossarySearch" placeholder="Buscar término..." oninput="filterGlossary()" autofocus>
    </div>
    <div id="glossaryList">${renderGlossaryList(GLOSSARY)}</div>
  </div>`;
}

function renderGlossaryList(terms) {
  const sorted = [...terms].sort((a, b) => a.term.localeCompare(b.term));
  return sorted.map(t => `
    <div class="glossary-item">
      <dt>${t.term}</dt>
      <dd>${t.definition}</dd>
    </div>`).join('');
}

function filterGlossary() {
  const query = document.getElementById('glossarySearch').value.toLowerCase();
  const filtered = GLOSSARY.filter(t =>
    t.term.toLowerCase().includes(query) || t.definition.toLowerCase().includes(query)
  );
  document.getElementById('glossaryList').innerHTML = renderGlossaryList(filtered);
}

// ---- SIDEBAR HIGHLIGHT ----
function setupSidebarNav() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const view = link.dataset.view;
      const params = link.dataset.params ? JSON.parse(link.dataset.params) : {};
      if (view) navigate(view, params);
    });
  });
}

// Expose navigate globally for inline onclick handlers in dynamic HTML
window.navigate = navigate;
window.showSection = showSection;
window.completeSection = completeSection;
window.answerQuiz = answerQuiz;
window.nextQuizQuestion = nextQuizQuestion;
window.finishQuiz = finishQuiz;
window.selectExamAnswer = selectExamAnswer;
window.nextExamQuestion = nextExamQuestion;
window.prevExamQuestion = prevExamQuestion;
window.jumpToQuestion = jumpToQuestion;
window.confirmExamExit = confirmExamExit;
window.finishExam = finishExam;
window.flipCard = flipCard;
window.fcAnswer = fcAnswer;
window.restartFlashcards = restartFlashcards;
window.filterFlashcards = filterFlashcards;
window.filterGlossary = filterGlossary;
window.toggleTheme = toggleTheme;

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  document.getElementById('toggleTheme').addEventListener('click', toggleTheme);
  setupSidebarNav();
  navigate('home');
});
