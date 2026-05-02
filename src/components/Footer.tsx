import { Instagram, Mail } from "lucide-react";
import logoMark from "@/assets/logo-mark.svg";
import { business } from "@/data/siteContent";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5">
              <img src={logoMark} alt={business.name} className="h-6 w-6" />
            </span>
            <span className="font-heading text-lg font-semibold text-primary-foreground">
              {business.name}
            </span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-primary-foreground/70">
              {business.tagline}
            </p>
            <div className="mt-3 flex items-center justify-center gap-6 md:justify-end">
              <a
                href={`mailto:${business.email}`}
                className="text-primary-foreground/60 transition-colors hover:text-primary-foreground"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 transition-colors hover:text-primary-foreground"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} {business.name}. Professional garden
            care with a thoughtful local touch.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
