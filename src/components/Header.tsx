import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Bear Necessities Gardens" className="h-10 w-10" />
          <span className="font-heading text-lg md:text-xl font-semibold text-foreground">
            Bear Necessities <span className="text-primary">Gardens</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-transparent px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/bear.necessities.gardens/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border/70 bg-card px-3 py-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container flex flex-col gap-3 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/bear.necessities.gardens/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-primary"
            >
              <Instagram className="h-5 w-5" /> Visit Instagram
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
