import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
    title: "Our Process — From Strategy to Execution",
    description: "A clear, transparent path from strategy to execution. Learn how we discover, strategize, develop, launch, and scale technology solutions for your business.",
};

const steps = [
    {
        n: "01",
        t: "Discover",
        d: "We start by understanding your business goals, current challenges, and existing technology stack. No assumptions — we ask the right questions to find the real friction points.",
        items: ["Stakeholder interviews", "Workflow mapping", "Technology audit"]
    },
    {
        n: "02",
        t: "Strategize",
        d: "We identify the highest-impact opportunities and create a clear, prioritized roadmap. You'll know exactly what we're building, why we're building it, and how success will be measured.",
        items: ["Use case prioritization", "ROI estimation", "Solution architecture"]
    },
    {
        n: "03",
        t: "Develop",
        d: "Our team designs, builds, and integrates the solution. We work in transparent sprints, keeping you updated and involved throughout the process — no black boxes.",
        items: ["UI/UX design", "Custom development", "System integration"]
    },
    {
        n: "04",
        t: "Launch",
        d: "We deploy your new system in a controlled, low-risk manner. We test thoroughly, train your team, and ensure everything works exactly as expected before full rollout.",
        items: ["Quality assurance", "Team training", "Go-live support"]
    },
    {
        n: "05",
        t: "Scale",
        d: "Technology is never static. We monitor performance, gather real-world data, and continuously optimize the system to ensure it grows alongside your business.",
        items: ["Performance monitoring", "Ongoing optimization", "Feature expansion"]
    },
];

export default function ProcessPage() {
    return (
        <>
            {/* HERO */}
            <section className="bg-cream-light py-20 lg:py-28">
                <div className="container-editorial">
                    <span className="eyebrow">Our Process</span>
                    <h1 className="mt-4 max-w-4xl text-display-lg">
                        A Clear Path from Strategy to Execution.
                    </h1>
                    <p className="prose-editorial mt-6 text-lg">
                        We do not believe in big reveal technology projects. Our process is transparent, collaborative,
                        and built to deliver measurable value at every stage.
                    </p>
                </div>
            </section>

            {/* PROCESS STEPS */}
            <section className="bg-white py-20 lg:py-28">
                <div className="container-editorial">
                    <div className="mx-auto max-w-4xl">
                        {steps.map((step, i) => (
                            <Reveal key={step.n} delay={i * 60}>
                                <div className="relative flex gap-8 pb-16 last:pb-0">
                                    {/* Line */}
                                    {i !== steps.length - 1 && (
                                        <div className="absolute left-[27px] top-14 bottom-0 w-px bg-beige" />
                                    )}

                                    {/* Number circle */}
                                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-burgundy bg-cream-light font-display text-lg font-bold text-burgundy">
                                        {step.n}
                                    </div>

                                    {/* Content */}
                                    <div className="pt-2">
                                        <h2 className="font-display text-2xl font-semibold text-charcoal">{step.t}</h2>
                                        <p className="mt-3 max-w-2xl text-base leading-relaxed text-charcoal/70">
                                            {step.d}
                                        </p>
                                        <ul className="mt-6 flex flex-wrap gap-3">
                                            {step.items.map((item) => (
                                                <li key={item} className="rounded-md border border-beige bg-cream-light px-3 py-1.5 text-xs font-medium text-charcoal/80">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-charcoal py-20 lg:py-28">
                <div className="container-editorial text-center">
                    <Reveal>
                        <h2 className="mx-auto max-w-3xl text-display-lg text-cream-light">
                            Ready to start the process?
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-cream-light/70">
                            Every successful project starts with a conversation. Book a free consultation to discuss your goals.
                        </p>
                        <div className="mt-9 flex justify-center">
                            <Link href="/contact" className="btn-primary !bg-burgundy hover:!bg-burgundy-deep">
                                Book Your Free Consultation
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}