"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Mail, FileText, Twitter, Linkedin } from "lucide-react";
import { GalaxyBackground } from "./galaxy-background";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef, useCallback } from "react";

function ScrollIndicator({ isDark, onClick }: { isDark: boolean; onClick?: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.8 }}
      onClick={onClick}
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 select-none cursor-pointer ${isDark ? "text-white/40 hover:text-white/70" : "text-black/30 hover:text-black/50"} transition-colors`}
    >
      <span className="text-xs tracking-[0.2em] uppercase font-light">Scroll to explore</span>
      <svg width="22" height="34" viewBox="0 0 22 34" fill="none">
        <rect x="1" y="1" width="20" height="32" rx="10" stroke="currentColor" strokeWidth="1.5" />
        <motion.rect
          x="9.5" y="6" width="3" height="5" rx="1.5"
          fill="currentColor"
          animate={{ y: [6, 16, 6], opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  );
}

export function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Default to dark until mounted to avoid hydration flash
  const isDark = !mounted || resolvedTheme === "dark";

  const heroRef = useRef<HTMLDivElement>(null);

  const snapToContent = useCallback(() => {
    const heroHeight = heroRef.current?.offsetHeight ?? window.innerHeight;
    if (window.scrollY < heroHeight * 0.8) {
      window.scrollTo({ top: heroHeight, behavior: "smooth" });
    }
  }, []);

  // Snap on first downward wheel scroll while hero is in view
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const heroHeight = heroRef.current?.offsetHeight ?? window.innerHeight;
      if (e.deltaY > 0 && window.scrollY < heroHeight * 0.5) {
        e.preventDefault();
        snapToContent();
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [snapToContent]);

  // Snap on upward swipe (touch) while hero is in view
  useEffect(() => {
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY; };
    const handleTouchEnd = (e: TouchEvent) => {
      const heroHeight = heroRef.current?.offsetHeight ?? window.innerHeight;
      if (touchStartY - e.changedTouches[0].clientY > 30 && window.scrollY < heroHeight * 0.5) {
        snapToContent();
      }
    };
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [snapToContent]);

  // Snap on click anywhere on the hero that isn't a button/link
  const handleHeroClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("a, button")) return;
    snapToContent();
  };

  return (
    <div
      ref={heroRef}
      onClick={handleHeroClick}
      className="relative -mt-14 min-h-screen overflow-hidden"
      style={{ backgroundColor: isDark ? "#06060e" : "#f5fdf4" }}
    >
      {/* WebGL galaxy — dark mode only */}
      {isDark && (
        <GalaxyBackground
          hueShift={140}
          density={1}
          glowIntensity={0.3}
          saturation={0}
          twinkleIntensity={0.4}
          rotationSpeed={0.06}
          repulsionStrength={4}
          repulsionRadius={0.04}
          speed={0.8}
          transparent={true}
          mouseRepulsion={true}
          lerpFactor={0.18}
        />
      )}

      {/* Content sits above the canvas */}
      <div className="relative z-10 container min-h-screen flex flex-col items-center justify-center gap-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-4"
        >
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl p-4 bg-clip-text text-transparent"
            style={{
              fontFamily: "var(--font-dancing), cursive",
              fontWeight: 700,
              backgroundImage: isDark
                ? "linear-gradient(to right, #ffffff, rgba(255,255,255,0.7))"
                : "linear-gradient(to right, #1a3d1a, rgba(30,80,30,0.75))",
            }}
          >
            Zihao Jing
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`md:text-xl ${isDark ? "text-white/55" : "text-black/55"}`}
          >
            Building trustworthy LLMs for multimodal understanding and human-centered intelligence.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link href="/portfolio">
            <Button
              size="lg"
              className={`group backdrop-blur-sm ${isDark ? "bg-white/10 hover:bg-white/20 text-white border border-white/20" : "bg-black/8 hover:bg-black/15 text-black border border-black/20"}`}
            >
              View Portfolio
              <motion.span
                className="ml-2 inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className={`backdrop-blur-sm ${isDark ? "border-white/25 text-white hover:bg-white/10 hover:text-white" : "border-black/20 text-black hover:bg-black/8 hover:text-black"}`}
            >
              Get in Touch
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 mt-4"
        >
          {[
            { href: "https://github.com/zihao-jing",     icon: <Github    className="h-5 w-5" />, label: "GitHub",   external: true },
            { href: "https://x.com/zihao_jing",          icon: <Twitter   className="h-5 w-5" />, label: "Twitter/X", external: true },
            { href: "https://www.linkedin.com/in/zihao-jing-65b506323/", icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", external: true },
            { href: "mailto:zihaoj24@gmail.com",          icon: <Mail      className="h-5 w-5" />, label: "Email",    external: false },
            { href: "/CV.pdf",                             icon: <FileText      className="h-5 w-5" />, label: "CV",     external: true },
          ].map(({ href, icon, label, external }) => (
            <Link key={label} href={href} title={label} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
              <Button
                variant="ghost"
                size="icon"
                className={`rounded-full ${isDark ? "text-white/60 hover:text-white hover:bg-white/10" : "text-black/50 hover:text-black hover:bg-black/8"}`}
              >
                {icon}
                <span className="sr-only">{label}</span>
              </Button>
            </Link>
          ))}
        </motion.div>

        <ScrollIndicator isDark={isDark} onClick={snapToContent} />
      </div>
    </div>
  );
}
