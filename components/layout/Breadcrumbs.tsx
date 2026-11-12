import Link from "next/link";

export default function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
    return (
        <nav aria-label="Breadcrumb" className="container-editorial mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-charcoal/50">
                <li><Link href="/" className="hover:text-burgundy">Home</Link></li>
                {items.map((item, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                        <span>/</span>
                        {item.href ? <Link href={item.href} className="hover:text-burgundy">{item.label}</Link> : <span className="text-charcoal/70">{item.label}</span>}
                    </li>
                ))}
            </ol>
        </nav>
    );
}