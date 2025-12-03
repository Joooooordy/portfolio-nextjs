'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
    const [text, setText] = useState('')
    const [subtitleIndex, setSubtitleIndex] = useState(0)
    const titles = ['Backend Ontwikkelaar', 'UI/UX Ontwerper', 'Frontend Ontwikkelaar']
    const subtitles = [
        'Passie voor het creëren van gebruiksvriendelijke en visueel aantrekkelijke websites.',
        'Gespecialiseerd in het bouwen van schaalbare en onderhoudbare webapplicaties.',
        'Toegewijd aan het schrijven van schone, efficiënte en goed gedocumenteerde code.',
        'WordPress, Laravel, PHP en meer.'
    ]
    
    useEffect(() => {
        let titleIndex = 0
        let charIndex = 0
        let isDeleting = false
        
        const type = () => {
            const currentTitle = titles[titleIndex]
            
            if (isDeleting) {
                setText(currentTitle.substring(0, charIndex - 1))
                charIndex--
            } else {
                setText(currentTitle.substring(0, charIndex + 1))
                charIndex++
            }
            
            if (!isDeleting && charIndex === currentTitle.length) {
                setTimeout(() => { isDeleting = true }, 2000)
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false
                titleIndex = (titleIndex + 1) % titles.length
            }
            
            setTimeout(type, isDeleting ? 50 : 100)
        }
        
        type()
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setSubtitleIndex((prev) => (prev + 1) % subtitles.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative w-full h-screen overflow-hidden text-ghost_white">
            {/* Background animation canvas */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-cool_gray-200 via-cool_gray-300 to-cool_gray-400" style={{ transform: 'translate3d(0,0,0)' }}>
                <div className="absolute inset-0 opacity-20" style={{ transform: 'translate3d(0,0,0)' }}>
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-dark_spring_green-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ transform: 'translate3d(0,0,0)' }}></div>
                    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-syracuse_red_orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow" style={{ animationDelay: '2s', transform: 'translate3d(0,0,0)' }}></div>
                    <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-oxford_blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '4s', transform: 'translate3d(0,0,0)' }}></div>
                </div>
            </div>

            {/* Floating decorative SVG elements */}
            <Image
                src="/images/pose.svg"
                alt=""
                width={80}
                height={80}
                className="absolute top-10 left-10 w-20 opacity-20 animate-float-slow hidden md:block"
                style={{ zIndex: 5 }}
                loading="lazy"
            />
            <Image
                src="/images/smile.svg"
                alt=""
                width={80}
                height={80}
                className="absolute bottom-20 right-20 w-20 opacity-20 animate-float hidden md:block"
                style={{ zIndex: 5 }}
                loading="lazy"
            />

            {/* Main content */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center space-y-8 text-center font-geist px-6">
                {/* Profile Avatar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <Card className="p-4 bg-cool_gray-300/90 rounded-full shadow-2xl border-2 border-ghost_white-900/20">
                        <Avatar className="w-32 h-32 md:w-40 md:h-40 lg:h-60 lg:w-60">
                            <AvatarImage src="/images/profile.svg" alt="Jordy Breur" />
                            <AvatarFallback className="text-4xl font-bold bg-dark_spring_green-600 text-ghost_white">JB</AvatarFallback>
                        </Avatar>
                    </Card>
                </motion.div>

                {/* Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-4"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-ghost_white-800">
                        Hoi, ik ben <span className="text-syracuse_red_orange-600">Jordy Breur</span>
                    </h1>

                    {/* Typewriter effect */}
                    <div className="text-2xl md:text-3xl text-oxford_blue-800 h-12 flex items-center justify-center">
                        <span>{text}</span>
                        <span className="inline-block w-0.5 h-8 bg-oxford_blue-800 ml-1 animate-pulse"></span>
                    </div>
                </motion.div>

                {/* Subtitle carousel */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative h-16 overflow-hidden w-full max-w-2xl font-semibold"
                >
                    <div className="text-xl md:text-2xl text-ghost_white-800">
                        {subtitles.map((subtitle, index) => (
                            <motion.h5
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: index === subtitleIndex ? 1 : 0,
                                    y: index === subtitleIndex ? 0 : 20
                                }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                {subtitle}
                            </motion.h5>
                        ))}
                    </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex items-center justify-center space-x-6"
                >
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-syracuse_red_orange-600/10 hover:text-syracuse_red_orange-600 transition-colors"
                        asChild
                    >
                        <a href="https://github.com/Joooooordy" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github className="w-8 h-8 text-oxford_blue-800" />
                        </a>
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-syracuse_red_orange-600/10 hover:text-syracuse_red_orange-600 transition-colors"
                        asChild
                    >
                        <a href="https://nl.linkedin.com/in/jordy-breur-2135b924a/nl" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin className="w-8 h-8 text-oxford_blue-800" />
                        </a>
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full hover:bg-syracuse_red_orange-600/10 hover:text-syracuse_red_orange-600 transition-colors"
                        asChild
                    >
                        <a href="/contact" aria-label="Email">
                            <Mail className="w-8 h-8 text-oxford_blue-800" />
                        </a>
                    </Button>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
                >
                    <Button 
                        className="bg-syracuse_red_orange-600 hover:bg-syracuse_red_orange-700 text-ghost_white rounded-xl px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all"
                        asChild
                    >
                        <a href="/projects">Bekijk Projecten</a>
                    </Button>
                    <Button 
                        className="bg-dark_spring_green-600 hover:bg-dark_spring_green-700 text-ghost_white rounded-xl px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all"
                        asChild
                    >
                        <a href="/contact">Neem Contact Op</a>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
