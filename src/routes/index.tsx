import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Update these with your actual contact details.
const LINKEDIN_URL = "https://www.linkedin.com/in/maryas/";
const EMAIL = "shaharyarmarya@gmail.com";

// Opens the visitor's mail app AND copies the address as a fallback,
// since mailto: links silently do nothing when no mail client is set up.
function EmailLink({ label, className }: { label: string; className: string }) {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    try {
      void navigator.clipboard?.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      // clipboard unavailable — mailto still attempted below
    }
    window.location.href = `mailto:${EMAIL}`;
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {copied ? "Email copied!" : label}
    </button>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marya Shaharyar — Product Manager" },
      { name: "description", content: "Portfolio of Marya Shaharyar, a Toronto-based product and technology leader with 10+ years of experience in B2B SaaS, consumer tech, data, and AI-enabled products." },
      { property: "og:title", content: "Marya Shaharyar — Product Manager" },
      { property: "og:description", content: "Portfolio of Marya Shaharyar, a Toronto-based product and technology leader with 10+ years of experience in B2B SaaS, consumer tech, data, and AI-enabled products." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Skills />
      <Projects />
      <Achievements />
      <Experience />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="section-padding container-tight flex min-h-[70vh] flex-col justify-center">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Product Manager · Toronto
        </p>
        <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Marya Shaharyar
        </h1>
        <img
          src="/marya-headshot.png"
          alt="Marya Shaharyar headshot"
          className="mt-6 h-40 w-40 rounded-full border-4 border-background object-cover shadow-lg sm:h-48 sm:w-48"
        />
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Toronto-based product and technology leader with 10+ years of experience building
          customer-focused digital products and leading complex transformation across B2B SaaS,
          consumer technology, data, and AI-enabled workflows.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          I combine product strategy with hands-on execution—turning ambiguous customer and
          operational problems into clear roadmaps, scalable experiences, and measurable business
          outcomes.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Connect on LinkedIn
          </a>
          <EmailLink
            label="Send an email"
            className="inline-flex cursor-pointer items-center justify-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          />
        </div>
      </div>
    </section>
  );
}

const skills = [
  {
    title: "Product strategy & 0-to-1 delivery",
    description:
      "Defining customer problems, validating opportunities, shaping MVPs, and taking products from discovery through launch and iteration.",
  },
  {
    title: "AI-enabled product development",
    description:
      "Applying Claude, ChatGPT, and Microsoft Copilot to accelerate research, prototyping, requirements, and workflow improvement, with thoughtful quality evaluation.",
  },
  {
    title: "Growth & experimentation",
    description:
      "Using behavioral analytics and rigorous A/B testing to improve customer activation, conversion, retention, and lifetime value.",
  },
  {
    title: "Technology transformation",
    description:
      "Leading complex integrations, platform modernization, operational change, and scalable delivery across distributed teams.",
  },
  {
    title: "Enterprise stakeholder leadership",
    description:
      "Aligning Engineering, Design, Data, Operations, GTM, clients, and executive stakeholders around priorities, trade-offs, and outcomes.",
  },
];

function Skills() {
  return (
    <section className="section-padding container-tight border-t border-border">
      <div className="max-w-3xl">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Core strengths
        </h2>
        <p className="mt-3 text-muted-foreground">
          The capabilities I bring to every product challenge.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <Card key={skill.title} className="bg-card/50">
            <CardHeader>
              <CardTitle className="text-base leading-snug">{skill.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">{skill.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

const projects = [
  {
    title: "Customer platform redesign and relaunch",
    tags: ["B2B SaaS", "Construction", "Cross-functional delivery"],
    description:
      "Led the strategy and cross-functional delivery for the redesign of a complex customer-facing B2B SaaS application in the construction industry. The relaunch simplified workflows, reduced bugs by approximately 70%, improved customer satisfaction by more than 20%, and helped secure new business adding approximately 200 monthly active users.",
  },
  {
    title: "Growth experimentation for consumer brands",
    tags: ["Consumer subscription", "A/B testing", "Statsig"],
    description:
      "Led a high-velocity experimentation program across consumer-subscription customer journeys, using Statsig, behavioral data, and customer insight to identify and test opportunities. The program improved retention by 4.5% and conversion by 2%, contributing an estimated $30M in incremental customer lifetime value.",
  },
  {
    title: "M&A technology integration at scale",
    tags: ["M&A", "Integration", "Operational change"],
    description:
      "Coordinated product and technology integration for acquired consumer brands across an approximately 200-person ecosystem spanning Product, Engineering, Data, UX, Marketing, Operations, vendors, and leadership. Built reusable integration, launch, and adoption practices that reduced transformation timelines by 75% and improved scalability for future acquisitions.",
  },
];

function Projects() {
  return (
    <section className="section-padding container-tight border-t border-border">
      <div className="max-w-3xl">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Selected projects
        </h2>
        <p className="mt-3 text-muted-foreground">
          A few recent examples of strategy, execution, and measurable impact.
        </p>
      </div>
      <div className="mt-10 grid gap-8">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden">
            <CardHeader>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <CardTitle className="mt-3 text-xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed text-muted-foreground">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

const achievements = [
  {
    metric: "HelloFresh",
    label: "Leadership Program",
    context:
      "Selected to participate in HelloFresh’s leadership development program in recognition of high performance, leadership potential, and ability to lead complex cross-functional transformation initiatives.",
  },
  {
    metric: "Constellation",
    label: "New Client Growth",
    context:
      "Helped secure new client business through the redesign and relaunch of a customer-facing construction scheduling platform. The improved product experience reduced bugs by approximately 70%, increased customer satisfaction by more than 20%, and supported approximately 200 new monthly active users.",
  },
  {
    metric: "Q-nomy",
    label: "Top Sales Performer",
    context:
      "Recognized as a top sales performer at Q-nomy and received sales awards for exceeding targets, building executive relationships, and converting enterprise opportunities into long-term customer partnerships.",
  },
  {
    metric: "$30M",
    label: "Incremental CLV",
    context: "driven by a high-velocity growth experimentation program.",
  },
  {
    metric: "75%",
    label: "Faster M&A integration timelines",
    context: "through reusable launch and adoption practices.",
  },
];

function Achievements() {
  return (
    <section className="section-padding container-tight border-t border-border">
      <div className="max-w-3xl">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Awards & achievements
        </h2>
        <p className="mt-3 text-muted-foreground">
          Recognized outcomes and quantifiable impact from recent work.
        </p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement) => (
          <div
            key={achievement.label}
            className="rounded-xl border border-border bg-card/50 p-6 transition-colors hover:bg-accent/30"
          >
            <p className="font-display text-3xl font-bold tracking-tight text-foreground">
              {achievement.metric}
            </p>
            <p className="mt-1 font-medium text-foreground">{achievement.label}</p>
            <p className="mt-2 text-sm text-muted-foreground">{achievement.context}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const experience = [
  {
    role: "Product Strategy & Platform Redesign",
    focus: "B2B SaaS · Construction",
    period: "Recent",
    description:
      "Defined strategy and led cross-functional delivery for a complex customer-facing application redesign, resulting in fewer bugs, higher satisfaction, and new user growth.",
  },
  {
    role: "Growth & Experimentation Lead",
    focus: "Consumer subscription",
    period: "Recent",
    description:
      "Built and ran a high-velocity experimentation program using Statsig and behavioral data to improve retention, conversion, and lifetime value.",
  },
  {
    role: "M&A Technology Integration Lead",
    focus: "Consumer technology",
    period: "Recent",
    description:
      "Coordinated product and technology integration across a 200-person ecosystem, establishing reusable practices that dramatically shortened transformation timelines.",
  },
];

function Experience() {
  return (
    <section className="section-padding container-tight border-t border-border">
      <div className="max-w-3xl">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Work experience
        </h2>
        <p className="mt-3 text-muted-foreground">
          Highlights from 10+ years of product leadership across SaaS, consumer tech, and AI-enabled
          workflows.
        </p>
      </div>
      <div className="mt-10 space-y-0">
        {experience.map((item, index) => (
          <div key={item.role} className="group relative py-8">
            {index !== 0 && <Separator className="absolute top-0 left-0 w-full" />}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-2xl">
                <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                <p className="text-sm font-medium text-muted-foreground">{item.focus}</p>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
              <span className="shrink-0 text-sm text-muted-foreground">{item.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-tight section-padding flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-lg font-semibold text-foreground">Marya Shaharyar</p>
          <p className="text-sm text-muted-foreground">
            Product & technology leader based in Toronto.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-muted-foreground hover:underline"
          >
            LinkedIn
          </a>
          <EmailLink
            label={EMAIL}
            className="cursor-pointer text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-muted-foreground hover:underline"
          />
        </div>
      </div>
      <div className="border-t border-border">
        <p className="container-tight py-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Marya Shaharyar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
