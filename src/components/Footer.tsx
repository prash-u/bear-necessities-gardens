import { Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Bear Necessities Gardens" className="h-8 w-8" />
            <span className="font-heading text-lg font-semibold text-primary-foreground">
              Bear Necessities Gardens
            </span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-primary-foreground/70">
              The bear essentials for beautiful outdoor spaces.
            </p>
            <div className="mt-3 flex items-center justify-center gap-6 md:justify-end">
            <a
              href="https://www.instagram.com/bear.necessities.gardens/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Bear Necessities Gardens. Instagram-first for current work and enquiries.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
