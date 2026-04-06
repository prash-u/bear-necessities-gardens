import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28" style={{ background: "var(--section-gradient)" }}>
      <div className="container px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Ready to Transform Your Garden?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Contact us for a free, no-obligation quote. We'd love to hear about your project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-md bg-accent flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Phone</h3>
                <p className="text-muted-foreground text-sm">Give us a call for a friendly chat about your project.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-md bg-accent flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Email</h3>
                <p className="text-muted-foreground text-sm">Drop us a message and we'll get back to you promptly.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-md bg-accent flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground text-sm">Serving local areas and surrounding regions.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-md bg-accent flex items-center justify-center shrink-0">
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
              </div>
            </div>
          </div>

          {submitted ? (
            <div className="bg-card rounded-lg border border-border p-8 flex items-center justify-center text-center">
              <div>
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground text-sm">Thank you for reaching out. We'll be in touch soon.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card rounded-lg border border-border p-8 space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Name</label>
                <input
                  required
                  type="text"
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                <input
                  required
                  type="email"
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
