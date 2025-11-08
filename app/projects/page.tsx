import ProjectCard from "@/components/project-card";

export const metadata = {
  title: "Projecten — Jordy Breur",
  description: "Geselecteerd werk en experimenten.",
};

const projects = [
  {
    title: "Portfolio Website",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    description: "A fast, accessible portfolio with light/dark themes and responsive design.",
    href: "https://jordybreur.nl",
    imageSrc: "/project-placeholder.svg",
  },
  {
    title: "Design System",
    tech: ["React", "Storybook", "Testing"],
    description: "Reusable UI components with strong accessibility and documentation.",
    href: "https://example.com",
    imageSrc: "/project-placeholder.svg",
  },
  {
    title: "API Integration",
    tech: ["Node.js", "GraphQL"],
    description: "Robust API layer with caching and error handling.",
    href: "https://example.com",
    imageSrc: "/project-placeholder.svg",
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-semibold tracking-tight text-cool_gray-400 dark:text-ghost_white-800">Projecten</h1>
        <p className="mt-3 max-w-2xl text-cool_gray-600 dark:text-ghost_white-800/80">Een selectie van projecten die mijn ervaring in front-end engineering en UX laten zien.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
