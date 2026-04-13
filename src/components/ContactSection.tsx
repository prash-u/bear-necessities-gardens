import { ArrowRight, Instagram, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28" style={{ background: "var(--section-gradient)" }}>
      <div className="container px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-2">Instagram</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">The easiest place to start is Instagram.</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            For now, Instagram is the main home for recent work, garden
            updates, and first enquiries.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[1.75rem] border border-border bg-card p-8 shadow-[0_24px_80px_-48px_rgba(40,67,52,0.35)]">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Contact details
            </p>
            <div className="mt-8 space-y-8">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <Instagram className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">Instagram</h3>
                  <a
                    href="https://www.instagram.com/bear.necessities.gardens/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:underline"
                  >
                    @bear.necessities.gardens
                  </a>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    Best for seeing current work and sending a quick message.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:bearnecessitiesgardens@gmail.com"
                    className="text-primary text-sm hover:underline"
                  >
                    bearnecessitiesgardens@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground text-sm">
                    Serving local gardens and nearby areas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-border bg-foreground p-8 text-primary-foreground md:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary-foreground/70">
              Start here
            </p>
            <h3 className="mt-4 text-3xl font-semibold text-balance">
              Follow along, browse the latest work, and send a message when your garden needs attention.
            </h3>
            <p className="mt-4 text-base leading-8 text-primary-foreground/75">
              This page is designed as a clean front door for the business, but
              Instagram is the living feed. It is the best place to keep the
              brand active while new project photos are added over time.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <a
                  href="https://www.instagram.com/bear.necessities.gardens/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-4 w-4" />
                  Open Instagram
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="mailto:bearnecessitiesgardens@gmail.com">
                  Email instead
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="mt-10 rounded-[1.5rem] border border-primary-foreground/10 bg-primary-foreground/5 p-5">
              <p className="text-sm leading-7 text-primary-foreground/75">
                Suggested next step: post fresh project images into the gallery
                and keep Instagram as the primary CTA until there is enough
                portfolio work on-site to support a fuller enquiry form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
