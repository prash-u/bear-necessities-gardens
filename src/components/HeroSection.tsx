import { ArrowRight, Instagram, Mail, ChevronDown } from "lucide-react";
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
        className="absolute inset-0 h-full w-full object-cover scale-105 animate-[hero-zoom_20s_ease-in-out_infinite_alternate]"
        width={1920}
        height={1080}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, hsla(150,10%,8%,0.35) 0%, hsla(150,10%,10%,0.55) 50%, hsla(150,10%,10%,0.8) 100%)",
        }}
      />

      <div className="container relative z-10 px-4 pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/8 px-4 py-1.5 backdrop-blur-sm mb-6">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/80">
              Now taking bookings
            </span>
          </div>

          <h1
            className="animate-fade-in-up text-balance text-4xl font-bold text-primary-foreground sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95]"
            style={{ animationDelay: "0.15s" }}
          >
            Bear Necessities
            <span className="block text-primary-foreground/70 mt-2">Gardens</span>
          </h1>
          <p
            className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-balance text-lg text-primary-foreground/85 md:text-2xl font-light"
            style={{ animationDelay: "0.3s" }}
          >
            The bear essentials for beautiful outdoor spaces.
          </p>
          <p
            className="animate-fade-in-up mx-auto mt-5 max-w-xl text-base leading-8 text-primary-foreground/60"
            style={{ animationDelay: "0.4s" }}
          >
            Thoughtful garden maintenance, tidy-ups, and seasonal refreshes
            with a classy finish and just enough personality to stay memorable.
          </p>
          <div
            className="animate-fade-in-up mt-10 flex flex-col justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "0.55s" }}
          >
            <Button size="lg" asChild className="rounded-full text-base px-8 h-12">
              <a href="#contact">
                <Mail className="h-4 w-4" />
                Request a Free Quote
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base px-8 h-12 border-primary-foreground/25 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10"
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
              className="rounded-full text-base px-8 h-12 text-primary-foreground hover:bg-primary-foreground/10"
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
          className="animate-fade-in-up mt-16 grid gap-4 md:mt-20 md:grid-cols-3"
          style={{ animationDelay: "0.7s" }}
        >
          {[
            { emoji: "🌿", text: "From overgrown to un-bear-lievably good." },
            { emoji: "✨", text: "Professional garden care with a calm, polished finish." },
            { emoji: "📸", text: "Recent work available on Instagram — check it out." },
          ].map((item) => (
            <div
              key={item.text}
              className="group rounded-[1.5rem] border border-primary-foreground/10 bg-primary-foreground/5 p-6 text-left backdrop-blur-md transition-all duration-300 hover:bg-primary-foreground/8 hover:border-primary-foreground/20"
            >
              <span className="text-2xl mb-3 block">{item.emoji}</span>
              <p className="text-sm leading-7 text-primary-foreground/80">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" className="text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
          <ChevronDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
