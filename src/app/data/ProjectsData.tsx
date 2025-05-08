

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: {
    name: string;
    icon: string;
  }[];
  links: {
    github?: string;
    live?: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing my skills and projects with smooth animations and responsive design.",
    image: "/images/default-icon-empty.png",
    techStack: [
      { name: "React", icon: "ri-reactjs-fill" },
      { name: "TypeScript", icon: "ri-typescript-fill" },
      { name: "Tailwind CSS", icon: "ri-tailwind-css-fill" },
      { name: "Framer Motion", icon: "ri-motion-fill" }
    ],
    links: {
      github: "https://github.com/yourusername/portfolio",
      live: "https://yourportfolio.com"
    }
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce application with user authentication, product management, and payment integration.",
    image: "/images/default-icon-empty.png",
    techStack: [
      { name: "Next.js", icon: "ri-nextjs-fill" },
      { name: "MongoDB", icon: "ri-database-2-fill" },
      { name: "Redux", icon: "ri-redux-fill" },
      { name: "Stripe", icon: "ri-bank-card-fill" }
    ],
    links: {
      github: "https://github.com/yourusername/ecommerce-app",
      live: "https://yourecommerceapp.com"
    }
  }
];