import type { CSSProperties } from "react";
import { projectTypes } from "@/data/siteContent";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ProjectTypesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28" id="project-types">
      <div className="section-spotlight left-[9%] top-20 h-24 w-24 opacity-70" />
      <div ref={ref} className={`container px-4 reveal-section ${isVisible ? "is-visible" : ""}`}>
        <div className={`mb-12 max-w-3xl reveal-slide-left ${isVisible ? "is-visible" : ""}`}>
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.24em] text-primary">
            What This Can Showcase
          </p>
          <h2 className="text-balance text-3xl font-display text-foreground md:text-5xl lg:text-6xl">
            Different types of garden work, presented in a way clients can
            quickly recognise.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            This helps the site feel broader and more credible. It also gives
            the client something concrete to react to when deciding how they
            want the business positioned.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {projectTypes.map((item, index) => (
            <article
              key={item.title}
              className={`stagger-item cinematic-panel rounded-[1.75rem] border border-border p-6 shadow-[0_18px_56px_-42px_rgba(40,67,52,0.32)] transition-transform duration-500 hover:-translate-y-2 ${isVisible ? "is-visible" : ""}`}
              style={{ "--stagger-delay": `${index * 90}ms` } as CSSProperties}
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Project type
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTypesSection;
