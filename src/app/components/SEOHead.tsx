import { useEffect } from "react";
import { useLocation } from "react-router";
import { getRouteSeo, sanitizeJsonLd } from "../config/seo";

const JSON_LD_SCRIPT_ID = "geis-jsonld-schema";

function setOrCreateMeta(
  attrName: "name" | "property",
  attrValue: string,
  content: string,
): void {
  let element = document.querySelector<HTMLMetaElement>(
    `meta[${attrName}="${attrValue}"]`,
  );
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setOrCreateCanonical(href: string): void {
  let element = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

function updateJsonLd(jsonLdData: Record<string, unknown>): void {
  let script = document.getElementById(JSON_LD_SCRIPT_ID) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.id = JSON_LD_SCRIPT_ID;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  // AppSec: safe textContent assignment using escaped/sanitized JSON string
  script.textContent = sanitizeJsonLd(jsonLdData);
}

export default function SEOHead() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getRouteSeo(pathname);

    // 1. Page Title
    document.title = seo.title;

    // 2. Standard Meta Tags
    setOrCreateMeta("name", "description", seo.description);
    setOrCreateMeta("name", "keywords", seo.keywords);
    setOrCreateMeta("name", "robots", seo.robots || "index, follow");

    // 3. Geographic Meta Tags (Surakarta, Indonesia)
    setOrCreateMeta("name", "geo.region", "ID-JT");
    setOrCreateMeta("name", "geo.placename", "Surakarta");
    setOrCreateMeta("name", "geo.position", "-7.5539;110.8122");
    setOrCreateMeta("name", "ICBM", "-7.5539, 110.8122");

    // 4. Canonical Link (Locked to https://www.geisccc.my.id)
    setOrCreateCanonical(seo.canonical);

    // 5. Open Graph Meta Tags
    setOrCreateMeta("property", "og:title", seo.ogTitle || seo.title);
    setOrCreateMeta("property", "og:description", seo.ogDescription || seo.description);
    setOrCreateMeta("property", "og:url", seo.canonical);
    setOrCreateMeta("property", "og:image", seo.ogImage);
    setOrCreateMeta("property", "og:type", seo.ogType || "website");
    setOrCreateMeta("property", "og:site_name", "GEIS CCC Solo");
    setOrCreateMeta("property", "og:locale", "id_ID");

    // 6. Twitter Card Meta Tags
    setOrCreateMeta("name", "twitter:card", "summary_large_image");
    setOrCreateMeta("name", "twitter:title", seo.ogTitle || seo.title);
    setOrCreateMeta("name", "twitter:description", seo.ogDescription || seo.description);
    setOrCreateMeta("name", "twitter:image", seo.ogImage);

    // 7. Structured Data (JSON-LD)
    updateJsonLd(seo.jsonLd);
  }, [pathname]);

  return null;
}
