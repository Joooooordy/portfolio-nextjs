import Link from "next/link";
import Image from "next/image";

export default function ProjectsSection() {
    const projects = [
        {
            title: "Rizo Hairstyling",
            desc: "Snelle WordPress website met focus op SEO en gebruikerservaring.",
            image: "/rizohairstyling.png",
            href: "https://rizohairstyling.nl",
        },
    ];

    return (
        <section className="container mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold mb-8 text-left text-oxford_blue-600">Uitgelichte Projecten</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((p) => (
                    <article key={p.title}
                             className="bg-cool_gray-300 rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden will-change-transform hover:scale-105 transition-all duration-300 ease-out">
                        <div className="relative w-full h-48">
                            <Image src={p.image} alt={p.title} fill className="object-cover"/>
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-ghost_white-800 mb-2">{p.title}</h3>
                            <p className="text-ghost_white-800 mb-4">{p.desc}</p>
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
