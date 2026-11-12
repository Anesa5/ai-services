import Link from "next/link";
import type { Service } from "@/lib/data/services";

export default function ServiceCard({ service }: { service: Service }) {
    return (
        <article className="card card-hover group flex flex-col p-7">
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-cream text-burgundy">
                <ServiceIcon name={service.icon} />
            </div>
            <h3 className="font-display text-lg font-semibold text-charcoal">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{service.shortDescription}</p>
            <ul className="mt-5 space-y-1.5 text-sm text-charcoal/70">
                {service.capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-2">
                        <svg width="14" height="14" viewBox="0 0 14 14" className="mt-1 shrink-0 text-burgundy"><path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="1.6" fill="none" /></svg>
                        {c}
                    </li>
                ))}
            </ul>
            <Link href={`/services/${service.slug}`} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-burgundy group-hover:gap-2.5 transition-all">
                Learn more
                <svg width="14" height="14" viewBox="0 0 14 14"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" fill="none" /></svg>
            </Link>
        </article>
    );
}

function ServiceIcon({ name }: { name: string }) {
    const paths: Record<string, string> = {
        chat: "M4 4h16v10H8l-4 4V4z",
        voice: "M5 12a7 7 0 0114 0M9 12a3 3 0 016 0M12 15v3",
        automate: "M4 7h12l-3-3M20 17H8l3 3",
        crm: "M4 6h16v12H4zM8 10h8M8 14h5",
        ai: "M8 8h8v8H8zM12 2v4M12 18v4M2 12h4M18 12h4",
        web: "M3 5h18v14H3zM3 9h18M7 14h4",
        mobile: "M8 3h8v18H8zM11 18h2",
        marketing: "M3 11l14-6v14L3 13v-2zM17 8a4 4 0 010 8",
        seo: "M11 4a7 7 0 107 7M16 16l4 4",
    };
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d={paths[name] ?? paths.ai} />
        </svg>
    );
}