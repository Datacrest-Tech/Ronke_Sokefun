import { impact, blog } from "../data/content";
import Reveal from "./Reveal";
import justiceImage from "../images/justice.jpg";

export default function ImpactAndMedia() {
  const featuredPost = blog.posts?.[0] ?? {
    title: "Featured insight",
    excerpt:
      "Leadership insights and practical guidance for governance and business growth.",
  };

  return (
    <section className="bg-alabaster text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <Reveal>
            <div id="impact">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-forest-emerald mb-4">
                Impact
              </p>
              <h2 className="font-display text-4xl sm:text-5xl text-slate mb-4">
                {impact.heading}
              </h2>
              <h3 className="font-display text-2xl sm:text-3xl text-slate mb-6">
                {impact.subtitle}
              </h3>
              <p className="text-slate-700 leading-relaxed mb-5">
                {impact.body}
              </p>

              {impact.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-slate-700 leading-relaxed mb-5"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <div className="rounded-sm border border-stroke bg-white shadow-card p-2">
                <img
                  src={justiceImage}
                  alt="Justice illustration representing leadership and public service"
                  className="w-full h-auto max-h-[430px] object-contain object-center"
                />
              </div>

              <div className="mt-5 rounded-sm border border-terracotta/20 bg-white p-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">
                  Legacy
                </p>
                <blockquote className="text-lg leading-relaxed text-slate-800">
                  “{impact.quote}”
                </blockquote>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-5 gap-4">
          {impact.points.map((point) => (
            <div
              key={point}
              className="rounded-sm border border-stroke bg-white p-4 shadow-sm"
            >
              <div className="text-sm font-medium text-slate-800 leading-relaxed">
                {point}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-navy">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-10">
            <div id="media">
              <h2 className="font-display text-3xl text-white mb-4">
                {blog.heading}
              </h2>
              <div className="border border-white/10 rounded-sm p-6 mb-5">
                <p className="text-xs text-terracotta mb-2">Featured</p>
                <p className="text-white font-medium mb-1">
                  {featuredPost.title}
                </p>
                <p className="text-sm text-white/70 leading-relaxed">
                  {featuredPost.excerpt || featuredPost.body}
                </p>
              </div>
              <ul className="space-y-2">
                {blog.posts.map((post) => (
                  <li
                    key={post.title}
                    className="text-sm text-white/85 border-l-2 border-white/20 pl-3"
                  >
                    <a href={post.href} className="hover:underline">
                      {post.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-sm p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-terracotta mb-3">
                Why this matters
              </p>
              <p className="text-white/80 leading-relaxed">
                Her leadership continues to shape stronger institutions, more
                accountable boards, and a more intentional culture of service
                across public and private sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
