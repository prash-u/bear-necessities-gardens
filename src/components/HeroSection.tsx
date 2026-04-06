import heroImage from "@/assets/hero-garden.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Beautiful landscaped garden at golden hour"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

      <div className="relative z-10 container text-center px-4">
        <p className="text-primary-foreground/80 font-body text-sm md:text-base tracking-widest uppercase mb-4 animate-fade-in-up">
          Professional Garden & Landscaping Services
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up text-balance" style={{ animationDelay: "0.15s" }}>
          Your Garden, <br className="hidden sm:block" />Our Passion
        </h1>
        <p className="max-w-2xl mx-auto text-primary-foreground/80 text-base md:text-lg mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Transforming outdoor spaces into stunning, living landscapes. From design to maintenance, we bring nature's beauty to your doorstep.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          <Button size="lg" asChild>
            <a href="#contact">Get a Free Quote</a>
          </Button>
          <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
            <a href="#services">Our Services</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
