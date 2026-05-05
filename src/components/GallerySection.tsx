import { Instagram } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import WatermarkedImage from "@/components/WatermarkedImage";
import { business, galleryItems } from "@/data/siteContent";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const GallerySection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="gallery" className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="section-spotlight left-[10%] top-16 h-28 w-28 opacity-60" />
      <div ref={ref} className={`container px-4 reveal-section ${isVisible ? "is-visible" : ""}`}>
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className={`max-w-3xl reveal-slide-left ${isVisible ? "is-visible" : ""}`}>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.24em] text-primary">
              Gallery
            </p>
            <h2 className="text-balance text-3xl font-display text-foreground md:text-5xl lg:text-6xl">
              Recent work that makes the quality of care feel immediate.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              A mix of finished spaces, planting, maintenance, and work in
              progress gives a clearer sense of the standard, style, and care
              behind each garden.
            </p>
          </div>
          <Button asChild variant="outline" size="lg" className={`reveal-slide-right ${isVisible ? "is-visible" : ""}`}>
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-4 w-4" />
              See recent work
            </a>
          </Button>
        </div>

        <div className={`cinematic-panel reveal-slide-right rounded-[2rem] border border-border/70 p-5 shadow-[0_24px_80px_-48px_rgba(40,67,52,0.45)] ${isVisible ? "is-visible" : ""}`}>
          <Carousel opts={{ loop: true, align: "start" }} className="mx-auto w-full">
            <CarouselContent className="-ml-0">
              {galleryItems.map((item) => (
                <CarouselItem key={item.title} className="basis-full pl-0">
                  <div className="overflow-hidden rounded-[1.5rem]">
                    <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                      <div className="overflow-hidden">
                        <WatermarkedImage
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="aspect-[4/3] h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-between bg-secondary/25 p-8 md:p-10">
                        <div>
                          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                            {item.category}
                          </p>
                          <h3 className="mt-4 text-2xl font-display text-foreground md:text-[2.4rem]">
                            {item.title}
                          </h3>
                          <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                            {item.description}
                          </p>
                        </div>
                        <p className="mt-8 text-sm leading-7 text-muted-foreground">
                          A stronger mix of before-and-after images, tidy
                          finishes, and in-progress working shots gives the site
                          a much more trustworthy, local, and professional feel.
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bottom-4 left-4 top-auto translate-y-0 bg-background/90" />
            <CarouselNext className="bottom-4 right-4 top-auto translate-y-0 bg-background/90" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
