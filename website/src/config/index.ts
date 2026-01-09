import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Jesus Rugama - Software Engineer",
  author: "Jesus Rugama",
  description:
    "Software Engineer based in Nicaragua. Laravel and React development specialist.",
  lang: "en",
  siteLogo: "",
  navLinks: [
    { text: "Experience", href: "/#experience" },
    { text: "Projects", href: "/#projects" },
    { text: "About", href: "/#about" },
    { text: "Contact", href: "/#contact" },
  ],
  socialLinks: [
    // { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/jesus-rugama" },
    { text: "Github", href: "https://github.com/jesusrugama" },
    // { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    // { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "",
  canonicalURL: "https://jesusrugama.com",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Jesus Rugama",
    specialty: "Full Stack Web Developer",
    summary:
      "Software Engineer based in Nicaragua. I build scalable, maintainable, and high-performing web applications.",
    email: "example@email.com",
  },
  experience: [
    {
      company: "Career Certified",
      position: "Senior Software Engineer",
      startDate: "December 2024",
      endDate: "Today",
      summary: [
          "Contributed to frontend migration from a monolithic PHP codebase to a high-performance distributed solution with static frontend.",
          "Expanded and Maintained the frontend design system.",
          "Updated infrastructure as code using Terraform to support deployments and scalability.",
      ],
    },
    {
      company: "PromptForm",
      position: "AI Integration Developer",
      startDate: "September 2023",
      endDate: "December 2023",
      summary: [
        "Developed AI-powered features in a Django-based SaaS handling multiple LLM integrations.",
        "Built a ComfyUI-based pipeline combining Hugging Face’s Stable Diffusion models to transform user sketches + descriptions into realistic images.",
        "Implemented a second pipeline to upscale images by 4× without quality loss.",
      ],
    },
    {
      company: "Atmosphere TV",
      position: "Senior Software Engineer",
      startDate: "January 2022",
      endDate: "April 2023",
      summary: [
        "Migrated company marketing site from Laravel to Nuxt.js with SSG improving homepage load time from ~3s to 0.5s and raising Google PageSpeed Insights score to 90.",
        "Built animated ad templates in React with live editing and preview capabilities, enabling businesses to create in-venue ads.",
        "Implemented Google Analytics tracking scripts and A/B testing, using Lambda@Edge to serve variant pages in a static environment.",
      ],
    },
    {
      company: "Flipside",
      position: "Frontend Developer",
      startDate: "May 2022",
      endDate: "Jan 2023",
      summary: [
        "Built a chrome extension exposing a social network where users were able to comment about any site directly in the browser.",
      ],
    },
  ],
  projects: [
    {
      name: "Festive Screen",
      summary: "Festive Screen is your one stop solution to generate customized greeting cards and play them in your TV.",
      link: 'https://festivescreen.com',
      // linkPreview: "/",
      // linkSource: "https://festivescreen.com",
      image: "/festivescreen.png",
    },
    {
      name: "Motion Array",
      summary: "Motion Array is a marketplace for Video producers where they can buy and sell all kind of templates, video and sound resources.",
      link: 'https://motionarray.com',
      // linkPreview: "/",
      // linkSource: "https://festivescreen.com",
      image: "/motionarray.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Jesus Rugama, a Web Developer with a knack for crafting seamless digital experiences. With a strong background in back-end, as well as front-end web technologies, I thrive in the intersection where creativity meets technology.

      Over the years, I’ve honed my skills in building robust, user-friendly applications that meets the needs of users. My projects range from subscription SAASs to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "",
  },
};

// #5755ff
