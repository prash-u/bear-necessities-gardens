import { ExternalLink, Instagram } from "lucide-react";
import heroImage from "@/assets/hero-garden.jpg";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const instagramUrl = "https://www.instagram.com/bear.necessities.gardens/";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden">
        <img
          src={heroImage}
          alt="Garden background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative container flex min-h-screen flex-col items-center justify-center px-4 py-24 text-center">
          <img
            src={logo}
            alt="Bear Necessities Gardens logo"
            className="mb-6 h-20 w-20 rounded-full border border-white/50 bg-white/10 p-2 shadow-lg"
          />

          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs tracking-wide text-white/85">
            <Instagram className="h-3.5 w-3.5" />
            Main + only page
          </p>

          <h1 className="font-heading text-4xl font-bold text-white md:text-6xl">
            Bear Necessities Gardens
          </h1>

          <p className="mt-4 max-w-2xl text-base text-white/85 md:text-lg">
            This site now mirrors the owner&apos;s current primary presence on Instagram.
            For updates, photos, and contact, visit the official page below.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href={instagramUrl} target="_blank" rel="noreferrer noopener">
                <Instagram className="mr-2 h-4 w-4" />
                Open @bear.necessities.gardens
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/10 text-white hover:bg-white/20"
              asChild
            >
              <a href={`${instagramUrl}?hl=en`} target="_blank" rel="noreferrer noopener">
                View Instagram Profile <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="mt-10 w-full max-w-3xl rounded-xl border border-white/25 bg-white/10 p-4 text-left backdrop-blur-sm">
            <p className="text-sm text-white/80">
              Looking for the latest content? Instagram is the canonical source for this
              business right now.
            </p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-white underline-offset-4 hover:underline"
            >
              Go to the profile
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
