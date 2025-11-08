"use client";
import { useTheme } from "./theme-provider";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Avoid hydration mismatch by rendering nothing until mounted
  if (!mounted) return (
    <button aria-label="Toggle theme" className="h-10 w-10 rounded-full bg-cool_gray-900/40 dark:bg-black/40" />
  );

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-cool_gray-800/40 bg-ghost_white-800 text-cool_gray-400 shadow-soft hover:bg-ghost_white-900 hover:text-dark_spring_green-600 dark:border-cool_gray-300/20 dark:bg-cool_gray-200 dark:text-ghost_white-800 dark:hover:bg-cool_gray-300"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Sun/Moon icons */}
      {isDark ? (
        // Sun
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
          <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 4a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm0-18a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm10 7h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2ZM3 12H2a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Zm15.66 7.66a1 1 0 0 1-1.41 0l-.71-.7a1 1 0 1 1 1.41-1.42l.71.71a1 1 0 0 1 0 1.41ZM6.76 6.76a1 1 0 0 1-1.41 0l-.71-.71A1 1 0 0 1 6.05 4.63l.71.71a1 1 0 0 1 0 1.42Zm12.48-1.41-.71.71a1 1 0 1 1-1.41-1.42l.71-.71a1 1 0 1 1 1.41 1.42ZM6.76 17.24l-.71.71A1 1 0 1 1 4.63 16.6l.71-.71a1 1 0 1 1 1.42 1.41Z"/>
        </svg>
      ) : (
        // Moon
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
          <path d="M21.64 13A9 9 0 1 1 11 2.36 7 7 0 1 0 21.64 13Z"/>
        </svg>
      )}
    </button>
  );
}
