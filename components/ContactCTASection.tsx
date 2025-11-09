import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactCTASection() {
    return (
        <section className="container mx-auto px-6 py-16">
            <Card className="bg-cool_gray-300 rounded-2xl shadow-xl hover:shadow-2xl text-center p-8 transition-shadow duration-300 ease-out">
                <CardContent className="p-0">
                    <h2 className="text-3xl font-bold mb-6 text-cool_gray-900">Interesse om met mij een project aan te gaan?</h2>
                    <Button asChild className="bg-dark_spring_green-500 hover:bg-dark_spring_green-600 text-ghost_white">
                        <Link href="/contact">
                            Neem Contact Op
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </section>
    );
}
