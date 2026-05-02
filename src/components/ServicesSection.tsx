import WatermarkedImage from "@/components/WatermarkedImage";
import { servicePreviewImages, services } from "@/data/siteContent";

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-20 md:py-28"
      style={{ background: "var(--section-gradient)" }}
    >
      <div className="container px-4">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Services
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            Practical garden care, presented beautifully.
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            A focused range of services for gardens that need tidying, upkeep,
            and a better overall feel rather than a generic
            all-things-to-all-people offer.
          </p>
        </div>

        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-[1.5rem] border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_-48px_rgba(40,67,52,0.4)]"
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
              className="aspect-[4/3] overflow-hidden rounded-[1.5rem]"
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
