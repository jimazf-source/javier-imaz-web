import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const email = typeof body.email === "string" ? body.email.trim().slice(0, 254) : "";
  if (!email.includes("@")) {
    return NextResponse.json({ message: "Introduce un correo válido." }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);
  if (!apiKey || !listId) {
    return NextResponse.json(
      {
        message:
          "La newsletter se enviará mediante Brevo cuando se complete la conexión de la cuenta.",
      },
      { status: 503 },
    );
  }

  const response = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({ email, listIds: [listId], updateEnabled: true }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: "No ha sido posible completar la suscripción." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Gracias. Ya formas parte de las novedades." });
}
