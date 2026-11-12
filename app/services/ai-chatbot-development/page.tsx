import type { Metadata } from "next";
import { getService } from "@/lib/data/services";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { notFound } from "next/navigation";

const service = getService("ai-chatbot-development");

export const metadata: Metadata = service ? {
    title: `${service.title} — Custom AI Assistants for Business`,
    description: service.shortDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: service.title, description: service.shortDescription },
} : {};

export default function Page() {
    if (!service) return notFound();
    return <ServicePageTemplate service={service} />;
}