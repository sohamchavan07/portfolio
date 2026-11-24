export interface Project {
  id: number;
  /**
   * URL segment for /project/:slug. Lowercase letters, digits and hyphens only.
   * Keep it stable once the site is shared: changing it breaks old links.
   */
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  /** Leave "" when there is no deployed version; the Live button is hidden. */
  liveUrl: string;
  demoUrl?: string;
  date: string;
  client?: string;
  /** Paragraphs separated by a blank line (\n\n). Shown on the detail page. */
  longDescription?: string;
  /** Extra screenshots for the detail page. The section is hidden when omitted. */
  gallery?: string[];
  /**
   * One measured result, e.g. "Lighthouse 98 performance on mobile (PageSpeed Insights)".
   * Only add it if you measured it and a visitor could reproduce it. Hidden when omitted.
   */
  metric?: string;
  /** One-sentence goal shown on the detail page. Write it in your own words. */
  problemStatement?: string;
}

/*
 * ADD A PROJECT: copy this block to the top of the array below.
 *
 * {
 *   id: 17,                         // next unused number
 *   slug: "my-new-project",         // unique, never change after sharing
 *   title: "My New Project",
 *   category: "web",
 *   description: "One or two sentences. This is what the card and the page intro show.",
 *   longDescription: "Paragraph one: what it is and who it is for.\n\nParagraph two: what you built and the hard parts.",
 *   image: "/assets/projects/my-new-project.webp",   // keep a .webp copy next to any .png/.jpg
 *   technologies: ["Ruby on Rails", "PostgreSQL"],
 *   features: ["Feature one", "Feature two"],
 *   githubUrl: "https://github.com/sohamchavan07/my-new-project",
 *   liveUrl: "https://my-new-project.example.com",
 *   date: "2026",
 *   client: "Personal",
 * },
 */

export const projects: Project[] = [
  {
    id: 15,
    slug: "blog-app",
    title: "Blog App",
    category: "web",
    description: "A dynamic blogging platform featuring rich content delivery, seamless interactions, and an optimized reading experience.",
    longDescription: "This blog application provides a fully-featured platform for content creation and distribution. Built with a focus on performance, SEO, and user experience, it ensures rapid load times and responsive design across all devices.\n\nThe system is designed to handle rich text articles efficiently while maintaining a clean, distraction-free reading interface that engages users and showcases technical writing capabilities.",
    image: "/assets/projects/project-2.webp",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    features: ["Content Management", "Responsive Interface", "SEO Optimized", "Rich Text Support"],
    githubUrl: "https://github.com/sohamchavan07/blog-app",
    liveUrl: "",
    date: "2026",
    client: "Personal",
    problemStatement: "Needed a clean, performant blogging platform with rich-text authoring and SEO out of the box.",
  },

  {
    id: 14,
    slug: "bookstore",
    title: "Bookstore",
    category: "web",
    description: "A high-performance Ruby on Rails bookstore application featuring a curated collection, advanced search, and professional book management.",
    longDescription: "The Premium Bookstore is a sophisticated web application designed for bibliophiles and book retailers. Built with a focus on speed and reliability, it utilizes Ruby on Rails for a robust backend and PostgreSQL for efficient data management.\n\nThe application features a modern, clean interface powered by Tailwind CSS, providing a seamless browsing experience. Key technical highlights include advanced search capabilities, a secure management system for adding and updating titles, and a responsive design that ensures the library is accessible from any device. This project demonstrates my ability to build full-stack applications that combine complex backend logic with elegant, user-centric frontend design.",
    image: "/assets/projects/bookstore.webp",
    technologies: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS", "Hotwire", "Render"],
    features: ["Curated Book Collection", "Advanced Search & Filtering", "Secure Admin Dashboard", "Responsive UI/UX", "High-Performance Data Handling"],
    githubUrl: "https://github.com/sohamchavan07/bookstore",
    liveUrl: "",
    date: "2025",
    problemStatement: "Book retailer needed a searchable catalogue with secure admin controls and fast load times.",
  },
  {
    id: 10,
    slug: "3d-portfolio",
    title: "3D Portfolio",
    category: "web",
    description: "It's not just a portfolio, it's a playground of ideas. I'm excited to share my updated creative space, where I've put a lot of heart and late nights into showcasing projects that truly inspire me. I hope it inspires you, too.",
    longDescription: "This 3D Portfolio represents a leap forward in how I present my digital identity. Moving beyond static grids, I've created an immersive environment where visitors can explore my work in a more dynamic and engaging way.\n\nThe project focuses on high-performance 3D rendering in the browser, ensuring a smooth experience across devices. It serves as both a showcase for my technical capabilities in frontend development and a testament to my commitment to creative UI/UX design. The 'playground' aspect encourages exploration and interaction, making the discovery of my projects a journey rather than just a list.",
    image: "/assets/projects/car.webp",
    technologies: ["Three.js", "React Three Fiber", "React", "Tailwind CSS"],
    features: ["Creative Inspiration Shout-Out", "Portfolio Gateway", "Humor & Personality", "User Management"],
    githubUrl: "https://github.com/sohamchavan07/portfolio3d",
    liveUrl: "https://3dportfolio.sohamcode.online/",
    demoUrl: "https://3dportfolio.sohamcode.online/",
    date: "2025",
    problemStatement: "Wanted to stand out with an immersive 3D browsing experience instead of a standard portfolio grid.",
  },
  {
    id: 2,
    slug: "tawade-kitchen",
    title: "Tawade Kitchen",
    category: "web",
    description: "A small snack shop website (Tawade Kitchen) showcasing products and contact information.",
    longDescription: "Tawade Kitchen is a clean, responsive website built for a local snack business. The goal was to create a digital presence that reflects the brand's homemade feel while providing essential information to customers.\n\nThe site features a visually appealing product catalog, integrated contact forms for inquiries, and a layout optimized for both desktop and mobile users. It demonstrates my ability to deliver functional, business-oriented web solutions with a focus on local enterprise needs.",
    image: "/assets/projects/tawade_kitchen.webp",
    technologies: ["React", "Tailwind CSS", "Vite"],
    features: ["Product Catalog", "Responsive Layout", "Contact Form", "Branding"],
    githubUrl: "https://github.com/sohamchavan07/tawade_kitchen.git",
    liveUrl: "https://tawade-kitchen.vercel.app",
    demoUrl: "https://tawade-kitchen.vercel.app",
    date: "2025",
    client: "Freelancer",
  },
  {
    id: 4,
    slug: "shivkumar-realtors",
    title: "Shivkumar Realtors",
    category: "web",
    description: "A comprehensive real estate platform for Shivkumar Realtors, a Pune-based property firm. Features include property listings, detailed property views, service showcases, and a contact system. Built with modern web technologies for optimal performance and user experience.",
    longDescription: "Shivkumar Realtors is a professional-grade real estate solution developed for a prominent property firm in Pune. The platform is designed to handle high volumes of property data while maintaining a clean, intuitive interface for prospective buyers.\n\nKey technical achievements include a performant property filtering system, high-resolution image galleries, and a robust contact management system that connects users directly with agents. The tech stack—React, TypeScript, and Tailwind CSS—was chosen for its scalability and developer efficiency, allowing for rapid deployment of new features and updates.",
    image: "/assets/projects/shivkumarrealtors.png",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Shadcn UI", "React Router", "React Query"],
    features: ["Property Listings", "Detailed Property Views", "Service Showcases", "Contact System", "Responsive Design"],
    githubUrl: "https://github.com/sohamchavan07/shivkumarrealtors",
    liveUrl: "https://shivkumarrealtors.vercel.app/",
    demoUrl: "https://shivkumarrealtors.vercel.app/",
    date: "2025",
    client: "Personal"
  },
  {
    id: 13,
    slug: "hemraj-products",
    title: "Hemraj Products",
    category: "web",
    description: "An elegant e-commerce landing page for Hemraj Products, showcasing authentic handcrafted 'Karalechy Wafers' and traditional organic snacks.",
    longDescription: "Hemraj Products is a premium landing page developed for a local food producer specializing in traditional Indian snacks. The project focuses on bridging the gap between traditional family recipes and a modern, health-conscious audience.\n\nThe site features a clean, organic aesthetic that mirrors the quality of the products. Key technical implementations include a responsive layout optimized for mobile ordering, smooth scroll animations, and a structured product showcase that highlights the nutritional benefits of the Karale (Niger seeds). Built with React and Tailwind CSS, it offers a high-performance experience that emphasizes brand trust and product authenticity.",
    image: "/assets/projects/hemraj-products.png",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Shadcn UI", "Framer Motion"],
    features: ["Organic Brand Identity", "Mobile-First Ordering Flow", "Nutritional Highlights", "Responsive Product Showcase", "Traditional Recipe Storytelling"],
    githubUrl: "https://github.com/sohamchavan07/hemraj-products",
    liveUrl: "https://hemraj-products.vercel.app/",
    date: "2025",
    client: "Freelancer",
  },
  {
    id: 5,
    slug: "hotel-nyala",
    title: "Hotel Nyala",
    category: "web",
    description: "A concept website for a fictional luxury hotel, built to practice visual storytelling, clean page structure, and polished modern UI.",
    longDescription: "Hotel Nyala is a conceptual project that explores the intersection of luxury branding and web design. The site was built to demonstrate how visual storytelling can be used to create a compelling brand narrative in a digital space.\n\nFocusing on high-quality imagery, elegant typography, and smooth transitions, Hotel Nyala provides a premium user experience that mirrors the luxury of the imaginary hotel itself. It serves as a portfolio piece showcasing my design sensibilities and attention to detail.",
    image: "/assets/projects/hotelnyala.png",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    features: ["Visual Storytelling", "Responsive Layout", "Contact Form", "Branding"],
    githubUrl: "https://github.com/sohamchavan07/hotel-nyala",
    liveUrl: "https://hotel-nyala.vercel.app",
    demoUrl: "https://hotel-nyala.vercel.app",
    date: "2025",
    client: "Freelancer",
  },
  {
    id: 1,
    slug: "collegematch",
    title: "CollegeMatch",
    category: "web",
    description: "A smart college recommendation platform that helps students find their ideal match based on academic profiles. It leverages AI to provide personalized reasoning for each recommendation, ensuring students understand why a college fits their goals.",
    longDescription: "CollegeMatch is an innovative AI-driven platform designed to simplify the complex process of college selection. By analyzing a student's academic achievements, extracurricular interests, and career aspirations, the platform generates a curated list of institutions that align with their profile.\n\nThe core of CollegeMatch is its integration with Groq AI, which provides transparent and personalized reasoning for every recommendation. This ensures that students don't just see a list of names, but understand exactly why a particular college is a good fit for their specific journey.\n\nBuilt with Next.js and Supabase, the application offers a seamless and responsive user experience, featuring real-time data synchronization and secure student profiling.",
    image: "/assets/projects/college-portal.png",
    technologies: ["Next.js", "React", "Groq AI", "Supabase", "Tailwind CSS"],
    features: ["AI-Powered Personalization", "Supabase Backend Integration", "Interactive Student Profiling", "Real-time Recommendations"],
    githubUrl: "https://github.com/sohamchavan07/Students-college-portal",
    liveUrl: "https://students-college-portal.vercel.app/",
    demoUrl: "https://students-college-portal.vercel.app/",
    date: "2026",
  },
  {
    id: 6,
    slug: "rails-payment-gateway",
    title: "Rails Payment Gateway",
    category: "web",
    description: "A robust and secure payment gateway built using Ruby on Rails, designed to integrate seamless payment processing capabilities into web applications. This project demonstrates backend proficiency in Rails, API integrations, and secure transaction handling.",
    longDescription: "The Rails Payment Gateway is a backend-focused project designed to demonstrate the implementation of secure financial transactions in a web environment. Built with Ruby on Rails, the gateway handles complex payment flows, including authentication, transaction validation, and error handling.\n\nThis project highlights my proficiency in building modular, secure, and scalable backend architectures. It involves integrating with external payment APIs and ensuring data integrity throughout the transaction lifecycle.",
    image: "/assets/projects/payment.png",
    technologies: ["Ruby on Rails", "PostgreSQL", "Stripe API"],
    features: ["Secure Transactions", "API-based Payment Flow", "Modular Architecture"],
    githubUrl: "https://github.com/sohamchavan07/Payment-Gateway",
    liveUrl: "",
    demoUrl: "",
    date: "2025",
  },
  {
    id: 7,
    slug: "ferrari-devops-case-study",
    title: "Ferrari Case Study with DevOps",
    category: "web",
    description: "Racing Ahead with DevOps — How Ferrari accelerated innovation using Azure DevOps and real-time analytics. A visual case study showcasing branding, performance, and pipeline-driven delivery.",
    longDescription: "This project is a deep dive into the technical transformation of an iconic brand. It explores how Ferrari leverages DevOps practices—specifically using Azure DevOps—to accelerate their development cycles and improve the performance of their digital platforms.\n\nThe case study combines technical analysis with visual storytelling, illustrating the impact of real-time analytics and automated delivery pipelines on business agility. It serves as both a research piece and a demonstration of my ability to analyze and present complex technical transformations.",
    image: "/assets/projects/ferrari.jpeg",
    technologies: ["Docker", "Kubernetes", "Grafana"],
    features: ["Brand Case Study", "Pipeline Simulations", "Real-time Analytics", "Technical Overview"],
    liveUrl: "https://ferrari-casestudy.vercel.app",
    githubUrl: "https://github.com/sohamchavan07/Ferrari/",
    demoUrl: "https://ferrari-casestudy.vercel.app/",
    date: "2025",
  },
  {
    id: 8,
    slug: "porsche-case-study",
    title: "PORSCHE CASE STUDY",
    category: "web",
    description: "A concept case study of a luxury automotive app for Porsche, exploring how layout, customer interaction, and branding can work together in a high-end product.",
    longDescription: "The Porsche App Case Study is a design-forward exploration of luxury app development. It focuses on the unique challenges of creating a digital experience that matches the prestige and performance of the Porsche brand.\n\nThe project delves into user experience optimization, interface design, and brand integration. By prototyping key features and interactions, I demonstrate how a high-end automotive app can enhance customer engagement and streamline vehicle management through thoughtful design and modern technology.",
    image: "/assets/projects/porsche.png",
    technologies: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    features: ["Luxury/Brand-Focused Design", "Modern Web Tech Stack", "Structured Case Study", "Aesthetic & Functional Components"],
    githubUrl: "https://github.com/sohamchavan07/porsche",
    liveUrl: "https://porsche-casestudy.vercel.app/",
    demoUrl: "https://porsche-casestudy.vercel.app/",
    date: "2025",
  },
  {
    id: 11,
    slug: "sri-ram-mandir",
    title: "Sri Ram Mandir",
    category: "web",
    description: "A digital portal for Shri Ram Mandir, Shahupuri, Kolhapur. Features multilingual support (Marathi/English), event calendars, donation management, and interactive gallery, serving as a spiritual bridge for devotees.",
    longDescription: "The Shri Ram Mandir portal is a community-focused project designed to bridge the gap between a historical spiritual center and its modern devotees. Recognizing the diverse audience, I implemented full multilingual support (Marathi and English) to ensure accessibility for all age groups.\n\nThe application manages various temple activities, from donation tracking to event scheduling, all through a unified and secure dashboard. The interactive gallery and location integration provide a virtual window into the temple's daily life, fostering a deeper connection for devotees who cannot visit in person.",
    image: "/assets/projects/ram-mandir.jpg",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Shadcn UI", "Lucide React"],
    features: ["Multilingual Support", "Donation Management", "Event Calendar", "Interactive Gallery", "Location Integration"],
    githubUrl: "https://github.com/sohamchavan07/sri-ram-mandir",
    liveUrl: "https://sri-ram-mandir1922.vercel.app/",
    demoUrl: "https://sri-ram-mandir1922.vercel.app/",
    date: "2026",
    client: "Personal",
  },
  {
    id: 9,
    slug: "tic-tac-toe",
    title: "Tic-Tac-Toe Game",
    category: "web",
    description: "A React tic-tac-toe game with Easy, Medium, and Hard computer opponents, a two-player mode, custom player names, score tracking, and a restart button.",
    longDescription: "This Tic-Tac-Toe game is more than just a simple grid; it's a demonstration of interactive UI logic and state management. I implemented various difficulty levels for the computer opponent, ranging from random moves to more strategic play.\n\nThe game features customizable player names, persistent score tracking, and a clean, modern aesthetic. It serves as a practical example of how to build engaging, state-driven user interfaces with React, focusing on smooth transitions and a polished user experience.",
    image: "/assets/projects/tictactoe.png",
    technologies: ["React", "CSS Modules", "Vite"],
    features: ["Multiple Game Modes", "Difficulty Levels", "Customizable Player Names", "Score Tracking"],
    githubUrl: "https://github.com/sohamchavan07/tic-tac-toe",
    liveUrl: "https://tic-tac-toe-blond-tau-89.vercel.app/",
    demoUrl: "https://tic-tac-toe-blond-tau-89.vercel.app/",
    date: "2025",
    client: "Personal",
  },
  {
    id: 16,
    slug: "goalz-calculator",
    title: "Goalz Calculator",
    category: "web",
    description: "A high-performance, single-page utility tool built to convert ambiguous project deadlines into actionable daily velocities and structured weekly breakthroughs.",
    longDescription: "Most productivity and goal-tracking platforms are cluttered with complex onboarding processes, mandatory user authentication, and heavy database constraints. When founders or developers need to map out a sprint quickly, they want instant calculations without the friction of a multi-page setup.\n\nA streamlined, client-side dashboard that instantly processes target completion dates and total estimated workloads. It removes all cognitive friction by dynamically calculating daily task/hour quotas and projecting milestone targets entirely in real-time within the browser.\n\nBuilt as a zero-auth utility, it empowers users with features like risk buffering and automated milestone presets, ensuring project timelines remain realistic and actionable.",
    image: "/assets/projects/goalz-calculator.webp",
    technologies: ["React", "Next.js", "Tailwind CSS", "Vercel", "Framer Motion"],
    features: [
      "One-Click Milestone Presets",
      "Founder's Risk Buffer (15%)",
      "Dynamic Timeline Projection",
      "Hustle Blueprint Export",
      "Adaptive Urgency Badges"
    ],
    githubUrl: "https://github.com/sohamchavan07/Digital-Heroes-task",
    liveUrl: "https://digital-heroes-task-sooty.vercel.app/",
    demoUrl: "https://digital-heroes-task-sooty.vercel.app/",
    date: "2026",
  },
  {
    id: 17,
    slug: "ghera",
    title: "GHERA",
    category: "web",
    description: "A mobile-first rental storefront for GHERA, a Kolhapur-based Chaniya Choli brand with 13 festive outfits, transparent pricing, and WhatsApp booking inquiries.",
    longDescription: "Built a seasonal rental storefront for GHERA, a Kolhapur-based Chaniya Choli rental brand. Customers can browse 13 festive outfits, pick their rental dates, and send a pre-filled WhatsApp booking inquiry with the exact product ID and dates in one tap.\n\nThe storefront includes a mobile-first catalog with style tags for ready-to-wear, stitched, and lightweight outfits, along with clear 24-hour rental pricing starting at ₹299. It automates WhatsApp inquiry messages with the selected product ID, fit details, dates, and Kolhapur pickup or delivery information, while helping customers navigate the rental process through a four-step guide, testimonials, and Google Maps directions to the Rajarampuri store.",
    image: "/assets/projects/ghera.webp",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "WhatsApp API", "Google Maps"],
    features: ["13-Outfit Product Catalog", "Style and Fit Tags", "24-Hour Rental Pricing", "Rental Date Selection", "Pre-filled WhatsApp Inquiries", "Four-Step Rental Guide", "Customer Testimonials", "Store Directions"],
    githubUrl: "",
    liveUrl: "https://ghera.sohamcode.online/",
    demoUrl: "https://ghera.sohamcode.online/",
    date: "2026",
    client: "Personal",
    problemStatement: "Make it easy for customers to discover a Chaniya Choli, select rental dates, and send complete booking details to the store on WhatsApp.",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** True when a URL field holds a real value (not "" or whitespace). */
export const hasUrl = (url?: string): boolean => Boolean(url && url.trim().length > 0);

/** The one place that knows what a project URL looks like. */
export const projectPath = (project: Pick<Project, "slug">): string => `/project/${project.slug}`;

export const getProjectBySlug = (slug?: string): Project | undefined =>
  projects.find((p) => p.slug === slug);