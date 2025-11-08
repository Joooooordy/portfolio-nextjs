import Image from "next/image";

export interface TechCardProps {
  name: string;
  logo: string; // path under public, e.g. "/logos/html.svg"
}

export default function TechCard({ name, logo }: TechCardProps) {
  return (
    <div
      className="group relative flex flex-col items-center justify-center rounded-2xl border border-cool_gray-800/20 bg-ghost_white-900 p-5 text-center shadow-soft will-change-transform transition-all duration-300 ease-out hover:border-oxford_blue-500 hover:shadow-lg dark:border-cool_gray-300/10 dark:bg-cool_gray-200"
      role="figure"
      aria-label={`${name} technology card`}
      title={name}
    >
      <div className="relative flex size-16 items-center justify-center rounded-xl bg-ghost_white-800 ring-1 ring-cool_gray-800/20 transition-all duration-300 ease-out dark:bg-cool_gray-200/60 dark:ring-cool_gray-300/10">
        <Image
          src={logo}
          alt={`${name} logo`}
          width={48}
          height={48}
          className="transition-opacity duration-200 ease-out"
        />
        {/* Glow accent */}
        <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 blur-md transition-opacity duration-200 ease-out group-hover:opacity-40" style={{ boxShadow: "0 0 24px 6px rgba(200,76,9,0.45)" }} />
      </div>
      <figcaption className="mt-3 text-sm font-medium text-cool_gray-400 transition-colors duration-200 ease-out group-hover:text-oxford_blue-700 dark:text-ghost_white-800">
        {name}
      </figcaption>
    </div>
  );
}
