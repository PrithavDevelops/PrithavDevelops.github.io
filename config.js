/**
 * Portfolio Configuration File
 * Customize your personal details, projects, stats API handles, and links here.
 */
const portfolioConfig = {
  // Basic Info
  name: "prithav",
  handle: "prithav",
  title: "prithav — learning to build cool stuffs",
  avatarUrl: "avatar.jpg",
  floatingBadge: {
    text: "learning & building",
    emoji: "🚀",
    subtext: "builder in progress"
  },

  // Rotating Greetings
  greetings: [
    "Hey, I'm prithav.",
    "Namaste, I'm prithav.",
    "Hola, I'm prithav.",
    "Bonjour, I'm prithav."
  ],

  // Bio & Intro text
  bio: {
    lead: "learning to build cool stuffs.",
    email: "",
    noHelloUrl: "https://nohello.net/en/"
  },

  // Live Stats (disabled — no Last.fm / LeetCode)
  stats: {
    leetcodeUsername: "",
    githubUsername: "PrithavDevelops",
    lastfmUsername: "",
    lastfmApiKey: "",
    defaultMusic: null
  },

  // Projects Showcase
  projects: [
    {
      title: "Restaurant Order Management System",
      description: "A command-line order management system for restaurants written in C, handling menu display, order tracking, and billing.",
      status: "Active",
      link: "https://github.com/PrithavDevelops/restaurant-order-management-system",
      github: "https://github.com/PrithavDevelops/restaurant-order-management-system",
      tags: ["C", "CLI", "Data Structures"]
    },
    {
      title: "Human Rights Presentation",
      description: "A structured presentation on human rights principles and frameworks.",
      status: "Active",
      link: "https://github.com/PrithavDevelops/HumanRightsPresentation",
      github: "https://github.com/PrithavDevelops/HumanRightsPresentation",
      tags: ["Presentation"]
    },
    {
      title: "Wireless Power Transfer System",
      description: "A technical presentation on wireless power transfer systems and their applications.",
      status: "Active",
      link: "https://github.com/PrithavDevelops/wptsPresentation",
      github: "https://github.com/PrithavDevelops/wptsPresentation",
      tags: ["Presentation", "Electronics"]
    }
  ],

  // Skills & Tech Stack
  skills: [
    { label: "C", level: "proficient" },
    { label: "HTML", level: "proficient" },
    { label: "CSS", level: "proficient" },
    { label: "JavaScript", level: "learning" },
    { label: "SQL", level: "learning" },
    { label: "MySQL", level: "learning" },
    { label: "Python", level: "learning" },
    { label: "Linux", level: "planned" }
  ],

  // Social Links
  socials: [
    { name: "GitHub", url: "https://github.com/PrithavDevelops" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/prithav" },
    { name: "Email", url: "mailto:prithav.develops@gmail.com" }
  ],

  // Mascot / Support Widget (disabled)
  mascot: {
    enabled: false
  }
};
