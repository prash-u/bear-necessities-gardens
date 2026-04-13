import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    q: "What areas do you cover?",
    a: "Bear Necessities Gardens currently serves local gardens and nearby areas. If you're unsure whether you're in range, just get in touch and we'll let you know.",
  },
  {
    q: "How much does a typical garden tidy-up cost?",
    a: "Every garden is different, so pricing depends on the size and condition of the space. After a quick visit we'll provide a clear, honest quote with no hidden extras.",
  },
  {
    q: "Do you offer regular maintenance plans?",
    a: "Yes — weekly, fortnightly, or monthly visits can be arranged to keep everything looking its best. We'll find a schedule that suits your garden and your budget.",
  },
  {
    q: "What happens with garden waste?",
    a: "All waste is cleared and disposed of responsibly as part of the job. You won't be left with bags of clippings or piles of debris.",
  },
  {
    q: "Can I see examples of your recent work?",
    a: "Absolutely. The gallery on this site shows a selection, and our Instagram page (@bear.necessities.gardens) is regularly updated with recent jobs and seasonal projects.",
  },
  {
    q: "Do I need to be home during the work?",
    a: "Not necessarily. As long as we have access to the garden, we're happy to get on with the job. We'll keep you updated with progress and photos.",
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-4" ref={ref}>
        <div className="mx-auto max-w-3xl">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-2">
              Common Questions
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Anything else you'd like to know?
            </h2>
            <p className="text-muted-foreground">
              Quick answers to the things people usually ask before booking.
            </p>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-2xl border border-border bg-card px-6 data-[state=open]:shadow-lg transition-shadow"
                >
                  <AccordionTrigger className="text-left font-heading text-base font-semibold text-foreground hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
