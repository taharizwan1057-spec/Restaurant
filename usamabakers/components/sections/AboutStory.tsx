"use client";

import { motion } from "framer-motion";
import { Award, Clock, Heart, Users } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { AnimatedCounter, ScrollReveal } from "@/components/ui/gradient-text";

const stats = [
  { Icon: Award, value: 50, suffix: "K+", key: "orders" },
  { Icon: Users, value: 12, suffix: "K+", key: "customers" },
  { Icon: Heart, value: 80, suffix: "+", key: "items" },
  { Icon: Clock, value: 5, suffix: "+", key: "years" },
] as const;

export function AboutStory() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-orange-50 to-brand-cream py-20 md:py-28">
      <div
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-brand-orange/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-brand-orange-deep/20 blur-3xl"
        aria-hidden
      />

      <div className="container relative">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Visual */}
          <ScrollReveal>
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <motion.div
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-orange via-brand-orange-light to-brand-orange-deep shadow-2xl shadow-brand-orange/30"
              />
              <div className="absolute inset-3 rounded-3xl bg-wood-pattern opacity-30 mix-blend-overlay" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center text-white">
                  <div className="mb-3 text-9xl drop-shadow-2xl" aria-hidden>
                    👨‍🍳
                  </div>
                  <div className="font-display text-2xl font-extrabold">Since 2019</div>
                  <div className="text-sm text-white/80">Baked with ❤️</div>
                </div>
              </div>

              {/* Floating chips */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 top-10 rounded-2xl bg-white px-4 py-3 shadow-xl"
              >
                <div className="text-xs text-brand-black/60">Made with</div>
                <div className="font-display font-extrabold text-brand-orange">100% Halal</div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 bottom-12 rounded-2xl bg-white px-4 py-3 shadow-xl"
              >
                <div className="text-xs text-brand-black/60">Rated</div>
                <div className="font-display font-extrabold text-brand-orange">⭐ 4.8/5</div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Copy */}
          <div>
            <ScrollReveal delay={0.1}>
              <div className="mb-3 inline-block rounded-full bg-brand-orange/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange-deep">
                {t.about.title}
              </div>
              <h2 className="mb-6 font-display text-4xl font-extrabold leading-tight text-brand-black md:text-5xl">
                {t.about.headline}
              </h2>
              <p className="mb-8 text-base text-brand-black/70 md:text-lg">{t.about.body}</p>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((s, i) => (
                <ScrollReveal key={s.key} delay={0.2 + i * 0.1}>
                  <div className="rounded-2xl border border-brand-cream bg-white/70 p-4 text-center shadow-sm backdrop-blur">
                    <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-orange to-brand-orange-deep text-white">
                      <s.Icon className="h-5 w-5" />
                    </div>
                    <div className="font-display text-2xl font-extrabold text-brand-black">
                      <AnimatedCounter value={s.value} suffix={s.suffix} />
                    </div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-brand-black/60">
                      {t.about.stats[s.key]}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
