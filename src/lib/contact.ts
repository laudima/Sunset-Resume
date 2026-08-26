import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import { z } from "zod";
import { profile } from "@/lib/content";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  email: z.string().trim().email("Enter a valid email"),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(5000),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .validator(contactSchema)
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];
    if (!apiKey) {
      console.error("Contact form: RESEND_API_KEY is not configured");
      throw new Error("RESEND_API_KEY is not configured");
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Sunset Resume <onboarding@resend.dev>",
      to: profile.email,
      replyTo: data.email,
      subject: `[Contact form] ${data.subject}`,
      text: `From: ${data.name} <${data.email}>\n\n${data.message}`,
    });

    if (error) {
      console.error("Contact form: Resend error:", error);
      throw new Error(error.message);
    }

    return { ok: true as const };
  });
