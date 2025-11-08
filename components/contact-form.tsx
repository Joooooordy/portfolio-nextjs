"use client";
import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(values: FormState) {
    const e: Partial<FormState> = {};
    if (!values.name.trim()) e.name = "Vul je naam in.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = "Vul een geldig e-mailadres in.";
    if (values.message.trim().length < 10) e.message = "Bericht moet minimaal 10 tekens bevatten.";
    return e;
  }

  function onChange<K extends keyof FormState>(key: K) {
    return (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const next = { ...form, [key]: ev.target.value } as FormState;
      setForm(next);
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    };
  }

  async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const e = validate(form);
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    await new Promise((r) => setTimeout(r, 400));
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div role="status" className="mt-8 rounded-xl border border-dark_spring_green-400/40 bg-dark_spring_green-900 p-4 text-dark_spring_green-400 dark:border-dark_spring_green-700/40 dark:bg-dark_spring_green-200/20">
        Bedankt voor je bericht! Ik neem snel contact met je op.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-cool_gray-500 dark:text-ghost_white-800">Naam</label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={onChange("name")}
          className="block w-full rounded-lg border border-cool_gray-800/20 bg-ghost_white-900 px-4 py-2 text-cool_gray-500 outline-none ring-0 placeholder:text-cool_gray-700 focus:border-syracuse_red_orange-500 dark:border-cool_gray-300/20 dark:bg-cool_gray-200 dark:text-ghost_white-800"
          placeholder="Uw naam"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          required
        />
        {errors.name && <p id="name-error" className="mt-1 text-sm text-syracuse_red_orange-600">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-cool_gray-500 dark:text-ghost_white-800">E‑mail</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={onChange("email")}
          className="block w-full rounded-lg border border-cool_gray-800/20 bg-ghost_white-900 px-4 py-2 text-cool_gray-500 outline-none ring-0 placeholder:text-cool_gray-700 focus:border-syracuse_red_orange-500 dark:border-cool_gray-300/20 dark:bg-cool_gray-200 dark:text-ghost_white-800"
          placeholder="jij@voorbeeld.nl"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          required
        />
        {errors.email && <p id="email-error" className="mt-1 text-sm text-syracuse_red_orange-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-cool_gray-500 dark:text-ghost_white-800">Bericht</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={onChange("message")}
          className="block w-full rounded-lg border border-cool_gray-800/20 bg-ghost_white-900 px-4 py-2 text-cool_gray-500 outline-none ring-0 placeholder:text-cool_gray-700 focus:border-syracuse_red_orange-500 dark:border-cool_gray-300/20 dark:bg-cool_gray-200 dark:text-ghost_white-800"
          placeholder="Hoe kan ik je helpen?"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          required
        />
        {errors.message && <p id="message-error" className="mt-1 text-sm text-syracuse_red_orange-600">{errors.message}</p>}
      </div>

      <div>
        <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-syracuse_red_orange-500 px-5 py-2.5 text-sm font-medium text-ghost_white hover:bg-syracuse_red_orange-600 focus:outline-none focus:ring-2 focus:ring-syracuse_red_orange-700">
          Send message
        </button>
      </div>
    </form>
  );
}
