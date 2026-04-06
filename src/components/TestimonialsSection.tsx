import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    text: "Bear Necessities completely transformed our tired back garden into a stunning outdoor retreat. The attention to detail was incredible!",
  },
  {
    name: "James & Louise T.",
    text: "Professional, reliable, and genuinely passionate about what they do. Our new patio and planting scheme look absolutely beautiful.",
  },
  {
    name: "David R.",
    text: "We've used them for regular maintenance for over a year now. The garden has never looked better. Highly recommend!",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-lg p-8 border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
              <p className="font-heading font-semibold text-foreground">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
