export const brand = {
  name: "Vouch",
  tagline: "Create, collaborate, and close the right talent.",
  description:
    "Vouch is an AI-enabled workspace for talent teams. Vouch reduces time to hire by streamlining talent team collaboration with a flexible workspace.",
  contact: {
    name: "Ian Cook",
    role: "Creative Lead",
    email: "ian@vouchfor.com",
  },
  version: "V1",
  lastUpdated: "2025-08-06",

  colours: {
    main: [
      {
        name: "Sea Blue Mid",
        hex: "#44607B",
        rgb: "68, 96, 123",
        cmyk: "45%, 22%, 0%, 52%",
        pantone: "6112 C",
        role: "Primary brand colour. Used for logo wordmark, primary CTAs, headings.",
      },
      {
        name: "Sea Blue Dark",
        hex: "#001D39",
        rgb: "0, 29, 57",
        cmyk: "100%, 49%, 0%, 78%",
        pantone: "282 C",
        role: "Dark backgrounds, high-contrast applications.",
      },
      {
        name: "Sand Light",
        hex: "#F9F6F1",
        rgb: "249, 246, 241",
        cmyk: "0%, 1%, 3%, 2%",
        pantone: "9285 C",
        role: "Primary background colour. Warm off-white.",
      },
    ],
    expanded: {
      seaBlue: [
        { name: "Sea Blue Light", hex: "#97A6B5", rgb: "151, 166, 181", cmyk: "17%, 8%, 0%, 29%", pantone: "7543 C" },
        { name: "Sea Blue Mid", hex: "#44607B", rgb: "68, 96, 123", cmyk: "45%, 22%, 0%, 52%", pantone: "6112 C" },
        { name: "Sea Blue Dark", hex: "#001D39", rgb: "0, 29, 57", cmyk: "100%, 49%, 0%, 78%", pantone: "282 C" },
      ],
      green: [
        { name: "Green Light", hex: "#9AB4A7", rgb: "154, 180, 167", cmyk: "14%, 0%, 7%, 29%", pantone: "5507 C" },
        { name: "Green Mid", hex: "#688F7A", rgb: "104, 143, 122", cmyk: "27%, 0%, 15%, 44%", pantone: "8284 C" },
        { name: "Green Dark", hex: "#244F39", rgb: "36, 79, 57", cmyk: "54%, 0%, 28%, 69%", pantone: "6161 C" },
      ],
      sun: [
        { name: "Sun Light", hex: "#FCE5BD", rgb: "252, 229, 189", cmyk: "0%, 9%, 25%, 1%", pantone: "918 C" },
        { name: "Sun Mid", hex: "#F7B139", rgb: "247, 177, 57", cmyk: "0%, 28%, 77%, 3%", pantone: "2010 C" },
        { name: "Sun Dark", hex: "#C37600", rgb: "195, 118, 0", cmyk: "0%, 39%, 100%, 24%", pantone: "2019 C" },
      ],
      skyBlue: [
        { name: "Sky Blue Light", hex: "#E9F2F4", rgb: "233, 242, 244", cmyk: "5%, 1%, 0%, 4%", pantone: "9063 C" },
        { name: "Sky Blue Mid", hex: "#9DC4CE", rgb: "157, 196, 206", cmyk: "24%, 5%, 0%, 19%", pantone: "4156 C" },
        { name: "Sky Blue Dark", hex: "#5F8A96", rgb: "95, 138, 150", cmyk: "37%, 8%, 0%, 41%", pantone: "8242 C" },
      ],
      purple: [
        { name: "Purple Light", hex: "#A497D9", rgb: "164, 151, 217", cmyk: "24%, 30%, 0%, 15%", pantone: "2645 C" },
        { name: "Purple Mid", hex: "#796BB2", rgb: "121, 107, 178", cmyk: "32%, 40%, 0%, 30%", pantone: "4122 C" },
        { name: "Purple Dark", hex: "#463880", rgb: "70, 56, 128", cmyk: "45%, 56%, 0%, 50%", pantone: "10428 C" },
      ],
    },
    neutrals: [
      {
        name: "Dark Neutral",
        hex: "#212121",
        rgb: "33, 33, 33",
        cmyk: "0%, 0%, 0%, 87%",
        pantone: "Neutral Black C",
      },
      {
        name: "Sand Light",
        hex: "#F9F6F1",
        rgb: "249, 246, 241",
        cmyk: "0%, 1%, 3%, 2%",
        pantone: "9285 C",
      },
    ],
    sand: [
      { name: "Sand Lightest", hex: "#FDFDFB", role: "Near-white — use for elevated surfaces on sand backgrounds" },
      { name: "Sand Light", hex: "#F9F6F1", role: "Primary background" },
      { name: "Sand Dark", hex: "#F3ECE2", role: "Subtle warm dividers, section backgrounds" },
      { name: "Sand Darkest", hex: "#EADFCD", role: "Strong warm contrast — borders, cards" },
    ],
  },

  typography: {
    primary: {
      name: "Martina Plantijn",
      role: "Headings, key messaging, display text",
      weights: ["Regular", "Bold"],
      file: "/assets/fonts/Martina Plantijn/WOFF2/martina-plantijn-regular.woff2",
      googleFallback: "Source Serif 4",
      systemFallback: "Georgia, serif",
    },
    secondary: {
      name: "Inter",
      role: "Body text, UI elements, supporting copy",
      weights: ["Regular", "Medium", "SemiBold"],
      file: "/assets/fonts/Inter/InterVariable.woff2",
      googleFallback: "Roboto",
      systemFallback: "Arial, sans-serif",
    },
    scale: {
      h1: { size: "48px", weight: "Medium", kerning: "-3", lineHeight: "90%" },
      h2: { size: "36px", weight: "Medium", kerning: "-3", lineHeight: "90%" },
      h3: { size: "28px", weight: "Medium", kerning: "-3", lineHeight: "100%" },
      p1: { size: "20px", weight: "Regular", kerning: "0", lineHeight: "150%" },
      p2: { size: "18px", weight: "Regular", kerning: "0", lineHeight: "150%" },
      p3: { size: "16px", weight: "Regular", kerning: "0", lineHeight: "150%" },
    },
    spacing: {
      lineHeight: "1.5x body text size",
      kerningHeadings: "-3",
      kerningBody: "0",
      paragraphSpacing: "1.5x font size",
    },
    // Responsive web scale — sourced from Vouch Marketing Site Figma (V3 Rebrand)
    webScale: {
      desktop: {
        display: { size: "112px", rem: "7rem" },
        h1:      { size: "80px",  rem: "5rem" },
        h2:      { size: "64px",  rem: "4rem" },
        h3:      { size: "48px",  rem: "3rem" },
        h4:      { size: "32px",  rem: "2rem" },
        h5:      { size: "24px",  rem: "1.5rem" },
        h6:      { size: "20px",  rem: "1.25rem" },
        large:   { size: "20px",  rem: "1.25rem" },
        main:    { size: "16px",  rem: "1rem" },
        small:   { size: "14px",  rem: "0.875rem" },
      },
      tablet: {
        display: { size: "88px", rem: "5.5rem" },
        h1:      { size: "64px", rem: "4rem" },
        h2:      { size: "48px", rem: "3rem" },
        h3:      { size: "40px", rem: "2.5rem" },
        h4:      { size: "28px", rem: "1.75rem" },
      },
      mobileLandscape: {
        display: { size: "64px", rem: "4rem" },
        h1:      { size: "48px", rem: "3rem" },
        h2:      { size: "40px", rem: "2.5rem" },
        h3:      { size: "36px", rem: "2.25rem" },
      },
    },
  },

  logo: {
    type: "Wordmark only — no standalone icon",
    description:
      "Lowercase 'vouch' in a rounded geometric sans-serif. The wordmark is the logo — it should never be typeset, only used as supplied asset files.",
    clearSpace: "Minimum clear space = logo height on all four sides",
    variants: [
      {
        name: "Blue on Sand",
        file: "/assets/logo/Vouch blue.svg",
        usage: "Primary — use on light/sand backgrounds",
      },
      {
        name: "White on Dark",
        file: "/assets/logo/Vouch not white.svg",
        usage: "Use on dark or coloured backgrounds",
      },
      {
        name: "Dark on White",
        file: "/assets/logo/Vouch dark blue.svg",
        usage: "Use on pure white backgrounds",
      },
    ],
    misuse: [
      "Do not rotate or tilt the logo",
      "Do not stretch or distort proportions",
      "Do not recolour in unapproved colours",
      "Do not recreate using typography — always use supplied files",
      "Do not place on busy or low-contrast backgrounds",
    ],
  },

  positioning: {
    oneLiner: "An AI-enabled workspace for talent teams.",
    whatWeDo: "Vouch reduces time to hire by streamlining talent team collaboration with a flexible workspace.",
    valuePropositions: {
      primary: [
        "All communication materials needed for talent marketing — emails, videos, webpages, slides, and PDFs — in one place.",
        "Automated, personalised, and on-brand copy for all assets — email, text, website, and social media.",
        "Streamlined workflows that connect all stakeholders involved in talent marketing and acquisition.",
      ],
      secondary: [
        "AI-enabled asset creation — job descriptions, landing pages, video, audio, and more.",
        "Create once, amplify everywhere — maximise impact across channels and teams.",
        "Effortlessly scale internal communications and digital assets for employee engagement.",
        "Get real-time insights on what's working and what's not.",
      ],
    },
    whyWeRebranded: "It's about aligning a visual system that reflects our purpose, personality, and ambition with our expanding, maturing product. An intentional brand identity is sellable and defendable — it's a differentiator.",
  },

  brandPersonality: {
    keywords: ["Calm", "Clear", "Modern", "Human"],
    aesthetic: "A sense of ease — low-contrast, open, a nice place to be. Paper-like neutral backgrounds, serif font — rounded, confident, not stuffy. More Kindle, less iPad: focused, warm, non-distracting.",
  },

  visualIdentity: {
    summary: "Vouch is designed to feel like the antithesis of a typical SaaS platform. The visual identity is calm, clear, modern, and human — deliberately decaffeinated in a world that's permanently turned up to eleven. Less digital, more editorial. Think paper-like backgrounds, subtle film grain, a serif that's confident without being formal, low contrast, generous space. Texture and tactility are key differentiators — where most SaaS feels glaring and clinical, Vouch feels grounded and real. A workspace that feels weightless and frictionless — somewhere you actually want to be. More Kindle, less iPad. The goal is something tangible and human that happens to be software — effortless, flexible, and quietly powerful.",
    keywords: ["flow", "context", "decaffeinated", "frictionless", "alignment", "flexible", "weightless", "content", "space", "hub", "collaboration", "nexus", "speed", "assets", "human", "effortless", "magic", "sync", "texture", "tactility", "grain", "editorial"],
  },

  voice: {
    status: "Draft — pending internal review",
    characteristics: ["Confident", "Clear", "Warm", "Purposeful"],
    preferredPhrases: [
      "Effortless experience",
      "We empower businesses",
      "Streamline",
      "Talent teams",
      "Collaborate",
    ],
    avoidPhrases: [
      "No hassle",
      "Fancy features",
      "We help companies",
      "Disruptive",
      "Revolutionary",
      "Game-changing",
    ],
  },

  values: [
    {
      name: "Expert",
      description:
        "We bring deep knowledge and precision to everything we do.",
    },
    {
      name: "Innovative",
      description:
        "We embrace technology and push boundaries in our industry.",
    },
    {
      name: "Trustworthy",
      description:
        "We are transparent and reliable in all client interactions.",
    },
    {
      name: "Collaborative",
      description:
        "We believe in teamwork, open communication, and fostering strong relationships to drive success.",
    },
  ],

  experiencePrinciples: [
    {
      name: "Optimistic",
      description: "We inspire confidence and ambition.",
    },
    {
      name: "Empowering",
      description:
        "We enable confidence and autonomy, ensuring every interaction feels inspiring and forward-thinking.",
    },
    {
      name: "Multi-Dimensional",
      description: "Our brand is adaptable and flexible.",
    },
    {
      name: "Harmonious",
      description:
        "We create a seamless and balanced experience that feels intuitive and effortless.",
    },
  ],
};
