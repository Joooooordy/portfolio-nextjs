"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const linkBase = "rounded-md px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-oxford_blue-600/40";
  const linkIdle = "text-cool_gray-400 hover:text-dark_spring_green-600 transition-colors duration-200 ease-out";
  const linkActive = "text-dark_spring_green-700 underline underline-offset-4 decoration-2 decoration-spring_green-500";

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black-900">
      <div className="container-px mx-auto container">
        <nav className="my-4 flex items-center justify-between rounded-xl border border-cool_gray-800/20 bg-ghost_white-900 p-3 shadow-soft" aria-label="Primair navigatiemenu">
          <Link href="/" aria-label="Jordy Breur startpagina" className={`${linkBase} inline-flex items-center gap-2 text-dark_spring_green-600 hover:text-dark_spring_green-700 transition-colors duration-200 ease-out`} aria-current={isActive("/") ? "page" : undefined}>
            <span className="font-semibold tracking-tight">jordybreur.nl</span>
          </Link>
          <div className="flex items-center gap-1 sm:gap-2">
            <Link href="/about" className={`${linkBase} ${isActive("/about") ? linkActive : linkIdle}`} aria-current={isActive("/about") ? "page" : undefined}>Over mij</Link>
            <Link href="/projects" className={`${linkBase} ${isActive("/projects") ? linkActive : linkIdle}`} aria-current={isActive("/projects") ? "page" : undefined}>Projecten</Link>
            <Link href="/contact" className={`${linkBase} ${isActive("/contact") ? linkActive : linkIdle}`} aria-current={isActive("/contact") ? "page" : undefined}>Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
