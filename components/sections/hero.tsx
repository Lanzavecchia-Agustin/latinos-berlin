'use client'
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react"
import { useState } from "react"

export function Hero() {
  const [liked, setLiked] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleLike = () => {
    setLiked(true)
    
    // Enviar evento a Google Analytics
    if (typeof window !== 'undefined' && (window).gtag) {
      (window).gtag('event', 'like_project', {
        event_category: 'engagement',
        event_label: 'Hero Like Button',
        value: 1
      })
    }

    // Feedback visual temporal
    setTimeout(() => setLiked(false), 2000)
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
          Una app o web para ayudarnos entre nosotros
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Toda la información que necesitas en español: profesionales, eventos, servicios, oportunidades laborales, información sobre tramites y visas.
          Sin grupos dispersos de WhatsApp, Telegram, Facebook, Instagram, Twitter, LinkedIn, etc.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="group w-full sm:w-auto" onClick={() => scrollToSection("waitlist")}>
            Quiero ayudar
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>

          {/* Botón de corazón */}
          <Button 
            size="lg" 
            variant={liked ? "default" : "outline"}
            className={`w-full sm:w-auto transition-all ${
              liked ? 'bg-red-400 hover:bg-red-400 border-red-300' : 'bg-transparent'
            }`}
            onClick={handleLike}
          >
            <Heart 
              className={`h-5 w-5 transition-all ${
                liked ? 'fill-white scale-110' : 'fill-none'
              }`}
            />
            <span className="ml-2">{liked ? '¡Gracias!' : 'Me interesa'}</span>
          </Button>

          <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" onClick={() => scrollToSection("our-story")}>
            Conoce más
          </Button>
        </div>

        <div className="mx-auto mb-10 max-w-2xl text-pretty mt-8 text-sm leading-relaxed text-muted-foreground">
          <p>Al mostrar interés nos motivará a que le demos vida a esta idea y ayudemos a muchas personas</p>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-accent" />
            <span>100% Gratis</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-accent" />
            <span>En Español</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-accent" />
            <span>Por la Comunidad</span>
          </div>
        </div>
      </div>
    </section>
  )
}