'use client'
import { Button } from "@/components/ui/button"
import { Check, CheckCircle2, Globe, Users, Heart } from "lucide-react"
import { useState, useEffect } from "react"
import { Input } from "../ui/input"
import { toast } from "sonner"

export function Hero() {
  const [submitted, setSubmitted] = useState(false)
  const [liked, setLiked] = useState(false)
  const [totalSupport, setTotalSupport] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchTotalSupport()
    const hasLiked = localStorage.getItem('hasLiked')
    if (hasLiked === 'true') {
      setLiked(true)
    }
  }, [])

  const fetchTotalSupport = async () => {
    try {
      const response = await fetch('/api/total-support')
      const data = await response.json()
      setTotalSupport(data.total)
    } catch (error) {
      console.error('Error al cargar el total:', error)
    }
  }

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
      await fetchTotalSupport()
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

  const handleLike = async () => {
    if (liked) return
    
    setLoading(true)
    try {
      const response = await fetch('/api/counter', {
        method: 'POST'
      })

      if (response.ok) {
        setLiked(true)
        localStorage.setItem('hasLiked', 'true')
        await fetchTotalSupport()
        toast.success('¡Gracias por tu apoyo! ❤️')
      } else {
        throw new Error('Error al registrar tu apoyo')
      }
    } catch (error) {
      console.error('Error al dar like:', error)
      toast.error('Hubo un error. Por favor intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative overflow-hidden bg-background px-6 py-24 lg:px-8 lg:pt-44">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm text-primary font-bold">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
          Latinos en Berlín
        </div>
        <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Una nueva <span className="text-primary"> red social </span>para ayudarnos entre nosotros
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Toda la información y el apoyo que necesitás — en español, gratis y en un solo lugar. Profesionales, eventos, servicios, oportunidades laborales, trámites y más.
        </p>

        <div className="flex flex-col items-center justify-center gap-6">
          {!submitted ? (
            <>
              <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row w-full">
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
              
              <div className="mx-auto max-w-2xl text-center text-sm text-muted-foreground">
                <p>Al compartirnos tu email, sabremos que hay alguien que quiere o necesita esto!</p>
              </div>
            </>
          ) : (
            <div className="text-center bg-secondary/50 px-8 py-8 rounded-xl max-w-lg">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <CheckCircle2 className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-card-foreground">¡Gracias!</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground mb-6">
                Si quieres ayudarnos aún más podrías responder el siguiente formulario 
              </p>
              <a href="https://forms.gle/gg6mzKZmZxMBkK4H9" target="_blank" rel="noreferrer">
                <Button size="lg" className="w-full sm:w-auto">
                  Responder cuestionario de interés
                </Button>
              </a>
            </div>
          )}

          <div className="w-full max-w-md border-t border-border/40 my-2"></div>

          <div className="flex flex-col items-center gap-3 mb-12">
            <Button 
              size="lg" 
              variant={liked ? "default" : "outline"}
              className={`w-full sm:w-auto transition-all disabled:opacity-100 ${
                liked ? 'bg-red-400 hover:bg-red-400 border-red-300' : 'bg-transparent hover:bg-red-50'
              }`}
              onClick={handleLike}
              disabled={loading || liked}
            >
              <Heart 
                className={`h-5 w-5 transition-all ${
                  liked ? 'fill-white scale-110' : 'fill-none'
                }`}
              />
              <span className="ml-2">
                {liked ? `¡Gracias, ya somos ${totalSupport}!` : `Me interesa ${totalSupport > 0 ? `(${totalSupport})` : ''}`}
              </span>
            </Button>
            
            {!liked && (
              <p className="text-xs text-muted-foreground text-center max-w-xs">
                O simplemente dale apoyo a la idea
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-accent-foreground" />
            </div>
            <span className="text-foreground font-medium">100% Gratis</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <Globe className="w-4 h-4 text-accent-foreground" />
            </div>
            <span className="text-foreground font-medium">En Español</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <Users className="w-4 h-4 text-accent-foreground" />
            </div>
            <span className="text-foreground font-medium">Por la Comunidad</span>
          </div>
        </div>
      </div>
    </section>
  )
}