"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(true);
    setMessage("");
    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    });
    const data = await response.json();
    setMessage(data.message);
    setSubmitting(false);
    if (response.ok) form.reset();
  }

  return (
    <form className="mt-9" onSubmit={handleSubmit}>
      <label htmlFor="newsletter-email" className="sr-only">
        Correo electrónico
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          required
          id="newsletter-email"
          type="email"
          name="email"
          placeholder="Tu correo electrónico"
          className="min-h-14 flex-1 rounded-full border border-parchment/20 bg-ink/50 px-6 text-sm text-ivory outline-none transition placeholder:text-muted focus:border-gold"
        />
        <button
          disabled={submitting}
          className="min-h-14 rounded-full bg-gold px-8 text-sm font-semibold text-ink transition hover:bg-gold-light disabled:opacity-60"
        >
          {submitting ? "Enviando..." : "Suscribirme"}
        </button>
      </div>
      {message && <p className="mt-4 text-sm text-parchment">{message}</p>}
      <p className="mt-4 text-xs leading-6 text-muted">
        Novedades editoriales y lanzamientos. Suscripción gestionada con Brevo.
      </p>
    </form>
  );
}
