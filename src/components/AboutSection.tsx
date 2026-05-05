import type { CSSProperties } from "react";
import TransparentLogo from "@/components/TransparentLogo";
import { useActiveLogo } from "@/components/ActiveLogoProvider";
import { aboutStats } from "@/data/siteContent";
import { useParallax } from "@/hooks/useParallax";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { selectedLogo } = useActiveLogo();
  const previewImages = "previewImages" in selectedLogo ? selectedLogo.previewImages : [selectedLogo.image];
  const isSplitMode = previewImages.length > 1;
  const { ref, isVisible } = useScrollReveal();
  const { ref: cardRef, style: cardStyle } = useParallax({ speed: -0.06 });

  return (
    <section id="about" className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top_left,hsla(358,74%,46%,0.16),transparent_58%)]" />
      <div className="section-spotlight left-[8%] top-14 h-24 w-24 opacity-70" />
      <div ref={ref} className={`container px-4 reveal-section ${isVisible ? "is-visible" : ""}`}>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className={`reveal-slide-left ${isVisible ? "is-visible" : ""}`}>
            <p className="mb-2 font-brand text-sm font-medium uppercase tracking-widest text-primary">
              About
            </p>
            <h2 className="mb-6 max-w-3xl text-4xl font-display leading-[0.95] text-foreground md:text-6xl lg:text-[5.25rem]">
              Taking care of the bear necessities of your garden.
            </h2>
            <p className="mb-4 max-w-2xl text-lg leading-9 text-muted-foreground md:text-[1.1rem]">
              Bear Necessities Gardens is designed to feel personal, reliable,
              and quietly premium. The focus is on outdoor spaces that look
              considered and well-kept, whether they need regular maintenance,
              a seasonal reset, or a tidy-up that brings everything back into
              shape.
            </p>
            <p className="mb-6 max-w-2xl text-lg leading-9 text-muted-foreground md:text-[1.1rem]">
              The tone stays slightly playful, but the work is serious:
              dependable care, thoughtful presentation, and gardens that feel
              easier to enjoy. No hard sell, no fluff, just the right details
              handled well.
            </p>
            <p className="mb-6 max-w-2xl font-brand text-sm uppercase tracking-[0.08em] text-accent/90 md:text-base">
              The B.E.A.R. standard: bold work, exacting finish, attentive care, reliable service.
            </p>
            <div className="grid max-w-xl grid-cols-2 gap-6 md:grid-cols-4">
              {aboutStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`stagger-item cinematic-panel flex min-h-[9.25rem] flex-col justify-between rounded-xl border border-white/8 p-4 ${isVisible ? "is-visible" : ""}`}
                  style={{ "--stagger-delay": `${180 + index * 90}ms` } as CSSProperties}
                >
                  <p className="font-brand text-3xl font-bold text-primary md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.12em] text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`flex justify-center reveal-slide-right ${isVisible ? "is-visible" : ""}`}>
            <div ref={cardRef} style={cardStyle} className="relative">
              <div className="cinematic-panel relative flex min-h-[19rem] w-[20rem] items-center justify-center rounded-[2rem] border border-white/10 px-6 shadow-[0_32px_120px_-56px_rgba(0,0,0,0.7)] animate-gentle-float md:min-h-[24rem] md:w-[28rem]">
                <div className="absolute inset-x-[14%] inset-y-[18%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.05)_38%,transparent_74%)] blur-2xl" />
                {isSplitMode ? (
                  <div className="relative z-10 flex w-full items-center justify-center gap-4">
                    {previewImages.map((previewImage, index) => (
                      <TransparentLogo
                        key={`${selectedLogo.id}-${index}`}
                        src={previewImage}
                        alt={`${selectedLogo.name} variant ${index + 1}`}
                        className="h-auto max-h-52 w-auto max-w-[46%] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.28)] md:max-h-64"
                      />
                    ))}
                  </div>
                ) : (
                  <TransparentLogo
                    src={previewImages[0]}
                    alt={`${selectedLogo.name} logo concept`}
                    className="relative z-10 h-auto w-full max-w-[90%] object-contain drop-shadow-[0_14px_28px_rgba(0,0,0,0.24)]"
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
