import Image from "next/image";
import Link from "next/link";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";

const timeline = [
    {
        year: "2023 - heden",
        description: "Junior Developer bij Fremen IT Workers",
        icon: <FaLaptopCode className="text-oxford_blue-600 w-6 h-6" />,
    },
    {
        year: "2024 - heden",
        description: "Junior Developer bij KPN (Remote)",
        icon: <FaLaptopCode className="text-oxford_blue-600 w-6 h-6" />,
    },
    {
        year: "2025",
        description: "Afgestudeerd Cum Laude MBO 4 Software Development",
        icon: <FaGraduationCap className="text-dark_spring_green-600 w-6 h-6" />,
    },
];

export default function AboutSection() {
    return (
        <section className="container mx-auto px-6 py-16 grid md:grid-cols-12 gap-8 font-geist text-ghost_white-500">

            {/* Profielfoto */}
            <div className="hidden sm:block md:col-span-2">
                <Image
                    src="/jordy-breur.png"
                    alt="Jordy Breur"
                    width={200}
                    height={200}
                    className="rounded-2xl shadow-lg border-2 border-dark_spring_green-600"
                />
            </div>

            {/* Profielbeschrijving */}
            <div className="md:col-span-7 space-y-6">
                <h3 className="text-3xl font-bold text-oxford_blue-600">{`Jordy Breur`}</h3>
                <p className="text-foreground leading-relaxed text-lg md:text-xl">
                    Hallo! Ik ben Jordy Breur, een gepassioneerde Junior Developer met een liefde voor moderne webontwikkeling, clean code en intuïtieve gebruikersinterfaces. In 2025 ben ik Cum Laude afgestudeerd in Software Development. Sinds november 2025 run ik ook mijn eigen bedrijf, BreurWeb, waar ik maatwerk webprojecten ontwikkel. Daarnaast werk ik momenteel bij Fremen IT Workers en KPN. Ik geloof in samenwerking, kwaliteit en het continu verbeteren van mijn vaardigheden om de best mogelijke oplossingen te leveren.</p>
                <Link 
                    href="/about"
                    className="px-8 py-4 bg-dark_spring_green text-ghost_white font-semibold rounded-lg shadow-lg will-change-transform hover:shadow-dark_spring_green-600/50 hover:scale-105 transition-all duration-300 ease-out"
                >
                    Lees meer over mij
                </Link>
            </div>

            {/* Tijdlijn */}
            <div className="md:col-span-3 space-y-6">
                <h4 className="text-xl font-bold text-oxford_blue-600 mb-4 font-geist">Carrière & Opleiding</h4>
                <div className="space-y-6">
                    {timeline.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                            <div className="flex flex-col items-center">
                                {item.icon}
                                <div className="w-px bg-cool_gray-400 flex-1 mt-1" />
                            </div>
                            <div>
                                <div className="text-geist-mono text-cool_gray-500 font-semibold">{item.year}</div>
                                <div className="text-cool_gray-300">{item.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
