"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react"
import { useFormStatus } from "react-dom"
import { useRef } from "react"
import { toast } from "sonner"
import { sendEmail } from "../actions/sendEmail"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700" disabled={pending}>
      {pending ? "Sending..." : "Send Message"}
    </Button>
  )
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(formData: FormData) {
    const result = await sendEmail(formData)

    if (result.success) {
      toast.success("Message sent successfully!")
      formRef.current?.reset()
    } else {
      toast.error("Failed to send message. Please try again.")
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-pink-800 mb-8 text-center">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-pink-700">Get in Touch</h2>
          <div className="space-y-4">
            <a href="tel:+919952566621" className="flex items-center gap-3 text-gray-600 hover:text-pink-600">
              <Phone className="w-5 h-5" />
              <span>+91 99525 66621</span>
            </a>
            <a
              href="mailto:Famamehandhi@gmail.com"
              className="flex items-center gap-3 text-gray-600 hover:text-pink-600"
            >
              <Mail className="w-5 h-5" />
              <span>Famamehandhi@gmail.com</span>
            </a>
            <a
              href="https://www.instagram.com/fama_mehandhi_artist"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 hover:text-pink-600"
            >
              <Instagram className="w-5 h-5" />
              <span>@fama_mehandhi_artist</span>
            </a>
            <a
              href="https://www.youtube.com/@famacreation2105"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 hover:text-pink-600"
            >
              <Youtube className="w-5 h-5" />
              <span>Fama Creation</span>
            </a>
            <a
              href="https://www.linkedin.com/in/fama-mehandi-artist-b07445326/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 hover:text-pink-600"
            >
              <Linkedin className="w-5 h-5" />
              <span>Fama Mehandi Artist</span>
            </a>
          </div>
        </div>

        <form ref={formRef} action={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <Input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <Input type="tel" id="phone" name="phone" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <Textarea id="message" name="message" rows={4} required />
          </div>
          <SubmitButton />
        </form>
      </div>
    </div>
  )
}

