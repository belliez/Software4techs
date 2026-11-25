import { domain } from "../lib/catalog";
export const dynamic = "force-static";
export default function sitemap() {
  return ["/", "/technician-toolbox/", "/ipos/", "/support/"].map((path) => ({
    url: domain + path,
  }));
}
