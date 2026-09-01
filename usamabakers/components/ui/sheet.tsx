"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SheetProps {
  open: boolean;
  onClose: () => void;
  side?: "right" | "left" | "bottom";
  children: ReactNode;
  className?: string;
  title?: string;
}

export function Sheet({
  open,
  onClose,
  side = "right",
  children,
  className,
  title,
}: SheetProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const sideClass =
    side === "right"
      ? "right-0 top-0 h-full w-full sm:max-w-md"
      : side === "left"
      ? "left-0 top-0 h-full w-full sm:max-w-md"
      : "bottom-0 left-0 right-0 max-h-[90vh]";

  const initialPos =
    side === "right" ? { x: "100%" } : side === "left" ? { x: "-100%" } : { y: "100%" };
  const animatePos = { x: 0, y: 0 };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            key="panel"
            initial={initialPos}
            animate={animatePos}
            exit={initialPos}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={cn(
              "fixed z-[101] bg-white shadow-2xl",
              sideClass,
              className,
            )}
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            {title && (
              <div className="flex items-center justify-between border-b border-brand-cream px-5 py-4">
                <h2 className="font-display text-xl font-bold text-brand-black">{title}</h2>
                <button
                  onClick={onClose}
                  className="rounded-full p-2 text-brand-black/60 hover:bg-brand-cream hover:text-brand-black"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            )}
            <div className="h-full overflow-y-auto pb-20">{children}</div>
            {!title && (
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 text-brand-black/70 hover:bg-white"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
