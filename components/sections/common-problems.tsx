import { Marquee } from "@/components/ui/marquee"
import { AlertCircle, Home, FileText, CreditCard, Languages, Users, MapPin, Briefcase } from "lucide-react"

const commonProblems = [
  {
    icon: Home,
    title: "Encontrar departamento",
    description: "El mercado de alquileres es caótico y competitivo"
  },
  {
    icon: FileText,
    title: "Trámites burocráticos",
    description: "Anmeldung, Finanzamt, y mil papeles más"
  },
  {
    icon: CreditCard,
    title: "Abrir cuenta bancaria",
    description: "Sin Anmeldung no hay cuenta, sin cuenta no hay trabajo"
  },
]

const commonProblems2 = [
  {
    icon: Languages,
    title: "Barrera del idioma",
    description: "El alemán no es fácil y no todos hablan inglés"
  },
  {
    icon: Users,
    title: "Hacer amigos",
    description: "Conectar con gente cuando recién llegás"
  },
  {
    icon: MapPin,
    title: "Orientarse en la ciudad",
    description: "Transporte público, barrios, y cómo moverse"
  },
  {
    icon: Briefcase,
    title: "Buscar trabajo",
    description: "CV alemán, permisos de trabajo y networking"
  },
  {
    icon: AlertCircle,
    title: "Entender el sistema",
    description: "Seguros, impuestos, y regulaciones alemanas"
  }
]

function ProblemCard({ icon: Icon, title, description }: typeof commonProblems[0]) {
  return (
    <div className="relative flex w-64 flex-col gap-3 rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-primary/10 p-2">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <h3 className="font-semibold text-base">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

export function CommonProblems() {
  return (
    <section className="py-24 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Problemas que todos compartimos
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Si te suena familiar, no estás solo. Miles de latinos en Berlín pasan por lo mismo
            </p>
          </div>

          <div className="relative">
            <Marquee  className="[--duration:30s]">
              {commonProblems.map((problem, index) => (
                <ProblemCard key={index} {...problem} />
              ))}
            </Marquee>
          </div>

          <div className="relative">
            <Marquee reverse  className="[--duration:30s]">
              {commonProblems2.map((problem, index) => (
                <ProblemCard key={index} {...problem} />
              ))}
            </Marquee>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg text-muted-foreground">
              Por eso creamos esta comunidad: para que juntos encontremos soluciones
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}