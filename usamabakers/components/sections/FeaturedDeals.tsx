"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { getFeaturedDeals } from "@/lib/menu-data";
import { DealCard } from "@/components/cards/DealCard";

export function FeaturedDeals() {
  const { t } = useLang();
  const featured = getFeaturedDeals();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-orange-50 to-brand-cream py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <div className="mb-3 inline-block rounded-full bg-brand-orange/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange-deep">
              {t.deals.title}
            </div>
            <h2 className="font-display text-4xl font-extrabold text-brand-black md:text-5xl">
              {t.deals.subtitle}
            </h2>
          </div>
          <Link
            href="/deals"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-black px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-orange"
          >
            {t.common.viewAll}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-brand-cream to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-brand-cream to-transparent"
          aria-hidden
        />
        <div className="flex w-max animate-scroll-x">
          {[...featured, ...featured].map((deal, i) => (
            <DealCard key={`${deal.id}-${i}`} deal={deal} variant="marquee" />
          ))}
        </div>
      </div>
    </section>
  );
}
