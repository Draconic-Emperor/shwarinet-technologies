import { motion } from "framer-motion";
import {
  Camera,
  Gamepad2,
  Laptop,
  Router,
  Server,
  Smartphone,
  Tv,
} from "lucide-react";
import { useState } from "react";

type Node = {
  id: string;
  label: string;
  sub: string;
  icon: typeof Router;
  // % coordinates within the map container
  x: number;
  y: number;
  color: string;
};

const CENTER: Node = {
  id: "router",
  label: "Main Router",
  sub: "ShwariNet Optimized",
  icon: Router,
  x: 50,
  y: 50,
  color: "#D4AF37",
};

const DEVICES: Node[] = [
  { id: "laptop", label: "Work Laptop", sub: "5 GHz · −42 dBm", icon: Laptop, x: 18, y: 22, color: "#3B82F6" },
  { id: "phone", label: "Smartphone", sub: "5 GHz · −51 dBm", icon: Smartphone, x: 82, y: 20, color: "#06B6D4" },
  { id: "tv", label: "Smart TV", sub: "5 GHz · −58 dBm", icon: Tv, x: 12, y: 68, color: "#8B5CF6" },
  { id: "console", label: "Game Console", sub: "Wired · 4 ms", icon: Gamepad2, x: 85, y: 66, color: "#22D3EE" },
  { id: "nas", label: "Office Server", sub: "Wired · 1 Gbps", icon: Server, x: 32, y: 86, color: "#3B82F6" },
  { id: "cam", label: "Security Cam", sub: "2.4 GHz · −66 dBm", icon: Camera, x: 70, y: 87, color: "#D4AF37" },
];

export function NetworkMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  const isLinked = (id: string) =>
    hovered === id || hovered === "router" || (hovered === null && false);

  return (
    <section id="network" className="relative overflow-hidden py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
            Live Network View
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            See your network the way we do
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every device mapped, every connection measured. Hover the nodes to
            explore a typical ShwariNet-optimized setup.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass relative mt-14 h-[460px] overflow-hidden rounded-3xl sm:h-[520px]"
        >
          <div className="bg-grid absolute inset-0 opacity-50" aria-hidden="true" />
          <div
            className="absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(45% 45% at 50% 50%, rgba(59,130,246,0.10), transparent 75%)",
            }}
          />

          {/* SVG links + packets */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="packetGrad" r="0.5">
                <stop offset="0%" stopColor="#22D3EE" stopOpacity="1" />
                <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
              </radialGradient>
            </defs>
            {DEVICES.map((d) => {
              const active = hovered === d.id || hovered === "router";
              return (
                <line
                  key={d.id}
                  x1={CENTER.x}
                  y1={CENTER.y}
                  x2={d.x}
                  y2={d.y}
                  stroke={active ? "#22D3EE" : "rgba(148,163,184,0.28)"}
                  strokeWidth={active ? 0.45 : 0.3}
                  style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
                />
              );
            })}
          </svg>

          {/* Animated packets along links */}
          {DEVICES.map((d, i) => (
            <motion.span
              key={`pkt-${d.id}`}
              className="pointer-events-none absolute z-10 h-1.5 w-1.5 rounded-full"
              style={{ background: d.color, boxShadow: `0 0 8px ${d.color}` }}
              animate={{
                left: [`${CENTER.x}%`, `${d.x}%`],
                top: [`${CENTER.y}%`, `${d.y}%`],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                delay: i * 0.45,
                ease: "easeInOut",
                repeatDelay: 1.6,
              }}
            />
          ))}

          {/* Center router node */}
          <button
            type="button"
            aria-label="Main router — ShwariNet optimized"
            onMouseEnter={() => setHovered("router")}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered("router")}
            onBlur={() => setHovered(null)}
            className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-ring"
            style={{ left: "50%", top: "50%" }}
          >
            <motion.div
              animate={{ scale: hovered === "router" ? 1.08 : 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="relative flex h-24 w-24 flex-col items-center justify-center rounded-2xl border-2 bg-[#0b1120]/90"
              style={{
                borderColor: hovered === "router" ? "#D4AF37" : "rgba(212,175,55,0.45)",
              }}
            >
              <span
                className="absolute inset-0 animate-pulse-ring rounded-2xl border"
                style={{ borderColor: "rgba(212,175,55,0.5)" }}
                aria-hidden="true"
              />
              <CENTER.icon className="h-8 w-8 text-gold" />
              <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-foreground">
                Router
              </span>
            </motion.div>
          </button>

          {/* Device nodes */}
          {DEVICES.map((d) => (
            <button
              key={d.id}
              type="button"
              aria-label={`${d.label} — ${d.sub}`}
              onMouseEnter={() => setHovered(d.id)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(d.id)}
              onBlur={() => setHovered(null)}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring"
              style={{ left: `${d.x}%`, top: `${d.y}%` }}
            >
              <motion.div
                animate={{
                  scale: hovered === d.id ? 1.12 : 1,
                  y: hovered === d.id ? -3 : 0,
                }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
                className="flex w-20 flex-col items-center gap-1.5 rounded-xl border bg-[#0b1120]/90 px-2 py-2.5 sm:w-24"
                style={{
                  borderColor:
                    hovered === d.id ? d.color : "rgba(148,163,184,0.25)",
                }}
              >
                <d.icon
                  className="h-5 w-5 transition-colors"
                  style={{ color: hovered === d.id ? d.color : "#94A3B8" }}
                />
                <span className="text-center text-[9px] font-semibold leading-tight text-foreground/90 sm:text-[10px]">
                  {d.label}
                </span>
              </motion.div>
            </button>
          ))}

          {/* Hover detail card */}
          <div className="pointer-events-none absolute bottom-4 left-4 right-4 z-30 flex justify-center">
            <div
              className="glass flex items-center gap-3 rounded-xl px-4 py-2.5 transition-opacity duration-200"
              style={{ opacity: hovered ? 1 : 0 }}
              aria-live="polite"
            >
              {(() => {
                const n =
                  hovered === "router"
                    ? CENTER
                    : DEVICES.find((d) => d.id === hovered);
                if (!n) return null;
                const Icon = n.icon;
                return (
                  <>
                    <Icon className="h-4 w-4" style={{ color: n.color }} />
                    <span className="text-sm font-semibold text-foreground">{n.label}</span>
                    <span className="text-xs text-muted-foreground">{n.sub}</span>
                  </>
                );
              })()}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
