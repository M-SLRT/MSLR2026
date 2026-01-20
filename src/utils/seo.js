// src/utils/seo.js

/**
 * Generates structured data for the website (JSON-LD)
 * @returns {Object} JSON-LD structured data object
 */
export function generateStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "MSLR 2026 - 1st Multimodal Sign Language Recognition Workshop",
    description:
      "IEEE/CVF CVPR 2026 1st Workshop on Multimodal Sign Language Recognition",
    startDate: "2026-10-20T08:30:00-10:00",
    endDate: "2026-10-20T18:15:00-10:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "CVPR 2026 Conference Venue",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Denver",
        addressRegion: "Hawaii",
        addressCountry: "USA",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "MSLR 2026 Organizing Committee",
      url: "https://Multimodal-Sign-Language-Recognition.github.io/MSLR-2026",
    },
    offers: {
      "@type": "Offer",
      url: "https://Multimodal-Sign-Language-Recognition.github.io/MSLR-2026/#registration",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      validFrom: "2026-05-12",
    },
    performer: [
      {
        "@type": "Person",
        name: "Prof. Richard Bowden",
        affiliation: "University of Surrey, UK",
      },
      {
        "@type": "Person",
        name: "Dr. Oscar Koller",
        affiliation: "Microsoft Inc., USA",
      },
      {
        "@type": "Person",
        name: "Dr. Leon Sigal",
        affiliation: "University of British Columbia, Canada",
      },
    ],
    about: {
      "@type": "Thing",
      name: "Sign Language Recognition",
      description:
        "Research and technologies for recognizing and translating sign languages",
    },
  };

  return structuredData;
}

/**
 * Generates Open Graph meta tags for the page
 * @param {Object} params - Parameters for OG tags
 * @returns {Array} Array of OG meta objects
 */
export function generateOpenGraphTags({
  title = "MSLR 2026 | 1st Multimodal Sign Language Recognition Workshop",
  description = "CVPR 2026 1st Workshop on Multimodal Sign Language Recognition in Denver, Colorado",
  imageUrl = "/src/assets/images/logo_small.jpeg",
  url = "https://Multimodal-Sign-Language-Recognition.github.io/MSLR-2026",
  type = "website",
} = {}) {
  return [
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: imageUrl },
    { property: "og:url", content: url },
    { property: "og:type", content: type },
    { property: "og:site_name", content: "1st MSLR 2026 Workshop" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
  ];
}

/**
 * Creates canonical URL for current page
 * @param {string} basePath - Base website URL
 * @param {string} path - Current page path
 * @returns {string} - Canonical URL
 */
export function getCanonicalUrl(
  basePath = "https://Multimodal-Sign-Language-Recognition.github.io/MSLR-2026",
  path = "",
) {
  // Remove trailing slash from base and leading slash from path
  const baseWithoutTrailingSlash = basePath.replace(/\/$/, "");
  const pathWithoutLeadingSlash = path.replace(/^\//, "");

  // Join with a single slash
  return `${baseWithoutTrailingSlash}/${pathWithoutLeadingSlash}`.replace(
    /\/$/,
    "",
  );
}

/**
 * Generates meta tags for robots/crawlers
 * @param {Object} params - Parameters
 * @returns {Array} - Array of meta objects
 */
export function generateRobotsMeta({
  index = true,
  follow = true,
  archive = true,
  snippet = true,
} = {}) {
  const directives = [];

  if (!index) directives.push("noindex");
  if (!follow) directives.push("nofollow");
  if (!archive) directives.push("noarchive");
  if (!snippet) directives.push("nosnippet");

  // Default to index, follow if no restrictions
  const content =
    directives.length > 0 ? directives.join(", ") : "index, follow";

  return [
    { name: "robots", content },
    { name: "googlebot", content },
  ];
}
