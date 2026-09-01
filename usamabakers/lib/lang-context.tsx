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
import { defaultLang, getDict, LANG_KEY, type Dictionary, type Lang } from "./i18n";
import { readLS, writeLS } from "./utils";

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: Dictionary;
  dir: "ltr" | "rtl";
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(defaultLang);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setLangState(readLS<Lang>(LANG_KEY, defaultLang));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    writeLS(LANG_KEY, lang);
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ur" ? "rtl" : "ltr";
  }, [lang, hydrated]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggle = useCallback(
    () => setLangState((prev) => (prev === "en" ? "ur" : "en")),
    [],
  );

  const t = useMemo(() => getDict(lang), [lang]);
  const dir = lang === "ur" ? "rtl" : "ltr";

  return (
    <LangContext.Provider value={{ lang, setLang, toggle, t, dir }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
