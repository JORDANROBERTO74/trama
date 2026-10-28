import type { ControlIconId, Dictionary, FeatureIconId } from "./en";

export const es: Dictionary = {
  meta: {
    title: "Trama — El motor que entiende tu negocio para tus agentes de IA",
    description:
      "Trama convierte un stack SaaS fragmentado en una única capa operativa: agentes que entienden tu lógica de negocio, actúan entre sistemas y se detienen en los límites que defines.",
    ogTagline: "Ejecución con contexto de negocio para agentes de IA.",
  },
  nav: {
    brand: "Trama",
    links: [
      { label: "Servicio", href: "#service" },
      { label: "Funciones", href: "#features" },
      { label: "Plataforma", href: "#control-panel" },
      { label: "Gobierno", href: "#governance" },
      { label: "Piloto", href: "#pilot" },
    ],
    cta: "Reservar piloto",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    localeLabel: "Idioma",
  },
  hero: {
    eyebrow: "Inteligencia operativa para trabajo autónomo",
    headline: {
      line1: "El motor que entiende",
      line2: "tu negocio, para",
      line3: "tus agentes",
    },
    subtitle:
      "Trama convierte un stack SaaS fragmentado en una sola capa de ejecución: agentes que entienden la intención, actúan entre sistemas y se detienen en los límites que tú defines.",
    ctas: {
      primary: "Ver el panel de control",
      secondary: "Ver soluciones",
    },
    console: {
      initials: "TR",
      agentName: "Agente de protección de ingresos",
      agentStatus: "Vigilando riesgo de fuga",
      messages: [
        {
          role: "user" as const,
          text: "Necesitamos evitar fugas. Publica en el canal del equipo cuando aparezcan quejas de precio en los tickets de soporte.",
        },
        {
          role: "agent" as const,
          text: "Intención probable: mitigar la fuga detectando quejas de precio en soporte. Voy a redactar un flujo de alerta de precios en tickets.",
        },
        {
          role: "agent" as const,
          text: "Plan borrador: buscar tickets recientes → clasificar señales de fuga → cruzar contexto de cuenta → avisar al canal de retención.",
        },
        {
          role: "agent" as const,
          text: "Verdad operativa: cola de tickets, cuentas del CRM, historial de facturación. Guardarraíles activos — policy.approval_gate.passed.",
        },
        {
          role: "agent" as const,
          text: "Responde con los datos que falten o escribe start para ver el plan ejecutable.",
        },
      ],
    },
  },
  stack: {
    label: "Integraciones",
    title: "Conecta tu stack operativo",
    cta: "Ver soluciones",
    items: ["CRM", "Tickets", "Facturación", "Almacén de datos", "Chat de equipo", "Identidad"],
  },
  features: {
    title: "Nuestras funciones",
    intro:
      "Trama es la capa de inteligencia central que convierte tu stack SaaS y tus herramientas internas en un motor de ejecución con contexto de negocio. Un grafo operativo de conocimiento codifica tu lógica para dar contexto real a la IA, y los guardarraíles permiten automatizar flujos complejos entre áreas con precisión.",
    items: [
      {
        icon: "brain" as FeatureIconId,
        title: "Capa de inteligencia central",
        description:
          "Un cerebro unificado que orquesta datos, aprobaciones, herramientas y lógica de negocio en toda la organización.",
      },
      {
        icon: "zap" as FeatureIconId,
        title: "Motor de ejecución con contexto",
        description:
          "Va más allá de la automatización simple: entiende la intención, los objetivos de la empresa y el estado real de la operación.",
      },
      {
        icon: "network" as FeatureIconId,
        title: "Grafo operativo de conocimiento",
        description:
          "Mapea relaciones entre clientes, sistemas, tickets, herramientas y políticas para dar contexto real a la IA.",
      },
      {
        icon: "shield" as FeatureIconId,
        title: "Guardarraíles de seguridad",
        description:
          "Límites deterministas que mantienen las acciones sensibles auditables y derivan a una persona cuando hace falta.",
      },
      {
        icon: "workflow" as FeatureIconId,
        title: "Flujos entre áreas",
        description:
          "Conecta procesos entre departamentos, herramientas SaaS, infraestructura y colas de soporte.",
      },
    ],
  },
  demos: {
    title: "Míralo en acción",
    swipeHint: "Desliza para ver más",
    intro:
      "Las demos muestran cómo Trama conecta el chat del equipo, los sistemas en vivo, la orquestación, la evaluación de riesgo y el gobierno en flujos críticos de ingresos. Cada historia corre de punta a punta con su canal, sus señales y un resultado auditable.",
    items: [
      {
        company: "Detección de riesgo de fuga",
        quote:
          "De un hilo desordenado en #enterprise-support a la detección de riesgo, la orquestación y una respuesta del agente con gobierno.",
        name: "#enterprise-support",
        role: "Orquestación de Trama: esperando el enrutado de menciones del canal…",
      },
      {
        company: "Patrón de migración silenciosa",
        quote:
          "De señales en #customer-ops a la detección de migración silenciosa, la síntesis de evidencia y la escalada con rastro de auditoría.",
        name: "#customer-ops",
        role: "Orquestación de Trama: esperando el enrutado de menciones del canal…",
      },
      {
        company: "Descubrimiento de expansión",
        quote:
          "De una pregunta en #sales a una lista de upgrades priorizada y una respuesta gobernada en el canal.",
        name: "#sales",
        role: "Oportunidades de expansión: esperando la síntesis de evidencia…",
      },
      {
        company: "Consolidación de cuentas",
        quote:
          "De señales de facturación en #revops a grupos de compra mapeados y una respuesta gobernada sobre el acuerdo.",
        name: "#revops",
        role: "Consolidación de cuentas: esperando la síntesis de evidencia…",
      },
    ],
  },
  platform: {
    section: {
      title: "Panel de control",
      headline: "La cabina de mando para agentes, herramientas y verdad operativa.",
      intro:
        "El panel expone las superficies que necesita un operador: ejecución de comandos, planes borrador, controles de despliegue, mapas de negocio, gobierno y flujos de tickets.",
    },
    nav: {
      brand: "Trama",
      product: ["Panel", "Automatización", "Centro de mando", "Ejecuciones", "Gobierno"],
      groups: [
        {
          label: "Operar",
          items: [
            { label: "Automatizaciones", active: false },
            { label: "Ejecuciones", active: false },
            { label: "Centro de mando", active: true },
          ],
        },
        {
          label: "Gobernar",
          items: [
            { label: "Registro de gobierno", active: false },
            { label: "Políticas", active: false },
          ],
        },
      ],
      input: "Describe un objetivo para tus agentes…",
      run: "Ejecutar",
    },
    explorer: {
      query:
        "Flujo de prevención de fuga — encuentra quejas de precio, identifica riesgo y avisa a retención antes de que el cliente se vaya.",
      summary:
        "Flujos operativos: automatizaciones desplegadas por calendario, evento y API, con guardarraíles activos.",
      metric: {
        label: "Tickets totales",
        value: "26.797",
        trend: "79,7 % automatizado",
      },
      header: "Automatizaciones",
      successRate: "Tasa de éxito 99,8 %",
      rows: [
        {
          name: "Alerta de ticket con riesgo de fuga",
          owner: "Agente de protección de ingresos",
          state: "Activo",
          positive: true,
        },
        {
          name: "Seguimiento de cliente en riesgo",
          owner: "Agente de protección de ingresos",
          state: "En pausa",
          positive: false,
        },
        {
          name: "Informe semanal de señales de fuga",
          owner: "Agente de protección de ingresos",
          state: "Activo",
          positive: true,
        },
        { name: "GET /api/v2/search", owner: "HTTP 200", state: "Listo", positive: true },
        { name: "Formatear datos del ticket", owner: "Agente", state: "Listo", positive: true },
      ],
    },
    build: {
      title: "Centro de mando y plan borrador",
      badge: "Panel de control",
      build: {
        title: "Centro de mando",
        description:
          "Describe un objetivo, observa cómo los agentes forman el plan y mantén a las personas en el circuito.",
        panelTitle: "Centro de mando",
        userMessage:
          "Necesitamos evitar fugas. Publica en el canal del equipo cuando aparezcan quejas de precio en los tickets.",
        systemNote:
          "Flujo de alerta de precios en tickets — #retention-alerts · 0/5 pasos",
        checklist: [
          { label: "human_input — Indicar start_time", done: true },
          { label: "api_call — Buscar tickets recientes", done: true },
          { label: "agent_task — Filtrar quejas de precio", done: true },
          { label: "condition — Comprobar coincidencias", done: false },
          { label: "channel_message — Avisar a #retention-alerts", done: false },
        ],
        inputPlaceholder: "Ajusta el plan o escribe execute para lanzarlo…",
      },
      optimize: {
        title: "Plan borrador",
        description:
          "Llamadas de API, tareas de agente, condiciones, pasos de canal y puertas de aprobación se leen de un vistazo.",
        recommendations: [
          {
            text: "Controles de despliegue: elige ejecución por calendario, evento, API o manual con el agente y los guardarraíles correctos.",
            highlighted: false,
          },
          {
            text: "Registro de gobierno: cada ejecución, aprobación, usuario, fuente y decisión de política queda como evidencia.",
            highlighted: true,
          },
          {
            text: "Automatización manual: ejecuta a demanda — prueba antes de desplegar.",
            highlighted: false,
          },
        ],
        actions: ["Probar", "Desplegar automatización"],
      },
    },
    capabilities: {
      title: "Despliega y gobierna cada flujo",
      badge: "Panel de control",
      items: [
        {
          id: "explorer",
          title: "Centro de mando",
          description:
            "Describe un objetivo, observa cómo los agentes forman el plan y mantén a las personas en el circuito.",
        },
        {
          id: "monitors",
          title: "Plan borrador",
          description:
            "Llamadas de API, tareas de agente, condiciones, pasos de canal y puertas de aprobación se leen de un vistazo.",
        },
        {
          id: "experiments",
          title: "Controles de despliegue",
          description:
            "Elige ejecución por calendario, evento, API o manual con el agente y los guardarraíles correctos.",
        },
        {
          id: "observability",
          title: "Registro de gobierno",
          description:
            "Cada ejecución, aprobación, usuario, fuente y decisión de política queda como evidencia.",
        },
      ],
    },
    data: {
      title: "Una capa operativa para agentes que entienden el negocio.",
      badge: "Palanca operativa",
      items: [
        {
          id: "agent-memory",
          title: "Inteligencia unificada",
          description: "Mapea sistemas, campos, relaciones, herramientas y políticas.",
        },
        {
          id: "customer-data",
          title: "Ejecución autónoma",
          description: "Decide, compone, enruta, espera, aprueba y deriva.",
        },
        {
          id: "recommendations",
          title: "Gobierno operativo",
          description:
            "Aplica roles, políticas, operaciones permitidas y colas de aprobación.",
        },
        {
          id: "proactive-engagement",
          title: "Riesgo operativo",
          description:
            "Las acciones de alto riesgo esperan aprobación, cada decisión queda registrada y los patrones mejoran la siguiente ejecución.",
        },
      ],
      bullets: [
        {
          title: "Contexto más rápido.",
          body: "Los agentes parten de un mapa de negocio aprobado: saben qué sistema consultar y qué acción está permitida.",
        },
        {
          title: "Trabajo entre sistemas.",
          body: "Una sola petición puede aprovisionar infraestructura, actualizar tickets, consultar analítica y esperar procesos largos.",
        },
        {
          title: "Riesgo bajo control.",
          body: "Las acciones de alto riesgo esperan aprobación, cada decisión queda registrada y los patrones mejoran la siguiente ejecución.",
        },
      ],
    },
  },
  governance: {
    title: "Gobierno",
    headline: "Controles claros para una autonomía con contexto.",
    intro:
      "El gobierno da a los operadores los límites y el rastro de evidencia que necesitan: alcance de miembros, capacidades por rol, reglas de política, contexto de aprobación y un registro inmutable de cada acción relevante del agente.",
    controls: [
      {
        icon: "approval" as ControlIconId,
        title: "Aprobación humana",
        description:
          "Los pasos de alto riesgo se detienen con el contexto necesario para aprobar, rechazar o reencaminar la acción.",
      },
      {
        icon: "audit" as ControlIconId,
        title: "Registro inmutable",
        description:
          "Cada ejecución guarda el agente, el flujo, la intervención humana, la fuente de datos y la decisión de política.",
      },
      {
        icon: "credentials" as ControlIconId,
        title: "Credenciales acotadas",
        description:
          "Los agentes solo alcanzan los sistemas y campos que permite su rol, con credenciales fuera del prompt.",
      },
      {
        icon: "residency" as ControlIconId,
        title: "Residencia de datos",
        description:
          "Cada espacio de trabajo se fija a una región: los datos operativos se quedan donde manda tu política.",
      },
      {
        icon: "training" as ControlIconId,
        title: "Sin entrenamiento con tus datos",
        description:
          "El contenido del cliente se usa para ejecutar tus flujos, nunca para entrenar modelos compartidos.",
      },
    ],
  },
  pilot: {
    title: "Piloto de 30 días",
    headline: "Empieza con un flujo crítico de ingresos.",
    body: "Elige onboarding, respuesta técnica en preventa, triaje de incidentes, operaciones reguladas o recuperación de servicio. Toma la línea base, automatiza en modo supervisado y mide ciclo, throughput, calidad e impacto proyectado en ingresos.",
    metrics: [
      { from: "14d", to: "3-5d de ciclo de onboarding" },
      { from: "72h", to: "menos de 8h de respuesta técnica" },
      { from: "4,5h", to: "1,6h de resolución de incidentes" },
      { from: "30-50%", to: "más throughput operativo" },
    ],
    targetLabel: "Objetivos del piloto",
    ctas: {
      primary: "Diseñar un flujo",
      secondary: "Revisar gobierno",
    },
  },
  footer: {
    brand: "Trama",
    tagline: "El motor que entiende tu negocio para tus agentes de IA.",
    columns: {
      Product: ["Centro de mando", "Automatización", "Ejecuciones", "Gobierno", "Catálogo de datos"],
      Solutions: [
        "Protección proactiva de ingresos",
        "Ejecución autónoma de flujos",
        "Inteligencia operativa",
        "Gobierno operativo",
      ],
      Demos: [
        "Detección de riesgo de fuga",
        "Patrón de migración silenciosa",
        "Descubrimiento de expansión",
        "Consolidación de cuentas",
      ],
      Company: ["Servicio", "Funciones", "Plataforma", "Demos", "Piloto"],
    },
    legal: ["Política de privacidad", "Términos y condiciones", "Preferencias de cookies"],
    copyright: "© 2026 Trama",
  },
  notFound: {
    brand: "Trama",
    title: "Aquí no hay nada tejido.",
    body: "La página que buscas no existe o cambió de sitio.",
    cta: "Volver al sitio",
  },
};
