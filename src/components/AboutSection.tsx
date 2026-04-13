import logo from "@/assets/logo.png";
<<<<<<< Updated upstream
import gardenerAtWork from "@/assets/gardener-at-work.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Shield, Heart, Clock, Sparkles } from "lucide-react";

const values = [
  { icon: Shield, title: "Reliable", desc: "We show up when we say we will, every time." },
  { icon: Heart, title: "Careful", desc: "Genuine care for every garden we work on." },
  { icon: Clock, title: "Flexible", desc: "Scheduling that works around your life." },
  { icon: Sparkles, title: "Thorough", desc: "Every detail noticed, nothing overlooked." },
];
=======
import { aboutStats } from "@/data/siteContent";
>>>>>>> Stashed changes

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-2">
              About Us
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Taking care of the bear necessities of your garden.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-base">
              Bear Necessities Gardens is designed to feel personal, reliable,
              and quietly premium. The focus is on outdoor spaces that look
              considered and well-kept — whether they need regular maintenance,
              a seasonal reset, or a tidy-up that brings everything back into shape.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
              The tone stays slightly playful, but the work is serious:
              dependable care, thoughtful presentation, and gardens that feel
              easier to enjoy. No hard sell, no fluff — just the right details
              handled well.
            </p>
<<<<<<< Updated upstream

            <div className="grid grid-cols-2 gap-4">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className={`flex items-start gap-3 rounded-2xl border border-border bg-card p-4 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent">
                    <v.icon className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-sm">{v.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{v.desc}</p>
                  </div>
=======
            <div className="flex flex-wrap gap-8">
              {aboutStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl md:text-3xl font-heading font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
>>>>>>> Stashed changes
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-[0_32px_100px_-48px_rgba(40,67,52,0.5)]">
                <img
                  src={gardenerAtWork}
                  alt="Professional gardener at work"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              {/* Floating logo card */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-card p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="" className="h-12 w-12" />
                  <div>
                    <p className="font-heading font-bold text-foreground text-sm">Bear Necessities</p>
                    <p className="text-xs text-muted-foreground">Gardens</p>
                  </div>
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-accent/40 -z-10" />
              <div className="absolute -bottom-3 right-12 h-16 w-16 rounded-full bg-secondary/60 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
