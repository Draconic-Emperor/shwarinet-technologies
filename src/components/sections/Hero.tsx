import { Counter } from "@/components/Counter";
import { NetworkCanvas } from "@/components/NetworkCanvas";
import { SpeedGauge } from "@/components/SpeedGauge";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { motion } from "framer-motion";
import { ArrowRight, Gauge, Signal, ShieldCheck, Wifi } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function MetricCard({
  icon: Icon,
  label,
  value,
  unit,
  delay,
  tone,
}: {
  icon: typeof Wifi;
  label: string;
  value: string;
  unit?: string;
  delay: number;
  tone: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="glass rounded-xl px-3.5 py-3"
    >
      <div className="flex items-center gap-2">
        <span
          className="flex h-7 w-7 items-center justify-center rounded-md"
          style={{ background: `${tone}1f`, color: tone }}
        >
          <Icon className="h-4 w-4" />
        </span>
        <div className="leading-tight">
          <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {label}
          </div>
          <div className="font-display text-sm font-bold tabular-nums text-foreground">
            {value}
            {unit ? (
              <span className="ml-1 text-[10px] font-medium text-muted-foreground">{unit}</span>
            ) : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const sim = { down: 86.4, up: 31.2, latency: 12, signal: 92 };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* backdrop */}
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(60% 50% at 70% 20%, rgba(59,130,246,0.16), transparent 70%), radial-gradient(45% 40% at 15% 80%, rgba(6,182,212,0.10), transparent 70%)",
        }}
      />
      <NetworkCanvas />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
        {/* Left: copy */}
        <div className="max-w-2xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-blue-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Network Operations · Nairobi, Kenya
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.08}
            className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl xl:text-6xl"
          >
            Is Your Internet Really{" "}
            <span className="text-gradient">Shwari?</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.16}
            className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            We test, analyze, and optimize networks so you get the speed,
            coverage, stability, and security you deserve.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.24}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button asChild size="lg" className="h-12 px-7 text-base font-semibold">
              <a href="#contact" className="gap-2">
                Get a Network Checkup
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-border bg-card/40 px-7 text-base font-semibold text-foreground hover:bg-accent"
            >
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="gap-2">
                Contact Us
              </a>
            </Button>
            <p className="sr-only">
              ShwariNet tests your Wi-Fi speed, optimizes your network, and secures your connection.
            </p>
          </motion.div>

          {/* Trust row */}
          <motion.dl
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.34}
            className="mt-10 grid max-w-lg grid-cols-3 gap-4"
          >
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Avg. speed gained
              </dt>
              <dd className="mt-1 font-display text-2xl font-bold text-foreground">
                <Counter value={41} suffix="%" />
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Networks tested
              </dt>
              <dd className="mt-1 font-display text-2xl font-bold text-foreground">
                <Counter value={1250} suffix="+" />
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Satisfaction
              </dt>
              <dd className="mt-1 font-display text-2xl font-bold text-foreground">
                <Counter value={98} suffix="%" />
              </dd>
            </div>
          </motion.dl>
        </div>

        {/* Right: gauge + floating cards */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mx-auto"
          >
            <SpeedGauge />
          </motion.div>

          <div className="pointer-events-none absolute -left-4 top-6 z-20 hidden sm:block">
            <MetricCard
              icon={Wifi}
              label="Download"
              value={`${sim.down.toFixed(0)}`}
              unit="Mbps"
              delay={0.55}
              tone="#3B82F6"
            />
          </div>
          <div className="pointer-events-none absolute -right-2 top-24 z-20 hidden sm:block">
            <MetricCard
              icon={Gauge}
              label="Upload"
              value={`${sim.up.toFixed(0)}`}
              unit="Mbps"
              delay={0.65}
              tone="#06B6D4"
            />
          </div>
          <div className="pointer-events-none absolute -left-2 bottom-24 z-20 hidden sm:block">
            <MetricCard
              icon={Signal}
              label="Latency"
              value={`${sim.latency}`}
              unit="ms"
              delay={0.75}
              tone="#8B5CF6"
            />
          </div>
          <div className="pointer-events-none absolute -right-3 bottom-6 z-20 hidden sm:block">
            <MetricCard
              icon={ShieldCheck}
              label="Signal"
              value={`${sim.signal}`}
              unit="%"
              delay={0.85}
              tone="#D4AF37"
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent" aria-hidden="true" />
    </section>
  );
}
