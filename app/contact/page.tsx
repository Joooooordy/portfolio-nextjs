export const metadata = {
  title: "Contact — Jordy Breur",
  description: "Neem contact op met Jordy Breur voor samenwerkingen of vragen.",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-12 sm:py-16">
        <div className="mx-auto container px-6">
          <header className="mb-8 sm:mb-10">
            <h1 className="text-3xl font-semibold tracking-tight text-cool_gray-400">Contact</h1>
            <p className="mt-2 text-cool_gray-600">
              Heb je een idee, project of vraag? Stuur me een bericht!
            </p>
          </header>

          <div className="rounded-2xl border border-cool_gray-800/20 bg-ghost_white-900/70 p-6 shadow-soft backdrop-blur">
            <form action="#" method="post" noValidate aria-labelledby="contact-title" className="grid grid-cols-1 gap-5">
              <h2 id="contact-title" className="sr-only">Stuur een bericht</h2>

              <div>
                <label htmlFor="naam" className="mb-1 block text-sm font-medium text-cool_gray-400">Naam</label>
                <input
                  id="naam"
                  name="naam"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Jouw naam"
                  className="block w-full rounded-xl border border-cool_gray-800/20 bg-ghost_white-800/80 px-3 py-2 text-cool_gray-400 placeholder-cool_gray-700 shadow-sm outline-none ring-0 transition focus:border-oxford_blue-500 focus:ring-2 focus:ring-oxford_blue-600/40 dark:border-cool_gray-300/10 dark:bg-cool_gray-200 dark:text-ghost_white-800 dark:placeholder-ghost_white-800/70"
                  aria-describedby="naam-help"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-cool_gray-400 ">E‑mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="jij@voorbeeld.nl"
                  className="block w-full rounded-xl border border-cool_gray-800/20 bg-ghost_white-800/80 px-3 py-2 text-cool_gray-400 placeholder-cool_gray-700 shadow-sm outline-none ring-0 transition focus:border-oxford_blue-500 focus:ring-2 focus:ring-oxford_blue-600/40 dark:border-cool_gray-300/10 dark:bg-cool_gray-200 dark:text-ghost_white-800 dark:placeholder-ghost_white-800/70"
                />
              </div>

              <div>
                <label htmlFor="onderwerp" className="mb-1 block text-sm font-medium text-cool_gray-400 ">Onderwerp</label>
                <input
                  id="onderwerp"
                  name="onderwerp"
                  type="text"
                  required
                  placeholder="Waar gaat het over?"
                  className="block w-full rounded-xl border border-cool_gray-800/20 bg-ghost_white-800/80 px-3 py-2 text-cool_gray-400 placeholder-cool_gray-700 shadow-sm outline-none ring-0 transition focus:border-oxford_blue-500 focus:ring-2 focus:ring-oxford_blue-600/40 dark:border-cool_gray-300/10 dark:bg-cool_gray-200 dark:text-ghost_white-800 dark:placeholder-ghost_white-800/70"
                />
              </div>

              <div>
                <label htmlFor="bericht" className="mb-1 block text-sm font-medium text-cool_gray-400 ">Bericht</label>
                <textarea
                  id="bericht"
                  name="bericht"
                  required
                  rows={6}
                  placeholder="Vertel kort over je project, doel en planning."
                  className="block w-full resize-y rounded-xl border border-cool_gray-800/20 bg-ghost_white-800/80 px-3 py-2 text-cool_gray-400 placeholder-cool_gray-700 shadow-sm outline-none ring-0 transition focus:border-oxford_blue-500 focus:ring-2 focus:ring-oxford_blue-600/40 dark:border-cool_gray-300/10 dark:bg-cool_gray-200 dark:text-ghost_white-800 dark:placeholder-ghost_white-800/70"
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="text-sm text-cool_gray-400 ">
                  Of mail direct: {" "}
                  <a href="mailto:info@jordybreur.nl" className="underline decoration-cool_gray-300/60 underline-offset-4 hover:text-dark_spring_green-600 dark:decoration-cool_gray-300/30">info@jordybreur.nl</a>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-oxford_blue-500 px-6 py-2.5 text-sm font-medium text-ghost_white shadow-soft transition hover:bg-oxford_blue-600 focus:outline-none focus:ring-2 focus:ring-oxford_blue-600/50"
                  aria-label="Verstuur bericht"
                >
                  Versturen
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
