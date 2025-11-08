export default function TestimonialsSection() {
    const testimonials = [
        {
            quote: "Jordy schakelt snel en levert strak werk. Onze site laadt merkbaar sneller en converteert beter.",
            name: "Rizo Hairstyling",
            role: "Eigenaar"
        },
        {
            quote: "Heldere communicatie en focus op details. Toegankelijkheid en performance staan écht voorop.",
            name: "Sanne",
            role: "Marketing lead"
        },
        {
            quote: "Van idee naar live in no‑time. Fijn samenwerken en een professioneel eindresultaat.",
            name: "Tom",
            role: "Ondernemer"
        },
    ];

    return (
        <section className="container mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-oxford_blue-600">Wat klanten zeggen</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((t) => (
                    <figure key={t.name}
                            className="rounded-2xl border border-cool_gray-800/20 bg-ghost_white-900/70 p-6 shadow-soft">
                        <blockquote className="text-cool_gray-400">
                            <p className="text-base">"{t.quote}"</p>
                        </blockquote>
                        <figcaption className="mt-4 text-sm text-cool_gray-600">
                            <span className="font-semibold text-cool_gray-300">{t.name}</span>
                            <span className="text-cool_gray-600"> • {t.role}</span>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}
