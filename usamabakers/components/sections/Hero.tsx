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

          {/* Visual: balanced photo cluster.
             All three cards are the same size (h-36/h-52).
             Composition: a deliberate triangular cluster, not a literal triangle.
             Pizzas (apex) is the focal point and slightly forward in z.
             Burgers (lower-left) and Cakes (lower-right) sit on the same baseline,
             equidistant from the centre, with a measured gap to the apex card. */}
          <div className="relative mx-auto aspect-square w-full max-w-md">
            {/* Soft brand glow behind the cluster — adds depth without dominating. */}
            <div
              className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand-orange/25 to-brand-orange-deep/25 blur-3xl md:h-80 md:w-80"
              aria-hidden
            />

            <PhotoCard
              imageId="burgers"
              alt="Burgers"
              label="Burgers"
              href="/menu?cat=burgers"
              className="absolute bottom-[8%] left-[2%] z-20"
              y={y2}
              accent="from-amber-400 to-orange-500"
            />

            <PhotoCard
              imageId="premium-cakes"
              alt="Cakes"
              label="Cakes"
              href="/menu?cat=premium-cakes"
              className="absolute bottom-[8%] right-[2%] z-10"
              y={y3}
              accent="from-pink-400 to-rose-500"
            />

            <PhotoCard
              imageId="prime-pizzas"
              alt="Pizzas"
              label="Pizzas"
              href="/menu?cat=prime-pizzas"
              className="absolute left-1/2 top-[6%] z-30 -ml-[72px] md:-ml-[104px]"
              y={y1}
              rotate={rotate}
              focal
              accent="from-red-500 to-orange-500"
            />

            {/* Decorative sparkle dots — small, off-axis, draw the eye through the cluster. */}
            <span
              aria-hidden
              className="absolute right-[14%] top-[14%] h-2 w-2 rounded-full bg-brand-orange/70 shadow-[0_0_12px_rgba(242,107,31,0.6)] md:h-2.5 md:w-2.5"
            />
            <span
              aria-hidden
              className="absolute left-[12%] top-[44%] h-1.5 w-1.5 rounded-full bg-brand-orange-deep/50 md:h-2 md:w-2"
            />
            <span
              aria-hidden
              className="absolute bottom-[18%] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-brand-orange/40 md:h-2 md:w-2"
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

/**
 * A floating, linkable photo card used in the hero cluster.
 * All three cards are rendered at the same dimensions (`h-36 md:h-52`, square)
 * so the cluster reads as a coherent composition rather than three competing shapes.
 *
 * Visual treatment:
 * - White ring + soft amber shadow (the same shadow on every card) for a unified look
 *   instead of a coloured gradient behind each photo.
 * - Always-visible label pill at the bottom so the card communicates its category
 *   even on first paint or with reduced motion.
 * - `focal` adds a slightly larger ring and a soft brand-coloured glow, marking the
 *   apex card as the visual anchor without changing its size.
 */
function PhotoCard({
  imageId,
  alt,
  label,
  href,
  className,
  y,
  rotate,
  focal = false,
  accent,
}: {
  imageId: string;
  alt: string;
  label: string;
  href: string;
  className?: string;
  y: ReturnType<typeof useTransform<number, number>>;
  rotate?: ReturnType<typeof useTransform<number, number>>;
  focal?: boolean;
  accent: string;
}) {
  const src = categoryImage(imageId);
  // Same on every card: 144px (mobile) / 208px (md+). 144 is the actual mobile card
  // width and 208 is the actual md card width — sizes must match what's rendered.
  const sizes = "(max-width: 768px) 144px, 208px";

  return (
    <motion.div
      style={rotate ? { y, rotate } : { y }}
      whileHover={{ scale: 1.06, y: -10 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn("group", className)}
    >
      <Link
        href={href}
        aria-label={label}
        className={cn(
          "relative block h-36 w-36 overflow-hidden rounded-[1.75rem] ring-2 ring-white md:h-52 md:w-52",
          "shadow-[0_18px_40px_-12px_rgba(242,107,31,0.45),0_8px_20px_-8px_rgba(0,0,0,0.25)]",
          focal &&
            "ring-4 shadow-[0_24px_50px_-12px_rgba(242,107,31,0.6),0_12px_24px_-10px_rgba(0,0,0,0.3)]",
        )}
      >
        {src && (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            priority={focal}
          />
        )}

        {/* Bottom gradient for legibility of the label on any photo. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
        />

        {/* Always-visible label pill — same shape & size on every card. */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center px-3 pb-3 pt-6">
          <span
            className={cn(
              "inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-gradient-to-r px-3.5 py-1 text-xs font-bold text-white shadow-md",
              "transition-colors group-hover:from-white group-hover:to-white group-hover:text-brand-black",
              accent,
            )}
          >
            {label}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
