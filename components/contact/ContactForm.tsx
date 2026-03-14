"use client"

import { useState, ChangeEvent, FormEvent } from "react"

type FormState = {
  name: string
  email: string
  message: string
}

const ContactForm = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(form)

    setForm({
      name: "",
      email: "",
      message: ""
    })
  }

  return (
    <div className="border border-divider rounded-sm bg-card p-6">

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="text-sm font-medium text-primary">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={form.name}
            required
            onChange={handleChange}
            className="w-full mt-2 border border-divider rounded-sm px-4 py-2 bg-transparent text-sm"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-primary">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={form.email}
            required
            onChange={handleChange}
            className="w-full mt-2 border border-divider rounded-sm px-4 py-2 bg-transparent text-sm"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-primary">
            Message
          </label>

          <textarea
            name="message"
            rows={5}
            value={form.message}
            required
            onChange={handleChange}
            className="w-full mt-2 border border-divider rounded-sm px-4 py-2 bg-transparent text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-sm text-sm font-medium hover:opacity-90 transition"
        >
          Send Message
        </button>

      </form>

    </div>
  )
}

export default ContactForm