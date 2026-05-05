import type { CSSProperties } from "react";
import WatermarkedImage from "@/components/WatermarkedImage";
import { servicePreviewImages, services } from "@/data/siteContent";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="services"
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: "var(--section-gradient)" }}
    >
      <div className="section-spotlight right-[10%] top-24 h-28 w-28 opacity-70" />
      <div ref={ref} className={`container px-4 reveal-section ${isVisible ? "is-visible" : ""}`}>
        <div className={`mb-16 text-center reveal-slide-left ${isVisible ? "is-visible" : ""}`}>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Services
          </p>
          <h2 className="mb-4 text-3xl font-display text-foreground md:text-5xl lg:text-6xl">
            Practical garden care, presented beautifully.
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            A focused range of services for gardens that need tidying, upkeep,
            and a better overall feel rather than a generic
            all-things-to-all-people offer.
          </p>
        </div>

        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`stagger-item cinematic-panel group rounded-[1.5rem] border border-border p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_100px_-54px_rgba(0,0,0,0.55)] ${isVisible ? "is-visible" : ""}`}
              style={{ "--stagger-delay": `${index * 110}ms` } as CSSProperties}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6 text-accent-foreground transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {servicePreviewImages.map((image, index) => (
            <div
              key={index}
              className={`stagger-item aspect-[4/3] overflow-hidden rounded-[1.5rem] ${isVisible ? "is-visible" : ""}`}
              style={{ "--stagger-delay": `${220 + index * 120}ms` } as CSSProperties}
            >
              <WatermarkedImage
                src={image}
                alt="Bear Necessities Gardens work preview"
                loading="lazy"
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
