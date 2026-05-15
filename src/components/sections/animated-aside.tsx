"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { ProfileCard } from "./profile-card";

export function AnimatedAside() {
  return (
    <motion.aside
      className="hidden lg:block w-52 flex-shrink-0"
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="sticky top-24 flex flex-col gap-3">
        <div className="border rounded-xl p-5 bg-card shadow-sm">
          <ProfileCard />
        </div>
        <div className="border rounded-xl p-4 bg-card shadow-sm flex items-center gap-2.5">
          <GraduationCap className="h-4 w-4 text-muted-foreground flex-shrink-0" />
          <p className="text-xs text-muted-foreground">Graduating in June 2026</p>
        </div>
      </div>
    </motion.aside>
  );
}
