import { Counter } from "@/components/Counter";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { stats } from "@/lib/site";
import { Globe2, Laptop, ShieldCheck, ThumbsUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const icons: LucideIcon[] = [Globe2, Laptop, ShieldCheck, ThumbsUp];
const tones = ["#3B82F6", "#06B6D4", "#D4AF37", "#22D3EE"];

export function Stats() {
  return (
    <section
      className="relative overflow-hidden border-y border-border/60 bg-navy/60 py-16 sm:py-20"
      aria-label="ShwariNet by the numbers"
    >
      <div className="bg-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(40% 60% at 50% 0%, rgba(59,130,246,0.12), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Stagger className="grid grid-cols-2 gap-8 lg:grid-cols-4" stagger={0.1}>
          {stats.map((s, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={s.label}>
                <div className="flex flex-col items-center text-center">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ background: `${tones[i]}1a`, color: tones[i] }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="mt-4 font-display text-3xl font-bold tabular-nums text-foreground sm:text-4xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground sm:text-sm">
                    {s.label}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
