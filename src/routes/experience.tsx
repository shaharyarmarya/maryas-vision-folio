import { createFileRoute } from "@tanstack/react-router";
import {
  Building2,
  Sparkles,
  Trophy,
} from "lucide-react";
import { PageShell, SectionIntro } from "@/components/site";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience & Recognition — Marya Shaharyar" },
      {
        name: "description",
        content:
          "A decade of product, technology, growth, and enterprise leadership across Constellation, HelloFresh, and Q-nomy—plus moments of recognition along the way.",
      },
      { property: "og:title", content: "Experience & Recognition — Marya Shaharyar" },
      {
        property: "og:description",
        content:
          "Selected chapters from 10+ years across product, technology, growth, and enterprise leadership.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExperiencePage,
});

const experience = [
  { company: "Constellation", role: "Product strategy & platform redesign", focus: "B2B SaaS · Construction", copy: "Defined strategy and led cross-functional delivery for a complex customer-facing application redesign, improving reliability, satisfaction, and user growth." },
  { company: "HelloFresh", role: "Growth & technology transformation", focus: "Consumer subscription · M&A integration", copy: "Led experimentation and coordinated large-scale product and technology integration across Product, Engineering, Data, UX, Marketing, and Operations." },
  { company: "Q-nomy", role: "Enterprise customer leadership", focus: "B2B technology · Client partnerships", copy: "Built executive relationships, translated enterprise needs into technology opportunities, and earned recognition for high-performing sales results." },
];

const recognition = [
  { icon: Trophy, company: "HelloFresh", title: "Leadership Program", copy: "Selected for leadership development in recognition of high performance, leadership potential, and the ability to lead complex cross-functional transformation." },
  { icon: Building2, company: "Constellation", title: "New Client Growth", copy: "Helped secure new client business through the redesign and relaunch of a customer-facing construction scheduling platform." },
  { icon: Sparkles, company: "Q-nomy", title: "Top Sales Performer", copy: "Recognized with sales awards for exceeding targets, building executive relationships, and converting enterprise opportunities into long-term partnerships." },
];

function ExperiencePage() {
  return (
    <PageShell>
      <section className="section-space">
        <div className="container-wide grid gap-12 lg:grid-cols-[0.45fr_1fr] lg:gap-20">
          <div><p className="eyebrow">Experience</p><h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">A decade of building, scaling, and transforming.</h2><p className="mt-5 leading-7 text-muted-foreground">Selected chapters from 10+ years across product, technology, growth, and enterprise leadership.</p></div>
          <div className="relative border-l border-border pl-8 sm:pl-12">
            {experience.map((item, index) => <article key={item.company} className="relative border-b border-border py-8 first:pt-0 last:border-b-0 last:pb-0"><span className="absolute -left-[2.3rem] top-1 size-3 rounded-full border-4 border-background bg-primary sm:-left-[3.3rem]" aria-hidden="true" /><div className="flex flex-wrap items-baseline justify-between gap-2"><p className="font-semibold text-primary">{item.company}</p><span className="text-xs font-medium uppercase text-muted-foreground">Selected chapter · 0{index + 1}</span></div><h3 className="mt-3 font-display text-2xl font-bold">{item.role}</h3><p className="mt-1 text-sm font-medium text-muted-foreground">{item.focus}</p><p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{item.copy}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section-space border-t border-border bg-section">
        <div className="container-wide">
          <SectionIntro kicker="Recognition" title="Trusted to lead when it matters" copy="Distinct moments of recognition across leadership, customer growth, and enterprise relationship-building." />
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-3">
            {recognition.map(({ icon: Icon, company, title, copy }) => <article key={company} className="bg-card p-8 transition-colors hover:bg-primary-soft"><Icon className="size-6 text-primary" aria-hidden="true" /><p className="mt-10 text-xs font-bold uppercase text-primary">{company}</p><h3 className="mt-2 font-display text-2xl font-bold">{title}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">{copy}</p></article>)}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
