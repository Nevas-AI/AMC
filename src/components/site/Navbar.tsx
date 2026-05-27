import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import logo from "@/assets/avinya-logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Why Us", href: "#why" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_10px_30px_-15px_rgba(18,61,89,0.25)] py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Avinya Constructions" className="h-12 w-12 object-contain" />
          <div className={`leading-tight ${scrolled ? "text-brand-navy" : "text-white"}`}>
            <div className="text-lg font-bold tracking-tight">AVINYA</div>
            <div className="text-[10px] tracking-[0.25em] opacity-80">CONSTRUCTION</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-brand-gold ${
                scrolled ? "text-brand-navy" : "text-white/90"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#login"
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              scrolled
                ? "border-brand-navy/20 text-brand-navy hover:bg-brand-navy hover:text-white"
                : "border-white/40 text-white hover:bg-white hover:text-brand-navy"
            }`}
          >
            <FaRegUser size={12} /> Login
          </a>
          <a
            href="#contact"
            className="btn-gold inline-flex items-center rounded-full px-5 py-2.5 text-sm"
          >
            Get a Quote
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden rounded-md p-2 ${scrolled ? "text-brand-navy" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {open ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <div className="flex flex-col px-6 py-4 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-brand-navy font-medium border-b border-border last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#login"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-brand-navy/20 px-5 py-3 text-sm font-semibold text-brand-navy"
            >
              <FaRegUser size={12} /> Login
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-gold mt-2 inline-flex justify-center rounded-full px-5 py-3 text-sm"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
