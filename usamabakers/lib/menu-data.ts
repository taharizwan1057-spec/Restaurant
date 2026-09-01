/**
 * Complete menu data extracted from the 8 source images of
 * Usama Sweets Bakers & Hotbites. All prices in PKR.
 */

/**
 * Build a Next.js-optimized Unsplash URL.
 * The `?w=...&auto=format&fit=crop&q=...` query string is the
 * official Unsplash CDN transform — next/image will further
 * optimize from there.
 */
const img = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&auto=format&fit=crop&q=75`;

export type CategoryId =
  | "birthday-deals"
  | "premium-cakes"
  | "burgers"
  | "wraps"
  | "prime-pizzas"
  | "favourite-pizzas"
  | "beverages"
  | "sides"
  | "desserts"
  | "bakery-snacks"
  | "family-deals"
  | "one-man-show"
  | "couple-treats"
  | "new-arrivals";

export interface MenuItem {
  id: string;
  name: string;
  nameUr?: string;
  price: number;
  /** For pizzas (S/M/L) or items with size variants, store alternatives. */
  variants?: Array<{ label: string; price: number }>;
  image?: string;
  category: CategoryId;
  description?: string;
  descriptionUr?: string;
  popular?: boolean;
}

export interface Deal {
  id: string;
  title: string;
  titleUr?: string;
  items: string[];
  price: number;
  originalPrice?: number;
  image?: string;
  tag?: string;
  category: CategoryId;
}

export interface Category {
  id: CategoryId;
  title: string;
  titleUr: string;
  description: string;
  descriptionUr: string;
  emoji: string;
  color: string; // tailwind gradient classes
  image?: string; // curated Unsplash photo for category tiles
}

export const categories: Category[] = [
  {
    id: "birthday-deals",
    title: "Birthday Deals",
    titleUr: "سالگرہ کی ڈیلز",
    description: "Make their day unforgettable",
    descriptionUr: "ان کا دن ناقابل فراموش بنائیں",
    emoji: "🎂",
    color: "from-pink-500 to-rose-500",
    image: img("photo-1530103862676-de8c9debad1d"), // colorful balloons
  },
  {
    id: "premium-cakes",
    title: "Premium Flavours Cakes",
    titleUr: "پریمیم فلیورز کیک",
    description: "Hand-frosted, baked fresh",
    descriptionUr: "ہاتھ سے فراسٹ کیے گئے، تازہ پکے",
    emoji: "🍰",
    color: "from-amber-500 to-orange-500",
    image: img("photo-1565958011703-44f9829ba187"), // strawberry layer cake
  },
  {
    id: "burgers",
    title: "Burger Bites",
    titleUr: "برگر بائٹس",
    description: "Juicy, crispy, irresistible",
    descriptionUr: "رسیلے، کرسپی، ناقابل مزاحمت",
    emoji: "🍔",
    color: "from-yellow-500 to-red-500",
    image: img("photo-1568901346375-23c9450c58cd"), // cheeseburger
  },
  {
    id: "wraps",
    title: "Wraps & Rolls",
    titleUr: "ریپس اور رولز",
    description: "Stuffed with goodness",
    descriptionUr: "بھرپور بھرے ہوئے",
    emoji: "🌯",
    color: "from-orange-500 to-amber-500",
    image: img("photo-1561758033-d89a9ad46330"), // cheese shawarma wrap
  },
  {
    id: "prime-pizzas",
    title: "Prime Pizzas",
    titleUr: "پرائم پیزا",
    description: "Wood-fired signature pies",
    descriptionUr: "لکڑی کی آگ پر پکے خاص پیزا",
    emoji: "🍕",
    color: "from-red-500 to-orange-600",
    image: img("photo-1571997478779-2adcbbe9ab2f"), // afghani-tikka pizza
  },
  {
    id: "favourite-pizzas",
    title: "All-Time Favourites",
    titleUr: "ہمیشہ کی پسند",
    description: "The classics, perfected",
    descriptionUr: "کلاسک، کامل",
    emoji: "❤️",
    color: "from-red-600 to-pink-600",
    image: img("photo-1513104890138-7c749659a591"), // chicken fajita pizza
  },
  {
    id: "sides",
    title: "Side Orders",
    titleUr: "سائیڈ آرڈرز",
    description: "Perfect companions",
    descriptionUr: "بہترین ساتھی",
    emoji: "🍟",
    color: "from-yellow-400 to-orange-500",
    image: img("photo-1573080496219-bb080dd4f877"), // fries
  },
  {
    id: "beverages",
    title: "Beverages",
    titleUr: "مشروبات",
    description: "Chilled, frothy, refreshing",
    descriptionUr: "ٹھنڈے، جھاگ دار، تازگی بخش",
    emoji: "🥤",
    color: "from-blue-400 to-cyan-400",
    image: img("photo-1572490122747-3968b75cc699"), // chocolate milkshake (was a margarita)
  },
  {
    id: "desserts",
    title: "Desserts",
    titleUr: "مٹھائیاں",
    description: "Sweet endings & treats",
    descriptionUr: "میٹھے اختتام",
    emoji: "🍮",
    color: "from-pink-400 to-rose-500",
    image: img("photo-1557925923-cd4648e211a0"), // sweet dish
  },
  {
    id: "bakery-snacks",
    title: "Bakery Snacks",
    titleUr: "بیکری اسنیکس",
    description: "Fresh from the oven",
    descriptionUr: "تندور سے تازہ",
    emoji: "🥐",
    color: "from-amber-600 to-yellow-500",
    image: img("photo-1528735602780-2552fd46c7af"), // sandwich
  },
  {
    id: "family-deals",
    title: "Friends & Family Deals",
    titleUr: "دوست اور فیملی ڈیلز",
    description: "Share the joy, save more",
    descriptionUr: "خوشی بانٹیں، زیادہ بچائیں",
    emoji: "👨👩👧👦",
    color: "from-emerald-500 to-teal-500",
    image: img("photo-1565299624946-b28f40a0ae38"), // pizza spread
  },
  {
    id: "one-man-show",
    title: "One-Man-Show",
    titleUr: "سنگل پیکج",
    description: "Solo feasts done right",
    descriptionUr: "اکیلے کے لیے بہترین",
    emoji: "🧍",
    color: "from-purple-500 to-violet-500",
    image: img("photo-1571091718767-18b5b1457add"), // burger
  },
  {
    id: "couple-treats",
    title: "Couple Treats",
    titleUr: "کپل ٹریٹس",
    description: "Date-night favourites",
    descriptionUr: "ڈیٹ نائٹ کی پسند",
    emoji: "💕",
    color: "from-rose-500 to-pink-500",
    image: img("photo-1578985545062-69928b1d9587"), // chocolate cake
  },
  {
    id: "new-arrivals",
    title: "New Arrivals",
    titleUr: "نئی آمد",
    description: "Fresh on the menu",
    descriptionUr: "مینو پر نئے",
    emoji: "✨",
    color: "from-cyan-500 to-blue-500",
    image: img("photo-1606313564200-e75d5e30476c"), // cake slice
  },
];

/* ---------------- MENU ITEMS ---------------- */

export const menuItems: MenuItem[] = [
  // Premium Cakes
  { id: "cake-chocolate", name: "Chocolate Cake (Premium)", nameUr: "چاکلیٹ کیک", price: 100, category: "premium-cakes", popular: true, image: img("photo-1578985545062-69928b1d9587") },
  { id: "cake-pista", name: "Pista Premium Cake", nameUr: "پستہ پریمیم کیک", price: 100, category: "premium-cakes", image: img("photo-1606313564200-e75d5e30476c") },
  { id: "cake-honey", name: "Honey Cake", nameUr: "ہنی کیک", price: 100, category: "premium-cakes", popular: true, image: img("photo-1607478900766-efe13248b125") },
  { id: "cake-oreo", name: "Oreo Cake", nameUr: "اوریو کیک", price: 100, category: "premium-cakes", image: img("photo-1606890737304-57a1ca8a5b62") },
  { id: "cake-red-velvet", name: "Red Velvet Cake", nameUr: "ریڈ ویلیٹ کیک", price: 100, category: "premium-cakes", popular: true, image: img("photo-1565958011703-44f9829ba187") },
  { id: "cake-coffee", name: "Coffee Cake", nameUr: "کافی کیک", price: 100, category: "premium-cakes", image: img("photo-1535254973040-607b474cb50d") },
  { id: "cake-strawberry", name: "Strawberry Cake", nameUr: "سٹرابری کیک", price: 100, category: "premium-cakes", image: img("photo-1565958011703-44f9829ba187") },
  { id: "cake-fondant", name: "Custom Fondant Cake", nameUr: "کسٹم فونڈنٹ کیک", price: 100, category: "premium-cakes", image: img("photo-1551024601-bec78aea704b") },

  // Burgers
  { id: "burger-crispy-zinger", name: "Crispy Zinger Burger", nameUr: "کرسپی زنگر برگر", price: 320, category: "burgers", popular: true, image: img("photo-1550317138-10000687a72b") },
  { id: "burger-yummy-reggy", name: "Yummy Reggy Burger", nameUr: "یمی ریگی برگر", price: 240, category: "burgers", image: img("photo-1572802419224-296b0aeee0d9") },
  { id: "burger-hot-chapli", name: "Hot Chapli Burger", nameUr: "ہاٹ چپلی برگر", price: 240, category: "burgers", image: img("photo-1586190848861-99aa4a171e90") },
  { id: "burger-cheesy-zinger", name: "Cheesy Zinger Burger", nameUr: "چیزی زنگر برگر", price: 399, category: "burgers", popular: true, image: img("photo-1568901346375-23c9450c58cd") },
  { id: "burger-crunchy-tower", name: "Crunchy Tower Burger", nameUr: "کرنچی ٹاور برگر", price: 540, category: "burgers", image: img("photo-1551782450-a2132b4ba21d") },
  { id: "burger-crunchy-tower-2", name: "Crunchy Tower 2.0", nameUr: "کرنچی ٹاور 2.0", price: 599, category: "burgers", popular: true, image: img("photo-1606755962773-d324e0a13086") },

  // Wraps
  { id: "wrap-zinger-shawarma", name: "Crispy Zinger Shawarma", nameUr: "کرسپی زنگر شاورما", price: 260, category: "wraps", popular: true, image: img("photo-1561758033-d89a9ad46330") },
  { id: "wrap-juicy-cheese", name: "Juicy Cheese Shawarma", nameUr: "جوسی چیز شاورما", price: 260, category: "wraps", image: img("photo-1626700051175-6818013e1d4f") },
  { id: "wrap-zinger-paratha", name: "Zinger Paratha Roll", nameUr: "زنگر پراٹھا رول", price: 299, category: "wraps", popular: true, image: img("photo-1601050690597-df0568f70950") },
  { id: "wrap-paratha-roll", name: "Paratha Roll", nameUr: "پراٹھا رول", price: 280, category: "wraps", image: img("photo-1599487488170-d11ec9c172f0") },
  { id: "wrap-hot-chicken", name: "Hot Chicken Wrap", nameUr: "ہاٹ چکن ریپ", price: 280, category: "wraps", image: img("photo-1633321702518-7feccafb94d5") },
  { id: "wrap-kababish", name: "Kababish Roll", nameUr: "کبابش رول", price: 280, category: "wraps", image: img("photo-1599487488170-d11ec9c172f0") },

  // Prime Pizzas
  { id: "pizza-nawabi-pasand", name: "Nawabi Pasand Pizza", nameUr: "نوابی پسند پیزا", price: 550, category: "prime-pizzas", popular: true,
    image: img("photo-1574071318508-1cdbab80d002"),
    variants: [
      { label: "Small", price: 550 },
      { label: "Medium", price: 990 },
      { label: "Large", price: 1290 },
    ] },
  { id: "pizza-smoky-bonfire", name: "Smoky Bonfire Pizza", nameUr: "اسموکی بون فائر پیزا", price: 550, category: "prime-pizzas", popular: true,
    image: img("photo-1593560708920-61dd98c46a4e"),
    variants: [
      { label: "Small", price: 550 },
      { label: "Medium", price: 990 },
      { label: "Large", price: 1290 },
    ] },
  { id: "pizza-lazania", name: "Lazania Pizza", nameUr: "لازانیا پیزا", price: 550, category: "prime-pizzas",
    image: img("photo-1604382354936-07c5d9983bd3"),
    variants: [
      { label: "Small", price: 550 },
      { label: "Medium", price: 990 },
      { label: "Large", price: 1290 },
    ] },
  { id: "pizza-afghani-tikka", name: "Afghani Tikka Pizza", nameUr: "افغانی ٹکا پیزا", price: 550, category: "prime-pizzas",
    image: img("photo-1571997478779-2adcbbe9ab2f"),
    variants: [
      { label: "Small", price: 550 },
      { label: "Medium", price: 990 },
      { label: "Large", price: 1290 },
    ] },

  // All-Time Favourite Pizzas
  { id: "pizza-chicken-fajita", name: "Chicken Fajita Pizza", nameUr: "چکن فجیٹا پیزا", price: 490, category: "favourite-pizzas", popular: true,
    image: img("photo-1513104890138-7c749659a591"),
    variants: [
      { label: "Small", price: 490 },
      { label: "Medium", price: 880 },
      { label: "Large", price: 1180 },
    ] },
  { id: "pizza-chicken-tikka", name: "Chicken Tikka Pizza", nameUr: "چکن ٹکا پیزا", price: 490, category: "favourite-pizzas", popular: true,
    image: img("photo-1593504049359-74330189a345"),
    variants: [
      { label: "Small", price: 490 },
      { label: "Medium", price: 880 },
      { label: "Large", price: 1180 },
    ] },
  { id: "pizza-hot-spicy", name: "Hot & Spicy Pizza", nameUr: "ہاٹ اینڈ سپائسی پیزا", price: 490, category: "favourite-pizzas",
    image: img("photo-1601924582970-9238bcb495d9"),
    variants: [
      { label: "Small", price: 490 },
      { label: "Medium", price: 880 },
      { label: "Large", price: 1180 },
    ] },
  { id: "pizza-cheese-lover", name: "Cheese Lover Pizza", nameUr: "چیز لوور پیزا", price: 490, category: "favourite-pizzas",
    image: img("photo-1571407970349-bc81e7e96d47"),
    variants: [
      { label: "Small", price: 490 },
      { label: "Medium", price: 880 },
      { label: "Large", price: 1180 },
    ] },

  // Beverages
  { id: "bev-mint-margarita", name: "Mint Margarita", nameUr: "مرغ نوش", price: 250, category: "beverages", image: img("photo-1556679343-c7306c1976bc") },
  { id: "bev-ic-strawberry", name: "Ice Cream Shake — Strawberry", nameUr: "آئس کریم شیک — سٹرابری", price: 199, category: "beverages", image: img("photo-1559054663-e8d23213f55c") },
  { id: "bev-ic-vanilla", name: "Ice Cream Shake — Vanilla", nameUr: "آئس کریم شیک — ونیلا", price: 199, category: "beverages", image: img("photo-1568901839119-631418a3910d") },
  { id: "bev-ic-kulfa", name: "Ice Cream Shake — Kulfa", nameUr: "آئس کریم شیک — قلفہ", price: 199, category: "beverages", popular: true, image: img("photo-1488477181946-6428a0291777") },
  { id: "bev-ic-chocolate", name: "Ice Cream Shake — Chocolate", nameUr: "آئس کریم شیک — چاکلیٹ", price: 199, category: "beverages", image: img("photo-1572490122747-3968b75cc699") },
  { id: "bev-milk-mango", name: "Milk Shake — Mango", nameUr: "ملک شیک — آم", price: 130, category: "beverages", image: img("photo-1579954115545-a95591f28bfc") },
  { id: "bev-milk-banana", name: "Milk Shake — Banana", nameUr: "ملک شیک — کیلا", price: 130, category: "beverages", image: img("photo-1544145945-f90425340c7e") },
  { id: "bev-milk-apple", name: "Milk Shake — Apple", nameUr: "ملک شیک — سیب", price: 130, category: "beverages", image: img("photo-1541658016709-82535e94bc69") },
  { id: "bev-milk-strawberry", name: "Milk Shake — Strawberry", nameUr: "ملک شیک — سٹرابری", price: 130, category: "beverages", image: img("photo-1559054663-e8d23213f55c") },
  { id: "bev-milk-pineapple", name: "Milk Shake — Pineapple", nameUr: "ملک شیک — انناس", price: 250, category: "beverages", image: img("photo-1623065422902-30a2d299bbe4") },
  { id: "bev-milk-oreo", name: "Milk Shake — Oreo", nameUr: "ملک شیک — اوریو", price: 160, category: "beverages", image: img("photo-1606755962773-d324e0a13086") },
  { id: "bev-milk-kitkat", name: "Milk Shake — KitKat", nameUr: "ملک شیک — کٹ کیٹ", price: 600, category: "beverages", popular: true, image: img("photo-1544145945-f90425340c7e") },
  { id: "bev-milk-caramel", name: "Milk Shake — Caramel", nameUr: "ملک شیک — کیرامل", price: 199, category: "beverages", image: img("photo-1502741224143-90386d7f8c82") },
  { id: "bev-milk-doodh-pilai", name: "Milk Shake — Doodh Pilai", nameUr: "ملک شیک — دودھ پلائی", price: 250, category: "beverages", image: img("photo-1553530666-ba11a7da3888") },
  { id: "bev-milk-khoya-khajoor", name: "Milk Shake — Khoya Khajoor", nameUr: "ملک شیک — کھویا کھجور", price: 150, category: "beverages", image: img("photo-1544145945-f90425340c7e") },

  // Side Orders
  { id: "side-nuggets-5", name: "Hot Nuggets (5 pcs)", nameUr: "ہاٹ نگٹس (5 عدد)", price: 250, category: "sides", image: img("photo-1562967916-eb82221dfb92") },
  { id: "side-nuggets-10", name: "Hot Nuggets (10 pcs)", nameUr: "ہاٹ نگٹس (10 عدد)", price: 460, category: "sides", image: img("photo-1562967916-eb82221dfb92") },
  { id: "side-wings-5", name: "Crispy Chicken Wings (5 pcs)", nameUr: "کرسپی چکن ونگز (5 عدد)", price: 250, category: "sides", popular: true, image: img("photo-1567620832903-9fc6debc209f") },
  { id: "side-wings-10", name: "Crispy Chicken Wings (10 pcs)", nameUr: "کرسپی چکن ونگز (10 عدد)", price: 460, category: "sides", image: img("photo-1567620832903-9fc6debc209f") },
  { id: "side-bbq-5", name: "Usama Signature BBQ Wings (5 pcs)", nameUr: "اسامہ سگنیچر بی بی کیو ونگز (5 عدد)", price: 289, category: "sides", popular: true, image: img("photo-1527477396000-e27163b481c2") },
  { id: "side-bbq-10", name: "Usama Signature BBQ Wings (10 pcs)", nameUr: "اسامہ سگنیچر بی بی کیو ونگز (10 عدد)", price: 570, category: "sides", image: img("photo-1527477396000-e27163b481c2") },
  { id: "side-fries-s", name: "Plain French Fries (Small)", nameUr: "سادہ فرنچ فرائز (چھوٹا)", price: 190, category: "sides", image: img("photo-1573080496219-bb080dd4f877") },
  { id: "side-fries-l", name: "Plain French Fries (Large)", nameUr: "سادہ فرنچ فرائز (بڑا)", price: 380, category: "sides", image: img("photo-1573080496219-bb080dd4f877") },
  { id: "side-pasta-s", name: "Usama Special Pasta (Small)", nameUr: "اسامہ اسپیشل پاستا (چھوٹا)", price: 580, category: "sides", image: img("photo-1551183053-bf91a1d81141") },
  { id: "side-pasta-l", name: "Usama Special Pasta (Large)", nameUr: "اسامہ اسپیشل پاستا (بڑا)", price: 850, category: "sides", popular: true, image: img("photo-1551183053-bf91a1d81141") },
  { id: "side-crispy-piece", name: "Crispy Chicken Piece", nameUr: "کرسپی چکن پیس", price: 230, category: "sides", image: img("photo-1626082927389-6cd097cdc6ec") },
  { id: "side-pakode-250", name: "Chicken Pakode (250g)", nameUr: "چکن پکوڑے (250 گرام)", price: 290, category: "sides", image: img("photo-1601050690597-df0568f70950") },
  { id: "side-chapli-sandwich", name: "Chapli Kabab Sandwich", nameUr: "چپلی کباب سینڈوچ", price: 270, category: "sides", image: img("photo-1528735602780-2552fd46c7af") },
  { id: "side-fried-cheese", name: "Fried Cheese Sandwich", nameUr: "فرائیڈ چیز سینڈوچ", price: 240, category: "sides", image: img("photo-1528735602780-2552fd46c7af") },
  { id: "side-dip-mayo", name: "Dip — White Mayo", nameUr: "ڈپ — وائٹ میونیز", price: 50, category: "sides", image: img("photo-1546069901-ba9599a7e63c") },
  { id: "side-dip-mint", name: "Dip — Creamy Mint", nameUr: "ڈپ — کریمی پودینہ", price: 50, category: "sides", image: img("photo-1546069901-ba9599a7e63c") },
  { id: "side-dip-special", name: "Dip — Usama Special Sauce", nameUr: "ڈپ — اسامہ اسپیشل ساس", price: 50, category: "sides", image: img("photo-1546069901-ba9599a7e63c") },

  // Desserts
  { id: "des-khoya-barfi", name: "Khoya Barfi (200g)", nameUr: "کھویا برفی (200 گرام)", price: 240, category: "desserts", popular: true, image: img("photo-1782033032439-a2c656ca2f59") },
  { id: "des-bengali-rasgulla", name: "Bengali Rasgulla", nameUr: "بنگالی رسگلہ", price: 80, category: "desserts", image: img("photo-1589301760014-d929f3979dbc") },
  { id: "des-vanilla-pastry", name: "Vanilla Pastry", nameUr: "ونیلا پیسٹری", price: 60, category: "desserts", image: img("photo-1486427944299-d1955d23e34d") },
  { id: "des-red-velvet-pastry", name: "Red Velvet Pastry", nameUr: "ریڈ ویلیٹ پیسٹری", price: 90, category: "desserts", image: img("photo-1535141192574-5d4897c12636") },
  { id: "des-chocolate-pastry", name: "Chocolate Pastry", nameUr: "چاکلیٹ پیسٹری", price: 80, category: "desserts", image: img("photo-1606313564200-e75d5e30476c") },
  { id: "des-brownie-ic", name: "Brownie & Ice Cream", nameUr: "براؤنی اور آئس کریم", price: 180, category: "desserts", popular: true, image: img("photo-1604908176997-125f25cc6f3d") },
  { id: "des-gulab-jamun", name: "Gulab Jamun", nameUr: "گلاب جامن", price: 60, category: "desserts", image: img("photo-1666190092159-3171cf0fbb12") },
  { id: "des-tutti-frutti", name: "Tutti Frutti (2 pcs)", nameUr: "ٹوٹی فریوٹی (2 عدد)", price: 99, category: "desserts", image: img("photo-1655235317329-3f3cda09102e") },
  { id: "des-sohan-halwa-100", name: "Sohan Halwa (100g)", nameUr: "سوہن حلوہ (100 گرام)", price: 120, category: "desserts", image: img("photo-1695568180180-3c8415914e56") },
  { id: "des-sohan-halwa-250", name: "Sohan Halwa (250g)", nameUr: "سوہن حلوہ (250 گرام)", price: 250, category: "desserts", image: img("photo-1695568181558-034b7d3e49eb") },

  // Bakery Snacks
  { id: "bs-chicken-tikka-sandwich", name: "Chicken Tikka Sandwich", nameUr: "چکن ٹکا سینڈوچ", price: 100, category: "bakery-snacks", image: img("photo-1528735602780-2552fd46c7af") },
  { id: "bs-fried-sandwich", name: "Fried Sandwich", nameUr: "فرائیڈ سینڈوچ", price: 90, category: "bakery-snacks", image: img("photo-1528735602780-2552fd46c7af") },
  { id: "bs-shashlik", name: "Shashlik Stick", nameUr: "شاشلک اسٹک", price: 120, category: "bakery-snacks", image: img("photo-1601050690597-df0568f70950") },
  { id: "bs-chapli-kabab", name: "Chapli Kabab", nameUr: "چپلی کباب", price: 70, category: "bakery-snacks", image: img("photo-1601050690597-df0568f70950") },
  { id: "bs-chicken-pastry", name: "Chicken Pastry", nameUr: "چکن پیسٹری", price: 100, category: "bakery-snacks", popular: true, image: img("photo-1604908176997-125f25cc6f3d") },
  { id: "bs-drum-stick", name: "Drum Stick", nameUr: "ڈرم اسٹک", price: 60, category: "bakery-snacks", image: img("photo-1626082927389-6cd097cdc6ec") },
  { id: "bs-mini-bakery-pizza", name: "Mini Bakery Pizza", nameUr: "منی بیکری پیزا", price: 140, category: "bakery-snacks", image: img("photo-1513104890138-7c749659a591") },
  { id: "bs-fried-burger", name: "Fried Burger", nameUr: "فرائیڈ برگر", price: 60, category: "bakery-snacks", image: img("photo-1572802419224-296b0aeee0d9") },
  { id: "bs-sandwich-roll", name: "Sandwich Roll", nameUr: "سینڈوچ رول", price: 50, category: "bakery-snacks", image: img("photo-1528735602780-2552fd46c7af") },
  { id: "bs-creamy-sandwich", name: "Creamy Sandwich", nameUr: "کریمی سینڈوچ", price: 100, category: "bakery-snacks", image: img("photo-1528735602780-2552fd46c7af") },
  { id: "bs-chicken-leg-piece", name: "Chicken Leg Piece", nameUr: "چکن لیگ پیس", price: 290, category: "bakery-snacks", image: img("photo-1626082927389-6cd097cdc6ec") },
  { id: "bs-usama-salad", name: "Usama Salad", nameUr: "اسامہ سلاد", price: 150, category: "bakery-snacks", image: img("photo-1546069901-ba9599a7e63c") },
  { id: "bs-shami-burger", name: "Shami Burger", nameUr: "شامی برگر", price: 130, category: "bakery-snacks", image: img("photo-1572802419224-296b0aeee0d9") },
  { id: "bs-chicken-burger", name: "Chicken Burger", nameUr: "چکن برگر", price: 150, category: "bakery-snacks", popular: true, image: img("photo-1568901346375-23c9450c58cd") },
  { id: "bs-chicken-shawarma", name: "Chicken Shawarma", nameUr: "چکن شاورما", price: 150, category: "bakery-snacks", popular: true, image: img("photo-1633321702518-7feccafb94d5") },
];

/* ---------------- DEALS ---------------- */

export const deals: Deal[] = [
  // Birthday Deals — 4 distinct celebration photos
  {
    id: "bd-1",
    title: "Birthday Deal — Mini",
    titleUr: "سالگرہ ڈیل — منی",
    items: [
      "1 Cake (any flavour)",
      "12 Pcs Chicken Strips",
      "1.5 Ltr Drink",
      "Decoration & Candles",
    ],
    price: 2950,
    originalPrice: 3700,
    tag: "Most Loved",
    category: "birthday-deals",
    image: img("photo-1558636508-e0db3814bd1d"), // chalkboard "Happy Birthday"
  },
  {
    id: "bd-2",
    title: "Birthday Deal — Classic",
    titleUr: "سالگرہ ڈیل — کلاسک",
    items: [
      "1 Premium Cake (1.5 lb)",
      "20 Pcs Wings",
      "2 Platters",
      "1.5 Ltr Drink",
      "Full Decoration",
    ],
    price: 4100,
    originalPrice: 5100,
    tag: "Popular",
    category: "birthday-deals",
    image: img("photo-1557925923-cd4648e211a0"), // chocolate drip cake
  },
  {
    id: "bd-3",
    title: "Birthday Deal — Premium",
    titleUr: "سالگرہ ڈیل — پریمیم",
    items: [
      "1 Fondant Cake (2 lb)",
      "25 Pcs Wings",
      "2 Zinger Burgers",
      "1 Platter",
      "1.5 Ltr Drink",
    ],
    price: 3990,
    originalPrice: 4900,
    tag: "Value",
    category: "birthday-deals",
    image: img("photo-1464195244916-405fa0a82545"), // cookie/spread gift
  },
  {
    id: "bd-4",
    title: "Birthday Deal — Grand",
    titleUr: "سالگرہ ڈیل — گرینڈ",
    items: [
      "1 Custom Cake (3 lb)",
      "30 Pcs Wings",
      "2 Platters",
      "2 Zinger Burgers",
      "2 Ltr Drink",
      "Full Theme Decoration",
    ],
    price: 5550,
    originalPrice: 6900,
    tag: "Best Seller",
    category: "birthday-deals",
    image: img("photo-1535254973040-607b474cb50d"), // 3-tier white wedding cake
  },

  // Friends & Family Deals — 17 numbered combos, spread distinct photos
  { id: "fd-1",  title: "Family Deal 1",  titleUr: "فیملی ڈیل 1",  items: ["1 Large Pizza",   "1 Platter",     "1.5 Ltr Drink"], price: 1590, originalPrice: 1990, category: "family-deals", image: img("photo-1565299624946-b28f40a0ae38") },
  { id: "fd-2",  title: "Family Deal 2",  titleUr: "فیملی ڈیل 2",  items: ["2 Medium Pizzas","1 Platter",     "1.5 Ltr Drink"], price: 1990, originalPrice: 2490, category: "family-deals", image: img("photo-1593560708920-61dd98c46a4e") },
  { id: "fd-3",  title: "Family Deal 3",  titleUr: "فیملی ڈیل 3",  items: ["1 Medium Pizza", "4 Wings",       "1 Platter",     "1.5 Ltr Drink"], price: 1090, originalPrice: 1390, category: "family-deals", image: img("photo-1567620832903-9fc6debc209f") },
  { id: "fd-4",  title: "Family Deal 4",  titleUr: "فیملی ڈیل 4",  items: ["2 Small Pizzas", "10 Wings",      "1.5 Ltr Drink"], price: 1290, originalPrice: 1690, category: "family-deals", image: img("photo-1527477396000-e27163b481c2") },
  { id: "fd-5",  title: "Family Deal 5",  titleUr: "فیملی ڈیل 5",  items: ["1 Large Pizza",  "20 Wings",      "1 Platter",     "1.5 Ltr Drink"], price: 2390, originalPrice: 2990, category: "family-deals", image: img("photo-1574071318508-1cdbab80d002") },
  { id: "fd-6",  title: "Family Deal 6",  titleUr: "فیملی ڈیل 6",  items: ["2 Medium Pizzas","20 Wings",      "2 Ltr Drink"],  price: 2490, originalPrice: 3090, category: "family-deals", image: img("photo-1604382354936-07c5d9983bd3") },
  { id: "fd-7",  title: "Family Deal 7",  titleUr: "فیملی ڈیل 7",  items: ["1 Large Pizza",  "10 Wings",      "2 Platters",    "1.5 Ltr Drink"], price: 1990, originalPrice: 2490, category: "family-deals", image: img("photo-1571407970349-bc81e7e96d47") },
  { id: "fd-8",  title: "Family Deal 8",  titleUr: "فیملی ڈیل 8",  items: ["2 Platters",     "10 Wings",      "1.5 Ltr Drink"], price: 1490, originalPrice: 1890, category: "family-deals", image: img("photo-1601924582970-9238bcb495d9") },
  { id: "fd-9",  title: "Family Deal 9",  titleUr: "فیملی ڈیل 9",  items: ["4 Wraps",        "4 Wings",       "1.5 Ltr Drink"], price: 1290, originalPrice: 1690, category: "family-deals", image: img("photo-1561758033-d89a9ad46330") },
  { id: "fd-10", title: "Family Deal 10", titleUr: "فیملی ڈیل 10", items: ["1 Large Pizza",  "2 Platters",    "2 Ltr Drink"],  price: 2090, originalPrice: 2590, category: "family-deals", image: img("photo-1593504049359-74330189a345") },
  { id: "fd-11", title: "Family Deal 11", titleUr: "فیملی ڈیل 11", items: ["3 Medium Pizzas","2 Ltr Drink"],  price: 2290, originalPrice: 2890, category: "family-deals", image: img("photo-1571997478779-2adcbbe9ab2f") },
  { id: "fd-12", title: "Family Deal 12", titleUr: "فیملی ڈیل 12", items: ["2 Zinger Burgers","2 Wraps",      "10 Wings",      "1.5 Ltr Drink"], price: 1890, originalPrice: 2390, category: "family-deals", image: img("photo-1568901346375-23c9450c58cd") },
  { id: "fd-13", title: "Family Deal 13", titleUr: "فیملی ڈیل 13", items: ["1 Medium Pizza", "2 Zinger Burgers","1 Platter",  "1.5 Ltr Drink"], price: 1690, originalPrice: 2090, category: "family-deals", image: img("photo-1551782450-a2132b4ba21d") },
  { id: "fd-14", title: "Family Deal 14", titleUr: "فیملی ڈیل 14", items: ["2 Platters",     "2 Wraps",       "10 Wings",      "1.5 Ltr Drink"], price: 1790, originalPrice: 2290, category: "family-deals", image: img("photo-1571091718767-18b5b1457add") },
  { id: "fd-15", title: "Family Deal 15", titleUr: "فیملی ڈیل 15", items: ["1 Large Pizza",  "2 Platters",    "2 Ltr Drink",   "Dessert"],       price: 2590, originalPrice: 3190, category: "family-deals", image: img("photo-1550547660-d9450f859349") },
  { id: "fd-16", title: "Family Deal 16", titleUr: "فیملی ڈیل 16", items: ["2 Large Pizzas", "20 Wings",      "2 Ltr Drink"],  price: 2790, originalPrice: 3490, category: "family-deals", image: img("photo-1607013251379-e6eecfffe234") },
  { id: "fd-17", title: "Family Deal 17", titleUr: "فیملی ڈیل 17", items: ["3 Large Pizzas", "2 Platters",    "2 Ltr Drink"],  price: 2980, originalPrice: 3690, tag: "Top Value", category: "family-deals", image: img("photo-1565299624946-b28f40a0ae38") },

  // One-Man-Show
  { id: "oms-1", title: "One-Man 1", titleUr: "سنگل 1", items: ["1 Small Pizza",   "1 Regular Drink", "1 Small Fries"], price: 690, category: "one-man-show", image: img("photo-1513104890138-7c749659a591") },
  { id: "oms-2", title: "One-Man 2", titleUr: "سنگل 2", items: ["1 Wrap (CC)",     "1 Regular Drink", "1 Small Fries"], price: 470, category: "one-man-show", image: img("photo-1561758033-d89a9ad46330") },
  { id: "oms-3", title: "One-Man 3", titleUr: "سنگل 3", items: ["1 Zinger Burger", "1 Small Fries",  "1 Regular Drink"], price: 490, category: "one-man-show", image: img("photo-1571091718767-18b5b1457add") },
  { id: "oms-4", title: "One-Man 4", titleUr: "سنگل 4", items: ["1 Reggy Burger",  "1 Regular Drink", "1 Reg Fries"],   price: 440, category: "one-man-show", image: img("photo-1572802419224-296b0aeee0d9") },
  { id: "oms-5", title: "One-Man 5", titleUr: "سنگل 5", items: ["5 Crispy Wings",  "5 Usama BBQ Wings","1 Regular Drink"], price: 1290, tag: "Wing Lover", category: "one-man-show", image: img("photo-1567620832903-9fc6debc209f") },
  { id: "oms-6", title: "One-Man 6", titleUr: "سنگل 6", items: ["1 Platter",       "1 Regular Drink", "1 Red V. Pastry","1 Sauce"], price: 440, category: "one-man-show", image: img("photo-1488477181946-6428a0291777") },

  // Couple Treats
  { id: "ct-1", title: "Couple Treat 1", titleUr: "کپل 1", items: ["1 Pasta F1", "2 Zinger Shawarma", "500 ml Drink"], price: 940, category: "couple-treats", image: img("photo-1551183053-bf91a1d81141") },
  { id: "ct-2", title: "Couple Treat 2", titleUr: "کپل 2", items: ["2 Zinger Burger", "2 Red Velvet Pastry", "2 Regular Drink"], price: 880, tag: "Best Value", category: "couple-treats", image: img("photo-1568901346375-23c9450c58cd") },
  { id: "ct-3", title: "Couple Treat 3", titleUr: "کپل 3", items: ["2 Tower Burger", "2 Ice Cream Shake"], price: 1380, tag: "Premium", category: "couple-treats", image: img("photo-1606755962773-d324e0a13086") },
  { id: "ct-4", title: "Couple Treat 4", titleUr: "کپل 4", items: ["2 Wraps (CC)", "500 ml Drink"], price: 549, category: "couple-treats", image: img("photo-1633321702518-7feccafb94d5") },
];

/* ---------------- HELPERS ---------------- */

export const getCategory = (id: CategoryId): Category | undefined =>
  categories.find((c) => c.id === id);

export const getItemsByCategory = (id: CategoryId): MenuItem[] =>
  menuItems.filter((i) => i.category === id);

export const getDealsByCategory = (id: CategoryId): Deal[] =>
  deals.filter((d) => d.category === id);

/** Curated subset of deals for the marquee on the home page. */
export const featuredDealIds = [
  "bd-4", // Birthday Grand
  "ct-3", // Couple Treat 3 (premium)
  "fd-17", // Family Deal 17 (top value)
  "oms-3", // One-Man 3 (popular)
  "bd-2", // Birthday Classic
];

export const getFeaturedDeals = (): Deal[] =>
  featuredDealIds
    .map((id) => deals.find((d) => d.id === id))
    .filter((d): d is Deal => Boolean(d));
