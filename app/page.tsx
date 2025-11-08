import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactCTASection from '@/components/ContactCTASection'

export default function Home() {
    return (
        <div className="font-sans max-w-full overflow-x-hidden bg-black-900">
            <Hero/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectsSection/>
        </div>
    );
}
