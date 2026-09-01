"use client";

import { motion } from "framer-motion";
import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Send, Youtube } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/lib/lang-context";
import { PHONE_DISPLAY, telLink, waLink, DEFAULT_GREETING } from "@/lib/whatsapp";
import { LanguageToggle } from "@/components/LanguageToggle";
import { cn } from "@/lib/utils";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="relative overflow-hidden bg-brand-black text-white">
      {/* Wood grain pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 8px)",
        }}
        aria-hidden
      />
      <div
        className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-orange/30 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-brand-orange-deep/30 blur-3xl"
        aria-hidden
      />

      <div className="container relative z-10 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-orange-light to-brand-orange-deep text-white shadow-lg">
                <span className="font-display text-xl font-extrabold">U</span>
              </div>
              <div>
                <div className="font-display text-lg font-extrabold">Usama Bakers</div>
                <div className="text-xs uppercase tracking-widest text-brand-orange-light">
                  & Hotbites
                </div>
              </div>
            </div>
            <p className="mb-6 text-sm text-white/70">{t.footer.tagline}</p>
            <div className="flex gap-2">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <motion.a
                  key={label}
                  whileHover={{ y: -3, scale: 1.05 }}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white/80 transition-colors hover:bg-brand-orange hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-display text-base font-bold text-brand-orange-light">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              {[
                { href: "/", label: t.nav.home },
                { href: "/menu", label: t.nav.menu },
                { href: "/deals", label: t.nav.deals },
                { href: "/about", label: t.nav.about },
                { href: "/contact", label: t.nav.contact },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-flex items-center gap-2 transition-colors hover:text-brand-orange-light"
                  >
                    <span className="h-1 w-1 rounded-full bg-brand-orange" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-display text-base font-bold text-brand-orange-light">
              {t.footer.contact}
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange-light" />
                <span>Main Bazaar, [City], Pakistan</span>
              </li>
              <li>
                <a
                  href={telLink()}
                  className="flex items-center gap-3 transition-colors hover:text-brand-orange-light"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand-orange-light" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={waLink(DEFAULT_GREETING)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-brand-orange-light"
                >
                  <Send className="h-4 w-4 shrink-0 text-brand-orange-light" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange-light" />
                <span>12:00 PM – 12:00 AM · Daily</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 font-display text-base font-bold text-brand-orange-light">
              {t.footer.newsletter}
            </h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur"
            >
              <input
                type="email"
                placeholder="you@email.com"
                className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-brand-orange to-brand-orange-deep px-4 text-sm font-bold text-white transition-transform hover:scale-105"
                aria-label="Subscribe"
              >
                {t.footer.subscribe}
              </button>
            </form>
            <div className="mt-4">
              <LanguageToggle />
            </div>
          </div>
        </div>

        <div
          className={cn(
            "mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row",
          )}
        >
          <p>© {new Date().getFullYear()} Usama Sweets Bakers & Hotbites. {t.footer.rights}</p>
          <p>Built with ❤️ &amp; a lot of cheese.</p>
        </div>
      </div>
    </footer>
  );
}
