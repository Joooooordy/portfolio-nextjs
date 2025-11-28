"use client";

import Link from "next/link";
import {Separator} from "@/components/ui/separator";
import {Github, Linkedin} from "lucide-react";

function IconGitHub(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
            <path
                d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.85 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.14-1.52-1.14-1.52-.93-.65.07-.64.07-.64 1.03.07 1.58 1.08 1.58 1.08.92 1.6 2.42 1.14 3.01.87.09-.68.36-1.14.65-1.4-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .85-.28 2.8 1.05.81-.23 1.68-.35 2.54-.35s1.73.12 2.54.35c1.95-1.33 2.8-1.05 2.8-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.37.33.69.97.69 1.96 0 1.41-.01 2.55-.01 2.89 0 .26.18.58.69.48 3.98-1.35 6.85-5.18 6.85-9.7C22 6.58 17.52 2 12 2z"/>
        </svg>
    );
}

function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
            <path
                d="M4.98 3.5C4.98 4.6 4.07 5.5 2.98 5.5 1.9 5.5 1 4.6 1 3.5 1 2.42 1.9 1.5 2.98 1.5c1.09 0 2 .92 2 2zM1.5 8.5h3v14h-3v-14zm7 0h2.87v1.91h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v9.07h-3v-8.04c0-1.92-.03-4.39-2.67-4.39-2.67 0-3.08 2.09-3.08 4.25v8.18h-3v-14z"/>
        </svg>
    );
}

export default function Footer() {
    return (
        <footer
            className="container-px mx-auto container py-10 text-sm text-cool_gray-600 font-medium bg-color-background"
            aria-label="Footer"
        >
            <div className="flex flex-col items-center justify-between gap-6 rounded-xl border border-cool_gray-800/20 p-5 shadow-soft sm:flex-row">
                <div className="flex flex-col sm:flex-row items-center gap-7">
                    <p className="whitespace-nowrap">&copy; {new Date().getFullYear()} Jordy Breur. Alle rechten
                        voorbehouden.</p>
                    <Separator orientation="vertical" className="hidden sm:block h-12 bg-cool_gray-800/20"/>
                    <nav aria-label="Sitelinks" className="flex flex-col sm:flex-row gap-4 text-center sm:text-left">
                        <Link href="/about"
                              className="hover:text-dark_spring_green-600 transition-colors duration-200 ease-out">Over
                            mij</Link>
                        <Link href="/projects"
                              className="hover:text-dark_spring_green-600 transition-colors duration-200 ease-out">Projecten</Link>
                        <Link href="/contact"
                              className="hover:text-dark_spring_green-600 transition-colors duration-200 ease-out">Contact</Link>
                    </nav>
                    <Separator orientation="vertical" className="hidden sm:block h-12 bg-cool_gray-800/20"/>
                    <nav aria-label="Sitelinks" className="flex flex-col sm:flex-row gap-4 text-center sm:text-left">
                        <Link href="/files/Privacyverklaring.pdf"
                              className="hover:text-dark_spring_green-600 transition-colors duration-200 ease-out">Privacyverklaring
                        </Link>
                        <Link href="/files/Algemene voorwaarden.pdf"
                              className="hover:text-dark_spring_green-600 transition-colors duration-200 ease-out">Algemene
                            voorwaarden
                        </Link>
                        <Link href="/privacy"
                              className="hover:text-dark_spring_green-600 transition-colors duration-200 ease-out">Cookies
                        </Link>
                    </nav>
                    <Separator orientation="vertical" className="hidden sm:block h-12 bg-cool_gray-800/20"/>

                    <div className="text-center sm:text-left">
                        <a href="mailto:hallo@jordybreur.nl"
                           className="hover:text-dark_spring_green-600 transition-colors duration-200 ease-out">contact@jordybreur.nl</a>
                        <p className="text-cool_gray-600">Fijnaart • Beschikbaar voor freelance</p>
                    </div>
                    <a className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cool_gray-800/20 text-cool_gray-400 hover:border-oxford_blue-800 hover:text-oxford_blue-600 transition-all duration-300 ease-out"
                       href="https://github.com/Joooooordy" target="_blank" rel="noreferrer noopener"
                       aria-label="GitHub">
                        <Github className="h-5 w-5 text-oxford_blue-800"/>
                    </a>
                    <a className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cool_gray-800/20 text-cool_gray-400 hover:border-oxford_blue-800 hover:text-oxford_blue-600 transition-all duration-300 ease-out"
                       href="https://nl.linkedin.com/in/jordy-breur-2135b924a/nl" target="_blank"
                       rel="noreferrer noopener"
                       aria-label="LinkedIn">
                        <Linkedin className="w-5 h-5 text-oxford_blue-800"/>
                    </a>
                </div>
            </div>
        </footer>
    );
}
