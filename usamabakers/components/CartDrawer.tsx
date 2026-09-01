"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { useLang } from "@/lib/lang-context";
import { formatPKR } from "@/lib/utils";
import { Sheet } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function CartDrawer() {
  const { isOpen, close, lines, total, count, update, remove, clear, checkoutUrl } =
    useCart();
  const { t } = useLang();

  return (
    <Sheet open={isOpen} onClose={close} title={t.cart.title}>
      <div className="flex h-full flex-col">
        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <div className="grid h-20 w-20 place-items-center rounded-full bg-brand-orange/10">
              <ShoppingBag className="h-10 w-10 text-brand-orange" />
            </div>
            <p className="font-display text-lg font-bold">{t.cart.empty}</p>
            <p className="text-sm text-brand-black/60">{t.cart.emptyHint}</p>
            <Button onClick={close} variant="primary" className="mt-4">
              {t.common.viewAll}
            </Button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-brand-cream">
              <AnimatePresence initial={false}>
                {lines.map((l) => (
                  <motion.li
                    key={l.id}
                    layout
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center gap-3 p-5"
                  >
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-brand-orange/20 to-brand-orange-deep/20">
                      {l.image ? (
                        <Image
                          src={l.image}
                          alt={l.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="grid h-full w-full place-items-center text-2xl" aria-hidden>
                          🍽️
                        </div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate font-bold text-brand-black">{l.name}</div>
                      {l.note && (
                        <div className="text-xs text-brand-black/50">{l.note}</div>
                      )}
                      <div className="text-sm text-brand-orange">
                        {formatPKR(l.price)} ·{" "}
                        <span className="text-brand-black/60">
                          {formatPKR(l.qty * l.price)}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 rounded-full bg-brand-cream p-1">
                      <button
                        onClick={() => update(l.id, l.qty - 1)}
                        className="grid h-7 w-7 place-items-center rounded-full text-brand-black hover:bg-white"
                        aria-label="Decrease"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-6 text-center text-sm font-bold tabular-nums">
                        {l.qty}
                      </span>
                      <button
                        onClick={() => update(l.id, l.qty + 1)}
                        className="grid h-7 w-7 place-items-center rounded-full bg-brand-orange text-white hover:bg-brand-orange-deep"
                        aria-label="Increase"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <button
                      onClick={() => remove(l.id)}
                      className="grid h-8 w-8 place-items-center rounded-full text-brand-black/40 hover:bg-red-50 hover:text-red-500"
                      aria-label={t.cart.remove}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>

            <div className="sticky bottom-0 border-t border-brand-cream bg-white p-5 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
              <div className="mb-3 flex items-center justify-between text-sm">
                <span className="text-brand-black/60">
                  {t.cart.total} ({count} {t.cart.qty})
                </span>
                <span className="font-display text-2xl font-extrabold text-brand-black">
                  {formatPKR(total)}
                </span>
              </div>
              <Button
                asChild
                variant="whatsapp"
                size="lg"
                className="w-full"
                onClick={() => {
                  window.open(checkoutUrl(), "_blank", "noopener,noreferrer");
                }}
              >
                <a href={checkoutUrl()} target="_blank" rel="noopener noreferrer">
                  {t.cart.checkout}
                </a>
              </Button>
              <button
                onClick={clear}
                className="mt-3 block w-full text-center text-xs text-brand-black/50 hover:text-red-500"
              >
                {t.cart.clear}
              </button>
            </div>
          </>
        )}
      </div>
    </Sheet>
  );
}
