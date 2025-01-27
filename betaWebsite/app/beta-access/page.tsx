"use client"

import { useState } from "react"
import Header from "../components/Header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function BetaAccessPage() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Reset form and show success message
    setEmail("")
    setMessage("")
    setIsSubmitting(false)
    toast({
      title: "Success!",
      description: "Thank you for your interest. We'll be in touch soon!",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Beta Access</h1>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <p className="text-lg text-gray-600 mb-6">
            EduGrade Pro is currently in beta testing. Sign up to receive updates and be among the first to try our
            revolutionary grading tool!
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message (Optional)
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your school or district and why you're interested in EduGrade Pro"
                className="w-full"
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Sign Up for Beta Access"}
            </Button>
          </form>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 mb-4">
            Have questions or need more information? Reach out to our team directly.
          </p>
          <div className="space-y-2">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:beta@edugrade.pro" className="text-blue-600 hover:underline">
                beta@edugrade.pro
              </a>
            </p>
            <p>
              <strong>Phone:</strong> (555) 123-4567
            </p>
          </div>
        </div>
      </main>
      <Toaster />
    </div>
  )
}

