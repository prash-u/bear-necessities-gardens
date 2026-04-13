import { Instagram } from "lucide-react";
<<<<<<< Updated upstream
import gardenPatio from "@/assets/garden-patio.jpg";
import gardenPlanting from "@/assets/garden-planting.jpg";
import gardenMaintenance from "@/assets/garden-maintenance.jpg";
import gardenFeature from "@/assets/garden-feature.jpg";
import gardenLawn from "@/assets/garden-lawn.jpg";
import beforeAfter from "@/assets/before-after.jpg";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const galleryItems = [
  { image: gardenPatio, title: "Outdoor spaces with a settled, welcoming feel", span: "col-span-1 row-span-1" },
  { image: gardenFeature, title: "Cottage garden with winding paths", span: "col-span-1 row-span-2" },
  { image: gardenPlanting, title: "Borders, planting, and seasonal texture", span: "col-span-1 row-span-1" },
  { image: beforeAfter, title: "From overgrown to transformed", span: "col-span-2 row-span-1" },
  { image: gardenLawn, title: "Manicured lawns and crisp edges", span: "col-span-1 row-span-1" },
  { image: gardenMaintenance, title: "Regular care keeps gardens thriving", span: "col-span-1 row-span-1" },
];
=======
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { business, galleryItems } from "@/data/siteContent";
>>>>>>> Stashed changes

const GallerySection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="gallery" className="bg-background py-20 md:py-28 overflow-hidden">
      <div className="container px-4" ref={ref}>
        <div
          className={`mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-3xl">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.24em] text-primary">
              Gallery
            </p>
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-5xl">
              Our work speaks for itself.
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              A selection of garden projects showcasing the range of work we do —
              from quick tidy-ups to full seasonal transformations.
            </p>
          </div>
          <Button asChild variant="outline" size="lg" className="rounded-full shrink-0">
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-4 w-4" />
              See more on Instagram
            </a>
          </Button>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[240px] md:auto-rows-[280px]">
          {galleryItems.map((item, i) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-[1.5rem] ${item.span} transition-all duration-700 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="font-heading text-sm font-semibold text-primary-foreground">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
