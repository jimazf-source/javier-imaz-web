import type { MetadataRoute } from "next";
import { books, news, siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/libros", "/autor", "/bitacora", "/noticias", "/contacto", "/privacidad"];
  return [
    ...pages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...books.map((book) => ({
      url: `${siteConfig.url}${book.href}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...news.map((item) => ({
      url: `${siteConfig.url}/noticias/${item.slug}`,
      lastModified: item.date,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
