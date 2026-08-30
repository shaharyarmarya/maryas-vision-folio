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
import projectPlatform from "@/assets/project-platform.jpg";
import projectGrowth from "@/assets/project-growth.jpg";
import projectIntegration from "@/assets/project-integration.jpg";
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
    number: "01", image: projectPlatform, title: "Customer platform redesign and relaunch", tags: ["B2B SaaS", "Construction", "Platform redesign"],
    problem: "A complex customer-facing application created workflow friction and reliability issues.",
    action: "Led product strategy and cross-functional delivery, simplifying workflows and aligning teams around a focused relaunch.",
    outcome: "A more reliable, easier-to-use platform that improved satisfaction and supported new business growth.",
    metrics: [{ value: "70%", label: "fewer bugs" }, { value: "20%+", label: "higher satisfaction" }, { value: "+200", label: "monthly active users" }],
  },
  {
    number: "02", image: projectGrowth, title: "Growth experimentation for consumer brands", tags: ["Consumer subscription", "A/B testing", "Statsig"],
    problem: "Customer journeys held untapped opportunities to improve conversion and long-term retention.",
    action: "Built a high-velocity experimentation program using Statsig, behavioral data, and customer insight to prioritize tests.",
    outcome: "Validated improvements across the funnel and created substantial incremental customer lifetime value.",
    metrics: [{ value: "4.5%", label: "retention lift" }, { value: "2%", label: "conversion lift" }, { value: "$30M", label: "incremental CLV" }],
  },
  {
    number: "03", image: projectIntegration, title: "M&A technology integration at scale", tags: ["M&A", "Integration", "Operating model"],
    problem: "Acquired brands needed to integrate across a large, interdependent product and technology ecosystem.",
    action: "Coordinated a 200-person network and built reusable integration, launch, adoption, and operating practices.",
    outcome: "A faster, repeatable transformation model that improved scalability for future acquisitions.",
    metrics: [{ value: "75%", label: "faster timelines" }, { value: "~200", label: "people aligned" }, { value: "1", label: "reusable playbook" }],
  },
];

function Projects() {
  return (
    <section id="projects" className="section-space scroll-mt-20">
      <div className="container-wide">
        <SectionIntro kicker="Selected work" title="Proof, not promises" copy="Three complex product challenges, structured around the problem, the work, and the measurable result." />
        <div className="mt-16 space-y-24">
          {projects.map((project, index) => (
            <article key={project.title} className="grid items-start gap-9 lg:grid-cols-2 lg:gap-16">
              <div className={`group relative overflow-hidden rounded-lg bg-secondary ${index % 2 ? "lg:order-2" : ""}`}>
                <img src={project.image} alt="Editorial illustration for the project case study" width={1400} height={900} loading="lazy" className="aspect-[14/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" />
                <span className="absolute left-4 top-4 bg-foreground px-3 py-2 text-xs font-bold text-background">CASE {project.number}</span>
              </div>
              <div className={index % 2 ? "lg:order-1" : ""}>
                <div className="flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>
                <h3 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl">{project.title}</h3>
                <dl className="mt-8 space-y-5">
                  <div className="grid grid-cols-[5.5rem_1fr] gap-3"><dt className="text-sm font-semibold text-primary">Problem</dt><dd className="leading-7 text-muted-foreground">{project.problem}</dd></div>
                  <div className="grid grid-cols-[5.5rem_1fr] gap-3"><dt className="text-sm font-semibold text-primary">My role</dt><dd className="leading-7 text-muted-foreground">{project.action}</dd></div>
                  <div className="grid grid-cols-[5.5rem_1fr] gap-3"><dt className="text-sm font-semibold text-primary">Outcome</dt><dd className="leading-7 text-muted-foreground">{project.outcome}</dd></div>
                </dl>
                <div className="mt-8 grid grid-cols-3 border-y border-border py-5">
                  {project.metrics.map((metric) => <div key={metric.label} className="border-l border-border px-3 first:border-l-0 first:pl-0"><strong className="block font-display text-2xl text-foreground">{metric.value}</strong><span className="mt-1 block text-xs leading-5 text-muted-foreground">{metric.label}</span></div>)}
                </div>
              </div>
            </article>
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