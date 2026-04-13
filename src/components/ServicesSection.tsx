import { Leaf, TreePine, Flower2, Shovel, Mountain, Droplets } from "lucide-react";
import gardenPatio from "@/assets/garden-patio.jpg";
import gardenPlanting from "@/assets/garden-planting.jpg";
import gardenMaintenance from "@/assets/garden-maintenance.jpg";

const services = [
  { icon: Droplets, title: "Garden maintenance", description: "Ongoing care to keep lawns, borders, beds, and outdoor spaces tidy, healthy, and presentable." },
  { icon: Shovel, title: "Tidy-ups and clear-outs", description: "A practical reset for overgrown or neglected spaces, with the goal of making everything feel manageable again." },
  { icon: Flower2, title: "Seasonal planting", description: "Fresh planting and subtle updates that bring colour, texture, and renewed life into the garden." },
  { icon: Leaf, title: "Pruning and shaping", description: "Thoughtful cutting back and maintenance that keeps gardens looking cared for without feeling overdone." },
  { icon: Mountain, title: "Landscaping", description: "Planting, shaping, and practical improvements that give the whole garden a stronger, more cohesive feel." },
  { icon: TreePine, title: "Tailored garden help", description: "Flexible support for the bear essentials of your garden, depending on what the space needs most." },
];

const images = [gardenPatio, gardenPlanting, gardenMaintenance];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28" style={{ background: "var(--section-gradient)" }}>
      <div className="container px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-2">Services</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Practical garden care, presented beautifully.</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A focused range of services for gardens that need tidying, upkeep,
            and a better overall feel rather than a generic all-things-to-all-people offer.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-[1.5rem] border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_-48px_rgba(40,67,52,0.4)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden rounded-[1.5rem]">
              <img src={img} alt="Bear Necessities Gardens work preview" loading="lazy" width={800} height={600} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
