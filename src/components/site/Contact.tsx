import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { Reveal } from "./Reveal";

const info = [
  { icon: FaPhoneAlt, title: "Call us", value: "+1 (512) 216-4230", sub: "Mon–Sat, 9am–7pm EST" },
  { icon: FaEnvelope, title: "Email us", value: "avinya@avinyaconstructions.com", sub: "We reply within 24 hours" },
  { icon: FaMapMarkerAlt, title: "Visit us", value: "1101 Satellite view, unit 204, Round Rock, Texas. 78665", sub: "500034, Telangana, India" },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-brand-navy p-8 sm:p-12 lg:p-16">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-brand-gold/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-brand-gold/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-start">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                Let's Build Together
              </span>
              <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white leading-tight">
                Ready to break ground on your next project?
              </h2>
              <p className="mt-5 text-white/80 leading-relaxed max-w-lg">
                Share your site, scope or sketch — our team will come back with a
                detailed estimate, timeline and design direction within 48 hours.
              </p>

              <div className="mt-8 space-y-4">
                {info.map((i, idx) => (
                  <Reveal key={i.title} delay={idx * 100}>
                    <div className="flex items-start gap-4 rounded-xl bg-white/5 p-4 border border-white/10 hover:bg-white/10 hover:border-brand-gold/40 transition-all">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-gold text-brand-navy">
                        <i.icon size={16} />
                      </div>
                      <div>
                        <div className="text-[11px] uppercase tracking-widest text-white/60">{i.title}</div>
                        <div className="mt-0.5 text-base font-semibold text-white">{i.value}</div>
                        <div className="text-xs text-white/60">{i.sub}</div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal delay={150}>
              <form
                onSubmit={onSubmit}
                className="rounded-2xl bg-white p-6 sm:p-8 shadow-2xl"
              >
                <h3 className="text-2xl font-bold text-brand-navy">Request a Free Quote</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fill in the details below and we'll be in touch within 24 hours.
                </p>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-brand-navy mb-1.5">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brand-navy mb-1.5">Phone</label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 transition"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-xs font-semibold text-brand-navy mb-1.5">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 transition"
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-xs font-semibold text-brand-navy mb-1.5">Project Type</label>
                  <select
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 transition"
                  >
                    <option value="" disabled>Select a project type</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Industrial</option>
                    <option>Interior Fit-out</option>
                    <option>Renovation</option>
                  </select>
                </div>

                <div className="mt-4">
                  <label className="block text-xs font-semibold text-brand-navy mb-1.5">Project Details</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your site, scope, timeline and budget…"
                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/30 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base"
                >
                  {submitted ? (
                    <>
                      <FaCheckCircle /> Message Sent
                    </>
                  ) : (
                    <>
                      Send Enquiry <FaArrowRight />
                    </>
                  )}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
