import logo from "@/assets/logo.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-2">About Us</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Rooted in Quality,<br />Growing with Care
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Bear Necessities Gardens, we believe every outdoor space has the potential to become something extraordinary. With years of experience in garden design and landscaping, our passionate team brings creativity, craftsmanship, and a deep love of nature to every project.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Whether you're dreaming of a complete garden transformation or simply need a helping hand with regular maintenance, we're here to make it happen. We take pride in our attention to detail and our commitment to exceeding expectations.
            </p>
            <div className="flex gap-8">
              {[
                { num: "100+", label: "Projects Completed" },
                { num: "5★", label: "Customer Rating" },
                { num: "10+", label: "Years Experience" },
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
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-accent/50 flex items-center justify-center animate-gentle-float">
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
