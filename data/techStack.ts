export type Tech = { name: string; logo: string };

export type TechCategory = {
  category: string;
  technologies: Tech[];
};

export const techStack: Tech[] = [
  { name: "HTML", logo: "/logos/html.svg" },
  { name: "CSS", logo: "/logos/css.svg" },
  { name: "Tailwind CSS", logo: "/logos/tailwindcss.svg" },
  { name: "JavaScript", logo: "/logos/javascript.svg" },
  { name: "PHP", logo: "/logos/php.svg" },
  { name: "TypeScript", logo: "/logos/typescript.svg" },
  { name: "MySQL", logo: "/logos/mysql.svg" },
  { name: "Java", logo: "/logos/java.svg" },
  { name: "Laravel", logo: "/logos/laravel.svg" },
  { name: "Composer", logo: "/logos/composer.svg" },
  { name: "WordPress", logo: "/logos/wordpress.svg" },
];

export const categorizedTechStack: TechCategory[] = [
  {
    category: "Backend",
    technologies: [
      { name: "TypeScript", logo: "/logos/typescript.svg" },
      { name: "Next.js", logo: "/logos/nextjs.svg" },
      { name: "Node.js", logo: "/logos/nodejs.svg" },
      { name: "PHP", logo: "/logos/php.svg" },
      { name: "Vite", logo: "/logos/vite.svg" },
      { name: "Webpack", logo: "/logos/webpack.svg" },
    ],
  },
  {
    category: "Frontend",
    technologies: [
      { name: "React", logo: "/logos/react.svg" },
      { name: "TypeScript", logo: "/logos/typescript.svg" },
      { name: "JavaScript", logo: "/logos/javascript.svg" },
      { name: "Tailwind CSS", logo: "/logos/tailwindcss.svg" },
      { name: "Bootstrap", logo: "/logos/bootstrap.svg" },
      { name: "SASS", logo: "/logos/sass.svg" },
      { name: "HTML", logo: "/logos/html.svg" },
      { name: "CSS", logo: "/logos/css.svg" },
    ],
  },
  {
    category: "Tools",
    technologies: [
      { name: "VS Code", logo: "/logos/vscode.svg" },
      { name: "GitHub", logo: "/logos/github.svg" },
      { name: "WordPress", logo: "/logos/wordpress.svg" },
      { name: "NPM", logo: "/logos/npm.svg" },
    ],
  },
];

export default techStack;
