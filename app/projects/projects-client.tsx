"use client";
import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import {Button} from "@/components/ui/button";

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
    image: "/images/rizohairstyling.png",
    tags: ["WordPress", "SEO"],
    category: "Web",
  },
  {
    title: "Portfolio",
    description: "Mijn persoonlijke portfolio met toegankelijke UI en moderne micro‑interacties.",
    href: "https://jordybreur.nl",
    image: "/images/portfolio.png",
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
    <section className="py-8 sm:py-8 lg:py-20">
      <div className="mx-auto container px-6 min-h-screen">
        <header className="mb-6 flex flex-col gap-4 sm:mb-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-ghost_white-800">Projecten</h1>
              <p className="mt-2 max-w-2xl text-ghost_white-800 font-semibold">
                Een selectie van projecten die mijn vaardigheden en manier van werken laten zien.
              </p>
            </div>
              <Button
                  className="bg-dark_spring_green-600 hover:bg-dark_spring_green-700 text-ghost_white rounded-xl px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all"
                  asChild
              >
                  <a href="/contact">Laten we samenwerken</a>
              </Button>
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
                  className={`rounded-full px-3 py-1.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-oxford_blue-600/40 ${
                    active
                      ? "bg-dark_spring_green-600 text-ghost_white shadow-soft"
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
              <article className="relative h-full overflow-hidden rounded-xl border border-ghost_white-800/30 bg-cool_gray-300 p-4 shadow-soft backdrop-blur transition hover:scale-102 hover:shadow-md">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-ghost_white-800/20 ring-1">
                  {p.image && (
                    <Image
                      src={p.image}
                      alt={`Afbeelding van ${p.title}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  )}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20"
                    style={{ boxShadow: "inset 0 0 160px 40px rgba(200,76,9,0.35)" }}
                  />
                </div>
                <div className="mt-4">
                  <h2 className="text-lg font-semibold text-ghost_white-800">{p.title}</h2>
                  <p className="mt-2 text-sm font-semibold text-ghost_white-800">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-cool_gray-800 bg-ghost_white-800 px-2.5 py-1 text-xs font-semibold text-cool_gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    {p.href ? (
                        <Button className="bg-syracuse_red_orange-600 text-ghost_white rounded-xl px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all"
                                asChild>
                            <a  href={p.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Open ${p.title} in een nieuw tabblad`}>Live bekijken </a>
                        </Button>
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
