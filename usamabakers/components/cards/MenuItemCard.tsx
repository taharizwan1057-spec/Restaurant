"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plus, Check, MessageCircle, Star } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { useLang } from "@/lib/lang-context";
import { singleItemMessage, waLink } from "@/lib/whatsapp";
import type { MenuItem } from "@/lib/menu-data";
import { cn, formatPKR } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface MenuItemCardProps {
  item: MenuItem;
  index?: number;
}

export function MenuItemCard({ item, index = 0 }: MenuItemCardProps) {
  const { t, lang } = useLang();
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<string | undefined>(
    item.variants?.[0]?.label,
  );

  const variant = item.variants?.find((v) => v.label === selectedVariant) ?? item.variants?.[0];
  const price = variant?.price ?? item.price;
  const note = variant?.label;

  const name = lang === "ur" && item.nameUr ? item.nameUr : item.name;

  const handleAdd = () => {
    add({ itemId: item.id, kind: "item", name, qty: 1, price, image: item.image, note });
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  const waMsg = singleItemMessage(name, 1, note);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.3) }}
      whileHover={{ y: -4 }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-cream bg-white shadow-sm transition-shadow hover:shadow-card-lift",
      )}
    >
      {item.popular && (
        <div className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full bg-brand-black/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-orange-light backdrop-blur">
          <Star className="h-3 w-3 fill-current" /> Popular
        </div>
      )}

      {/* Image area — real photo with emoji/gradient fallback */}
      <div
        className={cn(
          "relative aspect-[4/3] overflow-hidden bg-gradient-to-br",
          getItemGradient(item.category),
        )}
      >
        {item.image ? (
          <Image
            src={item.image}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-wood-pattern opacity-20 mix-blend-overlay" />
            <div
              className="absolute inset-0 grid place-items-center text-7xl drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
              aria-hidden
            >
              {getEmoji(item.category)}
            </div>
          </>
        )}
        <div
          className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent"
          aria-hidden
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-1 font-display text-base font-bold leading-tight text-brand-black">
          {name}
        </h3>
        {item.variants && item.variants.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-1">
            {item.variants.map((v) => (
              <button
                key={v.label}
                onClick={() => setSelectedVariant(v.label)}
                className={cn(
                  "rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider transition-colors",
                  selectedVariant === v.label
                    ? "bg-brand-orange text-white"
                    : "bg-brand-cream text-brand-black/60 hover:bg-brand-orange/15 hover:text-brand-orange",
                )}
              >
                {v.label}
              </button>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between gap-2 pt-3">
          <div className="font-display text-lg font-extrabold text-brand-orange">
            {formatPKR(price)}
          </div>
          <div className="flex gap-1">
            <motion.a
              whileTap={{ scale: 0.92 }}
              href={waLink(waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-9 w-9 place-items-center rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white"
              aria-label={t.menu.orderWa}
            >
              <MessageCircle className="h-4 w-4" />
            </motion.a>
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={handleAdd}
              className={cn(
                "grid h-9 w-9 place-items-center rounded-full text-white transition-colors",
                added ? "bg-green-500" : "bg-gradient-to-br from-brand-orange to-brand-orange-deep",
              )}
              aria-label={t.menu.add}
            >
              {added ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function getEmoji(category: string): string {
  const map: Record<string, string> = {
    "premium-cakes": "🍰",
    burgers: "🍔",
    wraps: "🌯",
    "prime-pizzas": "🍕",
    "favourite-pizzas": "🍕",
    beverages: "🥤",
    sides: "🍟",
    desserts: "🍮",
    "bakery-snacks": "🥪",
  };
  return map[category] ?? "🍽️";
}

function getItemGradient(category: string): string {
  const map: Record<string, string> = {
    "premium-cakes": "from-pink-200 via-rose-200 to-pink-100",
    burgers: "from-amber-200 via-yellow-200 to-orange-200",
    wraps: "from-orange-200 via-amber-200 to-yellow-100",
    "prime-pizzas": "from-red-200 via-orange-200 to-amber-200",
    "favourite-pizzas": "from-red-300 via-pink-200 to-red-200",
    beverages: "from-cyan-200 via-blue-200 to-indigo-200",
    sides: "from-yellow-200 via-amber-200 to-orange-200",
    desserts: "from-pink-200 via-fuchsia-200 to-rose-200",
    "bakery-snacks": "from-amber-200 via-yellow-200 to-amber-100",
  };
  return map[category] ?? "from-orange-200 to-amber-100";
}
