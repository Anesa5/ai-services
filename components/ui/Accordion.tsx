"use client";
import { useState } from "react";

export default function Accordion({ items }: { items: { q: string; a: string }[] }) {
    const [open, setOpen] = useState<number | null>(0);
    return (
        <div className="divide-y divide-beige rounded-xl border border-beige bg-white">
            {items.map((item, i) => {
                const isOpen = open === i;
                return (
                    <div key={i}>
                        <button
                            onClick={() => setOpen(isOpen ? null : i)}
                            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                            aria-expanded={isOpen}
                            aria-controls={`panel-${i}`}
                            id={`trigger-${i}`}
                        >
                            <span className="font-display text-base font-semibold text-charcoal">{item.q}</span>
                            <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-colors ${isOpen ? "border-burgundy bg-burgundy text-cream-light" : "border-beige text-charcoal"}`}>
                                <svg width="12" height="12" viewBox="0 0 12 12" className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
                                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" fill="none" />
                                </svg>
                            </span>
                        </button>
                        <div
                            id={`panel-${i}`}
                            role="region"
                            aria-labelledby={`trigger-${i}`}
                            hidden={!isOpen}
                            className="px-6 pb-5"
                        >
                            <p className="prose-editorial">{item.a}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}