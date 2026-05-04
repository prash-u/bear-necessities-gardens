import { ArrowRight, Instagram, Mail } from "lucide-react";
import heroImage from "@/assets/hero-garden.jpg";
import WatermarkedImage from "@/components/WatermarkedImage";
import TransparentLogo from "@/components/TransparentLogo";
import { Button } from "@/components/ui/button";
import { business, logoShowcaseModes, showcaseNotes, type LogoShowcaseMode } from "@/data/siteContent";

type HeroSectionProps = {
  activeMode: LogoShowcaseMode["id"];
};

const HeroSection = ({ activeMode }: HeroSectionProps) => {
  const mode = logoShowcaseModes.find((item) => item.id === activeMode) ?? logoShowcaseModes[0];
  const previewImages = "previewImages" in mode ? mode.previewImages : [mode.image];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <WatermarkedImage
        src={heroImage}
        alt="A beautifully maintained garden in warm evening light"
        className="absolute inset-0 h-full w-full object-cover"
        wrapperClassName="absolute inset-0"
        loading="eager"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,25,32,0.18),transparent_28%)]" />

      <div className="container relative z-10 px-4 pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="mx-auto max-w-5xl text-center">
          <p className="animate-fade-in-up mb-4 text-sm uppercase tracking-[0.24em] text-accent md:text-base">
            Premium landscaping and garden care
          </p>

          <div
            className="animate-fade-in-up relative mx-auto mb-8 flex max-w-2xl items-center justify-center px-6 py-4"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="absolute inset-x-[16%] inset-y-[24%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.05)_40%,transparent_78%)] blur-2xl" />
            <div className="relative z-10">
              {previewImages.length > 1 ? (
                <div className="flex w-full items-center justify-center gap-5">
                  {previewImages.map((previewImage, index) => (
                    <TransparentLogo
                      key={`${mode.id}-${index}`}
                      src={previewImage}
                      alt={`${mode.name} variant ${index + 1}`}
                      className="h-auto max-h-36 w-auto max-w-[46%] object-contain drop-shadow-[0_18px_32px_rgba(0,0,0,0.28)] md:max-h-44"
                    />
                  ))}
                </div>
              ) : (
                <TransparentLogo
                  src={previewImages[0]}
                  alt={mode.name}
                  className="h-auto w-full max-w-xl object-contain drop-shadow-[0_18px_32px_rgba(0,0,0,0.24)] md:max-w-2xl"
                />
              )}
            </div>
          </div>

          <h2
            className="animate-fade-in-up mx-auto max-w-4xl text-balance font-display text-5xl leading-[0.95] text-foreground sm:text-6xl md:text-7xl"
            style={{ animationDelay: "0.3s" }}
          >
            Gardens that feel cared for, polished, and easy to enjoy.
          </h2>
          <p
            className="animate-fade-in-up mx-auto mt-6 max-w-3xl text-lg leading-9 text-primary-foreground/78 md:text-xl"
            style={{ animationDelay: "0.4s" }}
          >
            Bear Necessities Gardens offers thoughtful landscaping, tidy-ups, planting, and regular maintenance for outdoor spaces that deserve a stronger finish and a calmer overall feel.
          </p>
          <p
            className="animate-fade-in-up mx-auto mt-4 max-w-2xl text-base leading-8 text-primary-foreground/65"
            style={{ animationDelay: "0.48s" }}
          >
            Current logo direction: <span className="font-semibold text-primary-foreground">{mode.name}</span>.
          </p>
          <div
            className="animate-fade-in-up mt-8 flex flex-col justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "0.55s" }}
          >
            <Button size="lg" asChild>
              <a href="#contact">
                <Mail className="h-4 w-4" />
                Request an Enquiry
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href="#services">
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-4 w-4" />
                View Recent Work
              </a>
            </Button>
          </div>
        </div>

        <div
          className="animate-fade-in-up mt-12 grid gap-4 md:mt-16 md:grid-cols-3"
          style={{ animationDelay: "0.7s" }}
        >
          {showcaseNotes.map((item) => (
            <div
              key={item}
              className="rounded-md border border-primary-foreground/12 bg-primary-foreground/6 p-5 text-left backdrop-blur-sm"
            >
              <p className="text-sm leading-7 text-primary-foreground/85">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
