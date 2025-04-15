"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

// Sample project data
const projectsData = [
  {
    id: 1,
    title: "Plataforma de Torneios de Esports",
    description:
      "Etourney é uma plataforma digital focada no universo dos jogos competitivos, oferecendo gerenciamento de torneios, controle de participantes e ferramentas integradas para desenvolvedores e jogadores.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capturar5.PNG-mmBXPg3doGyC99HalD3SHFJhO6Rdyk.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://www.etourney.net",
    githubUrl: "https://github.com/NicolasthalesDEV/Etourney-project",
    category: "web",
  },
  {
    id: 2,
    title: "Loja de Maquiagens",
    description:
      "Esta landing page foi criada para uma loja de maquiagens com foco em conversão. O layout destaca os produtos mais vendidos, utiliza uma paleta de cores feminina e sofisticada, e oferece uma experiência de navegação intuitiva. O design responsivo garante ótima visualização em todos os dispositivos, com chamadas para ação estratégicas que incentivam a compra.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagem_2025-04-14_185448117-75TGtoBH6JZjaCiNiX5zSdFUS4qXLa.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://exemplo.com.br/glam-makeup",
    githubUrl: "https://github.com/NicolasthalesDEV/glam-makeup",
    category: "landing",
  },
  {
    id: 3,
    title: "Agência de IA",
    description:
      "Desenvolvi esta landing page para uma equipe especializada em ajudar pessoas a criarem sua própria agência de inteligência artificial. O foco do design foi transmitir inovação, confiança e profissionalismo, com uma estrutura clara que apresenta os benefícios do programa, depoimentos de sucesso e um forte apelo à ação. A página foi otimizada para conversão e totalmente responsiva, garantindo uma excelente experiência em qualquer dispositivo.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capturar3.PNG-0n2EjGzbKXz8RmXC3WS7Cx9jJBBO9v.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://v0-ai-agency-website-rosy.vercel.app",
    githubUrl: "https://github.com/NicolasthalesDEV/agencia-de-ia",
    category: "landing",
  },
  {
    id: 4,
    title: "MasterClass IA",
    description:
      "Esta landing page foi desenvolvida para divulgar uma masterclass sobre o uso de inteligência artificial para automatizar respostas no WhatsApp. O objetivo era captar leads de forma eficiente, destacando os benefícios da IA aplicada à comunicação e atendimento. O layout foi pensado para prender a atenção, com seções explicativas, vídeos integrados e chamadas para ação estrategicamente posicionadas. A página é responsiva e otimizada para conversão.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagem_2025-04-14_224159788-Z4iNlXgVNM3EPm8TmyTc8UeFcNlKxo.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://landingpagesoftclose.vercel.app/",
    githubUrl: "https://github.com/NicolasthalesDEV/masterclass-ia",
    category: "landing",
  },
  {
    id: 5,
    title: "Portfólio da Karolyne",
    description:
      "Este portfólio foi desenvolvido para uma cliente de uma plataforma de freelance que buscava um site limpo, organizado e moderno para apresentar seus trabalhos de design. O foco do projeto foi criar uma navegação fluida e uma estrutura visual que valorizasse seus projetos de forma clara e profissional.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagem_2025-04-14_184853951-NIWayIE2CipjZHL1HZdWWAfWINBvWD.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://karolyne-porfolio.vercel.app/",
    githubUrl: "https://github.com/NicolasthalesDEV/karolyne_porfolio",
    category: "portfolio",
  },
]

export default function Projects() {
  const [filter, setFilter] = useState("all")

  // Categories for filtering
  const categories = [
    { value: "all", label: "Todos os Projetos" },
    { value: "web", label: "Aplicações Web" },
    { value: "portfolio", label: "Portfólios" },
    { value: "landing", label: "Landing Pages" },
  ]

  const filteredProjects =
    filter === "all" ? projectsData : projectsData.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Meus Projetos</h2>
          <p className="text-muted-foreground mb-8">
            Aqui estão alguns dos meus projetos recentes. Cada um foi cuidadosamente desenvolvido para resolver
            problemas específicos e oferecer experiências excepcionais aos usuários.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={filter === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category.value)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" /> Código
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" /> Demo ao Vivo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
