import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router";
import type { ReactNode } from "react";

export function SiteLayout({
  children,
  bare = false,
}: {
  children: ReactNode;
  bare?: boolean;
}) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Wait a tick so the target section exists after route change.
      const id = window.setTimeout(() => {
        document
          .getElementById(location.hash.slice(1))
          ?.scrollIntoView({ behavior: "smooth" });
      }, 60);
      return () => window.clearTimeout(id);
    }
    window.scrollTo({ top: 0 });
  }, [location.pathname, location.hash]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {!bare && <Navbar />}

      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1"
      >
        {children}
      </motion.main>

      {!bare && <Footer />}
      <WhatsAppButton />
    </div>
  );
}
