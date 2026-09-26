import { Stagger, StaggerItem } from "@/components/Reveal";
import { services } from "@/lib/site";
import { motion } from "framer-motion";
import {
  Gauge,
  Headset,
  MousePointerClick,
  ShieldCheck,
  Waves,
  Code2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  gauge: Gauge,
  waves: Waves,
  shield: ShieldCheck,
  headset: Headset,
  code: Code2,
};

const tones: Record<string, string> = {
  "speed-testing": "#3B82F6",
  "network-optimization": "#06B6D4",
  "security-assessment": "#D4AF37",
  "it-support": "#8B5CF6",
  "website-development": "#22D3EE",
};

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28">
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(50% 40% at 85% 10%, rgba(59,130,246,0.08), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
            What We Do
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Services engineered around your connection
          </h2>
          <p className="mt-4 text-muted-foreground">
            From a single frustrated gamer to a multi-floor office, every
            engagement starts with measurement and ends with proof.
          </p>
        </div>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {services.map((s) => {
            const Icon = icons[s.icon];
            const tone = tones[s.id] ?? "#3B82F6";
            return (
              <StaggerItem key={s.id} className="h-full">
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="group relative flex h-full flex-col rounded-2xl border border-border/70 bg-card p-6 transition-colors duration-300 hover:border-primary/50"
                >
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: `linear-gradient(90deg, transparent, ${tone}, transparent)` }}
                  />
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${tone}1a`, color: tone }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider" style={{ color: tone }}>
                    {s.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-xs text-foreground/80">
                        <span className="h-1 w-1 rounded-full" style={{ background: tone }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring"
                    style={{ color: tone }}
                    aria-label={`${s.cta} — go to contact form`}
                  >
                    {s.cta}
                    <MousePointerClick className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                </motion.article>
              </StaggerItem>
            );
          })}

          {/* CTA card filling the 6th grid slot */}
          <StaggerItem className="h-full">
            <motion.a
              href="#contact"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group flex h-full min-h-[280px] flex-col justify-between rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/15 via-card to-card p-6"
              aria-label="Not sure what you need? Get a checkup"
            >
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  Not sure where to start?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Book a full network checkup and we'll bring the data — speed
                  maps, channel plans, and a security snapshot of your entire
                  setup.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Get a Network Checkup
                <MousePointerClick className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </motion.a>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
