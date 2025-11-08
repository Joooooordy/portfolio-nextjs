import Image from "next/image";
import TechCard from "@/components/tech-card";
import techStack from "@/data/techStack";

export const metadata = {
  title: "Over mij — Jordy Breur",
  description: "Over Jordy Breur: korte bio en technologie‑stack.",
};

export default function AboutPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-5xl grid gap-8 sm:grid-cols-[280px,1fr]">
        <div className="relative h-64 w-full overflow-hidden rounded-xl border border-cool_gray-800/20 bg-ghost_white-900 shadow-soft dark:border-cool_gray-300/10 dark:bg-cool_gray-200 sm:h-80">
          <Image src="/profile.svg" alt="Portret van Jordy Breur" fill sizes="(min-width: 640px) 280px, 100vw" className="object-cover" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-cool_gray-400 dark:text-ghost_white-800">Over mij</h1>
          <p className="mt-4 text-cool_gray-600 dark:text-ghost_white-800/80">
            Ik ben een web engineer met focus op het bouwen van moderne, snelle en toegankelijke interfaces. Ik werk graag
            met TypeScript, React en het Next.js-ecosysteem om schone en onderhoudbare oplossingen te leveren.
          </p>
          <p className="mt-3 text-cool_gray-600 dark:text-ghost_white-800/80">
            Naast code hecht ik waarde aan sterke UX, doordachte designsystemen en een soepele ontwikkelaarservaring.
          </p>
          <h2 className="mt-10 text-xl font-medium text-dark_spring_green-600">Technologie‑stack</h2>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5" aria-label="Overzicht van technologie‑stack">
            {techStack.map((tech) => (
              <TechCard key={tech.name} name={tech.name} logo={tech.logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
