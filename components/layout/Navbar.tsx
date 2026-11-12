"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { services } from "@/lib/data/services";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setServicesOpen(false);
            }
        };
        document.addEventListener("mousedown", onClick);
        return () => document.removeEventListener("mousedown", onClick);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-beige bg-cream-light/90 backdrop-blur-lg" : "bg-transparent"
                }`}
        >
            <nav className="container-editorial flex h-20 items-center justify-between">
                <Link href="/" className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-charcoal">
                    <span className="grid h-8 w-8 place-items-center rounded-md bg-burgundy text-cream-light text-sm font-bold">A</span>
                    Aurelius<span className="text-burgundy">AI</span>
                </Link>

                <div className="hidden items-center gap-8 lg:flex">
                    <Link href="/" className="text-sm font-medium text-charcoal/80 hover:text-burgundy">Home</Link>

                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setServicesOpen((v) => !v)}
                            className="flex items-center gap-1 text-sm font-medium text-charcoal/80 hover:text-burgundy"
                            aria-expanded={servicesOpen}
                        >
                            Services
                            <svg width="12" height="12" viewBox="0 0 12 12" className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}>
                                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                            </svg>
                        </button>
                        {servicesOpen && (
                            <div className="absolute left-1/2 top-full mt-3 w-[640px] -translate-x-1/2 rounded-xl border border-beige bg-white p-3 shadow-lift">
                                <div className="grid grid-cols-2 gap-1">
                                    {services.map((s) => (
                                        <Link
                                            key={s.slug}
                                            href={`/services/${s.slug}`}
                                            onClick={() => setServicesOpen(false)}
                                            className="rounded-lg px-3 py-2.5 hover:bg-cream-light"
                                        >
                                            <div className="text-sm font-semibold text-charcoal">{s.title}</div>
                                            <div className="mt-0.5 line-clamp-2 text-xs text-charcoal/60">{s.shortDescription}</div>
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-2 border-t border-beige pt-2">
                                    <Link href="/services" onClick={() => setServicesOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-semibold text-burgundy hover:bg-cream-light">
                                        View all services →
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                    <Link href="/industries" className="text-sm font-medium text-charcoal/80 hover:text-burgundy">Industries</Link>
                    <Link href="/about" className="text-sm font-medium text-charcoal/80 hover:text-burgundy">About Us</Link>
                    <Link href="/process" className="text-sm font-medium text-charcoal/80 hover:text-burgundy">Our Process</Link>
                    <Link href="/contact" className="text-sm font-medium text-charcoal/80 hover:text-burgundy">Contact</Link>
                </div>

                <div className="hidden lg:block">
                    <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
                </div>

                <button className="lg:hidden p-2" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={mobileOpen}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        {mobileOpen
                            ? <path d="M6 6l12 12M18 6L6 18" stroke="#231F1D" strokeWidth="1.6" />
                            : <><path d="M4 7h16M4 12h16M4 17h16" stroke="#231F1D" strokeWidth="1.6" /></>}
                    </svg>
                </button>
            </nav>

            {mobileOpen && (
                <div className="border-t border-beige bg-cream-light lg:hidden">
                    <div className="container-editorial flex flex-col gap-1 py-4">
                        <Link href="/" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium">Home</Link>
                        <button
                            onClick={() => setMobileServicesOpen((v) => !v)}
                            className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium"
                            aria-expanded={mobileServicesOpen}
                        >
                            Services
                            <svg width="12" height="12" viewBox="0 0 12 12" className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}>
                                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                            </svg>
                        </button>
                        {mobileServicesOpen && (
                            <div className="pl-6">
                                {services.map((s) => (
                                    <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setMobileOpen(false)} className="block rounded-md py-2 text-sm text-charcoal/70">
                                        {s.title}
                                    </Link>
                                ))}
                            </div>
                        )}
                        <Link href="/industries" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium">Industries</Link>
                        <Link href="/about" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium">About Us</Link>
                        <Link href="/process" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium">Our Process</Link>
                        <Link href="/contact" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium">Contact</Link>
                        <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary mt-3 w-full">Book a Free Consultation</Link>
                    </div>
                </div>
            )}
        </header>
    );
}