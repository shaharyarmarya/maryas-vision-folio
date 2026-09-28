import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Case Studies — Marya Shaharyar" },
      {
        name: "description",
        content:
          "Three product management case studies: a legacy app rebuild, a repeatable integration playbook, and a two-year-delayed MVP shipped.",
      },
      { property: "og:title", content: "Case Studies — Marya Shaharyar" },
      {
        property: "og:description",
        content:
          "Three product case studies, each led from ambiguity to a measurable outcome.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

const projects = [
  {
    number: "01",
    title: "Legacy app rebuilt from the inside out",
    summary: "Not a gradual migration—a parallel build, a module-by-module beta with real customers who had to greenlight each piece, and a single clean deployment that replaced the old app without asking anyone to redownload.",
    problem: [
      "The app had accumulated years of debt—bugs eroding customer confidence, API performance dragging the experience, and an engineering team spending most of their time on fixes rather than progress. Replacing it entirely was the right call, but while the new build happened, the live product still had to work. Customers couldn't wait 12 months for a rewrite.",
      "The product question was: how do you manage two roadmaps simultaneously without letting either one fail?",
    ],
    action: [
      "I ran two roadmaps in parallel. The live app roadmap was about surgical triage: I prioritised which bugs had the highest customer impact and which APIs most needed reoptimisation, then deployed fixes in sprints. Customers saw improvement immediately. Crucially, as bug-related work fell, engineering capacity was freed—and I redirected that capacity directly into the new build.",
      "The new app roadmap was a full product build: which pages to rebuild first, complete redesigns of each, which new functionality to scope, and how to sequence it all. The new app was developed on a separate branch in parallel with the live product, with every unresolved issue from the old version baked in from the start rather than carried over as debt.",
      "Before any cutover, we ran a structured beta—select customers testing module by module, with a greenlight required from every stakeholder before we moved on. Once the final sign-off came, we pushed the new app to the production branch. Users didn't redownload anything. They just logged back in. The old app was retired.",
    ],
    outcome: "The cutover was invisible to users—no redownloads, no retraining, no disruption. Bug-related engineering work fell 70%, freeing the team to build forward rather than patch backward. Customer satisfaction recovered past its pre-decline baseline, and the nature of customer conversations changed: from reporting problems to asking what was next. The $2M+ ARR at churn risk was retained, and the rebuilt platform became the foundation for product lines that would never have been possible on the old stack.",
    metrics: [{ value: "70%", label: "Of engineering time freed from firefighting—back to building" }, { value: ">20%", label: "Recovery in customer trust—satisfaction past its pre-decline peak" }, { value: "$2M+", label: "ARR that had been at churn risk, retained through confident migration" }],
    tools: ["Ionic Framework", "Parallel-build strategy", "Module-by-module beta", "Customer greenlight process", "Zero-disruption cutover"],
  },
  {
    number: "02",
    title: "Turning a fragmented integration into a repeatable playbook",
    summary: "Brought in to build a team that could get acquired and in-house brands live on a white-label platform—but the first product problem wasn't customer-facing. It was the launch process itself, which was taking 12 months and nobody owned.",
    problem: [
      "Every new brand launch touched 12 teams—but none of them owned it. The work wasn't part of anyone's OKRs, so POs had no real incentive to prioritise it. Each team was doing their piece in isolation, with no visibility into what the others were doing or what the overall launch depended on. Launches were taking 12 months—not because the work was complex, but because the system wasn't set up to move it.",
    ],
    action: [
      "Before I could build anything, I needed to understand what each of the 12 teams actually contributed to a launch. I went to every PO individually—not with a brief, but with questions. Once I had the full picture, I designed a launch playbook: every work package defined, sequenced, and scoped into a template engineers and project managers could follow without reinventing it each time.",
      "That cut launches from 12 months to 3. Then I used the foundation to do what I'd been hired to do: build a product roadmap for the white-label platform itself. I identified improvements that could be deployed across all brands or scoped to a single one, and ran experiments—social proofing, sign-up funnel redesigns, layout and colour A/B tests—all measured against subscriber growth and customer revenue.",
    ],
    outcome: "Launch timelines fell from 12 months to 3—not through pressure, but through clarity. Once every team knew exactly what they owned and how it connected, the work moved. Engineering effort that had been spent rebuilding the same components for each brand dropped 20%. The white-label platform stopped being a static infrastructure layer and became a product we actively improved: experiments ran across a portfolio of brands, generating signal on what actually drove subscribers and revenue. The $30M CLV figure reflects what those improvements compounded into.",
    metrics: [{ value: "12→3", label: "Months to launch a new brand—before and after the playbook" }, { value: "20%", label: "Engineering effort recovered—no more rebuilding the same work twice" }, { value: "$30M", label: "CLV grown through experimentation across the brand portfolio" }],
    tools: ["White-label platform", "Launch playbook design", "Cross-team OKR alignment", "Statsig", "A/B experimentation", "Funnel optimisation"],
  },
  {
    number: "03",
    title: "Getting a two-year-delayed MVP out the door",
    summary: "The schedule problem was real. But the product problem was that nobody had agreed on what the MVP actually was—and until that was resolved, nothing else would move.",
    problem: [
      "Two years of development without a ship. Scope had expanded with every quarter, ‘done’ meant something different to everyone in the room, and the team had quietly stopped believing it would happen. They were technically capable—the environment had failed them, not the other way around.",
      "Adding more process or more pressure wouldn't have worked. The first product decision was figuring out what had actually broken down before trying to fix anything.",
    ],
    action: [
      "I started with 1:1s—not to gather requirements, but to understand where trust had gone. Before I could make good product decisions, I needed to know what the team needed from the process to believe in it again. That came first.",
      "Then: ruthless scope reduction to a defensible MVP definition, tight sprint goals designed to feel achievable (not aspirational), and an early-adopter cohort before any general release. The cohort was a deliberate product choice—not a soft launch but a validation instrument. Real signal from real users before we committed to scale. When the product worked for them, we had the evidence to move fast.",
    ],
    outcome: "The MVP shipped—which, two years in, wasn't a given. $50M in revenue in the initial market window, from a product that had nearly been written off. Post-launch, the ops team moved 30% faster because the product had been built to be worked with, not worked around. The team that launched at two people scaled to twelve on the same foundation—no rewrite required. And the early-adopter model held: every product I've launched since has started with a defined validation cohort before general release, because that's what prevented us from scaling the wrong thing.",
    metrics: [{ value: "$50M", label: "Revenue from a product that nearly never made it out the door" }, { value: "30%", label: "Operations moved faster post-launch—the product was built to be iterated on" }, { value: "2→12", label: "Team scaled on the foundation we built—not a rewrite" }],
    tools: ["MVP scoping", "Early-adopter validation", "Incremental Agile", "Scope reduction", "Product-team trust"],
  },
];

function WorkPage() {
  return (
    <PageShell>
      <section>
        <div className="container-wide">
          <header className="border-b border-border py-16 sm:py-20">
            <p className="eyebrow">Portfolio · Case studies</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl">Work that moved the needle.</h2>
            <p className="mt-5 max-w-xl leading-7 text-muted-foreground">Three product management case studies, anonymised where required. Each led from ambiguity to a measurable outcome.</p>
          </header>
          <div>
            {projects.map((project) => (
              <article key={project.title} className="border-b border-border py-16 last:border-b-0 sm:py-20">
                <span className="eyebrow">Case study {project.number}</span>
                <h3 className="mt-4 max-w-4xl font-display text-3xl font-bold leading-tight sm:text-5xl">{project.title}</h3>
                <p className="mt-4 max-w-2xl text-sm italic leading-6 text-muted-foreground">{project.summary}</p>

                <div className="mt-9 grid overflow-hidden rounded-lg bg-foreground sm:grid-cols-3">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="border-b border-background/15 p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:p-8">
                      <strong className="block font-display text-3xl text-background sm:text-4xl">{metric.value}</strong>
                      <span className="mt-2 block max-w-[15rem] text-xs leading-5 text-background/60">{metric.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 grid gap-9 lg:grid-cols-2 lg:gap-16">
                  <div>
                    <h4 className="text-xs font-bold uppercase text-muted-foreground">The real problem</h4>
                    <div className="mt-4 space-y-4">
                      {project.problem.map((paragraph) => <p key={paragraph} className="leading-7 text-foreground/80">{paragraph}</p>)}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-muted-foreground">The call I made</h4>
                    <div className="mt-4 space-y-4">
                      {project.action.map((paragraph) => <p key={paragraph} className="leading-7 text-foreground/80">{paragraph}</p>)}
                    </div>
                  </div>
                </div>

                <div className="mt-9 rounded-lg border border-border bg-card p-6 sm:p-7">
                  <h4 className="text-xs font-bold uppercase text-muted-foreground">What it produced</h4>
                  <p className="mt-3 leading-7 text-foreground/80">{project.outcome}</p>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tools.map((tool) => <span key={tool} className="tag border-border bg-card text-muted-foreground">{tool}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
