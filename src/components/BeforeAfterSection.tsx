import beforeAfter from "@/assets/before-after.jpg";
import gardenLawn from "@/assets/garden-lawn.jpg";
import gardenFeature from "@/assets/garden-feature.jpg";
import WatermarkedImage from "@/components/WatermarkedImage";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle } from "lucide-react";

const stats = [
  { value: "100%", label: "Waste cleared & removed" },
  { value: "Same-week", label: "Availability most months" },
  { value: "5★", label: "Client feedback" },
];

const BeforeAfterSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      className="py-20 md:py-28 overflow-hidden"
      style={{ background: "var(--section-gradient)" }}
      ref={ref}
    >
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images grid */}
          <div
            className={`grid grid-cols-2 gap-3 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="space-y-3">
              <div className="overflow-hidden rounded-[1.5rem]">
                <WatermarkedImage
                  src={beforeAfter}
                  alt="Garden transformation"
                  loading="lazy"
                  width={640}
                  height={400}
                  className="aspect-[4/3] w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-[1.5rem]">
                <WatermarkedImage
                  src={gardenFeature}
                  alt="Cottage garden with stone path"
                  loading="lazy"
                  width={640}
                  height={640}
                  className="aspect-square w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="pt-8 space-y-3">
              <div className="overflow-hidden rounded-[1.5rem]">
                <WatermarkedImage
                  src={gardenLawn}
                  alt="Manicured lawn"
                  loading="lazy"
                  width={640}
                  height={640}
                  className="aspect-square w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-[1.5rem] border border-border bg-card p-6">
                <div className="space-y-4">
                  {stats.map((s) => (
                    <div key={s.label} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <div>
                        <span className="font-heading font-bold text-foreground">{s.value}</span>
                        <span className="ml-2 text-sm text-muted-foreground">{s.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-2">
              Results You Can See
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Every garden has potential — we just bring it out.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Whether it's an overgrown patch that needs rescuing or a
              well-loved garden that deserves a seasonal refresh, the
              transformation is always satisfying.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We take genuine pride in the finish. Edges are crisp, borders
              are clean, and everything is tidied away when we leave. The
              kind of care you'd want for your own garden.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { num: "Neat", sub: "Clean finish" },
                { num: "Calm", sub: "Thoughtful care" },
                { num: "Local", sub: "Community-first" },
              ].map((item) => (
                <div
                  key={item.sub}
                  className="rounded-2xl border border-border bg-card p-4 text-center"
                >
                  <p className="text-xl md:text-2xl font-heading font-bold text-primary">
                    {item.num}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
