// ============================================================
// DATA.JS — Contenido ISTQB Foundation Level 2018 en Español
// ============================================================

const CHAPTERS = [
  {
    id: 1,
    title: "Fundamentos de la Prueba",
    icon: "🧪",
    color: "#3b82f6",
    duration: "180 min",
    description: "Qué es probar, por qué es necesario, los 7 principios y el proceso de prueba.",
    sections: [
      {
        id: "1.1",
        title: "¿Qué es Probar?",
        content: `<p>Las pruebas de software son mucho más que simplemente ejecutar pruebas. Incluyen diversas actividades y deben alinearse con el ciclo de vida del desarrollo de software.</p>
        <h4>Objetivos característicos de la prueba:</h4>
        <ul>
          <li>Evaluar los productos de trabajo (requisitos, historias de usuario, diseños y código)</li>
          <li>Provocar fallos y encontrar defectos</li>
          <li>Garantizar la cobertura requerida del objeto de prueba</li>
          <li>Reducir el nivel de riesgo de la calidad del software insuficiente</li>
          <li>Verificar si se han cumplido los requisitos especificados</li>
          <li>Verificar que el objeto de prueba cumple los requisitos contractuales, legales y normativos</li>
          <li>Proporcionar información a los implicados para que puedan tomar decisiones informadas</li>
          <li>Generar confianza en la calidad del objeto de prueba</li>
          <li>Validar si el objeto de prueba es completo y funciona como se esperaba</li>
        </ul>
        <div class="info-box">
          <strong>💡 Prueba vs Depuración:</strong> La prueba consiste en <em>encontrar</em> fallos. La depuración (<em>debugging</em>) es el proceso de <em>encontrar, analizar y corregir</em> las causas de los fallos. Depurar es tarea del desarrollador; probar puede ser tarea del probador o el desarrollador.
        </div>`
      },
      {
        id: "1.2",
        title: "¿Por qué es Necesario Probar?",
        content: `<p>Las pruebas son una forma de control de calidad que contribuye al logro de los objetivos acordados dentro del alcance, tiempo, calidad y restricciones presupuestarias establecidas.</p>
        <h4>Error → Defecto → Fallo</h4>
        <div class="concept-chain">
          <div class="concept-item">
            <span class="concept-icon">👤</span>
            <strong>Error (Mistake)</strong>
            <p>Acción humana que produce un resultado incorrecto. Los errores pueden deberse a presión de tiempo, complejidad del código, falta de comprensión, etc.</p>
          </div>
          <div class="concept-arrow">→</div>
          <div class="concept-item">
            <span class="concept-icon">🐛</span>
            <strong>Defecto (Bug)</strong>
            <p>Una imperfección o deficiencia en un producto de trabajo. El error humano produce un defecto en el código, diseño o documento.</p>
          </div>
          <div class="concept-arrow">→</div>
          <div class="concept-item">
            <span class="concept-icon">💥</span>
            <strong>Fallo (Failure)</strong>
            <p>Manifestación en tiempo de ejecución de un defecto. No todos los defectos causan fallos (código no ejecutado, condición no alcanzada).</p>
          </div>
        </div>
        <h4>Causa Raíz vs Efecto</h4>
        <p>La <strong>causa raíz</strong> es la razón fundamental por la que se produjo el error. Identificar la causa raíz permite a las organizaciones implementar acciones de proceso que reduzcan la frecuencia de los errores futuros.</p>
        <div class="example-box">
          <strong>Ejemplo:</strong> Un desarrollador malinterpreta un requisito (error) → escribe código incorrecto (defecto) → el sistema calcula mal el precio (fallo) → el cliente pierde dinero (efecto). La causa raíz puede ser requisitos ambiguos.
        </div>`
      },
      {
        id: "1.3",
        title: "Los 7 Principios de la Prueba",
        content: `<p>Estos principios son la base del conocimiento profesional de pruebas y han sido acordados a lo largo de los años en la industria del testing.</p>
        <div class="principles-grid">
          <div class="principle-card">
            <span class="principle-num">1</span>
            <h4>La prueba muestra la presencia de defectos</h4>
            <p>Las pruebas pueden demostrar que existen defectos, pero <strong>no pueden probar que no hay defectos</strong>. Incluso si no se encuentran defectos, no significa que el sistema sea perfecto.</p>
          </div>
          <div class="principle-card">
            <span class="principle-num">2</span>
            <h4>Las pruebas exhaustivas son imposibles</h4>
            <p>Probar todas las combinaciones de entradas, precondiciones y caminos no es factible (excepto en casos triviales). En su lugar, se usan el análisis de riesgos, las técnicas de prueba y las prioridades.</p>
          </div>
          <div class="principle-card">
            <span class="principle-num">3</span>
            <h4>Las pruebas tempranas ahorran tiempo y dinero</h4>
            <p>Encontrar y corregir defectos cuanto antes reduce costos. Las actividades de prueba deben comenzar lo antes posible en el SDLC (<em>shift left</em>).</p>
          </div>
          <div class="principle-card">
            <span class="principle-num">4</span>
            <h4>Agrupación de defectos</h4>
            <p>Un número pequeño de módulos suele contener la mayoría de los defectos (regla 80/20). Estos "puntos críticos" ayudan a focalizar los esfuerzos de prueba y riesgo.</p>
          </div>
          <div class="principle-card">
            <span class="principle-num">5</span>
            <h4>La paradoja del pesticida</h4>
            <p>Si se ejecutan los mismos conjuntos de pruebas repetidamente, dejarán de encontrar nuevos defectos. Las pruebas deben revisarse y actualizarse regularmente.</p>
          </div>
          <div class="principle-card">
            <span class="principle-num">6</span>
            <h4>Las pruebas dependen del contexto</h4>
            <p>Las pruebas se realizan de forma diferente según el contexto. Por ejemplo, el software de control de aeronaves se prueba de forma diferente a una app de comercio electrónico.</p>
          </div>
          <div class="principle-card">
            <span class="principle-num">7</span>
            <h4>La falacia de la ausencia de errores</h4>
            <p>Encontrar y corregir defectos no sirve de nada si el sistema no satisface las necesidades y expectativas de los usuarios. Verificar no es lo mismo que validar.</p>
          </div>
        </div>`
      },
      {
        id: "1.4",
        title: "El Proceso de Prueba",
        content: `<p>El proceso de prueba no es una secuencia rígida sino un conjunto de actividades que pueden solaparse o ejecutarse de forma iterativa.</p>
        <div class="process-flow">
          <div class="process-step">
            <div class="step-header">📋 Planificación</div>
            <p>Define los objetivos de prueba, la estrategia, los recursos y el calendario. Produce el <strong>Plan de Prueba</strong>.</p>
          </div>
          <div class="process-step">
            <div class="step-header">🔍 Monitorización y Control</div>
            <p>Verifica el avance real contra el plan. Toma acciones correctivas si es necesario. Produce <strong>informes de progreso</strong>.</p>
          </div>
          <div class="process-step">
            <div class="step-header">🧩 Análisis</div>
            <p>Examina la base de prueba y define las <strong>condiciones de prueba</strong>. Responde "¿qué probar?"</p>
          </div>
          <div class="process-step">
            <div class="step-header">✏️ Diseño</div>
            <p>Elabora los <strong>casos de prueba</strong> y datos de prueba. Responde "¿cómo probar?"</p>
          </div>
          <div class="process-step">
            <div class="step-header">⚙️ Implementación</div>
            <p>Organiza los casos de prueba en <strong>procedimientos de prueba</strong> y juegos de prueba. Prepara el entorno.</p>
          </div>
          <div class="process-step">
            <div class="step-header">▶️ Ejecución</div>
            <p>Ejecuta las pruebas, registra los resultados, compara resultados reales vs esperados, reporta defectos.</p>
          </div>
          <div class="process-step">
            <div class="step-header">✅ Compleción</div>
            <p>Verifica criterios de salida, archiva productos de trabajo, redacta el <strong>informe de compleción</strong>.</p>
          </div>
        </div>
        <h4>Psicología del Testing</h4>
        <p>La mentalidad del probador difiere de la del desarrollador. El probador busca activamente defectos con una perspectiva crítica. La independencia del probador (respecto al autor del código) aumenta la efectividad para encontrar defectos, pero requiere buena comunicación para evitar conflictos.</p>`
      }
    ],
    quiz: [
      {
        question: "Un desarrollador comete un error al interpretar un requisito y escribe código incorrecto que produce un resultado inesperado en producción. ¿Cuál es la secuencia correcta de términos ISTQB?",
        options: ["Fallo → Defecto → Error", "Error → Fallo → Defecto", "Error → Defecto → Fallo", "Defecto → Error → Fallo"],
        answer: 2,
        explanation: "Según ISTQB: el Error (acción humana) produce un Defecto (en el código/producto de trabajo), que al ejecutarse causa un Fallo (comportamiento inesperado en el sistema)."
      },
      {
        question: "¿Cuál de los siguientes NO es un objetivo característico de las pruebas según ISTQB?",
        options: ["Encontrar defectos", "Proporcionar confianza en la calidad", "Garantizar que el software no tiene defectos", "Verificar el cumplimiento de requisitos"],
        answer: 2,
        explanation: "Las pruebas pueden demostrar la presencia de defectos, pero NUNCA pueden garantizar su ausencia. Este es el Principio 1 de ISTQB: 'La prueba muestra la presencia de defectos, no su ausencia'."
      },
      {
        question: "Según el principio de 'paradoja del pesticida', ¿qué debe hacer un equipo de prueba cuando sus pruebas dejan de encontrar nuevos defectos?",
        options: ["Concluir que el software no tiene más defectos", "Revisar y actualizar los casos de prueba regularmente", "Aumentar únicamente la cantidad de ejecuciones", "Automatizar todas las pruebas existentes"],
        answer: 1,
        explanation: "El Principio 5 (paradoja del pesticida) establece que los mismos conjuntos de prueba ejecutados repetidamente dejan de encontrar nuevos defectos. Los casos de prueba deben revisarse y actualizarse periódicamente."
      },
      {
        question: "¿Cuál es la principal diferencia entre prueba y depuración?",
        options: ["La prueba es realizada por desarrolladores; la depuración por probadores", "La prueba encuentra fallos; la depuración encuentra, analiza y corrige sus causas", "La prueba es más cara que la depuración", "No hay diferencia; son el mismo proceso"],
        answer: 1,
        explanation: "La prueba busca provocar fallos y detectar defectos. La depuración es una actividad de desarrollo que localiza, analiza y corrige la causa de los fallos encontrados en las pruebas."
      },
      {
        question: "¿Cuál de los siguientes principios de prueba justifica el uso del análisis de riesgo para priorizar los esfuerzos de prueba?",
        options: ["La agrupación de defectos", "Las pruebas exhaustivas son imposibles", "La paradoja del pesticida", "La falacia de la ausencia de errores"],
        answer: 1,
        explanation: "El Principio 2 establece que las pruebas exhaustivas son imposibles. Para manejar esto, se usan el análisis de riesgos, las técnicas de prueba y las prioridades para enfocar el esfuerzo donde más valor aporta."
      },
      {
        question: "Un módulo de cálculo de impuestos contiene el 75% de todos los defectos del sistema aunque representa solo el 20% del código. ¿Qué principio ISTQB describe este fenómeno?",
        options: ["La paradoja del pesticida", "Las pruebas exhaustivas son imposibles", "La agrupación de defectos", "Las pruebas dependen del contexto"],
        answer: 2,
        explanation: "El Principio 4 (agrupación de defectos) establece que un número pequeño de módulos suele contener la mayoría de los defectos detectados. Esto orienta a concentrar el esfuerzo de prueba en esas áreas de mayor riesgo."
      },
      {
        question: "Un sistema bancario pasa todas sus pruebas funcionales exitosamente, pero los usuarios descubren que la interfaz es demasiado compleja para usarla. ¿Qué principio ISTQB se aplica aquí?",
        options: ["La paradoja del pesticida", "Las pruebas tempranas ahorran tiempo y dinero", "La falacia de la ausencia de errores", "La agrupación de defectos"],
        answer: 2,
        explanation: "El Principio 7 (falacia de la ausencia de errores) indica que encontrar y corregir defectos no garantiza el éxito si el sistema no satisface las necesidades reales de los usuarios. El software puede ser técnicamente correcto pero inútil."
      },
      {
        question: "¿En qué actividad del proceso de prueba se elaboran los casos de prueba y se determinan los datos de prueba necesarios?",
        options: ["Planificación de la prueba", "Análisis de la prueba", "Diseño de la prueba", "Implementación de la prueba"],
        answer: 2,
        explanation: "En el Diseño de la prueba se elaboran los casos de prueba a partir de las condiciones de prueba identificadas en el Análisis. También se diseñan los datos de prueba. El Análisis define QUÉ probar; el Diseño define CÓMO probarlo."
      }
    ]
  },
  {
    id: 2,
    title: "Pruebas a lo largo del SDLC",
    icon: "🔄",
    color: "#8b5cf6",
    duration: "210 min",
    description: "Modelos de ciclo de vida, niveles y tipos de prueba, prueba de regresión y enfoques ágiles.",
    sections: [
      {
        id: "2.1",
        title: "Modelos de Ciclo de Vida del Desarrollo de Software",
        content: `<p>El modelo de ciclo de vida del desarrollo de software (SDLC) determina cómo y cuándo se realizan las pruebas. No existe un modelo único correcto; la elección depende del contexto del proyecto.</p>
        <h4>Buenas prácticas de prueba para cualquier SDLC:</h4>
        <ul>
          <li>Cada actividad de desarrollo tiene una actividad de prueba correspondiente</li>
          <li>Los diferentes niveles de prueba tienen objetivos específicos y distintos</li>
          <li>El análisis y el diseño de prueba comienzan durante la actividad de desarrollo correspondiente</li>
          <li>Los probadores participan en las revisiones de los productos de trabajo de desarrollo</li>
        </ul>
        <div class="comparison-grid">
          <div class="comparison-card">
            <h4>🌊 Modelo en Cascada</h4>
            <p>Las fases de prueba ocurren después del desarrollo. Las pruebas se realizan al final, lo que puede generar costosas correcciones tardías. Útil para proyectos con requisitos muy estables.</p>
          </div>
          <div class="comparison-card">
            <h4>🔻 Modelo en V (V-Model)</h4>
            <p>Cada fase de desarrollo tiene un nivel de prueba correspondiente. Las pruebas se planifican y diseñan en paralelo con el desarrollo. Facilita el <em>shift-left</em>.</p>
          </div>
          <div class="comparison-card">
            <h4>🔁 Modelos Iterativos/Ágiles</h4>
            <p>El desarrollo y las pruebas ocurren en ciclos cortos (iteraciones o sprints). Permiten retroalimentación rápida. Las pruebas de regresión automatizadas son fundamentales.</p>
          </div>
        </div>`
      },
      {
        id: "2.2",
        title: "Niveles de Prueba",
        content: `<p>Los niveles de prueba son grupos de actividades de prueba organizadas y gestionadas conjuntamente. Cada nivel tiene objetivos, base de prueba, objeto de prueba, entorno y personas típicas diferentes.</p>
        <div class="levels-table">
          <div class="level-row header-row">
            <span>Nivel</span><span>Objeto de Prueba</span><span>Quién prueba</span><span>Objetivo principal</span>
          </div>
          <div class="level-row">
            <span><strong>Componente (Unitaria)</strong></span>
            <span>Módulos, clases, funciones individuales</span>
            <span>Desarrolladores</span>
            <span>Verificar el comportamiento de cada componente de forma aislada</span>
          </div>
          <div class="level-row">
            <span><strong>Integración de Componentes</strong></span>
            <span>Interfaces entre componentes</span>
            <span>Desarrolladores</span>
            <span>Verificar la comunicación e interacción entre componentes</span>
          </div>
          <div class="level-row">
            <span><strong>Sistema</strong></span>
            <span>Todo el sistema integrado</span>
            <span>Equipo de prueba independiente</span>
            <span>Verificar comportamiento funcional y no funcional del sistema completo</span>
          </div>
          <div class="level-row">
            <span><strong>Integración de Sistemas</strong></span>
            <span>Interfaces entre sistemas</span>
            <span>Equipo de prueba</span>
            <span>Verificar comunicación entre sistemas e infraestructura externa</span>
          </div>
          <div class="level-row">
            <span><strong>Aceptación (UAT)</strong></span>
            <span>Sistema completo en entorno real</span>
            <span>Clientes, usuarios finales</span>
            <span>Validar que el sistema satisface necesidades del negocio</span>
          </div>
        </div>
        <div class="info-box">
          <strong>Tipos de Prueba de Aceptación:</strong> Aceptación de usuario (UAT), Aceptación operativa (instalación, backup, recuperación), Aceptación contractual y normativa, Pruebas alfa (en el sitio del desarrollador con usuarios reales), Pruebas beta (en el sitio del cliente).
        </div>`
      },
      {
        id: "2.3",
        title: "Tipos de Prueba",
        content: `<p>Los tipos de prueba clasifican las actividades de prueba según <strong>qué atributo de calidad</strong> se está evaluando.</p>
        <h4>Pruebas Funcionales</h4>
        <p>Evalúan las funciones que debe realizar el sistema. Las condiciones de prueba se derivan de los requisitos funcionales, historias de usuario, casos de uso, etc. Se puede aplicar en todos los niveles.</p>
        <h4>Pruebas No Funcionales</h4>
        <p>Evalúan características distintas a las funcionalidades:</p>
        <ul>
          <li><strong>Eficiencia de desempeño:</strong> tiempo de respuesta, uso de recursos</li>
          <li><strong>Compatibilidad:</strong> con otros sistemas, plataformas o navegadores</li>
          <li><strong>Usabilidad:</strong> facilidad de aprendizaje y uso</li>
          <li><strong>Fiabilidad:</strong> disponibilidad, tolerancia a fallos</li>
          <li><strong>Seguridad:</strong> confidencialidad, integridad, autenticación</li>
          <li><strong>Mantenibilidad:</strong> facilidad de modificación</li>
          <li><strong>Portabilidad:</strong> facilidad de migración entre entornos</li>
        </ul>
        <h4>Pruebas de Caja Blanca vs Caja Negra</h4>
        <div class="comparison-grid">
          <div class="comparison-card">
            <h4>⬛ Caja Negra (Black-Box)</h4>
            <p>Basadas en especificaciones. No requieren conocimiento de la estructura interna. Se derivan de los requisitos funcionales o no funcionales. Aplican en todos los niveles.</p>
          </div>
          <div class="comparison-card">
            <h4>⬜ Caja Blanca (White-Box)</h4>
            <p>Basadas en la estructura interna del sistema. Requieren conocimiento del código o arquitectura. Se usa para medir cobertura de código.</p>
          </div>
        </div>
        <h4>Pruebas de Regresión y Confirmación</h4>
        <p>La <strong>prueba de confirmación</strong> verifica que un defecto corregido ya no ocurre. La <strong>prueba de regresión</strong> verifica que los cambios no han introducido nuevos defectos en partes no modificadas. Las pruebas de regresión son buenas candidatas para la automatización.</p>`
      },
      {
        id: "2.4",
        title: "Pruebas en Desarrollo Ágil",
        content: `<p>En los enfoques ágiles, las pruebas son continuas y forman parte integral de cada sprint. Algunos conceptos clave:</p>
        <h4>Cuadrantes de Prueba Ágil (Brian Marick)</h4>
        <div class="quadrant-grid">
          <div class="quadrant-card q1">
            <strong>Q1 - Soporte al equipo / Tecnología</strong>
            <p>Pruebas de componente y de integración automatizadas. TDD.</p>
          </div>
          <div class="quadrant-card q2">
            <strong>Q2 - Soporte al equipo / Negocio</strong>
            <p>Pruebas funcionales, ejemplos, pruebas de historia de usuario.</p>
          </div>
          <div class="quadrant-card q3">
            <strong>Q3 - Crítica al producto / Negocio</strong>
            <p>Pruebas exploratorias, de usabilidad, de aceptación de usuario.</p>
          </div>
          <div class="quadrant-card q4">
            <strong>Q4 - Crítica al producto / Tecnología</strong>
            <p>Pruebas de rendimiento, seguridad, fiabilidad, robustez.</p>
          </div>
        </div>
        <h4>TDD, ATDD y BDD</h4>
        <ul>
          <li><strong>TDD (Test Driven Development):</strong> El desarrollador escribe una prueba fallida, luego código mínimo para pasarla, luego refactoriza.</li>
          <li><strong>ATDD (Acceptance Test Driven Development):</strong> Los criterios de aceptación se definen antes del desarrollo, con participación del cliente.</li>
          <li><strong>BDD (Behavior Driven Development):</strong> Los comportamientos se describen en lenguaje natural (Given/When/Then) que sirven como pruebas ejecutables.</li>
        </ul>`
      }
    ],
    quiz: [
      {
        question: "¿Cuál es el nivel de prueba donde el equipo de prueba independiente verifica el comportamiento funcional y no funcional del sistema completo?",
        options: ["Prueba de componente", "Prueba de integración de componentes", "Prueba de sistema", "Prueba de aceptación"],
        answer: 2,
        explanation: "La Prueba de Sistema se centra en el comportamiento y capacidades de todo el sistema, incluyendo tareas extremo a extremo y características no funcionales. Suele ser realizada por un equipo de prueba independiente."
      },
      {
        question: "Una empresa lanza una versión beta de su aplicación móvil a un grupo selecto de usuarios en sus propios dispositivos. ¿Qué tipo de prueba de aceptación es esta?",
        options: ["Prueba alfa", "Prueba de aceptación de usuario (UAT)", "Prueba beta", "Prueba de aceptación operativa"],
        answer: 2,
        explanation: "Las pruebas beta se realizan en el sitio del cliente o usuario final, con usuarios reales usando el producto en su entorno natural, sin supervisión directa del equipo de desarrollo."
      },
      {
        question: "¿Cuál es la diferencia entre prueba de confirmación y prueba de regresión?",
        options: [
          "La confirmación verifica que los defectos corregidos ya no ocurren; la regresión verifica que los cambios no introdujeron nuevos defectos",
          "La confirmación se hace antes de cada sprint; la regresión al final del proyecto",
          "La confirmación la hace el desarrollador; la regresión el cliente",
          "No hay diferencia; son sinónimos"
        ],
        answer: 0,
        explanation: "La prueba de confirmación (re-testing) verifica que un defecto específico se ha corregido. La prueba de regresión verifica que los cambios (correcciones, mejoras) no han causado nuevos defectos en partes no modificadas del sistema."
      },
      {
        question: "En el contexto de los cuadrantes de prueba ágil, ¿en qué cuadrante se ubican las pruebas de rendimiento y seguridad?",
        options: ["Q1 - Soporte al equipo / Tecnología", "Q2 - Soporte al equipo / Negocio", "Q3 - Crítica al producto / Negocio", "Q4 - Crítica al producto / Tecnología"],
        answer: 3,
        explanation: "El cuadrante Q4 contiene pruebas que critican el producto desde una perspectiva tecnológica: pruebas de rendimiento, seguridad, fiabilidad y robustez. Son pruebas técnicas orientadas a encontrar debilidades del sistema."
      },
      {
        question: "¿Qué característica distingue a las pruebas de caja blanca de las de caja negra?",
        options: [
          "Las pruebas de caja blanca requieren conocimiento de la estructura interna del sistema",
          "Las pruebas de caja blanca solo se realizan a nivel de sistema",
          "Las pruebas de caja negra son más efectivas para encontrar defectos",
          "Las pruebas de caja blanca no pueden automatizarse"
        ],
        answer: 0,
        explanation: "Las pruebas de caja blanca (white-box) se basan en la estructura interna del sistema y requieren conocimiento del código o arquitectura. Las de caja negra se basan en especificaciones funcionales, sin necesidad de conocer la implementación."
      },
      {
        question: "Una organización está desarrollando software médico de misión crítica. ¿Qué modelo de ciclo de vida es más apropiado?",
        options: ["Scrum con sprints de 2 semanas", "Kanban continuo sin iteraciones", "Modelo en V con documentación rigurosa", "Cualquiera; el modelo no afecta la calidad"],
        answer: 2,
        explanation: "El Modelo en V es apropiado para proyectos donde los requisitos son estables y la documentación rigurosa es necesaria (sistemas médicos, aeroespaciales, etc.). Garantiza que cada fase de desarrollo tiene su nivel de prueba correspondiente planificado desde el inicio."
      }
    ]
  },
  {
    id: 3,
    title: "Prueba Estática",
    icon: "📋",
    color: "#10b981",
    duration: "120 min",
    description: "Revisiones, análisis estático y cómo encontrar defectos sin ejecutar código.",
    sections: [
      {
        id: "3.1",
        title: "¿Qué es la Prueba Estática?",
        content: `<p>La prueba estática examina productos de trabajo <strong>sin ejecutar el código</strong>. Puede aplicarse a documentos, requisitos, diseños, código, planes de prueba, etc.</p>
        <h4>Beneficios de las pruebas estáticas:</h4>
        <ul>
          <li>Detectar defectos antes de la ejecución (menor costo de corrección)</li>
          <li>Evaluar la calidad y generar confianza en los productos de trabajo</li>
          <li>Proporcionar información a los implicados</li>
          <li>Mejorar la comunicación entre desarrolladores y probadores</li>
        </ul>
        <h4>Diferencia entre prueba estática y dinámica:</h4>
        <div class="comparison-grid">
          <div class="comparison-card">
            <h4>🔍 Prueba Estática</h4>
            <p>No ejecuta el código. Examina documentos, requisitos, código fuente. Puede detectar defectos que las pruebas dinámicas no encuentran (inconsistencias en requisitos, ambigüedades, violaciones de estándares).</p>
          </div>
          <div class="comparison-card">
            <h4>▶️ Prueba Dinámica</h4>
            <p>Ejecuta el código con datos de entrada. Observa comportamiento y compara con resultados esperados. Solo puede detectar defectos que causen un fallo visible.</p>
          </div>
        </div>
        <div class="info-box">
          <strong>Defectos típicos encontrados por revisión:</strong> Desviaciones de estándares, ambigüedades en requisitos, omisiones, inconsistencias, información redundante o incorrecta.
        </div>`
      },
      {
        id: "3.2",
        title: "Tipos de Revisión",
        content: `<p>Las revisiones son el tipo más común de prueba estática. Existen cuatro tipos principales, de menor a mayor formalidad:</p>
        <div class="review-types">
          <div class="review-card informal">
            <h4>1. Revisión Informal</h4>
            <ul>
              <li>Sin proceso formal documentado</li>
              <li>Puede ser revisión entre pares (buddy check) o emparejamiento</li>
              <li>Objetivo principal: detectar defectos potenciales</li>
              <li>No requiere reunión de revisión</li>
              <li>Muy usado en Agile</li>
            </ul>
          </div>
          <div class="review-card walkthrough">
            <h4>2. Revisión Guiada (Walkthrough)</h4>
            <ul>
              <li>Guiada por el autor del producto</li>
              <li>Puede tener un proceso formal o informal</li>
              <li>Objetivos: detectar defectos, evaluar alternativas, consenso</li>
              <li>El escriba documenta los hallazgos</li>
              <li>Puede incluir reunión de revisión</li>
            </ul>
          </div>
          <div class="review-card technical">
            <h4>3. Revisión Técnica</h4>
            <ul>
              <li>Realizada por revisores técnicos cualificados</li>
              <li>Moderada por un moderador (puede ser el autor)</li>
              <li>Objetivos: detectar defectos, evaluar conformidad técnica</li>
              <li>Listas de comprobación pueden usarse</li>
              <li>Puede variar de informal a muy formal</li>
            </ul>
          </div>
          <div class="review-card inspection">
            <h4>4. Inspección</h4>
            <ul>
              <li>Tipo más formal de revisión</li>
              <li>Moderada por un moderador formado y certificado</li>
              <li>Roles definidos: moderador, autor, revisores, escriba, líder</li>
              <li>Basada en reglas, listas de comprobación y criterios de entrada/salida</li>
              <li>Métricas recopiladas para mejora de procesos</li>
            </ul>
          </div>
        </div>
        <h4>Proceso de Revisión Formal</h4>
        <p>Consta de las siguientes actividades: <strong>Planificación → Inicio de la revisión → Revisión individual → Comunicación y análisis → Corrección y reporte</strong>. En la fase de inicio se pueden aplicar los criterios de entrada; en la de corrección y reporte se verifican los criterios de salida.</p>`
      },
      {
        id: "3.3",
        title: "Análisis Estático",
        content: `<p>El análisis estático examina el código fuente o modelos UML mediante herramientas automatizadas, sin ejecutar el software. Los compiladores realizan una forma básica de análisis estático.</p>
        <h4>Defectos típicos detectados por análisis estático:</h4>
        <ul>
          <li>Variables no declaradas o utilizadas sin inicializar</li>
          <li>Variables nunca usadas (código muerto)</li>
          <li>Código inalcanzable</li>
          <li>Violaciones de convenciones de código</li>
          <li>Vulnerabilidades de seguridad (inyección SQL, XSS, desbordamiento de buffer)</li>
          <li>Lógica de programa incorrecta</li>
          <li>Complejidad ciclomática elevada</li>
        </ul>
        <div class="info-box">
          <strong>Herramientas de análisis estático:</strong> SonarQube, ESLint, PMD, Checkstyle, FindBugs/SpotBugs, Pylint. Estas herramientas identifican defectos potenciales sin ejecutar el código.
        </div>`
      }
    ],
    quiz: [
      {
        question: "¿Cuál de los siguientes tipos de defecto es más probable que sea detectado por una revisión estática pero NO por pruebas dinámicas?",
        options: [
          "Un fallo en el cálculo de intereses compuestos",
          "Una ambigüedad en los requisitos que causa dos interpretaciones válidas",
          "Un error en la respuesta del servidor HTTP",
          "Un tiempo de carga de página superior al umbral"
        ],
        answer: 1,
        explanation: "Las revisiones estáticas pueden detectar ambigüedades en los requisitos, inconsistencias entre documentos y problemas de diseño antes de que el código sea escrito. Las pruebas dinámicas solo pueden detectar defectos que causan un fallo durante la ejecución."
      },
      {
        question: "¿Qué tipo de revisión es la más formal, incluye roles definidos y recopila métricas para la mejora de procesos?",
        options: ["Revisión informal (buddy check)", "Revisión guiada (walkthrough)", "Revisión técnica", "Inspección"],
        answer: 3,
        explanation: "La Inspección es el tipo más formal de revisión. Incluye roles específicos (moderador certificado, autor, revisores, escriba), se basa en reglas y listas de comprobación, tiene criterios de entrada/salida, y recopila métricas para la mejora del proceso."
      },
      {
        question: "En una revisión guiada (walkthrough), ¿quién lidera la sesión de revisión?",
        options: ["El moderador independiente", "El autor del producto de trabajo", "El jefe de prueba", "Un revisor técnico senior"],
        answer: 1,
        explanation: "En la revisión guiada (walkthrough), el autor es quien guía la sesión. Presenta su propio trabajo a los revisores y explica las decisiones tomadas. Esto ayuda al autor a obtener retroalimentación directa y a los revisores a entender el contexto."
      },
      {
        question: "¿Cuál de las siguientes NO es una actividad de prueba estática?",
        options: [
          "Revisar una especificación de requisitos buscando ambigüedades",
          "Usar una herramienta para detectar variables no inicializadas en el código",
          "Ejecutar casos de prueba para verificar la funcionalidad de login",
          "Realizar una inspección de un diseño de arquitectura"
        ],
        answer: 2,
        explanation: "Ejecutar casos de prueba es prueba dinámica, no estática. Las pruebas estáticas examinan los productos de trabajo sin ejecutar el software: revisiones de documentos, análisis estático de código, inspecciones de diseño, etc."
      },
      {
        question: "Un equipo de desarrollo usa una herramienta que analiza su código Python en busca de variables no utilizadas, violaciones de estilo y posibles vulnerabilidades sin ejecutar el programa. Esto es un ejemplo de:",
        options: ["Prueba de caja blanca", "Análisis estático", "Prueba de integración", "Revisión guiada"],
        answer: 1,
        explanation: "El análisis estático examina el código fuente mediante herramientas automatizadas sin ejecutarlo. Herramientas como Pylint, ESLint o SonarQube realizan análisis estático para detectar defectos potenciales, violaciones de estándares y vulnerabilidades."
      }
    ]
  },
  {
    id: 4,
    title: "Técnicas de Diseño de Prueba",
    icon: "🎯",
    color: "#f59e0b",
    duration: "240 min",
    description: "Partición de equivalencia, valores límite, tablas de decisión, transición de estados y más.",
    sections: [
      {
        id: "4.1",
        title: "Partición de Equivalencia",
        content: `<p>La partición de equivalencia (PE) divide los datos de entrada en particiones donde todos los valores del mismo grupo se comportan de la misma manera. Si falla un valor en una partición, fallarán todos.</p>
        <h4>Tipos de particiones:</h4>
        <ul>
          <li><strong>Válidas:</strong> valores que el sistema debe aceptar y procesar correctamente</li>
          <li><strong>Inválidas:</strong> valores que el sistema debe rechazar</li>
        </ul>
        <div class="example-box">
          <strong>Ejemplo — Campo "edad" (18 a 65 años):</strong>
          <div class="pe-example">
            <div class="pe-invalid">Inválida: &lt;18<br><em>ej: 10, 0, -5</em></div>
            <div class="pe-valid">Válida: 18-65<br><em>ej: 30, 45, 18</em></div>
            <div class="pe-invalid">Inválida: &gt;65<br><em>ej: 70, 100</em></div>
          </div>
          <p>Con PE, se necesita al menos 1 caso de prueba por partición = mínimo 3 casos.</p>
        </div>
        <div class="info-box">
          <strong>Cobertura de PE:</strong> Se logra el 100% cuando al menos un valor de cada partición identificada ha sido probado. La cobertura mínima recomendada es probar una vez cada partición válida e inválida.
        </div>`
      },
      {
        id: "4.2",
        title: "Análisis de Valores Límite",
        content: `<p>El Análisis de Valores Límite (AVL) complementa la PE enfocándose en los bordes de las particiones, donde son más probables los defectos.</p>
        <h4>Versión de 2 valores (ISTQB 2018):</h4>
        <p>Para cada límite se prueban el <strong>valor exacto del límite</strong> y el <strong>valor adyacente en la partición inválida</strong>.</p>
        <h4>Versión de 3 valores:</h4>
        <p>Para cada límite se prueban el <strong>valor límite</strong>, el <strong>valor justo por debajo</strong> y el <strong>valor justo por encima</strong>.</p>
        <div class="example-box">
          <strong>Ejemplo — Campo "edad" (18 a 65):</strong>
          <div class="bva-example">
            <div class="bva-invalid">17 ❌</div>
            <div class="bva-valid">18 ✓</div>
            <div class="bva-mid">...</div>
            <div class="bva-valid">65 ✓</div>
            <div class="bva-invalid">66 ❌</div>
          </div>
          <p>Con AVL de 2 valores: probar 17, 18, 65, 66 (4 casos de prueba para los límites).</p>
          <p>Con AVL de 3 valores: probar 17, 18, 19, 64, 65, 66 (6 casos de prueba).</p>
        </div>`
      },
      {
        id: "4.3",
        title: "Tablas de Decisión",
        content: `<p>Las tablas de decisión modelan combinaciones de condiciones de entrada y las acciones resultantes. Son ideales cuando el comportamiento del sistema depende de múltiples condiciones interdependientes.</p>
        <h4>Estructura de una tabla de decisión:</h4>
        <div class="dt-example">
          <table class="decision-table">
            <thead>
              <tr><th></th><th>R1</th><th>R2</th><th>R3</th><th>R4</th></tr>
            </thead>
            <tbody>
              <tr class="conditions-header"><td colspan="5"><strong>CONDICIONES</strong></td></tr>
              <tr><td>¿Tiene cuenta?</td><td>S</td><td>S</td><td>N</td><td>N</td></tr>
              <tr><td>¿Contraseña correcta?</td><td>S</td><td>N</td><td>S</td><td>N</td></tr>
              <tr class="actions-header"><td colspan="5"><strong>ACCIONES</strong></td></tr>
              <tr><td>Permitir acceso</td><td>✓</td><td>✗</td><td>✗</td><td>✗</td></tr>
              <tr><td>Mostrar error</td><td>✗</td><td>✓</td><td>✓</td><td>✓</td></tr>
            </tbody>
          </table>
        </div>
        <p>Con <strong>N condiciones binarias</strong>, hay un máximo de <strong>2^N combinaciones</strong> (reglas). Se puede usar una tabla colapsada para reducir el número de columnas.</p>
        <div class="info-box">
          <strong>Cobertura mínima:</strong> Al menos un caso de prueba por cada regla (columna) de la tabla. Con N condiciones binarias: 2^N reglas = 2^N casos mínimos antes del colapso.
        </div>`
      },
      {
        id: "4.4",
        title: "Prueba de Transición de Estados",
        content: `<p>La prueba de transición de estados modela el comportamiento del sistema en función de su estado actual y los eventos que recibe. Se representa mediante diagramas de estado o tablas de transición.</p>
        <h4>Componentes:</h4>
        <ul>
          <li><strong>Estado:</strong> situación estable del sistema en un momento dado</li>
          <li><strong>Transición:</strong> cambio de un estado a otro</li>
          <li><strong>Evento:</strong> lo que dispara la transición</li>
          <li><strong>Acción:</strong> lo que ocurre como resultado de la transición</li>
          <li><strong>Estado final/aceptación:</strong> el sistema puede terminar en este estado</li>
        </ul>
        <div class="example-box">
          <strong>Ejemplo — Cajero ATM:</strong><br>
          REPOSO → (insertar tarjeta) → TARJETA_INSERTADA → (ingresar PIN) → AUTENTICADO → (retirar dinero) → REPOSO
        </div>
        <h4>Niveles de cobertura:</h4>
        <ul>
          <li><strong>Cobertura de todos los estados:</strong> visitar cada estado al menos una vez</li>
          <li><strong>Cobertura de todas las transiciones válidas:</strong> ejercitar cada transición válida al menos una vez (100% de transiciones)</li>
          <li><strong>Cobertura de todas las transiciones (incluyendo inválidas):</strong> también probar transiciones que no deberían ocurrir</li>
        </ul>`
      },
      {
        id: "4.5",
        title: "Técnicas de Caja Blanca y Basadas en Experiencia",
        content: `<h4>Prueba de Sentencias (Cobertura de Sentencias)</h4>
        <p>Mide el porcentaje de sentencias ejecutadas durante las pruebas. La cobertura del 100% significa que cada sentencia del código ha sido ejecutada al menos una vez.</p>
        <h4>Prueba de Decisiones (Cobertura de Decisiones)</h4>
        <p>Mide el porcentaje de resultados de decisiones (verdadero/falso) que han sido evaluados. La cobertura del 100% de decisiones implica el 100% de sentencias, pero no viceversa.</p>
        <div class="info-box">
          <strong>Relación:</strong> 100% cobertura de decisiones ⊇ 100% cobertura de sentencias. La cobertura de decisiones es más exigente.
        </div>
        <h4>Técnicas Basadas en Experiencia</h4>
        <ul>
          <li><strong>Adivinación de errores (Error Guessing):</strong> El probador usa su experiencia y conocimiento del sistema para intuir dónde hay defectos probables. Se puede formalizar con "listas de defectos".</li>
          <li><strong>Prueba Exploratoria:</strong> Diseño y ejecución simultáneos, guiados por el aprendizaje en tiempo real. Se documenta mediante "cartas de prueba" (test charters). Efectiva cuando hay poco tiempo o documentación escasa.</li>
          <li><strong>Prueba Basada en Listas de Comprobación:</strong> El probador diseña, implementa y ejecuta pruebas para cubrir los puntos de una lista de comprobación. Garantiza consistencia entre sesiones.</li>
        </ul>`
      }
    ],
    quiz: [
      {
        question: "Un campo acepta edades entre 18 y 99 años. Usando partición de equivalencia, ¿cuántas particiones se identifican?",
        options: ["1 partición válida", "2 particiones (válida e inválida)", "3 particiones (menor de 18, 18-99, mayor de 99)", "4 particiones"],
        answer: 2,
        explanation: "Se identifican 3 particiones: una válida (18-99) y dos inválidas (menor de 18 y mayor de 99). La PE requiere al menos un caso de prueba por cada partición identificada."
      },
      {
        question: "Usando análisis de valores límite de 2 valores para un campo que acepta números entre 1 y 100, ¿cuáles son los valores límite que deben probarse?",
        options: ["1 y 100", "0, 1, 100 y 101", "1, 2, 99 y 100", "0 y 101"],
        answer: 1,
        explanation: "Con AVL de 2 valores, se prueba el valor del límite y el valor adyacente de la partición inválida. Para el límite inferior: 0 (inválido) y 1 (válido). Para el límite superior: 100 (válido) y 101 (inválido). Total: 0, 1, 100, 101."
      },
      {
        question: "¿Para qué tipo de situación son más adecuadas las tablas de decisión como técnica de diseño de prueba?",
        options: [
          "Cuando se necesita probar los valores límite de un campo numérico",
          "Cuando el comportamiento del sistema depende de múltiples condiciones interdependientes",
          "Cuando se quiere medir la cobertura de código fuente",
          "Cuando no existe documentación del sistema"
        ],
        answer: 1,
        explanation: "Las tablas de decisión son especialmente útiles cuando el comportamiento del sistema depende de múltiples condiciones que pueden combinarse de distintas maneras. Modelan de forma clara todas las combinaciones posibles de condiciones y sus acciones resultantes."
      },
      {
        question: "En la prueba de transición de estados, ¿cuál es el nivel de cobertura más exigente?",
        options: [
          "Cobertura de todos los estados",
          "Cobertura de todas las transiciones válidas",
          "Cobertura de todas las transiciones incluyendo las inválidas",
          "Cobertura del estado inicial y final"
        ],
        answer: 2,
        explanation: "Probar todas las transiciones incluyendo las inválidas (transiciones que no deberían ocurrir) es el nivel más exigente. Verifica que el sistema no solo maneja correctamente las transiciones válidas, sino que también rechaza apropiadamente los eventos no esperados en cada estado."
      },
      {
        question: "Un probador con 10 años de experiencia en sistemas bancarios diseña casos de prueba adicionales basándose en su intuición sobre dónde suelen ocurrir defectos. Esto es un ejemplo de:",
        options: ["Partición de equivalencia", "Prueba exploratoria", "Adivinación de errores", "Prueba basada en listas de comprobación"],
        answer: 2,
        explanation: "La adivinación de errores (error guessing) es una técnica basada en la experiencia donde el probador usa su conocimiento del sistema y su historial de defectos para anticipar dónde es más probable que existan defectos. Se formaliza mediante 'listas de defectos'."
      },
      {
        question: "¿Cuál es la relación entre la cobertura de decisiones y la cobertura de sentencias?",
        options: [
          "Son equivalentes; el 100% de una implica el 100% de la otra",
          "El 100% de cobertura de sentencias implica el 100% de cobertura de decisiones",
          "El 100% de cobertura de decisiones implica el 100% de cobertura de sentencias",
          "No tienen ninguna relación entre sí"
        ],
        answer: 2,
        explanation: "La cobertura de decisiones es más exigente que la de sentencias. Si se logra el 100% de cobertura de decisiones (todos los resultados verdadero/falso de cada decisión), automáticamente se logra el 100% de cobertura de sentencias, pero no al contrario."
      },
      {
        question: "Un probador recibe una 'carta de prueba' que indica 'explorar la funcionalidad de autenticación en condiciones de alta concurrencia durante 45 minutos'. ¿Qué técnica de prueba está usando?",
        options: ["Prueba basada en listas de comprobación", "Prueba de transición de estados", "Prueba exploratoria", "Análisis de valores límite"],
        answer: 2,
        explanation: "La prueba exploratoria usa 'cartas de prueba' (test charters) que definen el alcance, objetivo y tiempo de una sesión de exploración. El diseño y la ejecución ocurren simultáneamente, guiados por el aprendizaje en tiempo real durante la sesión."
      }
    ]
  },
  {
    id: 5,
    title: "Gestión de la Prueba",
    icon: "📊",
    color: "#ef4444",
    duration: "180 min",
    description: "Organización, planificación, métricas, riesgos y gestión de defectos.",
    sections: [
      {
        id: "5.1",
        title: "Organización de la Prueba",
        content: `<h4>Prueba Independiente</h4>
        <p>El grado de independencia del equipo de prueba respecto al equipo de desarrollo afecta la efectividad para encontrar defectos:</p>
        <div class="independence-scale">
          <div class="ind-level low">Sin independencia: el desarrollador prueba su propio código</div>
          <div class="ind-level med-low">Independencia baja: otro desarrollador del mismo equipo prueba</div>
          <div class="ind-level med">Independencia media: equipo de prueba dentro del mismo proyecto</div>
          <div class="ind-level med-high">Independencia alta: equipo de prueba separado en la organización</div>
          <div class="ind-level high">Independencia máxima: probadores externos (outsourcing)</div>
        </div>
        <h4>Roles en la Gestión de Prueba</h4>
        <p><strong>Jefe de Prueba:</strong> Planificar las pruebas, monitorizar el avance, gestionar los riesgos, informar a la dirección, coordinar con el equipo de proyecto.</p>
        <p><strong>Probador:</strong> Analizar y diseñar casos de prueba, implementar y ejecutar pruebas, evaluar resultados, reportar defectos, usar herramientas de prueba, revisar pruebas de otros.</p>`
      },
      {
        id: "5.2",
        title: "Planificación y Estimación de la Prueba",
        content: `<h4>Plan de Prueba</h4>
        <p>El plan de prueba documenta los objetivos, alcance, enfoque, recursos y calendario de las actividades de prueba. Incluye:</p>
        <ul>
          <li>Contexto del proyecto y sistema bajo prueba</li>
          <li>Supuestos y restricciones</li>
          <li>Implicados (quién participa en las pruebas)</li>
          <li>Riesgos del proyecto y del producto</li>
          <li>Enfoque de prueba (niveles, tipos, técnicas)</li>
          <li>Entorno de prueba</li>
          <li>Criterios de entrada y salida</li>
          <li>Calendarios y estimaciones</li>
          <li>Métricas e informes</li>
        </ul>
        <h4>Criterios de Entrada y Salida</h4>
        <div class="criteria-grid">
          <div class="criteria-card">
            <h4>Criterios de Entrada (Definition of Ready)</h4>
            <p>Condiciones que deben cumplirse para iniciar una actividad de prueba:</p>
            <ul>
              <li>Disponibilidad del entorno de prueba</li>
              <li>Código disponible y entregado</li>
              <li>Datos de prueba disponibles</li>
              <li>Herramientas de prueba instaladas y configuradas</li>
            </ul>
          </div>
          <div class="criteria-card">
            <h4>Criterios de Salida (Definition of Done)</h4>
            <p>Condiciones que deben cumplirse para concluir las pruebas:</p>
            <ul>
              <li>Nivel de cobertura alcanzado</li>
              <li>Número de defectos abiertos dentro del umbral</li>
              <li>Todas las pruebas planificadas ejecutadas</li>
              <li>Riesgos residuales aceptados por los implicados</li>
            </ul>
          </div>
        </div>
        <h4>Técnicas de Estimación</h4>
        <ul>
          <li><strong>Basada en métricas:</strong> Usa datos de proyectos anteriores similares</li>
          <li><strong>Basada en expertos:</strong> Juicio experto, Planning Poker, técnica Delphi</li>
        </ul>`
      },
      {
        id: "5.3",
        title: "Métricas y Control de la Prueba",
        content: `<p>Las métricas de prueba permiten evaluar el avance y la calidad del proceso de prueba.</p>
        <h4>Métricas comunes:</h4>
        <div class="metrics-grid">
          <div class="metric-card"><strong>% de trabajo completado</strong><p>Casos de prueba diseñados, ejecutados, con resultado</p></div>
          <div class="metric-card"><strong>Cobertura de código</strong><p>% sentencias o decisiones ejercitadas</p></div>
          <div class="metric-card"><strong>Defectos encontrados/corregidos</strong><p>Tasa de detección y resolución</p></div>
          <div class="metric-card"><strong>Densidad de defectos</strong><p>Defectos por módulo o por línea de código</p></div>
          <div class="metric-card"><strong>Confianza en el producto</strong><p>Número de pruebas pasadas vs falladas</p></div>
          <div class="metric-card"><strong>Cobertura de requisitos</strong><p>% requisitos con al menos un caso de prueba</p></div>
        </div>
        <h4>Informes de Prueba</h4>
        <p>Los informes de progreso se generan durante las pruebas (para el equipo). Los informes de compleción se generan al finalizar un nivel o ciclo de prueba (para la dirección e implicados).</p>`
      },
      {
        id: "5.4",
        title: "Gestión de Riesgos y Defectos",
        content: `<h4>Riesgos en la Prueba</h4>
        <p><strong>Riesgo de producto:</strong> Posibilidad de que el sistema falle. Ejemplos: software complejo, código heredado, falta de experiencia del equipo.</p>
        <p><strong>Riesgo de proyecto:</strong> Factores que afectan el éxito del proyecto. Ejemplos: rotación de personal, cambios en los requisitos, presiones de calendario.</p>
        <div class="info-box">
          <strong>Prueba basada en riesgo:</strong> Concentrar el esfuerzo de prueba en las áreas de mayor riesgo. El riesgo = probabilidad × impacto. Las áreas de mayor riesgo reciben más pruebas.
        </div>
        <h4>Gestión de Defectos</h4>
        <p>Un buen reporte de defecto debe contener:</p>
        <ul>
          <li>Identificador único</li>
          <li>Título / resumen</li>
          <li>Fecha del reporte y autor</li>
          <li>Objeto de prueba y entorno</li>
          <li>Pasos para reproducir el defecto</li>
          <li>Resultado esperado vs resultado real</li>
          <li>Severidad y prioridad</li>
          <li>Estado del defecto</li>
          <li>Evidencia (capturas, logs)</li>
        </ul>
        <h4>Severidad vs Prioridad</h4>
        <div class="comparison-grid">
          <div class="comparison-card">
            <h4>🔴 Severidad</h4>
            <p>Impacto técnico del defecto en el sistema. La asigna el equipo de prueba. Escala: Crítico, Alto, Medio, Bajo.</p>
          </div>
          <div class="comparison-card">
            <h4>🚨 Prioridad</h4>
            <p>Urgencia con la que debe corregirse. La asigna el propietario del producto o negocio. Un defecto cosmético puede tener alta prioridad si afecta la marca.</p>
          </div>
        </div>`
      }
    ],
    quiz: [
      {
        question: "¿Cuál es la diferencia entre severidad y prioridad de un defecto?",
        options: [
          "Son sinónimos; ambas miden el impacto del defecto",
          "La severidad mide el impacto técnico; la prioridad mide la urgencia de corrección desde la perspectiva del negocio",
          "La severidad la asigna el negocio; la prioridad el equipo técnico",
          "La prioridad solo la determina el jefe de proyecto"
        ],
        answer: 1,
        explanation: "La severidad es el impacto técnico del defecto en el sistema (la asigna el equipo de prueba). La prioridad es la urgencia con que debe corregirse desde la perspectiva del negocio (la asigna el product owner o cliente). Un defecto de baja severidad puede tener alta prioridad si afecta la imagen de la empresa."
      },
      {
        question: "Los criterios de salida (Definition of Done) de una fase de prueba especifican:",
        options: [
          "Las condiciones que deben cumplirse antes de comenzar las pruebas",
          "Las condiciones que deben cumplirse para concluir las pruebas",
          "El alcance de los requisitos que serán probados",
          "Los recursos necesarios para el equipo de prueba"
        ],
        answer: 1,
        explanation: "Los criterios de salida (o Definition of Done) especifican las condiciones que deben satisfacerse para concluir una actividad de prueba. Ejemplos: nivel de cobertura alcanzado, número de defectos abiertos dentro del umbral, todas las pruebas planificadas ejecutadas."
      },
      {
        question: "¿Cuál de los siguientes es un ejemplo de riesgo de producto (no de proyecto)?",
        options: [
          "Alta rotación de personal en el equipo de prueba",
          "Cambios frecuentes en los requisitos del cliente",
          "Complejidad elevada del código del módulo de pagos",
          "Restricciones de presupuesto que limitan las herramientas disponibles"
        ],
        answer: 2,
        explanation: "Los riesgos de producto son los relacionados con la posibilidad de que el sistema falle, como código complejo, falta de experiencia en el dominio o dependencias con sistemas heredados. La rotación de personal, los cambios de requisitos y las restricciones de presupuesto son riesgos de proyecto."
      },
      {
        question: "Un jefe de prueba concentra el mayor esfuerzo de prueba en los módulos de pagos y autenticación porque son los más críticos para el negocio. Esta es una aplicación de:",
        options: [
          "La paradoja del pesticida",
          "La prueba basada en riesgo",
          "La partición de equivalencia",
          "La prueba exhaustiva"
        ],
        answer: 1,
        explanation: "La prueba basada en riesgo prioriza las actividades de prueba según el nivel de riesgo de cada área (probabilidad × impacto). Los módulos de mayor riesgo para el negocio reciben mayor esfuerzo de prueba, optimizando el uso de los recursos disponibles."
      },
      {
        question: "¿Qué debe contener obligatoriamente un buen reporte de defecto?",
        options: [
          "El nombre del desarrollador responsable del defecto",
          "Los pasos para reproducir el defecto, resultado esperado y resultado real",
          "La solución propuesta para el defecto",
          "El costo estimado de corrección"
        ],
        answer: 1,
        explanation: "Un buen reporte de defecto debe incluir pasos detallados para reproducirlo, el resultado esperado y el resultado real observado. Esto permite al desarrollador reproducir y corregir el defecto. El nombre del responsable, la solución y el costo no son parte estándar de un reporte de defecto."
      }
    ]
  },
  {
    id: 6,
    title: "Soporte de Herramientas",
    icon: "🔧",
    color: "#06b6d4",
    duration: "90 min",
    description: "Clasificación de herramientas de prueba, automatización y factores de éxito.",
    sections: [
      {
        id: "6.1",
        title: "Clasificación de Herramientas de Prueba",
        content: `<p>Las herramientas de prueba pueden clasificarse según su propósito dentro del proceso de prueba:</p>
        <div class="tools-grid">
          <div class="tool-category">
            <h4>🗂️ Gestión de Prueba</h4>
            <p>TestRail, Zephyr, qTest. Gestionan casos de prueba, ejecuciones, planes y trazabilidad con requisitos.</p>
          </div>
          <div class="tool-category">
            <h4>🐛 Gestión de Defectos</h4>
            <p>Jira, Bugzilla, Azure DevOps. Rastrean el ciclo de vida de los defectos desde la apertura hasta el cierre.</p>
          </div>
          <div class="tool-category">
            <h4>⚙️ Automatización de Pruebas</h4>
            <p>Selenium, Cypress, Playwright. Ejecutan pruebas automáticamente, especialmente útiles para regresión.</p>
          </div>
          <div class="tool-category">
            <h4>📈 Rendimiento y Carga</h4>
            <p>JMeter, Gatling, k6. Simulan múltiples usuarios para medir el comportamiento bajo carga.</p>
          </div>
          <div class="tool-category">
            <h4>🔍 Análisis Estático</h4>
            <p>SonarQube, ESLint, Pylint. Detectan defectos en el código sin ejecutarlo.</p>
          </div>
          <div class="tool-category">
            <h4>🧪 Frameworks de Prueba de Componente</h4>
            <p>JUnit, pytest, Jest, NUnit. Soportan la escritura y ejecución de pruebas unitarias.</p>
          </div>
        </div>`
      },
      {
        id: "6.2",
        title: "Beneficios, Riesgos y Factores de Éxito",
        content: `<h4>Beneficios de la Automatización de Pruebas</h4>
        <ul>
          <li>Reducción del esfuerzo en pruebas repetitivas (regresión)</li>
          <li>Ejecución más rápida y frecuente de las pruebas</li>
          <li>Mayor consistencia y reproducibilidad</li>
          <li>Cobertura de prueba que no es posible manualmente (rendimiento)</li>
          <li>Retroalimentación más rápida sobre la calidad</li>
        </ul>
        <h4>Riesgos de la Automatización</h4>
        <ul>
          <li>Expectativas poco realistas sobre el retorno de inversión</li>
          <li>Subestimación del tiempo de implementación y mantenimiento</li>
          <li>Dependencia excesiva en la herramienta (las pruebas manuales siguen siendo necesarias)</li>
          <li>Ignorar la necesidad de actualizar pruebas cuando cambia el sistema</li>
          <li>Elección de una herramienta inadecuada para el contexto</li>
        </ul>
        <h4>Factores de Éxito para la Selección e Implementación</h4>
        <ul>
          <li>Evaluar la madurez de la organización (no automatizar sin proceso estable)</li>
          <li>Realizar un proyecto piloto antes de comprometerse con una herramienta</li>
          <li>Definir criterios claros de selección (compatibilidad, costo, soporte)</li>
          <li>Proporcionar formación al equipo</li>
          <li>Establecer convenciones de uso y mantenimiento de scripts</li>
        </ul>
        <div class="info-box">
          <strong>Importante:</strong> La automatización de pruebas NO reemplaza la prueba manual. Las pruebas exploratorias, de usabilidad y de aceptación de usuario siguen requiriendo juicio humano. La automatización es más efectiva para pruebas de regresión estables y bien definidas.
        </div>`
      }
    ],
    quiz: [
      {
        question: "¿Cuál es el principal riesgo de introducir automatización de pruebas en un proceso de prueba inmaduro?",
        options: [
          "Las pruebas automatizadas son siempre más lentas que las manuales",
          "Expectativas poco realistas y subestimación del esfuerzo de implementación y mantenimiento",
          "Las herramientas de automatización no son compatibles con la mayoría de los sistemas",
          "La automatización elimina la necesidad de probadores humanos"
        ],
        answer: 1,
        explanation: "Uno de los principales riesgos es tener expectativas poco realistas sobre el retorno de inversión y subestimar el tiempo necesario para implementar y mantener los scripts de prueba. La automatización requiere inversión inicial significativa y un proceso de prueba suficientemente maduro y estable."
      },
      {
        question: "¿Para qué tipo de pruebas es más adecuada la automatización?",
        options: [
          "Pruebas exploratorias donde se evalúa la experiencia de usuario",
          "Pruebas de aceptación de usuario (UAT) que requieren opinión del cliente",
          "Pruebas de regresión repetitivas y estables con resultados bien definidos",
          "Pruebas ad hoc basadas en intuición del probador"
        ],
        answer: 2,
        explanation: "La automatización es más efectiva para pruebas de regresión estables y repetitivas donde los resultados esperados están bien definidos. Las pruebas exploratorias, de usabilidad y de aceptación de usuario requieren juicio humano y son difíciles de automatizar efectivamente."
      },
      {
        question: "Una organización quiere implementar Selenium para automatizar sus pruebas de UI. ¿Cuál es la mejor práctica ISTQB antes de comprometerse con esta herramienta?",
        options: [
          "Automatizar inmediatamente todos los casos de prueba existentes",
          "Realizar un proyecto piloto para evaluar la herramienta en el contexto real",
          "Eliminar todas las pruebas manuales antes de empezar la automatización",
          "Comprar la licencia más cara para garantizar la calidad"
        ],
        answer: 1,
        explanation: "ISTQB recomienda realizar un proyecto piloto antes de comprometerse con una herramienta de automatización. El piloto permite evaluar la compatibilidad con el sistema, la curva de aprendizaje del equipo, el esfuerzo de mantenimiento real y si la herramienta satisface las necesidades del proyecto."
      }
    ]
  }
];

// ============================================================
// GLOSARIO COMPLETO ISTQB
// ============================================================
const GLOSSARY = [
  { term: "Análisis de valores límite (AVL)", definition: "Técnica de diseño de prueba de caja negra que obtiene casos de prueba a partir de los valores límite de las particiones." },
  { term: "Base de prueba", definition: "El conjunto de documentos usados como referencia para el análisis y diseño de prueba (requisitos, diseño, código, etc.)." },
  { term: "Caso de prueba", definition: "Conjunto de condiciones de entrada, precondiciones, pasos y resultados esperados, desarrollado para un objetivo de prueba específico." },
  { term: "Causa raíz", definition: "La razón fundamental por la que se produce un defecto. Identificarla permite prevenir defectos similares en el futuro." },
  { term: "Cobertura", definition: "El grado en que un criterio de cobertura específico ha sido satisfecho durante las pruebas, expresado como porcentaje." },
  { term: "Condición de prueba", definition: "Un aspecto del objeto de prueba que puede ser verificado por uno o más casos de prueba." },
  { term: "Criterios de entrada", definition: "Condiciones que deben cumplirse para poder iniciar una actividad de prueba planificada. También llamado Definition of Ready." },
  { term: "Criterios de salida", definition: "Condiciones que deben cumplirse para dar por finalizada una actividad de prueba. También llamado Definition of Done." },
  { term: "Defecto", definition: "Una imperfección o deficiencia en un producto de trabajo que puede causar que el componente o sistema falle en cumplir sus requisitos." },
  { term: "Depuración (Debugging)", definition: "El proceso de encontrar, analizar y eliminar las causas de los fallos en el software. Es una actividad de desarrollo, no de prueba." },
  { term: "Error", definition: "Una acción humana que produce un resultado incorrecto, incluyendo la escritura de código con defectos." },
  { term: "Fallo (Failure)", definition: "Desviación del componente o sistema respecto al comportamiento esperado durante su funcionamiento." },
  { term: "Gestión de configuración", definition: "Disciplina que aplica dirección y vigilancia técnica y administrativa para identificar y documentar las características de los elementos de configuración." },
  { term: "Inspección", definition: "El tipo más formal de revisión estática. Incluye un proceso documentado, roles definidos (moderador certificado), criterios de entrada/salida y métricas." },
  { term: "Nivel de prueba", definition: "Un grupo de actividades de prueba organizadas y gestionadas conjuntamente (componente, integración, sistema, aceptación)." },
  { term: "Objeto de prueba", definition: "El componente o sistema que va a ser analizado mediante pruebas." },
  { term: "Oráculo de prueba", definition: "Una fuente que permite determinar si el sistema bajo prueba ha pasado o fallado una prueba (especificación, prototipo, comportamiento pasado)." },
  { term: "Paradoja del pesticida", definition: "El fenómeno por el cual los mismos casos de prueba ejecutados repetidamente dejan de encontrar nuevos defectos con el tiempo." },
  { term: "Partición de equivalencia", definition: "Técnica de diseño de prueba que divide los datos de entrada en particiones donde todos los valores se comportan de la misma manera." },
  { term: "Plan de prueba", definition: "Documentación que describe los objetivos, alcance, enfoque, recursos y calendario de las actividades de prueba." },
  { term: "Probabilidad de fallo", definition: "La probabilidad de que el componente o sistema produzca un fallo en un periodo de tiempo determinado." },
  { term: "Procedimiento de prueba", definition: "Una secuencia de pasos de prueba para la ejecución de una o más casos de prueba." },
  { term: "Prueba alfa", definition: "Prueba de aceptación de un producto software realizada en el sitio del desarrollador por representantes de los futuros usuarios." },
  { term: "Prueba basada en riesgo", definition: "Un enfoque de prueba en el que las actividades de prueba se priorizan y gestionan según el nivel de riesgo del producto." },
  { term: "Prueba beta", definition: "Prueba de aceptación de un producto software realizada por representantes de los futuros usuarios en su propio entorno." },
  { term: "Prueba de componente", definition: "Nivel de prueba que verifica el comportamiento de un componente de software de forma aislada. También llamada prueba unitaria." },
  { term: "Prueba de regresión", definition: "Prueba de un sistema previamente probado tras modificaciones, para detectar defectos introducidos o no corregidos." },
  { term: "Prueba estática", definition: "Prueba que no implica la ejecución del componente o sistema bajo prueba (revisiones, análisis estático)." },
  { term: "Prueba exploratoria", definition: "Enfoque en el que el probador diseña y ejecuta pruebas simultáneamente, aprendiendo sobre el sistema durante la sesión." },
  { term: "Riesgo de producto", definition: "Un riesgo relacionado directamente con el objeto de prueba, como la posibilidad de que el software falle en producción." },
  { term: "Riesgo de proyecto", definition: "Un riesgo relacionado con el proyecto, como la disponibilidad de recursos, los plazos o los requisitos cambiantes." },
  { term: "Severidad", definition: "El grado en que un defecto impacta en el desarrollo o funcionamiento del sistema. Determinada por el equipo de prueba." },
  { term: "Tabla de decisión", definition: "Técnica de diseño de prueba que representa combinaciones de condiciones de entrada y las acciones resultantes del sistema." },
  { term: "Tipo de prueba", definition: "Grupo de actividades de prueba relacionadas con atributos de calidad específicos (funcional, de rendimiento, de seguridad, etc.)." },
  { term: "Trazabilidad", definition: "La capacidad de identificar y seguir la relación entre productos de trabajo (requisitos → casos de prueba → defectos)." },
  { term: "Validación", definition: "Confirmación de que el producto satisface las necesidades reales del usuario. ¿Estamos construyendo el producto correcto?" },
  { term: "Verificación", definition: "Confirmación de que el producto cumple los requisitos especificados. ¿Estamos construyendo el producto correctamente?" }
];

// ============================================================
// FLASHCARDS — 52 tarjetas con ejemplos concretos
// ============================================================
const FLASHCARDS = [

  // ── Fundamentos ──────────────────────────────────────────
  {
    front: "Error → Defecto → Fallo",
    back: "👤 ERROR: el dev escribe calcularIVA(precio*0.16) en lugar de *0.19\n🐛 DEFECTO: el código incorrecto queda en producción\n💥 FALLO: el recibo muestra precio equivocado al usuario",
    category: "Fundamentos"
  },
  {
    front: "Prueba vs Depuración",
    back: "🔍 PRUEBA (QA): ejecuta el pago con tarjeta vencida → el sistema no lo rechaza → reporta bug #482\n🔧 DEPURACIÓN (Dev): abre el código, encuentra que falta validar la fecha, corrige y hace PR",
    category: "Fundamentos"
  },
  {
    front: "Validación vs Verificación",
    back: "✅ VERIFICACIÓN: el login acepta max 20 caracteres tal como dice el requisito\n🎯 VALIDACIÓN: los usuarios en beta no pueden recordar contraseñas de 20 caracteres — el requisito era incorrecto",
    category: "Fundamentos"
  },
  {
    front: "Causa Raíz de un defecto",
    back: "🔎 EFECTO: los clientes reciben cobros duplicados\n🐛 DEFECTO: el botón 'Pagar' no se desactiva tras el primer click\n🧠 CAUSA RAÍZ: requisito ambiguo — el equipo no especificó el manejo de doble-click\n→ Eliminar la causa raíz evita que se repita",
    category: "Fundamentos"
  },
  {
    front: "Objetivos de las pruebas",
    back: "Las pruebas NO solo buscan fallos. También:\n✓ Generar confianza en la calidad\n✓ Proporcionar info para decisiones informadas\n✓ Prevenir defectos (diseñar con calidad desde el inicio)\n✓ Verificar requisitos y validar necesidades del usuario",
    category: "Fundamentos"
  },

  // ── 7 Principios ─────────────────────────────────────────
  {
    front: "Principio 1: Las pruebas muestran...",
    back: "...la PRESENCIA de defectos, NO su ausencia.\n\nEjemplo: Aunque las 500 pruebas de regresión pasen, el módulo de pagos puede tener un bug no cubierto.\n→ Nunca digas 'el sistema está libre de errores'",
    category: "7 Principios"
  },
  {
    front: "Principio 2: Pruebas exhaustivas imposibles",
    back: "Un campo de texto con 255 caracteres posibles × mayúsculas/minúsculas × combinaciones = millones de entradas.\n→ Solución: Partición de equivalencia + AVL + análisis de riesgo para enfocar dónde probar",
    category: "7 Principios"
  },
  {
    front: "Principio 3: Pruebas tempranas (Shift Left)",
    back: "💰 Costo de corregir un defecto:\n• En requisitos: $1\n• En diseño: $10\n• En código: $100\n• En producción: $1,000+\n→ Revisa los requisitos ANTES de escribir código",
    category: "7 Principios"
  },
  {
    front: "Principio 4: Agrupación de defectos",
    back: "En un e-commerce típico:\n• Módulo de pagos → 60% de los bugs\n• Módulo de carrito → 25% de los bugs\n• Módulo de catálogo → 15% restante\n→ Concentra las pruebas en pagos y carrito (regla 80/20)",
    category: "7 Principios"
  },
  {
    front: "Principio 5: Paradoja del pesticida",
    back: "Si tus 200 pruebas de regresión llevan 6 meses sin encontrar bugs nuevos, el software 'se inmunizó'.\n→ Agrega nuevos escenarios, varía los datos, usa prueba exploratoria para descubrir zonas nuevas",
    category: "7 Principios"
  },
  {
    front: "Principio 6: Pruebas contextuales",
    back: "App bancaria: énfasis en seguridad, exactitud, auditoría, certificaciones\nApp de videojuegos: énfasis en rendimiento, compatibilidad, experiencia de usuario\nApp médica (marcapasos): énfasis en fiabilidad, IEC 62304, pruebas de seguridad funcional\n→ El contexto define el enfoque",
    category: "7 Principios"
  },
  {
    front: "Principio 7: Falacia de ausencia de errores",
    back: "Un banco lanzó un sistema de inversiones sin bugs técnicos.\nLos usuarios lo abandonaron porque la interfaz era incomprensible.\n→ Cero defectos técnicos no garantiza éxito. También debes validar usabilidad y valor de negocio.",
    category: "7 Principios"
  },

  // ── Proceso de Prueba ────────────────────────────────────
  {
    front: "7 Actividades del Proceso de Prueba",
    back: "1. Planificación\n2. Monitorización y Control\n3. Análisis (¿QUÉ probar?)\n4. Diseño (¿CÓMO probar?)\n5. Implementación (organizar, preparar entorno)\n6. Ejecución\n7. Compleción (informe final, lecciones aprendidas)",
    category: "Proceso de Prueba"
  },
  {
    front: "Análisis vs Diseño de Prueba",
    back: "📋 ANÁLISIS responde: ¿QUÉ probar?\nEj: 'Probar que el campo edad acepta solo valores entre 18 y 65'\n\n✏️ DISEÑO responde: ¿CÓMO probarlo?\nEj: Casos: edad=17 (inválido), edad=18 (válido), edad=65 (válido), edad=66 (inválido)",
    category: "Proceso de Prueba"
  },
  {
    front: "Plan de Prueba — contenido clave",
    back: "✓ Objetivos y alcance\n✓ Enfoque (niveles, tipos, técnicas)\n✓ Criterios de entrada y salida\n✓ Recursos (personas, entornos, herramientas)\n✓ Calendario y estimaciones\n✓ Riesgos y contingencias\n✓ Métricas e informes",
    category: "Proceso de Prueba"
  },
  {
    front: "Compleción de Prueba — ¿qué se hace?",
    back: "Al cerrar un ciclo de prueba:\n✓ Verificar que los criterios de salida están cumplidos\n✓ Archivar casos de prueba, datos y entornos\n✓ Entregar el informe de compleción\n✓ Recopilar lecciones aprendidas\n✓ Cerrar los defectos abiertos o trasladarlos",
    category: "Proceso de Prueba"
  },

  // ── Niveles de Prueba ────────────────────────────────────
  {
    front: "Prueba de Componente (Unitaria)",
    back: "¿Qué: una función aislada\nEjemplo: probar calcularDescuento(precio, porcentaje) con:\n• precio=100, pct=20 → espera 80\n• precio=0, pct=50 → espera 0\n• precio=-5 → manejo de error\nQuién: el desarrollador. Herramienta: JUnit, pytest, Jest",
    category: "Niveles de Prueba"
  },
  {
    front: "Prueba de Integración de Componentes",
    back: "¿Qué: la interfaz entre módulos\nEjemplo: el módulo 'Carrito' llama al módulo 'Inventario'.\n¿Devuelve correctamente el stock disponible?\n¿Qué ocurre si Inventario no responde en 2s?\nNo se prueba el carrito solo ni el inventario solo",
    category: "Niveles de Prueba"
  },
  {
    front: "Prueba de Sistema",
    back: "¿Qué: el sistema completo end-to-end\nEjemplo: Usuario busca producto → agrega al carrito → paga con tarjeta → recibe email de confirmación → el inventario se actualiza\n→ Simula el flujo real del negocio. Incluye funcional y no funcional.",
    category: "Niveles de Prueba"
  },
  {
    front: "Prueba de Aceptación (UAT)",
    back: "¿Quién: el cliente o usuarios finales\nEjemplo en banca: el área de cumplimiento verifica que el sistema genera reportes IFRS correctos.\nEl CEO prueba que el dashboard ejecutivo muestra los KPIs acordados.\n→ Valida si el sistema satisface las necesidades del negocio",
    category: "Niveles de Prueba"
  },
  {
    front: "Prueba Alfa vs Beta",
    back: "🏢 ALFA: usuarios reales prueban en las instalaciones del desarrollador con supervisión\nEj: empleados del banco prueban la nueva app en la oficina del proveedor\n\n🏠 BETA: usuarios reales prueban en su propio entorno sin supervisión\nEj: 500 clientes seleccionados usan la app en sus celulares durante 30 días",
    category: "Niveles de Prueba"
  },

  // ── Tipos de Prueba ──────────────────────────────────────
  {
    front: "Prueba Funcional vs No Funcional",
    back: "✅ FUNCIONAL: ¿Hace lo que debe?\nEj: El botón 'Pagar' procesa el pago correctamente\n\n⚡ NO FUNCIONAL: ¿Qué tan bien lo hace?\nEj: El pago se procesa en menos de 2 segundos con 10,000 usuarios simultáneos\nEj: El sistema cifra los datos de la tarjeta (seguridad)",
    category: "Tipos de Prueba"
  },
  {
    front: "Prueba de Confirmación vs Regresión",
    back: "🔁 CONFIRMACIÓN: el bug #482 decía que no se rechazaban tarjetas vencidas.\nDespués del fix: prueba específicamente ese escenario → ¿ya se rechaza? ✓\n\n🌊 REGRESIÓN: después del fix ¿el pago con tarjeta válida sigue funcionando? ¿Y el pago en cuotas? → Verificar que nada rompió",
    category: "Tipos de Prueba"
  },
  {
    front: "Prueba de Caja Negra vs Blanca",
    back: "⬛ CAJA NEGRA: pruebas el campo 'precio' con distintos valores sin ver el código.\nTécnicas: PE, AVL, tablas de decisión\n\n⬜ CAJA BLANCA: revisas que tu prueba ejecuta el IF del descuento en ambas ramas (verdadero/falso).\nTécnicas: cobertura de sentencias, cobertura de decisiones",
    category: "Tipos de Prueba"
  },

  // ── Técnicas ─────────────────────────────────────────────
  {
    front: "Partición de Equivalencia — ejemplo",
    back: "Campo 'edad' del seguro (18–65):\n❌ Inválida A: valores < 18 → probar ej. 15\n✅ Válida: 18 a 65 → probar ej. 40\n❌ Inválida B: valores > 65 → probar ej. 70\n→ 3 particiones = mínimo 3 casos de prueba\nPrueba 1 valor representativo de cada partición",
    category: "Técnicas"
  },
  {
    front: "AVL de 2 valores — ejemplo",
    back: "Campo precio (mín: $1, máx: $9,999):\nLímite inferior → probar $0 y $1\nLímite superior → probar $9,999 y $10,000\n→ 4 casos de prueba para los bordes\nLos bordes concentran más defectos que el interior",
    category: "Técnicas"
  },
  {
    front: "Tabla de Decisión — cuándo usarla",
    back: "Regla de descuento de una tienda:\n• ¿Cliente VIP? S/N\n• ¿Compra > $500? S/N\n→ 4 combinaciones (2²)\nSS: 20% | SN: 10% | NS: 5% | NN: 0%\nIdeal cuando el comportamiento depende de combinaciones de condiciones",
    category: "Técnicas"
  },
  {
    front: "Transición de Estados — ejemplo ATM",
    back: "Estados: REPOSO → TARJETA_INSERTADA → PIN_INGRESADO → OPERANDO → REPOSO\nEventos: insertar tarjeta / ingresar PIN / seleccionar operación / finalizar\nPrueba: ¿qué ocurre si ingresas el PIN incorrecto 3 veces? → Estado: BLOQUEADO\n→ Útil para sistemas reactivos que cambian de estado",
    category: "Técnicas"
  },
  {
    front: "Cobertura de Decisiones vs Sentencias",
    back: "Código:\nif (edad >= 18) { mostrarContenido(); }\nreturn;\n\n100% SENTENCIAS: ejecutar con edad=20 → ambas líneas cubiertas ✓\n100% DECISIONES: necesitas edad=20 (IF=true) Y edad=15 (IF=false) → más exigente\n→ 100% decisiones garantiza 100% sentencias, no viceversa",
    category: "Técnicas"
  },
  {
    front: "Prueba Exploratoria",
    back: "CARTA DE PRUEBA:\n🎯 Objetivo: explorar el flujo de checkout en móvil con conexión lenta\n⏱ Duración: 45 minutos\n📱 Entorno: iPhone 13, red 3G\n\nEl probador diseña Y ejecuta en simultáneo, aprende del sistema.\nDocumenta hallazgos y defectos en la sesión.\nÚtil cuando hay poca documentación o tiempo escaso.",
    category: "Técnicas"
  },
  {
    front: "Adivinación de Errores (Error Guessing)",
    back: "Basada en EXPERIENCIA del probador.\nEj. para un formulario de login:\n• Campo vacío en usuario/contraseña\n• Espacios al inicio/final del usuario\n• Caracteres especiales: ', --, <script>\n• Login con cuenta bloqueada\n• 100 intentos fallidos seguidos\n→ Se formaliza con 'listas de defectos' históricas",
    category: "Técnicas"
  },

  // ── Prueba Estática ──────────────────────────────────────
  {
    front: "Tipos de Revisión (orden de formalidad)",
    back: "Menor formalidad → Mayor formalidad:\n1. Revisión Informal (buddy check, sin proceso)\n2. Revisión Guiada / Walkthrough (el autor guía)\n3. Revisión Técnica (moderador, puede ser el autor)\n4. Inspección (moderador certificado, métricas, la más formal)",
    category: "Prueba Estática"
  },
  {
    front: "Inspección — roles y proceso",
    back: "Roles: Moderador certificado · Autor · Revisores · Escriba · Líder de inspección\n\nProceso:\n1. Planificación\n2. Inicio (criteria de entrada)\n3. Revisión individual\n4. Reunión de inspección\n5. Correción\n6. Seguimiento (criterios de salida + métricas)",
    category: "Prueba Estática"
  },
  {
    front: "¿Qué detecta el análisis estático?",
    back: "Sin ejecutar el código, herramientas como SonarQube detectan:\n• Variables no inicializadas\n• Código muerto (nunca se ejecuta)\n• Complejidad ciclomática elevada (>10 → difícil de mantener)\n• Vulnerabilidades: SQL injection, XSS, buffer overflow\n• Violaciones de estándares de codificación",
    category: "Prueba Estática"
  },

  // ── Gestión ──────────────────────────────────────────────
  {
    front: "Severidad vs Prioridad",
    back: "Bug: el logo de la empresa aparece pixelado en la homepage\n📊 SEVERIDAD: Baja (es cosmético, no afecta funcionalidad)\n🚨 PRIORIDAD: Alta (el CEO presenta el sitio a inversores mañana)\n\n→ Severidad = impacto técnico (asigna QA)\n→ Prioridad = urgencia de negocio (asigna PO/cliente)",
    category: "Gestión"
  },
  {
    front: "Riesgo de Producto vs Proyecto",
    back: "🛍️ RIESGO DE PRODUCTO (¿qué puede fallar en el sistema?):\n• Módulo de pagos con lógica compleja heredada\n• Integración nueva con API bancaria sin documentación\n\n🗂️ RIESGO DE PROYECTO (¿qué puede afectar al equipo?):\n• El QA Senior renuncia la semana del lanzamiento\n• El proveedor entrega el entorno tarde",
    category: "Gestión"
  },
  {
    front: "Criterios de Entrada (DoR)",
    back: "Antes de empezar a probar el módulo de pagos:\n✓ Entorno de prueba configurado (staging activo)\n✓ Build 2.3.1 desplegado y smoke test OK\n✓ Datos de tarjetas de prueba disponibles\n✓ Casos de prueba revisados y aprobados\n✓ Herramienta de defectos (Jira) accesible",
    category: "Gestión"
  },
  {
    front: "Criterios de Salida (DoD)",
    back: "Para cerrar el ciclo de pruebas de sistema:\n✓ 95% de los casos planificados ejecutados\n✓ 100% de defectos críticos y altos resueltos\n✓ Defectos medios abiertos ≤ 5 (documentados y aceptados)\n✓ Cobertura de requisitos ≥ 90%\n✓ Informe de prueba entregado y aprobado",
    category: "Gestión"
  },
  {
    front: "Reporte de Defecto — campos obligatorios",
    back: "ID único · Fecha · Autor\nTítulo descriptivo (qué, dónde, cuándo)\nPasos para reproducir (numerados, precisos)\nResultado esperado vs resultado real\nSeveridad + Prioridad\nEntorno (OS, browser, versión)\nEvidencia (screenshot, video, log)\nEstado: Nuevo → Asignado → En proceso → Resuelto → Cerrado",
    category: "Gestión"
  },

  // ── Agile ────────────────────────────────────────────────
  {
    front: "TDD — ciclo Red-Green-Refactor",
    back: "🔴 RED: escribe un test que FALLA\nEj: test_calcular_iva() espera 119, el código retorna 0 → FALLA\n\n🟢 GREEN: escribe el MÍNIMO código para pasarlo\nEj: return precio * 1.19\n\n🔵 REFACTOR: mejora el código sin romper el test",
    category: "Agile"
  },
  {
    front: "ATDD y BDD",
    back: "ATDD (Acceptance Test Driven Development):\nEl cliente, QA y dev definen criterios de aceptación ANTES de codificar\n\nBDD (Behavior Driven Development) — lenguaje Gherkin:\nGiven el usuario está en la página de login\nWhen ingresa usuario='admin' y clave='admin123'\nThen debe ver el dashboard principal",
    category: "Agile"
  },
  {
    front: "Cuadrantes de Prueba Ágil",
    back: "Q1 (↙ Tecnología + Soporte): unitarias, integración, TDD\nQ2 (↘ Negocio + Soporte): funcionales, criterios de aceptación\nQ3 (↗ Negocio + Crítica): exploratorias, usabilidad, UAT\nQ4 (↖ Tecnología + Crítica): rendimiento, seguridad, fiabilidad\n→ Un buen equipo ágil cubre los 4 cuadrantes",
    category: "Agile"
  },

  // ── Herramientas ─────────────────────────────────────────
  {
    front: "Herramientas por categoría",
    back: "📋 Gestión: TestRail, Zephyr, Azure Test Plans\n🐛 Defectos: Jira, GitHub Issues, Bugzilla\n⚙️ Automatización UI: Selenium, Cypress, Playwright\n⚙️ Unitarias: JUnit, pytest, Jest\n📈 Rendimiento: JMeter, k6, Gatling\n🔍 Análisis estático: SonarQube, ESLint, Pylint",
    category: "Herramientas"
  },
  {
    front: "Beneficios vs Riesgos de la automatización",
    back: "✅ BENEFICIOS:\n• Regresión más rápida y frecuente\n• Consistencia (no hay 'olvidos humanos')\n• Posibilita pruebas de carga (imposibles manualmente)\n\n⚠️ RIESGOS:\n• Inversión inicial alta (scripts, infraestructura)\n• Mantenimiento costoso cuando el sistema cambia\n• No reemplaza la prueba exploratoria",
    category: "Herramientas"
  },
  {
    front: "¿Qué NO se puede automatizar bien?",
    back: "❌ Pruebas exploratorias (requieren intuición y aprendizaje en tiempo real)\n❌ Pruebas de usabilidad (¿es fácil de usar para un humano?)\n❌ Pruebas de aceptación de usuario final (UAT)\n❌ Pruebas ad hoc basadas en experiencia del QA\n→ Automatiza lo estable y repetitivo; mantén lo humano para lo cognitivo",
    category: "Herramientas"
  }
];

// ============================================================
// PLANTILLAS PROFESIONALES DE QA
// ============================================================
const TEMPLATES = [
  {
    id: "bug-report",
    title: "Reporte de Defecto",
    icon: "🐛",
    color: "#f43f5e",
    description: "Documenta defectos de forma estandarizada para que el equipo de desarrollo pueda reproducirlos y corregirlos eficientemente.",
    tags: ["ISTQB", "Gestión de Defectos", "Esencial"],
    fields: [
      { label: "ID del Defecto",        type: "text",     placeholder: "DEF-001", tip: "Identificador único. Usa el formato de tu herramienta (ej. Jira: BUG-142)." },
      { label: "Título",                type: "text",     placeholder: "Breve descripción del defecto (qué + dónde)", tip: "Sé específico: 'El botón Pagar no se deshabilita al hacer doble click en checkout'" },
      { label: "Módulo / Área",         type: "text",     placeholder: "Ej: Carrito de compras / Proceso de pago", tip: "Ubica exactamente dónde ocurre el problema." },
      { label: "Pasos para reproducir", type: "textarea", placeholder: "1. Ir a...\n2. Hacer click en...\n3. Ingresar...\n4. Observar que...", tip: "Cada paso debe ser preciso y reproducible. Otro QA sin contexto debe poder seguirlos." },
      { label: "Resultado esperado",    type: "textarea", placeholder: "Qué debería ocurrir según los requisitos o la lógica del negocio", tip: "Basado en los criterios de aceptación o en el comportamiento lógico esperado." },
      { label: "Resultado real",        type: "textarea", placeholder: "Qué ocurre en realidad (describe exactamente lo observado)", tip: "Describe el comportamiento incorrecto con precisión. Evita 'no funciona'." },
      { label: "Severidad",             type: "select",   options: ["Crítica — sistema inoperativo o pérdida de datos", "Alta — funcionalidad clave afectada, sin workaround", "Media — funcionalidad parcial, existe workaround", "Baja — cosmético o molestia menor"], tip: "La asigna el equipo de QA según el impacto técnico." },
      { label: "Prioridad",             type: "select",   options: ["Urgente — corregir de inmediato", "Alta — próximo sprint", "Media — planificar en backlog", "Baja — cuando haya disponibilidad"], tip: "La asigna el Product Owner según el impacto para el negocio." },
      { label: "Entorno",               type: "text",     placeholder: "SO: Windows 11 | Browser: Chrome 124 | Build: 2.3.1 | URL: staging.app.com", tip: "Sin el entorno, el dev puede decir 'en mi máquina funciona'." },
      { label: "Adjuntos / Evidencia",  type: "text",     placeholder: "screenshot_checkout_error.png | video_defecto.mp4 | console_log.txt", tip: "Una imagen vale más que mil palabras. Video si el bug es intermitente." }
    ],
    example: {
      title: "Ejemplo completado — Sistema de e-commerce",
      fields: {
        "ID del Defecto": "BUG-247",
        "Título": "El botón 'Confirmar Compra' procesa el pago dos veces al hacer doble click",
        "Módulo / Área": "Checkout / Paso 3: Confirmación de pago",
        "Pasos para reproducir": "1. Iniciar sesión con usuario test@correo.com\n2. Agregar cualquier producto al carrito\n3. Completar los pasos 1 y 2 del checkout (dirección y envío)\n4. En el paso 3, ingresar tarjeta de prueba: 4111-1111-1111-1111\n5. Hacer DOBLE CLICK rápido sobre el botón 'Confirmar Compra'\n6. Esperar la respuesta del sistema",
        "Resultado esperado": "El pago se procesa una sola vez. El botón debe deshabilitarse o mostrar un spinner tras el primer click para prevenir clicks duplicados.",
        "Resultado real": "El sistema procesa el cobro dos veces. El usuario recibe dos emails de confirmación con números de orden distintos y su tarjeta es debitada dos veces por el mismo monto.",
        "Severidad": "Alta — funcionalidad clave afectada, sin workaround",
        "Prioridad": "Urgente — corregir de inmediato",
        "Entorno": "SO: macOS Sonoma 14.4 | Browser: Chrome 124.0.6367.119 | Build: 2.3.1 | URL: staging.tienda.com",
        "Adjuntos / Evidencia": "video_doble_pago.mp4 | screenshot_dos_emails.png | network_log_duplicate_request.har"
      }
    }
  },

  {
    id: "test-case",
    title: "Caso de Prueba",
    icon: "📋",
    color: "#3b82f6",
    description: "Define de forma precisa qué probar, cómo probarlo y qué resultado esperar. Base de la ejecución de pruebas.",
    tags: ["ISTQB", "Diseño de Prueba", "Esencial"],
    fields: [
      { label: "ID del Caso",           type: "text",     placeholder: "TC-001", tip: "Identificador único. Prefijo según el módulo: CP-001 (pagos), AU-001 (autenticación)." },
      { label: "Título",                type: "text",     placeholder: "Describe el escenario: Qué + Condición + Resultado esperado", tip: "Ej: 'Login exitoso con credenciales válidas de usuario activo'" },
      { label: "Objetivo / Propósito",  type: "textarea", placeholder: "¿Qué aspecto del sistema valida este caso de prueba?", tip: "Relaciona el caso con un requisito o historia de usuario específica." },
      { label: "Precondiciones",        type: "textarea", placeholder: "Estado del sistema que debe existir ANTES de ejecutar la prueba", tip: "Ej: 'El usuario admin@test.com debe existir en la base de datos con estado Activo'" },
      { label: "Datos de entrada",      type: "textarea", placeholder: "Todos los datos necesarios para ejecutar la prueba", tip: "Sé específico: usuario='admin@test.com', contraseña='Test@1234', rol='Admin'" },
      { label: "Pasos de ejecución",    type: "textarea", placeholder: "1. Navegar a...\n2. Ingresar en el campo Usuario...\n3. Ingresar en el campo Contraseña...\n4. Hacer click en Iniciar Sesión\n5. Verificar...", tip: "Cada paso debe ser atómico y ejecutable sin ambigüedad." },
      { label: "Resultado esperado",    type: "textarea", placeholder: "Estado final del sistema si la prueba pasa", tip: "Debe ser verificable y específico: '¿Aparece el elemento X? ¿Cambia el URL a /dashboard?'" },
      { label: "Criterio de éxito / fallo", type: "textarea", placeholder: "¿Cómo determines si el caso pasó o falló?", tip: "Ej: PASA si el usuario ve el dashboard en < 3 segundos. FALLA si aparece mensaje de error o redirección incorrecta." },
      { label: "Nivel de prueba",       type: "select",   options: ["Componente (Unitaria)", "Integración de Componentes", "Sistema", "Aceptación (UAT)"], tip: "¿En qué nivel del ciclo de vida se ejecuta este caso?" },
      { label: "Tipo de prueba",        type: "select",   options: ["Funcional", "No funcional — Rendimiento", "No funcional — Seguridad", "No funcional — Usabilidad", "Regresión", "Humo (Smoke)"], tip: "¿Qué atributo de calidad valida este caso?" },
      { label: "Prioridad",             type: "select",   options: ["Alta — crítico para el negocio", "Media — funcionalidad importante", "Baja — escenario alternativo o edge case"], tip: "Define el orden de ejecución cuando hay restricciones de tiempo." },
      { label: "Autor / Fecha",         type: "text",     placeholder: "Juan QA | 2025-06-03", tip: "Para trazabilidad y auditoría del caso de prueba." }
    ],
    example: {
      title: "Ejemplo completado — Sistema bancario online",
      fields: {
        "ID del Caso": "AU-012",
        "Título": "Login fallido con contraseña incorrecta bloquea la cuenta tras 3 intentos",
        "Objetivo / Propósito": "Verificar que el mecanismo de seguridad bloquea temporalmente una cuenta cuando se ingresan 3 contraseñas incorrectas consecutivas, previniendo ataques de fuerza bruta.",
        "Precondiciones": "1. El usuario juan@banco.com existe en la BD con estado 'Activo'\n2. El contador de intentos fallidos del usuario está en 0\n3. El entorno de prueba está operativo (staging.banco.com)\n4. La aplicación está en versión 3.1.2",
        "Datos de entrada": "Usuario: juan@banco.com\nContraseña incorrecta: 'claveErronea123' (3 veces)\nContraseña correcta (para verificar bloqueo): 'ClaveCorrecta@456'",
        "Pasos de ejecución": "1. Navegar a staging.banco.com/login\n2. Ingresar 'juan@banco.com' en campo Usuario\n3. Ingresar 'claveErronea123' en campo Contraseña\n4. Hacer click en 'Iniciar Sesión' → verificar mensaje de error\n5. Repetir pasos 3-4 una segunda vez\n6. Repetir pasos 3-4 una tercera vez\n7. Intentar login con la contraseña CORRECTA 'ClaveCorrecta@456'\n8. Verificar estado de la cuenta en panel de administración",
        "Resultado esperado": "Tras el 3er intento fallido:\n• El sistema muestra: 'Tu cuenta ha sido bloqueada por 15 minutos por seguridad'\n• El intento con contraseña correcta también es rechazado (cuenta bloqueada)\n• El panel admin muestra la cuenta con estado 'Bloqueada temporalmente'\n• Se envía email de alerta a juan@banco.com",
        "Criterio de éxito / fallo": "PASA: Los 4 criterios del resultado esperado se cumplen\nFALLA: Si el sistema permite el acceso con contraseña correcta después de 3 intentos fallidos, o si no muestra el mensaje de bloqueo, o si el email no se envía",
        "Nivel de prueba": "Sistema",
        "Tipo de prueba": "No funcional — Seguridad",
        "Prioridad": "Alta — crítico para el negocio",
        "Autor / Fecha": "María QA Senior | 2025-06-03"
      }
    }
  },

  {
    id: "test-charter",
    title: "Carta de Prueba Exploratoria",
    icon: "🔍",
    color: "#8b5cf6",
    description: "Documenta el objetivo y alcance de una sesión de prueba exploratoria. Guía al probador sin restringir su creatividad.",
    tags: ["Exploratoria", "Ágil", "Técnicas ISTQB"],
    fields: [
      { label: "ID de la Carta",        type: "text",     placeholder: "TC-EXP-001", tip: "Identificador para rastrear las sesiones de prueba exploratoria." },
      { label: "Objetivo de la sesión", type: "textarea", placeholder: "¿Qué aspecto del sistema quieres explorar y aprender?", tip: "Empieza con 'Explorar...' o 'Investigar...'. No limites los resultados esperados." },
      { label: "Área de enfoque",       type: "text",     placeholder: "Módulo o funcionalidad específica", tip: "Delimita el alcance sin ser demasiado restrictivo. Ej: 'Flujo de registro de nuevo usuario'" },
      { label: "Entorno / Configuración", type: "text",   placeholder: "Dispositivo, SO, browser, versión, red, datos específicos", tip: "Especifica condiciones especiales si las hay (modo offline, usuario sin permisos, datos inusuales)." },
      { label: "Duración",              type: "text",     placeholder: "45 minutos", tip: "Sesiones de 45-90 min son óptimas. Más tiempo reduce la concentración." },
      { label: "Ideas de prueba iniciales", type: "textarea", placeholder: "Lista de áreas o escenarios que quieres explorar al inicio de la sesión", tip: "No es exhaustivo. Son pistas de partida, no una lista cerrada." },
      { label: "Hallazgos y notas de sesión", type: "textarea", placeholder: "Completa DURANTE la sesión: qué exploraste, qué encontraste, qué fue sorprendente", tip: "Escribe en tiempo real. Incluye comportamientos inesperados aunque no sean bugs formales." },
      { label: "Defectos encontrados",  type: "textarea", placeholder: "Lista de IDs de defectos reportados durante la sesión", tip: "Referencia los IDs de los bugs que abriste en Jira u otra herramienta." },
      { label: "Métricas de la sesión", type: "text",     placeholder: "Tiempo: 45min | Área cubierta: 70% | Bugs: 3 (1 alto, 2 bajo)", tip: "Para medir la efectividad de tus sesiones exploratorias a lo largo del tiempo." },
      { label: "Áreas para explorar más", type: "textarea", placeholder: "¿Qué quedó pendiente? ¿Qué preguntas nuevas surgieron?", tip: "Las mejores preguntas nacen durante la exploración. Documenta para futuras sesiones." }
    ],
    example: {
      title: "Ejemplo completado — App de delivery de comida",
      fields: {
        "ID de la Carta": "TC-EXP-008",
        "Objetivo de la sesión": "Explorar el comportamiento del flujo de pedido cuando hay condiciones inesperadas: restaurante cerrado, producto agotado, dirección fuera de zona de cobertura y conexión intermitente.",
        "Área de enfoque": "Flujo de realización de pedido (desde selección de restaurante hasta confirmación)",
        "Entorno / Configuración": "iPhone 14, iOS 17.4, App v2.1.0 | Red: simular 3G con throttling | Usuario: cliente_test@mail.com (sin pedidos previos) | Hora: simular las 23:45 (cerca del horario de cierre de restaurantes)",
        "Duración": "60 minutos",
        "Ideas de prueba iniciales": "• ¿Qué pasa si agrego un producto y el restaurante cierra mientras tengo el carrito abierto?\n• ¿Puedo hacer un pedido a una dirección en otra ciudad?\n• ¿Qué ocurre si la app pierde conexión durante la confirmación del pago?\n• ¿Puedo agregar más de 99 unidades del mismo producto?\n• ¿Cómo maneja el sistema un producto que se agota mientras lo estoy viendo?",
        "Hallazgos y notas de sesión": "00:05 - Al poner una dirección fuera de cobertura, el mapa carga pero el botón Confirmar no aparece (bug potencial: sin mensaje de error claro)\n00:18 - Al cambiar hora del sistema a 23:55, el restaurante 'Pizzería Roma' aparece como disponible aunque cierra a las 23:00 → BUG REPORTADO\n00:31 - Con throttling 3G, el spinner de carga se muestra indefinidamente sin timeout → BUG REPORTADO\n00:45 - Al agregar 100 unidades, la app crashea → BUG CRÍTICO REPORTADO\n00:55 - El campo de instrucciones especiales acepta hasta 500 caracteres pero la pantalla del repartidor solo muestra 50 → inconsistencia",
        "Defectos encontrados": "BUG-389: Restaurante cerrado aparece disponible (Severidad: Alta)\nBUG-390: Spinner infinito sin timeout en conexión lenta (Severidad: Media)\nBUG-391: App crashea al agregar 100+ unidades de un producto (Severidad: Crítica)\nNOTA-12: Inconsistencia en longitud de instrucciones especiales (pendiente definir como bug)",
        "Métricas de la sesión": "Tiempo real: 60min | Área cubierta: ~65% del flujo | Bugs encontrados: 3 (1 crítico, 1 alto, 1 medio) | 1 nota pendiente de decisión",
        "Áreas para explorar más": "• ¿Qué pasa si el repartidor cancela el pedido a mitad del camino?\n• ¿Cómo maneja pedidos con múltiples restaurantes (si la app lo permite)?\n• ¿El historial de pedidos se corrompe tras el crash de 100+ unidades?\n• Probar el flujo completo con usuario sin tarjeta guardada"
      }
    }
  },

  {
    id: "test-plan",
    title: "Plan de Prueba",
    icon: "📊",
    color: "#10b981",
    description: "Documento estratégico que define objetivos, alcance, enfoque, recursos y calendario de las actividades de prueba para un proyecto.",
    tags: ["ISTQB", "Gestión", "Planificación"],
    fields: [
      { label: "Proyecto / Sistema",    type: "text",     placeholder: "Nombre del sistema bajo prueba y versión", tip: "Identifica claramente qué sistema y versión se va a probar." },
      { label: "Alcance — Qué se prueba", type: "textarea", placeholder: "Funcionalidades y módulos incluidos en este ciclo de pruebas", tip: "Sé explícito sobre qué está IN SCOPE para evitar malentendidos con stakeholders." },
      { label: "Fuera de alcance",      type: "textarea", placeholder: "Qué NO se va a probar en este ciclo (y por qué)", tip: "Documentar explícitamente qué excluyes es tan importante como documentar qué incluyes." },
      { label: "Objetivos de prueba",   type: "textarea", placeholder: "¿Qué quieres demostrar o verificar con estas pruebas?", tip: "Ej: 'Verificar que los 15 requisitos del módulo de pagos se cumplen al 100%'" },
      { label: "Niveles y tipos de prueba", type: "textarea", placeholder: "¿Qué niveles (componente, sistema, UAT) y tipos (funcional, rendimiento) se ejecutarán?", tip: "Relaciona cada nivel con su responsable y herramienta." },
      { label: "Técnicas de diseño",    type: "textarea", placeholder: "Técnicas que usarás para diseñar los casos de prueba", tip: "Ej: PE y AVL para campos numéricos, Tablas de decisión para reglas de negocio complejas" },
      { label: "Entorno de prueba",     type: "textarea", placeholder: "Descripción del entorno: servidores, browsers, datos, herramientas", tip: "Especifica si usarás mocks, entorno staging, datos anonimizados de producción, etc." },
      { label: "Criterios de entrada",  type: "textarea", placeholder: "Condiciones que deben cumplirse para COMENZAR las pruebas", tip: "Sin estos criterios, no se inicia la ejecución. Son la Definition of Ready del equipo de QA." },
      { label: "Criterios de salida",   type: "textarea", placeholder: "Condiciones que deben cumplirse para DAR POR TERMINADAS las pruebas", tip: "Son la Definition of Done para el ciclo de pruebas." },
      { label: "Recursos y roles",      type: "textarea", placeholder: "Quién hace qué: QA Lead, QA Senior, QA Junior, Automatizador", tip: "Asigna responsabilidades claras para evitar brechas en la cobertura." },
      { label: "Calendario",            type: "textarea", placeholder: "Fases y fechas: diseño, preparación de entorno, ejecución, informe", tip: "Incluye hitos críticos y dependencias con otros equipos (dev, infra, cliente)." },
      { label: "Riesgos y mitigaciones",type: "textarea", placeholder: "Riesgos identificados y cómo se mitigarán", tip: "Distingue riesgos de producto (bugs graves) de riesgos de proyecto (tiempo, recursos)." }
    ],
    example: {
      title: "Ejemplo completado — App móvil de transporte",
      fields: {
        "Proyecto / Sistema": "RideApp Mobile — Versión 4.0.0 | Sprint 23 | Release: 15 de julio 2025",
        "Alcance — Qué se prueba": "✓ Módulo de autenticación (registro, login, recuperación de contraseña)\n✓ Módulo de solicitud de viaje (mapa, selección destino, tipos de vehículo)\n✓ Módulo de pagos (tarjeta, wallet, efectivo)\n✓ Módulo de calificaciones (conductor y pasajero)\n✓ Notificaciones push (estado del viaje)",
        "Fuera de alcance": "✗ Panel de administración web (prueba separada en Sprint 24)\n✗ Integración con terceros: Waze API y Google Maps (cubierta en Sprint 22)\n✗ Pruebas de carga (programadas para Sprint 25 con JMeter)\n✗ Dispositivos iOS < 15 (soporte discontinuado en esta versión)",
        "Objetivos de prueba": "1. Verificar que los 47 requisitos funcionales del Sprint 23 se cumplen al 100%\n2. Validar que el flujo completo de viaje (solicitar → pagar → calificar) funciona en Android e iOS\n3. Verificar que el módulo de pagos cumple el estándar PCI DSS nivel 2\n4. Asegurar que no hay regresiones en el módulo de autenticación (estable desde Sprint 18)",
        "Niveles y tipos de prueba": "Componente: desarrolladores (JUnit/XCTest) antes del merge\nIntegración: QA — interfaces entre módulos de viaje y pagos\nSistema Funcional: QA — flujos end-to-end en Android 14 / iOS 17\nSistema No Funcional: QA — rendimiento básico (tiempo de respuesta del mapa < 2s)\nAceptación: Product Owner + 5 usuarios beta seleccionados",
        "Técnicas de diseño": "• Partición de Equivalencia + AVL: validaciones de formularios (monto de pago, campos de texto)\n• Tablas de Decisión: reglas de descuentos y promociones\n• Transición de Estados: flujo de estados del viaje (Solicitado→Asignado→EnCamino→Completado→Cancelado)\n• Prueba Exploratoria: flujo de pago en condiciones de red inestable",
        "Entorno de prueba": "Dispositivos: Samsung Galaxy S24 (Android 14) + iPhone 15 (iOS 17.4)\nBackend: staging-api.rideapp.com (espejo de producción con datos anonimizados)\nPasarela de pago: Sandbox de Stripe (tarjetas de prueba)\nHerramientas: TestRail (gestión), Jira (defectos), Charles Proxy (interceptar tráfico), BrowserStack (dispositivos adicionales)",
        "Criterios de entrada": "✓ Build 4.0.0-RC1 desplegado en TestFlight (iOS) y Google Play Internal (Android)\n✓ Smoke test de 15 casos críticos: PASSED\n✓ Ambiente staging operativo (uptime > 99% últimas 24h)\n✓ Datos de prueba cargados: 20 conductores ficticios, 10 rutas predefinidas\n✓ Casos de prueba diseñados y revisados por QA Lead",
        "Criterios de salida": "✓ ≥ 95% de los 180 casos de prueba ejecutados\n✓ 100% de defectos críticos y altos resueltos y verificados\n✓ Defectos medios abiertos ≤ 8 (documentados y aceptados por PO)\n✓ UAT aprobada por Product Owner\n✓ Informe de prueba entregado y firmado",
        "Recursos y roles": "QA Lead (Ana): planificación, revisión, métricas, informe final\nQA Senior (Carlos): casos de prueba de pagos y seguridad (40 casos)\nQA Mid (Laura): casos de autenticación y calificaciones (60 casos)\nQA Junior (Miguel): casos de notificaciones y casos de regresión (80 casos)\nAutomatizador (externo): 30 casos de regresión críticos en Appium",
        "Calendario": "03 Jun: Revisión de criterios de entrada\n04–06 Jun: Diseño y revisión de casos de prueba\n07 Jun: Preparación del entorno y datos de prueba\n08–19 Jun: Ejecución de pruebas (2 semanas)\n20–21 Jun: UAT con Product Owner y beta users\n22 Jun: Re-prueba de defectos corregidos\n23 Jun: Informe final y aprobación para release\n15 Jul: Release a producción",
        "Riesgos y mitigaciones": "🔴 Riesgo ALTO: la API de pagos Stripe puede tener cambios de última hora → Mitigación: confirmar compatibilidad con el equipo de backend el 05 Jun\n🟡 Riesgo MEDIO: el QA Senior tiene vacaciones la semana del 14 Jun → Mitigación: adelantar las pruebas de pagos a la primera semana\n🟡 Riesgo MEDIO: el ambiente staging puede ser inestable → Mitigación: coordinar ventana exclusiva de pruebas con el equipo de infraestructura"
      }
    }
  }
];

// ============================================================
// BANCO DE 40 PREGUNTAS PARA SIMULACRO ISTQB
// ============================================================
const EXAM_QUESTIONS = [
  // Capítulo 1 - Fundamentos
  {
    question: "¿Cuál de los siguientes es un objetivo de las pruebas según ISTQB?",
    options: ["Probar que el software no tiene defectos", "Proporcionar información a los implicados para decisiones informadas", "Garantizar que todas las pruebas son exitosas", "Reemplazar la depuración del código"],
    answer: 1, chapter: 1
  },
  {
    question: "Un probador ejecuta el software con datos de entrada y observa si el comportamiento coincide con el esperado. Esto es un ejemplo de:",
    options: ["Prueba estática", "Prueba dinámica", "Análisis estático", "Revisión de código"],
    answer: 1, chapter: 1
  },
  {
    question: "Según el Principio 4 (agrupación de defectos), ¿qué implica para la planificación de pruebas?",
    options: ["Distribuir las pruebas equitativamente entre todos los módulos", "Concentrar mayor esfuerzo en los módulos con mayor historial de defectos", "Probar primero los módulos de menor riesgo", "Usar únicamente pruebas automatizadas en módulos complejos"],
    answer: 1, chapter: 1
  },
  {
    question: "¿En qué se diferencia un error de un defecto?",
    options: ["No hay diferencia; son términos intercambiables", "El error es la acción humana; el defecto es la imperfección resultante en el producto", "El defecto es la acción humana; el error es el fallo en el sistema", "El error lo detecta el probador; el defecto lo detecta el desarrollador"],
    answer: 1, chapter: 1
  },
  {
    question: "¿Cuál de los siguientes principios apoya la práctica del 'shift left' en las pruebas?",
    options: ["Principio 1: Las pruebas muestran presencia de defectos", "Principio 3: Las pruebas tempranas ahorran tiempo y dinero", "Principio 5: La paradoja del pesticida", "Principio 7: La falacia de la ausencia de errores"],
    answer: 1, chapter: 1
  },
  {
    question: "¿Cuál de las siguientes actividades pertenece al proceso de 'Diseño de la Prueba'?",
    options: ["Definir los objetivos de prueba y el enfoque", "Elaborar los casos de prueba y datos de prueba", "Ejecutar los casos de prueba y registrar resultados", "Archivar los productos de trabajo al finalizar"],
    answer: 1, chapter: 1
  },
  {
    question: "Un sistema de control de vuelo supera todas las pruebas funcionales. Sin embargo, los pilotos indican que la interfaz no es intuitiva en situaciones de emergencia. ¿Qué principio aplica?",
    options: ["Principio 1: Las pruebas muestran presencia de defectos", "Principio 4: Agrupación de defectos", "Principio 7: La falacia de la ausencia de errores", "Principio 5: La paradoja del pesticida"],
    answer: 2, chapter: 1
  },
  // Capítulo 2 - SDLC
  {
    question: "¿Cuál de los niveles de prueba se realiza para verificar la comunicación entre módulos integrados?",
    options: ["Prueba de componente", "Prueba de integración", "Prueba de sistema", "Prueba de aceptación"],
    answer: 1, chapter: 2
  },
  {
    question: "En el Modelo en V, ¿cuándo se diseñan los casos de prueba de sistema?",
    options: ["Únicamente durante la fase de ejecución de pruebas", "Al mismo tiempo que se desarrolla el diseño del sistema", "Después de que el sistema completo esté codificado", "Durante la prueba de aceptación"],
    answer: 1, chapter: 2
  },
  {
    question: "¿Qué tipo de prueba verifica específicamente que una corrección de defecto no ha introducido nuevos defectos en partes no modificadas?",
    options: ["Prueba de confirmación", "Prueba de regresión", "Prueba de integración", "Prueba de humo (smoke test)"],
    answer: 1, chapter: 2
  },
  {
    question: "Un cliente usa el software en su entorno real durante 30 días antes del lanzamiento oficial, sin supervisión del equipo de desarrollo. ¿Qué tipo de prueba es esta?",
    options: ["Prueba alfa", "Prueba de aceptación operativa", "Prueba beta", "Prueba de sistema"],
    answer: 2, chapter: 2
  },
  {
    question: "Las pruebas no funcionales incluyen:",
    options: ["Verificar que el login acepta credenciales válidas", "Medir el tiempo de respuesta bajo 1000 usuarios concurrentes", "Comprobar que el carrito de compras calcula el total correctamente", "Validar que el formulario de registro acepta nombres con caracteres especiales"],
    answer: 1, chapter: 2
  },
  {
    question: "¿Cuál de los cuadrantes de prueba ágil (Marick) corresponde a las pruebas exploratorias y de usabilidad?",
    options: ["Q1 - Soporte al equipo / Tecnología", "Q2 - Soporte al equipo / Negocio", "Q3 - Crítica al producto / Negocio", "Q4 - Crítica al producto / Tecnología"],
    answer: 2, chapter: 2
  },
  // Capítulo 3 - Prueba Estática
  {
    question: "¿Cuál de los siguientes es un ejemplo de prueba estática?",
    options: ["Ejecutar pruebas de regresión automatizadas", "Revisar un documento de requisitos buscando ambigüedades", "Medir el tiempo de respuesta de la aplicación", "Realizar pruebas de usabilidad con usuarios reales"],
    answer: 1, chapter: 3
  },
  {
    question: "¿Qué distingue a una inspección de una revisión técnica?",
    options: ["La inspección es menos formal que la revisión técnica", "La inspección tiene un moderador certificado y recopila métricas formalmente", "La revisión técnica tiene criterios de entrada y salida; la inspección no", "No hay diferencia; son tipos equivalentes de revisión"],
    answer: 1, chapter: 3
  },
  {
    question: "¿Qué tipo de defecto es más probable detectar mediante análisis estático con herramientas?",
    options: ["Requisitos contradictorios entre documentos", "Variables declaradas pero nunca usadas en el código", "Tiempo de respuesta superior al umbral bajo carga", "Mensajes de error que confunden al usuario"],
    answer: 1, chapter: 3
  },
  {
    question: "En una revisión guiada (walkthrough), ¿quién tiene el rol principal?",
    options: ["El moderador independiente", "El autor del producto de trabajo", "El jefe de prueba", "Un experto externo"],
    answer: 1, chapter: 3
  },
  // Capítulo 4 - Técnicas
  {
    question: "Un campo acepta contraseñas de 8 a 20 caracteres. Usando partición de equivalencia, ¿cuántas particiones se identifican?",
    options: ["1", "2", "3", "4"],
    answer: 2, chapter: 4
  },
  {
    question: "Para un campo que acepta valores entre 10 y 50, usando AVL de 2 valores, ¿cuáles son los valores de prueba para los límites?",
    options: ["10 y 50", "9, 10, 50 y 51", "10, 11, 49 y 50", "9 y 51"],
    answer: 1, chapter: 4
  },
  {
    question: "Un sistema de descuentos aplica 10% si la compra es mayor a $100 Y el cliente es VIP, o 5% si la compra supera $100 pero el cliente NO es VIP. ¿Qué técnica es más adecuada para diseñar casos de prueba exhaustivos?",
    options: ["Partición de equivalencia", "Análisis de valores límite", "Tabla de decisión", "Prueba de transición de estados"],
    answer: 2, chapter: 4
  },
  {
    question: "Un probador quiere garantizar que todos los posibles resultados de cada condición IF en el código han sido evaluados como verdadero y falso. ¿Qué nivel de cobertura busca?",
    options: ["Cobertura de sentencias", "Cobertura de decisiones", "Cobertura de condiciones múltiples", "Cobertura de ramas modificadas"],
    answer: 1, chapter: 4
  },
  {
    question: "La técnica de prueba de transición de estados es más adecuada para probar:",
    options: ["Un formulario con múltiples campos de entrada independientes", "Un sistema de control de semáforos que responde a eventos externos", "El rendimiento de la base de datos bajo carga", "La compatibilidad entre distintos navegadores"],
    answer: 1, chapter: 4
  },
  {
    question: "¿Cuántos casos de prueba se necesitan como mínimo para lograr el 100% de cobertura de transiciones en un diagrama con 3 estados y 4 transiciones válidas?",
    options: ["3 (uno por estado)", "4 (uno por transición)", "7 (estados + transiciones)", "2 (uno por estado inicial y final)"],
    answer: 1, chapter: 4
  },
  {
    question: "Un probador usa su intuición y experiencia para identificar áreas propensas a defectos y diseña pruebas adicionales sin documentación previa. Esto se llama:",
    options: ["Prueba exploratoria", "Adivinación de errores (error guessing)", "Prueba basada en listas de comprobación", "Análisis de causa raíz"],
    answer: 1, chapter: 4
  },
  // Capítulo 5 - Gestión
  {
    question: "¿Cuál es la principal ventaja de contar con un equipo de prueba independiente del equipo de desarrollo?",
    options: ["Los probadores independientes son siempre más rápidos", "Mayor capacidad para encontrar defectos al tener una perspectiva diferente del autor", "Eliminan la necesidad de que los desarrolladores realicen pruebas unitarias", "Reducen el costo total del proyecto"],
    answer: 1, chapter: 5
  },
  {
    question: "¿Cuál de los siguientes es responsabilidad del Jefe de Prueba?",
    options: ["Diseñar casos de prueba individuales", "Ejecutar los casos de prueba y registrar resultados", "Planificar las pruebas y gestionar los riesgos del proceso de prueba", "Desarrollar scripts de automatización de pruebas"],
    answer: 2, chapter: 5
  },
  {
    question: "Un defecto cosmético (error de ortografía en la pantalla de inicio) recibe Prioridad Alta porque el CEO verá una demo mañana. Su Severidad es Baja. ¿Esto contradice los principios ISTQB?",
    options: ["Sí; la prioridad siempre debe corresponder con la severidad", "No; severidad y prioridad son dimensiones independientes asignadas por diferentes roles", "Sí; los defectos cosméticos no deben tener prioridad alta", "No; la prioridad la asigna el jefe de prueba según la severidad técnica"],
    answer: 1, chapter: 5
  },
  {
    question: "¿Cuál de las siguientes métricas indica mejor la efectividad del proceso de prueba?",
    options: ["Número total de casos de prueba diseñados", "Porcentaje de defectos encontrados en pruebas vs encontrados en producción", "Velocidad de ejecución de las pruebas en minutos", "Número de probadores en el equipo"],
    answer: 1, chapter: 5
  },
  {
    question: "La prueba basada en riesgo implica que las áreas del sistema con mayor riesgo de producto reciben:",
    options: ["Menos pruebas para ahorrar recursos", "Más atención y esfuerzo de prueba", "Únicamente pruebas automatizadas", "Pruebas únicamente funcionales"],
    answer: 1, chapter: 5
  },
  {
    question: "¿Cuál de los siguientes NO forma parte típicamente de un Plan de Prueba?",
    options: ["Objetivos y alcance de las pruebas", "Código fuente del sistema bajo prueba", "Criterios de entrada y salida", "Calendario y estimaciones de esfuerzo"],
    answer: 1, chapter: 5
  },
  {
    question: "¿Cuál es la diferencia entre riesgo de producto y riesgo de proyecto?",
    options: ["El riesgo de producto es siempre más grave que el de proyecto", "El riesgo de producto se refiere a la posibilidad de fallo del sistema; el de proyecto a factores que afectan la gestión del mismo", "El riesgo de proyecto solo lo gestiona el jefe de proyecto, no el jefe de prueba", "No hay diferencia práctica entre ellos"],
    answer: 1, chapter: 5
  },
  // Capítulo 6 - Herramientas
  {
    question: "¿Cuál es el principal beneficio de la automatización de pruebas para las pruebas de regresión?",
    options: ["Elimina la necesidad de probadores humanos", "Permite ejecutar pruebas repetitivas de forma más rápida y consistente", "Garantiza el 100% de cobertura de código automáticamente", "Reduce la necesidad de mantener los casos de prueba actualizados"],
    answer: 1, chapter: 6
  },
  {
    question: "Una herramienta como SonarQube que analiza el código en busca de vulnerabilidades sin ejecutarlo es un ejemplo de:",
    options: ["Herramienta de gestión de prueba", "Herramienta de análisis estático", "Framework de automatización de pruebas dinámicas", "Herramienta de prueba de rendimiento"],
    answer: 1, chapter: 6
  },
  {
    question: "¿Por qué ISTQB recomienda realizar un proyecto piloto antes de implementar una herramienta de automatización?",
    options: ["Para justificar el presupuesto ante la dirección", "Para evaluar la herramienta en el contexto real y detectar problemas antes del compromiso total", "Porque las herramientas de automatización siempre fallan en el primer intento", "Para que los probadores aprendan a usarla sin presión"],
    answer: 1, chapter: 6
  },
  {
    question: "¿Cuál de los siguientes es un riesgo real de automatizar pruebas?",
    options: ["Las pruebas automatizadas siempre encuentran más defectos que las manuales", "Expectativas poco realistas sobre el retorno de inversión de la automatización", "Las herramientas de automatización son demasiado caras para PYMES", "La automatización solo funciona con sistemas web"],
    answer: 1, chapter: 6
  },
  // Preguntas mixtas de integración
  {
    question: "¿Cuál de las siguientes afirmaciones sobre las pruebas en un modelo ágil es CORRECTA?",
    options: ["Las pruebas solo ocurren al final de cada sprint", "La prueba es continua y forma parte integral de cada sprint", "En ágil no se necesitan criterios de entrada ni de salida", "Los probadores no participan en la planificación del sprint"],
    answer: 1, chapter: 2
  },
  {
    question: "Un equipo de QA descubre que el módulo de reportes tiene el 60% de todos los defectos del sistema, aunque representa el 15% del código. ¿Qué acción es más apropiada según los principios ISTQB?",
    options: ["Distribuir las pruebas equitativamente en todos los módulos", "Concentrar mayor esfuerzo de prueba en el módulo de reportes (agrupación de defectos)", "Eliminar el módulo de reportes y reescribirlo completamente", "Reducir las pruebas en el módulo de reportes ya que ya se encontraron los defectos"],
    answer: 1, chapter: 1
  },
  {
    question: "Un probador diseña casos de prueba para un campo numérico usando partición de equivalencia Y análisis de valores límite. ¿Por qué combinar ambas técnicas?",
    options: ["Para reducir el número total de casos de prueba", "Para lograr mayor cobertura: PE cubre el interior de particiones; AVL cubre los bordes donde más ocurren defectos", "Porque ISTQB exige usar siempre ambas técnicas juntas", "Porque la PE por sí sola no puede aplicarse a campos numéricos"],
    answer: 1, chapter: 4
  },
  {
    question: "Un sistema ha pasado todas las pruebas de carga y rendimiento (Q4), pero los usuarios en pruebas beta reportan que el flujo de compra es confuso. ¿En qué cuadrante debería reforzarse la prueba?",
    options: ["Q1 - Soporte al equipo / Tecnología", "Q2 - Soporte al equipo / Negocio", "Q3 - Crítica al producto / Negocio", "Q4 - Crítica al producto / Tecnología"],
    answer: 2, chapter: 2
  },
  {
    question: "El examen ISTQB Foundation Level tiene:",
    options: ["50 preguntas, 75% para aprobar", "40 preguntas, 65% para aprobar (26/40)", "30 preguntas, 70% para aprobar", "40 preguntas, 70% para aprobar (28/40)"],
    answer: 1, chapter: 1
  }
];
