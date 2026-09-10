import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { blog, insightCategoryGroups } from "../data/content";
import Reveal from "./Reveal";

const allCategories = [
  "All",
  "Startup Advice",
  "Marketing",
  "Business Operations",
  "Finance",
  "Technology & Innovation",
  "Personal Development",
  "Industry Insights",
  "CRM",
  "Growth & Scaling",
  "Legal",
];

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return blog.posts;
    return blog.posts.filter((post) =>
      post.categories?.includes(activeCategory),
    );
  }, [activeCategory]);

  const featuredPost = filteredPosts[0] ?? blog.posts[0];
  const latestPosts = filteredPosts.slice(1);

  return (
    <section id="insights" className="bg-alabaster text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-20">
        <Reveal>
          <div className="max-w-3xl mb-10">
            <p className="text-xs uppercase tracking-[0.22em] text-forest-emerald font-medium mb-4">
              INSIGHTS
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-slate mb-4 leading-[1.05]">
              Perspectives that inform, challenge and inspire.
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed max-w-2xl">
              Exploring business, leadership, governance, entrepreneurship and
              the ideas shaping organisations and professionals today.
            </p>
          </div>
        </Reveal>

        <div className="mb-12 rounded-sm border border-stroke bg-white p-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-4">
            INSIGHTS
          </p>
          <p className="text-base text-slate-700 leading-relaxed max-w-3xl">
            Ronke Sokefun’s insights and resources bring together perspectives
            on business, entrepreneurship, leadership, law, finance, technology
            and professional development.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {insightCategoryGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-sm border border-stroke bg-alabaster p-4"
              >
                <p className="text-sm font-medium text-slate-900 mb-3">
                  {group.title}
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  {group.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={100}>
          <div className="mb-8 rounded-sm border border-stroke bg-white p-4 shadow-sm">
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {allCategories.map((category) => {
                const isActive = category === activeCategory;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] transition-all duration-200 ${
                      isActive
                        ? "bg-navy text-white border-navy"
                        : "bg-white text-slate-700 border-stroke hover:border-slate-500 hover:text-slate-900"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {featuredPost && (
          <Reveal delay={120}>
            <article className="mb-12 grid gap-6 overflow-hidden rounded-sm border border-stroke bg-white shadow-sm md:grid-cols-[1.2fr_0.8fr]">
              <div className="overflow-hidden border-b border-stroke md:border-b-0 md:border-r">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="h-full min-h-[280px] w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-6 md:p-8">
                <div className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-slate-500">
                  <span>{featuredPost.categories?.[0] || "Insights"}</span>
                  <span>•</span>
                  <span>{featuredPost.date || "Recent"}</span>
                </div>
                <h2 className="font-display text-3xl leading-tight text-slate mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  {featuredPost.excerpt ||
                    featuredPost.body?.slice(0, 180) + "..."}
                </p>
                <div className="mb-6 flex items-center gap-5 text-sm text-slate-500">
                  <span>{featuredPost.readTime || "5 min read"}</span>
                </div>
                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="inline-flex w-fit items-center rounded-sm bg-terracotta px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-terracotta/90"
                >
                  Read Insight
                </Link>
              </div>
            </article>
          </Reveal>
        )}

        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="font-display text-3xl text-slate">Latest Insights</h2>
          <div className="text-sm text-slate-500">
            {filteredPosts.length}{" "}
            {filteredPosts.length === 1 ? "article" : "articles"}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {latestPosts.map((post, index) => (
            <Reveal key={`${post.slug}-${index}`} delay={index * 70}>
              <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-stroke bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-card">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />

                <div className="flex flex-1 flex-col p-5">
                  <p className="mb-3 text-[11px] uppercase tracking-[0.14em] text-forest-emerald">
                    {post.categories?.[0] || "Insight"}
                  </p>
                  <h3 className="font-display text-2xl leading-tight text-slate mb-3">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed mb-4">
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
                    Read More →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
