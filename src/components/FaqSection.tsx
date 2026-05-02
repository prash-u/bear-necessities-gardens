import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/siteContent";

const FaqSection = () => {
  return (
    <section className="py-20 md:py-28" id="faq">
      <div className="container px-4">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.24em] text-primary">
              Frequently Asked
            </p>
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-5xl">
              The sort of practical questions clients tend to ask.
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              A few quick answers can make it easier to decide whether the
              timing, scope, and style of work feel like the right fit.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-border bg-card p-6 shadow-[0_18px_56px_-42px_rgba(40,67,52,0.32)]">
            <Accordion type="single" collapsible>
              {faqItems.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-muted-foreground md:text-base">
                    {item.answer}
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

export default FaqSection;
