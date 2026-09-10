import { Link } from "react-router-dom";
import { blog } from "../data/content";
import Reveal from "../components/Reveal";

export default function BlogPage() {
  const posts = [...blog.posts].reverse(); // newest first

  return (
    <section className="bg-white border-y border-stroke">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <Reveal>
          <h2 className="font-display text-4xl text-slate mb-2">
            {blog.heading}
          </h2>
          <p className="text-slate-muted mb-10 max-w-xl">{blog.intro}</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 80}>
              <Link to={`/blog/${post.slug}`}>
                <article className="h-full bg-alabaster border border-stroke rounded-sm overflow-hidden transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-card">
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-40 object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="p-7">
                    <p className="text-xs text-emerald font-medium mb-2">
                      {post.date}
                    </p>
                    <h3 className="font-display text-xl text-slate mb-3 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-muted leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <span className="text-sm text-navy font-medium">
                      Read full post →
                    </span>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
