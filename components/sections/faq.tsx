import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Qué pasa si dejo mi email?",
    answer: "Solo queremos saber cuantas personas quieren que esta idea cobre vida. Si te interesa tambien, te avisaremos sobre el progreso del proyecto y podrás ser parte del grupo fundador.",
  },
  {
    question: "¿Cuándo se lanzará?",
    answer: "Depende del interés que reciba. Cuantos más nos unamos, más rápido se hará realidad.",
  },
  {
    question: "¿Será gratuito?",
    answer: "Sí, 100% gratuito. Nos encantaría saber cuantas personas quieren que esta idea cobre vida. Si te interesa tambien, te avisaremos sobre el progreso del proyecto y podrás ser parte del grupo fundador.",
  },
]

export function FAQ() {
  return (
    <section className="pb-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Preguntas frecuentes</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
