import Link from "next/link";

export default function ContactCTASection() {
    return (
        <section className="container mx-auto px-6 py-16">
            <div
                className="bg-cool_gray-300 p-8 rounded-2xl shadow-xl hover:shadow-2xl text-center transition-shadow duration-300 ease-out">
                <h2 className="text-3xl font-bold mb-6 text-cool_gray-900">Interesse om met mij een project aan te gaan?</h2>
                <Link href="/contact"
                      className="inline-block bg-dark_spring_green-500 hover:bg-dark_spring_green-500 text-ghost_white py-3 px-6 rounded-xl font-semibold will-change-transform hover:scale-105 transition-all duration-300 ease-out">
                    Neem Contact Op
                </Link>
            </div>
        </section>
    );
}
