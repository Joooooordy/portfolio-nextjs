"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at the top
      if (currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkBase = "rounded-md px-3 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-oxford_blue-800/40";
  const linkIdle = "text-muted-foreground hover:text-primary transition-colors duration-200 ease-out font-medium";
  const linkActive = "text-primary underline underline-offset-4 font-medium decoration-2";

  return (
    <header 
      className={`sticky top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 ease-in-out ${isContactPage ? "bg-cool_gray-400" : "bg-linear-to-tr from-cool_gray-200 via-cool_gray-300 to-cool_gray-400"}`}
    >
      <div className="container-px mx-auto container">
        <nav className="my-4 flex items-center justify-between rounded-xl border border-cool_gray-800/20 p-3 shadow-[0_1px_10px_rgba(0,0,0,0.1)]" aria-label="Primair navigatiemenu" style={{ transform: 'translate3d(0,0,0)' }}>
          <Link href="/" aria-label="Jordy Breur startpagina" className={`${linkBase} inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-200 ease-out`} aria-current={isActive("/") ? "page" : undefined}>
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
