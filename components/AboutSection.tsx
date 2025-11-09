"use client"

import Image from "next/image";
import Link from "next/link";
import { Briefcase, Code, GraduationCap, Laptop, Lightbulb, Rocket, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const timeline = [
    {
        year: "2023 - heden",
        description: "Junior Developer bij Fremen IT Workers",
        icon: <Laptop className="text-oxford_blue-600 w-6 h-6" />,
    },
    {
        year: "2024 - heden",
        description: "Junior Developer bij KPN (Remote)",
        icon: <Laptop className="text-oxford_blue-600 w-6 h-6" />,
    },
    {
        year: "2025",
        description: "Afgestudeerd Cum Laude MBO 4 Software Development",
        icon: <GraduationCap className="text-dark_spring_green-600 w-6 h-6" />,
    },
];

const journeyTimeline = [
    {
        year: "2020",
        title: "Start van mijn carrière",
        company: "",
        description: "Eerste stappen in softwareontwikkeling. Begonnen met het leren van programmeren en webontwikkeling.",
        icon: <Rocket className="w-6 h-6" />,
    },
    {
        year: "2022",
        title: "Studie Software Development",
        company: "",
        description: "Technische groei. Verdieping in softwareontwikkeling, leren van best practices en moderne technologieën.",
        icon: <Code className="w-6 h-6" />,
    },
    {
        year: "2023",
        title: "Gestart bij Fremen IT Workers",
        company: "Fremen IT Workers",
        description: "Eerste professionele ervaring. Werkzaam als Junior Developer, bijdragen aan echte projecten en samenwerken met ervaren professionals.",
        icon: <Briefcase className="w-6 h-6" />,
    },
    {
        year: "2024",
        title: "Gestart bij KPN",
        company: "KPN",
        description: "Uitbreiding van mijn professionele netwerk en ervaring opdoen bij een toonaangevend bedrijf.",
        icon: <Briefcase className="w-6 h-6" />,
    },
    {
        year: "2025",
        title: "BreurWeb & Cum Laude",
        company: "",
        description: "Nieuwe mijlpalen. Gestart met mijn eigen bedrijf BreurWeb en succesvol afgestudeerd Cum Laude in Software Development.",
        icon: <Lightbulb className="w-6 h-6" />,
    },
    {
        year: "Toekomst",
        title: "Toekomstige visie en groei",
        company: "",
        description: "Vooruitblik. Blijven innoveren, nieuwe technologieën verkennen en bijdragen aan impactvolle projecten die het verschil maken.",
        icon: <TrendingUp className="w-6 h-6" />,
    },
];

export default function AboutSection() {
    return (
        <>
            {/* Original About Section */}
            <section className="container mx-auto px-6 py-16 grid md:grid-cols-10 gap-12 text-ghost_white-500">

                {/* Profielfoto */}
                <div className="hidden sm:block md:col-span-3">
                    <div className="bg-cool_gray-300 rounded-2xl shadow-lg p-6 flex items-center justify-center hover:scale-105 transition-all duration-300">
                        <Image
                            src="/images/pose.svg"
                            alt="Jordy Breur"
                            width={200}
                            height={200}
                            className="object-contain"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Profielbeschrijving */}
                <Card className="md:col-span-7 bg-cool_gray-300 text-ghost_white-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8">
                    <CardContent className="space-y-6 p-0">
                        <p className="font-semibold leading-relaxed text-md md:text-md">
                            Hallo! Ik ben Jordy Breur, een gepassioneerde Junior Developer met een liefde voor moderne webontwikkeling, clean code en intuïtieve gebruikersinterfaces. In 2025 ben ik Cum Laude afgestudeerd in Software Development. Sinds november 2025 run ik ook mijn eigen bedrijf, BreurWeb, waar ik maatwerk webprojecten ontwikkel. Daarnaast werk ik momenteel bij Fremen IT Workers en KPN. Ik geloof in samenwerking, kwaliteit en het continu verbeteren van mijn vaardigheden om de best mogelijke oplossingen te leveren.</p>
                        <Button className="bg-syracuse_red_orange-600 text-ghost_white rounded-xl px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all"
                                asChild>
                            <Link href='/about'>
                                Lees meer over mij
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </section>

            {/* Horizontal Carousel Timeline - "Mijn Reis" */}
            <section id="over-mij" className="py-20 bg-cool_gray-200 text-ghost_white overflow-x-hidden">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-left mb-10 text-ghost_white">Mijn Reis</h2>

                    <Carousel
                        opts={{
                            align: "start",
                            loop: false,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="space-x-6 scroll-smooth snap-x snap-mandatory">
                            {journeyTimeline.map((item, idx) => (
                                <CarouselItem key={idx} className="basis-80 md:basis-96 snap-center">
                                    <Card className="bg-cool_gray-300 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[0.99] transition-all duration-300 h-full">
                                        <CardHeader className="pb-3">
                                            <div className="flex items-center justify-between m-2">
                                                <CardTitle className=" text-ghost_white-800 text-xl font-bold">
                                                    {item.year}
                                                </CardTitle>
                                                <div className="p-2 bg-dark_spring_green/20 rounded-lg text-syracuse_red_orange">
                                                    {item.icon}
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="space-y-3 p-4">
                                            <h3 className="text-xl font-semibold text-ghost_white">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm font-semibold text-dark_spring_green-700">
                                                {item.company}
                                            </p>
                                            <p className="text-cool_gray-900 leading-relaxed font-semibold">
                                                {item.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="bg-cool_gray-300 border-none hover:bg-cool_gray-400 text-ghost_white" />
                        <CarouselNext className="bg-cool_gray-300 border-none hover:bg-cool_gray-400 text-ghost_white" />
                    </Carousel>
                </div>
            </section>
        </>
    );
}
