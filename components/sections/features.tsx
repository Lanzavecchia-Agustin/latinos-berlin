import { Calendar, Users, FileText, Briefcase, MapPin, Heart } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
{
    icon: Users,
    title: "Profesionales",
    description: "Conecta con abogados, contadores, médicos y otros profesionales de habla hispana.",
  },
  {
    icon: Calendar,
    title: "Eventos",
    description: "Descubre eventos culturales, sociales y profesionales de la comunidad latina en Berlín.",
  },
  {
    icon: Briefcase,
    title: "Oportunidades Laborales",
    description: "Encuentra trabajos, ofertas y consejos para desarrollar tu carrera en Alemania.",
  },
  {
    icon: FileText,
    title: "Trámites y Visas",
    description: "Información actualizada sobre permisos, visas, Anmeldung y otros trámites burocráticos.",
  },
  {
    icon: MapPin,
    title: "Servicios Locales",
    description: "Encuentra restaurantes, tiendas, escuelas y servicios recomendados por la comunidad.",
  },
  {
    icon: Heart,
    title: "Apoyo Comunitario",
    description: "Comparte experiencias, haz preguntas y recibe ayuda de otros latinos en Berlín.",
  },
]

export function Features() {
  return (
    <section className=" px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Todo lo que necesitas en un solo lugar
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Queremos crear una plataforma donde encontrarias información confiable y actualizada.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group relative overflow-hidden border-border bg-card p-8 transition-all hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/90 text-accent transition-colors group-hover:bg-primary/90 group-hover:text-white">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">{feature.title}</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
