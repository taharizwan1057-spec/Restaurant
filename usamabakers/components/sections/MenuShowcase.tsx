"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useLang } from "@/lib/lang-context";
import { categories, getItemsByCategory, getDealsByCategory } from "@/lib/menu-data";
import { Tabs } from "@/components/ui/tabs";
import { MenuItemCard } from "@/components/cards/MenuItemCard";
import { DealCard } from "@/components/cards/DealCard";

export function MenuShowcase() {
  const { t, lang } = useLang();
  const search = useSearchParams();
  const initialCat = search.get("cat") ?? categories[0].id;
  const [active, setActive] = useState<string>(initialCat);

  useEffect(() => {
    const cat = search.get("cat");
    if (cat && categories.some((c) => c.id === cat)) setActive(cat);
  }, [search]);

  const items = useMemo(() => getItemsByCategory(active as any), [active]);
  // Birthday Deals live in deals[], not items[], so they need a separate lookup
  // to render the existing DealCard UI on the /menu Birthday Deals tab.
  const deals = useMemo(
    () => (active === "birthday-deals" ? getDealsByCategory("birthday-deals") : []),
    [active],
  );
  const currentCategory = categories.find((c) => c.id === active)!;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <div className="mb-3 inline-block rounded-full bg-brand-orange/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange-deep">
            {t.menu.title}
          </div>
          <h2 className="font-display text-4xl font-extrabold text-brand-black md:text-5xl">
            {lang === "ur" ? currentCategory.titleUr : currentCategory.title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-black/60">
            {t.menu.subtitle}
          </p>
        </motion.div>

        {/* Sticky tab bar */}
        <div className="sticky top-16 z-30 mb-8 -mx-4 bg-white/85 px-4 py-3 backdrop-blur md:top-20 md:mx-0 md:px-0">
          <Tabs
            tabs={categories.map((c) => ({ id: c.id, label: lang === "ur" ? c.titleUr : c.title, emoji: c.emoji }))}
            active={active}
            onChange={setActive}
            className="mx-auto max-w-5xl"
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={
              active === "birthday-deals"
                ? "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2"
                : "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            }
          >
            {active === "birthday-deals" ? (
              deals.map((d, i) => <DealCard key={d.id} deal={d} index={i} />)
            ) : items.length === 0 ? (
              <div className="col-span-full rounded-2xl border border-dashed border-brand-cream bg-brand-cream/40 p-12 text-center">
                <p className="text-brand-black/60">
                  {lang === "ur" ? "اس زمرے میں ابھی کوئی آئٹم نہیں" : "No items in this category yet."}
                </p>
              </div>
            ) : (
              items.map((item, i) => <MenuItemCard key={item.id} item={item} index={i} />)
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
