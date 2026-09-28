import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmailButton, LINKEDIN_URL, PageShell } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Marya Shaharyar" },
      {
        name: "description",
        content:
          "Get in touch with Marya Shaharyar about product leadership, strategy, and building products people actually use. Toronto-based, open to meaningful conversations.",
      },
      { property: "og:title", content: "Contact — Marya Shaharyar" },
      {
        property: "og:description",
        content:
          "Open to meaningful product leadership conversations. Reach Marya by email or LinkedIn.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <section className="flex-1 bg-primary py-20 text-primary-foreground sm:py-28">
        <div className="container-wide grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase text-primary-foreground/70">Let&apos;s talk</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold leading-tight sm:text-6xl">Open to meaningful product leadership conversations.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/80">If you&apos;re building something ambitious—or untangling something complex—I&apos;d love to hear about it. Clicking email copies my address and opens your mail app.</p>
          </div>
          <div className="flex flex-col gap-4">
            <EmailButton className="h-14 border-primary-foreground bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:text-primary">shaharyarmarya@gmail.com</EmailButton>
            <Button asChild size="lg" variant="outline" className="h-14 justify-start border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"><Linkedin aria-hidden="true" />linkedin.com/in/maryas <ExternalLink aria-hidden="true" /></a>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
