import { useEffect, useState } from "react";
import { hero } from "../data/content";
import ronkePortrait from "../images/Ronke.jpg";
import { Link } from "react-router-dom";
import { credibility } from "../data/content";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const stage = (order) =>
    `transition-all duration-700 ease-editorial ${
      mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
    }`;

  const delay = (ms) => ({ transitionDelay: `${ms}ms` });

  return (
    <>
      <section className="bg-white text-slate-900 border-b border-stroke">
        <div className="max-w-6xl mx-auto px-6 py-8 lg:py-16 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
          <div>
            <p
              className={`${stage(0)} text-sm tracking-wide text-forest-emerald mb-5`}
              style={delay(0)}
            >
              {hero.eyebrow}
            </p>
            <h1
              className={`${stage(1)} font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6 text-slate-900`}
              style={delay(120)}
            >
              {hero.headline}
            </h1>
            <p
              className={`${stage(2)} text-slate-700 text-lg leading-relaxed max-w-xl mb-9`}
              style={delay(240)}
            >
              {hero.subhead}
            </p>
            <div
              className={`${stage(3)} flex flex-wrap items-center gap-6`}
              style={delay(360)}
            >
              <Link
                to={hero.primaryAction.href}
                className="inline-flex items-center rounded-sm bg-terracotta px-6 py-3 text-sm font-medium text-white hover:bg-terracotta/90 transition-colors duration-200"
              >
                {hero.primaryAction.label}
              </Link>
              <Link
                to={hero.secondaryAction.href}
                className="text-sm text-slate-700 border-b border-slate-300 pb-0.5 hover:border-slate-500 hover:text-slate-900 transition-colors duration-200"
              >
                {hero.secondaryAction.label}
              </Link>
            </div>
          </div>

          <div
            className={`${stage(4)} justify-self-center -mt-4 lg:-mt-6`}
            style={delay(180)}
          >
            <div className="w-64 h-80 sm:w-72 sm:h-96 overflow-hidden rounded-sm border border-stroke bg-alabaster shadow-xl">
              <img
                src={ronkePortrait}
                alt="Ronke Sokefun"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credibility band sits immediately after the hero; negative margin overlaps slightly */}
      <div className="w-full -mt-6 lg:-mt-10 pb-8">
        <div className="bg-white w-full">
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-sm py-8 px-6 shadow-lg">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-center text-slate-800">
                {credibility.map((item) => (
                  <div key={item.name}>
                    <p className="font-display text-sm">{item.name}</p>
                    <p className="text-xs text-slate-500 mt-1">{item.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
