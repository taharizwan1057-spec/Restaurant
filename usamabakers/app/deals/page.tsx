"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/lang-context";
import { DealCard } from "@/components/cards/DealCard";
import { categories, getDealsByCategory } from "@/lib/menu-data";
import { ScrollReveal } from "@/components/ui/gradient-text";

/** Categories that have deals (everything except `new-arrivals`, which has no deals yet). */
const dealSections = categories
  .filter((c) =>
    (
      [
        "birthday-deals",
        "family-deals",
        "one-man-show",
        "couple-treats",
      ] as const
    ).includes(c.id as any),
  )
  .map((c) => ({ id: c.id, title: c.title, titleUr: c.titleUr, emoji: c.emoji }));

export default function DealsPage() {
  const { t, lang } = useLang();

  return (
    <div className="pt-24 md:pt-28">
      {/* Hero header */}
      <section className="relative overflow-hidden bg-brand-black py-16 text-white md:py-24">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 24px)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-brand-orange/30 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-brand-orange-deep/30 blur-3xl"
          aria-hidden
        />
        <div className="container relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-block rounded-full bg-brand-orange/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange-light"
          >
            {t.deals.title}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl font-extrabold md:text-6xl"
          >
            <span className="text-gradient-orange">{t.deals.subtitle}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-white/70"
          >
            {t.deals.description}
          </motion.p>
        </div>
      </section>

      {/* Anchor jump bar — lets people jump between deal categories. */}
      <nav
        aria-label="Deal categories"
        className="sticky top-20 z-20 border-b border-brand-cream bg-white/90 backdrop-blur"
      >
        <div className="container">
          <div className="scrollbar-none -mx-1 flex flex-nowrap items-center gap-2 overflow-x-auto py-4">
            {dealSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-brand-cream bg-white px-4 py-1.5 text-xs font-semibold text-brand-black/70 shadow-sm transition-colors hover:border-brand-orange/40 hover:bg-brand-orange/10 hover:text-brand-orange-deep"
              >
                {section.emoji && <span aria-hidden>{section.emoji}</span>}
                {lang === "ur" ? section.titleUr : section.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Each deal group */}
      {dealSections.map((section) => {
        const list = getDealsByCategory(section.id);
        if (list.length === 0) return null;
        const sectionTitle = lang === "ur" ? section.titleUr : section.title;
        return (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-32 bg-white py-16 md:py-20"
          >
            <div className="container">
              <ScrollReveal>
                <div className="mb-8 flex items-end justify-between gap-4">
                  <div>
                    <div className="mb-2 text-3xl">{section.emoji}</div>
                    <h2 className="font-display text-3xl font-extrabold text-brand-black md:text-4xl">
                      {sectionTitle}
                    </h2>
                    <p className="mt-1 text-brand-black/60">
                      {list.length} {lang === "ur" ? "ڈیلز دستیاب" : "deals available"}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((deal, i) => (
                  <DealCard key={deal.id} deal={deal} index={i} />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
