import { services } from "../data/content";
import Reveal from "./Reveal";

function ServiceCard({ title, description, credibility, accent }) {
  return (
    <div className="bg-white border border-stroke rounded-sm p-8 h-full">
      <div
        className="mb-4 h-1.5 w-12 rounded-full"
        style={{ backgroundColor: accent }}
      />
      <h3 className="font-display text-2xl text-slate mb-3">{title}</h3>
      <p className="text-slate-muted leading-relaxed mb-6">{description}</p>
      <div className="space-y-2">
        {credibility.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="block text-sm text-slate underline-offset-4 hover:underline"
            style={{ color: accent }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function GovernanceAndPolicy() {
  return (
    <section id="services" className="bg-alabaster">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <Reveal>
          <div className="mb-10 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-terracotta mb-3">
              Services
            </p>
            <h2 className="font-display text-4xl text-slate mb-4">
              Executive advisory for governance, policy, and institutional
              resilience.
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <ServiceCard
                title={service.title}
                description={service.description}
                credibility={service.credibility}
                accent={service.accent}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
