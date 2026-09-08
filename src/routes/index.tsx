import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Compass,
  ExternalLink,
  Linkedin,
  Mail,
  Network,
  Sparkles,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
const LINKEDIN_URL = "https://www.linkedin.com/in/maryas/";
const EMAIL = "shaharyarmarya@gmail.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marya Shaharyar | Product Manager" },
      {
        name: "description",
        content:
          "Portfolio of Marya Shaharyar, a Toronto product leader building customer-focused products across SaaS, consumer technology, data, and AI.",
      },
      { property: "og:title", content: "Marya Shaharyar | Product Manager" },
      {
        property: "og:description",
        content:
          "Product strategy, transformation, and measurable growth from a Toronto-based product leader.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navigation />
      <Hero />
      <Strengths />
      <Projects />
      <Showcase />
      <Approach />
      <Recognition />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl" aria-label="Primary navigation">
      <div className="container-wide flex h-16 items-center justify-between gap-5">
        <a href="#top" className="font-display text-base font-bold text-foreground">
          MS<span className="text-primary">.</span>
        </a>
        <div className="flex items-center gap-4 overflow-x-auto text-sm font-medium text-muted-foreground sm:gap-7">
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#work">Work</a>
          <a className="nav-link" href="#projects">Projects</a>
          <a className="nav-link" href="#showcase">Showcase</a>
          <a className="nav-link" href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

function EmailButton({ children, variant = "default", className }: { children: React.ReactNode; variant?: "default" | "outline"; className?: string }) {
  const [copied, setCopied] = useState(false);
  const handleClick = () => {
    void navigator.clipboard?.writeText(EMAIL).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    });
    window.location.href = `mailto:${EMAIL}`;
  };

  return (
    <Button type="button" size="lg" variant={variant} className={className} onClick={handleClick}>
      <Mail aria-hidden="true" />
      {copied ? "Email copied" : children}
    </Button>
  );
}

function Hero() {
  return (
    <header id="top" className="container-wide scroll-mt-24 py-16 sm:py-24 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
        <div className="max-w-3xl">
          <p className="eyebrow">Product leader · Toronto</p>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.08] sm:text-6xl lg:text-7xl">
            I turn complex problems into products <span className="text-primary">people actually use.</span>
          </h1>
          <p className="mt-7 text-xl font-medium text-foreground">Marya Shaharyar</p>
          <p className="mt-3 max-w-2xl text-lg leading-8 text-muted-foreground">
            A product and technology leader with 10+ years of experience building customer-focused digital products and leading complex transformation across B2B SaaS, consumer technology, data, and AI-enabled workflows.
          </p>
          <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
            I combine product strategy with hands-on execution—turning ambiguity into clear roadmaps, scalable experiences, and measurable business outcomes.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <EmailButton>Start a conversation</EmailButton>
            <Button asChild size="lg" variant="outline">
              <a href="#projects">View case studies <ArrowDown aria-hidden="true" /></a>
            </Button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
          <div className="absolute -inset-4 -z-10 border border-primary/20" aria-hidden="true" />
          <img
            src="/marya-headshot.png"
            alt="Marya Shaharyar, product and technology leader"
            width={1254}
            height={1254}
            className="aspect-square w-full rounded-full border-[10px] border-card object-cover shadow-portrait"
          />
          <div className="absolute -bottom-5 -left-5 border border-border bg-card px-5 py-4 shadow-sm sm:-left-9">
            <span className="block font-display text-2xl font-bold text-primary">10+ years</span>
            <span className="text-xs font-semibold uppercase text-muted-foreground">Product leadership</span>
          </div>
        </div>
      </div>
    </header>
  );
}

const skills = [
  { icon: Compass, title: "Product strategy & 0-to-1 delivery", description: "Define customer problems, validate opportunities, shape MVPs, and lead products from discovery through launch." },
  { icon: Bot, title: "AI-enabled product development", description: "Apply AI thoughtfully to accelerate research, prototyping, requirements, and workflow improvement." },
  { icon: BarChart3, title: "Growth & experimentation", description: "Use behavioral analytics and rigorous testing to improve activation, conversion, retention, and lifetime value." },
  { icon: Network, title: "Technology transformation", description: "Lead integrations, platform modernization, operational change, and scalable delivery across distributed teams." },
  { icon: Users, title: "Enterprise stakeholder leadership", description: "Align Engineering, Design, Data, Operations, GTM, clients, and executives around outcomes and trade-offs." },
];

const tools = ["Figma", "Jira", "Statsig", "SQL", "Claude", "ChatGPT", "Microsoft Copilot", "Behavioral analytics"];

function SectionIntro({ kicker, title, copy }: { kicker: string; title: string; copy: string }) {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_0.75fr] lg:items-end">
      <div><p className="eyebrow">{kicker}</p><h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">{title}</h2></div>
      <p className="max-w-xl leading-7 text-muted-foreground lg:justify-self-end">{copy}</p>
    </div>
  );
}

function Strengths() {
  return (
    <section id="about" className="section-space scroll-mt-20 border-y border-border bg-section">
      <div className="container-wide">
        <SectionIntro kicker="Expertise" title="Where I make the biggest difference" copy="A multidisciplinary product practice that balances customer insight, commercial impact, and delivery discipline." />
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ icon: Icon, title, description }, index) => (
            <article key={title} className="group border-t border-border pt-6">
              <div className="flex items-start justify-between gap-4">
                <span className="flex size-11 items-center justify-center rounded-lg border border-primary/15 bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><Icon aria-hidden="true" className="size-5" /></span>
                <span className="text-xs font-semibold text-muted-foreground">0{index + 1}</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-snug">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
        <div className="mt-14 border-t border-border pt-7">
          <p className="text-xs font-semibold uppercase text-muted-foreground">Tools & methods</p>
          <div className="mt-4 flex flex-wrap gap-x-7 gap-y-3">
            {tools.map((tool) => <span key={tool} className="text-sm font-medium text-foreground">{tool}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

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

function Projects() {
  return (
    <section id="projects" className="scroll-mt-20">
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
  );
}

const showcaseScreens = [
  { src: "/suiteable-logo-brand.png", caption: "Brand system — logo, app icon, and colour palette", aspect: "aspect-[4/3]" },
  { src: "/suiteable-preferences.png", caption: "Preference capture — free-text plus structured must-haves and deal-breakers", aspect: "aspect-[9/19]" },
  { src: "/suiteable-hotel-result.webp", caption: "Match result — a scored hotel against the traveller's saved preferences", aspect: "aspect-[9/19]" },
];

function Showcase() {
  return (
    <section id="showcase" className="section-space scroll-mt-20 border-y border-border bg-section">
      <div className="container-wide">
        <SectionIntro
          kicker="Concept showcase"
          title="Suiteable — a hotel matched to you"
          copy="A self-directed design concept exploring how traveller preferences could be turned into a transparent hotel match score."
        />
        <p className="mt-8 max-w-3xl border-l-2 border-primary pl-5 text-sm leading-7 text-muted-foreground">
          <strong className="font-semibold text-foreground">This is not a real, shipped app.</strong> These are mockups I created in
          Figma, using AI to accelerate the design thinking—exploring concepts, copy, and screen structure faster so I could focus on the
          product decisions behind them.
        </p>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {showcaseScreens.map((screen) => (
            <figure key={screen.caption} className="flex flex-col">
              <div className="overflow-hidden rounded-lg border border-border bg-card">
                <img
                  src={screen.src}
                  alt={screen.caption}
                  loading="lazy"
                  className={`w-full ${screen.aspect} object-cover object-top`}
                />
              </div>
              <figcaption className="mt-4 text-sm leading-6 text-muted-foreground">{screen.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const approach = [
  { icon: Target, title: "Frame the right problem", copy: "Bring customer, business, and operational signals together before committing to a solution." },
  { icon: Sparkles, title: "Make the path tangible", copy: "Turn ambiguity into a testable direction, clear priorities, and shared measures of success." },
  { icon: CheckCircle2, title: "Learn through delivery", copy: "Ship deliberately, measure honestly, and use evidence to make the next decision better." },
];

function Approach() {
  return (
    <section className="section-space bg-foreground text-background">
      <div className="container-wide grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <div><p className="eyebrow text-primary-bright">How I work</p><h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Clarity before velocity.</h2><p className="mt-5 max-w-md leading-7 text-background/70">The goal is not more process. It is better decisions, stronger alignment, and momentum that compounds.</p></div>
        <div className="grid gap-px bg-background/15 sm:grid-cols-3">
          {approach.map(({ icon: Icon, title, copy }, index) => <article key={title} className="bg-foreground p-7"><span className="text-xs text-background/50">0{index + 1}</span><Icon className="mt-9 size-6 text-primary-bright" aria-hidden="true" /><h3 className="mt-5 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-background/65">{copy}</p></article>)}
        </div>
      </div>
    </section>
  );
}

const recognition = [
  { icon: Trophy, company: "HelloFresh", title: "Leadership Program", copy: "Selected for leadership development in recognition of high performance, leadership potential, and the ability to lead complex cross-functional transformation." },
  { icon: Building2, company: "Constellation", title: "New Client Growth", copy: "Helped secure new client business through the redesign and relaunch of a customer-facing construction scheduling platform." },
  { icon: Sparkles, company: "Q-nomy", title: "Top Sales Performer", copy: "Recognized with sales awards for exceeding targets, building executive relationships, and converting enterprise opportunities into long-term partnerships." },
];

function Recognition() {
  return (
    <section className="section-space border-b border-border bg-section">
      <div className="container-wide">
        <SectionIntro kicker="Recognition" title="Trusted to lead when it matters" copy="Distinct moments of recognition across leadership, customer growth, and enterprise relationship-building." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-3">
          {recognition.map(({ icon: Icon, company, title, copy }) => <article key={company} className="bg-card p-8 transition-colors hover:bg-primary-soft"><Icon className="size-6 text-primary" aria-hidden="true" /><p className="mt-10 text-xs font-bold uppercase text-primary">{company}</p><h3 className="mt-2 font-display text-2xl font-bold">{title}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">{copy}</p></article>)}
        </div>
      </div>
    </section>
  );
}

const experience = [
  { company: "Constellation", role: "Product strategy & platform redesign", focus: "B2B SaaS · Construction", copy: "Defined strategy and led cross-functional delivery for a complex customer-facing application redesign, improving reliability, satisfaction, and user growth." },
  { company: "HelloFresh", role: "Growth & technology transformation", focus: "Consumer subscription · M&A integration", copy: "Led experimentation and coordinated large-scale product and technology integration across Product, Engineering, Data, UX, Marketing, and Operations." },
  { company: "Q-nomy", role: "Enterprise customer leadership", focus: "B2B technology · Client partnerships", copy: "Built executive relationships, translated enterprise needs into technology opportunities, and earned recognition for high-performing sales results." },
];

function Experience() {
  return (
    <section id="work" className="section-space scroll-mt-20">
      <div className="container-wide grid gap-12 lg:grid-cols-[0.45fr_1fr] lg:gap-20">
        <div><p className="eyebrow">Experience</p><h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">A decade of building, scaling, and transforming.</h2><p className="mt-5 leading-7 text-muted-foreground">Selected chapters from 10+ years across product, technology, growth, and enterprise leadership.</p></div>
        <div className="relative border-l border-border pl-8 sm:pl-12">
          {experience.map((item, index) => <article key={item.company} className="relative border-b border-border py-8 first:pt-0 last:border-b-0 last:pb-0"><span className="absolute -left-[2.3rem] top-1 size-3 rounded-full border-4 border-background bg-primary sm:-left-[3.3rem]" aria-hidden="true" /><div className="flex flex-wrap items-baseline justify-between gap-2"><p className="font-semibold text-primary">{item.company}</p><span className="text-xs font-medium uppercase text-muted-foreground">Selected chapter · 0{index + 1}</span></div><h3 className="mt-3 font-display text-2xl font-bold">{item.role}</h3><p className="mt-1 text-sm font-medium text-muted-foreground">{item.focus}</p><p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{item.copy}</p></article>)}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-primary py-20 text-primary-foreground sm:py-24">
      <div className="container-wide grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
        <div><p className="text-xs font-bold uppercase text-primary-foreground/70">Let&apos;s talk</p><h2 className="mt-4 max-w-3xl font-display text-4xl font-bold sm:text-5xl">Open to meaningful product leadership conversations.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-primary-foreground/80">If you&apos;re building something ambitious—or untangling something complex—I&apos;d love to hear about it.</p></div>
        <div className="flex flex-wrap gap-3">
          <EmailButton variant="outline" className="border-primary-foreground bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:text-primary">Send an email</EmailButton>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"><Linkedin aria-hidden="true" />LinkedIn <ExternalLink aria-hidden="true" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground py-8 text-background">
      <div className="container-wide flex flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div><p className="font-display font-bold">Marya Shaharyar</p><p className="mt-1 text-background/60">Product & technology leader · Toronto</p></div>
        <div className="flex flex-wrap items-center gap-6">
          <a className="footer-link" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a className="footer-link" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className="text-background/45">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}