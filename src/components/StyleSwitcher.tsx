import TransparentLogo from "@/components/TransparentLogo";
import { logoShowcaseModes, type LogoShowcaseMode } from "@/data/siteContent";
import { cn } from "@/lib/utils";

type StyleSwitcherProps = {
  activeMode: LogoShowcaseMode["id"];
  onChange: (mode: LogoShowcaseMode["id"]) => void;
};

const StyleSwitcher = ({ activeMode, onChange }: StyleSwitcherProps) => {
  return (
    <section className="border-b border-white/10 bg-white/[0.03] pt-16 md:pt-20">
      <div className="container py-5">
        <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-heading text-xs uppercase tracking-[0.24em] text-accent">
              Presentation Switcher
            </p>
            <h2 className="mt-2 font-display text-3xl leading-none text-foreground md:text-4xl">
              Compare logo directions live.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
              These are the real logo candidates, shown directly inside the
              live site. This makes it easier to react to each option in
              context rather than judging them as isolated image files.
            </p>
          </div>
        </div>

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
                  {"previewCrops" in mode ? (
                    <div className="flex h-full w-full items-center justify-center gap-4">
                      {mode.previewCrops.map((crop, index) => (
                        <TransparentLogo
                          key={`${mode.id}-${index}`}
                          src={mode.image}
                          crop={crop}
                          alt={`${mode.name} variant ${index + 1}`}
                          className="max-h-full w-auto max-w-[48%]"
                        />
                      ))}
                    </div>
                  ) : (
                    <TransparentLogo
                      src={mode.image}
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
    </section>
  );
};

export default StyleSwitcher;
