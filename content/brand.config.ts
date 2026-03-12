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
        { name: "Sea Blue Light", hex: "#97A6B5", pantone: "7543 C" },
        { name: "Sea Blue Mid", hex: "#44607B", pantone: "6112 C" },
        { name: "Sea Blue Dark", hex: "#001D39", pantone: "282 C" },
      ],
      green: [
        { name: "Green Light", hex: "#9AB4A7", pantone: "5507 C" },
        { name: "Green Mid", hex: "#688F7A", pantone: "8284 C" },
        { name: "Green Dark", hex: "#244F39", pantone: "6161 C" },
      ],
      sun: [
        { name: "Sun Light", hex: "#FCE5BD", pantone: "918 C" },
        { name: "Sun Mid", hex: "#F7B139", pantone: "2010 C" },
        { name: "Sun Dark", hex: "#C37600", pantone: "2019 C" },
      ],
      skyBlue: [
        { name: "Sky Blue Light", hex: "#E9F2F4", pantone: "9063 C" },
        { name: "Sky Blue Mid", hex: "#9DC4CE", pantone: "4156 C" },
        { name: "Sky Blue Dark", hex: "#5F8A96", pantone: "8242 C" },
      ],
      purple: [
        { name: "Purple Light", hex: "#A497D9", pantone: "2645 C" },
        { name: "Purple Mid", hex: "#796BB2", pantone: "4122 C" },
        { name: "Purple Dark", hex: "#463880", pantone: "10428 C" },
      ],
    },
    neutrals: [
      {
        name: "Dark Neutral",
        hex: "#212121",
        rgb: "33, 33, 33",
        pantone: "Neutral Black C",
      },
      {
        name: "Sand Light",
        hex: "#F9F6F1",
        rgb: "249, 246, 241",
        pantone: "9285 C",
      },
    ],
  },

  typography: {
    primary: {
      name: "Martina Plantijn",
      role: "Headings, key messaging, display text",
      weights: ["Regular", "Bold"],
      file: "/assets/fonts/MartinaPlantin-Regular.otf",
      googleFallback: "Lora",
      systemFallback: "Georgia, serif",
    },
    secondary: {
      name: "Inter",
      role: "Body text, UI elements, supporting copy",
      weights: ["Regular", "Medium", "SemiBold"],
      file: "/assets/fonts/Inter-Regular.otf",
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
  },

  logo: {
    type: "Wordmark only — no standalone icon",
    description:
      "Lowercase 'vouch' in a rounded geometric sans-serif. The wordmark is the logo — it should never be typeset, only used as supplied asset files.",
    clearSpace: "Minimum clear space = logo height on all four sides",
    variants: [
      {
        name: "Blue on Cream",
        file: "/assets/logo/vouch-wordmark-blue.svg",
        usage: "Primary — use on light/cream backgrounds",
      },
      {
        name: "White on Dark",
        file: "/assets/logo/vouch-wordmark-white.svg",
        usage: "Use on dark or coloured backgrounds",
      },
      {
        name: "Dark on White",
        file: "/assets/logo/vouch-wordmark-dark.svg",
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
