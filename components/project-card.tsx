import Image from "next/image";
import Link from "next/link";

export interface ProjectCardProps {
  title: string;
  tech: string[];
  description: string;
  href: string;
  imageSrc: string;
}

export default function ProjectCard({ title, tech, description, href, imageSrc }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-cool_gray-800/20 bg-ghost_white-900 shadow-soft transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg dark:border-cool_gray-300/10 dark:bg-cool_gray-200" aria-labelledby={`${slugify(title)}-title`}>
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image src={imageSrc} alt="Schermafbeelding van project" fill className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
      </div>
      <div className="p-5">
        <h3 id={`${slugify(title)}-title`} className="mb-2 text-lg font-semibold text-cool_gray-400 dark:text-ghost_white-800">{title}</h3>
        <p className="mb-3 text-sm text-cool_gray-600 dark:text-ghost_white-800/80">{description}</p>
        <ul className="mb-4 flex flex-wrap gap-2" aria-label="Technologieën">
          {tech.map((t) => (
            <li key={t} className="rounded-full bg-cool_gray-900 px-2.5 py-1 text-xs text-cool_gray-500 ring-1 ring-cool_gray-800/30 dark:bg-cool_gray-300/20 dark:text-ghost_white-800/90">
              {t}
            </li>
          ))}
        </ul>
        <Link href={href} className="inline-flex items-center gap-2 rounded-lg bg-oxford_blue-500 px-4 py-2 text-sm font-medium text-ghost_white hover:bg-oxford_blue-600 transition-colors duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-oxford_blue-700" target="_blank" rel="noopener noreferrer" aria-label={`Open ${title}`}>
          Bekijk project
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
            <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3Z"/>
          </svg>
        </Link>
      </div>
    </article>
  );
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
