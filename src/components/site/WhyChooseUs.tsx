import { FaShieldAlt, FaClock, FaLeaf, FaHandshake, FaChartLine, FaCertificate } from "react-icons/fa";
import { Reveal } from "./Reveal";

const features = [
  { icon: FaShieldAlt, title: "Uncompromised Safety", desc: "ISO-aligned site protocols and zero-incident track record across 200+ sites." },
  { icon: FaClock, title: "On-Time, Every Time", desc: "98% of projects handed over on or before the contracted milestone." },
  { icon: FaLeaf, title: "Sustainable Builds", desc: "Green-certified materials, low-carbon concrete and rainwater systems by default." },
  { icon: FaHandshake, title: "Transparent Pricing", desc: "Itemised BOQs, no hidden costs and weekly client billing reviews." },
  { icon: FaChartLine, title: "Modern Engineering", desc: "BIM modelling, drone surveys and live progress dashboards for every client." },
  { icon: FaCertificate, title: "Certified Quality", desc: "Third-party QA at every stage — foundation, structure, MEP and finishes." },
];

export function WhyChooseUs() {
  return (
    <section id="why" className="relative py-24 sm:py-32 bg-brand-navy overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Why Avinya
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
            Six reasons clients trust us with their biggest builds.
          </h2>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="h-full bg-brand-navy p-8 hover:bg-[#0d2f44] transition-colors group">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-brand-gold text-brand-navy group-hover:scale-110 transition-transform">
                  <f.icon size={20} />
                </div>
                <h3 className="mt-6 text-lg font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
