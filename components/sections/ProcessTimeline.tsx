import Reveal from "@/components/ui/Reveal";

const steps = [
    { n: "01", t: "Discover", d: "Understand your business goals and challenges." },
    { n: "02", t: "Strategize", d: "Identify opportunities and create a solution roadmap." },
    { n: "03", t: "Develop", d: "Design, build, and integrate your solution." },
    { n: "04", t: "Launch", d: "Deploy, test, and optimize." },
    { n: "05", t: "Scale", d: "Monitor performance and continuously improve." },
];

export default function ProcessTimeline() {
    return (
        <div className="mt-14">
            {/* Desktop horizontal */}
            <div className="relative hidden lg:block">
                <div className="absolute left-0 right-0 top-7 h-px bg-beige" />
                <div className="relative grid grid-cols-5 gap-6">
                    {steps.map((s, i) => (
                        <Reveal key={s.n} delay={i * 100}>
                            <div className="relative">
                                <div className="grid h-14 w-14 place-items-center rounded-full border-2 border-burgundy bg-cream-light font-display text-sm font-bold text-burgundy">
                                    {s.n}
                                </div>
                                <h3 className="mt-5 font-display text-lg font-semibold">{s.t}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{s.d}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
            {/* Mobile vertical */}
            <div className="space-y-8 lg:hidden">
                {steps.map((s) => (
                    <div key={s.n} className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-burgundy font-display text-sm font-bold text-burgundy">{s.n}</div>
                            <div className="mt-2 h-full w-px flex-1 bg-beige" />
                        </div>
                        <div className="pb-8">
                            <h3 className="font-display text-lg font-semibold">{s.t}</h3>
                            <p className="mt-1 text-sm leading-relaxed text-charcoal/70">{s.d}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}