// ========================================
// DATOS DE LAS SEMANAS (fácil de modificar)
// ========================================
const weeksData = [
  {
    number: 1,
    title: "Fundamentos de Calidad",
    topics: ["Concepto de Calidad", "QA vs QC", "V&V"],
    content: [
      "¿Qué es la calidad en software?",
      "Diferencia entre Aseguramiento (QA) y Control (QC)",
      "Beneficios de las pruebas: rentabilidad, seguridad, satisfacción",
      "Validación vs Verificación (ejemplo: requisito de motocicleta)"
    ],
    activity: "Identifica 3 ejemplos de validación y 3 de verificación en tu vida cotidiana."
  },
  {
    number: 2,
    title: "Principios ISTQB",
    topics: ["7 Principios", "Error/Defecto/Falla"],
    content: [
      "Por qué son necesarias las pruebas",
      "Error (humano) → Defecto (código) → Falla (ejecución)",
      "Los 7 principios: pruebas exhaustivas imposibles, agrupación de defectos, paradoja del pesticida, etc.",
      "Psicología del testing: mentalidad del probador vs desarrollador"
    ],
    activity: "Clasifica 10 situaciones como 'error', 'defecto' o 'falla'."
  },
  {
    number: 3,
    title: "Proceso de Prueba",
    topics: ["Planificación", "Ejecución", "Cierre"],
    content: [
      "Planificación y control de pruebas",
      "Análisis y diseño de casos de prueba",
      "Implementación y ejecución",
      "Evaluación de criterios de salida y cierre",
      "Productos de trabajo en cada fase"
    ],
    activity: "Crea un plan de pruebas básico para una app de calculadora."
  },
  {
    number: 4,
    title: "Niveles de Prueba",
    topics: ["Componente", "Integración", "Sistema", "Aceptación"],
    content: [
      "Pruebas de componente (unitarias)",
      "Pruebas de integración (interfaces)",
      "Pruebas de sistema (end-to-end)",
      "Pruebas de aceptación (UAT)",
      "Cuándo y quién ejecuta cada nivel"
    ],
    activity: "Diseña casos de prueba para cada nivel en un sistema de login."
  },
  {
    number: 5,
    title: "Tipos de Prueba",
    topics: ["Funcional", "No Funcional", "Caja Blanca/Negra"],
    content: [
      "Pruebas funcionales (requisitos)",
      "Pruebas no funcionales (rendimiento, seguridad, usabilidad)",
      "Pruebas de caja blanca (estructura del código)",
      "Pruebas de caja negra (comportamiento)",
      "Pruebas de regresión y confirmación"
    ],
    activity: "Identifica qué tipo de prueba aplicarías a 5 escenarios diferentes."
  },
  {
    number: 6,
    title: "Técnicas de Diseño",
    topics: ["Partición Equivalente", "Valores Límite", "Tablas de Decisión"],
    content: [
      "Partición de equivalencia",
      "Análisis de valores límite",
      "Tablas de decisión",
      "Pruebas de transición de estados",
      "Pruebas basadas en experiencia"
    ],
    activity: "Crea una tabla de decisión para validar un formulario de registro."
  },
  {
    number: 7,
    title: "Gestión de Defectos",
    topics: ["Ciclo de Vida", "Prioridad/Severidad", "Reportes"],
    content: [
      "Ciclo de vida de un defecto",
      "Diferencia entre prioridad y severidad",
      "Cómo escribir un buen reporte de defecto",
      "Métricas de defectos",
      "Herramientas de gestión (Jira, Bugzilla)"
    ],
    activity: "Reporta 3 defectos encontrados en una app real siguiendo el estándar."
  },
  {
    number: 8,
    title: "Roles, Ética y Agile",
    topics: ["Roles QA", "ISTQB Ethics", "Agile Testing"],
    content: [
      "Roles: QA Analyst, Sr. QA, Test Manager",
      "Código de ética ISTQB (8 responsabilidades)",
      "Testing en metodologías ágiles",
      "Cuadrantes de prueba ágil (Q1-Q4)",
      "TDD, ATDD, BDD"
    ],
    activity: "Simula un Daily Scrum donde reportas el estado de las pruebas."
  }
];

// ========================================
// ICONOS PARA ACTIVIDADES
// ========================================
const activityIcons = ["📝", "🎯", "🛠️", "🔍", "⚡", "📊", "🐛", "🎭"];

// ========================================
// ESTADO DE LA APLICACIÓN
// ========================================
let completedWeeks = JSON.parse(localStorage.getItem('completedWeeks')) || [];

// ========================================
// INICIALIZACIÓN
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  renderWeeks();
  updateProgress();
  setupEventListeners();
  loadThemePreference();
});

// ========================================
// RENDERIZAR SEMANAS
// ========================================
function renderWeeks() {
  const weeksGrid = document.getElementById('weeksGrid');
  weeksGrid.innerHTML = '';
  
  weeksData.forEach((week, index) => {
    const weekCard = createWeekCard(week, index);
    weeksGrid.appendChild(weekCard);
  });
}

function createWeekCard(week, index) {
  const card = document.createElement('div');
  card.className = `week-card ${completedWeeks.includes(week.number) ? 'completed' : ''}`;
  card.dataset.weekNumber = week.number;
  
  // Topics
  const topicsHTML = week.topics.map(topic => 
    `<span class="topic-pill">${topic}</span>`
  ).join('');
  
  // Content list
  const contentHTML = week.content.map(item => 
    `<li>${item}</li>`
  ).join('');
  
  card.innerHTML = `
    <h3>
      <span class="week-number">${week.number}</span>
      ${week.title}
    </h3>
    <div class="topics">
      ${topicsHTML}
    </div>
    <ul>
      ${contentHTML}
    </ul>
    <div class="activity">
      <strong>${activityIcons[index]} Actividad:</strong> ${week.activity}
    </div>
  `;
  
  // Event listener para marcar como completada
  card.addEventListener('click', () => toggleWeekCompletion(week.number));
  
  return card;
}

// ========================================
// GESTIÓN DE PROGRESO
// ========================================
function toggleWeekCompletion(weekNumber) {
  const index = completedWeeks.indexOf(weekNumber);
  
  if (index > -1) {
    completedWeeks.splice(index, 1);
  } else {
    completedWeeks.push(weekNumber);
  }
  
  localStorage.setItem('completedWeeks', JSON.stringify(completedWeeks));
  renderWeeks();
  updateProgress();
}

function updateProgress() {
  const totalWeeks = weeksData.length;
  const completed = completedWeeks.length;
  const percentage = Math.round((completed / totalWeeks) * 100);
  
  document.getElementById('progressFill').style.width = `${percentage}%`;
  document.getElementById('progressPercent').textContent = percentage;
  document.getElementById('weeksCompleted').textContent = completed;
}

function resetProgress() {
  if (confirm('¿Estás seguro de que quieres reiniciar tu progreso?')) {
    completedWeeks = [];
    localStorage.setItem('completedWeeks', JSON.stringify(completedWeeks));
    renderWeeks();
    updateProgress();
  }
}

// ========================================
// TEMA CLARO/OSCURO
// ========================================
function toggleTheme() {
  document.body.classList.toggle('light-theme');
  const isLight = document.body.classList.contains('light-theme');
  
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  
  const themeButton = document.getElementById('toggleTheme');
  themeButton.textContent = isLight ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
}

function loadThemePreference() {
  const savedTheme = localStorage.getItem('theme');
  const themeButton = document.getElementById('toggleTheme');
  
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    themeButton.textContent = '☀️ Modo Claro';
  }
}

// ========================================
// EVENT LISTENERS
// ========================================
function setupEventListeners() {
  document.getElementById('toggleTheme').addEventListener('click', toggleTheme);
  document.getElementById('resetProgress').addEventListener('click', resetProgress);
}

// ========================================
// FUNCIONES PARA AGREGAR NUEVAS FEATURES
// ========================================

// Ejemplo: Agregar una nueva semana programáticamente
function addNewWeek(weekData) {
  weeksData.push(weekData);
  renderWeeks();
  updateProgress();
}

// Ejemplo: Exportar progreso
function exportProgress() {
  const data = {
    completedWeeks: completedWeeks,
    totalWeeks: weeksData.length,
    percentage: Math.round((completedWeeks.length / weeksData.length) * 100),
    exportDate: new Date().toISOString()
  };
  
  const dataStr = JSON.stringify(data, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = 'progreso-qa.json';
  link.click();
}

// Descomenta esta línea si quieres agregar un botón de exportar:
// console.log('Para exportar progreso, ejecuta: exportProgress()');