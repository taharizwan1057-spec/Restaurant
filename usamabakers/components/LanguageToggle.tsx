"use client";

import { motion } from "framer-motion";
import { Languages } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang, dir } = useLang();
  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-full bg-brand-black/10 p-1 backdrop-blur",
        className,
      )}
    >
      <button
        onClick={() => setLang("en")}
        className={cn(
          "relative rounded-full px-3 py-1.5 text-xs font-bold transition-colors",
          lang === "en" ? "text-white" : "text-brand-black/70 hover:text-brand-black",
        )}
        aria-label="EN — Switch to English"
        aria-pressed={lang === "en"}
      >
        {lang === "en" && (
          <motion.span
            layoutId="lang-pill"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute inset-0 -z-0 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-deep"
          />
        )}
        <span className="relative z-10">EN</span>
      </button>
      <button
        onClick={() => setLang("ur")}
        className={cn(
          "relative rounded-full px-3 py-1.5 text-xs font-bold transition-colors",
          lang === "ur" ? "text-white" : "text-brand-black/70 hover:text-brand-black",
        )}
        aria-label="اردو — Switch to Urdu"
        aria-pressed={lang === "ur"}
        dir="rtl"
      >
        {lang === "ur" && (
          <motion.span
            layoutId="lang-pill"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute inset-0 -z-0 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-deep"
          />
        )}
        <span className="relative z-10">اردو</span>
      </button>
      <Languages className="mx-1 h-3.5 w-3.5 text-brand-black/40" aria-hidden />
    </div>
  );
}
