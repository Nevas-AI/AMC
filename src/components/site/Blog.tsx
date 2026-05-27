import { FaArrowRight, FaRegCalendar, FaRegClock } from "react-icons/fa";
import { Reveal } from "./Reveal";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const posts = [
  {
    image: p1,
    category: "Industry Insights",
    date: "May 18, 2026",
    read: "6 min read",
    title: "Sustainable Building Materials Shaping Indian Construction in 2026",
    excerpt:
      "From low-carbon concrete to bamboo composites, here's how forward-looking developers are cutting embodied carbon without compromising on strength or budget.",
  },
  {
    image: p2,
    category: "Project Stories",
    date: "April 29, 2026",
    read: "4 min read",
    title: "Inside the 42-Storey Skyline Tower: Engineering at Altitude",
    excerpt:
      "A behind-the-scenes look at the wind engineering, post-tensioned slabs and modular MEP strategy that helped us deliver the project six weeks ahead of schedule.",
  },
  {
    image: p3,
    category: "Guides",
    date: "April 10, 2026",
    read: "8 min read",
    title: "Your First Home Build: A Practical Cost & Timeline Playbook",
    excerpt:
      "Land, approvals, structural design, finishes — a transparent breakdown of where the money goes and how to avoid the five most common budget blowouts.",
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-24 sm:py-32 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                From Our Desk
              </span>
              <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-brand-navy gold-underline">
                Insights & Stories
              </h2>
              <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
                Field notes, project deep-dives and practical guides from the
                engineers, architects and project managers behind Avinya.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-gold transition-colors"
            >
              View all articles <FaArrowRight />
            </a>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <Reveal key={post.title} delay={idx * 120}>
              <article className="group h-full flex flex-col overflow-hidden rounded-2xl bg-white border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-1 transition-all duration-500">
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-brand-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-navy">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <FaRegCalendar /> {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <FaRegClock /> {post.read}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-brand-navy leading-snug group-hover:text-brand-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy group-hover:text-brand-gold transition-colors"
                  >
                    Read article <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
