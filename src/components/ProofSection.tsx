import type { CSSProperties } from "react";
import { ArrowUpRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import WatermarkedImage from "@/components/WatermarkedImage";
import {
  business,
  featuredCaseStudy,
  proofFeedback,
} from "@/data/siteContent";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ProofSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative overflow-hidden py-20 md:py-28" id="proof">
      <div className="section-spotlight right-[10%] top-14 h-28 w-28 opacity-70" />
      <div ref={ref} className={`container px-4 reveal-section ${isVisible ? "is-visible" : ""}`}>
        <div className={`mb-12 max-w-3xl reveal-slide-left ${isVisible ? "is-visible" : ""}`}>
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.24em] text-primary">
            Recent Work and Kind Words
          </p>
          <h2 className="text-balance text-3xl font-display text-foreground md:text-5xl lg:text-6xl">
            Care, quality, and attention people notice.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            A strong finish is about more than cutting back or clearing up. It
            is the difference between a garden feeling merely done and feeling
            genuinely looked after.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className={`cinematic-panel reveal-slide-left overflow-hidden rounded-[2rem] border border-border shadow-[0_24px_80px_-48px_rgba(40,67,52,0.4)] ${isVisible ? "is-visible" : ""}`}>
            <WatermarkedImage
              src={featuredCaseStudy.image}
              alt="Featured garden maintenance example"
              className="aspect-[16/10] w-full object-cover"
              loading="lazy"
              width={1200}
              height={750}
            />
            <div className="p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground">
                  {featuredCaseStudy.badge}
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {featuredCaseStudy.category}
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-display text-foreground md:text-[2.4rem]">
                {featuredCaseStudy.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                {featuredCaseStudy.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <a href="#contact">
                    Ask about your garden
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href={business.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See more recent work
                  </a>
                </Button>
              </div>
            </div>
          </article>

          <div className="grid gap-4">
            {proofFeedback.map((item, index) => (
              <article
                key={item.quote}
                className={`stagger-item cinematic-panel rounded-[1.75rem] border border-border p-6 shadow-[0_18px_56px_-42px_rgba(40,67,52,0.35)] ${isVisible ? "is-visible" : ""}`}
                style={{ "--stagger-delay": `${index * 100}ms` } as CSSProperties}
              >
                <div className="flex items-center justify-between gap-4">
                  <Quote className="h-5 w-5 text-primary" />
                  <div className="flex items-center gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={`${index}-${starIndex}`}
                        className="h-3.5 w-3.5 fill-current"
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-5 text-base leading-8 text-foreground">
                  “{item.quote}”
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {item.source}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
