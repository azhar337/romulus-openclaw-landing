import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const H2 = "text-2xl lg:text-3xl font-semibold";
const H3 = "text-xl font-semibold";
const P = "text-muted-foreground leading-8";

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 space-y-14">
        <section className="space-y-4">
          <p className="text-sm font-medium text-primary">Auralenia Whitepaper · Research Edition v3.0 · March 2026</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-balance">
            Auralenia: Financial Infrastructure for the AI-Only Economy
          </h1>
          <p className="text-lg text-muted-foreground leading-8">
            This document presents Auralenia’s full research framework for building AI-native banking and programmable
            financial infrastructure. It includes economic rationale, systems architecture, policy logic, risk controls,
            compliance operations, implementation roadmap, and measurable success criteria.
          </p>
          <div className="rounded-xl border bg-muted/30 p-5 text-sm text-muted-foreground space-y-2">
            <p><span className="font-medium text-foreground">Document objective:</span> define an implementation-grade blueprint that can be executed by product, engineering, risk, and compliance teams.</p>
            <p><span className="font-medium text-foreground">Scope:</span> account orchestration, payment rails abstraction, policy engine, audit/ledger core, and AI-execution governance.</p>
            <p><span className="font-medium text-foreground">Audience:</span> fintech operators, infra engineers, regulators/partners, and institutional buyers.</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className={H2}>Abstract</h2>
          <p className={P}>
            AI systems are transitioning from advisory interfaces to operational actors that make and execute decisions.
            Financial operations, however, remain human-first and fragmented across bank portals, payout providers,
            treasury spreadsheets, and compliance workflows. This mismatch creates friction, risk, and constrained scale.
            Auralenia proposes a programmable financial operating layer where account structures, transaction rules,
            payment execution, and audit traceability are machine-enforceable and policy-governed. The platform enables
            autonomous systems to participate in economic activity while preserving institutional controls.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className={H2}>1. Research Context and Problem Space</h2>
          <h3 className={H3}>1.1 Structural mismatch</h3>
          <p className={P}>
            AI applications can automate marketing, support, and operations, but transactional finance remains constrained
            by manual approval paths and disconnected systems. Teams can decide faster than they can settle value.
          </p>
          <h3 className={H3}>1.2 Operational pain points</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-8">
            <li>Fragmented account ownership and inconsistent permission models.</li>
            <li>Delayed payout and vendor settlement cycles.</li>
            <li>Weak linkage between decision context and transaction audit evidence.</li>
            <li>Manual exception handling that fails at high volume.</li>
            <li>Compliance checks bolted on after execution rather than before it.</li>
          </ul>
          <h3 className={H3}>1.3 Economic impact</h3>
          <p className={P}>
            The cost of fragmented financial execution appears as missed discounts, delayed collections, reconciliation
            overhead, fraud exposure windows, and reduced experimentation speed. AI-native firms require a control plane
            where money operations become as programmable as software deployment.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className={H2}>2. Core Thesis</h2>
          <p className={P}>
            The AI economy will not scale on unrestricted autonomy. It will scale on policy-bound autonomy: systems that
            can execute financial actions continuously under enforceable constraints and measurable accountability.
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-muted-foreground leading-8">
            <li>Every autonomous actor requires scoped financial identity.</li>
            <li>Every transaction requires deterministic policy evaluation.</li>
            <li>Every execution requires traceable intent-to-settlement lineage.</li>
            <li>Every anomaly requires fast intervention and reversible control paths.</li>
          </ol>
        </section>

        <section className="space-y-6">
          <h2 className={H2}>3. Auralenia Reference Architecture</h2>

          <h3 className={H3}>3.1 Control Plane vs Data Plane</h3>
          <p className={P}>
            Auralenia separates decision governance (control plane) from transaction throughput (data plane).
            Control plane manages identity, policy, approvals, and observability. Data plane handles low-latency
            payment instruction routing, status propagation, and settlement updates.
          </p>

          <h3 className={H3}>3.2 Account Orchestration Service</h3>
          <p className={P}>
            Hierarchical account trees map organization, product, team, and agent scopes. Sub-accounts isolate budgets
            and permissions. This model prevents cross-domain leakage and supports precise financial attribution.
          </p>

          <h3 className={H3}>3.3 Intent API and Execution Router</h3>
          <p className={P}>
            Financial actions are created as intents, not immediate raw transfers. Intents pass through policy checks,
            optional approval gates, then route to optimal rails based on cost, latency, currency, and risk profile.
            Router decisions are persisted with reason codes.
          </p>

          <h3 className={H3}>3.4 Unified Ledger and Reconciliation</h3>
          <p className={P}>
            Internal ledger stores canonical transaction state with immutable event logs. Reconciliation workers compare
            expected balances against external provider states and produce discrepancy objects with severity and repair
            workflow references.
          </p>

          <h3 className={H3}>3.5 Observability Stack</h3>
          <p className={P}>
            Telemetry spans API calls, policy evaluations, rail latency, failure classes, retry behavior, and exception
            resolution time. Alerting is mapped to operational runbooks for incident response.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className={H2}>4. Policy Engine: Deterministic Financial Governance</h2>
          <h3 className={H3}>4.1 Policy primitives</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-8">
            <li>Amount thresholds (per transaction/day/week/month).</li>
            <li>Velocity controls (frequency and burst ceilings).</li>
            <li>Counterparty constraints (allowlist/denylist/reputation tiers).</li>
            <li>Category and region restrictions.</li>
            <li>Time-window and business-hour rules.</li>
            <li>Conditional approvals (single, dual, quorum).</li>
          </ul>

          <h3 className={H3}>4.2 Evaluation model</h3>
          <p className={P}>
            Policies compile into deterministic evaluation graphs. Each intent receives a verdict set:
            <span className="font-medium text-foreground"> allow</span>,
            <span className="font-medium text-foreground"> deny</span>, or
            <span className="font-medium text-foreground"> require-approval</span>.
            Verdicts include evidence payloads for audit replay.
          </p>

          <h3 className={H3}>4.3 Versioning and explainability</h3>
          <p className={P}>
            Every policy update is versioned and signed. Transactions record policy version hash and evaluation trace,
            allowing reproducibility during audits, disputes, and incident investigations.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className={H2}>5. Risk and Security Model</h2>
          <h3 className={H3}>5.1 Threat model (high level)</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-8">
            <li>Credential compromise and privilege escalation.</li>
            <li>Prompt-driven financial abuse by malicious external input.</li>
            <li>Fraud rings exploiting payout timing windows.</li>
            <li>Rail provider outage or delayed settlement inconsistency.</li>
            <li>Insider misuse of override capabilities.</li>
          </ul>

          <h3 className={H3}>5.2 Defensive controls</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-8">
            <li>Short-lived scoped tokens and strict service-to-service auth.</li>
            <li>Separation of duties for policy authoring vs approval rights.</li>
            <li>High-risk action MFA + just-in-time approval.</li>
            <li>Behavioral anomaly scoring with auto-hold triggers.</li>
            <li>Tamper-evident logs and immutable event retention.</li>
          </ul>

          <h3 className={H3}>5.3 Incident handling</h3>
          <p className={P}>
            Standardized response playbooks include containment, transaction hold, account freeze scopes, forensic export,
            partner notification, and controlled resume conditions.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className={H2}>6. Compliance Operating Model</h2>
          <h3 className={H3}>6.1 Compliance-by-construction</h3>
          <p className={P}>
            Compliance checkpoints are embedded into lifecycle stages: onboarding, transaction pre-check, post-settlement
            screening, and periodic review. This avoids reactive compliance as an afterthought.
          </p>

          <h3 className={H3}>6.2 Data governance</h3>
          <p className={P}>
            Sensitive fields are minimized, encrypted at rest/in transit, and partitioned by role-based access controls.
            Data retention and deletion policies are configurable by jurisdiction.
          </p>

          <h3 className={H3}>6.3 Regional strategy</h3>
          <p className={P}>
            Auralenia adopts a modular regulatory approach: jurisdiction packs define required controls, reporting fields,
            and workflow obligations. Regional expansion proceeds only when control parity is validated.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className={H2}>7. Data Model and Core Entities</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-8">
            <li><span className="font-medium text-foreground">Organization:</span> top-level operating entity and governance owner.</li>
            <li><span className="font-medium text-foreground">Account:</span> treasury or scoped sub-account with limits and state.</li>
            <li><span className="font-medium text-foreground">Actor:</span> human user, service, or AI agent identity.</li>
            <li><span className="font-medium text-foreground">Policy:</span> versioned rule graph bound to accounts/actors/actions.</li>
            <li><span className="font-medium text-foreground">Intent:</span> requested financial action with metadata and purpose.</li>
            <li><span className="font-medium text-foreground">Execution:</span> routed payment action with provider references.</li>
            <li><span className="font-medium text-foreground">Ledger Event:</span> immutable event entry linked to intent/execution.</li>
            <li><span className="font-medium text-foreground">Alert:</span> risk/compliance/ops signal with severity and playbook.</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className={H2}>8. Developer Experience and Integration Patterns</h2>
          <h3 className={H3}>8.1 Integration modes</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-8">
            <li>Dashboard mode: low-code onboarding and policy management.</li>
            <li>Widget mode: embedded financial controls in existing apps.</li>
            <li>Full API mode: custom orchestration for high-scale teams.</li>
          </ul>

          <h3 className={H3}>8.2 Reliability principles</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-8">
            <li>Idempotent write operations.</li>
            <li>Consistent retry semantics and deduplication keys.</li>
            <li>Event webhooks with signature verification.</li>
            <li>Schema versioning for long-lived client compatibility.</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className={H2}>9. Economics and Unit Model</h2>
          <h3 className={H3}>9.1 Revenue model</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-8">
            <li>Base platform subscription by feature tier.</li>
            <li>Usage fees on orchestrated payment volume.</li>
            <li>Advanced modules (compliance analytics, enterprise controls).</li>
            <li>Partner rail economics and premium settlement routes.</li>
          </ul>

          <h3 className={H3}>9.2 Cost drivers</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-8">
            <li>Rail/provider transaction costs.</li>
            <li>Compliance operations and risk monitoring overhead.</li>
            <li>Data retention and observability infrastructure costs.</li>
          </ul>

          <h3 className={H3}>9.3 Margin strategy</h3>
          <p className={P}>
            Margin expansion comes from route optimization, policy automation reducing manual ops, and higher-value
            enterprise features where governance requirements are strongest.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className={H2}>10. Go-To-Market and Adoption Strategy</h2>
          <h3 className={H3}>10.1 Initial wedge</h3>
          <p className={P}>
            Start with teams that already experience high payout complexity and governance overhead: marketplaces,
            automation-native operations, and AI-first software firms.
          </p>

          <h3 className={H3}>10.2 Expansion loops</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-8">
            <li>From payout automation to full account orchestration.</li>
            <li>From basic controls to enterprise policy governance.</li>
            <li>From single-rail use to multi-rail strategy and optimization.</li>
          </ul>

          <h3 className={H3}>10.3 Enterprise path</h3>
          <p className={P}>
            Enterprise adoption requires control assurances, configurable approval trees, robust audit exports,
            and clear incident response guarantees.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className={H2}>11. Implementation Roadmap with Milestones</h2>
          <ol className="list-decimal pl-6 space-y-3 text-muted-foreground leading-8">
            <li><span className="font-medium text-foreground">Milestone 1 (Foundation):</span> account graphs, intent API, policy v1, core ledger.</li>
            <li><span className="font-medium text-foreground">Milestone 2 (Execution):</span> rail router, retries, reconciliation engine.</li>
            <li><span className="font-medium text-foreground">Milestone 3 (Governance):</span> approvals, anomaly detection, compliance exports.</li>
            <li><span className="font-medium text-foreground">Milestone 4 (Scale):</span> regional packs, enterprise controls, partner ecosystem.</li>
          </ol>
          <p className={P}>
            Each milestone is gated by operational KPIs: settlement success rate, policy decision latency,
            reconciliation accuracy, and incident MTTR.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className={H2}>12. KPI Framework</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-8">
            <li>Transaction success rate and settlement finality time.</li>
            <li>Policy decision precision (false allow/false deny rates).</li>
            <li>Reconciliation discrepancy rate and resolution SLA.</li>
            <li>Fraud/abuse loss rate as basis points of volume.</li>
            <li>Automation ratio: % financial ops executed without manual intervention under policy.</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className={H2}>13. Limitations and Open Questions</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-8">
            <li>Regulatory harmonization across regions remains non-trivial.</li>
            <li>Cross-provider consistency for status semantics requires robust normalization.</li>
            <li>AI behavior drift demands ongoing policy calibration and simulation testing.</li>
            <li>Human override governance must remain transparent and abuse-resistant.</li>
          </ul>
        </section>

        <section className="rounded-xl border bg-muted/30 p-6 space-y-3">
          <h2 className="text-2xl font-semibold">Conclusion</h2>
          <p className={P}>
            Auralenia is building for a world where software agents and humans co-manage economic systems. The
            objective is not to remove control, but to encode control directly into execution infrastructure. With
            policy-governed automation, auditable ledgers, and resilient multi-rail operations, Auralenia aims to become
            the trusted financial operating system for AI-native enterprises.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
