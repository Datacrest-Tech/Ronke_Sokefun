// Tiny markdown-lite renderer for migrated blog content.
// Supports: ### headings, - bullet lines, **bold**, blank-line paragraphs.
// Intentionally minimal — this is for a fixed, known content set, not
// arbitrary markdown.

function renderInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

export default function MarkdownLite({ content }) {
  const blocks = content.trim().split(/\n\n+/);

  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        if (block.startsWith("### ")) {
          return (
            <h3 key={i} className="font-display text-2xl text-slate mt-8 mb-1">
              {block.replace(/^### /, "")}
            </h3>
          );
        }
        if (block.startsWith("#### ")) {
          return (
            <h4 key={i} className="font-display text-xl text-slate mt-6 mb-1">
              {block.replace(/^#### /, "")}
            </h4>
          );
        }
        if (block.split("\n").every((line) => line.startsWith("- "))) {
          return (
            <ul key={i} className="list-disc pl-5 space-y-2">
              {block.split("\n").map((line, j) => (
                <li key={j} className="text-slate-muted leading-relaxed">
                  {renderInline(line.replace(/^- /, ""))}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-slate-muted leading-relaxed whitespace-pre-line">
            {renderInline(block)}
          </p>
        );
      })}
    </div>
  );
}
