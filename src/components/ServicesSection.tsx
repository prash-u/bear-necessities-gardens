import { Leaf, TreePine, Flower2, Shovel, Fence, Droplets } from "lucide-react";
import gardenPatio from "@/assets/garden-patio.jpg";
import gardenPlanting from "@/assets/garden-planting.jpg";
import gardenMaintenance from "@/assets/garden-maintenance.jpg";

const services = [
  { icon: TreePine, title: "Garden Design", description: "Bespoke garden designs tailored to your space, style, and lifestyle." },
  { icon: Leaf, title: "Landscaping", description: "Full landscaping services including turf, borders, and structural elements." },
  { icon: Flower2, title: "Planting Schemes", description: "Expertly curated planting for year-round colour and interest." },
  { icon: Shovel, title: "Garden Clearance", description: "Complete garden clearance and site preparation for a fresh start." },
  { icon: Fence, title: "Fencing & Decking", description: "Quality fencing, decking, and outdoor structures built to last." },
  { icon: Droplets, title: "Maintenance", description: "Regular maintenance plans to keep your garden looking its best." },
];

const images = [gardenPatio, gardenPlanting, gardenMaintenance];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28" style={{ background: "var(--section-gradient)" }}>
      <div className="container px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-2">What We Do</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From concept to completion, we offer a full range of garden and landscaping services.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card rounded-lg p-6 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="h-12 w-12 rounded-md bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="h-6 w-6 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div key={i} className="rounded-lg overflow-hidden aspect-[4/3]">
              <img src={img} alt="Our garden work" loading="lazy" width={800} height={600} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
