"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { LogoDarkMode } from "@/components/logo-dark-mode"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <LogoDarkMode width={150} height={40} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary">
            Sobre
          </button>
          <button onClick={() => scrollToSection("projects")} className="text-sm font-medium hover:text-primary">
            Projetos
          </button>
          <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-primary">
            Serviços
          </button>
          <Button onClick={() => scrollToSection("contact")} variant="default" size="sm">
            Contato
          </Button>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="py-2 text-sm font-medium hover:text-primary text-left"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="py-2 text-sm font-medium hover:text-primary text-left"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="py-2 text-sm font-medium hover:text-primary text-left"
            >
              Serviços
            </button>
            <Button onClick={() => scrollToSection("contact")} variant="default" size="sm" className="w-full">
              Contato
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
