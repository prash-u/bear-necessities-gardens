import TransparentLogo from "@/components/TransparentLogo";
import { useActiveLogo } from "@/components/ActiveLogoProvider";
import { aboutStats } from "@/data/siteContent";

const AboutSection = () => {
  const { selectedLogo } = useActiveLogo();
  const isSplitMode = "previewCrops" in selectedLogo;

  return (
    <section id="about" className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top_left,hsla(358,74%,46%,0.16),transparent_58%)]" />
      <div className="container px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-2 font-brand text-sm font-medium uppercase tracking-widest text-primary">
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
            <div className="grid max-w-xl grid-cols-2 gap-6 md:grid-cols-4">
              {aboutStats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
                  <p className="font-brand text-3xl font-bold text-primary md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="relative flex min-h-[19rem] w-[20rem] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_25%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] px-6 shadow-[0_32px_120px_-56px_rgba(0,0,0,0.7)] animate-gentle-float md:min-h-[24rem] md:w-[28rem]">
                <div className="absolute inset-x-[14%] inset-y-[18%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.05)_38%,transparent_74%)] blur-2xl" />
                {isSplitMode ? (
                  <div className="relative z-10 flex w-full items-center justify-center gap-4">
                    {selectedLogo.previewCrops.map((crop, index) => (
                      <TransparentLogo
                        key={`${selectedLogo.id}-${index}`}
                        src={selectedLogo.image}
                        crop={crop}
                        alt={`${selectedLogo.name} variant ${index + 1}`}
                        className="h-auto max-h-52 w-auto max-w-[48%] object-contain drop-shadow-[0_24px_38px_rgba(0,0,0,0.42)] md:max-h-64"
                      />
                    ))}
                  </div>
                ) : (
                  <TransparentLogo
                    src={selectedLogo.image}
                    alt={`${selectedLogo.name} logo concept`}
                    className="relative z-10 h-auto w-full max-w-[88%] object-contain drop-shadow-[0_24px_38px_rgba(0,0,0,0.42)]"
                  />
                )}
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/15 blur-xl" />
              <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-accent/30 blur-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
