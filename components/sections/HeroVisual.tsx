export default function HeroVisual() {
    return (
        <div className="relative mx-auto w-full max-w-lg" aria-hidden="true">
            {/* Glowing background effect */}
            <div className="absolute inset-0 -z-10 rounded-full bg-burgundy/20 blur-3xl" />

            {/* Main Dashboard Card */}
            <div className="rounded-2xl border border-beige bg-white/80 backdrop-blur-xl p-6 shadow-lift">
                <div className="flex items-center justify-between border-b border-beige pb-4">
                    <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-burgundy" />
                        <span className="text-xs font-semibold uppercase tracking-widest text-charcoal">Business Growth</span>
                    </div>
                    <span className="rounded-full bg-burgundy/10 px-2.5 py-1 text-[10px] font-bold text-burgundy">Powered by AI</span>
                </div>

                {/* Fake Graph Area */}
                <div className="mt-6 flex h-32 items-end gap-3 border-b border-beige pb-2">
                    {[40, 60, 45, 80, 65, 100, 85].map((height, i) => (
                        <div key={i} className="relative flex-1 group">
                            <div
                                className="w-full rounded-t-sm bg-gradient-to-t from-burgundy/40 to-burgundy transition-all duration-500 group-hover:from-burgundy group-hover:to-burgundy-deep"
                                style={{ height: `${height}%` }}
                            />
                        </div>
                    ))}
                </div>

                {/* Floating Metrics */}
                <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-between rounded-lg bg-cream-light p-3">
                        <div className="flex items-center gap-3">
                            <span className="grid h-8 w-8 place-items-center rounded-md bg-charcoal text-cream-light">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                            </span>
                            <div>
                                <div className="text-xs font-bold text-charcoal">Automate Smarter</div>
                                <div className="text-[10px] text-charcoal/60">Workflows optimized</div>
                            </div>
                        </div>
                        <span className="text-xs font-bold text-burgundy">+124%</span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg bg-cream-light p-3">
                        <div className="flex items-center gap-3">
                            <span className="grid h-8 w-8 place-items-center rounded-md bg-burgundy text-cream-light">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            </span>
                            <div>
                                <div className="text-xs font-bold text-charcoal">Generate More Leads</div>
                                <div className="text-[10px] text-charcoal/60">New pipeline created</div>
                            </div>
                        </div>
                        <span className="text-xs font-bold text-burgundy">+85%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}