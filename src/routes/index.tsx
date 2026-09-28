import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Compass,
  Network,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import {
  ContactSection,
  EmailButton,
  PageShell,
  SectionIntro,
} from "@/components/site";

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
    <PageShell>
      <Hero />
      <Strengths />
      <WorkTeaser />
      <Approach />
      <ContactSection />
    </PageShell>
  );
}

function Hero() {
  return (
    <header className="container-wide py-16 sm:py-24 lg:py-28">
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
              <Link to="/work">View case studies <ArrowDown aria-hidden="true" /></Link>
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

import { Button } from "@/components/ui/button";

const skills = [
  { icon: Compass, title: "Product strategy & 0-to-1 delivery", description: "Define customer problems, validate opportunities, shape MVPs, and lead products from discovery through launch." },
  { icon: Bot, title: "AI-enabled product development", description: "Apply AI thoughtfully to accelerate research, prototyping, requirements, and workflow improvement." },
  { icon: BarChart3, title: "Growth & experimentation", description: "Use behavioral analytics and rigorous testing to improve activation, conversion, retention, and lifetime value." },
  { icon: Network, title: "Technology transformation", description: "Lead integrations, platform modernization, operational change, and scalable delivery across distributed teams." },
  { icon: Users, title: "Enterprise stakeholder leadership", description: "Align Engineering, Design, Data, Operations, GTM, clients, and executives around outcomes and trade-offs." },
];

const tools = ["Figma", "Jira", "Statsig", "SQL", "Claude", "ChatGPT", "Microsoft Copilot", "Behavioral analytics"];

function Strengths() {
  return (
    <section className="section-space border-y border-border bg-section">
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

const caseStudyTeasers = [
  { number: "01", title: "Legacy app rebuilt from the inside out", metric: "70% of engineering time freed from firefighting" },
  { number: "02", title: "Turning a fragmented integration into a repeatable playbook", metric: "Brand launches cut from 12 months to 3" },
  { number: "03", title: "Getting a two-year-delayed MVP out the door", metric: "$50M revenue in the initial market window" },
];

function WorkTeaser() {
  return (
    <section className="section-space">
      <div className="container-wide">
        <SectionIntro kicker="Selected work" title="Proof, not promises." copy="Three product case studies and a shipped product—each one a path from ambiguity to measurable outcome." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudyTeasers.map((item) => (
            <Link key={item.number} to="/work" className="group flex flex-col border border-border bg-card p-7 transition-colors hover:border-primary/40 hover:bg-primary-soft/40">
              <div className="flex items-center justify-between">
                <span className="eyebrow">Case study {item.number}</span>
                <ArrowRight aria-hidden="true" className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold leading-snug">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.metric}</p>
            </Link>
          ))}
        </div>
        <Link to="/showcase" className="group mt-6 flex flex-col gap-6 border border-primary/25 bg-primary-soft/50 p-7 transition-colors hover:border-primary/50 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="eyebrow">Product showcase</span>
              <span className="tag">Now shipped</span>
            </div>
            <h3 className="mt-4 font-display text-xl font-bold leading-snug">Suiteable — a hotel matched to you</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">What started as Figma concept mockups is now a live product.</p>
          </div>
          <ArrowRight aria-hidden="true" className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
        </Link>
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
