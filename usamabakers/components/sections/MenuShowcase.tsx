"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/lang-context";
import { categories, getItemsByCategory, getDealsByCategory } from "@/lib/menu-data";
import { MenuItemCard } from "@/components/cards/MenuItemCard";
import { DealCard } from "@/components/cards/DealCard";

export function MenuShowcase() {
  const { t, lang } = useLang();
  const search = useSearchParams();
  const initialCat = search.get("cat") ?? null;

  // Pre-build all category payloads so we can render every section in one pass.
  const sections = useMemo(
    () =>
      categories.map((c) => ({
        category: c,
        items: c.id === "birthday-deals" ? [] : getItemsByCategory(c.id as any),
        deals: c.id === "birthday-deals" ? getDealsByCategory("birthday-deals") : [],
      })),
    [],
  );

  // If the URL has ?cat=… (e.g. coming from a category tile), scroll to that
  // section after mount instead of hiding the others.
  const initialRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!initialCat) return;
    const el = document.getElementById(`cat-${initialCat}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [initialCat]);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center md:mb-14"
        >
          <div className="mb-3 inline-block rounded-full bg-brand-orange/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange-deep">
            {t.menu.title}
          </div>
          <h2 className="font-display text-4xl font-extrabold text-brand-black md:text-5xl">
            {lang === "ur" ? "ہمارا مکمل مینو" : "Our Full Menu"}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-black/60">
            {t.menu.subtitle}
          </p>
        </motion.div>

        {/* Anchor jump bar — small, no slider. Lets people jump between sections. */}
        <nav
          aria-label="Menu categories"
          className="mb-10 flex flex-wrap justify-center gap-2 md:mb-14"
        >
          {sections.map(({ category }) => (
            <a
              key={`anchor-${category.id}`}
              href={`#cat-${category.id}`}
              className="rounded-full border border-brand-cream bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-black/70 shadow-sm transition-colors hover:border-brand-orange/40 hover:bg-brand-orange/10 hover:text-brand-orange-deep"
            >
              {category.emoji && <span className="mr-1.5" aria-hidden>{category.emoji}</span>}
              {lang === "ur" ? category.titleUr : category.title}
            </a>
          ))}
        </nav>

        {/* Every category, stacked. No tabs, no slider — everything visible. */}
        <div className="space-y-16 md:space-y-20">
          {sections.map(({ category, items, deals }) => (
            <CategorySection
              key={category.id}
              id={`cat-${category.id}`}
              title={lang === "ur" ? category.titleUr : category.title}
              description={
                lang === "ur" ? category.descriptionUr : category.description
              }
              emoji={category.emoji}
              color={category.color}
              image={category.image}
              isBirthday={category.id === "birthday-deals"}
              items={items}
              deals={deals}
              registerRef={
                initialCat && category.id === initialCat
                  ? initialRef
                  : undefined
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategorySection({
  id,
  title,
  description,
  emoji,
  color,
  image,
  isBirthday,
  items,
  deals,
  registerRef,
}: {
  id: string;
  title: string;
  description?: string;
  emoji?: string;
  color?: string;
  image?: string;
  isBirthday: boolean;
  items: ReturnType<typeof getItemsByCategory>;
  deals: ReturnType<typeof getDealsByCategory>;
  registerRef?: React.MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      id={id}
      ref={registerRef as any}
      className="scroll-mt-24 md:scroll-mt-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.35 }}
        className="mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between md:mb-8"
      >
        <div className="flex items-center gap-3">
          {image ? (
            <div
              className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br ${
                color ?? "from-brand-orange to-brand-orange-deep"
              } shadow-md md:h-14 md:w-14`}
            >
              <Image
                src={image}
                alt={title}
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
          ) : emoji ? (
            <div
              className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${
                color ?? "from-brand-orange to-brand-orange-deep"
              } text-2xl shadow-md md:h-14 md:w-14`}
              aria-hidden
            >
              {emoji}
            </div>
          ) : null}
          <div>
            <h3 className="font-display text-2xl font-extrabold text-brand-black md:text-3xl">
              {title}
            </h3>
            {description && (
              <p className="mt-0.5 text-sm text-brand-black/60 md:text-base">
                {description}
              </p>
            )}
          </div>
        </div>
        {isBirthday && (
          <span className="rounded-full bg-pink-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-pink-600">
            Featured
          </span>
        )}
      </motion.div>

      {isBirthday ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {deals.map((d, i) => (
            <DealCard key={d.id} deal={d} index={i} />
          ))}
        </div>
      ) : items.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-brand-cream bg-brand-cream/40 p-10 text-center">
          <p className="text-brand-black/60">No items in this category yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item, i) => (
            <MenuItemCard key={item.id} item={item} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
