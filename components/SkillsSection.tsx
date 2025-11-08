export default function SkillsSection() {
    const skills = [
        {title: "Next.js & React", desc: "App Router, server components en moderne patterns."},
        {title: "TypeScript", desc: "Sterke types, DX en betrouwbaarheid in de codebase."},
        {title: "Tailwind CSS", desc: "Design systems en utility‑first workflows."},
        {title: "Performance", desc: "Core Web Vitals, caching en image optimization."},
        {title: "Toegankelijkheid", desc: "Semantiek, focus states en toetsenbordnavigatie."},
        {title: "CI/CD", desc: "Automatisering en consistente deployments."},
        {title: "CMS Integraties", desc: "Headless CMS en content workflows."},
        {title: "SEO", desc: "Technische SEO en best‑practices."},
    ];

    return (
        <section className="container mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-cool_gray-200">Mijn Vaardigheden</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.map((s) => (
                    <div key={s.title}
                         className="bg-dark_spring_green p-6 rounded-2xl shadow-xl hover:shadow-2xl text-ghost_white will-change-transform hover:scale-105 transition-all duration-300 ease-out">
                        <div
                            className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ghost_white/10">
                            {/* simple sparkles icon */}
                            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                                <path fill="currentColor"
                                      d="M11 2l1.8 3.6L17 7.4l-3.6 1.8L11 13l-1.8-3.8L5.6 7.4l3.6-1.8L11 2zm7 7l1.2 2.4L22 12l-2.8.6L18 15l-.6-2.4L14 12l2.4-.6L18 9zM6 14l.9 1.8L9 17l-2.1.2L6 19l-.9-1.8L3 17l2.1-.2L6 14z"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                        <p className="text-cool_gray-100 text-sm">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
