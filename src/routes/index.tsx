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
import suiteableLogo from "@/assets/suiteable-logo-brand.png.asset.json";
import suiteablePreferences from "@/assets/suiteable-preferences.png.asset.json";
import suiteableResult from "@/assets/suiteable-hotel-result.png.asset.json";

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
    title: "Legacy App Rebuilt from the Inside Out",
    summary: "Stabilising a collapsing platform while building its replacement—without dropping the customers currently on it.",
    problem: [
      "An enterprise-facing application built on an outdated stack had accumulated years of technical debt. Bug reports were outpacing fixes, churn risk was rising, and engineering teams lacked the bandwidth—or the mandate—to stop and rebuild.",
      "Two parallel realities had to coexist: keeping the legacy app stable enough to retain current customers, while building a modern replacement that would not repeat the same mistakes.",
    ],
    action: [
      "I structured a dual-track programme: a live stabilisation track that triaged and addressed the highest-impact bugs, and a new-build track architected from the ground up on Ionic. I owned both roadmaps simultaneously, negotiating priorities across engineering and customer success.",
      "Customer migration was sequenced carefully—starting with lower-risk accounts to build confidence—while feature parity was validated continuously against the legacy baseline. The approximately 200 MAU user base transitioned with near-zero churn.",
    ],
    outcome: "Bugs dropped 70% within two quarters. Customer satisfaction exceeded pre-project levels once migration was complete. The new platform became the foundation for future product lines, and the revenue under management was secured rather than lost to instability.",
    metrics: [{ value: "70%", label: "Reduction in critical bugs within two quarters of stabilisation" }, { value: ">20%", label: "Improvement in customer satisfaction post-migration" }, { value: "$2M+", label: "Annual recurring revenue retained and transitioned" }],
    tools: ["Ionic Framework", "Dual-track roadmapping", "Customer migration planning", "Bug triage prioritisation", "Stakeholder alignment"],
  },
  {
    number: "02",
    title: "Turning a Fragmented Integration into a Repeatable Playbook",
    summary: "Twelve teams. No single owner. A critical integration initiative going nowhere—until it had a structure it could move through.",
    problem: [
      "A major integration spanning twelve internal teams had no shared OKRs, no single accountable owner, and no common approach. Each team was solving the same problems in isolation. Dependencies were invisible until they became blockers. Timelines had become meaningless.",
      "The customer relationship at the centre of this integration represented significant lifetime value—and the dysfunction was starting to show externally.",
    ],
    action: [
      "I began by mapping every dependency across all twelve teams—surfacing the hidden connections that were causing the most friction. From there, I worked with leadership to assign a single accountable owner to each integration thread and establish shared OKRs for the first time.",
      "I introduced Statsig for controlled experimentation across the integration surface, allowing the teams to validate changes incrementally rather than shipping large-batch updates blind. The cross-team process became a documented playbook, replicable on future integrations.",
    ],
    outcome: "Integration timelines dropped by 75%. Engineering duplication fell by 20% as teams began building on shared components rather than starting from scratch. The customer relationship stabilised and the playbook became standard practice for subsequent integrations of comparable complexity.",
    metrics: [{ value: "75%", label: "Faster integration delivery after playbook adoption" }, { value: "20%", label: "Reduction in engineering effort through eliminated duplication" }, { value: "$30M", label: "Customer lifetime value protected and grown" }],
    tools: ["Statsig", "Dependency mapping", "Cross-functional OKR design", "Accountability frameworks", "Experimentation strategy", "Playbook documentation"],
  },
  {
    number: "03",
    title: "Getting a Two-Year-Delayed MVP Out the Door",
    summary: "A product two years behind schedule, a team that had stopped believing it would ship—and a PM job that started with listening before it started with planning.",
    problem: [
      "The MVP had been in development for two years without shipping. Scope had expanded repeatedly, morale had eroded, and the team had lost confidence in the process. There was no shared understanding of what ‘done’ actually meant, and every sprint felt like it ended further from the goal than it started.",
      "Technically capable people were stuck—not because of skill gaps, but because the environment was not giving them what they needed to move.",
    ],
    action: [
      "Before touching the roadmap, I spent the first weeks in one-to-one conversations—understanding what had broken down, what people needed, and where trust had eroded. Rebuilding confidence in the process was prerequisite to any change in output.",
      "I introduced incremental Agile cycles with tight, achievable sprint goals and visible progress. Scope was cut ruthlessly to a defensible MVP definition. An early-adopter cohort was onboarded before general launch, giving the team real signal before we scaled.",
    ],
    outcome: "The MVP shipped. Revenue in the initial window reached $50M. Post-launch, operational processes improved by 30% as the team iterated on the foundation they had built. The early-adopter model—validate first, scale second—has been the approach I have brought to every launch since.",
    metrics: [{ value: "$50M", label: "Revenue generated by the MVP in its initial market window" }, { value: "30%", label: "Operational efficiency improvement post-launch" }, { value: "2–12", label: "Team size range managed across the programme" }],
    tools: ["Incremental Agile", "Scope reduction", "Early-adopter cohort strategy", "Team trust rebuilding", "MVP definition", "Stakeholder communication"],
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
                  <h4 className="text-xs font-bold uppercase text-muted-foreground">The problem</h4>
                  <div className="mt-4 space-y-4">
                    {project.problem.map((paragraph) => <p key={paragraph} className="leading-7 text-foreground/80">{paragraph}</p>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-muted-foreground">What I did</h4>
                  <div className="mt-4 space-y-4">
                    {project.action.map((paragraph) => <p key={paragraph} className="leading-7 text-foreground/80">{paragraph}</p>)}
                  </div>
                </div>
              </div>

              <div className="mt-9 rounded-lg border border-border bg-card p-6 sm:p-7">
                <h4 className="text-xs font-bold uppercase text-muted-foreground">Outcome</h4>
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
  { src: suiteableLogo.url, caption: "Brand system — logo, app icon, and colour palette", aspect: "aspect-[4/3]" },
  { src: suiteablePreferences.url, caption: "Preference capture — free-text plus structured must-haves and deal-breakers", aspect: "aspect-[9/19]" },
  { src: suiteableResult.url, caption: "Match result — a scored hotel against the traveller's saved preferences", aspect: "aspect-[9/19]" },
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