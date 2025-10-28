"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
          >
            <Image
              src="/logo.png"
              alt="Latinos en Berlín"
              width={60}
              height={60}
              className="transition-transform group-hover:scale-110"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="https://forms.gle/gg6mzKZmZxMBkK4H9" target="_blank" rel="noreferrer">
              <Button size="sm" className="ml-4">
                Quiero ayudar
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col gap-4">
              <div className="px-4 pt-2">
                <a href="https://forms.gle/gg6mzKZmZxMBkK4H9" target="_blank" rel="noreferrer">
                  <Button className="w-full">
                    Quiero ayudar
                  </Button>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}