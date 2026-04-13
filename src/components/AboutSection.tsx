import logo from "@/assets/logo.png";
import { aboutStats } from "@/data/siteContent";

const AboutSection = () => {
  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="container px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              About
            </p>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-5xl">
              Taking care of the bear necessities of your garden.
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Bear Necessities Gardens is designed to feel personal, reliable,
              and quietly premium. The focus is on outdoor spaces that look
              considered and well-kept, whether they need regular maintenance,
              a seasonal reset, or a tidy-up that brings everything back into
              shape.
            </p>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              The tone stays slightly playful, but the work is serious:
              dependable care, thoughtful presentation, and gardens that feel
              easier to enjoy. No hard sell, no fluff, just the right details
              handled well.
            </p>
            <div className="flex flex-wrap gap-8">
              {aboutStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-2xl font-bold text-primary md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="flex h-64 w-64 items-center justify-center rounded-full bg-accent/50 shadow-[0_24px_80px_-48px_rgba(40,67,52,0.45)] animate-gentle-float md:h-80 md:w-80">
                <img
                  src={logo}
                  alt="Bear Necessities Gardens logo"
                  className="h-40 w-40 md:h-52 md:w-52"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary opacity-20" />
              <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-secondary opacity-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
