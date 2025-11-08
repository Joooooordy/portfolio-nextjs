import Link from "next/link";

export default function Home() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl text-center sm:text-left">
        <p className="mb-3 text-md font-semibold italic tracking-widest text-dark_spring_green-600">Mijn naam is</p>
        <h1 className="text-4xl font-semibold tracking-tight text-cool_gray-400 sm:text-5xl dark:text-ghost_white-800">Jordy Breur</h1>
        <p className="mt-4 max-w-2xl text-lg text-cool_gray-400 dark:text-ghost_white-800/80">
          Ik bouw snelle en toegankelijke webervaringen met Next.js, TypeScript en moderne tooling.
        </p>

        {/* Introductietekst NL */}
        <div className="mt-8 max-w-3xl space-y-4 text-cool_gray-400 dark:text-ghost_white-800/80">
          <p>
            Ik ben een gemotiveerde Developer met een solide basis in PHP en een grote liefde voor webontwikkeling. Met een grondige kennis van het Laravel-framework, samen met praktische ervaring in het ontwikkelen en onderhouden van dynamische webapplicaties, heb ik bewezen dat ik op een effectieve manier kan bijdragen aan zowel nieuwe projecten als bestaande systemen.
          </p>
          <p>
            Ik ben sterk in probleemoplossend denken en heb een goed oog voor detail, waardoor ik snel nieuwe technologieën en tools kan leren en toepassen. Mijn goede communicatieve vaardigheden en een teamgerichte aanpak maken het mogelijk om op een effectieve manier samen te werken met collega&apos;s en belanghebbenden, waardoor projecten soepel en succesvol worden afgerond.
          </p>
        </div>

        {/* Call to action */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:items-start">
          <Link
            href="/projecten"
            className="rounded-full bg-syracuse_red_orange-500 px-6 py-3 text-sm font-medium text-ghost_white shadow-soft hover:bg-syracuse_red_orange-600 focus:outline-none focus:ring-2 focus:ring-syracuse_red_orange-600/60"
            aria-label="Bekijk mijn projecten"
          >
            Bekijk mijn projecten
          </Link>
          <p className="text-sm text-cool_gray-400 dark:text-ghost_white-800/80 sm:ml-2">
            Een van mijn recente projecten is{' '}
            <a
              href="https://rizohairstyling.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-cool_gray-300/60 underline-offset-4 hover:text-dark_spring_green-600 dark:decoration-cool_gray-300/30"
            >
              rizohairstyling.nl
            </a>
            , dé kapsalon en barbershop in Oud Gastel.
          </p>
        </div>

        {/* Secundaire actie (optioneel) */}
        <div className="mt-4">
          <Link
            href="/contact"
            className="rounded-full border border-cool_gray-300 px-6 py-3 text-sm font-medium text-cool_gray-400 hover:text-dark_spring_green-600 hover:border-dark_spring_green-600/60 focus:outline-none focus:ring-2 focus:ring-syracuse_red_orange-600/40 dark:border-cool_gray-300/20 dark:text-ghost_white-800"
          >
            Neem contact op
          </Link>
        </div>
      </div>
    </section>
  );
}
