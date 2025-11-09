import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
            <h2 className="text-4xl font-bold mb-8 text-left text-ghost_white-800">Uitgelichte Projecten</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((p) => (
                    <Card key={p.title}
                          className="bg-cool_gray-300 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-transform hover:scale-105">
                        <CardHeader className="p-0">
                            <div className="relative w-full h-60">
                                <Image src={p.image} alt={p.title} fill className="rounded-t-2xl object-cover"/>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-3 p-4">
                            <h3 className="text-xl font-bold text-ghost_white-800 mb-2">{p.title}</h3>
                            <p className="text-ghost_white-800">{p.desc}</p>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                            <Button className="bg-syracuse_red_orange-600 text-ghost_white rounded-xl px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all"
                                asChild>
                                <Link href={p.href}>
                                    Bekijk Project
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
}
