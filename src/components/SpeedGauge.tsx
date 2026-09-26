import { Button } from "@/components/ui/button";
import { useSpeedSim, speedVerdict } from "@/hooks/use-speed-sim";
import { cn } from "@/lib/utils";
import { RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";

const START_ANGLE = -220;
const SWEEP = 260;

function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function arcPath(cx: number, cy: number, r: number, a0: number, a1: number) {
  const p0 = polar(cx, cy, r, a0);
  const p1 = polar(cx, cy, r, a1);
  const large = Math.abs(a1 - a0) > 180 ? 1 : 0;
  return `M ${p0.x} ${p0.y} A ${r} ${r} 0 ${large} 1 ${p1.x} ${p1.y}`;
}

const TICKS = [0, 25, 50, 75, 100, 150, 200];

export function SpeedGauge({ compact = false }: { compact?: boolean }) {
  const { phase, ping, download, upload, jitter, run, busy } = useSpeedSim();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (phase !== "speedtest") return;
    let raf = 0;
    const loop = () => {
      setDisplay(Math.max(download, upload));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [phase, download, upload]);

  useEffect(() => {
    if (phase === "idle" && !busy) setDisplay(0);
  }, [phase, busy]);

  const clamped = Math.max(0, Math.min(220, display));
  const frac = clamped / 220;
  const needleAngle = START_ANGLE + SWEEP * frac;
  const v = speedVerdict(clamped);

  return (
    <div className="glass relative flex w-full max-w-md flex-col items-center rounded-2xl p-6">
      <div className="mb-2 flex items-center gap-2 self-stretch">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Live Demo · Simulated
        </span>
      </div>

      <div className={cn("relative", compact ? "h-44 w-44" : "h-52 w-52")}>
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <path
            d={arcPath(100, 100, 82, START_ANGLE, START_ANGLE + SWEEP)}
            fill="none"
            stroke="rgba(148,163,184,0.15)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d={arcPath(100, 100, 82, START_ANGLE, needleAngle)}
            fill="none"
            stroke={v.color}
            strokeWidth="10"
            strokeLinecap="round"
          />
          {TICKS.map((t) => {
            const a = START_ANGLE + SWEEP * (t / 220);
            const p0 = polar(100, 100, 70, a);
            const p1 = polar(100, 100, 63, a);
            return (
              <line
                key={t}
                x1={p0.x}
                y1={p0.y}
                x2={p1.x}
                y2={p1.y}
                stroke="rgba(148,163,184,0.4)"
                strokeWidth="2"
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-4xl font-bold tabular-nums text-foreground">
            {clamped.toFixed(0)}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Mbps
          </span>
          <span
            className="mt-1 text-xs font-semibold"
            style={{ color: v.color }}
          >
            {phase === "connecting" || phase === "ping" ? "Testing…" : v.label}
          </span>
        </div>
      </div>

      <div className="mt-2 grid w-full grid-cols-3 gap-2">
        {[
          { label: "Ping", value: phase === "connecting" || phase === "ping" ? "…" : `${ping} ms` },
          { label: "Down", value: `${download.toFixed(0)}` },
          { label: "Up", value: `${upload.toFixed(0)}` },
        ].map((m) => (
          <div
            key={m.label}
            className="rounded-lg border border-border/60 bg-navy/40 px-2 py-2 text-center"
          >
            <div className="text-sm font-bold tabular-nums text-foreground">{m.value}</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      <Button
        onClick={run}
        disabled={busy}
        className="mt-4 w-full gap-2"
        aria-label="Run simulated speed test"
      >
        <RotateCcw className={cn("h-4 w-4", busy && "animate-spin")} />
        {busy ? "Testing…" : "Run Test"}
      </Button>
    </div>
  );
}
