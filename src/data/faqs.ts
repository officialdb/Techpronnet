export interface FaqItem {
  id: string;
  category: "pricing" | "tech" | "ownership" | "security" | "support";
  question: string;
  answer: string;
}

export const faqsData: FaqItem[] = [
  // 1. Pricing & Scope
  {
    id: "pricing-1",
    category: "pricing",
    question: "How do you estimate and price bespoke software projects?",
    answer:
      "We provide transparent, milestone-based fixed pricing or dedicated sprint allocation depending on project scope. After our initial technical discovery session, we produce a detailed Statement of Work (SOW) outlining technical specifications, database architectures, milestone deliverables, and exact costs. You will never encounter hidden hourly surprise charges or scope drift.",
  },
  {
    id: "pricing-2",
    category: "pricing",
    question: "What is your typical timeline from discovery to production launch?",
    answer:
      "Timelines depend on functional scope. Typical delivery spans:\n• Web platforms & confidential intake portals: 4 to 8 weeks.\n• Mobile apps & cross-platform dispatch solutions: 8 to 14 weeks.\n• Complex enterprise ERPs & automated pipeline systems: 12 to 20 weeks.\nWe deploy working staging builds iteratively every two weeks so you can test features and verify progress continuously.",
  },
  {
    id: "pricing-3",
    category: "pricing",
    question: "How do you handle changes in project scope during development?",
    answer:
      "We utilize agile two-week sprint cadences. If new requirements emerge during development, we evaluate their architectural impact and present transparent options: swap an equivalent-effort feature within the existing budget, or schedule the addition for a subsequent milestone release.",
  },

  // 2. Tech Stack & Architecture
  {
    id: "tech-1",
    category: "tech",
    question: "What tech stack do you engineer with, and why?",
    answer:
      "We engineer high-performance systems with strict type safety and zero legacy bloat:\n• Frontend & SSR: Next.js 16 with React 19 and Tailwind CSS for sub-1s global load times.\n• Backend & APIs: Next.js Server Components, Server Actions, Node.js, and TypeScript.\n• Database: Neon Serverless Postgres with dedicated connection pooling and instant point-in-time restore.\n• Mobile: React Native with native performance on both iOS and Android.\n• Automation: Webhooks, background worker queues, and event-driven API pipelines.",
  },
  {
    id: "tech-2",
    category: "tech",
    question: "Why do you use Neon Serverless Postgres for databases?",
    answer:
      "Neon Serverless Postgres provides enterprise-grade reliability without the maintenance headache of self-managed database servers. It features automatic connection pooling that prevents high-traffic connection exhaustion, automated continuous daily backups, sub-30ms global query execution, and branchable database environments that allow safe schema migrations before production cutover.",
  },
  {
    id: "tech-3",
    category: "tech",
    question: "Can you integrate our new software with existing legacy systems or third-party APIs?",
    answer:
      "Yes. A core specialty of Techpronnet is bridging isolated tools. We build secure REST and GraphQL adapters, payment rails (Paystack, Flutterwave, Stripe), SMS/WhatsApp dispatch APIs, accounting software webhooks, and biometric/hardware telemetry feeds to unify your disparate systems into cohesive automated workflows.",
  },

  // 3. Code Ownership & IP
  {
    id: "ownership-1",
    category: "ownership",
    question: "Who owns the source code and intellectual property once deployed?",
    answer:
      "You do. 100%. Upon completion of payment milestones, full intellectual property and exclusive rights to the bespoke source code, database schemas, API definitions, and digital assets are formally transferred to your organization. Techpronnet retains zero proprietary claims over your software.",
  },
  {
    id: "ownership-2",
    category: "ownership",
    question: "Do we incur any recurring software license fees from Techpronnet?",
    answer:
      "No. We do not charge recurring software licenses, per-seat subscriber fees, or proprietary software taxes. You only pay for your actual cloud infrastructure providers (such as your domain registrar or serverless host), giving your business total financial sovereignty over its operational technology.",
  },
  {
    id: "ownership-3",
    category: "ownership",
    question: "Can our internal developers maintain or extend the codebase in the future?",
    answer:
      "Absolutely. We write self-documenting TypeScript code adhering to strict architectural seams and clean domain boundaries. Every project includes comprehensive architectural documentation, database entity relationship diagrams (ERDs), API endpoint schemas, and automated setup scripts so any senior engineer can onboard seamlessly.",
  },

  // 4. Security & Compliance
  {
    id: "security-1",
    category: "security",
    question: "How do you protect confidential company data and proprietary algorithms?",
    answer:
      "Security is engineered at every layer:\n• TLS 1.3 encryption in transit for all client-server communications.\n• AES-256 encryption at rest for all database tables and backups.\n• Role-based access control (RBAC) with granular session validation.\n• Zero exposure of API keys, environment variables, or database credentials on the client side.\n• Regular automated dependency vulnerability scanning.",
  },
  {
    id: "security-2",
    category: "security",
    question: "Do you sign Non-Disclosure Agreements (NDAs)?",
    answer:
      "Yes, as standard protocol. Before reviewing any proprietary business workflows, customer records, or financial models, we execute mutual non-disclosure agreements to guarantee strict legal confidentiality for your intellectual property.",
  },
  {
    id: "security-3",
    category: "security",
    question: "How are database backups and disaster recovery handled?",
    answer:
      "All client data in Neon Postgres is continuously snapshot-backed with point-in-time recovery capabilities. In the event of catastrophic data corruption or human error, we can restore the database state to any specific second within the retention window with zero data loss.",
  },

  // 5. Support & SLAs
  {
    id: "support-1",
    category: "support",
    question: "What happens after our digital platform goes live?",
    answer:
      "Every deployment includes a 30-day post-launch warranty during which any unexpected defects or performance issues are resolved immediately at zero additional cost. Following warranty completion, we offer dedicated monthly engineering SLA maintenance plans covering continuous uptime monitoring, security updates, and performance tuning.",
  },
  {
    id: "support-2",
    category: "support",
    question: "What are your guaranteed incident response times?",
    answer:
      "For clients on dedicated SLA maintenance agreements, our response commitments are:\n• Critical Outage (P1): Under 1 hour response with 24/7 emergency incident resolution.\n• Major Issue (P2): Under 4 business hours.\n• Standard Inquiry / Feature Request (P3): Within 24 business hours.",
  },
  {
    id: "support-3",
    category: "support",
    question: "How do you communicate with clients during active development?",
    answer:
      "We believe in radical transparency. You have direct communication channels with your assigned lead engineer via WhatsApp, Slack, or email. We host scheduled bi-weekly sprint review video calls with live deployment walkthroughs, ensuring you never feel disconnected from your product's evolution.",
  },
];
