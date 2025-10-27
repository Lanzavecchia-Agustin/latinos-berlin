import { UserPlus, Search, MessageCircle } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    title: "Únete a la comunidad",
    description: "Regístrate gratis y accede a toda la información que necesitas.",
  },
  {
    icon: Search,
    title: "Explora y descubre",
    description: "Busca eventos, servicios, profesionales y respuestas a tus preguntas.",
  },
  {
    icon: MessageCircle,
    title: "Conecta y comparte",
    description: "Participa en la comunidad, comparte tu experiencia y ayuda a otros.",
  },
]

export function HowItWorks() {
  return (
    <section className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Cómo funciona
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Simple, intuitivo y diseñado para ayudarte desde el primer día.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="mb-2 text-sm font-semibold text-primary">Paso {index + 1}</div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">{step.description}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
