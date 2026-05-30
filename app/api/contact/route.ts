import { NextResponse } from "next/server";

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 5000) : "";
}

function parseSender(value: string) {
  const match = value.match(/^(.*)<([^>]+)>$/);
  if (!match) return { name: "Web Lágrimas Errantes", email: value };
  return { name: match[1].trim(), email: match[2].trim() };
}

function getBrevoApiKey() {
  return process.env.BREVO_API_KEY || process.env.CLAVE_API_BREVO || "";
}

function getListId(...values: Array<string | undefined>) {
  const value = values.find(Boolean)?.trim() || "";
  const digits = value.match(/\d+/)?.[0] || "";
  return Number(digits);
}

async function addBrevoContact({
  apiKey,
  email,
  name,
  listId,
}: {
  apiKey: string;
  email: string;
  name: string;
  listId: number;
}) {
  if (!listId) return;

  const headers = {
    "Content-Type": "application/json",
    "api-key": apiKey,
  };

  const response = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers,
    body: JSON.stringify({
      email,
      attributes: { FIRSTNAME: name },
      listIds: [listId],
      updateEnabled: true,
    }),
  });

  if (response.ok) return;

  await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers,
    body: JSON.stringify({
      email,
      listIds: [listId],
      updateEnabled: true,
    }),
  });
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

  const apiKey = getBrevoApiKey();
  const to = process.env.CONTACT_TO_EMAIL || "infolagrimas@lagrimaserrantes.com";
  const from = parseSender(
    process.env.CONTACT_FROM_EMAIL || "Web Lágrimas Errantes <infolagrimas@lagrimaserrantes.com>",
  );
  if (!apiKey) {
    return NextResponse.json(
      {
        message:
          "El formulario estará disponible cuando se complete la conexión con Brevo.",
      },
      { status: 503 },
    );
  }

  const contactListId = getListId(process.env.BREVO_CONTACT_LIST_ID);
  const newsletterListId = getListId(process.env.BREVO_LIST_ID, process.env.ID_LISTA_BREVO);
  await addBrevoContact({ apiKey, email, name, listId: contactListId });
  if (body.newsletterConsent === "on") {
    await addBrevoContact({ apiKey, email, name, listId: newsletterListId });
  }

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      sender: from,
      to: [{ email: to }],
      replyTo: { email, name },
      subject: `Nuevo mensaje web de ${name}`,
      textContent: `${name} <${email}>\n\n${message}`,
      htmlContent: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
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
