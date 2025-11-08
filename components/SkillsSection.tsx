import { FaCode, FaDatabase, FaUsers, FaBusinessTime, FaLightbulb } from "react-icons/fa";

export default function SkillsSection() {
    const skills = [
        {
            title: "Webontwikkeling & Design",
            desc: "Het creëren van gebruiksvriendelijke en visueel aantrekkelijke websites met moderne front-end technieken, van concept tot implementatie. Ik focus op responsive layouts, interacties en esthetische details die de gebruikerservaring versterken.",
            icon: <FaCode className="w-6 h-6 text-ghost_white" />
        },
        {
            title: "Backend Development",
            desc: "Opzetten van robuuste backend systemen, API's en databases die jouw applicaties betrouwbaar en schaalbaar maken. Ik zorg voor een solide architectuur, foutafhandeling en optimale prestaties.",
            icon: <FaDatabase className="w-6 h-6 text-ghost_white" />
        },
        {
            title: "Samenwerking & Communicatie",
            desc: "Effectieve communicatie en teamwork zijn essentieel. Ik werk transparant samen met collega’s en klanten om tot de beste oplossingen te komen en projecten soepel te laten verlopen.",
            icon: <FaUsers className="w-6 h-6 text-ghost_white" />
        },
        {
            title: "Eigen Bedrijf – BreurWeb",
            desc: "Sinds november 2025 run ik mijn eigen bedrijf, BreurWeb. Hier ontwikkel ik maatwerk websites en webapplicaties voor klanten, waarbij ik mijn kennis en passie voor webontwikkeling volledig kan inzetten.",
            icon: <FaBusinessTime className="w-6 h-6 text-ghost_white" />
        },
        {
            title: "Blijf Nieuwsgierig",
            desc: "Continu leren en experimenteren staat centraal in mijn werk. Ik lever kwaliteit, blijf op de hoogte van de nieuwste technologieën en zorg dat elk project technisch én visueel vooruitstrevend is.",
            icon: <FaLightbulb className="w-6 h-6 text-ghost_white" />
        },
    ];

    return (
        <section className="container mx-auto px-6 py-16">
            <div className="text-left">
                <h2 className="text-3xl font-bold text-oxford_blue-600 mb-8 font-geist">Wat ik doe</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                {skills.map((s, idx) => (
                    <div
                        key={s.title}
                        className={`p-6 rounded-2xl shadow-lg hover:shadow-2xl text-ghost_white transition-transform transform hover:scale-105 will-change-transform ${
                            idx === skills.length - 1
                                ? "bg-oxford_blue-600" // laatste skill andere kleur
                                : "bg-dark_spring_green-500"
                        }`}
                    >
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ghost_white/10">
                            {s.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2 font-geist">{s.title}</h3>
                        <p className="text-ghost_white-800 text-sm">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
