import logo from "@/assets/logo.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-2">About</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Taking care of the bear necessities of your garden.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Bear Necessities Gardens is designed to feel personal, reliable,
              and quietly premium. The focus is on outdoor spaces that look
              considered and well-kept, whether they need regular maintenance,
              a seasonal reset, or a tidy-up that brings everything back into
              shape.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The tone stays slightly playful, but the work is serious:
              dependable care, thoughtful presentation, and gardens that feel
              easier to enjoy. No hard sell, no fluff, just the right details
              handled well.
            </p>
            <div className="flex flex-wrap gap-8">
              {[
                { num: "Neat", label: "Clean finish" },
                { num: "Calm", label: "Thoughtful approach" },
                { num: "Local", label: "Instagram-first enquiries" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl md:text-3xl font-heading font-bold text-primary">{stat.num}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-accent/50 flex items-center justify-center animate-gentle-float shadow-[0_24px_80px_-48px_rgba(40,67,52,0.45)]">
                <img src={logo} alt="Bear Necessities Gardens logo" className="w-40 h-40 md:w-52 md:h-52" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary rounded-full opacity-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
