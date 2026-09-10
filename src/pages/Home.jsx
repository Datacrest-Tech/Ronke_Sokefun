import { Link } from "react-router-dom";
import Hero from "../components/Hero";
// CredibilityBar moved into Hero to display alongside hero content
import About from "../components/About";
import { blog } from "../data/content";

const featuredInsights = blog.posts.slice(0, 3);

export default function Home() {
  return (
    <main>
      <Hero />
      <About preview={true} />

      <section className="bg-white text-slate-900">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-forest-emerald font-medium mb-3">
                Insights
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-slate">
                Perspectives on leadership, governance and business growth
              </h2>
            </div>

            <Link
              to="/insights"
              className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-terracotta transition-colors duration-200"
            >
              View all insights →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredInsights.map((post, index) => (
              <article
                key={post.slug}
                className="group flex h-full flex-col overflow-hidden rounded-sm border border-stroke bg-alabaster shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />

                <div className="flex flex-1 flex-col p-5">
                  <p className="mb-3 text-[11px] uppercase tracking-[0.14em] text-forest-emerald">
                    {post.categories?.[0] || "Insight"}
                  </p>
                  <h3 className="font-display text-2xl leading-tight text-slate mb-3">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed mb-5">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between border-t border-stroke pt-4 text-xs text-slate-500">
                    <span>{post.date}</span>
                    <span>{post.readTime || "5 min read"}</span>
                  </div>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center text-sm font-medium text-slate-900 hover:text-terracotta"
                  >
                    Read article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-alabaster text-slate-900">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
          <div className="rounded-sm border border-stroke bg-white p-8 shadow-sm sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.22em] text-forest-emerald font-medium mb-3">
                  Consulting
                </p>
                <h2 className="font-display text-3xl sm:text-4xl text-slate mb-3">
                  Book a consultation
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  For leadership teams, boards, and institutions navigating
                  complexity, Ronke advises on governance, policy, strategic
                  accountability, and long-term institutional resilience.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-terracotta px-6 py-3 text-sm font-medium text-white hover:bg-terracotta/90 transition-colors duration-200"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
