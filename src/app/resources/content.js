import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Viresh",
  lastName: "Bhurke",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full-Stack Developer | AI/ML Engineer | DevOps Engineer | XR Developer",
  avatar: "/images/avatar.jpg",
  email: "viru.bhur@gmail.com",
  location: "America/Phoenix", 
  languages: ["English", "Hindi", "Marathi"], 
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/dugojugo",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/viresh-vilas-bhurke-618280211/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Selene, a design engineer at <Logo icon={false} style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/viresh-bhurke-zvvils",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m a software engineer with a passion for developing scalable, AI-powered solutions and optimizing cloud infrastructures. My expertise spans full-stack development, machine learning, real-time systems, and AR/VR developement with experience leading geospatial and digital twin projects. I thrive on solving complex challenges and building high-performance applications that drive innovation.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Next Lab",
        timeframe: "March 2024 - May 2025",
        role: "Lead Software Developer",
        achievements: [
          <>
            Optimized API data processing in Unity using C#, implementing Multithreading, Async Task handling, Coroutines,
            and Lazy Deserialization to stream and parse JSON from REST APIs of ESRI, achieving 30% runtime efficiency.
          </>,
          <>
            Built the Surprise Digital Twin in Unity 3D and C#, rendering real-time 3D models with economic data practicing
            SOLID principles, custom parsers, and memory-efficient handlers. 
          </>,
          <>
           Led geospatial digital twin project with CesiumJS, building UI with Javascript, HTML/CSS practicing lazy loading. 
        </>,
        <>
        As Cloud Guild Lead, containerized a Flask-based ML application using Docker and deployed it on AWS, ensuring
        scalable and consistent production-ready environments. 
      </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/digital-twin-1.jpg",
            alt: "Surprise Digital Twin - Data Representation",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/digital-twin-2.png",
            alt: "Surprise Digital Twin - 3D Experience",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Collimation LLC",
        timeframe: "July 2024 – September 2024",
        role: "Game Developer Intern",
        achievements: [
          <>
             Designed immersive VR experiences in Unity 3D with Inworld AI, fine-tuned LLMs for more natural and
             context-aware NPC dialogues, and conducted iterative testing and heuristic evaluations to ensure seamless flow.
          </>,
          <>
             Built ML-enhanced object detection models with OpenCV, integrating them into Unity 3D via Python-based
             inference and C# scripting.
          </>,
        ],
        images: [],
      },
      {
        company: "FIS Global Business Solutions",
        timeframe: "September 2022 – December 2022",
        role: "Software Developer Intern",
        achievements: [
          <>
             Developed a 3D banking system in the metaverse with real-time transactions, video calls, and NLP-driven Wit.AI
             agent for customer interaction, and Postman to test and validate APIs, ensuring secure, efficient communication.
         </>,
          <>
             Developed and tested secure backend logic in C# for transaction processing, incorporating automated API security
             test scripts to ensure data integrity and compliance.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
