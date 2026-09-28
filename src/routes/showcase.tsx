import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageShell, SectionIntro } from "@/components/site";

export const Route = createFileRoute("/showcase")({
  head: () => ({
    meta: [
      { title: "Suiteable — Shipped Product Showcase — Marya Shaharyar" },
      {
        name: "description",
        content:
          "Suiteable is now a shipped product: traveller preferences turned into a transparent hotel match score. Started as Figma mockups accelerated with AI.",
      },
      { property: "og:title", content: "Suiteable — Shipped Product Showcase — Marya Shaharyar" },
      {
        property: "og:description",
        content:
          "A hotel matched to you: Suiteable turned a self-directed design concept into a shipped product.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ShowcasePage,
});

const showcaseScreens = [
  { src: "/suiteable-logo-brand.png", caption: "Brand system — logo, app icon, and colour palette", aspect: "aspect-[4/3]" },
  { src: "/suiteable-preferences.png", caption: "Preference capture — free-text plus structured must-haves and deal-breakers", aspect: "aspect-[9/19]" },
  { src: "/suiteable-hotel-result.webp", caption: "Match result — a scored hotel against the traveller's saved preferences", aspect: "aspect-[9/19]" },
];

function ShowcasePage() {
  return (
    <PageShell>
      <section className="section-space">
        <div className="container-wide">
          <SectionIntro
            kicker="Product showcase · Now shipped"
            title="Suiteable — a hotel matched to you"
            copy="Traveller preferences turned into a transparent hotel match score—a self-directed concept that is now a live product."
          />
          <div className="mt-8 max-w-3xl border-l-2 border-primary pl-5 text-sm leading-7 text-muted-foreground">
            <p className="flex items-start gap-2">
              <CheckCircle2 aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" />
              <span><strong className="font-semibold text-foreground">Suiteable is now shipped.</strong> What started as mockups I created in Figma—using AI to accelerate the design thinking—has become a real, live product.</span>
            </p>
            <p className="mt-3">
              The AI-accelerated process let me move faster on exploring concepts, copy, and screen structure, so I could spend my time on the product decisions that shaped what shipped.
            </p>
          </div>
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
    </PageShell>
  );
}
