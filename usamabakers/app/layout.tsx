import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { CartDrawer } from "@/components/CartDrawer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
const urdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  variable: "--font-urdu",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Usama Sweets Bakers & Hotbites | Pizzas, Burgers, Cakes & More",
    template: "%s | Usama Sweets Bakers & Hotbites",
  },
  description:
    "Order fresh pizzas, burgers, wraps, cakes & family deals from Usama Bakers. WhatsApp 0300 1011955. Same-day delivery.",
  keywords: [
    "Usama Bakers",
    "Hotbites",
    "pizza",
    "burger",
    "cake",
    "bakery",
    "deals",
    "family deals",
    "Pakistan",
  ],
  authors: [{ name: "Usama Sweets Bakers & Hotbites" }],
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "Usama Sweets Bakers & Hotbites",
    title: "Usama Sweets Bakers & Hotbites",
    description: "Sweets, Bakes & Hotbites — Made Fresh Daily. WhatsApp 0300 1011955.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F26B1F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${urdu.variable} antialiased`}
      >
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <CartDrawer />
        </Providers>
      </body>
    </html>
  );
}
