import Link from "next/link";
import Image from "next/image";

export default function ProjectsSection() {
    const projects = [
        {
            title: "Rizo Hairstyling",
            desc: "Snelle website met focus op SEO en conversie.",
            image: "/rizohairstyling.png",
            href: "https://rizohairstyling.nl",
        },
        {
            title: "Portfolio",
            desc: "Moderne, toegankelijke portfolio‑site.",
            image: "/profile.svg",
            href: "/projects",
        },
        {
            title: "E‑commerce POC",
            desc: "Product listing, filters en performance‑tuning.",
            image: "/profile.svg",
            href: "/projects",
        },
    ];

    return (
        <section className="container mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-cool_gray-200">Uitgelichte Projecten</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((p) => (
                    <article key={p.title}
                             className="bg-cool_gray-300 rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden will-change-transform hover:scale-105 transition-all duration-300 ease-out">
                        <div className="relative w-full h-48">
                            <Image src={p.image} alt={p.title} fill className="object-cover"/>
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-cool_gray-900 mb-2">{p.title}</h3>
                            <p className="text-cool_gray-100 mb-4">{p.desc}</p>
                            <Link href={p.href}
                                  className="inline-block bg-oxford_blue hover:bg-oxford_blue-600 text-ghost_white py-2 px-4 rounded-xl font-semibold transition-all duration-300 ease-out">
                                Bekijk Project
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
