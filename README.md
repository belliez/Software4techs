# Software4Techs

Next.js storefront deployed as a static export to Firebase Hosting. The repository contains public marketing material only. Product binaries, credentials and customer records belong outside it.

## Development

Use Node 24, run `npm ci`, then `npm run dev`. Before release run `npm run build` and `npm run check`. Changes to main build, verify and publish to Firebase in GitHub Actions with short-lived Google credentials.

## Product delivery

Attach the paid release inside the buyer-only Technician Toolbox product on Whop. Check access with an entitled account and a signed-out browser before opening sales.

The standard Whop plan is a £49 one-time purchase. Its product-specific code `TOOLBOX29` deducts £20 through Cyber Monday, 30 November 2026. The storefront adds the code to the checkout link until midnight UK time and then uses the standard link. The Whop code also has its own expiry. Confirm the customer total in Whop when changing tax settings or prices.

To open sales, take the product off waitlist after adding the release, set the public GitHub Actions variable `TOOLBOX_CHECKOUT` to the standard Whop checkout URL and run the hosting workflow. Leaving the variable empty displays release information without a buy button. The website never handles an installer or a customer's OpenAI key. `IPOS_CHECKOUT` optionally enables a separate iPos checkout.

The public updater for previous Toolbox editions is separate. Keep paid builds out of that feed until updates check the customer’s licence. A Whop purchase controls file access; in-app activation requires the app’s licence integration.
