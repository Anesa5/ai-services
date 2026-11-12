import Link from "next/link";
import type { Service } from "@/lib/data/services";
import Accordion from "@/components/ui/Accordion";
import Reveal from "@/components/ui/Reveal";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export default function ServicePageTemplate({ service }: { service: Service }) {
    return (
        <>
            {/* HERO */}
            <section className="relative overflow-hidden bg-cream-light pt-10 pb-20 lg:pb-28">
                <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: service.title }]} />
                <div className="container-editorial">
                    <span className="eyebrow">{service.title}</span>
                    <h1 className="mt-5 max-w-4xl text-display-lg">{service.heroHeadline}</h1>
                    <p className="prose-editorial mt-6 text-lg">{service.heroSubhead}</p>
                    <div className="mt-9 flex flex-wrap gap-3">
                        <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
                        <Link href="#capabilities" className="btn-secondary">See Capabilities</Link>
                    </div>
                </div>
            </section>

            {/* CHALLENGES */}
            <section className="bg-white py-20">
                <div className="container-editorial">
                    <h2 className="text-display-md">The Challenges We Solve.</h2>
                    <div className="mt-12 grid gap-5 md:grid-cols-2">
                        {service.challenges.map((c, i) => (
                            <Reveal key={c.title} delay={i * 60}>
                                <div className="card p-7">
                                    <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-burgundy">Challenge</div>
                                    <h3 className="font-display text-lg font-semibold">{c.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{c.body}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SOLUTIONS */}
            <section className="bg-cream py-20">
                <div className="container-editorial">
                    <h2 className="text-display-md">How We Solve It.</h2>
                    <div className="mt-12 grid gap-5 md:grid-cols-2">
                        {service.solutions.map((s, i) => (
                            <Reveal key={s.title} delay={i * 60}>
                                <div className="flex h-full gap-4 rounded-xl border border-beige bg-white p-7 shadow-soft">
                                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-burgundy text-cream-light font-display text-sm font-bold">{String(i + 1).padStart(2, "0")}</div>
                                    <div>
                                        <h3 className="font-display text-base font-semibold">{s.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{s.body}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section id="capabilities" className="bg-white py-20">
                <div className="container-editorial">
                    <h2 className="text-display-md">Key Capabilities.</h2>
                    <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {service.features.map((f) => (
                            <li key={f} className="flex items-start gap-3 rounded-lg border border-beige bg-cream-light px-5 py-4">
                                <svg width="16" height="16" viewBox="0 0 16 16" className="mt-0.5 shrink-0 text-burgundy"><path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.8" fill="none" /></svg>
                                <span className="text-sm font-medium text-charcoal">{f}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* USE CASES */}
            <section className="bg-cream py-20">
                <div className="container-editorial">
                    <h2 className="text-display-md">Practical Use Cases.</h2>
                    <div className="mt-12 grid gap-5 md:grid-cols-2">
                        {service.useCases.map((u) => (
                            <div key={u.title} className="card p-7">
                                <h3 className="font-display text-base font-semibold text-burgundy">{u.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{u.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="bg-white py-20">
                <div className="container-editorial grid gap-12 lg:grid-cols-[1fr_1.2fr]">
                    <div>
                        <h2 className="text-display-md">Business Benefits.</h2>
                        <p className="prose-editorial mt-4">Outcomes our clients care about — measured in operations, customer experience, and growth.</p>
                    </div>
                    <ul className="space-y-4">
                        {service.benefits.map((b) => (
                            <li key={b} className="flex items-start gap-3 border-b border-beige pb-4 last:border-0">
                                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-burgundy text-cream-light">
                                    <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l2.5 2.5L10 3" stroke="currentColor" strokeWidth="1.7" fill="none" /></svg>
                                </span>
                                <span className="text-sm font-medium text-charcoal/85">{b}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="bg-charcoal py-20">
                <div className="container-editorial">
                    <h2 className="text-display-md text-cream-light">How It Works.</h2>
                    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
                        {service.process.map((p, i) => (
                            <div key={p.title} className="rounded-xl border border-cream-light/10 bg-white/5 p-5">
                                <div className="font-display text-xs font-semibold text-burgundy">{String(i + 1).padStart(2, "0")}</div>
                                <h3 className="mt-2 font-display text-base font-semibold text-cream-light">{p.title}</h3>
                                <p className="mt-2 text-xs leading-relaxed text-cream-light/60">{p.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INTEGRATIONS */}
            <section className="bg-white py-20">
                <div className="container-editorial">
                    <h2 className="text-display-md">Relevant Integrations.</h2>
                    <div className="mt-8 flex flex-wrap gap-2">
                        {service.integrations.map((t) => (
                            <span key={t} className="rounded-md border border-beige bg-cream-light px-3 py-1.5 text-sm font-medium text-charcoal/80">{t}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* INDUSTRIES */}
            <section className="bg-cream py-20">
                <div className="container-editorial">
                    <h2 className="text-display-md">Industries We Apply This To.</h2>
                    <div className="mt-8 flex flex-wrap gap-2">
                        {service.industries.map((ind) => (
                            <Link key={ind} href="/industries" className="rounded-full border border-beige bg-white px-4 py-2 text-sm font-medium text-charcoal/80 hover:border-burgundy hover:text-burgundy">{ind}</Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-white py-20">
                <div className="container-editorial">
                    <h2 className="text-display-md">Frequently Asked.</h2>
                    <div className="mt-10 max-w-3xl">
                        <Accordion items={service.faqs} />
                    </div>
                </div>
            </section>

            {/* RELATED + CTA */}
            <section className="bg-charcoal py-20">
                <div className="container-editorial text-center">
                    <h2 className="mx-auto max-w-2xl text-display-lg text-cream-light">
                        Ready to put {service.title.toLowerCase()} to work for your business?
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-cream-light/70">
                        Book a free consultation and we will map the highest-impact opportunities for your situation.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <Link href="/contact" className="btn-primary">Book Your Free Consultation</Link>
                    </div>
                </div>
            </section>
        </>
    );
}