import { audioFeature } from "../data/content";
import Reveal from "./Reveal";

export default function AudioSpotlight() {
  return (
    <section className="bg-alabaster border-t border-stroke">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Reveal>
          <p className="text-xs text-emerald font-medium mb-2">
            {audioFeature.heading}
          </p>
          <h2 className="font-display text-2xl text-slate mb-6">
            {audioFeature.title}
          </h2>
          <iframe
            title="Featured audio"
            width="100%"
            height="166"
            allow="autoplay"
            src={audioFeature.embedUrl}
            className="rounded-sm border border-stroke"
          />
        </Reveal>
      </div>
    </section>
  );
}
