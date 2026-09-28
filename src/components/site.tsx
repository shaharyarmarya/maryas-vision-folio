import { Link } from "@tanstack/react-router";
import {
  ExternalLink,
  Linkedin,
  Mail,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

export const LINKEDIN_URL = "https://www.linkedin.com/in/maryas/";
export const EMAIL = "shaharyarmarya@gmail.com";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl" aria-label="Primary navigation">
      <div className="container-wide flex h-16 items-center justify-between gap-5">
        <Link to="/" className="font-display text-base font-bold text-foreground">
          MS<span className="text-primary">.</span>
        </Link>
        <div className="flex items-center gap-4 overflow-x-auto text-sm font-medium text-muted-foreground sm:gap-7">
          <Link className="nav-link" to="/">About</Link>
          <Link className="nav-link" to="/work">Work</Link>
          <Link className="nav-link" to="/showcase">Showcase</Link>
          <Link className="nav-link" to="/experience">Experience</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export function EmailButton({ children, variant = "default", className }: { children: ReactNode; variant?: "default" | "outline"; className?: string }) {
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

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-background text-foreground">
      <Navigation />
      <div className="flex-1">{children}</div>
      <Footer />
    </main>
  );
}

export function SectionIntro({ kicker, title, copy }: { kicker: string; title: string; copy: string }) {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_0.75fr] lg:items-end">
      <div><p className="eyebrow">{kicker}</p><h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">{title}</h2></div>
      <p className="max-w-xl leading-7 text-muted-foreground lg:justify-self-end">{copy}</p>
    </div>
  );
}

export function ContactSection() {
  return (
    <section className="bg-primary py-20 text-primary-foreground sm:py-24">
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
