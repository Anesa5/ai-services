"use client";
import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (typeof IntersectionObserver === "undefined") { setVisible(true); return; }
        const io = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
            { threshold: 0.12 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${visible ? "visible" : ""}`}>
            {children}
        </div>
    );
}