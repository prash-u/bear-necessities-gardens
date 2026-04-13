import { processSteps } from "@/data/siteContent";

const ProcessSection = () => {
  return (
    <section id="process" className="bg-background py-20 md:py-28">
      <div className="container px-4">
        <div className="mb-12 max-w-3xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.24em] text-primary">
            How It Works
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-5xl">
            A straightforward process, handled with care.
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            This is the kind of section that reassures people quickly. It makes
            the business feel organised, approachable, and easy to work with.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {processSteps.map((item) => (
            <article
              key={item.step}
              className="rounded-[1.75rem] border border-border bg-card p-7 shadow-[0_18px_56px_-42px_rgba(40,67,52,0.32)]"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
                  {item.step}
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-foreground">
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

export default ProcessSection;
