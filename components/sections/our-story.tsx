export function OurStory() {
  return (
    <section className="py-24 px-4  from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">¿Por qué creamos esto?</h2>
            <p className="text-xl text-muted-foreground text-pretty">Una historia que muchos compartimos</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-foreground/90">
            <p className="text-lg leading-relaxed">
              Llegar a Berlín no es fácil. Tomar un tram, hacer un trámite o simplemente entender lo que pasa alrededor
              puede ser todo un desafío cuando recién llegás. El idioma alemán puede sentirse hostil al principio, y no
              hay tanto apoyo para los latinos como uno esperaría.
            </p>

            <p className="text-lg leading-relaxed">
              La comunidad hispana en Berlín es grande, pero al principio cuesta conectarse. Primero hay que hacerse
              amigos, conocer gente… y recién después empezás a entrar a los grupos de WhatsApp, donde todos compartimos
              los mismos problemas diarios: encontrar un departamento, entender los alquileres, los impuestos, las
              visas, y en general, cómo vivir en Alemania sin perderse en el proceso.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8">
              <p className="text-lg font-medium text-balance">
                De ahí surge esta comunidad: para acompañar, para simplificar, para conectar.
              </p>
            </div>

            <p className="text-lg leading-relaxed">
              Queremos hacer más llano el camino para quienes recién llegan, y también para los que ya están acá.
              Queremos centralizar la información que hoy está dispersa en muchos grupos, foros y redes, y crear un
              espacio donde la ayuda mutua sea algo natural.
            </p>

            <p className="text-lg leading-relaxed">
              Como hispanos, somos la segunda comunidad lingüística más grande del mundo, y aunque venimos de regiones
              muy diversas, compartimos desafíos similares. En nuestros países, muchas veces tenemos talento,
              creatividad y empuje, pero nos faltan recursos o redes de apoyo. Por eso, creemos que si unimos fuerzas,
              podemos generar entre nosotros mismos el soporte que tantas veces buscamos afuera.
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}
