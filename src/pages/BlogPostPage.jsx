import { useParams, Link } from "react-router-dom";
import { blog } from "../data/content";
import MarkdownLite from "../components/MarkdownLite";
import Reveal from "../components/Reveal";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blog.posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="bg-white">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h1 className="font-display text-3xl text-slate mb-4">
            Post not found
          </h1>
          <Link to="/blog" className="text-navy underline text-sm">
            Back to the blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <article className="max-w-3xl mx-auto px-6 py-16">
        <Reveal>
          <Link
            to="/blog"
            className="text-xs text-slate-muted hover:text-navy transition-colors duration-200"
          >
            ← Back to Blog
          </Link>

          <p className="text-xs text-emerald font-medium mt-6 mb-2">
            {post.date} · {post.author}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl text-slate mb-6 leading-tight">
            {post.title}
          </h1>

          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto rounded-sm border border-stroke mb-8"
              loading="lazy"
            />
          )}

          <MarkdownLite content={post.body} />

          {post.categories?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-stroke">
              {post.categories.map((cat) => (
                <span
                  key={cat}
                  className="text-xs text-slate-muted bg-alabaster border border-stroke rounded-sm px-2.5 py-1"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}
        </Reveal>
      </article>
    </main>
  );
}
