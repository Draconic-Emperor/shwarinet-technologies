import { Stagger, StaggerItem } from "@/components/Reveal";
import { whyUs } from "@/lib/site";
import { Gauge, Headset, PlugZap, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  plug: PlugZap,
  headset: Headset,
  shield: ShieldCheck,
  gauge: Gauge,
};

export function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
            Why Choose ShwariNet
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built on reliability, proven by numbers
          </h2>
          <p className="mt-4 text-muted-foreground">
            Four principles that decide how every job is scoped, executed, and
            signed off.
          </p>
        </div>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {whyUs.map((f, i) => {
            const Icon = icons[f.icon];
            const tones = ["#3B82F6", "#06B6D4", "#D4AF37", "#22D3EE"];
            return (
              <StaggerItem key={f.title} className="h-full">
                <div className="group relative h-full rounded-2xl border border-border/70 bg-card/70 p-6 transition-colors duration-300 hover:border-primary/40">
                  <span className="absolute right-5 top-5 font-display text-4xl font-bold text-foreground/5 transition-colors duration-300 group-hover:text-primary/10">
                    0{i + 1}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
