"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, MessageCircle, Plus, Sparkles, Star } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { useLang } from "@/lib/lang-context";
import { dealMessage, waLink } from "@/lib/whatsapp";
import type { Deal } from "@/lib/menu-data";
import { cn, formatPKR } from "@/lib/utils";

interface DealCardProps {
  deal: Deal;
  index?: number;
  variant?: "default" | "compact" | "marquee";
}

export function DealCard({ deal, index = 0, variant = "default" }: DealCardProps) {
  const { t, lang } = useLang();
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const title = lang === "ur" && deal.titleUr ? deal.titleUr : deal.title;
  const waMsg = dealMessage(title, deal.price);

  const handleAdd = () => {
    add({ itemId: deal.id, kind: "deal", name: title, qty: 1, price: deal.price, image: deal.image });
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  const savings = deal.originalPrice ? deal.originalPrice - deal.price : 0;
  const savingsPct = deal.originalPrice
    ? Math.round((savings / deal.originalPrice) * 100)
    : 0;

  if (variant === "marquee") {
    return (
      <div className="group relative mx-3 inline-block w-[320px] shrink-0 overflow-hidden rounded-2xl border border-brand-cream bg-white shadow-sm transition-shadow hover:shadow-card-lift">
        <div className="relative h-32 overflow-hidden bg-gradient-to-br from-brand-orange via-brand-orange-light to-brand-orange-deep">
          {deal.image ? (
            <Image
              src={deal.image}
              alt={title}
              fill
              sizes="320px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-wood-pattern opacity-30 mix-blend-overlay" />
              <div className="absolute inset-0 grid place-items-center text-6xl" aria-hidden>
                🎉
              </div>
            </>
          )}
          {deal.tag && (
            <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-brand-black/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">
              <Sparkles className="h-3 w-3" /> {deal.tag}
            </div>
          )}
          {savings > 0 && (
            <div className="absolute right-3 top-3 rounded-full bg-white px-2.5 py-1 text-[10px] font-extrabold text-brand-orange-deep">
              SAVE {savingsPct}%
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="mb-2 font-display text-base font-bold">{title}</h3>
          <ul className="mb-3 space-y-1 text-xs text-brand-black/70">
            {deal.items.slice(0, 3).map((it, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <Check className="mt-0.5 h-3 w-3 shrink-0 text-brand-orange" /> <span>{it}</span>
              </li>
            ))}
            {deal.items.length > 3 && (
              <li className="text-brand-black/50">+{deal.items.length - 3} more</li>
            )}
          </ul>
          <div className="flex items-center justify-between">
            <div>
              {deal.originalPrice && (
                <div className="text-xs text-brand-black/40 line-through">
                  {formatPKR(deal.originalPrice)}
                </div>
              )}
              <div className="font-display text-lg font-extrabold text-brand-orange">
                {formatPKR(deal.price)}
              </div>
            </div>
            <button
              onClick={handleAdd}
              className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand-orange to-brand-orange-deep text-white hover:scale-105"
              aria-label="Add"
            >
              {added ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.4) }}
      whileHover={{ y: -6 }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-brand-cream bg-white shadow-md transition-shadow hover:shadow-card-lift",
      )}
    >
      {/* Top image / fallback banner */}
      <div className="relative h-40 overflow-hidden bg-gradient-to-br from-brand-orange via-brand-orange-light to-brand-orange-deep">
        {deal.image ? (
          <Image
            src={deal.image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-wood-pattern opacity-40 mix-blend-overlay" />
            <div className="absolute inset-0 grid place-items-center text-7xl drop-shadow-2xl" aria-hidden>
              {deal.category === "birthday-deals" ? "🎂" : deal.category === "couple-treats" ? "💕" : deal.category === "one-man-show" ? "🍔" : "👨‍👩‍👧‍👦"}
            </div>
          </>
        )}

        {deal.tag && (
          <div className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-brand-black/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">
            <Sparkles className="h-3 w-3" /> {deal.tag}
          </div>
        )}
        {savings > 0 && (
          <div className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-[11px] font-extrabold text-brand-orange-deep shadow-lg">
            SAVE {savingsPct}%
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-3 font-display text-xl font-extrabold leading-tight text-brand-black">
          {title}
        </h3>
        <ul className="mb-4 flex-1 space-y-1.5 text-sm text-brand-black/75">
          {deal.items.map((it, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" /> <span>{it}</span>
            </li>
          ))}
        </ul>

        <div className="mb-3 flex items-end justify-between">
          <div>
            {deal.originalPrice && (
              <div className="text-xs text-brand-black/40 line-through">
                {formatPKR(deal.originalPrice)}
              </div>
            )}
            <div className="font-display text-3xl font-extrabold text-brand-orange">
              {formatPKR(deal.price)}
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <motion.a
            whileTap={{ scale: 0.96 }}
            href={waLink(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] py-2.5 text-sm font-bold text-white transition-shadow hover:shadow-glow"
          >
            <MessageCircle className="h-4 w-4" /> {t.deals.orderBtn}
          </motion.a>
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={handleAdd}
            className={cn(
              "grid h-10 w-10 shrink-0 place-items-center rounded-full text-white transition-colors",
              added ? "bg-green-500" : "bg-gradient-to-br from-brand-orange to-brand-orange-deep",
            )}
            aria-label={t.menu.add}
          >
            {added ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
