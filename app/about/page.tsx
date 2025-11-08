import Image from "next/image";
import TechCard from "@/components/tech-card";
import techStack from "@/data/techStack";

export const metadata = {
  title: "Over mij — Jordy Breur",
  description: "Over Jordy Breur: korte bio en technologie‑stack.",
};

export default function AboutPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-6">
        {/* Header with Profile Image */}
        <div className="mb-10 flex flex-col items-center gap-8 sm:flex-row sm:items-start">
          {/* Profile Image Card - max 500x500px */}
          <div className="group relative flex-shrink-0 overflow-hidden rounded-2xl border border-cool_gray-800/20 bg-ghost_white-900 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80">
              {/* Replace /profile.svg with your actual profile image (max 500x500px, .jpg, .png, or .webp recommended) */}
              <Image 
                src="/profile.svg" 
                alt="Jordy Breur profiel foto" 
                fill 
                sizes="(min-width: 640px) 320px, 256px" 
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Introduction Card */}
          <div className="flex-1 overflow-hidden rounded-2xl border border-cool_gray-800/20 bg-ghost_white-900 p-6 shadow-md transition-all duration-300 ease-out hover:shadow-lg sm:p-8">
            <h1 className="text-3xl font-semibold tracking-tight text-cool_gray-400 sm:text-4xl">Over mij</h1>
            <p className="mt-4 text-base leading-relaxed text-cool_gray-600 sm:text-lg">
              Ik ben een web engineer met focus op het bouwen van moderne, snelle en toegankelijke interfaces. Ik werk graag
              met TypeScript, React en het Next.js-ecosysteem om schone en onderhoudbare oplossingen te leveren.
            </p>
            <p className="mt-3 text-base leading-relaxed text-cool_gray-600">
              Naast code hecht ik waarde aan sterke UX, doordachte designsystemen en een soepele ontwikkelaarservaring.
            </p>
          </div>
        </div>

        {/* Professional Profile Card */}
        <div className="mb-10 overflow-hidden rounded-2xl border border-dark_spring_green-600/20 bg-gradient-to-br from-dark_spring_green-500 to-dark_spring_green-600 p-6 shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl sm:p-8">
          <div className="relative z-10">
            <h2 className="mb-4 text-2xl font-bold text-ghost_white sm:text-3xl">Professioneel Profiel</h2>
            <p className="text-base leading-relaxed text-ghost_white/95 sm:text-lg">
              Ik ben een gemotiveerde Developer met een solide basis in PHP en een grote liefde voor webontwikkeling. Met een grondige kennis van het Laravel-framework, samen met praktische ervaring in het ontwikkelen en onderhouden van dynamische webapplicaties, heb ik bewezen dat ik op een effectieve manier kan bijdragen aan zowel nieuwe projecten als bestaande systemen. Ik ben sterk in probleemoplossend denken en heb een goed oog voor detail, waardoor ik snel nieuwe technologieën en tools kan leren en toepassen. Mijn goede communicatieve vaardigheden en een teamgerichte aanpak maken het mogelijk om op een effectieve manier samen te werken met collega's en belanghebbenden, waardoor projecten soepel en succesvol worden afgerond.
            </p>
          </div>
        </div>

        {/* Tech Stack Card */}
        <div className="overflow-hidden rounded-2xl border border-cool_gray-800/20 bg-ghost_white-900 p-6 shadow-md transition-all duration-300 ease-out hover:shadow-lg sm:p-8">
          <h2 className="mb-6 text-2xl font-semibold text-dark_spring_green-600 sm:text-3xl">Tech Stack</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5" aria-label="Overzicht van technologie‑stack">
            {techStack.map((tech) => (
              <TechCard key={tech.name} name={tech.name} logo={tech.logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
