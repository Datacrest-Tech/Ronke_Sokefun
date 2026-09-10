import { credibility } from "../data/content";
import Reveal from "./Reveal";

export default function CredibilityBar() {
  return (
    <section className="bg-white border-b border-stroke">
      <Reveal>
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {credibility.map((item) => (
            <div key={item.name} className="text-center">
              <p className="font-display text-lg text-slate">{item.name}</p>
              <p className="text-xs text-slate-muted mt-1">{item.role}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
