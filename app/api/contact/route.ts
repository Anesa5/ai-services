import { NextResponse } from "next/server";

// Simple in-memory rate limit for spam protection (replace with Redis in production)
const rateMap = new Map<string, { count: number; ts: number }>();
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

export async function POST(req: Request) {
    try {
        const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
        const now = Date.now();
        const entry = rateMap.get(ip);
        if (!entry || now - entry.ts > WINDOW_MS) rateMap.set(ip, { count: 1, ts: now });
        else if (++entry.count > MAX_REQUESTS) return NextResponse.json({ error: "Too many requests" }, { status: 429 });

        const data = await req.json();
        if (data.honeypot) return NextResponse.json({ ok: true }); // silently accept bot submissions

        // Validate
        const { name, email, company, service, details } = data;
        if (!name || !email || !company || !service || !details) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // TODO: Integrate real delivery — e.g., Resend, SendGrid, HubSpot forms API.
        // Example:
        // await fetch("https://api.resend.com/emails", { ... });
        console.log("[contact] new submission:", { name, email, company, service });

        return NextResponse.json({ ok: true });
    } catch {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
}