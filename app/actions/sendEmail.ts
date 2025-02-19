"use server"

import { Resend } from "resend"

const resend = new Resend('re_c86pUxG2_KJfZe8gNdkFXjAixs431N5bj')

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const message = formData.get("message") as string

  try {
    const data = await resend.emails.send({
      from: "Fama Creation Website <onboarding@resend.dev>",
      to: "yusuffmd03@gmail.com",
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    })

    return { success: true, data }
  } catch (error) {
    return { success: false, error }
  }
}

