"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef, useCallback } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuPanelRef = useRef<HTMLDivElement | null>(null);
  const firstFocusRef = useRef<HTMLButtonElement | null>(null);

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

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open and manage focus
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (isMenuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      // Focus first element inside menu after open
      const t = setTimeout(() => {
        firstFocusRef.current?.focus();
      }, 10);
      return () => {
        clearTimeout(t);
        document.body.style.overflow = prev;
      };
    }
  }, [isMenuOpen]);

  // Keyboard handlers: Esc to close, Tab trap within panel
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!isMenuOpen) return;
    if (e.key === "Escape") {
      e.preventDefault();
      setIsMenuOpen(false);
      return;
    }
    if (e.key === "Tab") {
      const container = menuPanelRef.current;
      if (!container) return;
      const focusable = container.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const current = document.activeElement as HTMLElement | null;
      if (e.shiftKey) {
        if (current === first || !container.contains(current)) {
          e.preventDefault();
          (last as HTMLElement).focus();
        }
      } else {
        if (current === last) {
          e.preventDefault();
          (first as HTMLElement).focus();
        }
      }
    }
  }, [isMenuOpen]);

  const linkBase = "rounded-md px-3 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-oxford_blue-800/40";
  const linkIdle = "text-muted-foreground hover:text-primary transition-colors duration-200 ease-out font-medium";
  const linkActive = "text-primary underline underline-offset-4 font-medium decoration-2";

  return (
    <header 
      className={`top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300 ease-in-out ${isContactPage ? "bg-cool_gray-400" : "bg-linear-to-tr from-cool_gray-200 via-cool_gray-300 to-cool_gray-400"}`}
    >
      <div className="container-px mx-auto container">
        <nav className="my-4 flex items-center justify-between rounded-xl border border-cool_gray-800/20 p-3 shadow-[0_1px_10px_rgba(0,0,0,0.1)]" aria-label="Primair navigatiemenu" style={{ transform: 'translate3d(0,0,0)' }}>
          <Link href="/" aria-label="Jordy Breur startpagina" className={`${linkBase} inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-200 ease-out`} aria-current={isActive("/") ? "page" : undefined}>
            <span className="font-semibold tracking-tight">jordybreur.nl</span>
          </Link>
          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1 sm:gap-2">
            <Link href="/about" className={`${linkBase} ${isActive("/about") ? linkActive : linkIdle}`} aria-current={isActive("/about") ? "page" : undefined}>Over mij</Link>
            <Link href="/projects" className={`${linkBase} ${isActive("/projects") ? linkActive : linkIdle}`} aria-current={isActive("/projects") ? "page" : undefined}>Projecten</Link>
            <Link href="/contact" className={`${linkBase} ${isActive("/contact") ? linkActive : linkIdle}`} aria-current={isActive("/contact") ? "page" : undefined}>Contact</Link>
          </div>
          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              ref={firstFocusRef}
              type="button"
              aria-label={isMenuOpen ? "Sluit menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen(v => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-oxford_blue-800/40"
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay and Panel */}
      {/* Overlay */}
      <div
        aria-hidden={!isMenuOpen}
        className={`md:hidden fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ease-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />
      {/* Slide-in panel */}
      <aside
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={`md:hidden fixed right-0 top-0 z-50 h-dvh w-72 max-w-[85vw] shadow-xl border-l border-cool_gray-800/20 bg-cool_gray-300 text-foreground transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        ref={menuPanelRef}
        onKeyDown={handleKeyDown}
      >
        <div className="flex items-center justify-between p-4 border-b border-cool_gray-800/20">
          <span className="font-semibold tracking-tight">Menu</span>
          <button
            type="button"
            className="rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-oxford_blue-800/40 hover:text-primary"
            aria-label="Sluit menu"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="p-2" aria-label="Mobiel navigatiemenu">
          <ul className="flex flex-col gap-1 p-2">
            <li>
              <Link
                href="/about"
                className={`${linkBase} block w-full text-left ${isActive("/about") ? linkActive : linkIdle}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Over mij
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`${linkBase} block w-full text-left ${isActive("/projects") ? linkActive : linkIdle}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projecten
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`${linkBase} block w-full text-left ${isActive("/contact") ? linkActive : linkIdle}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </header>
  );
}
