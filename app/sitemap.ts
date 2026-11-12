import type { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = siteConfig.url;
    const staticRoutes = ["", "/services", "/industries", "/about", "/process", "/contact", "/privacy", "/terms"].map((p) => ({
        url: `${base}${p}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: p === "" ? 1 : 0.8,
    }));
    const serviceRoutes = services.map((s) => ({
        url: `${base}/services/${s.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    }));
    return [...staticRoutes, ...serviceRoutes];
}