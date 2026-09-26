import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { site } from "@/lib/site";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Wi-Fi that reaches every room, not just the router",
  "Latency tuned for calls, streaming and gaming",
  "Security hardening on every visit",
  "Honest reporting — you see the numbers before and after",
];

const miniStats = [
  { value: "6+", label: "Years in the field" },
  { value: "24h", label: "Response time" },
  { value: "100%", label: "On-site follow-up" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left: copy */}
          <div>
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                About ShwariNet
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                The network team that treats your Wi-Fi like infrastructure,
                not luck
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                ShwariNet Technologies helps homes, students, gamers, offices,
                and businesses improve connectivity, optimize Wi-Fi
                performance, and strengthen network security. We combine
                enterprise-grade tooling with plain-language reporting, so you
                always know exactly what your network is doing — and what it
                could be doing.
              </p>
            </Reveal>

            <Stagger className="mt-7 space-y-3.5">
              {highlights.map((h) => (
                <StaggerItem key={h}>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                    <span className="text-sm leading-relaxed text-foreground/90">{h}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.1} className="mt-9">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-blue-300"
              >
                Talk to an engineer — {site.phoneDisplay}
              </a>
            </Reveal>
          </div>

          {/* Right: NOC panel visual */}
          <Reveal delay={0.15}>
            <div className="glass relative overflow-hidden rounded-2xl p-6 sm:p-8">
              <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
              <div
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      NOC Status · Live
                    </span>
                  </div>
                  <span className="rounded-md border border-border/70 px-2 py-1 text-[10px] font-semibold text-muted-foreground">
                    SHWARI-NOC-01
                  </span>
                </div>

                {/* Animated bars */}
                <div className="mt-7 space-y-4">
                  {[
                    { label: "Uptime", pct: 99, color: "#22D3EE" },
                    { label: "Coverage", pct: 94, color: "#3B82F6" },
                    { label: "Throughput", pct: 88, color: "#06B6D4" },
                    { label: "Security score", pct: 96, color: "#D4AF37" },
                  ].map((row, i) => (
                    <div key={row.label}>
                      <div className="mb-1.5 flex items-center justify-between text-xs">
                        <span className="font-medium text-foreground/90">{row.label}</span>
                        <span className="tabular-nums text-muted-foreground">{row.pct}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: row.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${row.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 grid grid-cols-3 gap-3 border-t border-border/60 pt-6">
                  {miniStats.map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="font-display text-xl font-bold text-foreground">{s.value}</div>
                      <div className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
