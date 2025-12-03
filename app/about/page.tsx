"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Palette, Zap, Briefcase, GraduationCap, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TechCard from "@/components/tech-card";
import { categorizedTechStack } from "@/data/techStack";

export default function AboutPage() {
  return (
    <div className="relative w-full min-h-screen  text-ghost_white overflow-x-hidden">
      {/* Floating background orbs for visual continuity with hero */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-dark_spring_green-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-syracuse_red_orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-oxford_blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <section className="relative z-10 py-20 font-geist">
        <div className="container mx-auto px-6">
          {/* Page Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-4xl font-bold mb-8 text-left text-ghost_white-800"
          >
            Over Mij
          </motion.h1>

          {/* Main Content Grid - Text Card and Image Card */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            {/* Left: Introductory Text Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-cool_gray-300/80 rounded-2xl shadow-lg backdrop-blur-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 text-left h-full p-8">
                <CardContent className="space-y-4 p-0">
                  <p className="text-cool_gray-900 text-base md:text-lg leading-relaxed">
                    Ik ben <span className="font-semibold text-oxford_blue-800">Jordy Breur</span>, een gemotiveerde Developer met een solide basis in PHP en een grote liefde voor webontwikkeling. Met een grondige kennis van het Laravel-framework, samen met praktische ervaring in het ontwikkelen en onderhouden van dynamische webapplicaties, heb ik bewezen dat ik op een effectieve manier kan bijdragen aan zowel nieuwe projecten als bestaande systemen.
                  </p>
                  <p className="text-cool_gray-900 text-base md:text-lg leading-relaxed ">
                    Ik ben sterk in probleemoplossend denken en heb een goed oog voor detail, waardoor ik snel nieuwe technologieën en tools kan leren en toepassen. Mijn goede communicatieve vaardigheden en een teamgerichte aanpak maken het mogelijk om op een effectieve manier samen te werken met collega's en belanghebbenden.
                  </p>
                  <p className="text-cool_gray-900 text-base md:text-lg leading-relaxed ">
                    Naast code hecht ik waarde aan sterke UX, doordachte designsystemen en een soepele ontwikkelaarservaring.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right: Image Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-cool_gray-300/80 rounded-2xl shadow-lg backdrop-blur-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center p-8 md:p-12 h-full">
                <Image 
                  src="/images/hello.svg"
                  alt="Jordy Breur profiel foto" 
                  width={320}
                  height={320}
                  className="w-64 h-64 md:w-80 md:h-80 object-contain"
                  priority
                />
              </Card>
            </motion.div>
          </div>

          {/* Highlights Cards - Education, Business, Passion */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-cool_gray-300/80 rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 p-6 h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-syracuse_red_orange-600/20 rounded-xl">
                    <GraduationCap className="w-8 h-8 text-syracuse_red_orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-syracuse_red_orange-600">
                    Cum Laude Afgestudeerd
                  </h3>
                  <p className="text-cool_gray-900">
                    In 2025 ben ik Cum Laude afgestudeerd in Software Development, met een sterke focus op moderne webontwikkeling.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/*<motion.div*/}
            {/*  initial={{ opacity: 0, y: 30 }}*/}
            {/*  animate={{ opacity: 1, y: 0 }}*/}
            {/*  transition={{ duration: 0.6, delay: 0.5 }}*/}
            {/*>*/}
            {/*  <Card className="bg-cool_gray-300/80 rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 p-6 h-full">*/}
            {/*    <div className="flex flex-col items-center text-center space-y-4">*/}
            {/*      <div className="p-4 bg-dark_spring_green-600/20 rounded-xl">*/}
            {/*        <Briefcase className="w-8 h-8 text-syracuse_red_orange-600" />*/}
            {/*      </div>*/}
            {/*      <h3 className="text-xl font-semibold text-dark_spring_green-600">*/}
            {/*        Eigenaar BreurWeb*/}
            {/*      </h3>*/}
            {/*      <p className="text-cool_gray-900 font-semibold">*/}
            {/*        Sinds november 2025 run ik mijn eigen bedrijf, BreurWeb, waar ik maatwerk webprojecten ontwikkel.*/}
            {/*      </p>*/}
            {/*    </div>*/}
            {/*  </Card>*/}
            {/*</motion.div>*/}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="bg-cool_gray-300/80 rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 p-6 h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-oxford_blue-800/20 rounded-xl">
                    <Heart className="w-8 h-8 text-syracuse_red_orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-oxford_blue-800">
                    Passie voor Design
                  </h3>
                  <p className="text-cool_gray-900">
                    Een liefde voor strakke, moderne interfaces met focus op gebruiksvriendelijkheid en pixel-perfect UI's.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-4xl font-bold mb-8 text-left text-ghost_white-800"
            >
                Tech Stack
            </motion.h1>
          {/* Tech Stack Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="bg-cool_gray-300/80 rounded-2xl shadow-lg backdrop-blur-md hover:shadow-2xl transition-all duration-300 p-6 sm:p-8">
              <CardContent>
                <div className="space-y-8 p-0" aria-label="Overzicht van technologie‑stack">
                  {categorizedTechStack.map((category) => (
                    <div key={category.category}>
                      <h3 className="mb-4 text-lg font-semibold text-oxford_blue-800">{category.category}</h3>
                      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {category.technologies.map((tech) => (
                          <TechCard key={`${category.category}-${tech.name}`} name={tech.name} logo={tech.logo} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
