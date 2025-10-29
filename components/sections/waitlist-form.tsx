'use client'

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { toast } from "sonner"

export function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    
    const form = e.currentTarget
    const formData = new FormData(form)
    const email = formData.get('email') as string

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al guardar')
      }

      form.reset()
      setSubmitted(true)
      toast.success('¡Email registrado con éxito! 🎉')
      
    } catch (error: unknown) {
      console.error('Error:', error)
      const errorMessage = error instanceof Error ? error.message : 'Hubo un error. Por favor intenta de nuevo.'
      
      if (errorMessage.includes('ya está registrado')) {
        toast.error('Este email ya está registrado')
      } else {
        toast.error(errorMessage)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <Card className="border-2 border-accent/20 bg-card p-8 sm:p-12">
          {!submitted ? (
            <div className="text-center">
              <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl">
                Dinos si te interesa
              </h2>
              <p className="mb-8 text-pretty text-lg leading-relaxed text-muted-foreground">
                Esto nos motivará a que le demos vida a esta idea y ayudemos a muchas personas
              </p>

              <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
                <Input
                  type="email"
                  name="email"
                  placeholder="email@example.com"
                  required
                  disabled={loading}
                  className="flex-1 py-5"
                />
                <Button type="submit" size="lg" className="sm:w-auto" disabled={loading}>
                  {loading ? 'Enviando...' : '¡Hagámoslo!'}
                </Button>
              </form>

              <p className="mt-4 text-sm text-muted-foreground">
                Al compartirnos tu email, sabremos que hay alguien que quiere o necesita esto!
              </p>
            </div>
          ) : (
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <CheckCircle2 className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-card-foreground">¡Gracias!</h3>
              
              <p className="text-pretty leading-relaxed text-muted-foreground mb-4">
                Si quieres ayudarnos aún más podrías responder el siguiente formulario 
              </p>
              <a href="https://forms.gle/gg6mzKZmZxMBkK4H9" target="_blank" rel="noreferrer">
                <Button size="lg" className="sm:w-auto">
                  Responder cuestionario de interés
                </Button>
              </a>
            </div>
          )}
        </Card>
      </div>
    </section>
  )
}