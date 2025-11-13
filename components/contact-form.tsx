"use client";
import React, {useState} from "react";

interface FormState {
    name: string;
    email: string;
    phone: string;
    message: string;
    company?: string; // honeypot
}

export default function ContactForm() {
    const [form, setForm] = useState<FormState>({name: "", email: "", phone: "", message: "", company: ""});
    const [errors, setErrors] = useState<Partial<FormState>>({});
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [serverMessage, setServerMessage] = useState<string | null>(null);

    function validate(values: FormState) {
        const e: Partial<FormState> = {};
        if (!values.name.trim()) e.name = "Vul je naam in.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = "Vul een geldig e-mailadres in.";
        // Phone validation: allow +, digits, spaces, hyphens, parentheses, and dots (6-20 chars, at least 6 digits)
        const phone = values.phone.trim();
        const phoneAllowed = /^[+\d\s().-]{6,20}$/;
        const digitCount = (phone.match(/\d/g) || []).length;
        if (phone) {
            if (!/^[+\d\s().-]{6,20}$/.test(phone) || digitCount < 6) {
                e.phone = "Vul een geldig telefoonnummer in.";
            }
        }
        if (values.message.trim().length < 10) e.message = "Bericht moet minimaal 10 tekens bevatten.";
        return e;
    }

    function onChange<K extends keyof FormState>(key: K) {
        return (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const next = {...form, [key]: ev.target.value} as FormState;
            setForm(next);
            setErrors((prev) => ({...prev, [key]: undefined}));
        };
    }

    async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
        ev.preventDefault();
        const e = validate(form);
        setErrors(e);
        if (Object.keys(e).length > 0) return;
        setServerMessage(null);
        setSubmitting(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    message: form.message,
                    company: form.company, // honeypot
                }),
            });

            if (res.status === 204) {
                // Honeypot triggered: behave like success but without message
                setSubmitted(true);
                return;
            }

            const data = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string };
            if (res.ok && data.success) {
                setSubmitted(true);
                setServerMessage(data.message || "Bedankt voor je bericht! Ik neem spoedig contact met je op.");
                setForm({name: "", email: "", phone: "", message: "", company: ""});
            } else {
                setServerMessage(
                    data.message || "Er ging iets mis bij het verzenden. Probeer het later opnieuw."
                );
            }
        } catch {
            setServerMessage("Er ging iets mis bij het verzenden. Probeer het later opnieuw.");
        } finally {
            setSubmitting(false);
        }
    }

    if (submitted) {
        return (
            <div role="status"
                 className="mt-8 rounded-xl border border-dark_spring_green-400/40 bg-dark_spring_green-900 p-4 text-dark_spring_green-400">
                {serverMessage || "Bedankt voor je bericht! Ik neem spoedig contact met je op."}
            </div>
        );
    }

    return (
        <form onSubmit={onSubmit} noValidate className="grid gap-5">
            <div>
                <label htmlFor="name"
                       className="mb-2 block text-sm text-ghost_white-800/70 font-medium">Naam</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={onChange("name")}
                    className="block w-full rounded-lg border border-cool_gray-800/20 bg-ghost_white-900 px-4 py-2 text-cool_gray-400 outline-none ring-0 placeholder:text-cool_gray-700 focus:border-syracuse_red_orange-500"
                    placeholder="Je naam"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    required
                />
                {errors.name &&
                    <p id="name-error" className="mt-1 text-sm text-destructive font-semibold">{errors.name}</p>}
            </div>

            <div>
                <label htmlFor="email"
                       className="mb-2 block text-sm text-ghost_white-800/70 font-medium">E‑mail</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange("email")}
                    className="block w-full rounded-lg border border-cool_gray-800/20 bg-ghost_white-900 px-4 py-2 text-cool_gray-400 outline-none ring-0 placeholder:text-cool_gray-700 focus:border-syracuse_red_orange-500"
                    placeholder="jij@voorbeeld.nl"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    required
                />
                {errors.email &&
                    <p id="email-error" className="mt-1 text-sm text-destructive font-semibold">{errors.email}</p>}
            </div>

            <div>
                <label htmlFor="phone"
                       className="mb-2 block text-sm text-ghost_white-800/70 font-medium">Telefoonnummer</label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={onChange("phone")}
                    className="block w-full rounded-lg border border-cool_gray-800/20 bg-ghost_white-900 px-4 py-2 text-cool_gray-400 outline-none ring-0 placeholder:text-cool_gray-700 focus:border-syracuse_red_orange-500"
                    placeholder="06-12345678"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone &&
                    <p id="phone-error" className="mt-1 text-sm text-destructive font-semibold">{errors.phone}</p>}
            </div>

            <div>
                <label htmlFor="message"
                       className="mb-2 block text-sm text-ghost_white-800/70 font-medium">Bericht</label>
                <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={onChange("message")}
                    className="block w-full rounded-lg border border-cool_gray-800/20 bg-ghost_white-900 px-4 py-2 text-cool_gray-400 outline-none ring-0 placeholder:text-cool_gray-700 focus:border-syracuse_red_orange-500"
                    placeholder="Hoe kan ik je helpen?"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    required
                />
                {errors.message &&
                    <p id="message-error" className="mt-1 text-sm text-destructive font-semibold">{errors.message}</p>}
            </div>

            {/* Honeypot field: hidden from users */}
            <div style={{display: "none"}} aria-hidden="true">
                <label htmlFor="company">Bedrijfsnaam</label>
                <input
                    id="company"
                    name="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.company}
                    onChange={onChange("company" as any)}
                />
            </div>

            <div>
                <button
                    type="submit"
                    disabled={submitting}
                    className="bg-dark_spring_green-600 hover:bg-dark_spring_green-700 text-ghost_white w-full rounded-xl py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                    {submitting ? "Versturen..." : "Verstuur bericht"}
                </button>
            </div>

            {serverMessage && (
                <div role="alert"
                     className="rounded-xl border border-syracuse_red_orange-400/40 bg-syracuse_red_orange-900/40 p-3 text-syracuse_red_orange-100">
                    {serverMessage}
                </div>
            )}
        </form>
    );
}
