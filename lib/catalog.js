export const domain = "https://software4techs.com";
export const crm = "https://repairshopcrm.com/";
export const crmSignup = crm + "auth";
export const crmPricing = crm + "#pricing";
export const customContact = "https://paulbetteridge.com/contact";
export const legacy = "https://computerrepairshopsoftware.com/";
export const iposFree = legacy + "shop/ipos/";
export const account = "https://computerrepairshopsoftware.com/my-account/";
export const support = "https://computerrepairshopsoftware.com/support/";
export const offersEnd = Date.parse("2026-12-01T00:00:00Z");

// These are public checkout links. Paid binaries belong in the customer's Whop Files area.
function checkout(value) {
  if (!value) return "";
  const link = new URL(value);
  if (
    link.protocol !== "https:" ||
    link.hostname !== "whop.com" ||
    !link.pathname.includes("/checkout/") ||
    link.username ||
    link.password
  ) {
    throw new Error("Expected an HTTPS Whop checkout link");
  }
  return link.href;
}
export const regular = checkout(process.env.NEXT_PUBLIC_TOOLBOX_CHECKOUT);
const discountedCheckout = regular && new URL(regular);
if (discountedCheckout)
  discountedCheckout.searchParams.set("promoCode", "TOOLBOX29");
export const launch = discountedCheckout ? discountedCheckout.href : "";
export const iposCheckout = checkout(process.env.NEXT_PUBLIC_IPOS_CHECKOUT);
