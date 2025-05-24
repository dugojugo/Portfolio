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
        I'm a software engineer with a passion for developing scalable, AI-powered solutions and optimizing cloud infrastructures. My expertise spans full-stack development, machine learning, real-time systems, and AR/VR developement with experience leading geospatial and digital twin projects. I thrive on solving complex challenges and building high-performance applications that drive innovation.
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
             Researched ML-enhanced object detection models with OpenCV, integrating them into Unity 3D via Python-based
             inference and C# scripting.
          </>,
        ],
        images: [],
      },
      {
        company: "Arizona State University",
        timeframe: "September 2023 – October 2023",
        role: "Student Software Developer",
        achievements: [
          <>
             Utilizing Unity 3D, I developed immersive VR scenes that incorporated innovative technologies like UltraLeap for precise hand tracking and UltraHaptics for touchless haptic feedback. 
          </>,
          <>
             Designed an experience that allowed users to steer a spaceship by moving their hands to dodge oncoming asteroids for an exhilarating ride. 
          </>,
          <>
             Another transported users to a lush garden where they could reach out and interact with plants that would dynamically bend and touch their hands via ultrasonic waves from the haptic device. 
          </>,
          <>
             Across both experiences, I tailored the multi-sensory effects and visual polish to create a fully immersive environment showcasing the future of extended reality. 
             Demonstrating creativity and technical skills, this project opened my eyes to the possibilities of spatial computing to enhance experiences.
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
        images: [
        {
          src: "/images/projects/project-01/FIS1.png",
          alt: "Metaverse Banking - Lobby",
          width: 16,
          height: 9,
        },
        {
          src: "/images/projects/project-01/FIS6.png",
          alt: "Metaverse Banking - 2nd Floor",
          width: 16,
          height: 9,
        },
      ],
      },
      {
        company: "Indroydlab",
        timeframe: "May 2022 – September 2022",
        role: "Game Developer Intern",
        achievements: [
          <>
             Built immersive VR 3D ride and arcade games in Unity 3D, focusing on performance and interactive design.
          </>,
          <>
             Engineered Kinect-based motion detection using 3D geometry and the distance formula to accurately track jump
             height and player motion for responsive in-game interactions.
          </>,
        ],
        images: [
        {
          src: "/images/projects/project-01/VR-Ride-1.png",
          alt: "VR Ride - Halloween Special",
          width: 16,
          height: 9,
        },
        {
          src: "/images/projects/project-01/Arcade-Game-1.png",
          alt: "Arcade Game - Halloween Special",
          width: 16,
          height: 9,
        },
      ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Arizona State University",
        description: <>Masters in Software Engineering - GPA: 4.00/4.00</>,
      },
      {
        name: "Vellore Institute of Technology, Chennai, India",
        description: <>Bachelors of Technology in Computer Science and Engineering - GPA: 8.31/10.00</>,
      },
      
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Python",
        description: <>Confidently build backend scripts and ML models for data analysis, cleaning, clustering, and API-driven automation.</>,
        proficiency: 5,
        images: [],
      },
      {
        title: "C#",
        description: <>Build web apps, mobile apps, and games with C# using .NET and Unity 3D for interactive, cross-platform experiences.</>,
        proficiency: 5,
        images: [],
      },
      {
        title: "Java",
        description: <>Develop Android apps, desktop GUIs, and secure, cross-platform applications with Java using tools like JavaFX and the Android SDK.</>,
        proficiency: 4,
        images: [],
      },
      {
        title: "C/C++",
        description: <>Build high-performance systems, games, and databases with C/C++, ideal for OS-level programming, game engines, and resource-efficient IoT devices.</>,
        proficiency: 4,
        images: [],
      },
      {
        title: "JavaScript",
        description: <>Craft responsive UIs and geospatial visualizations in the browser.</>,
        proficiency: 5,
        images: [],
      },
      {
        title: "HTML/CSS",
        description: <>Style clean interfaces and build out UIs that just work.</>,
        proficiency: 5,
        images: [],
      },
      {
        title: "AWS",
        description: <>Launch and scale AI models in the cloud with secure setups using Fargate, SageMaker, S3, and IAM.</>,
        proficiency: 4,
        images: [],
      },
      {
        title: "Docker",
        description: <>Containerize apps so they behave exactly how you expect, every time.</>,
        proficiency: 4,
        images: [],
      },
      {
        title: "CI/CD",
        description: <>Automate testing and deployment to move fast without breaking things.</>,
        proficiency: 4,
        images: [],
      },
      {
        title: "Unity 3D",
        description: <>Build immersive worlds with real-time physics, AI agents, and VR training sims.</>,
        proficiency: 5,
        images: [],
      },
      {
        title: "Inworld AI",
        description: <>Make NPCs talk and feel more alive with LLM-powered dialogues.</>,
        proficiency: 4,
        images: [],
      },
      {
        title: "OpenCV",
        description: <>Use computer vision with Python to detect, analyze, and process images efficiently.</>,
        proficiency: 4,
        images: [],
      },
      {
        title: "TensorFlow / PyTorch",
        description: <>Build and train deep learning models for data analysis, prediction, and pattern recognition across images, text, and user behavior.</>,
        proficiency: 4,
        images: [],
      },
      {
        title: "Scikit-learn",
        description: <>Perform fast, interpretable machine learning with clustering, classification, regression, and feature extraction from structured data.</>,
        proficiency: 5,
        images: [],
      },
      {
        title: "Pandas",
        description: <>Clean, transform, and analyze large datasets efficiently using flexible dataframes and intuitive Python syntax.</>,
        proficiency: 5,
        images: [],
      },
      {
        title: "CesiumJS",
        description: <>Build 3D map-based digital twins and real-time spatial experiences.</>,
        proficiency: 4,
        images: [],
      },
      {
        title: "React Native",
        description: <>Build fast, responsive mobile apps with native performance across iOS and Android.</>,
        proficiency: 3,
        images: [],
      },
      {
        title: "MySQL",
        description: <>Design, query, and manage relational databases that power scalable applications.</>,
        proficiency: 4,
        images: [],
      },
      {
        title: "MATLAB / R / Linux",
        description: <>Analyze data, automate workflows, and visualize results in research and scientific computing environments.</>,
        proficiency: 4,
        images: [],
      },
      {
        title: "TypeScript",
        description:<>Used for building modular and type-safe logic across web and game projects. Applied in developing procedural systems, UI interactions, and collectible tracking in <b>Maze Scrapper</b> for the Meta Horizon Creator Competition.
          </>,
        proficiency: 5,
        images: [],
      }
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
      src: "/images/gallery/AWE-1.jpg",
      alt: "AWE-1.jpg",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Capstone-1.jpg",
      alt: "Capstone-1.jpg",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/IMG_0513.jpg",
      alt: "IMG_0513.jpg",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/IMG_0883.jpg",
      alt: "IMG_0883.jpg",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/IMG_1660.jpg",
      alt: "IMG_1660.jpg",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/IMG_2163.jpg",
      alt: "IMG_2163.jpg",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/IMG_2332.jpg",
      alt: "IMG_2332.jpg",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/IMG_2507.jpg",
      alt: "IMG_2507.jpg",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/IMG_2552.jpg",
      alt: "IMG_2552.jpg",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/IMG_2844.jpg",
      alt: "IMG_2844.jpg",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/IMG_5217.jpg",
      alt: "IMG_5217.jpg",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Surprise-1.jpg",
      alt: "Surprise-1.jpg",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/TLG-1.jpg",
      alt: "TLG-1.jpg",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/VRride-1.jpg",
      alt: "VRride-1.jpg",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Westmarc-1.jpg",
      alt: "Westmarc-1.jpg",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Westmarc-2.jpg",
      alt: "Westmarc-2.jpg",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
