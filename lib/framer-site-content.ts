export const contactPageContent = {
  badge: "Available for new projects",
  title: "Get in touch",
  intro: [
    "At Bibotecture, we craft your vision into a product end to end — pairing, intuitive design and considered UX with well-tested, production-grade code that ships. We bring domain depth across enterprise SaaS, cybersecurity, AI, Web3, Chrome extensions, and accessibility.",
    "Have a project in mind? Let's create something great together! Book a call or drop a message.",
  ],
  formHeading:
    "Share your idea or questions with us and we'll reply within 1-2 business days!",
  bookCallHref: "https://cal.com/biboswan-roy-mfgllb/15min",
  social: {
    x: {
      href: "https://x.com/Biboswan98",
      icon: {
        src: "https://framerusercontent.com/images/06qdfvYq5fQXbsqScdWfPjZEQWM.svg",
        alt: "X",
      },
    },
    github: {
      href: "http://github.com/Biboswan",
      icon: {
        src: "https://framerusercontent.com/images/UYYFE6nlSc0lHCzZi7aCIsnSWw4.svg",
        alt: "GitHub",
      },
    },
    linkedin: {
      href: "https://www.linkedin.com/company/105943730",
      icon: {
        src: "https://framerusercontent.com/images/t4ytQTVFZqFy4hQN3ATkrOaveD8.svg",
        alt: "LinkedIn",
      },
    },
  },
} as const

type LegalSection = {
  title: string
  lastUpdated: string
  intro: string
  sections: { heading?: string; body: string[] }[]
}

export const termsOfServiceContent: LegalSection = {
  title: "Terms of Service",
  lastUpdated: "May 24, 2026",
  intro:
    "Please read these Terms of Service carefully before using our website or engaging our services. By accessing bibotecture.com or working with us, you agree to be bound by these terms.",
  sections: [
    {
      heading: "Introduction",
      body: [
        'Welcome to Bibotecture Ltd ("we," "our," "us"), a full-stack product agency based in London, UK. By accessing and using our website bibotecture.com (the "Website") and our services, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our Website or services.',
      ],
    },
    {
      heading: "Services",
      body: [
        "We provide full-stack product development services, including but not limited to product strategy, UX/UI design, web and mobile development, SaaS architecture, Chrome extensions, AI integration, and accessibility consulting. Our services and pricing may change or be updated from time to time at our discretion.",
      ],
    },
    {
      heading: "Acceptable use",
      body: [
        "By using our Website, you agree that you will not:",
        "Use our services or Website for any unlawful purpose.",
        "Infringe on any intellectual property rights belonging to Bibotecture Ltd or third parties.",
        "Attempt to hack, disrupt, reverse-engineer, or modify our Website or any software we produce.",
        "Use our content, designs, or code without prior written permission.",
        "Misrepresent your identity or affiliation when engaging with us.",
      ],
    },
    {
      heading: "Payments and refunds",
      body: [
        "All payments for services must be made as per the agreed terms before work commences, unless otherwise specified in a signed contract.",
        "Refunds are evaluated on a case-by-case basis and are only granted under specific circumstances subject to our review.",
        "Late payments may result in service delays, suspension of deliverables, or termination of the engagement.",
      ],
    },
    {
      heading: "Intellectual property",
      body: [
        "We retain ownership of all work-in-progress, preliminary designs, and code until final payment is received in full.",
        "Upon receipt of full payment, clients receive the rights to use the final deliverables as outlined in the agreed contract or statement of work.",
        "You may not resell, sublicense, modify, or claim sole ownership of any work we produce without our prior written consent.",
        "We reserve the right to showcase completed work in our portfolio unless otherwise agreed in writing.",
      ],
    },
    {
      heading: "Limitation of liability",
      body: [
        "To the maximum extent permitted by law, Bibotecture Ltd is not liable for any indirect, incidental, or consequential damages — including lost profits, lost data, or business interruption — arising from the use of our Website or services.",
        "Our total liability for any claim arising out of or related to our services shall not exceed the amount paid by you for those services in the three months preceding the claim.",
        "We do not guarantee that our Website will be error-free, uninterrupted, or free from security vulnerabilities.",
      ],
    },
    {
      heading: "Termination",
      body: [
        "Either party may terminate a service engagement with written notice as specified in the relevant contract.",
        "We reserve the right to suspend or terminate access to our Website or services at any time if a user or client violates these Terms of Service.",
        "Upon termination, any outstanding payments become immediately due.",
      ],
    },
    {
      heading: "Changes to these terms",
      body: [
        "We may update these Terms from time to time. We will notify clients of significant changes via email where possible. Continued use of our Website or services after changes are posted constitutes your acceptance of the revised Terms.",
      ],
    },
    {
      heading: "Governing law",
      body: [
        "These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
      ],
    },
    {
      heading: "Contact",
      body: [
        "If you have any questions about these Terms of Service, please contact us at bibo@bibotecture.com.",
      ],
    },
  ],
}

export const privacyPolicyContent: LegalSection = {
  title: "Privacy Policy",
  lastUpdated: "May 24, 2026",
  intro:
    "Your privacy matters to us. This policy explains what information we collect, how we use it, and the choices you have.",
  sections: [
    {
      heading: "Introduction",
      body: [
        'Bibotecture Ltd ("we," "our," "us") is a full-stack product agency based in London, UK. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit bibotecture.com or use our products and services. By using our Website, you agree to the terms of this Privacy Policy.',
      ],
    },
    {
      heading: "Information we collect",
      body: [
        "We collect information you provide directly and information collected automatically when you visit our Website:",
        "Contact information: Name, email address, and message content when you fill in a contact or waitlist form.",
        "Usage data: Browser type, device information, IP address, pages visited, and time spent on pages — collected automatically via standard server logs.",
        "We do not collect payment information directly. Any payment processing is handled by third-party providers under their own privacy policies.",
      ],
    },
    {
      heading: "How we use your information",
      body: [
        "We use the information we collect to:",
        "Respond to your enquiries and manage our client relationships.",
        "Send project updates, invoices, and relevant communications.",
        "Notify early-access or waitlist subscribers about product launches.",
        "Analyse and improve our Website's performance and content.",
        "Comply with legal and regulatory obligations.",
      ],
    },
    {
      heading: "Sharing your information",
      body: [
        "We do not sell or rent your personal information to third parties.",
        "We may share your information with trusted service providers who assist us in operating our Website and delivering our services (e.g., email delivery, hosting, analytics). These providers are bound by confidentiality obligations.",
        "We may disclose your information if required by law, court order, or to protect the rights and safety of Bibotecture Ltd or others.",
        "In the event of a business transfer such as a merger or acquisition, your information may be transferred as part of that transaction.",
      ],
    },
    {
      heading: "Cookies and tracking",
      body: [
        "Our Website may use cookies and similar technologies to improve user experience and analyse traffic. You can control or disable cookies through your browser settings; however, some parts of the Website may not function correctly without them.",
        "We do not currently use third-party advertising cookies or cross-site tracking.",
      ],
    },
    {
      heading: "Data security",
      body: [
        "We implement industry-standard security practices to protect your personal information, including encrypted connections (HTTPS) and restricted access to data.",
        "No method of transmission over the internet is completely secure. While we take reasonable precautions, we cannot guarantee absolute security.",
      ],
    },
    {
      heading: "Data retention",
      body: [
        "We retain contact form submissions and client communications for as long as necessary to fulfil the purpose for which they were collected, or as required by law.",
        "Waitlist email addresses are retained until you unsubscribe or request deletion.",
      ],
    },
    {
      heading: "Your rights (UK & EEA)",
      body: [
        "Under UK GDPR and applicable data protection law, you have the right to:",
        "Access the personal information we hold about you.",
        "Request correction of inaccurate or incomplete information.",
        "Request deletion of your personal information where there is no lawful basis for continued processing.",
        "Object to or restrict processing of your information.",
        "Request portability of your data in a machine-readable format.",
        "Withdraw consent at any time where processing is based on consent.",
        "To exercise any of these rights, contact us at bibo@bibotecture.com. We will respond within 30 days.",
      ],
    },
    {
      heading: "Third-party links",
      body: [
        "Our Website may contain links to third-party websites, such as GitHub, LinkedIn, or Cal.com. We are not responsible for the privacy practices of those sites and encourage you to review their policies independently.",
      ],
    },
    {
      heading: "Changes to this policy",
      body: [
        "We may update this Privacy Policy periodically. When we do, we will revise the 'Last Updated' date at the top. Where changes are material, we will make reasonable efforts to notify affected users.",
        "Continued use of our Website after updates constitutes your acceptance of the revised policy.",
      ],
    },
    {
      heading: "Contact",
      body: [
        "If you have questions, concerns, or requests regarding this Privacy Policy, please contact us at bibo@bibotecture.com.",
      ],
    },
  ],
}
