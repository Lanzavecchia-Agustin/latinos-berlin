export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-20 grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Latinos en Berlín</h3>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              Tu fuente centralizada de información para la comunidad latina en Berlín.
            </p>
          </div>

        <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Desarrollda por</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://bloomstudio.dev/" target="_blank" className="hover:text-foreground">
                  Bloom studio
                </a>
              </li>
            </ul>
          </div>
     
        <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Redes</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://www.linkedin.com/company/bloom-studio-dev/" target="_blank" className="hover:text-foreground">
                  Linkedin
                </a>
              </li>
               <li>
                <a href="https://www.instagram.com/bloomdevstudio/" target="_blank" className="hover:text-foreground">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Plataforma</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Eventos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Profesionales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Trámites
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Comunidad</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Donar
                </a>
              </li>
            </ul>
          </div> 

         <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Términos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Cookies
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Latinos en Berlín. Hecho con ❤️ para la comunidad.</p>
        </div>
      </div>
    </footer>
  )
}
