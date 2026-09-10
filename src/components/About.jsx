import { useState } from "react";
import { about } from "../data/content";
import Reveal from "./Reveal";
import ronkePortrait from "../images/Ronke.jpg";
import { Link } from "react-router-dom";

export default function About({ preview = false }) {
  const [expanded, setExpanded] = useState(false);
  const visibleParagraphs = expanded
    ? about.paragraphs
    : about.paragraphs.slice(0, 2);

  return (
    <section
      id="about"
      className="bg-alabaster"
      style={{
        backgroundImage: `linear-gradient(rgba(250,250,250,0.88), rgba(250,250,250,0.88)), url(${ronkePortrait})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        {preview ? (
          <div className="max-w-3xl">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl text-slate mb-6">
                {about.heading}
              </h2>
              <p className="text-slate-muted leading-relaxed mb-6">
                {about.paragraphs[0]}
              </p>
              <Link
                to="/about"
                className="inline-flex items-center rounded-sm bg-navy px-5 py-2.5 text-sm font-medium text-white hover:bg-navy/90 transition-colors duration-200"
              >
                Read more
              </Link>
            </Reveal>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_0.7fr] gap-14">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl text-slate mb-8">
                {about.heading}
              </h2>
              <div className="space-y-5 max-w-2xl">
                {visibleParagraphs.map((p, i) => (
                  <p key={i} className="text-slate-muted leading-relaxed">
                    {p}
                  </p>
                ))}

                {about.paragraphs.length > 2 && (
                  <button
                    type="button"
                    onClick={() => setExpanded((value) => !value)}
                    className="mt-2 inline-flex items-center rounded-sm border border-slate-300 px-4 py-2 text-sm font-medium text-slate hover:border-slate-500 hover:text-slate-900 transition-colors duration-200"
                  >
                    {expanded ? "Show less" : "Read full story"}
                  </button>
                )}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="bg-white border border-stroke rounded-sm p-8">
                <p className="text-sm text-slate mb-4 font-medium">
                  Credentials
                </p>
                <ul className="space-y-3">
                  {about.credentials.map((c) => (
                    <li
                      key={c}
                      className="text-sm text-slate-muted leading-relaxed border-l-2 border-emerald pl-3"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}
