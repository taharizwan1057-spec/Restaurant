"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { useLang } from "@/lib/lang-context";
import { waLink, DEFAULT_GREETING } from "@/lib/whatsapp";
import { categories } from "@/lib/menu-data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-gradient-to-br from-brand-cream via-brand-cream to-orange-50 pt-10 md:pt-16"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(242, 107, 31, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255, 138, 61, 0.2) 0%, transparent 50%)",
        }}
        aria-hidden
      />

      {/* Animated background lines (Magic UI inspired) */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.05]"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F26B1F" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <motion.div style={{ opacity }} className="container relative z-10 pb-20 md:pb-32">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-white/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange-deep backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5" />
              {t.hero.eyebrow}
            </motion.div>

            <h1 className="mb-6 font-display text-5xl font-extrabold leading-[1.05] text-brand-black md:text-6xl lg:text-7xl">
              {t.hero.headline.split(".").map((word, i, arr) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
                  className="inline-block"
                >
                  {word}
                  {i < arr.length - 1 ? " " : ""}
                </motion.span>
              ))}
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                className="ml-2 inline-block h-3 w-3 translate-y-1 rounded-full bg-brand-orange align-middle"
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-8 max-w-lg text-base text-brand-black/70 md:text-lg"
            >
              {t.hero.subhead}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Button asChild size="lg" variant="primary">
                <Link href="/menu">
                  {t.hero.ctaMenu} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="whatsapp">
                <a href={waLink(DEFAULT_GREETING)} target="_blank" rel="noopener noreferrer">
                  {t.hero.ctaOrder}
                </a>
              </Button>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-brand-black/60"
            >
              {[
                { icon: "✓", text: t.hero.trustHalal },
                { icon: "✓", text: t.hero.trustFresh },
                { icon: "✓", text: t.hero.trustDelivery },
              ].map((x) => (
                <div key={x.text} className="flex items-center gap-1.5">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-orange text-[10px] font-bold text-white">
                    {x.icon}
                  </span>
                  {x.text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual: floating food cards */}
          <div className="relative mx-auto h-[340px] w-full max-w-sm md:h-[420px] md:max-w-md">
            <motion.div
              style={{ y: y1, rotate }}
              whileHover={{ scale: 1.08, y: -8, rotate: 0 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={cn(
                "group absolute left-1/2 top-0 z-30 h-32 w-32 -ml-16 cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br from-pink-300 to-rose-400 shadow-2xl shadow-pink-500/30 md:-ml-[88px] md:h-44 md:w-44",
              )}
            >
              {categoryImage("prime-pizzas") && (
                <Image
                  src={categoryImage("prime-pizzas")!}
                  alt="Pizzas"
                  fill
                  sizes="(max-width: 768px) 128px, 176px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              )}
              {/* Bottom gradient for legibility + always-visible label */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 z-10 px-3 pb-3 pt-6 text-center">
                <span className="inline-block whitespace-nowrap rounded-full bg-brand-orange px-3 py-1 text-xs font-bold text-white shadow-lg shadow-brand-orange/40 transition-colors group-hover:bg-white group-hover:text-brand-black">
                  Pizzas
                </span>
              </div>
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              whileHover={{ scale: 1.08, y: -8 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={cn(
                "group absolute bottom-0 left-0 z-20 h-28 w-28 cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br from-amber-300 to-orange-400 shadow-2xl shadow-orange-500/30 md:h-40 md:w-40",
              )}
            >
              {categoryImage("burgers") && (
                <Image
                  src={categoryImage("burgers")!}
                  alt="Burgers"
                  fill
                  sizes="(max-width: 768px) 112px, 160px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              )}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 z-10 px-3 pb-3 pt-6 text-center">
                <span className="inline-block whitespace-nowrap rounded-full bg-brand-orange px-3 py-1 text-xs font-bold text-white shadow-lg shadow-brand-orange/40 transition-colors group-hover:bg-white group-hover:text-brand-black">
                  Burgers
                </span>
              </div>
            </motion.div>

            <motion.div
              style={{ y: y3 }}
              whileHover={{ scale: 1.08, y: -8 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={cn(
                "group absolute bottom-0 right-0 z-10 h-32 w-32 cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-300 to-amber-400 shadow-2xl shadow-yellow-500/30 md:h-44 md:w-44",
              )}
            >
              {categoryImage("premium-cakes") && (
                <Image
                  src={categoryImage("premium-cakes")!}
                  alt="Cakes"
                  fill
                  sizes="(max-width: 768px) 144px, 192px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              )}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 z-10 px-3 pb-3 pt-6 text-center">
                <span className="inline-block whitespace-nowrap rounded-full bg-brand-orange px-3 py-1 text-xs font-bold text-white shadow-lg shadow-brand-orange/40 transition-colors group-hover:bg-white group-hover:text-brand-black">
                  Cakes
                </span>
              </div>
            </motion.div>

            {/* Background blob */}
            <div
              className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand-orange/30 to-brand-orange-deep/30 blur-3xl md:h-64 md:w-64"
              aria-hidden
            />
          </div>
        </div>
      </motion.div>

      {/* Wave divider */}
      <div className="absolute inset-x-0 bottom-0 z-0">
        <svg viewBox="0 0 1440 80" className="block h-12 w-full md:h-20">
          <path
            fill="#0E0E0E"
            d="M0,32L120,26.7C240,21,480,11,720,16C960,21,1200,43,1320,53.3L1440,64L1440,80L1320,80C1200,80,960,80,720,80C480,80,240,80,120,80L0,80Z"
          />
        </svg>
      </div>
    </section>
  );
}

/** Look up a category's hero image by id (Pizzas / Burgers / Cakes). */
function categoryImage(id: string): string | undefined {
  return categories.find((c) => c.id === id)?.image;
}
