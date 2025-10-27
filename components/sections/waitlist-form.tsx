"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/meopelyy', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setSubmitted(true)
        form.reset()
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Hubo un error. Por favor intenta de nuevo.')
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
                  placeholder="tu@email.com"
                  required
                  className="flex-1 py-5"
                />
                <Button type="submit" size="lg" className="sm:w-auto">
                  Hagamoslo!
                </Button>
              </form>

              <p className="mt-4 text-sm text-muted-foreground">
                Al darnos tu email, sabremos que hay alguien que quiere o necesita esto!
              </p>
            </div>
          ) : (
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <CheckCircle2 className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-card-foreground">¡Gracias!</h3>
              
              <p className="text-pretty leading-relaxed text-muted-foreground mb-4">Si quieres ayudarnos aun mas podrias responder el siguiente formulario 
              </p>
              <a href="https://forms.gle/gg6mzKZmZxMBkK4H9" target="blank" rel="noreferrer">
              <Button size="lg" className="sm:w-auto">
                Responder cuestionario de interes
              </Button>
               </a>
            </div>
          )}
        </Card>
      </div>
    </section>
  )
}