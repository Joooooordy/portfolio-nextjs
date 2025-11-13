'use client'

import { motion } from 'framer-motion'
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from 'lucide-react'
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <section className="relative max-w-full min-h-screen overflow-x-hidden text-ghost_white py-20 px-6 bg-gradient-to-t from-cool_gray-200 via-cool_gray-300 to-cool_gray-400">
      {/* Background gradient matching hero */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br" style={{ transform: 'translate3d(0,0,0)' }}>
        <div className="absolute inset-0 opacity-20" style={{ transform: 'translate3d(0,0,0)' }}>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-dark_spring_green-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ transform: 'translate3d(0,0,0)' }}></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-syracuse_red_orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow" style={{ animationDelay: '2s', transform: 'translate3d(0,0,0)' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-oxford_blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '4s', transform: 'translate3d(0,0,0)' }}></div>
        </div>
      </div>

      {/* Floating decorative SVG */}
      <Image
        src="/images/hello.svg"
        alt=""
        width={80}
        height={80}
        className="absolute top-10 right-10 w-20 opacity-20 animate-float hidden md:block"
        style={{ zIndex: 5 }}
      />

      {/* Main content */}
      <div className="relative z-10 container mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-4xl font-bold text-ghost_white-800 mb-4 text-left">
            Neem Contact Op
          </h2>
          <p className="text-lg text-ghost_white-800/90 mx-auto font-semibold text-left">
            Heb je een idee, project of vraag? Ik hoor graag van je!
          </p>
        </motion.div>

        {/* Two-column grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-cool_gray-300/80 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 h-full p-8">
              <CardContent className="space-y-6 p-0">
                <p className="text-ghost_white-800 leading-relaxed font-semibold">
                  Stuur me gerust een bericht via het formulier, of neem direct contact op via onderstaande gegevens.
                </p>

                {/* Contact details with icons */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-dark_spring_green-600/20 p-3 rounded-xl">
                      <Mail className="w-5 h-5 text-dark_spring_green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-ghost_white-800/70 font-medium">E-mail</p>
                      <a 
                        href="mailto:contact@jordybreur.nl"
                        className="text-ghost_white-800 hover:text-dark_spring_green-600 transition-colors font-semibold"
                      >
                        contact@jordybreur.nl
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-dark_spring_green-600/20 p-3 rounded-xl">
                      <Phone className="w-5 h-5 text-dark_spring_green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-ghost_white-800/70 font-medium">Telefoon</p>
                      <a 
                        href="tel:+31612345678" 
                        className="text-ghost_white-800 hover:text-dark_spring_green-600 transition-colors font-semibold"
                      >
                        +31 6 21976325
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-dark_spring_green-600/20 p-3 rounded-xl">
                      <MapPin className="w-5 h-5 text-dark_spring_green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-ghost_white-800/70 font-medium">Locatie</p>
                      <p className="text-ghost_white-800 font-semibold">
                        Fijnaart
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-ghost_white-800/20">
                  <p className="text-sm text-ghost_white-800/70 leading-relaxed">
                    Ik reageer meestal binnen 24 uur op werkdagen.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-cool_gray-300/80 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 h-full p-8">
              <CardContent>
                <ContactForm>
                </ContactForm>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
