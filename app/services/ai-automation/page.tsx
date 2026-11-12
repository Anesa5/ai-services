import type { Metadata } from "next";
import { getService } from "@/lib/data/services";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { notFound } from "next/navigation";

const service = getService("ai-automation");

export const metadata: Metadata = service ? {
    title: `${service.title} — Business Automation`,
    description: service.shortDescription,
} : {};

export default function Page() {
    if (!service) return notFound();
    return <ServicePageTemplate service={service} />;
}