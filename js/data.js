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

// ============================================================
// ENGLISH CONTENT — parallel arrays (same index = same item)
// ============================================================

const CH_EN = [
  {
    id: 1,
    title: "Fundamentals of Testing",
    description: "What testing is, why it is necessary, the 7 principles and the test process.",
    sections: [
      {
        title: "What is Testing?",
        content: `<p>Software testing is much more than simply running tests. It includes a wide range of activities and must be aligned with the software development lifecycle.</p>
        <h4>Typical testing objectives:</h4>
        <ul>
          <li>Evaluate work products (requirements, user stories, designs and code)</li>
          <li>Trigger failures and find defects</li>
          <li>Ensure required coverage of the test object</li>
          <li>Reduce the level of risk of insufficient software quality</li>
          <li>Verify whether specified requirements have been fulfilled</li>
          <li>Verify that the test object complies with contractual, legal and regulatory requirements</li>
          <li>Provide information to stakeholders so they can make informed decisions</li>
          <li>Build confidence in the quality of the test object</li>
          <li>Validate whether the test object is complete and works as expected</li>
        </ul>
        <div class="info-box">
          <strong>💡 Testing vs Debugging:</strong> Testing consists of <em>finding</em> failures. Debugging is the process of <em>finding, analysing and fixing</em> the causes of failures. Debugging is a developer activity; testing can be performed by a tester or a developer.
        </div>`
      },
      {
        title: "Why is Testing Necessary?",
        content: `<p>Testing is a form of quality control that contributes to achieving the agreed objectives within the scope, time, quality and budget constraints established for the project.</p>
        <h4>Error → Defect → Failure</h4>
        <div class="concept-chain">
          <div class="concept-item">
            <span class="concept-icon">👤</span>
            <strong>Error (Mistake)</strong>
            <p>A human action that produces an incorrect result. Errors can occur due to time pressure, code complexity, misunderstanding of requirements, etc.</p>
          </div>
          <div class="concept-arrow">→</div>
          <div class="concept-item">
            <span class="concept-icon">🐛</span>
            <strong>Defect (Bug)</strong>
            <p>An imperfection or deficiency in a work product. A human error produces a defect in the code, design or document.</p>
          </div>
          <div class="concept-arrow">→</div>
          <div class="concept-item">
            <span class="concept-icon">💥</span>
            <strong>Failure</strong>
            <p>Runtime manifestation of a defect. Not all defects cause failures (unexecuted code, unreached condition).</p>
          </div>
        </div>
        <h4>Root Cause vs Effect</h4>
        <p>The <strong>root cause</strong> is the fundamental reason why an error occurred. Identifying the root cause allows organisations to implement process actions that reduce the frequency of future errors.</p>
        <div class="example-box">
          <strong>Example:</strong> A developer misinterprets a requirement (error) → writes incorrect code (defect) → the system calculates the price incorrectly (failure) → the customer loses money (effect). The root cause may be ambiguous requirements.
        </div>`
      },
      {
        title: "The 7 Principles of Testing",
        content: `<p>These principles are the foundation of professional testing knowledge and have been agreed upon over the years in the testing industry.</p>
        <div class="principles-grid">
          <div class="principle-card">
            <span class="principle-num">1</span>
            <h4>Testing shows the presence of defects</h4>
            <p>Testing can show that defects exist, but <strong>cannot prove there are no defects</strong>. Even if no defects are found, it does not mean the system is perfect.</p>
          </div>
          <div class="principle-card">
            <span class="principle-num">2</span>
            <h4>Exhaustive testing is impossible</h4>
            <p>Testing all combinations of inputs, preconditions and paths is not feasible (except in trivial cases). Instead, risk analysis, testing techniques and priorities are used.</p>
          </div>
          <div class="principle-card">
            <span class="principle-num">3</span>
            <h4>Early testing saves time and money</h4>
            <p>Finding and fixing defects earlier reduces costs. Testing activities should start as early as possible in the SDLC (<em>shift left</em>).</p>
          </div>
          <div class="principle-card">
            <span class="principle-num">4</span>
            <h4>Defect clustering</h4>
            <p>A small number of modules typically contains most of the defects (80/20 rule). These "hot spots" help focus testing efforts and risk analysis.</p>
          </div>
          <div class="principle-card">
            <span class="principle-num">5</span>
            <h4>The pesticide paradox</h4>
            <p>If the same test suites are executed repeatedly, they will eventually stop finding new defects. Tests must be reviewed and updated regularly.</p>
          </div>
          <div class="principle-card">
            <span class="principle-num">6</span>
            <h4>Testing is context dependent</h4>
            <p>Testing is performed differently depending on context. For example, safety-critical aerospace software is tested differently from an e-commerce app.</p>
          </div>
          <div class="principle-card">
            <span class="principle-num">7</span>
            <h4>Absence-of-errors fallacy</h4>
            <p>Finding and fixing defects is pointless if the system does not meet the needs and expectations of users. Verification is not the same as validation.</p>
          </div>
        </div>`
      },
      {
        title: "The Test Process",
        content: `<p>The test process is not a rigid sequence but a set of activities that may overlap or be executed iteratively.</p>
        <div class="process-flow">
          <div class="process-step">
            <div class="step-header">📋 Planning</div>
            <p>Defines testing objectives, strategy, resources and schedule. Produces the <strong>Test Plan</strong>.</p>
          </div>
          <div class="process-step">
            <div class="step-header">🔍 Monitoring and Control</div>
            <p>Tracks actual progress against the plan. Takes corrective actions if necessary. Produces <strong>progress reports</strong>.</p>
          </div>
          <div class="process-step">
            <div class="step-header">🧩 Analysis</div>
            <p>Examines the test basis and defines <strong>test conditions</strong>. Answers "what to test?"</p>
          </div>
          <div class="process-step">
            <div class="step-header">✏️ Design</div>
            <p>Elaborates <strong>test cases</strong> and test data. Answers "how to test?"</p>
          </div>
          <div class="process-step">
            <div class="step-header">⚙️ Implementation</div>
            <p>Organises test cases into <strong>test procedures</strong> and test suites. Prepares the environment.</p>
          </div>
          <div class="process-step">
            <div class="step-header">▶️ Execution</div>
            <p>Executes tests, records results, compares actual vs expected results, reports defects.</p>
          </div>
          <div class="process-step">
            <div class="step-header">✅ Completion</div>
            <p>Verifies exit criteria, archives work products, produces the <strong>test completion report</strong>.</p>
          </div>
        </div>
        <h4>Testing Psychology</h4>
        <p>The tester's mindset differs from the developer's. The tester actively looks for defects with a critical perspective. Tester independence (from the code author) increases effectiveness in finding defects, but requires good communication to avoid conflicts.</p>`
      }
    ],
    quiz: [
      {
        question: "A developer makes an error when interpreting a requirement and writes incorrect code that produces an unexpected result in production. What is the correct ISTQB sequence of terms?",
        options: ["Failure → Defect → Error", "Error → Failure → Defect", "Error → Defect → Failure", "Defect → Error → Failure"],
        explanation: "According to ISTQB: an Error (human action) produces a Defect (in the code/work product), which when executed causes a Failure (unexpected behaviour in the system)."
      },
      {
        question: "Which of the following is NOT a typical testing objective according to ISTQB?",
        options: ["Finding defects", "Providing confidence in quality", "Guaranteeing the software has no defects", "Verifying compliance with requirements"],
        explanation: "Testing can demonstrate the presence of defects, but can NEVER guarantee their absence. This is ISTQB Principle 1: 'Testing shows the presence of defects, not their absence'."
      },
      {
        question: "According to the 'pesticide paradox' principle, what should a test team do when their tests stop finding new defects?",
        options: ["Conclude that the software has no more defects", "Review and update test cases regularly", "Only increase the number of test executions", "Automate all existing tests"],
        explanation: "Principle 5 (pesticide paradox) states that the same test suites executed repeatedly will eventually stop finding new defects. Test cases must be reviewed and updated periodically."
      },
      {
        question: "What is the main difference between testing and debugging?",
        options: ["Testing is done by developers; debugging by testers", "Testing finds failures; debugging finds, analyses and fixes their causes", "Testing is more expensive than debugging", "There is no difference; they are the same process"],
        explanation: "Testing aims to trigger failures and detect defects. Debugging is a development activity that locates, analyses and corrects the cause of failures found during testing."
      },
      {
        question: "Which testing principle justifies using risk analysis to prioritise testing efforts?",
        options: ["Defect clustering", "Exhaustive testing is impossible", "The pesticide paradox", "Absence-of-errors fallacy"],
        explanation: "Principle 2 states that exhaustive testing is impossible. To manage this, risk analysis, testing techniques and priorities are used to focus effort where it adds the most value."
      },
      {
        question: "A tax calculation module contains 75% of all system defects, yet represents only 20% of the code. Which ISTQB principle describes this phenomenon?",
        options: ["The pesticide paradox", "Exhaustive testing is impossible", "Defect clustering", "Testing is context dependent"],
        explanation: "Principle 4 (defect clustering) states that a small number of modules typically contains most detected defects. This guides teams to focus testing effort on those higher-risk areas."
      },
      {
        question: "A banking system passes all its functional tests successfully, but users find the interface too complex to use. Which ISTQB principle applies here?",
        options: ["The pesticide paradox", "Early testing saves time and money", "Absence-of-errors fallacy", "Defect clustering"],
        explanation: "Principle 7 (absence-of-errors fallacy) indicates that finding and fixing defects does not guarantee success if the system does not satisfy users' real needs. The software can be technically correct but useless."
      },
      {
        question: "In which test process activity are test cases elaborated and test data determined?",
        options: ["Test planning", "Test analysis", "Test design", "Test implementation"],
        explanation: "In Test Design, test cases are elaborated from the test conditions identified during Analysis. Test data is also designed. Analysis defines WHAT to test; Design defines HOW to test it."
      }
    ]
  },
  {
    id: 2,
    title: "Testing Throughout the SDLC",
    description: "Lifecycle models, test levels and types, regression testing and agile approaches.",
    sections: [
      {
        title: "Software Development Lifecycle Models",
        content: `<p>The software development lifecycle (SDLC) model determines how and when testing is performed. There is no single correct model; the choice depends on the project context.</p>
        <h4>Good testing practices for any SDLC:</h4>
        <ul>
          <li>Every development activity has a corresponding testing activity</li>
          <li>Different test levels have specific and distinct objectives</li>
          <li>Test analysis and design begin during the corresponding development activity</li>
          <li>Testers participate in reviews of development work products</li>
        </ul>
        <div class="comparison-grid">
          <div class="comparison-card">
            <h4>🌊 Waterfall Model</h4>
            <p>Test phases occur after development. Testing happens at the end, which can lead to costly late fixes. Useful for projects with very stable requirements.</p>
          </div>
          <div class="comparison-card">
            <h4>🔻 V-Model</h4>
            <p>Each development phase has a corresponding test level. Tests are planned and designed in parallel with development. Facilitates <em>shift-left</em>.</p>
          </div>
          <div class="comparison-card">
            <h4>🔁 Iterative / Agile Models</h4>
            <p>Development and testing occur in short cycles (iterations or sprints). Allow rapid feedback. Automated regression tests are essential.</p>
          </div>
        </div>`
      },
      {
        title: "Test Levels",
        content: `<p>Test levels are groups of testing activities that are organised and managed together. Each level has different objectives, test basis, test object, environment and typical personnel.</p>
        <div class="levels-table">
          <div class="level-row header-row">
            <span>Level</span><span>Test Object</span><span>Who Tests</span><span>Main Objective</span>
          </div>
          <div class="level-row">
            <span><strong>Component (Unit)</strong></span>
            <span>Individual modules, classes, functions</span>
            <span>Developers</span>
            <span>Verify behaviour of each component in isolation</span>
          </div>
          <div class="level-row">
            <span><strong>Component Integration</strong></span>
            <span>Interfaces between components</span>
            <span>Developers</span>
            <span>Verify communication and interaction between components</span>
          </div>
          <div class="level-row">
            <span><strong>System</strong></span>
            <span>The fully integrated system</span>
            <span>Independent test team</span>
            <span>Verify functional and non-functional behaviour of the complete system</span>
          </div>
          <div class="level-row">
            <span><strong>System Integration</strong></span>
            <span>Interfaces between systems</span>
            <span>Test team</span>
            <span>Verify communication between systems and external infrastructure</span>
          </div>
          <div class="level-row">
            <span><strong>Acceptance (UAT)</strong></span>
            <span>Complete system in real environment</span>
            <span>Customers, end users</span>
            <span>Validate that the system satisfies business needs</span>
          </div>
        </div>
        <div class="info-box">
          <strong>Acceptance Testing Types:</strong> User acceptance testing (UAT), Operational acceptance testing (installation, backup, recovery), Contractual and regulatory acceptance testing, Alpha testing (at the developer's site with real users), Beta testing (at the customer's site).
        </div>`
      },
      {
        title: "Test Types",
        content: `<p>Test types classify testing activities according to <strong>which quality attribute</strong> is being evaluated.</p>
        <h4>Functional Testing</h4>
        <p>Evaluates the functions that the system should perform. Test conditions are derived from functional requirements, user stories, use cases, etc. Can be applied at all levels.</p>
        <h4>Non-Functional Testing</h4>
        <p>Evaluates characteristics other than functionality:</p>
        <ul>
          <li><strong>Performance efficiency:</strong> response time, resource usage</li>
          <li><strong>Compatibility:</strong> with other systems, platforms or browsers</li>
          <li><strong>Usability:</strong> ease of learning and use</li>
          <li><strong>Reliability:</strong> availability, fault tolerance</li>
          <li><strong>Security:</strong> confidentiality, integrity, authentication</li>
          <li><strong>Maintainability:</strong> ease of modification</li>
          <li><strong>Portability:</strong> ease of migration between environments</li>
        </ul>
        <h4>White-Box vs Black-Box Testing</h4>
        <div class="comparison-grid">
          <div class="comparison-card">
            <h4>⬛ Black-Box</h4>
            <p>Specification-based. Does not require knowledge of the internal structure. Derived from functional or non-functional requirements. Applies at all levels.</p>
          </div>
          <div class="comparison-card">
            <h4>⬜ White-Box</h4>
            <p>Based on the internal structure of the system. Requires knowledge of the code or architecture. Used to measure code coverage.</p>
          </div>
        </div>
        <h4>Regression and Confirmation Testing</h4>
        <p><strong>Confirmation testing</strong> verifies that a fixed defect no longer occurs. <strong>Regression testing</strong> verifies that changes have not introduced new defects in unmodified parts. Regression tests are good candidates for automation.</p>`
      },
      {
        title: "Testing in Agile Development",
        content: `<p>In agile approaches, testing is continuous and forms an integral part of each sprint. Some key concepts:</p>
        <h4>Agile Testing Quadrants (Brian Marick)</h4>
        <div class="quadrant-grid">
          <div class="quadrant-card q1">
            <strong>Q1 - Team Support / Technology</strong>
            <p>Automated component and integration tests. TDD.</p>
          </div>
          <div class="quadrant-card q2">
            <strong>Q2 - Team Support / Business</strong>
            <p>Functional tests, examples, user story tests.</p>
          </div>
          <div class="quadrant-card q3">
            <strong>Q3 - Product Critique / Business</strong>
            <p>Exploratory, usability and user acceptance testing.</p>
          </div>
          <div class="quadrant-card q4">
            <strong>Q4 - Product Critique / Technology</strong>
            <p>Performance, security, reliability and robustness testing.</p>
          </div>
        </div>
        <h4>TDD, ATDD and BDD</h4>
        <ul>
          <li><strong>TDD (Test Driven Development):</strong> The developer writes a failing test first, then the minimum code to pass it, then refactors.</li>
          <li><strong>ATDD (Acceptance Test Driven Development):</strong> Acceptance criteria are defined before development, with customer participation.</li>
          <li><strong>BDD (Behavior Driven Development):</strong> Behaviours are described in natural language (Given/When/Then) that serve as executable tests.</li>
        </ul>`
      }
    ],
    quiz: [
      {
        question: "Which test level has an independent test team verify the functional and non-functional behaviour of the complete system?",
        options: ["Component testing", "Component integration testing", "System testing", "Acceptance testing"],
        explanation: "System testing focuses on the behaviour and capabilities of the whole system, including end-to-end tasks and non-functional characteristics. It is usually performed by an independent test team."
      },
      {
        question: "A company releases a beta version of its mobile app to a selected group of users on their own devices. What type of acceptance testing is this?",
        options: ["Alpha testing", "User acceptance testing (UAT)", "Beta testing", "Operational acceptance testing"],
        explanation: "Beta testing is performed at the customer or end-user site, with real users using the product in their natural environment, without direct supervision from the development team."
      },
      {
        question: "What is the difference between confirmation testing and regression testing?",
        options: [
          "Confirmation verifies fixed defects no longer occur; regression verifies changes have not introduced new defects",
          "Confirmation is done before each sprint; regression at the end of the project",
          "Confirmation is done by the developer; regression by the customer",
          "There is no difference; they are synonyms"
        ],
        explanation: "Confirmation testing (re-testing) verifies that a specific defect has been fixed. Regression testing verifies that changes (fixes, improvements) have not caused new defects in unmodified parts of the system."
      },
      {
        question: "In the agile testing quadrants, which quadrant contains performance and security testing?",
        options: ["Q1 - Team Support / Technology", "Q2 - Team Support / Business", "Q3 - Product Critique / Business", "Q4 - Product Critique / Technology"],
        explanation: "Quadrant Q4 contains tests that critique the product from a technological perspective: performance, security, reliability and robustness testing. They are technical tests aimed at finding system weaknesses."
      },
      {
        question: "What characteristic distinguishes white-box testing from black-box testing?",
        options: [
          "White-box testing requires knowledge of the internal structure of the system",
          "White-box testing is only performed at system level",
          "Black-box testing is more effective at finding defects",
          "White-box testing cannot be automated"
        ],
        explanation: "White-box testing is based on the internal structure of the system and requires knowledge of the code or architecture. Black-box testing is based on functional specifications, with no need to know the implementation."
      },
      {
        question: "An organisation is developing safety-critical medical software. Which lifecycle model is most appropriate?",
        options: ["Scrum with 2-week sprints", "Continuous Kanban without iterations", "V-Model with rigorous documentation", "Any model; the model does not affect quality"],
        explanation: "The V-Model is appropriate for projects where requirements are stable and rigorous documentation is needed (medical, aerospace systems, etc.). It ensures every development phase has a corresponding test level planned from the start."
      }
    ]
  },
  {
    id: 3,
    title: "Static Testing",
    description: "Reviews, static analysis and how to find defects without executing code.",
    sections: [
      {
        title: "What is Static Testing?",
        content: `<p>Static testing examines work products <strong>without executing the code</strong>. It can be applied to documents, requirements, designs, code, test plans, etc.</p>
        <h4>Benefits of static testing:</h4>
        <ul>
          <li>Detect defects before execution (lower cost to fix)</li>
          <li>Evaluate quality and build confidence in work products</li>
          <li>Provide information to stakeholders</li>
          <li>Improve communication between developers and testers</li>
        </ul>
        <h4>Difference between static and dynamic testing:</h4>
        <div class="comparison-grid">
          <div class="comparison-card">
            <h4>🔍 Static Testing</h4>
            <p>Does not execute the code. Examines documents, requirements, source code. Can detect defects that dynamic testing cannot find (requirement inconsistencies, ambiguities, standards violations).</p>
          </div>
          <div class="comparison-card">
            <h4>▶️ Dynamic Testing</h4>
            <p>Executes the code with input data. Observes behaviour and compares with expected results. Can only detect defects that cause a visible failure.</p>
          </div>
        </div>
        <div class="info-box">
          <strong>Typical defects found by reviews:</strong> Deviations from standards, requirement ambiguities, omissions, inconsistencies, redundant or incorrect information.
        </div>`
      },
      {
        title: "Review Types",
        content: `<p>Reviews are the most common type of static testing. There are four main types, from least to most formal:</p>
        <div class="review-types">
          <div class="review-card informal">
            <h4>1. Informal Review</h4>
            <ul>
              <li>No formal documented process</li>
              <li>May be a peer review (buddy check) or pair review</li>
              <li>Main objective: detect potential defects</li>
              <li>Does not require a review meeting</li>
              <li>Widely used in Agile</li>
            </ul>
          </div>
          <div class="review-card walkthrough">
            <h4>2. Walkthrough</h4>
            <ul>
              <li>Led by the product author</li>
              <li>May have a formal or informal process</li>
              <li>Objectives: detect defects, evaluate alternatives, achieve consensus</li>
              <li>A scribe documents findings</li>
              <li>May include a review meeting</li>
            </ul>
          </div>
          <div class="review-card technical">
            <h4>3. Technical Review</h4>
            <ul>
              <li>Performed by qualified technical reviewers</li>
              <li>Moderated by a moderator (may be the author)</li>
              <li>Objectives: detect defects, evaluate technical conformance</li>
              <li>Checklists may be used</li>
              <li>May range from informal to very formal</li>
            </ul>
          </div>
          <div class="review-card inspection">
            <h4>4. Inspection</h4>
            <ul>
              <li>Most formal type of review</li>
              <li>Moderated by a trained and certified moderator</li>
              <li>Defined roles: moderator, author, reviewers, scribe, leader</li>
              <li>Based on rules, checklists and entry/exit criteria</li>
              <li>Metrics collected for process improvement</li>
            </ul>
          </div>
        </div>
        <h4>Formal Review Process</h4>
        <p>Consists of: <strong>Planning → Review Initiation → Individual Review → Communication and Analysis → Fixing and Reporting</strong>. Entry criteria are applied at initiation; exit criteria are verified at fixing and reporting.</p>`
      },
      {
        title: "Static Analysis",
        content: `<p>Static analysis examines source code or UML models using automated tools, without executing the software. Compilers perform a basic form of static analysis.</p>
        <h4>Typical defects detected by static analysis:</h4>
        <ul>
          <li>Undeclared variables or variables used without initialisation</li>
          <li>Variables never used (dead code)</li>
          <li>Unreachable code</li>
          <li>Coding convention violations</li>
          <li>Security vulnerabilities (SQL injection, XSS, buffer overflow)</li>
          <li>Incorrect program logic</li>
          <li>High cyclomatic complexity</li>
        </ul>
        <div class="info-box">
          <strong>Static analysis tools:</strong> SonarQube, ESLint, PMD, Checkstyle, FindBugs/SpotBugs, Pylint. These tools identify potential defects without executing the code.
        </div>`
      }
    ],
    quiz: [
      {
        question: "Which type of defect is most likely to be detected by a static review but NOT by dynamic testing?",
        options: [
          "A bug in compound interest calculation",
          "An ambiguity in requirements causing two valid interpretations",
          "An error in the HTTP server response",
          "A page load time above the threshold"
        ],
        explanation: "Static reviews can detect requirement ambiguities, document inconsistencies and design problems before code is written. Dynamic testing can only detect defects that cause a failure during execution."
      },
      {
        question: "Which review type is the most formal, has defined roles and collects metrics for process improvement?",
        options: ["Informal review (buddy check)", "Walkthrough", "Technical review", "Inspection"],
        explanation: "Inspection is the most formal type of review. It includes specific roles (certified moderator, author, reviewers, scribe), is based on rules and checklists, has entry/exit criteria, and collects metrics for process improvement."
      },
      {
        question: "In a walkthrough, who leads the review session?",
        options: ["An independent moderator", "The author of the work product", "The test manager", "A senior technical reviewer"],
        explanation: "In a walkthrough, the author leads the session. The author presents their own work to the reviewers and explains the decisions made. This helps the author get direct feedback and helps reviewers understand the context."
      },
      {
        question: "Which of the following is NOT a static testing activity?",
        options: [
          "Reviewing a requirements specification for ambiguities",
          "Using a tool to detect uninitialised variables in code",
          "Executing test cases to verify login functionality",
          "Inspecting an architecture design"
        ],
        explanation: "Executing test cases is dynamic testing, not static. Static testing examines work products without executing the software: document reviews, static code analysis, design inspections, etc."
      },
      {
        question: "A development team uses a tool that analyses their Python code for unused variables, style violations and potential vulnerabilities without running the program. This is an example of:",
        options: ["White-box testing", "Static analysis", "Integration testing", "Walkthrough"],
        explanation: "Static analysis examines source code using automated tools without executing it. Tools such as Pylint, ESLint or SonarQube perform static analysis to detect potential defects, standards violations and vulnerabilities."
      }
    ]
  },
  {
    id: 4,
    title: "Test Design Techniques",
    description: "Equivalence partitioning, boundary values, decision tables, state transitions and more.",
    sections: [
      {
        title: "Equivalence Partitioning",
        content: `<p>Equivalence partitioning (EP) divides input data into partitions where all values in the same group behave the same way. If one value in a partition fails, all will fail.</p>
        <h4>Types of partitions:</h4>
        <ul>
          <li><strong>Valid:</strong> values the system should accept and process correctly</li>
          <li><strong>Invalid:</strong> values the system should reject</li>
        </ul>
        <div class="example-box">
          <strong>Example — "age" field (18 to 65 years):</strong>
          <div class="pe-example">
            <div class="pe-invalid">Invalid: &lt;18<br><em>e.g. 10, 0, -5</em></div>
            <div class="pe-valid">Valid: 18-65<br><em>e.g. 30, 45, 18</em></div>
            <div class="pe-invalid">Invalid: &gt;65<br><em>e.g. 70, 100</em></div>
          </div>
          <p>With EP, at least 1 test case per partition = minimum 3 test cases.</p>
        </div>
        <div class="info-box">
          <strong>EP Coverage:</strong> 100% is achieved when at least one value from each identified partition has been tested. The minimum recommended coverage is to test once for each valid and invalid partition.
        </div>`
      },
      {
        title: "Boundary Value Analysis",
        content: `<p>Boundary Value Analysis (BVA) complements EP by focusing on partition edges, where defects are most likely to occur.</p>
        <h4>2-value version (ISTQB 2018):</h4>
        <p>For each boundary, test the <strong>exact boundary value</strong> and the <strong>adjacent value in the invalid partition</strong>.</p>
        <h4>3-value version:</h4>
        <p>For each boundary, test the <strong>boundary value</strong>, the <strong>value just below</strong> and the <strong>value just above</strong>.</p>
        <div class="example-box">
          <strong>Example — "age" field (18 to 65):</strong>
          <div class="bva-example">
            <div class="bva-invalid">17 ❌</div>
            <div class="bva-valid">18 ✓</div>
            <div class="bva-mid">...</div>
            <div class="bva-valid">65 ✓</div>
            <div class="bva-invalid">66 ❌</div>
          </div>
          <p>With 2-value BVA: test 17, 18, 65, 66 (4 test cases for boundaries).</p>
          <p>With 3-value BVA: test 17, 18, 19, 64, 65, 66 (6 test cases).</p>
        </div>`
      },
      {
        title: "Decision Tables",
        content: `<p>Decision tables model combinations of input conditions and resulting actions. They are ideal when system behaviour depends on multiple interdependent conditions.</p>
        <h4>Decision table structure:</h4>
        <div class="dt-example">
          <table class="decision-table">
            <thead>
              <tr><th></th><th>R1</th><th>R2</th><th>R3</th><th>R4</th></tr>
            </thead>
            <tbody>
              <tr class="conditions-header"><td colspan="5"><strong>CONDITIONS</strong></td></tr>
              <tr><td>Has account?</td><td>Y</td><td>Y</td><td>N</td><td>N</td></tr>
              <tr><td>Correct password?</td><td>Y</td><td>N</td><td>Y</td><td>N</td></tr>
              <tr class="actions-header"><td colspan="5"><strong>ACTIONS</strong></td></tr>
              <tr><td>Allow access</td><td>✓</td><td>✗</td><td>✗</td><td>✗</td></tr>
              <tr><td>Show error</td><td>✗</td><td>✓</td><td>✓</td><td>✓</td></tr>
            </tbody>
          </table>
        </div>
        <p>With <strong>N binary conditions</strong>, there are a maximum of <strong>2^N combinations</strong> (rules). A collapsed table can be used to reduce the number of columns.</p>
        <div class="info-box">
          <strong>Minimum coverage:</strong> At least one test case per rule (column) in the table. With N binary conditions: 2^N rules = 2^N minimum test cases before collapsing.
        </div>`
      },
      {
        title: "State Transition Testing",
        content: `<p>State transition testing models system behaviour based on its current state and the events it receives. It is represented using state diagrams or transition tables.</p>
        <h4>Components:</h4>
        <ul>
          <li><strong>State:</strong> a stable situation of the system at a given moment</li>
          <li><strong>Transition:</strong> a change from one state to another</li>
          <li><strong>Event:</strong> what triggers the transition</li>
          <li><strong>Action:</strong> what happens as a result of the transition</li>
          <li><strong>Final/acceptance state:</strong> the system can end in this state</li>
        </ul>
        <div class="example-box">
          <strong>Example — ATM machine:</strong><br>
          IDLE → (insert card) → CARD_INSERTED → (enter PIN) → AUTHENTICATED → (withdraw money) → IDLE
        </div>
        <h4>Coverage levels:</h4>
        <ul>
          <li><strong>All states coverage:</strong> visit each state at least once</li>
          <li><strong>All valid transitions coverage:</strong> exercise each valid transition at least once (100% transitions)</li>
          <li><strong>All transitions coverage (including invalid):</strong> also test transitions that should not occur</li>
        </ul>`
      },
      {
        title: "White-Box and Experience-Based Techniques",
        content: `<h4>Statement Testing (Statement Coverage)</h4>
        <p>Measures the percentage of statements executed during testing. 100% coverage means every statement in the code has been executed at least once.</p>
        <h4>Decision Testing (Decision Coverage)</h4>
        <p>Measures the percentage of decision outcomes (true/false) that have been evaluated. 100% decision coverage implies 100% statement coverage, but not vice versa.</p>
        <div class="info-box">
          <strong>Relationship:</strong> 100% decision coverage ⊇ 100% statement coverage. Decision coverage is more demanding.
        </div>
        <h4>Experience-Based Techniques</h4>
        <ul>
          <li><strong>Error Guessing:</strong> The tester uses experience and system knowledge to intuit where defects are likely. Can be formalised with "defect checklists".</li>
          <li><strong>Exploratory Testing:</strong> Simultaneous design and execution, guided by real-time learning. Documented using "test charters". Effective when there is little time or documentation.</li>
          <li><strong>Checklist-Based Testing:</strong> The tester designs, implements and executes tests to cover checklist items. Ensures consistency between sessions.</li>
        </ul>`
      }
    ],
    quiz: [
      {
        question: "A field accepts ages between 18 and 99. Using equivalence partitioning, how many partitions are identified?",
        options: ["1 (one valid partition)", "2 (one valid, one invalid)", "3 (one valid, two invalid)", "4 (two valid, two invalid)"],
        explanation: "EP identifies 3 partitions: invalid (<18), valid (18–99), invalid (>99). Each partition represents a group of values that behave the same way, requiring at least one test case per partition."
      },
      {
        question: "When is a decision table the most suitable technique?",
        options: [
          "When you need to test boundary values of a numeric field",
          "When system behaviour depends on multiple interdependent conditions",
          "When you want to measure source code coverage",
          "When there is no system documentation"
        ],
        explanation: "Decision tables are especially useful when system behaviour depends on multiple conditions that can combine in various ways. They clearly model all possible combinations of conditions and their resulting actions."
      },
      {
        question: "In state transition testing, what is the most demanding coverage level?",
        options: [
          "All states coverage",
          "All valid transitions coverage",
          "All transitions coverage including invalid transitions",
          "Initial and final state coverage"
        ],
        explanation: "Testing all transitions including invalid ones (transitions that should not occur) is the most demanding level. It verifies that the system not only correctly handles valid transitions but also appropriately rejects unexpected events in each state."
      },
      {
        question: "A tester with 10 years of experience in banking systems designs additional test cases based on their intuition about where defects typically occur. This is an example of:",
        options: ["Equivalence partitioning", "Exploratory testing", "Error guessing", "Checklist-based testing"],
        explanation: "Error guessing is an experience-based technique where the tester uses their knowledge of the system and defect history to anticipate where defects are most likely to exist. It is formalised through 'defect checklists'."
      },
      {
        question: "What is the relationship between decision coverage and statement coverage?",
        options: [
          "They are equivalent; 100% of one implies 100% of the other",
          "100% statement coverage implies 100% decision coverage",
          "100% decision coverage implies 100% statement coverage",
          "They have no relationship"
        ],
        explanation: "Decision coverage is more demanding than statement coverage. Achieving 100% decision coverage (all true/false outcomes of every decision) automatically achieves 100% statement coverage, but not the other way around."
      }
    ]
  },
  {
    id: 5,
    title: "Test Management",
    description: "Organisation, planning, metrics, risks and defect management.",
    sections: [
      {
        title: "Test Organisation",
        content: `<h4>Independent Testing</h4>
        <p>The degree of tester independence from the development team affects effectiveness in finding defects:</p>
        <div class="independence-scale">
          <div class="ind-level low">No independence: developer tests their own code</div>
          <div class="ind-level med-low">Low independence: another developer from the same team tests</div>
          <div class="ind-level med">Medium independence: test team within the same project</div>
          <div class="ind-level med-high">High independence: separate test team in the organisation</div>
          <div class="ind-level high">Maximum independence: external testers (outsourcing)</div>
        </div>
        <h4>Roles in Test Management</h4>
        <p><strong>Test Manager:</strong> Plan testing, monitor progress, manage risks, report to management, coordinate with the project team.</p>
        <p><strong>Tester:</strong> Analyse and design test cases, implement and execute tests, evaluate results, report defects, use test tools, review tests of others.</p>`
      },
      {
        title: "Test Planning and Estimation",
        content: `<h4>Test Plan</h4>
        <p>The test plan documents the objectives, scope, approach, resources and schedule of testing activities. It includes:</p>
        <ul>
          <li>Project context and system under test</li>
          <li>Assumptions and constraints</li>
          <li>Stakeholders (who participates in testing)</li>
          <li>Project and product risks</li>
          <li>Testing approach (levels, types, techniques)</li>
          <li>Test environment</li>
          <li>Entry and exit criteria</li>
          <li>Schedules and estimates</li>
          <li>Metrics and reports</li>
        </ul>
        <h4>Entry and Exit Criteria</h4>
        <div class="criteria-grid">
          <div class="criteria-card">
            <h4>Entry Criteria (Definition of Ready)</h4>
            <p>Conditions that must be met to start a testing activity:</p>
            <ul>
              <li>Availability of test environment</li>
              <li>Code available and delivered</li>
              <li>Test data available</li>
              <li>Test tools installed and configured</li>
            </ul>
          </div>
          <div class="criteria-card">
            <h4>Exit Criteria (Definition of Done)</h4>
            <p>Conditions that must be met to conclude testing:</p>
            <ul>
              <li>Coverage level achieved</li>
              <li>Number of open defects within threshold</li>
              <li>All planned tests executed</li>
              <li>Residual risks accepted by stakeholders</li>
            </ul>
          </div>
        </div>
        <h4>Estimation Techniques</h4>
        <ul>
          <li><strong>Metrics-based:</strong> Uses data from similar past projects</li>
          <li><strong>Expert-based:</strong> Expert judgement, Planning Poker, Delphi technique</li>
        </ul>`
      },
      {
        title: "Test Metrics and Control",
        content: `<p>Test metrics enable evaluation of the progress and quality of the test process.</p>
        <h4>Common metrics:</h4>
        <div class="metrics-grid">
          <div class="metric-card"><strong>% work completed</strong><p>Test cases designed, executed, with result</p></div>
          <div class="metric-card"><strong>Code coverage</strong><p>% statements or decisions exercised</p></div>
          <div class="metric-card"><strong>Defects found/fixed</strong><p>Detection and resolution rate</p></div>
          <div class="metric-card"><strong>Defect density</strong><p>Defects per module or per line of code</p></div>
          <div class="metric-card"><strong>Product confidence</strong><p>Number of tests passed vs failed</p></div>
          <div class="metric-card"><strong>Requirements coverage</strong><p>% requirements with at least one test case</p></div>
        </div>
        <h4>Test Reports</h4>
        <p>Progress reports are generated during testing (for the team). Completion reports are generated at the end of a test level or cycle (for management and stakeholders).</p>`
      },
      {
        title: "Risk Management and Defect Management",
        content: `<h4>Risks in Testing</h4>
        <p><strong>Product risk:</strong> Possibility that the system fails. Examples: complex software, legacy code, lack of team experience.</p>
        <p><strong>Project risk:</strong> Factors that affect project success. Examples: staff turnover, requirement changes, schedule pressure.</p>
        <div class="info-box">
          <strong>Risk-based testing:</strong> Concentrate testing effort in the highest-risk areas. Risk = probability × impact. Higher-risk areas receive more testing.
        </div>
        <h4>Defect Management</h4>
        <p>A good defect report must contain:</p>
        <ul>
          <li>Unique identifier</li>
          <li>Title / summary</li>
          <li>Date of report and author</li>
          <li>Test object and environment</li>
          <li>Steps to reproduce the defect</li>
          <li>Expected result vs actual result</li>
          <li>Severity and priority</li>
          <li>Defect status</li>
          <li>Evidence (screenshots, logs)</li>
        </ul>
        <h4>Severity vs Priority</h4>
        <div class="comparison-grid">
          <div class="comparison-card">
            <h4>🔴 Severity</h4>
            <p>Technical impact of the defect on the system. Assigned by the test team. Scale: Critical, High, Medium, Low.</p>
          </div>
          <div class="comparison-card">
            <h4>🚨 Priority</h4>
            <p>Urgency with which it must be fixed. Assigned by the product owner or business. A cosmetic defect can have high priority if it affects the brand.</p>
          </div>
        </div>`
      }
    ],
    quiz: [
      {
        question: "What is the main advantage of having a test team independent from the development team?",
        options: ["Independent testers are always faster", "Greater ability to find defects by having a different perspective from the author", "They eliminate the need for developers to perform unit tests", "They reduce the overall project cost"],
        explanation: "An independent test team brings a different perspective from the author, which increases effectiveness in finding defects. This independence reduces the author's bias, which can prevent them from seeing flaws in their own work."
      },
      {
        question: "Which of the following is a Test Manager's responsibility?",
        options: ["Designing individual test cases", "Executing test cases and recording results", "Planning testing and managing test process risks", "Developing test automation scripts"],
        explanation: "The Test Manager is responsible for planning tests, monitoring progress, managing risks in the test process, reporting to management and coordinating with the project team. Designing and executing test cases is the Tester's responsibility."
      },
      {
        question: "A cosmetic defect (spelling error on the home page) receives High Priority because the CEO will present a demo tomorrow. Its Severity is Low. Does this contradict ISTQB principles?",
        options: ["Yes; priority must always correspond to severity", "No; severity and priority are independent dimensions assigned by different roles", "Yes; cosmetic defects should not have high priority", "No; priority is assigned by the test manager based on technical severity"],
        explanation: "Severity and priority are independent dimensions. Severity (technical impact) is assigned by the test team; priority (business urgency) is assigned by the product owner or client. A low-severity defect can have high priority for business reasons."
      },
      {
        question: "Which metric best indicates the effectiveness of the test process?",
        options: ["Total number of test cases designed", "Percentage of defects found in testing vs found in production", "Speed of test execution in minutes", "Number of testers on the team"],
        explanation: "The percentage of defects found in testing vs production (defect detection effectiveness) directly measures how well testing catches defects before they reach the customer, which is the primary purpose of testing."
      },
      {
        question: "Risk-based testing means that system areas with the highest product risk receive:",
        options: ["Fewer tests to save resources", "More attention and testing effort", "Only automated tests", "Only functional tests"],
        explanation: "Risk-based testing prioritises testing activities based on risk level (probability × impact). Areas with the highest product risk (most likely to fail with the greatest impact) receive more testing effort."
      }
    ]
  },
  {
    id: 6,
    title: "Tool Support for Testing",
    description: "Classification of test tools, automation and success factors.",
    sections: [
      {
        title: "Classification of Test Tools",
        content: `<p>Test tools can be classified according to their purpose within the test process:</p>
        <div class="tools-grid">
          <div class="tool-category">
            <h4>🗂️ Test Management</h4>
            <p>TestRail, Zephyr, qTest. Manage test cases, executions, plans and traceability with requirements.</p>
          </div>
          <div class="tool-category">
            <h4>🐛 Defect Management</h4>
            <p>Jira, Bugzilla, Azure DevOps. Track the defect lifecycle from opening to closure.</p>
          </div>
          <div class="tool-category">
            <h4>⚙️ Test Automation</h4>
            <p>Selenium, Cypress, Playwright. Execute tests automatically, especially useful for regression.</p>
          </div>
          <div class="tool-category">
            <h4>📈 Performance and Load</h4>
            <p>JMeter, Gatling, k6. Simulate multiple users to measure behaviour under load.</p>
          </div>
          <div class="tool-category">
            <h4>🔍 Static Analysis</h4>
            <p>SonarQube, ESLint, Pylint. Detect defects in code without executing it.</p>
          </div>
          <div class="tool-category">
            <h4>🧪 Component Test Frameworks</h4>
            <p>JUnit, pytest, Jest, NUnit. Support writing and executing unit tests.</p>
          </div>
        </div>`
      },
      {
        title: "Benefits, Risks and Success Factors",
        content: `<h4>Benefits of Test Automation</h4>
        <ul>
          <li>Reduced effort for repetitive tests (regression)</li>
          <li>Faster and more frequent test execution</li>
          <li>Greater consistency and reproducibility</li>
          <li>Test coverage not possible manually (performance)</li>
          <li>Faster feedback on quality</li>
        </ul>
        <h4>Risks of Automation</h4>
        <ul>
          <li>Unrealistic expectations about return on investment</li>
          <li>Underestimation of implementation and maintenance time</li>
          <li>Excessive tool dependency (manual tests remain necessary)</li>
          <li>Ignoring the need to update tests when the system changes</li>
          <li>Choosing an inappropriate tool for the context</li>
        </ul>
        <h4>Success Factors for Selection and Implementation</h4>
        <ul>
          <li>Assess organisational maturity (do not automate without a stable process)</li>
          <li>Run a pilot project before committing to a tool</li>
          <li>Define clear selection criteria (compatibility, cost, support)</li>
          <li>Provide team training</li>
          <li>Establish script usage and maintenance conventions</li>
        </ul>
        <div class="info-box">
          <strong>Important:</strong> Test automation does NOT replace manual testing. Exploratory, usability and user acceptance testing still require human judgement. Automation is most effective for stable, well-defined regression tests.
        </div>`
      }
    ],
    quiz: [
      {
        question: "What is the main risk of introducing test automation into an immature test process?",
        options: [
          "Automated tests are always slower than manual tests",
          "Unrealistic expectations and underestimation of implementation and maintenance effort",
          "Automation tools are not compatible with most systems",
          "Automation eliminates the need for human testers"
        ],
        explanation: "One of the main risks is having unrealistic expectations about return on investment and underestimating the time needed to implement and maintain test scripts. Automation requires significant upfront investment and a sufficiently mature and stable test process."
      },
      {
        question: "For which type of testing is automation most suitable?",
        options: [
          "Exploratory testing where user experience is evaluated",
          "User acceptance testing (UAT) that requires customer opinion",
          "Repetitive and stable regression tests with well-defined expected results",
          "Ad hoc testing based on tester intuition"
        ],
        explanation: "Automation is most effective for stable and repetitive regression tests where expected results are well defined. Exploratory, usability and user acceptance testing require human judgement and are difficult to automate effectively."
      },
      {
        question: "An organisation wants to implement Selenium to automate their UI tests. What is the ISTQB best practice before committing to this tool?",
        options: [
          "Immediately automate all existing test cases",
          "Run a pilot project to evaluate the tool in the real context",
          "Eliminate all manual tests before starting automation",
          "Buy the most expensive licence to guarantee quality"
        ],
        explanation: "ISTQB recommends running a pilot project before committing to an automation tool. The pilot allows evaluation of compatibility with the system, team learning curve, actual maintenance effort and whether the tool meets project needs."
      }
    ]
  }
];

// ============================================================
// ENGLISH FLASHCARDS (parallel to FLASHCARDS array)
// ============================================================
const FC_EN = [
  // ── Fundamentals ──────────────────────────────────────────
  {
    front: "Error → Defect → Failure",
    back: "👤 ERROR: the dev writes calculateTax(price*0.16) instead of *0.19\n🐛 DEFECT: the incorrect code remains in production\n💥 FAILURE: the receipt shows the wrong price to the user"
  },
  {
    front: "Testing vs Debugging",
    back: "🔍 TESTING (QA): runs payment with expired card → system doesn't reject it → reports bug #482\n🔧 DEBUGGING (Dev): opens the code, finds the missing date validation, fixes it and creates a PR"
  },
  {
    front: "Validation vs Verification",
    back: "✅ VERIFICATION: login accepts max 20 characters as stated in the requirement\n🎯 VALIDATION: users in beta cannot remember 20-character passwords — the requirement was wrong"
  },
  {
    front: "Root Cause of a defect",
    back: "🔎 EFFECT: customers receive duplicate charges\n🐛 DEFECT: the 'Pay' button is not disabled after the first click\n🧠 ROOT CAUSE: ambiguous requirement — the team didn't specify double-click handling\n→ Eliminating the root cause prevents recurrence"
  },
  {
    front: "Testing objectives",
    back: "Testing does NOT only look for failures. Also:\n✓ Build confidence in quality\n✓ Provide info for informed decisions\n✓ Prevent defects (design quality in from the start)\n✓ Verify requirements and validate user needs"
  },
  // ── 7 Principles ─────────────────────────────────────────
  {
    front: "Principle 1: Testing shows...",
    back: "...the PRESENCE of defects, NOT their absence.\n\nExample: Even if 500 regression tests pass, the payment module may have an uncovered bug.\n→ Never say 'the system is error-free'"
  },
  {
    front: "Principle 2: Exhaustive testing is impossible",
    back: "A text field with 255 possible characters × upper/lowercase × combinations = millions of inputs.\n→ Solution: Equivalence Partitioning + BVA + risk analysis to focus where to test"
  },
  {
    front: "Principle 3: Early testing (Shift Left)",
    back: "💰 Cost of fixing a defect:\n• In requirements: $1\n• In design: $10\n• In code: $100\n• In production: $1,000+\n→ Review requirements BEFORE writing code"
  },
  {
    front: "Principle 4: Defect clustering",
    back: "In a typical e-commerce app:\n• Payment module → 60% of bugs\n• Shopping cart module → 25% of bugs\n• Catalogue module → remaining 15%\n→ Focus tests on payment and cart (80/20 rule)"
  },
  {
    front: "Principle 5: Pesticide paradox",
    back: "If your 200 regression tests have gone 6 months without finding new bugs, the software has 'become immune'.\n→ Add new scenarios, vary data, use exploratory testing to discover new areas"
  },
  {
    front: "Principle 6: Testing is context-dependent",
    back: "Banking app: focus on security, accuracy, auditing, certifications\nGaming app: focus on performance, compatibility, user experience\nMedical app (pacemaker): focus on reliability, IEC 62304, functional safety testing\n→ Context defines the approach"
  },
  {
    front: "Principle 7: Absence-of-errors fallacy",
    back: "A bank launched an investment system with no technical bugs.\nUsers abandoned it because the interface was incomprehensible.\n→ Zero technical defects doesn't guarantee success. You must also validate usability and business value."
  },
  // ── Test Process ─────────────────────────────────────────
  {
    front: "7 Test Process Activities",
    back: "1. Planning\n2. Monitoring and Control\n3. Analysis (WHAT to test?)\n4. Design (HOW to test?)\n5. Implementation (organise, prepare environment)\n6. Execution\n7. Completion (final report, lessons learned)"
  },
  {
    front: "Test Analysis vs Test Design",
    back: "📋 ANALYSIS answers: WHAT to test?\nEx: 'Test that the age field only accepts values between 18 and 65'\n\n✏️ DESIGN answers: HOW to test it?\nEx: Cases: age=17 (invalid), age=18 (valid), age=65 (valid), age=66 (invalid)"
  },
  {
    front: "Test Plan — key content",
    back: "✓ Objectives and scope\n✓ Approach (levels, types, techniques)\n✓ Entry and exit criteria\n✓ Resources (people, environments, tools)\n✓ Schedule and estimates\n✓ Risks and contingencies\n✓ Metrics and reports"
  },
  {
    front: "Test Completion — what happens?",
    back: "When closing a test cycle:\n✓ Verify exit criteria are met\n✓ Archive test cases, data and environments\n✓ Deliver the completion report\n✓ Collect lessons learned\n✓ Close open defects or carry them forward"
  },
  // ── Test Levels ──────────────────────────────────────────
  {
    front: "Component Testing (Unit)",
    back: "What: an isolated function\nExample: test calculateDiscount(price, percentage) with:\n• price=100, pct=20 → expect 80\n• price=0, pct=50 → expect 0\n• price=-5 → error handling\nWho: the developer. Tool: JUnit, pytest, Jest"
  },
  {
    front: "Component Integration Testing",
    back: "What: the interface between modules\nExample: the 'Cart' module calls the 'Inventory' module.\nDoes it return the available stock correctly?\nWhat happens if Inventory doesn't respond in 2s?\nDo NOT test cart alone or inventory alone"
  },
  {
    front: "System Testing",
    back: "What: the complete system end-to-end\nExample: User searches product → adds to cart → pays by card → receives confirmation email → inventory updates\n→ Simulates the real business flow. Includes functional and non-functional."
  },
  {
    front: "Acceptance Testing (UAT)",
    back: "Who: the customer or end users\nExample in banking: the compliance team verifies the system generates correct IFRS reports.\nThe CEO tests that the executive dashboard shows the agreed KPIs.\n→ Validates whether the system satisfies business needs"
  },
  {
    front: "Alpha vs Beta Testing",
    back: "🏢 ALPHA: real users test at the developer's site with supervision\nEx: bank employees test the new app at the vendor's office\n\n🏠 BETA: real users test in their own environment without supervision\nEx: 500 selected customers use the app on their phones for 30 days"
  },
  // ── Test Types ───────────────────────────────────────────
  {
    front: "Functional vs Non-Functional Testing",
    back: "✅ FUNCTIONAL: Does it do what it should?\nEx: The 'Pay' button correctly processes the payment\n\n⚡ NON-FUNCTIONAL: How well does it do it?\nEx: Payment processed in less than 2 seconds with 10,000 concurrent users\nEx: The system encrypts card data (security)"
  },
  {
    front: "Confirmation vs Regression Testing",
    back: "🔁 CONFIRMATION: bug #482 said expired cards were not rejected.\nAfter the fix: test that specific scenario → is it rejected now? ✓\n\n🌊 REGRESSION: after the fix, does payment with valid card still work? And instalment payments? → Verify nothing broke"
  },
  {
    front: "Black-Box vs White-Box Testing",
    back: "⬛ BLACK-BOX: you test the 'price' field with different values without seeing the code.\nTechniques: EP, BVA, decision tables\n\n⬜ WHITE-BOX: you verify that your test executes the IF for discount in both branches (true/false).\nTechniques: statement coverage, decision coverage"
  },
  // ── Techniques ───────────────────────────────────────────
  {
    front: "Equivalence Partitioning — example",
    back: "Insurance 'age' field (18–65):\n❌ Invalid A: values < 18 → test e.g. 15\n✅ Valid: 18 to 65 → test e.g. 40\n❌ Invalid B: values > 65 → test e.g. 70\n→ 3 partitions = minimum 3 test cases\nTest 1 representative value from each partition"
  },
  {
    front: "BVA 2-value — example",
    back: "Price field (min: $1, max: $9,999):\nLower boundary → test $0 and $1\nUpper boundary → test $9,999 and $10,000\n→ 4 test cases for the boundaries\nBoundaries concentrate more defects than the interior"
  },
  {
    front: "Decision Table — when to use it",
    back: "Discount rule for a store:\n• VIP customer? Y/N\n• Purchase > $500? Y/N\n→ 4 combinations (2²)\nYY: 20% | YN: 10% | NY: 5% | NN: 0%\nIdeal when behaviour depends on combinations of conditions"
  },
  {
    front: "State Transition — ATM example",
    back: "States: IDLE → CARD_INSERTED → PIN_ENTERED → OPERATING → IDLE\nEvents: insert card / enter PIN / select operation / finish\nTest: what happens if PIN entered incorrectly 3 times? → State: BLOCKED\n→ Useful for reactive systems that change state"
  },
  {
    front: "Decision vs Statement Coverage",
    back: "Code:\nif (age >= 18) { showContent(); }\nreturn;\n\n100% STATEMENTS: run with age=20 → both lines covered ✓\n100% DECISIONS: need age=20 (IF=true) AND age=15 (IF=false) → more demanding\n→ 100% decision guarantees 100% statement, not vice versa"
  },
  {
    front: "Exploratory Testing",
    back: "TEST CHARTER:\n🎯 Objective: explore checkout flow on mobile with slow connection\n⏱ Duration: 45 minutes\n📱 Environment: iPhone 13, 3G network\n\nThe tester designs AND executes simultaneously, learning from the system.\nDocuments findings and defects during the session.\nUseful when documentation is scarce or time is short."
  },
  {
    front: "Error Guessing",
    back: "Based on tester EXPERIENCE.\nEx. for a login form:\n• Empty username/password field\n• Leading/trailing spaces in username\n• Special characters: ', --, <script>\n• Login with blocked account\n• 100 consecutive failed attempts\n→ Formalised with historical 'defect checklists'"
  },
  // ── Static Testing ───────────────────────────────────────
  {
    front: "Review Types (by formality)",
    back: "Less formal → More formal:\n1. Informal Review (buddy check, no process)\n2. Walkthrough (author leads)\n3. Technical Review (moderator, may be the author)\n4. Inspection (certified moderator, metrics, most formal)"
  },
  {
    front: "Inspection — roles and process",
    back: "Roles: Certified Moderator · Author · Reviewers · Scribe · Inspection Leader\n\nProcess:\n1. Planning\n2. Initiation (entry criteria)\n3. Individual review\n4. Inspection meeting\n5. Rework\n6. Follow-up (exit criteria + metrics)"
  },
  {
    front: "What does static analysis detect?",
    back: "Without executing code, tools like SonarQube detect:\n• Uninitialised variables\n• Dead code (never executed)\n• High cyclomatic complexity (>10 → hard to maintain)\n• Vulnerabilities: SQL injection, XSS, buffer overflow\n• Coding standard violations"
  },
  // ── Management ───────────────────────────────────────────
  {
    front: "Severity vs Priority",
    back: "Bug: company logo appears pixelated on homepage\n📊 SEVERITY: Low (cosmetic, does not affect functionality)\n🚨 PRIORITY: High (the CEO presents the site to investors tomorrow)\n\n→ Severity = technical impact (assigned by QA)\n→ Priority = business urgency (assigned by PO/client)"
  },
  {
    front: "Product Risk vs Project Risk",
    back: "🛍️ PRODUCT RISK (what can fail in the system?):\n• Payment module with complex legacy logic\n• New integration with undocumented bank API\n\n🗂️ PROJECT RISK (what can affect the team?):\n• Senior QA resigns in the week of launch\n• Vendor delivers the environment late"
  },
  {
    front: "Entry Criteria (DoR)",
    back: "Before starting to test the payment module:\n✓ Test environment configured (staging active)\n✓ Build 2.3.1 deployed and smoke test OK\n✓ Test card data available\n✓ Test cases reviewed and approved\n✓ Defect tool (Jira) accessible"
  },
  {
    front: "Exit Criteria (DoD)",
    back: "To close the system test cycle:\n✓ 95% of planned test cases executed\n✓ 100% of critical and high defects resolved\n✓ Open medium defects ≤ 5 (documented and accepted)\n✓ Requirements coverage ≥ 90%\n✓ Test report delivered and approved"
  },
  {
    front: "Defect Report — required fields",
    back: "Unique ID · Date · Author\nDescriptive title (what, where, when)\nSteps to reproduce (numbered, precise)\nExpected result vs actual result\nSeverity + Priority\nEnvironment (OS, browser, version)\nEvidence (screenshot, video, log)\nStatus: New → Assigned → In Progress → Resolved → Closed"
  },
  // ── Agile ────────────────────────────────────────────────
  {
    front: "TDD — Red-Green-Refactor cycle",
    back: "🔴 RED: write a test that FAILS\nEx: test_calculate_vat() expects 119, code returns 0 → FAILS\n\n🟢 GREEN: write the MINIMUM code to pass it\nEx: return price * 1.19\n\n🔵 REFACTOR: improve the code without breaking the test"
  },
  {
    front: "ATDD and BDD",
    back: "ATDD (Acceptance Test Driven Development):\nClient, QA and dev define acceptance criteria BEFORE coding\n\nBDD (Behavior Driven Development) — Gherkin language:\nGiven the user is on the login page\nWhen they enter username='admin' and password='admin123'\nThen they should see the main dashboard"
  },
  {
    front: "Agile Testing Quadrants",
    back: "Q1 (↙ Technology + Support): unit, integration, TDD\nQ2 (↘ Business + Support): functional, acceptance criteria\nQ3 (↗ Business + Critique): exploratory, usability, UAT\nQ4 (↖ Technology + Critique): performance, security, reliability\n→ A good agile team covers all 4 quadrants"
  },
  // ── Tools ────────────────────────────────────────────────
  {
    front: "Tools by category",
    back: "📋 Management: TestRail, Zephyr, Azure Test Plans\n🐛 Defects: Jira, GitHub Issues, Bugzilla\n⚙️ UI Automation: Selenium, Cypress, Playwright\n⚙️ Unit: JUnit, pytest, Jest\n📈 Performance: JMeter, k6, Gatling\n🔍 Static analysis: SonarQube, ESLint, Pylint"
  },
  {
    front: "Benefits vs Risks of automation",
    back: "✅ BENEFITS:\n• Faster and more frequent regression\n• Consistency (no 'human oversights')\n• Enables load testing (impossible manually)\n\n⚠️ RISKS:\n• High initial investment (scripts, infrastructure)\n• Costly maintenance when the system changes\n• Does not replace exploratory testing"
  },
  {
    front: "What CANNOT be automated well?",
    back: "❌ Exploratory testing (requires intuition and real-time learning)\n❌ Usability testing (is it easy for a human to use?)\n❌ End-user acceptance testing (UAT)\n❌ Ad hoc testing based on QA experience\n→ Automate what is stable and repetitive; keep the human for cognitive tasks"
  }
];

// ============================================================
// ENGLISH GLOSSARY (parallel to GLOSSARY array)
// ============================================================
const GLOS_EN = [
  { term: "Boundary Value Analysis (BVA)", definition: "A black-box test design technique that derives test cases from the boundary values of equivalence partitions." },
  { term: "Test basis", definition: "The set of documents used as reference for test analysis and design (requirements, design, code, etc.)." },
  { term: "Test case", definition: "A set of input conditions, preconditions, steps and expected results developed for a specific test objective." },
  { term: "Root cause", definition: "The fundamental reason why a defect occurred. Identifying it allows organisations to prevent similar defects in the future." },
  { term: "Coverage", definition: "The degree to which a specific coverage criterion has been satisfied during testing, expressed as a percentage." },
  { term: "Test condition", definition: "An aspect of the test object that can be verified by one or more test cases." },
  { term: "Entry criteria", definition: "Conditions that must be met before a planned testing activity can begin. Also called Definition of Ready." },
  { term: "Exit criteria", definition: "Conditions that must be met to conclude a testing activity. Also called Definition of Done." },
  { term: "Defect", definition: "An imperfection or deficiency in a work product that may cause the component or system to fail to meet its requirements." },
  { term: "Debugging", definition: "The process of finding, analysing and removing the causes of failures in software. It is a development activity, not a testing activity." },
  { term: "Error", definition: "A human action that produces an incorrect result, including writing code with defects." },
  { term: "Failure", definition: "Deviation of the component or system from its expected behaviour during operation." },
  { term: "Configuration management", definition: "A discipline that applies technical and administrative direction and surveillance to identify and document the characteristics of configuration items." },
  { term: "Inspection", definition: "The most formal type of static review. Includes a documented process, defined roles (certified moderator), entry/exit criteria and metrics." },
  { term: "Test level", definition: "A group of testing activities that are organised and managed together (component, integration, system, acceptance)." },
  { term: "Test object", definition: "The component or system to be analysed by testing." },
  { term: "Test oracle", definition: "A source that allows determination of whether the system under test has passed or failed a test (specification, prototype, past behaviour)." },
  { term: "Pesticide paradox", definition: "The phenomenon by which the same test cases executed repeatedly eventually stop finding new defects." },
  { term: "Equivalence partitioning", definition: "A test design technique that divides input data into partitions where all values behave in the same way." },
  { term: "Test plan", definition: "Documentation describing the objectives, scope, approach, resources and schedule of testing activities." },
  { term: "Failure probability", definition: "The probability that the component or system will produce a failure within a given period of time." },
  { term: "Test procedure", definition: "A sequence of test steps for the execution of one or more test cases." },
  { term: "Alpha testing", definition: "Acceptance testing of a software product performed at the developer's site by representatives of intended users." },
  { term: "Risk-based testing", definition: "A testing approach in which testing activities are prioritised and managed based on the level of product risk." },
  { term: "Beta testing", definition: "Acceptance testing of a software product performed by representatives of intended users at their own site." },
  { term: "Component testing", definition: "A test level that verifies the behaviour of a software component in isolation. Also called unit testing." },
  { term: "Regression testing", definition: "Testing of a previously tested system after modifications to detect defects introduced or not corrected." },
  { term: "Static testing", definition: "Testing that does not involve execution of the component or system under test (reviews, static analysis)." },
  { term: "Exploratory testing", definition: "An approach in which the tester simultaneously designs and executes tests, learning about the system during the session." },
  { term: "Product risk", definition: "A risk related directly to the test object, such as the possibility that the software fails in production." },
  { term: "Project risk", definition: "A risk related to the project, such as resource availability, deadlines or changing requirements." },
  { term: "Severity", definition: "The degree to which a defect impacts the development or operation of the system. Determined by the test team." },
  { term: "Decision table", definition: "A test design technique that represents combinations of input conditions and the resulting system actions." },
  { term: "Test type", definition: "A group of testing activities related to specific quality attributes (functional, performance, security, etc.)." },
  { term: "Traceability", definition: "The ability to identify and follow the relationship between work products (requirements → test cases → defects)." },
  { term: "Validation", definition: "Confirmation that the product satisfies the real needs of the user. Are we building the right product?" },
  { term: "Verification", definition: "Confirmation that the product meets the specified requirements. Are we building the product correctly?" }
];

// ============================================================
// ENGLISH EXAM QUESTIONS (parallel to EXAM_QUESTIONS array)
// ============================================================
const EXAM_EN = [
  // Chapter 1 - Fundamentals
  { question: "Which of the following is a testing objective according to ISTQB?", options: ["Prove that the software has no defects", "Provide information to stakeholders for informed decisions", "Guarantee that all tests are successful", "Replace code debugging"] },
  { question: "A tester executes software with input data and observes whether the behaviour matches the expected. This is an example of:", options: ["Static testing", "Dynamic testing", "Static analysis", "Code review"] },
  { question: "According to Principle 4 (defect clustering), what does this imply for test planning?", options: ["Distribute tests evenly across all modules", "Concentrate more effort on modules with the highest defect history", "Test the lowest-risk modules first", "Use only automated tests for complex modules"] },
  { question: "How does an error differ from a defect?", options: ["There is no difference; they are interchangeable terms", "The error is the human action; the defect is the resulting imperfection in the product", "The defect is the human action; the error is the system failure", "The error is detected by the tester; the defect by the developer"] },
  { question: "Which principle supports the practice of 'shift left' in testing?", options: ["Principle 1: Testing shows presence of defects", "Principle 3: Early testing saves time and money", "Principle 5: The pesticide paradox", "Principle 7: Absence-of-errors fallacy"] },
  { question: "Which of the following activities belongs to the 'Test Design' process?", options: ["Define testing objectives and approach", "Elaborate test cases and test data", "Execute test cases and record results", "Archive work products at completion"] },
  { question: "A flight control system passes all functional tests. However, pilots indicate the interface is not intuitive in emergency situations. Which principle applies?", options: ["Principle 1: Testing shows presence of defects", "Principle 4: Defect clustering", "Principle 7: Absence-of-errors fallacy", "Principle 5: Pesticide paradox"] },
  // Chapter 2 - SDLC
  { question: "Which test level verifies the communication between integrated modules?", options: ["Component testing", "Integration testing", "System testing", "Acceptance testing"] },
  { question: "In the V-Model, when are system test cases designed?", options: ["Only during the test execution phase", "At the same time as system design is developed", "After the entire system is coded", "During acceptance testing"] },
  { question: "Which test type verifies specifically that a defect fix has not introduced new defects in unmodified parts?", options: ["Confirmation testing", "Regression testing", "Integration testing", "Smoke testing"] },
  { question: "A customer uses the software in their real environment for 30 days before the official launch, without supervision from the development team. What type of testing is this?", options: ["Alpha testing", "Operational acceptance testing", "Beta testing", "System testing"] },
  { question: "Non-functional testing includes:", options: ["Verify that login accepts valid credentials", "Measure response time under 1000 concurrent users", "Check that the shopping cart calculates the total correctly", "Validate that the registration form accepts names with special characters"] },
  { question: "Which agile testing quadrant (Marick) corresponds to exploratory and usability testing?", options: ["Q1 - Team Support / Technology", "Q2 - Team Support / Business", "Q3 - Product Critique / Business", "Q4 - Product Critique / Technology"] },
  // Chapter 3 - Static Testing
  { question: "Which of the following is an example of static testing?", options: ["Run automated regression tests", "Review a requirements document for ambiguities", "Measure application response time", "Conduct usability testing with real users"] },
  { question: "What distinguishes an inspection from a technical review?", options: ["Inspection is less formal than a technical review", "Inspection has a certified moderator and formally collects metrics", "Technical review has entry and exit criteria; inspection does not", "There is no difference; they are equivalent review types"] },
  { question: "What type of defect is most likely to be detected by static analysis tools?", options: ["Contradictory requirements between documents", "Variables declared but never used in code", "Response time above threshold under load", "Error messages that confuse the user"] },
  { question: "In a walkthrough, who has the main role?", options: ["The independent moderator", "The author of the work product", "The test manager", "An external expert"] },
  // Chapter 4 - Techniques
  { question: "A field accepts passwords from 8 to 20 characters. Using equivalence partitioning, how many partitions are identified?", options: ["1", "2", "3", "4"] },
  { question: "For a field accepting values between 10 and 50, using 2-value BVA, which test values cover the boundaries?", options: ["10 and 50", "9, 10, 50 and 51", "10, 11, 49 and 50", "9 and 51"] },
  { question: "A discount system applies 10% if the purchase is over $100 AND the customer is VIP, or 5% if over $100 but customer is NOT VIP. Which technique is most suitable for designing exhaustive test cases?", options: ["Equivalence partitioning", "Boundary value analysis", "Decision table", "State transition testing"] },
  { question: "A tester wants to ensure all possible outcomes of each IF condition in the code have been evaluated as true and false. Which coverage level are they seeking?", options: ["Statement coverage", "Decision coverage", "Multiple condition coverage", "Modified condition/decision coverage"] },
  { question: "State transition testing is most suitable for testing:", options: ["A form with multiple independent input fields", "A traffic light control system that responds to external events", "Database performance under load", "Compatibility across different browsers"] },
  { question: "How many test cases are needed as a minimum to achieve 100% transition coverage in a diagram with 3 states and 4 valid transitions?", options: ["3 (one per state)", "4 (one per transition)", "7 (states + transitions)", "2 (one for initial and final state)"] },
  { question: "A tester uses intuition and experience to identify defect-prone areas and designs additional tests without prior documentation. This is called:", options: ["Exploratory testing", "Error guessing", "Checklist-based testing", "Root cause analysis"] },
  // Chapter 5 - Management
  { question: "What is the main advantage of having a test team independent from the development team?", options: ["Independent testers are always faster", "Greater ability to find defects by having a different perspective from the author", "They eliminate the need for developers to perform unit tests", "They reduce the overall project cost"] },
  { question: "Which of the following is the Test Manager's responsibility?", options: ["Design individual test cases", "Execute test cases and record results", "Plan testing and manage test process risks", "Develop test automation scripts"] },
  { question: "A cosmetic defect (spelling error on the home screen) receives High Priority because the CEO will show a demo tomorrow. Its Severity is Low. Does this contradict ISTQB principles?", options: ["Yes; priority must always match severity", "No; severity and priority are independent dimensions assigned by different roles", "Yes; cosmetic defects should not have high priority", "No; priority is assigned by the test manager based on technical severity"] },
  { question: "Which metric best indicates test process effectiveness?", options: ["Total number of test cases designed", "Percentage of defects found in testing vs found in production", "Speed of test execution in minutes", "Number of testers on the team"] },
  { question: "Risk-based testing means that system areas with the highest product risk receive:", options: ["Fewer tests to save resources", "More attention and testing effort", "Only automated tests", "Only functional tests"] },
  { question: "Which of the following is NOT typically part of a Test Plan?", options: ["Test objectives and scope", "Source code of the system under test", "Entry and exit criteria", "Schedule and effort estimates"] },
  { question: "What is the difference between product risk and project risk?", options: ["Product risk is always more serious than project risk", "Product risk refers to the possibility of system failure; project risk refers to factors affecting project management", "Project risk is only managed by the project manager, not the test manager", "There is no practical difference between them"] },
  // Chapter 6 - Tools
  { question: "What is the main benefit of test automation for regression testing?", options: ["It eliminates the need for human testers", "It allows repetitive tests to run faster and more consistently", "It automatically guarantees 100% code coverage", "It reduces the need to keep test cases up to date"] },
  { question: "A tool like SonarQube that analyses code for vulnerabilities without executing it is an example of:", options: ["Test management tool", "Static analysis tool", "Dynamic test automation framework", "Performance testing tool"] },
  { question: "Why does ISTQB recommend running a pilot project before implementing an automation tool?", options: ["To justify the budget to management", "To evaluate the tool in the real context and detect problems before full commitment", "Because automation tools always fail on the first attempt", "So testers can learn to use it without pressure"] },
  { question: "Which of the following is a real risk of automating tests?", options: ["Automated tests always find more defects than manual tests", "Unrealistic expectations about the return on investment of automation", "Automation tools are too expensive for SMEs", "Automation only works with web systems"] },
  // Mixed integration questions
  { question: "Which of the following statements about testing in an agile model is CORRECT?", options: ["Testing only occurs at the end of each sprint", "Testing is continuous and forms an integral part of each sprint", "In agile, no entry or exit criteria are needed", "Testers do not participate in sprint planning"] },
  { question: "A QA team discovers that the reporting module has 60% of all system defects, although it represents 15% of the code. What is the most appropriate action according to ISTQB principles?", options: ["Distribute tests evenly across all modules", "Concentrate more testing effort on the reporting module (defect clustering)", "Delete the reporting module and rewrite it completely", "Reduce testing on the reporting module since defects were already found"] },
  { question: "A tester designs test cases for a numeric field using equivalence partitioning AND boundary value analysis. Why combine both techniques?", options: ["To reduce the total number of test cases", "To achieve greater coverage: EP covers partition interiors; BVA covers edges where most defects occur", "Because ISTQB requires always using both techniques together", "Because EP alone cannot be applied to numeric fields"] },
  { question: "A system has passed all load and performance tests (Q4), but users in beta testing report that the checkout flow is confusing. In which quadrant should testing be reinforced?", options: ["Q1 - Team Support / Technology", "Q2 - Team Support / Business", "Q3 - Product Critique / Business", "Q4 - Product Critique / Technology"] },
  { question: "The ISTQB Foundation Level exam has:", options: ["50 questions, 75% to pass", "40 questions, 65% to pass (26/40)", "30 questions, 70% to pass", "40 questions, 70% to pass (28/40)"] }
];
