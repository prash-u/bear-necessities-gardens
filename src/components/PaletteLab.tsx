import { useEffect, useState } from "react";
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

const DEFAULTS = {
  backgroundHue: 342,
  backgroundLightness: 12,
  primaryHue: 358,
  primarySaturation: 82,
  accentHue: 42,
  accentLightness: 62,
};

const swatchStyle = (h: number, s: number, l: number) => ({
  backgroundColor: `hsl(${h} ${s}% ${l}%)`,
});

const PaletteLab = () => {
  const [palette, setPalette] = useState(DEFAULTS);

  useEffect(() => {
    const root = document.documentElement;
    const { backgroundHue, backgroundLightness, primaryHue, primarySaturation, accentHue, accentLightness } = palette;
    const normalizedPrimaryHue = primaryHue > 360 ? primaryHue - 360 : primaryHue;

    root.style.setProperty("--background", `${backgroundHue} 56% ${backgroundLightness}%`);
    root.style.setProperty("--foreground", `34 36% 92%`);
    root.style.setProperty("--card", `${backgroundHue + 1} 44% ${Math.min(backgroundLightness + 6, 22)}%`);
    root.style.setProperty("--card-foreground", `34 36% 92%`);
    root.style.setProperty("--popover", `${backgroundHue} 56% ${backgroundLightness}%`);
    root.style.setProperty("--popover-foreground", `34 36% 92%`);
    root.style.setProperty("--primary", `${normalizedPrimaryHue} ${primarySaturation}% 49%`);
    root.style.setProperty("--primary-foreground", `34 36% 92%`);
    root.style.setProperty("--secondary", `${backgroundHue + 1} 34% ${Math.min(backgroundLightness + 11, 28)}%`);
    root.style.setProperty("--secondary-foreground", `34 36% 92%`);
    root.style.setProperty("--muted", `${backgroundHue - 1} 24% ${Math.min(backgroundLightness + 15, 30)}%`);
    root.style.setProperty("--muted-foreground", `35 24% 74%`);
    root.style.setProperty("--accent", `${accentHue} 74% ${accentLightness}%`);
    root.style.setProperty("--accent-foreground", `0 0% 8%`);
    root.style.setProperty("--border", `${backgroundHue + 2} 22% ${Math.min(backgroundLightness + 19, 34)}%`);
    root.style.setProperty("--input", `${backgroundHue + 2} 18% ${Math.min(backgroundLightness + 17, 32)}%`);
    root.style.setProperty("--ring", `${accentHue} 74% ${accentLightness}%`);
    root.style.setProperty(
      "--hero-overlay",
      `linear-gradient(to bottom, hsla(${backgroundHue}, 72%, ${Math.max(backgroundLightness - 2, 5)}%, 0.48), hsla(${backgroundHue}, 55%, ${Math.max(backgroundLightness - 7, 4)}%, 0.84))`,
    );
    root.style.setProperty(
      "--section-gradient",
      `linear-gradient(180deg, hsl(${backgroundHue} 56% ${Math.max(backgroundLightness + 2, 8)}%) 0%, hsl(${backgroundHue} 62% ${Math.max(backgroundLightness - 2, 6)}%) 100%)`,
    );
  }, [palette]);

  const setValue = (key: keyof typeof DEFAULTS, value: number) =>
    setPalette((current) => ({ ...current, [key]: value }));

  return (
    <section className="rounded-2xl border border-white/10 bg-black/10 p-5 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.55)]">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="font-brand text-xs uppercase tracking-[0.22em] text-accent">
            Palette Lab
          </p>
          <h3 className="mt-2 font-display text-3xl leading-none text-foreground">
            Tune the burgundy, red, and gold live.
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Use these sliders to lock in the base atmosphere, brand red, and accent warmth while seeing the actual site update in real time.
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          className="border-white/15 bg-white/5 text-foreground hover:bg-white/10"
          onClick={() => setPalette(DEFAULTS)}
        >
          <RotateCcw className="h-4 w-4" />
          Reset
        </Button>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        {[
          { key: "backgroundHue", label: "Burgundy Hue", min: 330, max: 358 },
          { key: "backgroundLightness", label: "Burgundy Depth", min: 7, max: 20 },
          { key: "primaryHue", label: "Brand Red Hue", min: 350, max: 370 },
          { key: "primarySaturation", label: "Brand Red Intensity", min: 58, max: 96 },
          { key: "accentHue", label: "Accent Gold Hue", min: 28, max: 54 },
          { key: "accentLightness", label: "Accent Brightness", min: 50, max: 74 },
        ].map((slider) => {
          const rawValue = palette[slider.key as keyof typeof DEFAULTS];
          const displayValue = slider.key === "primaryHue" && rawValue > 360 ? rawValue - 360 : rawValue;
          return (
            <label key={slider.key} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-medium text-foreground">{slider.label}</span>
                <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{displayValue}</span>
              </div>
              <input
                type="range"
                min={slider.min}
                max={slider.max}
                value={rawValue}
                onChange={(event) =>
                  setValue(
                    slider.key as keyof typeof DEFAULTS,
                    Number(event.target.value),
                  )
                }
                className="mt-4 w-full accent-[hsl(var(--accent))]"
              />
            </label>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
          <span className="h-4 w-4 rounded-full" style={swatchStyle(palette.backgroundHue, 56, palette.backgroundLightness)} />
          <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Base</span>
        </div>
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
          <span
            className="h-4 w-4 rounded-full"
            style={swatchStyle(
              palette.primaryHue > 360 ? palette.primaryHue - 360 : palette.primaryHue,
              palette.primarySaturation,
              49,
            )}
          />
          <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Primary</span>
        </div>
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
          <span className="h-4 w-4 rounded-full" style={swatchStyle(palette.accentHue, 74, palette.accentLightness)} />
          <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Accent</span>
        </div>
      </div>
    </section>
  );
};

export default PaletteLab;
