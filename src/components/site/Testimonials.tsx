import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Reveal } from "./Reveal";

const quotes = [
  {
    quote:
      "Avinya delivered our 40-unit residential project two weeks ahead of schedule. The quality of finishes and the transparency of their billing set a new benchmark for us.",
    name: "Rajiv Menon",
    role: "Director, Menon Realty",
  },
  {
    quote:
      "From design to handover, the Avinya team handled every detail with the kind of discipline you rarely see in construction today. Our corporate HQ is everything we imagined.",
    name: "Priya Iyer",
    role: "COO, Northwind Technologies",
  },
  {
    quote:
      "We've engaged Avinya across three industrial sites. Their safety record, BIM workflows and progress dashboards make them our default partner for any new build.",
    name: "Captain (Retd.) Anil Shah",
    role: "VP Operations, Drishti Logistics",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Client Voices
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-brand-navy">
            Trusted by the people who build with us.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 120}>
              <figure className="relative h-full rounded-2xl bg-white p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] transition-shadow">
                <FaQuoteLeft className="text-brand-gold/40" size={32} />
                <blockquote className="mt-4 text-foreground leading-relaxed">
                  "{q.quote}"
                </blockquote>
                <div className="mt-6 flex gap-1 text-brand-gold">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <FaStar key={j} size={14} />
                  ))}
                </div>
                <figcaption className="mt-6 pt-6 border-t border-border">
                  <div className="font-bold text-brand-navy">{q.name}</div>
                  <div className="text-sm text-muted-foreground">{q.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
