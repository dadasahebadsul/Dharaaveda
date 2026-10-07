import { useEffect } from "react";

interface SeoOptions {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  image?: string;
}

export function useSeo({
  title,
  description,
  keywords,
  canonical,
  image,
}: SeoOptions) {
  useEffect(() => {
    // Page title
    if (title) {
      document.title = title;
    }

    // Helper function for meta tags
    const setMetaTag = (
      attribute: "name" | "property",
      key: string,
      content?: string
    ) => {
      if (!content) return;

      let meta = document.querySelector(
        `meta[${attribute}="${key}"]`
      ) as HTMLMetaElement | null;

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, key);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    // Basic SEO
    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", keywords);
    setMetaTag("name", "robots", "index, follow");

    // Canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector(
        'link[rel="canonical"]'
      ) as HTMLLinkElement | null;

      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }

      canonicalLink.setAttribute("href", canonical);
    }

    // Open Graph
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", canonical);

    if (image) {
      setMetaTag("property", "og:image", image);
    }

    // Twitter / X
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);

    if (image) {
      setMetaTag("name", "twitter:image", image);
    }
  }, [title, description, keywords, canonical, image]);
}
