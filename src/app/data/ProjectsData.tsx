

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: {
    name: string;
  }[];
  links: {
    github?: string;
    live?: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Project 1",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "/images/default-icon-empty.png",
    techStack: [
      { name: "React"},
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" }
    ],
    links: {
      github: "https://github.com/yourusername/portfolio",
      live: "https://yourportfolio.com"
    }
  },
  {
    id: 2,
    title: "Project 2",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    image: "/images/default-icon-empty.png",
    techStack: [
      { name: "Next.js" },
      { name: "MongoDB" },
      { name: "Redux" },
      { name: "Stripe" }
    ],
    links: {
      github: "https://github.com/yourusername/ecommerce-app",
      live: "https://yourecommerceapp.com"
    }
  }
];