import Link from "next/link";

export const metadata = {
  title: "Privacy & Cookies — jordybreur.nl",
  description:
    "Informatie over privacy en cookies op jordybreur.nl. We gebruiken enkel functionele cookies en geen trackingcookies.",
};

export default function PrivacyPage() {
  return (
    <section className="container mx-auto py-20 max-w-5xl">
      <h1 className="text-4xl font-bold tracking-tight mb-6 text-ghost_white-800">Privacy & Cookies</h1>
      <div className="prose prose-neutral max-w-none dark:prose-invert text-ghost_white-800">
        <p>
          Deze website gebruikt op dit moment uitsluitend essentiële (functionele) cookies die nodig zijn
          voor het correct functioneren van de site. Er worden geen analytics-, advertentie- of
          trackingcookies geplaatst.

          Je kunt in de cookiemelding kiezen voor <strong>Accepteren</strong> of <strong>Weigeren</strong>.
          Je keuze wordt lokaal in je browser opgeslagen, zodat we je niet opnieuw om toestemming vragen.
          Wanneer in de toekomst niet-essentiële cookies (zoals analytics) worden toegevoegd, worden die
          pas geactiveerd na jouw expliciete toestemming.

          Heb je vragen over privacy of cookies? Neem gerust contact op via de contactpagina of download de volledige privacyverklaring hieronder.
        </p>
        
          <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
            <Link
              href="/files/Privacyverklaring%20BreurWeb.pdf"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm duration-300 ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0 hover:shadow-dark_spring_green-600/50 hover:scale-102 will-change-transform h-12 bg-syracuse_red_orange-600 hover:bg-syracuse_red_orange-700 text-ghost_white rounded-xl px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Privacyverklaring
            </Link>
            <Link
              href="/files/Algemene%20voorwaarden%20BreurWeb.pdf"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm duration-300 ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0 hover:shadow-dark_spring_green-600/50 hover:scale-102 will-change-transform h-12 bg-dark_spring_green-600 hover:bg-dark_spring_green-700 text-ghost_white rounded-xl px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Algemene voorwaarden
            </Link>
          </div>
      </div>
    </section>
  );
}
