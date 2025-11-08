"use client";
import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

export type Category = "Web" | "Portfolio" | "Demo";

export interface Project {
  title: string;
  description: string;
  href?: string;
  image?: string; // public path
  tags: string[];
  category: Category;
}

const projects: Project[] = [
  {
    title: "Rizo Hairstyling",
    description:
      "Moderne, snelle website met focus op performance en SEO voor kapsalon en barbershop in Oud Gastel.",
    href: "https://rizohairstyling.nl",
    image: "/rizohairstyling.png",
    tags: ["WordPress", "SEO"],
    category: "Web",
  },
  {
    title: "Portfolio (deze site)",
    description: "Mijn persoonlijke portfolio met dark mode, toegankelijke UI en moderne micro‑interacties.",
    image: "/vercel.svg",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    category: "Portfolio",
  },
];

export default function ProjectsClient() {
  const [filter, setFilter] = useState<"Alles" | Category>("Alles");

  const categories: ("Alles" | Category)[] = useMemo(() => ["Alles", "Web", "Portfolio", "Demo"], []);
  const filtered = useMemo(
    () => (filter === "Alles" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto container px-6">
        <header className="mb-6 flex flex-col gap-4 sm:mb-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-cool_gray-400">Projecten</h1>
              <p className="mt-2 max-w-2xl text-cool_gray-600">
                Een selectie van projecten die mijn vaardigheden en manier van werken laten zien.
              </p>
            </div>
            <Link
              href="/contact"
              className="rounded-full bg-oxford_blue-500 px-5 py-2.5 text-sm font-medium text-ghost_white shadow-soft hover:bg-oxford_blue-600 focus:outline-none focus:ring-2 focus:ring-oxford_blue-600/50"
            >
              Laten we samenwerken
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter projecten op categorie">
            {categories.map((cat) => {
              const active = filter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-pressed={active}
                  onClick={() => setFilter(cat)}
                  className={`rounded-full px-3 py-1.5 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-oxford_blue-600/40 ${
                    active
                      ? "bg-oxford_blue-500 text-ghost_white shadow-soft"
                      : "border border-cool_gray-800/20 bg-ghost_white-900 text-cool_gray-400 hover:border-oxford_blue-500"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </header>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list" aria-label="Projectenlijst">
          {filtered.map((p) => (
            <li key={p.title} className="group">
              <article className="relative h-full overflow-hidden rounded-2xl border border-cool_gray-800/20 bg-ghost_white-900/70 p-4 shadow-soft ring-1 ring-inset ring-cool_gray-800/10 backdrop-blur transition hover:-translate-y-0.5 hover:border-oxford_blue-500 hover:ring-oxford_blue-500">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-ghost_white-800 ring-1 ring-cool_gray-800/10">
                  {p.image && (
                    <Image
                      src={p.image}
                      alt={`Afbeelding van ${p.title}`}
                      fill
                      className="object-contain p-6 transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  )}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20"
                    style={{ boxShadow: "inset 0 0 160px 40px rgba(200,76,9,0.35)" }}
                  />
                </div>
                <div className="mt-4">
                  <h2 className="text-lg font-semibold text-cool_gray-400">{p.title}</h2>
                  <p className="mt-2 text-sm text-cool_gray-600">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-cool_gray-800 bg-ghost_white-800 px-2.5 py-1 text-xs text-cool_gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    {p.href ? (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-cool_gray-800/20 bg-ghost_white-900 px-3 py-1.5 text-sm font-medium text-cool_gray-400 transition hover:border-oxford_blue-500 hover:text-dark_spring_green-600 focus:outline-none focus:ring-2 focus:ring-oxford_blue-600/40"
                        aria-label={`Open ${p.title} in een nieuw tabblad`}
                      >
                        Live bekijken
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-full border border-cool_gray-800/20 bg-ghost_white-900 px-3 py-1.5 text-sm text-cool_gray-600">
                        Privé of in ontwikkeling
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
