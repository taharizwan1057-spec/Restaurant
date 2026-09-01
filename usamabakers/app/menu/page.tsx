import type { Metadata } from "next";
import { Suspense } from "react";
import { MenuShowcase } from "@/components/sections/MenuShowcase";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse the full Usama Bakers menu — pizzas, burgers, wraps, shakes, cakes, desserts & family deals. Order on WhatsApp 0300 1011955.",
};

// MenuShowcase reads ?cat= via useSearchParams; the page is intentionally
// dynamic so the suspense boundary is hydrated on the client.
export const dynamic = "force-dynamic";

export default function MenuPage() {
  return (
    <div className="pt-20">
      <Suspense
        fallback={
          <div className="container py-32 text-center text-brand-black/60">
            Loading menu…
          </div>
        }
      >
        <MenuShowcase />
      </Suspense>
    </div>
  );
}
