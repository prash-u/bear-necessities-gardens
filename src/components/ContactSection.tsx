import { useState } from "react";
import { ArrowRight, Instagram, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business } from "@/data/siteContent";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange =
    (field: "name" | "email" | "message") =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Garden enquiry from ${formData.name || "website visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nProject details:\n${formData.message}`
    );

    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28"
      style={{ background: "var(--section-gradient)" }}
    >
      <div className="container px-4">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Contact
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            A simple, professional way to get in touch.
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Share a few details about the garden and the kind of help you need,
            and Bear Necessities Gardens can take it from there.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[1.75rem] border border-border bg-card p-8 shadow-[0_24px_80px_-48px_rgba(40,67,52,0.35)]">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Contact details
            </p>
            <div className="mt-8 space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent">
                  <Instagram className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="mb-1 font-heading font-semibold text-foreground">
                    Instagram
                  </h3>
                  <a
                    href={business.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    @bear.necessities.gardens
                  </a>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    A useful place to browse recent jobs and garden updates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent">
                  <Mail className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="mb-1 font-heading font-semibold text-foreground">
                    Email
                  </h3>
                  <a
                    href={`mailto:${business.email}`}
                    className="text-sm text-primary hover:underline"
                  >
                    {business.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent">
                  <MapPin className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="mb-1 font-heading font-semibold text-foreground">
                    Location
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Serving local gardens and nearby areas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-border bg-foreground p-8 text-primary-foreground md:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary-foreground/70">
              Enquiry form
            </p>
            <h3 className="mt-4 text-balance text-3xl font-semibold">
              Tell Bear Necessities Gardens what your space needs.
            </h3>
            <p className="mt-4 text-base leading-8 text-primary-foreground/75">
              Whether the job is a tidy-up, landscaping, planting, or regular
              upkeep, a clear first message makes it easier to understand the
              space and recommend the right next step.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-primary-foreground/85">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange("name")}
                  className="w-full rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/45 focus:outline-none focus:ring-2 focus:ring-primary-foreground/40"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-primary-foreground/85">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange("email")}
                  className="w-full rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/45 focus:outline-none focus:ring-2 focus:ring-primary-foreground/40"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-primary-foreground/85">
                  Project details
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange("message")}
                  className="w-full rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/45 focus:outline-none focus:ring-2 focus:ring-primary-foreground/40"
                  placeholder="Tell us about the garden, the kind of help you need, and anything time-sensitive."
                />
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" variant="secondary" type="submit">
                  Send Enquiry
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a href={`mailto:${business.email}`}>
                    Email directly
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </form>

            <div className="mt-10 rounded-[1.5rem] border border-primary-foreground/10 bg-primary-foreground/5 p-5">
              <p className="text-sm leading-7 text-primary-foreground/75">
                If it helps, recent jobs and seasonal updates can also be seen
                on Instagram alongside direct email enquiries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
