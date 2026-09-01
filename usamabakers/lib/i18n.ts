export type Lang = "en" | "ur";

export const defaultLang: Lang = "en";

export const LANG_KEY = "usamabakers-lang";

/**
 * All UI strings in the site, keyed by namespace.
 * Menu item names live on each `MenuItem.nameUr` (and deal names on `Deal.titleUr`).
 */
export const dict = {
  en: {
    // Navbar
    nav: {
      home: "Home",
      menu: "Menu",
      deals: "Deals",
      about: "About",
      contact: "Contact",
      orderNow: "Order Now",
      cart: "Cart",
    },
    // Hero
    hero: {
      eyebrow: "Sweets, Bakes & Hotbites",
      headline: "Crave. Click. Savor.",
      subhead:
        "Hand-crafted pizzas, juicy burgers, fresh bakes and heavenly desserts — delivered fast to your door.",
      ctaMenu: "Explore Menu",
      ctaOrder: "WhatsApp Order",
      trustHalal: "100% Halal",
      trustFresh: "Fresh Daily",
      trustDelivery: "Free Delivery over PKR 1500",
    },
    // Categories
    categories: {
      title: "Our Specialties",
      subtitle: "Tap a category to explore",
    },
    // Featured deals
    deals: {
      title: "Hot Deals Today",
      subtitle: "Limited-time offers you'll love",
      description:
        "Birthday blowouts, family feasts, date-night treats, and a one-man-show lineup — all priced to make you smile.",
      orderBtn: "Order this Deal",
      originalPrice: "was",
    },
    // Menu
    menu: {
      title: "Full Menu",
      subtitle: "Tap any item to add it to your order",
      add: "Add",
      added: "Added!",
      orderWa: "Order on WhatsApp",
      filter: "Filter",
      all: "All",
    },
    // Cart
    cart: {
      title: "Your Order",
      empty: "Your cart is empty.",
      emptyHint: "Add items from the menu to get started.",
      total: "Total",
      checkout: "Checkout on WhatsApp",
      clear: "Clear",
      remove: "Remove",
      qty: "Qty",
    },
    // About
    about: {
      title: "Our Story",
      headline: "Baked with love since day one",
      body:
        "Usama Sweets Bakers & Hotbites started as a family kitchen with one mission — make every bite unforgettable. From hand-stretched pizzas to slow-cooked biryani spices and freshly frosted cakes, we craft everything in-house with the freshest ingredients, every single day.",
      page: {
        title: "About Us",
        sub: "Family kitchen. Big flavors. Made with love.",
        p1: "What began as a small family bakery in 2019 has grown into one of the city's favorite spots for fresh pizzas, juicy burgers, hand-frosted cakes and crispy hotbites. We still do things the same way we did on day one — small batches, fresh dough, real ingredients.",
        p2: "Every pizza is hand-stretched. Every burger is smashed on a hot griddle. Every cake is frosted the morning it goes out. Nothing comes from a packet, nothing is frozen overnight. That's our promise.",
        p3: "Whether you're ordering a quick bite for yourself, a family deal for movie night, or a 3-tier fondant cake for a wedding — we've got you covered, and we'll deliver it with a smile.",
        valuesTitle: "What we stand for",
        values: {
          fresh: {
            title: "Always Fresh",
            text: "Baked, fried and frosted the same day. No shortcuts.",
          },
          halal: {
            title: "100% Halal",
            text: "Every ingredient sourced from certified suppliers.",
          },
          family: {
            title: "Family First",
            text: "Recipes passed down, love baked in.",
          },
          fast: {
            title: "Fast Delivery",
            text: "Hot at your door, usually within 45 minutes.",
          },
        },
      },
      stats: {
        orders: "Orders Served",
        customers: "Happy Customers",
        items: "Items on Menu",
        years: "Years of Baking",
      },
    },
    // Testimonials
    testimonials: {
      title: "Loved by thousands",
    },
    // Contact
    contact: {
      title: "Visit Us",
      subtitle: "We'd love to see you — or deliver straight to your door.",
      address: "Address",
      phone: "Phone",
      whatsapp: "WhatsApp",
      hours: "Opening Hours",
      callBtn: "Call Now",
      waBtn: "Chat on WhatsApp",
      mapBtn: "Open in Google Maps",
      days: {
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday",
        sun: "Sunday",
      },
    },
    // Footer
    footer: {
      tagline: "Sweets, Bakes & Hotbites — made fresh daily.",
      quickLinks: "Quick Links",
      contact: "Get in Touch",
      followUs: "Follow Us",
      rights: "All rights reserved.",
      newsletter: "Get deals in your inbox",
      subscribe: "Subscribe",
    },
    // Floating
    float: {
      waTooltip: "Chat with us",
    },
    // Common
    common: {
      learnMore: "Learn more",
      viewAll: "View all",
      back: "Back",
      close: "Close",
      pkr: "PKR",
    },
  },
  ur: {
    nav: {
      home: "ہوم",
      menu: "مینو",
      deals: "ڈیلز",
      about: "ہمارے بارے میں",
      contact: "رابطہ",
      orderNow: "ابھی آرڈر کریں",
      cart: "کارٹ",
    },
    hero: {
      eyebrow: "مٹھائیاں، بیکری اور ہاٹ بائٹس",
      headline: "کھائیں۔ آرڈر کریں۔ لطف اٹھائیں۔",
      subhead:
        "ہاتھ سے بنی پیزا، رسیلے برگر، تازہ بیکری اور دلکش مٹھائیاں — تیزی سے آپ کے دروازے تک۔",
      ctaMenu: "مینو دیکھیں",
      ctaOrder: "واٹس ایپ آرڈر",
      trustHalal: "100% حلال",
      trustFresh: "روزانہ تازہ",
      trustDelivery: "1500 روپے سے زیادہ پر مفت ڈیلیوری",
    },
    categories: {
      title: "ہماری خاصیتیں",
      subtitle: "کسی بھی زمرے پر ٹیپ کریں",
    },
    deals: {
      title: "آج کی شاندار ڈیلز",
      subtitle: "وقت محدود پیشکشیں جو آپ کو پسند آئیں گی",
      description:
        "سالگرہ کی پکی پکائی ڈیلز، فیملی دعوت، ڈیٹ نائٹ ٹریٹس اور سنگل مین شو — سب کچھ مسکراہٹ کی قیمت پر۔",
      orderBtn: "یہ ڈیل آرڈر کریں",
      originalPrice: "تھا",
    },
    menu: {
      title: "مکمل مینو",
      subtitle: "آرڈر میں شامل کرنے کے لیے کسی بھی آئٹم پر ٹیپ کریں",
      add: "شامل کریں",
      added: "شامل ہو گیا!",
      orderWa: "واٹس ایپ پر آرڈر کریں",
      filter: "فلٹر",
      all: "سب",
    },
    cart: {
      title: "آپ کا آرڈر",
      empty: "آپ کا کارٹ خالی ہے۔",
      emptyHint: "شروع کرنے کے لیے مینو سے آئٹمز شامل کریں۔",
      total: "کل",
      checkout: "واٹس ایپ پر چیک آؤٹ",
      clear: "صاف کریں",
      remove: "ہٹائیں",
      qty: "مقدار",
    },
    about: {
      title: "ہماری کہانی",
      headline: "پہلے دن سے محبت سے پکایا",
      body:
        "اسامہ سویٹس بیکرز اینڈ ہاٹ بائٹس ایک خاندانی باورچی خانے کے طور پر شروع ہوا تھا جس کا ایک مشن تھا — ہر لقمے کو ناقابل فراموش بنانا۔ ہاتھ سے کھینچی ہوئی پیزا سے لے کر دھیمی آنچ پر پکے بریانی مسالوں اور تازہ کیک تک، ہم ہر چیز گھر میں تازہ ترین اجزاء سے بناتے ہیں۔",
      page: {
        title: "ہمارے بارے میں",
        sub: "خاندانی باورچی خانہ۔ بڑے ذائقے۔ محبت سے بنایا۔",
        p1: "جو چیز 2019 میں ایک چھوٹی خاندانی بیکری کے طور پر شروع ہوئی، وہ آج شہر کی پسندیدہ ترین جگہوں میں سے ایک ہے — تازہ پیزا، رسیلے برگر، ہاتھ سے بنے کیک اور کرسپی ہاٹ بائٹس کے لیے۔ ہم وہی کام آج بھی کرتے ہیں جو پہلے دن کیا تھا — چھوٹے بیچ، تازہ آٹا، اصل اجزاء۔",
        p2: "ہر پیزا ہاتھ سے کھینچی جاتی ہے۔ ہر برگر گرم گرل پر سمارٹ کیا جاتا ہے۔ ہر کیک صبح فراسٹ کیا جاتا ہے جب وہ باہر جاتا ہے۔ کچھ بھی پیکٹ سے نہیں آتا، راتوں رات منجمد نہیں ہوتا۔ یہ ہمارا وعدہ ہے۔",
        p3: "چاہے آپ اپنے لیے تیز لقمہ آرڈر کر رہے ہوں، فیملی ڈیل یا شادی کے لیے تین تہوں والا فانڈنٹ کیک — ہم آپ کے ساتھ ہیں، اور مسکراہٹ کے ساتھ ڈیلیور کریں گے۔",
        valuesTitle: "ہم کس چیز پر یقین رکھتے ہیں",
        values: {
          fresh: { title: "ہمیشہ تازہ", text: "پکایا، تلی اور فراسٹ کیا ہوا — ایک ہی دن۔" },
          halal: { title: "100% حلال", text: "ہر جزو سرٹیفائیڈ سپلائرز سے۔" },
          family: { title: "خاندان پہلے", text: "پرانی ترکیبیں، پکی ہوئی محبت۔" },
          fast: { title: "تیز ڈیلیوری", text: "گرم، عام طور پر 45 منٹ میں۔" },
        },
      },
      stats: {
        orders: "آرڈرز مکمل",
        customers: "خوش صارفین",
        items: "مینو پر آئٹمز",
        years: "سالوں کا تجربہ",
      },
    },
    testimonials: {
      title: "ہزاروں کی پسند",
    },
    contact: {
      title: "ہم سے ملیں",
      subtitle: "ہم آپ سے ملنا چاہیں گے — یا آپ کے دروازے تک پہنچائیں گے۔",
      address: "پتہ",
      phone: "فون",
      whatsapp: "واٹس ایپ",
      hours: "کھلنے کا وقت",
      callBtn: "ابھی کال کریں",
      waBtn: "واٹس ایپ پر بات کریں",
      mapBtn: "گوگل میپس میں کھولیں",
      days: {
        mon: "پیر",
        tue: "منگل",
        wed: "بدھ",
        thu: "جمعرات",
        fri: "جمعہ",
        sat: "ہفتہ",
        sun: "اتوار",
      },
    },
    footer: {
      tagline: "مٹھائیاں، بیکری اور ہاٹ بائٹس — روزانہ تازہ۔",
      quickLinks: "فوری لنکس",
      contact: "رابطہ",
      followUs: "ہمیں فالو کریں",
      rights: "جملہ حقوق محفوظ ہیں۔",
      newsletter: "ڈیلز اپنے ای میل پر حاصل کریں",
      subscribe: "سبسکرائب",
    },
    float: {
      waTooltip: "ہم سے بات کریں",
    },
    common: {
      learnMore: "مزید جانیں",
      viewAll: "سب دیکھیں",
      back: "واپس",
      close: "بند کریں",
      pkr: "روپے",
    },
  },
} as const;

export type Dictionary = typeof dict.en;

/** Pick the right language dictionary. */
export const getDict = (lang: Lang): Dictionary => dict[lang] as Dictionary;
