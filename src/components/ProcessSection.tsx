import { MessageSquare, ClipboardCheck, Leaf, ThumbsUp } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Get in touch",
    description:
      "Send a quick message through the enquiry form, email, or Instagram DM with a few details about your garden.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Garden visit & quote",
    description:
      "A visit to your garden to understand the space, discuss what's needed, and put together a clear, honest quote.",
  },
  {
    icon: Leaf,
    step: "03",
    title: "Work gets done",
    description:
      "Reliable, tidy work with care taken over the details. No mess left behind, no corners cut.",
  },
  {
    icon: ThumbsUp,
    step: "04",
    title: "Enjoy the space",
    description:
      "A garden that feels lighter, neater, and much more enjoyable — with ongoing care available if you need it.",
  },
];

const ProcessSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container px-4" ref={ref}>
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-2">
            How It Works
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Simple, straightforward, no surprises.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From first message to finished garden — here's how a typical job
            comes together.
          </p>
        </div>

        <div className="relative grid md:grid-cols-4 gap-8">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-border" />

          {steps.map((s, i) => (
            <div
              key={s.step}
              className={`relative text-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative mx-auto mb-6 flex h-32 w-32 items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-accent/60" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                  <s.icon className="h-7 w-7" />
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Step {s.step}
              </span>
              <h3 className="mt-2 font-heading text-xl font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
