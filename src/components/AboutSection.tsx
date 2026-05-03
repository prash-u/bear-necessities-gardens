import TransparentLogo from "@/components/TransparentLogo";
import { useActiveLogo } from "@/components/ActiveLogoProvider";
import { aboutStats } from "@/data/siteContent";

const AboutSection = () => {
  const { selectedLogo } = useActiveLogo();

  return (
    <section id="about" className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top_left,hsla(142,44%,45%,0.12),transparent_58%)]" />
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
              <div className="flex h-64 w-64 items-center justify-center rounded-[2rem] border border-border/60 bg-[linear-gradient(180deg,hsla(42,70%,97%,0.95),hsla(140,24%,92%,0.98))] shadow-[0_32px_120px_-56px_rgba(40,67,52,0.5)] animate-gentle-float md:h-80 md:w-80">
                <TransparentLogo
                  src={selectedLogo.image}
                  crop={"uiCrop" in selectedLogo ? selectedLogo.uiCrop : undefined}
                  alt={`${selectedLogo.name} logo concept`}
                  className="h-32 w-32 object-contain md:h-44 md:w-44"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/15 blur-xl" />
              <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-secondary/60 blur-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
