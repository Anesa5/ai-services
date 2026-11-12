import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions",
    description: "Terms and conditions for Aurelius AI services.",
};

export default function TermsPage() {
    return (
        <section className="bg-cream-light py-20 lg:py-28">
            <div className="container-editorial max-w-3xl">
                <span className="eyebrow">Legal</span>
                <h1 className="mt-4 text-display-lg">Terms & Conditions</h1>
                <div className="prose-editorial mt-8 space-y-6">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>
                    <h2 className="text-xl font-semibold text-charcoal mt-8 mb-4">1. Agreement to Terms</h2>
                    <p>By accessing our website and using our services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.</p>

                    <h2 className="text-xl font-semibold text-charcoal mt-8 mb-4">2. Intellectual Property</h2>
                    <p>The service and its original content, features, and functionality are and will remain the exclusive property of Aurelius AI and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without prior written consent.</p>

                    <h2 className="text-xl font-semibold text-charcoal mt-8 mb-4">3. User Responsibilities</h2>
                    <p>You agree to use our services only for lawful purposes. You are responsible for ensuring that any information you provide is accurate and that you have the necessary rights to share any data or materials with us.</p>

                    <h2 className="text-xl font-semibold text-charcoal mt-8 mb-4">4. Limitation of Liability</h2>
                    <p>In no event shall Aurelius AI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.</p>
                </div>
            </div>
        </section>
    );
}