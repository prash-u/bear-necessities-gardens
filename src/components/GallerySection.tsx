import { Instagram } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { business, galleryItems } from "@/data/siteContent";

const GallerySection = () => {
  return (
    <section id="gallery" className="bg-background py-20 md:py-28">
      <div className="container px-4">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.24em] text-primary">
              Gallery
            </p>
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-5xl">
              A polished gallery, ready for your real garden photos.
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The carousel is already wired for real project images. Each slide
              can use a local asset import or a direct image URL, which makes
              it easy to replace placeholders once photography is organised.
            </p>
          </div>
          <Button asChild variant="outline" size="lg">
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

        <div className="rounded-[2rem] border border-border/70 bg-card/80 p-5 shadow-[0_24px_80px_-48px_rgba(40,67,52,0.45)] backdrop-blur">
          <Carousel opts={{ loop: true, align: "start" }} className="mx-auto w-full">
            <CarouselContent className="-ml-0">
              {galleryItems.map((item) => (
                <CarouselItem key={item.title} className="basis-full pl-0">
                  <div className="overflow-hidden rounded-[1.5rem]">
                    <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                      <div className="overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="aspect-[4/3] h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-between bg-secondary/35 p-8 md:p-10">
                        <div>
                          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                            Placeholder gallery slide
                          </p>
                          <h3 className="mt-4 text-2xl font-semibold text-foreground md:text-3xl">
                            {item.title}
                          </h3>
                          <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                            {item.description}
                          </p>
                        </div>
                        <p className="mt-8 text-sm leading-7 text-muted-foreground">
                          For production use, point each slide at a direct image
                          file or local asset. Instagram post URLs themselves
                          are not reliable image sources, but exported images or
                          hosted image files work well.
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
