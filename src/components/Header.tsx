import { useState } from "react";
import { Instagram, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { business, navigation } from "@/data/siteContent";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt={business.name} className="h-10 w-10" />
          <span className="font-heading text-lg font-semibold text-foreground md:text-xl">
            Bear Necessities <span className="text-primary">Gardens</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-transparent px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border/70 bg-card px-3 py-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container flex flex-col gap-3 py-4">
            {navigation.map((link) => (
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
              href={business.instagram}
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
