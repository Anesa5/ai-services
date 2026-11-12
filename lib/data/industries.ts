export type Industry = {
    slug: string;
    name: string;
    icon: string;
    description: string;
    useCases: string[];
};

export const industries: Industry[] = [
    { slug: "healthcare", name: "Healthcare", icon: "heart", description: "Patient intake, scheduling, and support workflows designed around privacy and care quality.", useCases: ["AI appointment booking", "Patient FAQ assistants", "Automated reminders"] },
    { slug: "retail-fmcg-ecommerce", name: "Retail, FMCG & Ecommerce", icon: "bag", description: "Conversational commerce, product discovery, and automated customer care that scales with order volume.", useCases: ["AI product advisors", "Order status bots", "Cart recovery automation"] },
    { slug: "b2b-b2c", name: "B2B & B2C", icon: "users", description: "Lead capture, qualification, and follow-up systems aligned to both sales cycles.", useCases: ["Lead qualification bots", "CRM automation", "Nurture sequences"] },
    { slug: "real-estate", name: "Real Estate", icon: "home", description: "Buyer and seller engagement, listing matching, and viewing coordination at scale.", useCases: ["Listing match assistants", "Viewing scheduler", "Lead routing to agents"] },
    { slug: "construction-home-services", name: "Construction & Home Services", icon: "tools", description: "Quote intake, job scheduling, and customer updates without adding admin overhead.", useCases: ["Estimate intake forms", "Job status notifications", "Review requests"] },
    { slug: "travel-hospitality", name: "Travel, Tours & Hospitality", icon: "plane", description: "Booking support, itinerary answers, and multilingual guest care across channels.", useCases: ["Booking assistants", "Multilingual guest support", "Upsell automation"] },
    { slug: "manufacturing", name: "Manufacturing", icon: "factory", description: "Order processing, supplier communication, and internal operations automation.", useCases: ["Order intake automation", "Supplier email routing", "Document processing"] },
    { slug: "small-business", name: "Small Business", icon: "store", description: "Accessible, high-impact automation and digital tools sized for lean teams.", useCases: ["Website + booking setup", "AI customer support", "Google presence optimization"] },
    { slug: "trading", name: "Trading", icon: "chart", description: "Inquiry handling, document workflows, and operational automation for trading teams.", useCases: ["RFQ intake automation", "Document workflows", "Lead management"] },
    { slug: "energy", name: "Energy", icon: "bolt", description: "Customer onboarding, service requests, and operational data workflows.", useCases: ["Onboarding automation", "Service request triage", "Reporting automation"] },
    { slug: "tech-saas-it", name: "Tech, SaaS & IT Services", icon: "code", description: "Support deflection, onboarding automation, and growth-ready digital experiences.", useCases: ["Support assistants", "Trial onboarding automation", "Product-led growth funnels"] },
    { slug: "media", name: "Media", icon: "play", description: "Content discovery, audience engagement, and workflow automation for content teams.", useCases: ["Content recommendation", "Audience support bots", "Publishing workflow automation"] },
    { slug: "finance-legal-professional", name: "Finance, Legal & Professional Services", icon: "scale", description: "Client intake, document workflows, and confidentiality-aware engagement automation.", useCases: ["Client intake bots", "Document workflows", "Consultation scheduling"] },
];