import { useState } from "react";
import { ArrowRight, Instagram, Mail, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange =
    (field: keyof typeof formData) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormData((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(
      `Garden enquiry from ${formData.name || "website visitor"}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService interest: ${formData.service}\n\nProject details:\n${formData.message}`,
    );
    window.location.href = `mailto:bearnecessitiesgardens@gmail.com?subject=${subject}&body=${body}`;
  };

  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="contact"
      className="py-20 md:py-28 overflow-hidden"
      style={{ background: "var(--section-gradient)" }}
    >
      <div className="container px-4" ref={ref}>
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Let's talk about your garden.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Send an enquiry and we'll get back to you quickly with a plan
            and a clear, honest quote.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div
            className={`space-y-5 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="rounded-[1.75rem] border border-border bg-card p-8 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary mb-6">
                Contact details
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: Instagram,
                    title: "Instagram",
                    content: (
                      <a
                        href="https://www.instagram.com/bear.necessities.gardens/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-sm hover:underline"
                      >
                        @bear.necessities.gardens
                      </a>
                    ),
                    sub: "Browse recent jobs and garden updates",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: (
                      <a
                        href="mailto:bearnecessitiesgardens@gmail.com"
                        className="text-primary text-sm hover:underline"
                      >
                        bearnecessitiesgardens@gmail.com
                      </a>
                    ),
                    sub: null,
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    content: <p className="text-sm text-muted-foreground">Serving local gardens and nearby areas</p>,
                    sub: null,
                  },
                  {
                    icon: Clock,
                    title: "Response time",
                    content: <p className="text-sm text-muted-foreground">Usually within 24 hours</p>,
                    sub: null,
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground text-sm mb-0.5">
                        {item.title}
                      </h3>
                      {item.content}
                      {item.sub && (
                        <p className="mt-1 text-xs text-muted-foreground">{item.sub}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust badge */}
            <div className="rounded-[1.5rem] border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["🌿", "🌸", "🍃"].map((e) => (
                    <span
                      key={e}
                      className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-card bg-accent text-sm"
                    >
                      {e}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Trusted locally</span> — happy
                  gardens across the area.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`rounded-[1.75rem] border border-border bg-foreground p-8 text-primary-foreground md:p-10 shadow-2xl transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-primary-foreground/60">
              Free quote
            </p>
            <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-balance">
              Tell us what your garden needs.
            </h3>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-primary-foreground/60">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange("name")}
                    className="w-full rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/35 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-primary-foreground/60">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange("email")}
                    className="w-full rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/35 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-primary-foreground/60">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange("phone")}
                    className="w-full rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/35 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-primary-foreground/60">
                    Service interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={handleChange("service")}
                    className="w-full rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all appearance-none"
                  >
                    <option value="" className="text-foreground">Select a service</option>
                    <option value="maintenance" className="text-foreground">Garden maintenance</option>
                    <option value="tidyup" className="text-foreground">Tidy-up & clear-out</option>
                    <option value="planting" className="text-foreground">Seasonal planting</option>
                    <option value="pruning" className="text-foreground">Pruning & shaping</option>
                    <option value="landscaping" className="text-foreground">Landscaping</option>
                    <option value="other" className="text-foreground">Something else</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-primary-foreground/60">
                  Project details
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange("message")}
                  className="w-full rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/35 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                  placeholder="Tell us about the garden, the kind of help you need, and anything time-sensitive."
                />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row pt-2">
                <Button size="lg" variant="secondary" type="submit" className="rounded-full flex-1">
                  Send Enquiry
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a href="mailto:bearnecessitiesgardens@gmail.com">
                    <Mail className="h-4 w-4" />
                    Email directly
                  </a>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
