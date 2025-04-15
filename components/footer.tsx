"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"
import { LogoDarkMode } from "@/components/logo-dark-mode"

export default function Footer() {
  return (
    <footer className="border-t py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <LogoDarkMode width={150} height={40} />
            </Link>
            <p className="text-sm text-muted-foreground mt-2">Construindo experiências digitais excepcionais.</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("nicolasthalesmariano@gmail.com.br")
                  alert("E-mail copiado para a área de transferência!")
                }}
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                aria-label="Copiar e-mail"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Copiar e-mail: nicolasthalesmariano@gmail.com.br</span>
              </button>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} PixelCode. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
