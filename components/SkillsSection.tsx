import { Code, Database, Users, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function SkillsSection() {
    const skills = [
        {
            title: "Webontwikkeling & Design",
            desc: "Het creëren van gebruiksvriendelijke en visueel aantrekkelijke websites met moderne front-end technieken, van concept tot implementatie. Ik focus op responsive layouts, interacties en esthetische details die de gebruikerservaring versterken.",
            icon: <Code className="w-6 h-6 text-syracuse_red_orange-600" />
        },
        {
            title: "Backend Development",
            desc: "Opzetten van robuuste backend systemen, API's en databases die jouw applicaties betrouwbaar en schaalbaar maken. Ik zorg voor een solide architectuur, foutafhandeling en optimale prestaties.",
            icon: <Database className="w-6 h-6 text-syracuse_red_orange-600" />
        },
        {
            title: "Samenwerking & Communicatie",
            desc: "Effectieve communicatie en teamwork zijn essentieel. Ik werk transparant samen met collega’s en klanten om tot de beste oplossingen te komen en projecten soepel te laten verlopen.",
            icon: <Users className="w-6 h-6 text-syracuse_red_orange-600" />
        },
        // {
        //     title: "Eigen Bedrijf – BreurWeb",
        //     desc: "Sinds november 2025 run ik mijn eigen bedrijf, BreurWeb. Hier ontwikkel ik maatwerk websites en webapplicaties voor klanten, waarbij ik mijn kennis en passie voor webontwikkeling volledig kan inzetten.",
        //     icon: <Briefcase className="w-6 h-6 text-syracuse_red_orange-600" />
        // },
    ];

    return (
        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <div className="text-left sm:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-ghost_white-800 mb-6 sm:mb-8 font-geist">Wat Ik Doe</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {skills.map((s, idx) => (
                    <Card
                        key={s.title}
                        className={`rounded-xl shadow-md hover:shadow-lg bg-cool_gray-300 text-ghost_white p-5 sm:p-6 text-left`}
                    >
                        <CardContent className="p-0">
                            <div className="mb-4 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-ghost_white/10 ">
                                {s.icon}
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold mb-2">{s.title}</h3>
                            <p className="text-ghost_white-800 text-sm leading-relaxed">{s.desc}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
