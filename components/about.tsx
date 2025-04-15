"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "SASS",
  "Redux",
  "GraphQL",
  "Git",
  "Figma",
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
          <p className="text-muted-foreground">
            Sou um desenvolvedor apaixonado por tecnologia, com 19 anos e 2 anos de experiência em Front-End. Meu foco é
            transformar ideias em soluções web elegantes, funcionais e bem estruturadas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-square max-w-md mx-auto rounded-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6962.png-xkKJkACXpgRkMLv2NpTC04LzAakV0e.jpeg"
                alt="Nicolas Thales"
                width={400}
                height={400}
                className="object-cover rounded-xl"
                style={{ borderRadius: "1rem" }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Minha Jornada</h3>
            <p className="text-muted-foreground mb-6">
              Com 2 anos de experiência em desenvolvimento web e apenas 19 anos, já tive a oportunidade de trabalhar em
              diversos projetos, criando sites modernos, responsivos e otimizados para diferentes necessidades. Minha
              especialidade está no desenvolvimento Front-End, utilizando tecnologias como HTML, CSS, JavaScript,
              TypeScript, React, Angular, Next.js, Tailwind CSS e Bootstrap. Além da parte técnica, também tenho
              experiência com UX/UI Design, o que me permite criar interfaces visualmente atrativas e, ao mesmo tempo,
              intuitivas e focadas na melhor experiência do usuário.
            </p>
            <p className="text-muted-foreground mb-8">
              Estou sempre em busca de aprender mais e explorar novas ferramentas para entregar soluções completas e
              atuais. Meu objetivo é transformar ideias em experiências digitais impactantes, combinando desempenho,
              design e usabilidade.
            </p>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Habilidades Técnicas</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
