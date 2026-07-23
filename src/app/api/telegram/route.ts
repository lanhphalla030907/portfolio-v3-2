export async function POST(req: Request) {
  try {
    const body = await req.json();

    const message = `
📩 New Contact Form

👤 Name:
${body.name}

📧 Email:
${body.email}

💬 Message:
${body.message}
    `;

    await fetch(
      `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.CHAT_ID,
          text: message,
        }),
      },
    );

    return Response.json({
      success: true,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      },
    );
  }
}
