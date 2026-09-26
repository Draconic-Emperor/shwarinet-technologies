import { testimonials } from "@/lib/site";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AUTOPLAY_MS = 6000;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const hoverRef = useRef(false);

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(() => {
      if (!hoverRef.current) {
        setIndex((i) => (i + 1) % testimonials.length);
      }
    }, AUTOPLAY_MS);
    return () => window.clearInterval(t);
  }, [paused]);

  const go = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <section className="relative py-24 sm:py-28" aria-label="Customer testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
            Testimonials
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Networks that got their worth back
          </h2>
        </div>

        <div
          className="relative mx-auto mt-12 max-w-3xl"
          onMouseEnter={() => {
            hoverRef.current = true;
            setPaused(true);
          }}
          onMouseLeave={() => {
            hoverRef.current = false;
            setPaused(false);
          }}
        >
          <div className="glass relative overflow-hidden rounded-2xl px-6 py-10 sm:px-12">
            <Quote className="absolute left-6 top-6 h-8 w-8 text-primary/30" aria-hidden="true" />
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <blockquote className="text-lg leading-relaxed text-foreground/90 sm:text-xl">
                  "{current.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full font-display text-sm font-bold text-white"
                    style={{
                      background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
                    }}
                    aria-hidden="true"
                  >
                    {current.name.charAt(0)}
                  </span>
                  <div>
                    <div className="text-sm font-bold text-foreground">{current.name}</div>
                    <div className="text-xs text-muted-foreground">{current.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Choose testimonial">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Testimonial ${i + 1}: ${t.name}`}
                  onClick={() => setIndex(i)}
                  className="h-2 rounded-full transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  style={{
                    width: i === index ? 26 : 8,
                    background: i === index ? "#3B82F6" : "rgba(148,163,184,0.35)",
                  }}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
