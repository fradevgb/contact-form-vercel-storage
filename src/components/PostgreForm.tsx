"use client"

import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { toast } from "sonner"
import confetti from "canvas-confetti"

export const Form = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    // formData.get('email')
    const { email, name, message } = Object.fromEntries(formData.entries())

    // a llamar a la API
    fetch('/api/postgre-send-message', {
      method: 'POST',
      body: JSON.stringify({ email, name, message }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      toast.success('Mensaje enviado con exito')
      form.reset()
      confetti()
    }).catch(() => {
      toast.error('Hubo un error al enviar el mensaje')
    })
  }

  return (
    <form onSubmit={handleSubmit} className="text-left min-w-[400px] p-8 m-auto space-y-8 border rounded border-white/10">
      <Input
        name="email"
        id="email"
        label="Tu Email:"
        type="email"
        placeholder="example@email.com"
      />
      <Input
        name="name"
        id="name"
        label="Tu Nombre:"
        type="text"
        placeholder="John Doe"
      />
      <Input
        name="message"
        id="message"
        label="Tu Mensaje:"
        type="text"
        placeholder="Este es el mensaje que quiero enviar"
      />
      <Button>Enviar mensaje</Button>
    </form>
  )
}