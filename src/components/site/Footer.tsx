import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import logo from "@/assets/avinya-logo.png";

const cols = [
  {
    title: "Company",
    links: ["About", "Leadership", "Careers", "Press"],
  },
  {
    title: "Services",
    links: ["Residential", "Commercial", "Industrial", "Renovation"],
  },
  {
    title: "Resources",
    links: ["Projects", "Case Studies", "Blog", "Contact"],
  },
];

const socials = [FaLinkedinIn, FaInstagram, FaFacebookF, FaXTwitter, FaYoutube];

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Avinya" className="h-14 w-14 object-contain" />
              <div className="leading-tight text-white">
                <div className="text-xl font-bold">AVINYA</div>
                <div className="text-[10px] tracking-[0.25em] text-brand-gold">
                  CONSTRUCTION | MANAGEMENT
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed max-w-sm">
              Avinya Constructions is a full-service construction and project
              management firm building residential, commercial and industrial
              landmarks across India.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold transition-all"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-sm font-bold uppercase tracking-widest text-white">
                {c.title}
              </div>
              <ul className="mt-5 space-y-3 text-sm">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-brand-gold transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Avinya Constructions Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-gold">Privacy</a>
            <a href="#" className="hover:text-brand-gold">Terms</a>
            <a href="#" className="hover:text-brand-gold">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
