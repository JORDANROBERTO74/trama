export type FeatureIconId = "brain" | "zap" | "network" | "shield" | "workflow";

export type ControlIconId =
  | "approval"
  | "audit"
  | "credentials"
  | "residency"
  | "training";
export type ImproveAiFeatureId = "explorer" | "monitors" | "experiments" | "observability";

export type DataPlatformFeatureId =
  | "agent-memory"
  | "customer-data"
  | "recommendations"
  | "proactive-engagement";

export const en = {
  meta: {
    title: "Trama — The business-aware engine for your AI agents",
    description:
      "Trama turns a fragmented SaaS stack into one operational layer: agents that read your business logic, act across systems and stop at the guardrails you set.",
    ogTagline: "Business-aware execution for AI agents.",
  },
  nav: {
    brand: "Trama",
    links: [
      { label: "Service", href: "#service" },
      { label: "Features", href: "#features" },
      { label: "Platform", href: "#control-panel" },
      { label: "Governance", href: "#governance" },
      { label: "Pilot", href: "#pilot" },
    ],
    cta: "Book a pilot",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    localeLabel: "Language",
  },
  hero: {
    eyebrow: "Operational intelligence for autonomous work",
    headline: {
      line1: "The business-aware",
      line2: "engine for",
      line3: "your AI agents",
    },
    subtitle:
      "Trama converts a fragmented SaaS stack into a single execution layer: agents that understand intent, act across systems and stop at the guardrails you define.",
    ctas: {
      primary: "Explore the control panel",
      secondary: "View solutions",
    },
    console: {
      initials: "TR",
      agentName: "Revenue Protection Agent",
      agentStatus: "Listening for retention risk",
      messages: [
        {
          role: "user" as const,
          text: "We need to avoid churn. Post in the team channel when pricing complaints appear in support tickets.",
        },
        {
          role: "agent" as const,
          text: "Likely intent: proactively mitigate churn by identifying pricing concerns in support tickets. I'll draft a Support Ticket Pricing Alert workflow.",
        },
        {
          role: "agent" as const,
          text: "Current draft plan: fetch recent tickets → classify churn signals → match account context → notify retention channel.",
        },
        {
          role: "agent" as const,
          text: "Operational truth: ticket queue, CRM accounts, billing history. Guardrails active — policy.approval_gate.passed.",
        },
        {
          role: "agent" as const,
          text: "Reply with missing details, or say start when you want the runnable plan.",
        },
      ],
    },
  },
  stack: {
    label: "Integrations",
    title: "Connect your operational stack",
    cta: "View solutions",
    items: ["CRM", "Ticketing", "Billing", "Data warehouse", "Team chat", "Identity"],
  },
  features: {
    title: "Our features",
    intro:
      "Trama is the central intelligence layer that turns your fragmented SaaS stack and internal tools into a business-aware execution engine. An operational knowledge graph encodes your unique business logic to give AI real-world context, and guardrails let you automate complex, cross-functional workflows with precision.",
    items: [
      {
        icon: "brain" as FeatureIconId,
        title: "Central intelligence layer",
        description:
          "A unified brain orchestrating data, approvals, tools and business logic across your entire organisation.",
      },
      {
        icon: "zap" as FeatureIconId,
        title: "Business-aware execution engine",
        description:
          "Moves beyond simple automation by understanding intent, company goals and the state of live operations.",
      },
      {
        icon: "network" as FeatureIconId,
        title: "Operational knowledge graph",
        description:
          "Maps relationships between customers, systems, tickets, tools and policies to give AI real-world context.",
      },
      {
        icon: "shield" as FeatureIconId,
        title: "Safety guardrails",
        description:
          "Deterministic boundaries keep sensitive actions compliant, auditable and routed to humans when needed.",
      },
      {
        icon: "workflow" as FeatureIconId,
        title: "Cross-functional workflows",
        description:
          "Connect processes across fragmented departments, SaaS tools, infrastructure systems and support queues.",
      },
    ],
  },
  demos: {
    title: "See it in action",
    swipeHint: "Swipe for more",
    intro:
      "Interactive demos show how Trama connects team chat, live systems, orchestration, risk assessment and governance in revenue-critical workflows. Each story runs end to end with its own channel, signals and audit-ready outcome.",
    items: [
      {
        company: "Churn risk detection",
        quote:
          "From a messy #enterprise-support thread to churn risk detection, orchestration and a governed agent reply.",
        name: "#enterprise-support",
        role: "Trama orchestration: waiting for channel mention routing…",
      },
      {
        company: "Silent migration pattern",
        quote:
          "From #customer-ops signals to silent migration detection, evidence synthesis and escalation with audit trail.",
        name: "#customer-ops",
        role: "Trama orchestration: waiting for channel mention routing…",
      },
      {
        company: "Expansion opportunity discovery",
        quote:
          "From a #sales question to a ranked upgrade list and a governed channel reply.",
        name: "#sales",
        role: "Expansion opportunities: awaiting evidence synthesis…",
      },
      {
        company: "Account consolidation discovery",
        quote:
          "From #revops billing signals to mapped buying groups and a governed enterprise agreement reply.",
        name: "#revops",
        role: "Account consolidation: awaiting evidence synthesis…",
      },
    ],
  },
  platform: {
    section: {
      title: "Control panel",
      headline: "The cockpit for agents, tools and operational truth.",
      intro:
        "The control panel exposes the surfaces operators need: command execution, draft plans, deploy controls, business maps, governance and ticket workflows.",
    },
    nav: {
      brand: "Trama",
      product: ["Dashboard", "Automation", "Command Center", "Executions", "Governance"],
      groups: [
        {
          label: "Operate",
          items: [
            { label: "Automations", active: false },
            { label: "Executions", active: false },
            { label: "Command Center", active: true },
          ],
        },
        {
          label: "Govern",
          items: [
            { label: "Governance Logs", active: false },
            { label: "Policies", active: false },
          ],
        },
      ],
      input: "Describe a goal for your agents…",
      run: "Run",
    },
    explorer: {
      query:
        "Churn prevention workflow — find pricing complaints, identify churn risk and notify retention before the customer leaves.",
      summary:
        "Operational automation workflows: deployed scheduled, event-driven and API-driven automations with guardrails active.",
      metric: {
        label: "Total tickets",
        value: "26,797",
        trend: "79.7% automated",
      },
      header: "Automations",
      successRate: "Success rate 99.8%",
      rows: [
        {
          name: "Churn risk ticket alert",
          owner: "Revenue Protection Agent",
          state: "Active",
          positive: true,
        },
        {
          name: "At-risk customer follow-up",
          owner: "Revenue Protection Agent",
          state: "Paused",
          positive: false,
        },
        {
          name: "Weekly churn signal report",
          owner: "Revenue Protection Agent",
          state: "Active",
          positive: true,
        },
        { name: "GET /api/v2/search", owner: "HTTP 200", state: "Done", positive: true },
        { name: "Format ticket data", owner: "Agent", state: "Done", positive: true },
      ],
    },
    build: {
      title: "Command Center & draft plan",
      badge: "Control panel",
      build: {
        title: "Command Center",
        description:
          "Describe a goal, watch agents form the plan and keep humans in the loop.",
        panelTitle: "Command Center",
        userMessage:
          "We need to avoid churn. Post in the team channel when pricing complaints appear in support tickets.",
        systemNote:
          "Support Ticket Pricing Alert workflow — #retention-alerts · 0/5 steps",
        checklist: [
          { label: "human_input — Provide start_time", done: true },
          { label: "api_call — Fetch recent tickets", done: true },
          { label: "agent_task — Filter for pricing complaints", done: true },
          { label: "condition — Check for matches", done: false },
          { label: "channel_message — Notify #retention-alerts", done: false },
        ],
        inputPlaceholder: "Refine the plan or type execute to run it…",
      },
      optimize: {
        title: "Draft plan",
        description:
          "API calls, agent tasks, conditions, channel steps and approval gates stay readable.",
        recommendations: [
          {
            text: "Deploy controls: choose schedule, event, API or manual runs with the right agent and guardrails.",
            highlighted: false,
          },
          {
            text: "Governance logs: every execution, approval, user, source and policy decision becomes evidence.",
            highlighted: true,
          },
          {
            text: "Manual automation: run on demand — test run before deploying.",
            highlighted: false,
          },
        ],
        actions: ["Test run", "Deploy automation"],
      },
    },
    capabilities: {
      title: "Deploy and govern every workflow",
      badge: "Control panel",
      items: [
        {
          id: "explorer",
          title: "Command Center",
          description:
            "Describe a goal, watch agents form the plan and keep humans in the loop.",
        },
        {
          id: "monitors",
          title: "Draft plan",
          description:
            "API calls, agent tasks, conditions, channel steps and approval gates stay readable.",
        },
        {
          id: "experiments",
          title: "Deploy controls",
          description:
            "Choose schedule, event, API or manual runs with the right agent and guardrails.",
        },
        {
          id: "observability",
          title: "Governance logs",
          description:
            "Every execution, approval, user, source and policy decision becomes evidence.",
        },
      ],
    },
    data: {
      title: "One operating layer for agents that understand the business.",
      badge: "Operational leverage",
      items: [
        {
          id: "agent-memory",
          title: "Unified intelligence",
          description: "Map systems, fields, relationships, tools and policies.",
        },
        {
          id: "customer-data",
          title: "Autonomous execution",
          description: "Decide, compose, route, wait, approve and hand off.",
        },
        {
          id: "recommendations",
          title: "Operational governance",
          description:
            "Apply roles, policies, allowed operations and approval queues.",
        },
        {
          id: "proactive-engagement",
          title: "Operational risk",
          description:
            "High-risk actions pause for approval, every decision is logged and patterns improve the next run.",
        },
      ],
      bullets: [
        {
          title: "Get context faster.",
          body: "Agents start from an approved business map, so they know which system to query and which action is allowed.",
        },
        {
          title: "Run work across systems.",
          body: "One request can provision infrastructure, update tickets, check analytics and wait for long-running jobs.",
        },
        {
          title: "Manage operational risk.",
          body: "High-risk actions pause for approval, every decision is logged and patterns improve the next run.",
        },
      ],
    },
  },
  governance: {
    title: "Governance",
    headline: "Clear controls for business-aware autonomy.",
    intro:
      "Governance gives operators the guardrails and evidence trail they need: membership scope, role capabilities, policy rules, approval context and an immutable log for every important agent action.",
    controls: [
      {
        icon: "approval" as ControlIconId,
        title: "Human approval gates",
        description:
          "High-risk steps pause with the full context needed to approve, reject or reroute the action.",
      },
      {
        icon: "audit" as ControlIconId,
        title: "Immutable audit log",
        description:
          "Every run records the agent, workflow, human input, data source and policy decision behind it.",
      },
      {
        icon: "credentials" as ControlIconId,
        title: "Scoped credentials",
        description:
          "Agents only reach the systems and fields their role allows, with credentials held outside the prompt.",
      },
      {
        icon: "residency" as ControlIconId,
        title: "Data residency",
        description:
          "Workspaces pin to a region, so operational data stays where your policy says it should.",
      },
      {
        icon: "training" as ControlIconId,
        title: "No training on your data",
        description:
          "Customer content is used to run your workflows, never to train shared models.",
      },
    ],
  },
  pilot: {
    title: "30-day pilot",
    headline: "Start with one revenue-critical workflow.",
    body: "Pick onboarding, technical deal response, incident triage, regulated operations or service recovery. Baseline it, automate it in supervised mode, then measure cycle time, throughput, quality and projected revenue impact.",
    metrics: [
      { from: "14d", to: "3-5d onboarding cycle" },
      { from: "72h", to: "under 8h technical response" },
      { from: "4.5h", to: "1.6h incident resolution" },
      { from: "30-50%", to: "more operations throughput" },
    ],
    targetLabel: "Pilot targets",
    ctas: {
      primary: "Design a workflow",
      secondary: "Review governance",
    },
  },
  footer: {
    brand: "Trama",
    tagline: "The business-aware engine for your AI agents.",
    columns: {
      Product: ["Command Center", "Automation", "Executions", "Governance", "Data catalog"],
      Solutions: [
        "Proactive revenue protection",
        "Autonomous workflow execution",
        "Operational intelligence",
        "Operational governance",
      ],
      Demos: [
        "Churn risk detection",
        "Silent migration pattern",
        "Expansion opportunity discovery",
        "Account consolidation discovery",
      ],
      Company: ["Service", "Features", "Platform", "Demos", "Pilot"],
    },
    legal: ["Privacy policy", "Terms & conditions", "Cookie preferences"],
    copyright: "© 2026 Trama",
  },
  notFound: {
    brand: "Trama",
    title: "Nothing woven here.",
    body: "The page you are looking for does not exist or has moved.",
    cta: "Back to the site",
  },
};

export type Dictionary = typeof en;
