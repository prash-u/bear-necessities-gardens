import { useState } from "react";
import { Instagram, Menu, X } from "lucide-react";
import TransparentLogo from "@/components/TransparentLogo";
import logo from "@/assets/logo.png";
import { business, navigation } from "@/data/siteContent";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-background/84 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <a href="#home" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/5 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:-translate-y-0.5">
            <TransparentLogo src={logo} alt={business.name} className="h-8 w-8" />
          </span>
          <span className="font-heading text-lg font-semibold text-foreground md:text-xl">
            Bear Necessities <span className="text-accent">Gardens</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-transparent px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-muted-foreground transition-colors hover:text-accent"
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
        <div className="border-t border-white/10 bg-background md:hidden">
          <nav className="container flex flex-col gap-3 py-4">
            {navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-accent"
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
