"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TabsProps {
  tabs: Array<{ id: string; label: string; emoji?: string }>;
  active: string;
  onChange: (id: string) => void;
  className?: string;
}

export function Tabs({ tabs, active, onChange, className }: TabsProps) {
  return (
    <div
      className={cn(
        "relative flex w-full gap-1 overflow-x-auto rounded-2xl border border-brand-cream bg-white p-1 shadow-sm scrollbar-none",
        className,
      )}
    >
      {tabs.map((t) => {
        const isActive = t.id === active;
        return (
          <button
            key={t.id}
            onClick={() => onChange(t.id)}
            className={cn(
              "relative z-10 flex shrink-0 items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors",
              isActive
                ? "text-white"
                : "text-brand-black/60 hover:text-brand-black",
            )}
          >
            {isActive && (
              <motion.span
                layoutId="tab-pill"
                className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-brand-orange to-brand-orange-deep shadow-md"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            {t.emoji && <span aria-hidden>{t.emoji}</span>}
            <span>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}

interface TabPanelProps {
  active: boolean;
  children: ReactNode;
}

export function TabPanel({ active, children }: TabPanelProps) {
  if (!active) return null;
  return <div>{children}</div>;
}
