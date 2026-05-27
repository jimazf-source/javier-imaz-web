"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(true);
    setMessage("");
    const response = await fetch("/api/contact", {
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
    <form onSubmit={handleSubmit} className="grid gap-5">
      <input className="hidden" tabIndex={-1} autoComplete="off" name="website" aria-hidden="true" />
      <div>
        <label className="mb-2 block text-sm text-parchment" htmlFor="name">
          Nombre
        </label>
        <input required id="name" name="name" className="form-field" />
      </div>
      <div>
        <label className="mb-2 block text-sm text-parchment" htmlFor="email">
          Email
        </label>
        <input required id="email" type="email" name="email" className="form-field" />
      </div>
      <div>
        <label className="mb-2 block text-sm text-parchment" htmlFor="message">
          Mensaje
        </label>
        <textarea required id="message" name="message" rows={7} className="form-field resize-none" />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="mt-2 min-h-14 rounded-full bg-gold px-8 text-sm font-semibold text-ink transition hover:bg-gold-light disabled:opacity-60"
      >
        {submitting ? "Enviando..." : "Enviar mensaje"}
      </button>
      {message && <p className="text-sm text-parchment">{message}</p>}
    </form>
  );
}
