"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Menu, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart-context";
import { useLang } from "@/lib/lang-context";
import { PHONE_DISPLAY, waLink, DEFAULT_GREETING } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/LanguageToggle";

const navLinks = [
  { href: "/", key: "home" },
  { href: "/menu", key: "menu" },
  { href: "/deals", key: "deals" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export function Navbar() {
  const { t, lang } = useLang();
  const { count, open: openCart } = useCart();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.5, 0.32, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "glass-nav border-b border-brand-orange/10 shadow-sm"
            : "bg-transparent",
        )}
      >
        <div className="container flex h-16 items-center justify-between gap-4 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2"
            aria-label="Usama Bakers home"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-brand-orange-light to-brand-orange-deep opacity-50 blur-md transition-opacity group-hover:opacity-100" />
              <div className="relative grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-brand-orange-light to-brand-orange-deep text-white shadow-lg">
                <span className="font-display text-lg font-extrabold">U</span>
              </div>
            </div>
            <div className="hidden flex-col leading-tight sm:flex">
              <span className="font-display text-base font-extrabold text-brand-black">
                Usama Bakers
              </span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-brand-orange">
                & Hotbites
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => {
              const isActive = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    isActive
                      ? "text-brand-orange"
                      : "text-brand-black/70 hover:text-brand-black",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      className="absolute inset-0 -z-10 rounded-full bg-brand-orange/10"
                    />
                  )}
                  {t.nav[l.key]}
                </Link>
              );
            })}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            <LanguageToggle className="hidden sm:flex" />

            <button
              onClick={openCart}
              className="relative grid h-10 w-10 place-items-center rounded-full bg-brand-black/5 text-brand-black hover:bg-brand-orange/10"
              aria-label={t.nav.cart}
            >
              <ShoppingBag className="h-5 w-5" />
              <AnimatePresence>
                {count > 0 && (
                  <motion.span
                    key={count}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-brand-orange text-[10px] font-bold text-white shadow"
                  >
                    {count}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <Button
              asChild
              variant="whatsapp"
              size="sm"
              className="hidden md:inline-flex"
            >
              <a
                href={waLink(DEFAULT_GREETING)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.nav.orderNow}
              </a>
            </Button>

            <button
              className="grid h-10 w-10 place-items-center rounded-full bg-brand-black/5 text-brand-black hover:bg-brand-orange/10 lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-brand-orange/10 bg-brand-cream/95 backdrop-blur lg:hidden"
            >
              <div className="container flex flex-col gap-1 py-4">
                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={cn(
                      "rounded-xl px-4 py-3 text-base font-semibold transition-colors",
                      pathname === l.href
                        ? "bg-brand-orange text-white"
                        : "text-brand-black hover:bg-brand-orange/10",
                    )}
                  >
                    {t.nav[l.key]}
                  </Link>
                ))}
                <div className="mt-2 flex items-center justify-between gap-3">
                  <LanguageToggle />
                  <Button
                    asChild
                    variant="whatsapp"
                    size="sm"
                    className="flex-1"
                  >
                    <a
                      href={waLink(DEFAULT_GREETING)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.nav.orderNow}
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      {/* Spacer so content doesn't slide under navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
}
