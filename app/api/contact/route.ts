import { NextResponse } from "next/server";

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 5000) : "";
}

export async function POST(request: Request) {
  const body = await request.json();
  if (clean(body.website)) {
    return NextResponse.json({ message: "Mensaje recibido." });
  }

  const name = clean(body.name);
  const email = clean(body.email);
  const message = clean(body.message);
  if (!name || !email.includes("@") || message.length < 5) {
    return NextResponse.json(
      { message: "Completa el nombre, el correo y el mensaje." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    return NextResponse.json(
      {
        message:
          "El formulario estará disponible próximamente. Mientras tanto, puedes contactar por Instagram.",
      },
      { status: 503 },
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "Web Javier Imaz Fandos <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `Nuevo mensaje web de ${name}`,
      text: `${name} <${email}>\n\n${message}`,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: "No se pudo enviar el mensaje. Prueba de nuevo más tarde." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Gracias. Tu mensaje se ha enviado correctamente." });
}
