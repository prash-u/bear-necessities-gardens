import { Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Bear Necessities Gardens" className="h-8 w-8" />
            <span className="font-heading text-lg font-semibold text-primary-foreground">
              Bear Necessities Gardens
            </span>
          </div>
          <div className="flex items-center gap-6">
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
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Bear Necessities Gardens. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
