import { Leaf, TreePine, Flower2, Shovel, Mountain, Droplets } from "lucide-react";
import gardenPatio from "@/assets/garden-patio.jpg";
import gardenPlanting from "@/assets/garden-planting.jpg";
import gardenMaintenance from "@/assets/garden-maintenance.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  { icon: Droplets, title: "Garden maintenance", description: "Ongoing care to keep lawns, borders, beds, and outdoor spaces tidy, healthy, and presentable.", tag: "Popular" },
  { icon: Shovel, title: "Tidy-ups & clear-outs", description: "A practical reset for overgrown or neglected spaces, making everything manageable again.", tag: null },
  { icon: Flower2, title: "Seasonal planting", description: "Fresh planting and subtle updates that bring colour, texture, and renewed life into the garden.", tag: null },
  { icon: Leaf, title: "Pruning & shaping", description: "Thoughtful cutting back that keeps gardens looking cared for without feeling overdone.", tag: null },
  { icon: Mountain, title: "Landscaping", description: "Planting, shaping, and practical improvements that give the whole garden a stronger feel.", tag: null },
  { icon: TreePine, title: "Tailored garden help", description: "Flexible support for the bear essentials of your garden, depending on what the space needs most.", tag: "Flexible" },
];

const images = [
  { src: gardenPatio, alt: "Beautiful garden patio", label: "Patios & outdoor living" },
  { src: gardenPlanting, alt: "Colourful garden planting", label: "Planting & borders" },
  { src: gardenMaintenance, alt: "Well-maintained garden", label: "Regular maintenance" },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="services"
      className="py-20 md:py-28 overflow-hidden"
      style={{ background: "var(--section-gradient)" }}
    >
      <div className="container px-4" ref={ref}>
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-2">
            Services
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Practical garden care, presented beautifully.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A focused range of services for gardens that need tidying, upkeep,
            and a better overall feel.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group relative rounded-[1.5rem] border border-border bg-card p-7 transition-all duration-700 hover:-translate-y-1.5 hover:shadow-[0_24px_80px_-48px_rgba(40,67,52,0.45)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${150 + i * 80}ms` }}
            >
              {s.tag && (
                <span className="absolute top-5 right-5 rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  {s.tag}
                </span>
              )}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:shadow-lg">
                <s.icon className="h-6 w-6 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`grid md:grid-cols-3 gap-4 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {images.map((img) => (
            <div key={img.label} className="group relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-4 left-4 text-sm font-medium text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
