import { ArrowRight, Instagram, Mail } from "lucide-react";
import heroImage from "@/assets/hero-garden.jpg";
import TransparentLogo from "@/components/TransparentLogo";
import { Button } from "@/components/ui/button";
import { business, logoShowcaseModes, showcaseNotes } from "@/data/siteContent";

type StyleMode = (typeof logoShowcaseModes)[number]["id"];

type HeroSectionProps = {
  activeMode: StyleMode;
};

const HeroSection = ({ activeMode }: HeroSectionProps) => {
  const mode = logoShowcaseModes.find((item) => item.id === activeMode) ?? logoShowcaseModes[0];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <img
        src={heroImage}
        alt="A beautifully maintained garden in warm evening light"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,25,32,0.18),transparent_28%)]" />

      <div className="container relative z-10 px-4 pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="mx-auto max-w-5xl text-center">
          <p className="animate-fade-in-up mb-4 text-sm uppercase tracking-[0.28em] text-accent md:text-base">
            Visually richer burgundy direction
          </p>

          {mode.type === "image" ? (
            <div
              className="animate-fade-in-up mx-auto flex max-w-3xl items-center justify-center rounded-md border border-white/10 bg-white/5 px-6 py-5 shadow-[0_30px_90px_-48px_rgba(0,0,0,0.8)] backdrop-blur-sm"
              style={{ animationDelay: "0.15s" }}
            >
              <TransparentLogo
                src={mode.image}
                alt={mode.name}
                className="h-auto w-full max-w-3xl"
              />
            </div>
          ) : (
            <div className="animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              <h1 className="font-display text-6xl text-foreground sm:text-7xl md:text-8xl">
                BEAR
              </h1>
              <p className="mt-3 font-heading text-base uppercase tracking-[0.45em] text-accent md:text-xl">
                Necessities Gardens
              </p>
            </div>
          )}

          <h2
            className="animate-fade-in-up mx-auto mt-10 max-w-4xl text-balance font-display text-4xl text-foreground sm:text-5xl md:text-6xl"
            style={{ animationDelay: "0.3s" }}
          >
            {mode.heroTitle}
          </h2>
          <p
            className="animate-fade-in-up mx-auto mt-5 max-w-2xl text-base leading-8 text-primary-foreground/75 md:text-lg"
            style={{ animationDelay: "0.4s" }}
          >
            {mode.heroCopy}
          </p>
          <p
            className="animate-fade-in-up mx-auto mt-4 max-w-2xl text-base leading-8 text-primary-foreground/65"
            style={{ animationDelay: "0.48s" }}
          >
            {business.tagline}
          </p>
          <div
            className="animate-fade-in-up mt-8 flex flex-col justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "0.55s" }}
          >
            <Button size="lg" asChild>
              <a href="#contact">
                <Mail className="h-4 w-4" />
                Request an Enquiry
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href="#services">
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-4 w-4" />
                View Recent Work
              </a>
            </Button>
          </div>
        </div>

        <div
          className="animate-fade-in-up mt-12 grid gap-4 md:mt-16 md:grid-cols-3"
          style={{ animationDelay: "0.7s" }}
        >
          {showcaseNotes.map((item) => (
            <div
              key={item}
              className="rounded-md border border-primary-foreground/12 bg-primary-foreground/6 p-5 text-left backdrop-blur-sm"
            >
              <p className="text-sm leading-7 text-primary-foreground/85">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
