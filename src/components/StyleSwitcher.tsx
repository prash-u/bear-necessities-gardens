import TransparentLogo from "@/components/TransparentLogo";
import PaletteLab from "@/components/PaletteLab";
import { logoShowcaseModes, type LogoShowcaseMode } from "@/data/siteContent";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

type StyleSwitcherProps = {
  activeMode: LogoShowcaseMode["id"];
  onChange: (mode: LogoShowcaseMode["id"]) => void;
};

const StyleSwitcher = ({ activeMode, onChange }: StyleSwitcherProps) => {
  const activeLogo =
    logoShowcaseModes.find((mode) => mode.id === activeMode) ?? logoShowcaseModes[0];
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="border-b border-white/10 bg-white/[0.02] py-12 md:py-16">
      <div ref={ref} className={`container reveal-section ${isVisible ? "is-visible" : ""}`}>
        <details className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-card/50 shadow-[0_24px_70px_-50px_rgba(0,0,0,0.55)]">
          <summary className="cursor-pointer list-none px-6 py-5 md:px-8 md:py-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className={`max-w-2xl reveal-slide-left ${isVisible ? "is-visible" : ""}`}>
                <p className="font-brand text-xs uppercase tracking-[0.22em] text-accent">
                  Client Review Mode
                </p>
                <h2 className="mt-2 font-display text-3xl leading-none text-foreground md:text-4xl">
                  Compare logo directions when needed.
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  The live site stays service-first, while this section keeps the concept comparison and palette tuning available for review.
                </p>
              </div>

              <div className={`cinematic-panel reveal-slide-right flex items-center gap-4 rounded-2xl border border-white/10 px-4 py-3 ${isVisible ? "is-visible" : ""}`}>
                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-black/10 p-2">
                  <TransparentLogo
                    src={"uiImage" in activeLogo ? activeLogo.uiImage : activeLogo.image}
                    alt={activeLogo.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Current direction
                  </p>
                  <p className="mt-1 font-display text-2xl leading-none text-foreground">
                    {activeLogo.name}
                  </p>
                </div>
                <span className="ml-2 text-xs uppercase tracking-[0.18em] text-accent transition-transform duration-300 group-open:rotate-180">
                  Expand
                </span>
              </div>
            </div>
          </summary>

          <div className="border-t border-white/10 px-6 py-6 md:px-8 md:py-8">
            <details className="mb-6 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <summary className="cursor-pointer list-none text-sm font-medium uppercase tracking-[0.16em] text-accent">
                Open palette lab
              </summary>
              <div className="mt-4">
                <PaletteLab />
              </div>
            </details>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {logoShowcaseModes.map((mode) => {
                const isActive = mode.id === activeMode;
                return (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => onChange(mode.id)}
                    className={cn(
                      "overflow-hidden rounded-md border bg-card/90 text-left transition-all duration-300 backdrop-blur-sm",
                      isActive
                        ? "border-accent shadow-[0_28px_60px_-40px_rgba(215,25,32,0.75)]"
                        : "border-white/10 hover:-translate-y-1 hover:border-primary/50",
                    )}
                  >
                    <div className="flex h-40 items-center justify-center bg-white/[0.04] px-4 py-5">
                      {"previewImages" in mode && mode.previewImages.length > 1 ? (
                        <div className="flex h-full w-full items-center justify-center gap-4">
                          {mode.previewImages.map((previewImage, index) => (
                            <TransparentLogo
                              key={`${mode.id}-${index}`}
                              src={previewImage}
                              alt={`${mode.name} variant ${index + 1}`}
                              className="max-h-full w-auto max-w-[48%]"
                            />
                          ))}
                        </div>
                      ) : (
                        <TransparentLogo
                          src={"previewImages" in mode ? mode.previewImages[0] : mode.image}
                          alt={mode.name}
                          className="max-h-full w-auto max-w-full"
                        />
                      )}
                    </div>
                    <div className="border-t border-white/10 p-5">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="font-display text-2xl leading-none text-foreground">
                            {mode.name}
                          </p>
                        </div>
                        <span
                          className={cn(
                            "rounded-sm border px-2 py-1 font-heading text-[11px] uppercase tracking-[0.18em]",
                            isActive
                              ? "border-accent bg-accent text-accent-foreground"
                              : "border-white/12 text-muted-foreground",
                          )}
                        >
                          {isActive ? "Showing" : "Preview"}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {mode.summary}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </details>
      </div>
    </section>
  );
};

export default StyleSwitcher;
