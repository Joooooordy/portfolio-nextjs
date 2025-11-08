import { BoltIcon} from "@heroicons/react/24/solid";
import { UserIcon} from "@heroicons/react/24/solid";
import { CodeBracketIcon} from "@heroicons/react/24/solid";
import { ScaleIcon} from "@heroicons/react/24/solid";
import Image from 'next/image'

export default function AboutSection() {
    const highlights = [
        {title: "Performance first", text: "Snelheidsoptimalisaties voor betere SEO en UX.", icon: BoltIcon},
        {title: "Toegankelijkheid", text: "Toegankelijke interfaces volgens WCAG-richtlijnen.", icon: UserIcon},
        {title: "Clean code", text: "TypeScript, tests en herbruikbare componenten.", icon: CodeBracketIcon},
        {title: "Samenwerking", text: "Heldere communicatie en iteratieve aanpak.", icon: ScaleIcon},
    ];

    return (
        <section className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Profile card with modern styling */}
            <article
                className="group relative overflow-hidden rounded-2xl border border-dark_spring_green-600/20 bg-gradient-to-br from-dark_spring_green-500 to-dark_spring_green-600 p-8 shadow-lg transition-all duration-300 ease-out will-change-transform hover:border-dark_spring_green-600 hover:shadow-2xl">
                {/* Subtle glow effect on hover */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-30"
                    style={{ boxShadow: "inset 0 0 80px 20px rgba(107,189,113,0.4)" }}
                />

                {/* Content */}
                <div className="relative z-10">
                    {/* Logo */}
                    <div className="mb-6 flex justify-center md:justify-start">
                        <Image
                            src="/breurweb-logo.svg"
                            alt="BreurWeb Logo"
                            width={180}
                            height={54}
                            className="h-auto w-auto"
                            priority
                        />
                    </div>

                    <h2 className="mb-4 text-3xl font-bold text-ghost_white">Over BreurWeb</h2>
                    <p className="text-base leading-relaxed text-ghost_white/95 mb-4">
                        BreurWeb is gespecialiseerd in moderne webontwikkeling met een sterke focus op performance, gebruiksvriendelijkheid en clean design. Met passie voor webontwikkeling en aandacht voor detail, help ik bedrijven een sterke online aanwezigheid op te bouwen die niet alleen mooi oogt, maar ook technisch uitstekend is.
                    </p>
                    <p className="text-base leading-relaxed text-ghost_white/95">
                        Van snelle, toegankelijke websites tot maatwerk webapplicaties — elk project wordt benaderd met een zorgvuldige balans tussen esthetiek en functionaliteit. Ik geloof in samenwerking, transparante communicatie en het leveren van oplossingen die echt waarde toevoegen aan uw bedrijf.
                    </p>
                </div>

                {/* Decorative corner accent */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-dark_spring_green-400/20 blur-2xl" />
            </article>

            {/* Highlights card with modern styling */}
            <div
                className="group relative overflow-hidden rounded-2xl  p-8 shadow-lg ring-1 ring-cool_gray-800/10 transition-all duration-300 ease-out will-change-transform ">
                {/* Subtle glow effect on hover */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20"
                    style={{ boxShadow: "inset 0 0 80px 20px rgba(244,102,25,0.3)" }}
                />

                {/* Content */}
                <ul className="relative z-10 space-y-5">
                    {highlights.map((h) => {
                        const IconComponent = h.icon;
                        return (
                            <li key={h.title} className="flex items-center gap-4">
                                <span
                                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-oxford_blue-500 to-oxford_blue-600 text-ghost_white shadow-md ring-2 ring-oxford_blue-700/30 ">
                                    <IconComponent className="h-6 w-6" aria-hidden="true" />
                                </span>
                                <div className="flex-1">
                                    <p className="mb-1 text-base font-bold text-cool_gray-400">{h.title}</p>
                                    <p className="text-sm leading-relaxed text-cool_gray-300">{h.text}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>

                {/* Decorative corner accent */}
                <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-oxford_blue-500/10 blur-2xl" />
            </div>

            {/* Call-to-action section */}
            <div className="col-span-1 md:col-span-2 mt-8">
                <div className="group relative overflow-hidden rounded-2xl p-8 shadow-lg transition-shadow duration-300 ease-out">

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Image */}
                        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-ghost_white-800 ring-1 ring-cool_gray-800/10">
                            <Image
                                src="/rizohairstyling.png"
                                alt="Rizo Hairstyling website - Dé Kapsalon en Barbershop in Oud Gastel"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Text content */}
                        <div className="text-center md:text-left">
                            <p className="text-lg text-cool_gray-200 mb-6 leading-relaxed">
                                Bekijk mijn projecten om te zien wat ik heb gemaakt, bijvoorbeeld{' '}
                                <a
                                    href="https://rizohairstyling.nl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold text-oxford_blue-600 hover:text-oxford_blue-700 transition-colors duration-200 ease-in-out"
                                >
                                    rizohairstyling.nl
                                </a>
                                , dé kapsalon en barbershop in Oud Gastel.
                            </p>

                            <a
                                href="/projects"
                                className="inline-block px-8 py-4 bg-oxford_blue-600 text-ghost_white font-semibold rounded-lg shadow-lg hover:bg-oxford_blue-700 hover:shadow-oxford_blue-600/50 hover:scale-105 transform transition-all duration-300 ease-out"
                            >
                                Bekijk Alle Projecten
                            </a>
                        </div>
                    </div>

                    {/* Decorative corner accents */}
                    <div className="pointer-events-none absolute -left-8 -top-8 h-32 w-32 rounded-full bg-oxford_blue-500/20 blur-2xl" />
                    <div className="pointer-events-none absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-oxford_blue-500/20 blur-2xl" />
                </div>
            </div>
        </section>
    );
}
