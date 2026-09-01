"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { categories, getItemsByCategory, getDealsByCategory } from "@/lib/menu-data";
import { cn } from "@/lib/utils";

export function CategoryGrid() {
  const { t, lang } = useLang();

  // Show first 8 (non-deal) categories on home grid
  const display = categories
    .filter((c) => !c.id.endsWith("-deals") && c.id !== "one-man-show" && c.id !== "couple-treats" && c.id !== "new-arrivals")
    .slice(0, 8);

  return (
    <section className="relative bg-brand-black py-20 text-white md:py-28">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 12px)",
        }}
        aria-hidden
      />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="mb-3 inline-block rounded-full bg-brand-orange/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange-light">
            {t.categories.title}
          </div>
          <h2 className="font-display text-4xl font-extrabold md:text-5xl">
            {t.categories.subtitle}
          </h2>
        </motion.div>

        <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {display.map((c, i) => {
            const count =
              getItemsByCategory(c.id).length + getDealsByCategory(c.id).length;
            const title = lang === "ur" ? c.titleUr : c.title;
            const desc = lang === "ur" ? c.descriptionUr : c.description;
            const isLarge = i === 0 || i === 5;

            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br",
                  c.color,
                  isLarge && "row-span-2",
                )}
              >
                {c.image && (
                  <Image
                    src={c.image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                )}
                <Link
                  href={`/menu?cat=${c.id}`}
                  className="absolute inset-0 z-10"
                  aria-label={title}
                />
                <div
                  className="absolute inset-0 bg-wood-pattern opacity-20 mix-blend-overlay"
                  aria-hidden
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                  aria-hidden
                />

                <div
                  className={cn(
                    "relative flex h-full flex-col justify-between p-5",
                    isLarge ? "min-h-[372px] justify-end" : "min-h-[180px]",
                  )}
                >
                  {!c.image && (
                    <div className="text-5xl drop-shadow-2xl transition-transform duration-300 group-hover:scale-110" aria-hidden>
                      {c.emoji}
                    </div>
                  )}
                  <div>
                    <div className="font-display text-xl font-extrabold md:text-2xl">
                      {title}
                    </div>
                    <div className="text-xs text-white/80 md:text-sm">{desc}</div>
                    <div className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-white/90">
                      {count} items <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>

                {/* Hover glow */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2), transparent 60%)",
                  }}
                  aria-hidden
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
