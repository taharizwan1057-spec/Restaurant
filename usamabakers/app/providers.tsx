"use client";

import { type ReactNode } from "react";
import { LangProvider } from "@/lib/lang-context";
import { CartProvider } from "@/lib/cart-context";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LangProvider>
      <CartProvider>{children}</CartProvider>
    </LangProvider>
  );
}
