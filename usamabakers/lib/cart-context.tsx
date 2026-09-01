"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { readLS, writeLS } from "./utils";
import { waLink, cartMessage } from "./whatsapp";

export interface CartLine {
  id: string; // unique line id (item id + variant label)
  itemId: string; // menu item or deal id
  kind: "item" | "deal";
  name: string;
  qty: number;
  price: number; // unit price (in PKR)
  image?: string;
  note?: string;
}

interface CartContextValue {
  lines: CartLine[];
  isOpen: boolean;
  count: number;
  total: number;
  open: () => void;
  close: () => void;
  toggle: () => void;
  add: (line: Omit<CartLine, "id">) => void;
  update: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  checkoutUrl: () => string;
}

const CART_KEY = "usamabakers-cart";
const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    setLines(readLS<CartLine[]>(CART_KEY, []));
    setHydrated(true);
  }, []);

  // Persist to localStorage on change (after hydration)
  useEffect(() => {
    if (hydrated) writeLS(CART_KEY, lines);
  }, [lines, hydrated]);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  const add = useCallback((line: Omit<CartLine, "id">) => {
    setLines((prev) => {
      const id = `${line.kind}-${line.itemId}${line.note ? `-${line.note}` : ""}`;
      const existing = prev.find((l) => l.id === id);
      if (existing) {
        return prev.map((l) => (l.id === id ? { ...l, qty: l.qty + line.qty } : l));
      }
      return [...prev, { ...line, id }];
    });
    setIsOpen(true);
  }, []);

  const update = useCallback((id: string, qty: number) => {
    setLines((prev) =>
      prev
        .map((l) => (l.id === id ? { ...l, qty: Math.max(0, qty) } : l))
        .filter((l) => l.qty > 0),
    );
  }, []);

  const remove = useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.id !== id));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const total = useMemo(
    () => lines.reduce((sum, l) => sum + l.qty * l.price, 0),
    [lines],
  );
  const count = useMemo(() => lines.reduce((sum, l) => sum + l.qty, 0), [lines]);

  const checkoutUrl = useCallback(
    () => waLink(cartMessage(lines.map((l) => ({ name: l.name, qty: l.qty, price: l.price, note: l.note })))),
    [lines],
  );

  const value: CartContextValue = {
    lines,
    isOpen,
    count,
    total,
    open,
    close,
    toggle,
    add,
    update,
    remove,
    clear,
    checkoutUrl,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
