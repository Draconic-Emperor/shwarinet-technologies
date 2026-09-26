import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, WifiOff } from "lucide-react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <SiteLayout bare>
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-16">
        <div className="bg-grid absolute inset-0" aria-hidden="true" />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(45% 40% at 50% 35%, rgba(59,130,246,0.14), transparent 70%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative text-center"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-border/70 bg-card">
            <WifiOff className="h-8 w-8 text-primary" />
          </div>
          <p className="mt-6 font-display text-7xl font-bold tracking-tight text-gradient sm:text-8xl">
            404
          </p>
          <h1 className="mt-4 font-display text-2xl font-bold text-foreground">
            This route dropped off the network
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            The page you're looking for doesn't exist or was moved. Let's
            reconnect you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/" className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Back to Home
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/#contact">Contact Support</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </SiteLayout>
  );
}
