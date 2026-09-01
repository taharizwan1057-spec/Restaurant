"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/lang-context";
import { ContactSection } from "@/components/sections/ContactSection";

export default function ContactPage() {
  const { t, lang } = useLang();
  const c = t.contact;

  return (
    <div className="pt-24 md:pt-28">
      <section className="relative overflow-hidden bg-brand-black py-16 text-white md:py-20">
        <div
          className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-brand-orange/30 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-brand-orange-deep/30 blur-3xl"
          aria-hidden
        />
        <div className="container relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-block rounded-full bg-brand-orange/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange-light"
          >
            {c.title}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl font-extrabold md:text-6xl"
          >
            <span className="text-gradient-orange">{c.subtitle}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-white/70"
          >
            {lang === "ur"
              ? "پیزا، برگر، کیک یا ڈیل — ایک ٹیپ سے آرڈر کریں۔ ہم گرم گرم ڈیلیور کرتے ہیں۔"
              : "Pizza, burgers, cakes or a deal — order in a tap. We deliver hot, fast, and friendly."}
          </motion.p>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}
