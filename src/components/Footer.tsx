import { Instagram, ArrowUp } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-foreground py-16">
      <div className="container px-4">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="Bear Necessities Gardens" className="h-10 w-10" />
              <span className="font-heading text-lg font-semibold text-primary-foreground">
                Bear Necessities <span className="text-primary-foreground/60">Gardens</span>
              </span>
            </div>
            <p className="text-sm text-primary-foreground/50 leading-relaxed max-w-xs">
              The bear essentials for beautiful outdoor spaces. Thoughtful
              garden care with a calm, polished finish.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/40 mb-4">
              Quick links
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Gallery", href: "#gallery" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social + back to top */}
          <div className="flex flex-col items-start md:items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/40 mb-4 md:text-right">
                Follow along
              </p>
              <a
                href="https://www.instagram.com/bear.necessities.gardens/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
                @bear.necessities.gardens
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="mt-6 flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-2 text-xs uppercase tracking-wider text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              Back to top
            </button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/30 text-sm">
            © {new Date().getFullYear()} Bear Necessities Gardens. Professional garden care with a thoughtful local touch.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
