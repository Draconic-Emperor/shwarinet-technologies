import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      role="img"
      aria-label="ShwariNet logo"
      className={cn("h-9 w-9", className)}
    >
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="10"
        className="fill-primary/10 stroke-primary/40"
        strokeWidth="1.5"
      />
      <g>
        <circle cx="20" cy="13.5" r="2.6" fill="#3B82F6" />
        <circle cx="11.5" cy="26" r="2.6" fill="#06B6D4" />
        <circle cx="28.5" cy="26" r="2.6" fill="#06B6D4" />
        <circle cx="20" cy="26" r="2" fill="#D4AF37" />
      </g>
      <g stroke="#94A3B8" strokeWidth="1.4" opacity="0.75">
        <line x1="20" y1="13.5" x2="11.5" y2="26" />
        <line x1="20" y1="13.5" x2="28.5" y2="26" />
        <line x1="20" y1="13.5" x2="20" y2="26" />
        <line x1="11.5" y1="26" x2="20" y2="26" />
        <line x1="28.5" y1="26" x2="20" y2="26" />
      </g>
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark className="h-9 w-9" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-tight text-foreground">
          Shwari<span className="text-primary">Net</span>
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Technologies
        </span>
      </span>
      <span className="sr-only">ShwariNet Technologies — home</span>
    </span>
  );
}
