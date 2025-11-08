"use client";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const linkBase = "rounded-md px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-syracuse_red_orange-600/40";
  const linkIdle = "text-cool_gray-400 hover:text-dark_spring_green-600 dark:text-ghost_white-800";
  const linkActive = "text-syracuse_red_orange-600 dark:text-ghost_white-800";

  return (
    <header className="container-px mx-auto max-w-6xl">
      <nav className="my-6 flex items-center justify-between rounded-xl border border-cool_gray-800/20 bg-ghost_white-900/70 p-3 shadow-soft backdrop-blur dark:border-cool_gray-300/10 dark:bg-cool_gray-200/60" aria-label="Primair">
        <Link href="/" aria-label="Jordy Breur startpagina" className={`${linkBase} inline-flex items-center gap-2 text-dark_spring_green-600 hover:text-dark_spring_green-700 dark:text-ghost_white-800 dark:hover:text-ghost_white-900`} aria-current={isActive("/") ? "page" : undefined}>
          <span className="font-semibold tracking-tight">jordybreur.nl</span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <Link href="/about" className={`${linkBase} ${isActive("/about") ? linkActive : linkIdle}`} aria-current={isActive("/about") ? "page" : undefined}>Over mij</Link>
          <Link href="/projects" className={`${linkBase} ${isActive("/projects") ? linkActive : linkIdle}`} aria-current={isActive("/projects") ? "page" : undefined}>Projecten</Link>
          <Link href="/contact" className={`${linkBase} ${isActive("/contact") ? linkActive : linkIdle}`} aria-current={isActive("/contact") ? "page" : undefined}>Contact</Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
