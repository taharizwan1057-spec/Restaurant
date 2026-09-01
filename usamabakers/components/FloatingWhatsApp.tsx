"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang-context";
import { DEFAULT_GREETING, waLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function FloatingWhatsApp() {
  const { t } = useLang();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <motion.a
      href={waLink(DEFAULT_GREETING)}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
      style={{ opacity: mounted ? undefined : 0 }}
      className="group fixed bottom-6 z-50 inline-flex items-center justify-center"
      aria-label={t.float.waTooltip}
      dir="ltr"
    >
      <motion.div
        style={{ opacity }}
        className="absolute -top-10 right-0 whitespace-nowrap rounded-full bg-brand-black px-3 py-1 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100"
      >
        {t.float.waTooltip}
      </motion.div>
      <span
        aria-hidden
        className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-50"
      />
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 blur-xl"
      />
      <span
        className={cn(
          "relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 transition-transform group-hover:scale-110",
        )}
      >
        <MessageCircle className="h-7 w-7" />
      </span>
    </motion.a>
  );
}
