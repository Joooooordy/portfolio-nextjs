import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact — Jordy Breur",
  description: "Stuur een bericht naar Jordy Breur.",
};

export default function ContactPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-cool_gray-400 dark:text-ghost_white-800">Contact</h1>
        <p className="mt-3 text-cool_gray-600 dark:text-ghost_white-800/80">Vragen of samenwerken? Stuur me een bericht.</p>
        <ContactForm />
      </div>
    </section>
  );
}
