import { FaArrowRight } from "react-icons/fa";
import { Reveal } from "./Reveal";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const projects = [
  { img: p1, tag: "Residential", title: "The Aurelia Villas", loc: "Bengaluru" },
  { img: p2, tag: "Commercial", title: "Meridian Corporate Tower", loc: "Hyderabad" },
  { img: p3, tag: "Industrial", title: "Northgate Logistics Park", loc: "Chennai" },
  { img: p4, tag: "Hospitality", title: "Kanha Heritage Resort", loc: "Udaipur" },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
              Selected Work
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-brand-navy">
              A portfolio built on precision.
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-gold transition-colors"
          >
            See all projects <FaArrowRight />
          </a>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="group relative overflow-hidden rounded-2xl bg-brand-navy h-[380px] cursor-pointer">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="absolute inset-0 h-full w-full object-cover opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                  <span className="inline-block rounded-full bg-brand-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-navy">
                    {p.tag}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold">{p.title}</h3>
                  <p className="text-sm text-white/80 mt-1">{p.loc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
