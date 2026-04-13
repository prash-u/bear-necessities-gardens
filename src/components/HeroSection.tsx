import { ArrowRight, Instagram, Mail } from "lucide-react";
import heroImage from "@/assets/hero-garden.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
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
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
      />

      <div className="container relative z-10 px-4 pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="mx-auto max-w-4xl text-center">
          <p className="animate-fade-in-up mb-4 text-sm uppercase tracking-[0.28em] text-primary-foreground/80 md:text-base">
            Gardens, the Bear Way
          </p>
          <h1
            className="animate-fade-in-up text-balance text-4xl font-bold text-primary-foreground sm:text-5xl md:text-7xl"
            style={{ animationDelay: "0.15s" }}
          >
            Bear Necessities Gardens
          </h1>
          <p
            className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-balance text-lg text-primary-foreground/90 md:text-2xl"
            style={{ animationDelay: "0.3s" }}
          >
            The bear essentials for beautiful outdoor spaces.
          </p>
          <p
            className="animate-fade-in-up mx-auto mt-5 max-w-2xl text-base leading-8 text-primary-foreground/75 md:text-lg"
            style={{ animationDelay: "0.4s" }}
          >
            Thoughtful garden maintenance, tidy-ups, and seasonal refreshes
            with a classy finish and just enough personality to stay memorable.
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
              className="border-primary-foreground/30 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10"
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
                href="https://www.instagram.com/bear.necessities.gardens/"
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
          {[
            "From overgrown to un-bear-lievably good.",
            "Professional garden care with a calm, polished finish.",
            "Recent work available on Instagram while the site gallery grows.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[1.5rem] border border-primary-foreground/15 bg-primary-foreground/8 p-5 text-left backdrop-blur-sm"
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
