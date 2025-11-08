'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from "next/link"
import Image from "next/image";

export default function Hero() {
    const [text, setText] = useState('')
    const titles = ['Back-end Developer', 'TypeScript Expert', 'Front-end Developer', 'React Enthusiast', 'Next.js Specialist']
    
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

    return (
        <section className="relative flex flex-col lg:flex-row items-center justify-center min-h-[90vh] px-6 gap-12 container mx-auto">
            {/* Left side - Text content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex-1 text-center lg:text-left"
            >
                <motion.p
                    className="text-oxford_blue-600 text-xl mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                >
                    Welkom op mijn portfolio!
                </motion.p>
                
                <motion.h1 
                    className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    Hallo, ik ben{' '}
                    <span className="text-dark_spring_green-600">Jordy</span>
                </motion.h1>

                <motion.h2
                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    Eigenaar van{' '}
                    <span className="text-oxford_blue-600">BreurWeb</span>
                </motion.h2>
                
                <motion.div
                    className="text-2xl md:text-3xl lg:text-4xl text-foreground/70 mb-6 h-12 flex items-center justify-center lg:justify-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
                >
                    <span>{text}</span>
                    <span className="inline-block w-0.5 h-8 bg-dark_spring_green-600 ml-1 animate-pulse"></span>
                </motion.div>
                
                <motion.p
                    className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto lg:mx-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    Ik bouw snelle, toegankelijke en onderhoudbare webervaringen met{' '}
                    <a 
                        href="https://nextjs.org/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-dark_spring_green-600 hover:underline"
                    >
                        Next.js
                    </a>
                    ,{' '}
                    <a 
                        href="https://react.dev/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-dark_spring_green-600 hover:underline"
                    >
                        React
                    </a>
                    {' '}en{' '}
                    <a 
                        href="https://www.typescriptlang.org/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-dark_spring_green-600 hover:underline"
                    >
                        TypeScript
                    </a>
                    {' '}of{' '}
                    <a 
                        href="https://wordpress.org/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-dark_spring_green-600 hover:underline"
                    >
                        WordPress
                    </a>
                    .
                </motion.p>
                
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <Link
                        href="/projects"
                        className="px-8 py-4 bg-dark_spring_green text-ghost_white font-semibold rounded-lg shadow-lg will-change-transform hover:shadow-dark_spring_green-600/50 hover:scale-105 transition-all duration-300 ease-out"
                    >
                        Bekijk Projecten
                    </Link>
                    <Link
                        href="/contact"
                        className="px-8 py-4 border-2 border-cool_gray-800/20 bg-ghost_white-900/70 text-foreground font-semibold rounded-lg shadow-lg will-change-transform hover:shadow-oxford_blue-600/50 hover:scale-105 transition-all duration-300 ease-out"
                    >
                        Neem Contact Op
                    </Link>
                </motion.div>
                
                {/* Social Links */}
                <motion.div
                    className="flex gap-4 justify-center lg:justify-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
                >
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 border-2 border-cool_gray-800/20 bg-ghost_white-900/70 rounded-full flex items-center justify-center will-change-transform hover:bg-dark_spring_green/20 transition-colors duration-300 ease-out"
                        aria-label="GitHub"
                    >
                        <svg className="w-6 h-6 text-dark_spring_green-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 border-2 border-cool_gray-800/20 bg-ghost_white-900/70 rounded-full flex items-center justify-center will-change-transform hover:bg-dark_spring_green/20 transition-colors duration-300 ease-out"
                        aria-label="LinkedIn"
                    >
                        <svg className="w-6 h-6 text-dark_spring_green-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </a>
                    <a
                        href="mailto:hallo@jordybreur.nl"
                        className="w-12 h-12 border-2 border-cool_gray-800/20 bg-ghost_white-900/70 rounded-full flex items-center justify-center will-change-transform hover:bg-dark_spring_green/20 transition-colors duration-300 ease-out"
                        aria-label="Email"
                    >
                        <svg className="w-6 h-6 text-dark_spring_green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </a>
                </motion.div>
            </motion.div>
            
            {/* Right side - Profile Image */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex-1 flex items-center justify-center"
            >
                <div className="relative">
                    <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-2 border-cool_gray-800/20 bg-ghost_white-900/70 p-2 shadow-lg will-change-auto">
                        <div className="w-full h-full rounded-full overflow-hidden relative">
                            <Image
                                src="/images/avatar.png"
                                alt="Jordy"
                                fill
                                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                    
                    {/* Floating elements - static positioning for performance */}
                    <div className="absolute -top-4 -right-4 border-2 border-cool_gray-800/20 bg-ghost_white-900/70 rounded-lg p-3 shadow-lg">
                        <svg className="w-8 h-8 text-dark_spring_green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                        </svg>
                    </div>
                    
                    <div className="absolute -bottom-4 -left-4 border-2 border-cool_gray-800/20 bg-ghost_white-900/70 rounded-lg p-3 shadow-lg">
                        <svg className="w-8 h-8 text-dark_spring_green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                        </svg>
                    </div>
                </div>
            </motion.div>
            
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
            >
                <div>
                    <svg className="w-6 h-6 text-dark_spring_green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </motion.div>
        </section>
    )
}
