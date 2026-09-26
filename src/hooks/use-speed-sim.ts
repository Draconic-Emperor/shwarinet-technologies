import { useCallback, useEffect, useRef, useState } from "react";

export type Phase = "idle" | "connecting" | "ping" | "speedtest" | "upload";

export function useSpeedSim() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [ping, setPing] = useState<number>(12);
  const [download, setDownload] = useState<number>(0);
  const [upload, setUpload] = useState<number>(0);
  const [jitter, setJitter] = useState<number>(1.2);
  const rafRef = useRef<number | null>(null);
  const timersRef = useRef<number[]>([]);

  const stop = useCallback(() => {
    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    for (const t of timersRef.current) window.clearTimeout(t);
    timersRef.current = [];
  }, []);

  const run = useCallback(() => {
    stop();
    setDownload(0);
    setUpload(0);
    setPhase("connecting");
    timersRef.current.push(window.setTimeout(() => setPhase("ping"), 700));

    timersRef.current.push(
      window.setTimeout(() => {
        setPing(9 + Math.round(Math.random() * 14));
        setJitter(0.6 + Math.random() * 2.2);
        setPhase("speedtest");

        const dTarget = 78 + Math.random() * 52;
        const uTarget = Math.round(dTarget * (0.32 + Math.random() * 0.18));
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / 3800, 1);
          const wave = Math.sin(now / 260) * 2.2;
          if (t < 0.62) {
            const p = t / 0.62;
            setDownload(dTarget * (1 - Math.pow(1 - p, 3)) + wave);
          } else {
            const p = (t - 0.62) / 0.38;
            setDownload(dTarget);
            setUpload(uTarget * (1 - Math.pow(1 - p, 3)) + wave * 0.5);
          }
          if (t < 1) {
            rafRef.current = requestAnimationFrame(tick);
          } else {
            setDownload(dTarget);
            setUpload(uTarget);
            setPhase("idle");
          }
        };
        rafRef.current = requestAnimationFrame(tick);
      }, 1600),
    );
  }, [stop]);

  useEffect(() => stop, [stop]);

  return { phase, ping, download, upload, jitter, run, busy: phase !== "idle" };
}

export function speedVerdict(mbps: number) {
  if (mbps >= 150) return { label: "Excellent", color: "#22D3EE" };
  if (mbps >= 60) return { label: "Very Good", color: "#3B82F6" };
  if (mbps >= 25) return { label: "Good", color: "#8B5CF6" };
  if (mbps >= 10) return { label: "Average", color: "#D4AF37" };
  return { label: "Poor", color: "#F43F5E" };
}
