"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-muted-foreground">
            Tem um projeto em mente ou quer discutir uma possível colaboração? Não hesite em entrar em contato!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-lg shadow-sm p-8 border">
            <h3 className="text-2xl font-bold mb-6 text-center">Informações de Contato</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">E-mail</h4>
                  <a
                    href="mailto:nicolasthalesmariano@gmail.com.br"
                    className="text-muted-foreground hover:text-primary"
                  >
                    nicolasthalesmariano@gmail.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Telefone</h4>
                  <a href="tel:+5547991011287" className="text-muted-foreground hover:text-primary">
                    +55 (47) 99101-1287
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Localização</h4>
                  <p className="text-muted-foreground">Blumenau, SC, Brasil</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-medium mb-4 text-center">Horário de Trabalho</h4>
              <p className="text-muted-foreground text-center">Domingo - Domingo: 9:00 - 17:00</p>
              <p className="text-muted-foreground text-center">Disponível toda semana para projetos de clientes</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
