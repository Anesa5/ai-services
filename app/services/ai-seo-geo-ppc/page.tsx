import type { Metadata } from "next";
import { getService } from "@/lib/data/services";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { notFound } from "next/navigation";

const service = getService("ai-seo-geo-ppc");

export const metadata: Metadata = service ? {
    title: `${service.title} — SEO & PPC`,
    description: service.shortDescription,
} : {};

export default function Page() {
    if (!service) return notFound();
    return <ServicePageTemplate service={service} />;
}