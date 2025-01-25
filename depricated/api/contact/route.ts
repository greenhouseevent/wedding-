import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID; // Twilio Account SID
const authToken = process.env.TWILIO_AUTH_TOKEN; // Twilio Auth Token
const fromWhatsAppNumber = process.env.TWILIO_WHATSAPP_NUMBER; // Your Twilio WhatsApp number
const toWhatsAppNumber = process.env.MY_WHATSAPP_NUMBER; // Your personal WhatsApp number

const client = twilio(accountSid, authToken);

export async function POST(req: NextRequest, res: Response) {
  const { name, venue, email, phone, message } = await req.json();

  try {
    // Send WhatsApp message
    await client.messages.create({
      from: `whatsapp:${fromWhatsAppNumber}`,
      to: `whatsapp:${toWhatsAppNumber}`,
      body: `You have a new inquiry from Fiestro Events Contact Form:\n\nName: ${name}\nVenue: ${venue}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.log("Error sending WhatsApp message:", error);
    res;
    return NextResponse.json(
      { success: false, message: "Failed to send message." },
      { status: 500 },
    );
  }
}
