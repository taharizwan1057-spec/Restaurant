"use client";

import { motion } from "framer-motion";
import { Award, Clock, Flame, Heart, Leaf, Timer, Truck, Users } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { AnimatedCounter, ScrollReveal } from "@/components/ui/gradient-text";
import { ContactSection } from "@/components/sections/ContactSection";

const heroStats = [
  { Icon: Award, value: 50, suffix: "K+", key: "orders" },
  { Icon: Users, value: 12, suffix: "K+", key: "customers" },
  { Icon: Heart, value: 80, suffix: "+", key: "items" },
  { Icon: Clock, value: 5, suffix: "+", key: "years" },
] as const;

const valueIcons = {
  fresh: Flame,
  halal: Leaf,
  family: Heart,
  fast: Truck,
} as const;

export default function AboutPage() {
  const { t, lang, dir } = useLang();
  const a = t.about.page;

  return (
    <div className="pt-24 md:pt-28">
      {/* Hero header */}
      <section className="relative overflow-hidden bg-brand-black py-20 text-white md:py-28">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 24px)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand-orange/30 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-brand-orange-deep/30 blur-3xl"
          aria-hidden
        />
        <div className="container relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-block rounded-full bg-brand-orange/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange-light"
          >
            {t.about.title}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl font-extrabold md:text-6xl"
          >
            <span className="text-gradient-orange">{a.sub}</span>
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="bg-gradient-to-br from-brand-cream via-orange-50 to-brand-cream py-20 md:py-28">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
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
                    <div className="text-sm text-white/80">
                      {lang === "ur" ? "محبت سے پکایا" : "Baked with ❤️"}
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-6 top-10 rounded-2xl bg-white px-4 py-3 shadow-xl"
                >
                  <div className="text-xs text-brand-black/60">
                    {lang === "ur" ? "بنایا گیا" : "Made with"}
                  </div>
                  <div className="font-display font-extrabold text-brand-orange">
                    {lang === "ur" ? "100% حلال" : "100% Halal"}
                  </div>
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

            <div>
              <ScrollReveal delay={0.1}>
                <div className="mb-3 inline-block rounded-full bg-brand-orange/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange-deep">
                  {a.title}
                </div>
                <h2 className="mb-6 font-display text-4xl font-extrabold leading-tight text-brand-black md:text-5xl">
                  {t.about.headline}
                </h2>
              </ScrollReveal>

              <div className={`space-y-4 text-brand-black/75 ${dir === "rtl" ? "text-lg leading-loose" : "text-base md:text-lg"}`}>
                <ScrollReveal delay={0.15}>
                  <p>{a.p1}</p>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <p>{a.p2}</p>
                </ScrollReveal>
                <ScrollReveal delay={0.25}>
                  <p>{a.p3}</p>
                </ScrollReveal>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
            {heroStats.map((s, i) => (
              <ScrollReveal key={s.key} delay={0.2 + i * 0.1}>
                <div className="rounded-2xl border border-brand-cream bg-white/70 p-5 text-center shadow-sm backdrop-blur">
                  <div className="mx-auto mb-2 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-orange to-brand-orange-deep text-white">
                    <s.Icon className="h-6 w-6" />
                  </div>
                  <div className="font-display text-3xl font-extrabold text-brand-black">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-brand-black/60">
                    {t.about.stats[s.key]}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 md:py-28">
        <div className="container">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <div className="mb-3 inline-block rounded-full bg-brand-orange/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange-deep">
                {a.valuesTitle}
              </div>
              <h2 className="font-display text-4xl font-extrabold text-brand-black md:text-5xl">
                {lang === "ur" ? "ہمارے اصول" : "Why choose us"}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {(
              Object.keys(a.values) as Array<keyof typeof a.values>
            ).map((key, i) => {
              const v = a.values[key];
              const Icon = valueIcons[key];
              return (
                <ScrollReveal key={key} delay={0.1 + i * 0.08}>
                  <div className="group h-full rounded-3xl border border-brand-cream bg-gradient-to-br from-brand-cream to-white p-6 transition-all hover:-translate-y-1 hover:border-brand-orange/30 hover:shadow-card-lift">
                    <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-orange to-brand-orange-deep text-white transition-transform group-hover:scale-110">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-2 font-display text-xl font-extrabold text-brand-black">
                      {v.title}
                    </h3>
                    <p className="text-sm text-brand-black/70">{v.text}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
