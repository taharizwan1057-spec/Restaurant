"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, MessageCircle, Navigation, Phone, Send } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { PHONE_DISPLAY, telLink, waLink, DEFAULT_GREETING } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/gradient-text";

const hours = [
  { key: "mon", open: "12:00 PM", close: "12:00 AM" },
  { key: "tue", open: "12:00 PM", close: "12:00 AM" },
  { key: "wed", open: "12:00 PM", close: "12:00 AM" },
  { key: "thu", open: "12:00 PM", close: "12:00 AM" },
  { key: "fri", open: "12:00 PM", close: "12:00 AM" },
  { key: "sat", open: "12:00 PM", close: "12:00 AM" },
  { key: "sun", open: "12:00 PM", close: "12:00 AM" },
] as const;

export function ContactSection() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-orange-50 to-brand-cream py-20 md:py-28">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-orange/20 blur-3xl"
        aria-hidden
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="mb-3 inline-block rounded-full bg-brand-orange/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange-deep">
            {t.contact.title}
          </div>
          <h2 className="font-display text-4xl font-extrabold text-brand-black md:text-5xl">
            {t.contact.subtitle}
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Contact info card */}
          <ScrollReveal>
            <div className="rounded-3xl border border-brand-cream bg-white p-6 shadow-card-lift md:p-8">
              <div className="mb-6">
                <div className="mb-1 flex items-center gap-2 text-sm font-bold text-brand-orange-deep">
                  <MapPin className="h-4 w-4" /> {t.contact.address}
                </div>
                <div className="font-display text-xl font-extrabold text-brand-black">
                  Main Bazaar, City Center
                </div>
                <p className="text-sm text-brand-black/60">Pakistan</p>
              </div>

              <div className="mb-6 grid grid-cols-2 gap-3">
                <a
                  href={telLink()}
                  className="group flex items-center gap-3 rounded-2xl bg-brand-cream/60 p-4 transition-colors hover:bg-brand-orange/10"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-orange to-brand-orange-deep text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-brand-black/60">{t.contact.phone}</div>
                    <div className="truncate font-bold">{PHONE_DISPLAY}</div>
                  </div>
                </a>
                <a
                  href={waLink(DEFAULT_GREETING)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl bg-[#25D366]/10 p-4 transition-colors hover:bg-[#25D366]/20"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#25D366] text-white">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-brand-black/60">{t.contact.whatsapp}</div>
                    <div className="truncate font-bold">{PHONE_DISPLAY}</div>
                  </div>
                </a>
              </div>

              <div className="mb-6">
                <div className="mb-3 flex items-center gap-2 text-sm font-bold text-brand-orange-deep">
                  <Clock className="h-4 w-4" /> {t.contact.hours}
                </div>
                <ul className="divide-y divide-brand-cream rounded-2xl border border-brand-cream">
                  {hours.map((h) => (
                    <li
                      key={h.key}
                      className="flex items-center justify-between px-4 py-2.5 text-sm"
                    >
                      <span className="font-semibold text-brand-black/80">
                        {t.contact.days[h.key as keyof typeof t.contact.days]}
                      </span>
                      <span className="text-brand-black/60">
                        {h.open} – {h.close}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <Button asChild className="flex-1" size="lg">
                  <a href={telLink()}>
                    <Phone className="h-4 w-4" /> {t.contact.callBtn}
                  </a>
                </Button>
                <Button asChild variant="whatsapp" className="flex-1" size="lg">
                  <a href={waLink(DEFAULT_GREETING)} target="_blank" rel="noopener noreferrer">
                    <Send className="h-4 w-4" /> {t.contact.waBtn}
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Map */}
          <ScrollReveal delay={0.1}>
            <div className="relative h-full min-h-[480px] overflow-hidden rounded-3xl border border-brand-cream bg-white shadow-card-lift">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-brand-orange-deep/30" />
              <div className="absolute inset-0 grid place-items-center text-center">
                <div className="max-w-xs p-6">
                  <div className="mx-auto mb-4 grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-brand-orange to-brand-orange-deep text-white shadow-2xl shadow-brand-orange/40">
                    <MapPin className="h-10 w-10" />
                  </div>
                  <h3 className="mb-2 font-display text-2xl font-extrabold text-brand-black">
                    Find us easily
                  </h3>
                  <p className="mb-4 text-sm text-brand-black/70">
                    Located in the heart of the city, easy parking and quick access from all major routes.
                  </p>
                  <Button asChild variant="primary" size="lg">
                    <a
                      href="https://maps.google.com/?q=Usama+Sweets+Bakers"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation className="h-4 w-4" /> {t.contact.mapBtn}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
