export default function Footer() {
  return (
    <footer className="container-px mx-auto max-w-6xl py-10 text-sm text-cool_gray-600 dark:text-ghost_white-800" aria-label="Footer">
      <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-cool_gray-800/20 bg-ghost_white-900/70 p-4 shadow-soft sm:flex-row dark:border-cool_gray-300/10 dark:bg-cool_gray-200/60">
        <p>&copy; {new Date().getFullYear()} Jordy Breur. All rights reserved.</p>
        <div className="flex gap-4">
          <a className="hover:text-syracuse_red_orange-600" href="https://github.com/" target="_blank" rel="noreferrer noopener" aria-label="GitHub">GitHub</a>
          <a className="hover:text-syracuse_red_orange-600" href="https://www.linkedin.com/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
