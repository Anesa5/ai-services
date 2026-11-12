import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Privacy policy for Aurelius AI services.",
};

export default function PrivacyPage() {
    return (
        <section className="bg-cream-light py-20 lg:py-28">
            <div className="container-editorial max-w-3xl">
                <span className="eyebrow">Legal</span>
                <h1 className="mt-4 text-display-lg">Privacy Policy</h1>
                <div className="prose-editorial mt-8 space-y-6">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>
                    <h2 className="text-xl font-semibold text-charcoal mt-8 mb-4">1. Information We Collect</h2>
                    <p>We collect information you provide directly to us when you fill out a contact form, request a consultation, or communicate with us. This may include your name, email address, phone number, and company details.</p>

                    <h2 className="text-xl font-semibold text-charcoal mt-8 mb-4">2. How We Use Your Information</h2>
                    <p>We use the information we collect to respond to your inquiries, provide our services, improve our website, and send you updates or marketing communications (which you can opt out of at any time).</p>

                    <h2 className="text-xl font-semibold text-charcoal mt-8 mb-4">3. Data Security</h2>
                    <p>We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or destruction. However, no method of transmission over the internet is 100% secure.</p>

                    <h2 className="text-xl font-semibold text-charcoal mt-8 mb-4">4. Contact Us</h2>
                    <p>If you have questions about this Privacy Policy, please contact us at hello@your-domain.com.</p>
                </div>
            </div>
        </section>
    );
}