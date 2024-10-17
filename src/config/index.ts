import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Jesus Rugama — Web Developer",
  author: "Jesus Rugama",
  description:
    "Software Engineer based in Nicaragua. Laravel and React development specialist.",
  lang: "en",
  siteLogo: "",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
    { text: "Contact", href: "#contact" },
  ],
  socialLinks: [
    // { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/jesus-rugama" },
    { text: "Github", href: "https://github.com/jesusrugama" },
    // { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    // { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Jesus Rugama",
    specialty: "Full Stack Web Developer",
    summary:
      "Developer based in Nicaragua. I specialize React and Laravel development.",
    email: "example@email.com",
  },
  experience: [
    {
      company: "Trillage",
      position: "Full Stack Developer",
      startDate: "Aug 2024",
      endDate: "",
      summary: [
        "I designed and developed a mobile application using Flutter, allowing it to be deployed on both Android and iOS with a single codebase. This reduced development time by 50% and maintenance costs by 30%, facilitating a consistent user experience on both platforms.",
        "I integrated biometric authentication and data encryption, significantly improving the security of user data. This implementation resulted in a 40% increase in user trust and a 25% reduction in unauthorized access attempts.",
      ],
    },
    {
      company: "Atmosphere TV",
      position: "Full Stack Developer",
      startDate: "January 2022",
      endDate: "April 2023",
      summary: [
        "Migrated the Laravel legacy site to a NuxtJS site with SSG",
        "Created react editable animations that would be rendered and inserted in the streaming service as ads.",
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

      Over the years, I’ve honed my skills in building robust, user-friendly applications that not meets the needs of users. My projects range from subscription SAASs to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "",
  },
};

// #5755ff
