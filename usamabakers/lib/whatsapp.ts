/**
 * WhatsApp integration — single source of truth.
 * Restaurant contact: 0300 1011955 (PK) → 92 300 1011955 (E.164 without +)
 */

export const PHONE_E164 = "923001011955";
export const PHONE_LOCAL = "0300 1011955";
export const PHONE_DISPLAY = "0300 1011955";

/** Build a wa.me link with the given pre-filled message. */
export const waLink = (message: string): string =>
  `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(message)}`;

/** tel: link for click-to-call. */
export const telLink = (): string => `tel:+${PHONE_E164}`;

/** Friendly greeting used in default WhatsApp message. */
export const DEFAULT_GREETING =
  "Assalam-o-Alaikum! I'd like to place an order at Usama Bakers. Could you share the menu and today's deals, please? 🍕🍔";

/** Build a pre-filled WhatsApp message for a single menu item. */
export const singleItemMessage = (
  name: string,
  qty: number,
  sizeOrNote?: string,
): string => {
  const sizePart = sizeOrNote ? ` (${sizeOrNote})` : "";
  return `Hi Usama Bakers! I'd like to order:\n• ${qty}× ${name}${sizePart}\n\nPlease confirm availability & delivery time. Thank you!`;
};

/** Build a pre-filled WhatsApp message for a deal. */
export const dealMessage = (dealTitle: string, dealPrice: number): string =>
  `Hi Usama Bakers! I'd like to order the **${dealTitle}** deal (PKR ${dealPrice}).\n\nPlease confirm availability & delivery. Thank you!`;

/** Build a multi-line order summary from a cart. */
export const cartMessage = (
  items: Array<{ name: string; qty: number; price: number; note?: string }>,
): string => {
  const lines = items.map((i) => {
    const note = i.note ? ` (${i.note})` : "";
    return `• ${i.qty}× ${i.name}${note} — PKR ${i.qty * i.price}`;
  });
  const total = items.reduce((sum, i) => sum + i.qty * i.price, 0);
  return (
    `Hi Usama Bakers! I'd like to place an order:\n\n` +
    lines.join("\n") +
    `\n\nTotal: PKR ${total}\n\nPlease confirm availability & delivery time. Thank you!`
  );
};
