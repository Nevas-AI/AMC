import {
  FaHome,
  FaCity,
  FaIndustry,
  FaDraftingCompass,
  FaTools,
  FaRoad,
} from "react-icons/fa";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: FaHome,
    title: "Residential Construction",
    desc: "Bespoke homes, villas and apartment complexes designed for modern living and built for generations.",
  },
  {
    icon: FaCity,
    title: "Commercial Builds",
    desc: "Offices, retail and mixed-use developments engineered to maximise utility, footfall and brand presence.",
  },
  {
    icon: FaIndustry,
    title: "Industrial Projects",
    desc: "Warehouses, factories and process plants delivered with stringent safety and turnaround standards.",
  },
  {
    icon: FaDraftingCompass,
    title: "Architecture & Design",
    desc: "In-house architects translate vision into precision drawings, 3D walkthroughs and material plans.",
  },
  {
    icon: FaTools,
    title: "Renovation & Interiors",
    desc: "Adaptive reuse, structural retrofits and turnkey interiors that breathe new life into existing spaces.",
  },
  {
    icon: FaRoad,
    title: "Infrastructure",
    desc: "Roads, drainage, township utilities and civic infrastructure executed with municipal-grade rigor.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            What We Do
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-brand-navy">
            End-to-end construction expertise
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            From the first sketch to the final handover, Avinya owns every stage of
            the build so you get one partner, one timeline and one accountable team.
          </p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <article className="group relative h-full overflow-hidden rounded-2xl bg-white p-8 border border-transparent hover:border-brand-gold transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-lift)]">
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-brand-gold/10 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="grid h-14 w-14 place-items-center rounded-xl bg-brand-navy text-brand-gold">
                    <s.icon size={24} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-brand-navy">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-6 inline-flex items-center text-sm font-semibold text-brand-navy">
                    Learn more
                    <span className="ml-2 h-px w-8 bg-brand-gold transition-all group-hover:w-14" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
