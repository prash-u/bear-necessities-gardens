import { ArrowUpRight, Quote, Star, Instagram } from "lucide-react";
import gardenMaintenance from "@/assets/garden-maintenance.jpg";
import gardenLawn from "@/assets/garden-lawn.jpg";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const feedback = [
  {
    quote: "The garden looked completely different afterwards. Neater, lighter, and much easier to enjoy.",
    source: "Local homeowner",
    stars: 5,
  },
  {
    quote: "Reliable, tidy, and clearly cares about the small details that make the whole space feel better.",
    source: "Regular client",
    stars: 5,
  },
  {
    quote: "Exactly the kind of help we needed. Practical, professional, and the finish was excellent.",
    source: "Instagram enquiry",
    stars: 5,
  },
];

const ProofSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 md:py-28 overflow-hidden" id="proof" ref={ref}>
      <div className="container px-4">
        <div
          className={`mb-12 max-w-3xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.24em] text-primary">
            What People Say
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-5xl">
            Trusted by local homeowners.
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            A few words from people who've had their gardens transformed. Real
            feedback from real spaces.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article
            className={`overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_24px_80px_-48px_rgba(40,67,52,0.4)] transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative overflow-hidden">
              <img
                src={gardenLawn}
                alt="Featured garden project"
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
                width={1200}
                height={750}
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-lg">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-foreground md:text-3xl">
                A cleaner, calmer, more looked-after outdoor space.
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                This is the kind of transformation we love. An overgrown,
                neglected space turned into something the homeowners can
                genuinely enjoy spending time in.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="rounded-full">
                  <a href="#contact">
                    Ask about your garden
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <a
                    href="https://www.instagram.com/bear.necessities.gardens/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-4 w-4" />
                    See more work
                  </a>
                </Button>
              </div>
            </div>
          </article>

          <div className="grid gap-4 content-start">
            {feedback.map((item, index) => (
              <article
                key={item.quote}
                className={`rounded-[1.75rem] border border-border bg-card/80 p-7 shadow-sm backdrop-blur transition-all duration-700 hover:shadow-lg hover:-translate-y-0.5 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="flex items-center justify-between gap-4">
                  <Quote className="h-5 w-5 text-primary" />
                  <div className="flex items-center gap-0.5 text-primary">
                    {Array.from({ length: item.stars }).map((_, starIndex) => (
                      <Star
                        key={`${index}-${starIndex}`}
                        className="h-3.5 w-3.5 fill-current"
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-base leading-8 text-foreground font-medium">
                  "{item.quote}"
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  — {item.source}
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
