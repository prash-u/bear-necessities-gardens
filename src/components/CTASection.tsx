import { ArrowRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import beforeAfter from "@/assets/before-after.jpg";
import WatermarkedImage from "@/components/WatermarkedImage";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 md:py-28 overflow-hidden" ref={ref}>
      <div className="container px-4">
        <div
          className={`relative overflow-hidden rounded-[2.5rem] transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <WatermarkedImage
            src={beforeAfter}
            alt="Garden transformation before and after"
            className="absolute inset-0 h-full w-full object-cover"
            wrapperClassName="absolute inset-0"
            loading="lazy"
            width={1280}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/40" />

          <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary mb-4">
              Ready to transform your space?
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              From overgrown to un&#8209;bear&#8209;lievably&nbsp;good.
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-primary-foreground/80 mb-8">
              Whether your garden needs a one-off rescue or regular care to keep
              it looking its best, we'll make it happen. Get in touch today for a
              free, no-obligation quote.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <a href="#contact">
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/25 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a
                  href="https://www.instagram.com/bear.necessities.gardens/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-4 w-4" />
                  Browse Recent Work
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
