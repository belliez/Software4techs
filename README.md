# Software4Techs

Next.js storefront deployed as a static export to Firebase Hosting. The repository contains public marketing material only. Product binaries, credentials and customer records belong outside it.

## Development

Use Node 24, run `npm ci`, then `npm run dev`. Before release run `npm run build` and `npm run check`. Changes to main build, verify and publish to Firebase in GitHub Actions with short-lived Google credentials.

## Product delivery

Upload the signed paid edition to a Whop Files area restricted to its product. Test the buyer account and an account without access before enabling checkout. Configure the £29 launch checkout to expire at 00:00 GMT on 1 December 2026, then use the £49 standard plan. Set public GitHub Actions variables TOOLBOX_LAUNCH_CHECKOUT and TOOLBOX_CHECKOUT to the corresponding Whop checkout URLs and rerun the workflow. Each price needs its own link. The website never handles the installer or any customer's OpenAI key. IPOS_CHECKOUT optionally replaces the legacy iPos product page.

The public updater for previous Toolbox editions is separate. Keep paid builds out of that feed until updates check the customer’s licence. A Whop purchase controls file access; in-app activation requires the app’s licence integration.
