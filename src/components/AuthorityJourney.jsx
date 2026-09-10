import { useState } from "react";
import { journey } from "../data/content";
import Reveal from "./Reveal";

export default function AuthorityJourney() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-navy">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl text-white mb-10">
            A Career Built Across Four Tiers of Authority
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid sm:grid-cols-4 gap-3 mb-10">
            {journey.map((stage, i) => (
              <button
                key={stage.index}
                onClick={() => setActive(i)}
                className={`text-left rounded-sm border px-5 py-4 transition-colors duration-200 ${
                  active === i
                    ? "border-terracotta bg-white/[0.06]"
                    : "border-white/10 hover:border-white/25"
                }`}
              >
                <span
                  className={`text-xs tracking-wide ${
                    active === i ? "text-terracotta" : "text-white/50"
                  }`}
                >
                  {stage.index}
                </span>
                <p className="text-white text-sm mt-1 font-medium">
                  {stage.title}
                </p>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal key={active} delay={0}>
          <div className="border-t border-white/10 pt-8">
            <p className="font-display text-2xl text-white mb-2">
              {journey[active].org}
            </p>
            <p className="text-white/70 leading-relaxed max-w-2xl">
              {journey[active].body}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
