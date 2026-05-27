import { FaAward, FaBuilding, FaUsers, FaHardHat } from "react-icons/fa";
import { Reveal } from "./Reveal";

const stats = [
  { icon: FaAward, value: "17+", label: "Years of Excellence" },
  { icon: FaBuilding, value: "240+", label: "Projects Delivered" },
  { icon: FaUsers, value: "180+", label: "Happy Clients" },
  { icon: FaHardHat, value: "350+", label: "Skilled Workforce" },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
              About Avinya
            </span>
            <h2 className="gold-underline mt-4 text-4xl sm:text-5xl font-bold text-brand-navy">
              Constructing landmarks, building trust.
            </h2>
            <p className="mt-10 text-muted-foreground text-lg leading-relaxed">
              For nearly two decades, Avinya Constructions has been a name synonymous with
              precision engineering and architectural integrity. From boutique residences
              to large-format commercial complexes, we approach every project with the same
              founding principle — build it like you'll live in it.
            </p>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Our in-house teams of architects, structural engineers and project managers
              work shoulder-to-shoulder with clients, delivering on what matters most:
              quality, safety and a promise honoured on time, every time.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className="group rounded-2xl border border-border bg-white p-7 hover:border-brand-gold transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-navy text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                    <s.icon size={22} />
                  </div>
                  <div className="mt-5 text-3xl sm:text-4xl font-bold text-brand-navy">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
