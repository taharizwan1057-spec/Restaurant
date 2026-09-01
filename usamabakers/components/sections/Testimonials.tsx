"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useLang } from "@/lib/lang-context";

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Verified Customer",
    rating: 5,
    text: "The Smoky Bonfire pizza is honestly the best I've had in the city. The cheese pull is unreal! Order every Friday with my family — never disappoints.",
  },
  {
    name: "Bilal Ahmed",
    role: "Regular",
    rating: 5,
    text: "Birthday deal for my son was a total hit. The fondant cake, wings, platters — everything was fresh and on time. Highly recommend!",
  },
  {
    name: "Sana Malik",
    role: "Foodie",
    rating: 5,
    text: "Tried their Couple Treat last weekend. The Tower Burger + ice cream shake combo is to die for. Service is super fast and friendly.",
  },
  {
    name: "Hassan Raza",
    role: "Verified Customer",
    rating: 5,
    text: "Hands down the juiciest Zinger burger in town. And the Honey cake is dangerously addictive. Easy 5 stars.",
  },
  {
    name: "Maham Tariq",
    role: "Loyal Customer",
    rating: 5,
    text: "Their milk shakes are next level — especially the Kulfa one. Reminds me of the ones from my dadi's kitchen. ❤️",
  },
  {
    name: "Usman Shahid",
    role: "Verified Customer",
    rating: 5,
    text: "Ordered 3 large pizzas for an office lunch. Delivery was on time, pizzas were hot, and the team went wild. Will be back!",
  },
];

export function Testimonials() {
  const { t } = useLang();
  const first = testimonials.slice(0, 3);
  const second = testimonials.slice(3);

  return (
    <section className="relative overflow-hidden bg-brand-black py-20 text-white md:py-28">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 16px)",
        }}
        aria-hidden
      />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="mb-3 inline-block rounded-full bg-brand-orange/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange-light">
            {t.testimonials.title}
          </div>
          <h2 className="font-display text-4xl font-extrabold md:text-5xl">
            ⭐ <span className="text-gradient-orange">4.8/5</span> from 2,000+ reviews
          </h2>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div className="space-y-4">
        <MarqueeRow items={first} direction="left" />
        <MarqueeRow items={second} direction="right" />
      </div>
    </section>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: typeof testimonials;
  direction: "left" | "right";
}) {
  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-brand-black to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-brand-black to-transparent"
        aria-hidden
      />
      <div
        className="flex w-max gap-4"
        style={{
          animation: `scroll-${direction} 50s linear infinite`,
        }}
      >
        {[...items, ...items].map((tm, i) => (
          <div
            key={`${tm.name}-${i}`}
            className="w-[360px] shrink-0 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="mb-3 flex items-center gap-1 text-brand-orange-light">
              {Array.from({ length: tm.rating }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <Quote className="mb-2 h-6 w-6 text-brand-orange/40" />
            <p className="mb-4 text-sm text-white/80">{tm.text}</p>
            <div className="border-t border-white/10 pt-3">
              <div className="font-bold">{tm.name}</div>
              <div className="text-xs text-white/50">{tm.role}</div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
