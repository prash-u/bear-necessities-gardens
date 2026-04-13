import { useState, useEffect } from "react";
import { Menu, X, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";
<<<<<<< Updated upstream
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
=======
import { business, navigation } from "@/data/siteContent";
>>>>>>> Stashed changes

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/50 bg-background/90 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between md:h-20">
<<<<<<< Updated upstream
        <a href="#home" className="flex items-center gap-2.5">
          <img src={logo} alt="Bear Necessities Gardens" className="h-10 w-10" />
          <span className="font-heading text-lg md:text-xl font-semibold">
            <span className={scrolled ? "text-foreground" : "text-primary-foreground"}>
              Bear Necessities{" "}
            </span>
            <span className={scrolled ? "text-primary" : "text-primary-foreground/80"}>
              Gardens
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
=======
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt={business.name} className="h-10 w-10" />
          <span className="font-heading text-lg md:text-xl font-semibold text-foreground">
            Bear Necessities <span className="text-primary">Gardens</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((link) => (
>>>>>>> Stashed changes
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-primary hover:bg-accent/50"
                  : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              {link.label}
            </a>
          ))}
<<<<<<< Updated upstream
          <div className="ml-2 flex items-center gap-2">
            <a
              href="https://www.instagram.com/bear.necessities.gardens/"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full p-2.5 transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-primary hover:bg-accent/50"
                  : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              <Instagram className="h-5 w-5" />
            </a>
            <Button size="sm" asChild className="rounded-full">
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>
=======
          <a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border/70 bg-card px-3 py-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <Instagram className="h-5 w-5" />
          </a>
>>>>>>> Stashed changes
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
<<<<<<< Updated upstream
        <div className="border-t border-border bg-background md:hidden animate-fade-in-up">
          <nav className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
=======
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container flex flex-col gap-3 py-4">
            {navigation.map((link) => (
>>>>>>> Stashed changes
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl py-3 px-4 text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:bg-accent/50"
              >
                {link.label}
              </a>
            ))}
<<<<<<< Updated upstream
            <div className="mt-2 flex gap-2 px-4">
              <Button size="sm" asChild className="flex-1 rounded-full">
                <a href="#contact" onClick={() => setOpen(false)}>Get a Quote</a>
              </Button>
              <a
                href="https://www.instagram.com/bear.necessities.gardens/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
=======
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-primary"
            >
              <Instagram className="h-5 w-5" /> Visit Instagram
            </a>
>>>>>>> Stashed changes
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
