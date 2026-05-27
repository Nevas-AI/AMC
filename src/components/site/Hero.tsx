import { FaArrowRight, FaPlay } from "react-icons/fa";
import heroImg from "@/assets/hero-construction.jpg";
import buildingImg from "@/assets/avinya-building.png";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Avinya construction site at dusk"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-3xl">
            <div className="reveal is-visible inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
              Building United States tomorrow since 2014
            </div>

            <h1 className="reveal is-visible mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.05]">
              Engineered to last.<br />
              <span className="text-brand-gold">Crafted to inspire.</span>
            </h1>

            <p
              className="reveal is-visible mt-6 max-w-xl text-base sm:text-lg text-white/85 leading-relaxed"
              style={{ transitionDelay: "120ms" }}
            >
              Avinya Constructions delivers premium residential, commercial and industrial
              projects with uncompromising quality, transparent timelines and architecture
              that stands the test of time.
            </p>

            <div
              className="reveal is-visible mt-10 flex flex-wrap items-center gap-4"
              style={{ transitionDelay: "220ms" }}
            >
              <a href="#contact" className="btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm sm:text-base">
                Get a Free Quote <FaArrowRight />
              </a>
              <a href="#projects" className="btn-ghost-light inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm sm:text-base">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-gold text-brand-navy">
                  <FaPlay size={10} />
                </span>
                View Our Work
              </a>
            </div>

            <div
              className="reveal is-visible mt-16 grid grid-cols-3 max-w-lg gap-6 border-t border-white/20 pt-8"
              style={{ transitionDelay: "320ms" }}
            >
              {[
                { v: "17+", l: "Years" },
                { v: "240+", l: "Projects" },
                { v: "98%", l: "On-Time" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl sm:text-4xl font-bold text-white">{s.v}</div>
                  <div className="text-xs uppercase tracking-widest text-white/70 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="reveal is-visible relative hidden lg:block"
            style={{ transitionDelay: "260ms" }}
          >
            <div className="absolute -inset-4 bg-brand-gold/20 rounded-3xl blur-2xl" />
            <div className="absolute -top-6 -right-6 h-24 w-24 border-t-4 border-r-4 border-brand-gold rounded-tr-3xl" />
            <div className="absolute -bottom-6 -left-6 h-24 w-24 border-b-4 border-l-4 border-brand-gold rounded-bl-3xl" />
            <img
              src={buildingImg}
              alt="Avinya Constructions signature glass tower"
              className="relative rounded-2xl shadow-2xl object-cover w-full max-h-[640px]"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/70 text-xs tracking-[0.3em] uppercase animate-pulse">
        Scroll
      </div>
    </section>
  );
}
