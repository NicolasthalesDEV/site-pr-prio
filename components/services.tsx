"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ShoppingCart, Layout, Smartphone, User, Building, RefreshCw } from "lucide-react"

const pricingPlans = [
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Site Responsivo",
    price: "R$ 2.500",
    description: "Site completo e responsivo que se adapta perfeitamente a qualquer dispositivo, do desktop ao mobile.",
    features: [
      "Design adaptável a todos dispositivos",
      "Até 5 páginas personalizadas",
      "Otimização de performance",
      "Formulário de contato",
      "Integração com redes sociais",
      "Painel administrativo básico",
      "Otimização para SEO",
    ],
    popular: false,
    buttonText: "Solicitar Orçamento",
  },
  {
    icon: <Layout className="h-10 w-10 text-primary" />,
    title: "Landing Page Otimizada",
    price: "R$ 1.800",
    description: "Landing page de alta conversão para captar leads e promover produtos ou serviços específicos.",
    features: [
      "Design personalizado e atrativo",
      "Otimizada para conversão",
      "Responsiva para todos dispositivos",
      "Formulário de captura de leads",
      "Integração com ferramentas de marketing",
      "Otimização para SEO",
      "Carregamento rápido",
    ],
    popular: true,
    buttonText: "Solicitar Orçamento",
  },
  {
    icon: <User className="h-10 w-10 text-primary" />,
    title: "Portfólio/Site Pessoal",
    price: "R$ 1.900",
    description: "Site pessoal ou portfólio profissional para destacar seus trabalhos e conquistas de forma elegante.",
    features: [
      "Design personalizado e moderno",
      "Galeria de projetos/trabalhos",
      "Página sobre/biografia",
      "Formulário de contato",
      "Integração com redes sociais",
      "Responsivo para todos dispositivos",
      "Otimização para SEO",
    ],
    popular: false,
    buttonText: "Solicitar Orçamento",
  },
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: "Site Institucional para Empresas",
    price: "R$ 3.500",
    description:
      "Site profissional e completo para empresas que desejam estabelecer presença online sólida e confiável.",
    features: [
      "Design corporativo personalizado",
      "Até 8 páginas personalizadas",
      "Apresentação de produtos/serviços",
      "Blog integrado",
      "Formulários de contato avançados",
      "Painel administrativo completo",
      "Otimização para SEO",
      "Treinamento para equipe",
    ],
    popular: false,
    buttonText: "Solicitar Orçamento",
  },
  {
    icon: <RefreshCw className="h-10 w-10 text-primary" />,
    title: "Redesign de Site",
    price: "R$ 2.200",
    description: "Renovação completa do seu site atual para melhorar design, usabilidade e performance.",
    features: [
      "Análise do site atual",
      "Novo design moderno e atrativo",
      "Melhoria de usabilidade e UX",
      "Otimização de performance",
      "Responsividade para todos dispositivos",
      "Migração de conteúdo",
      "Otimização para SEO",
    ],
    popular: false,
    buttonText: "Solicitar Orçamento",
  },
  {
    icon: <ShoppingCart className="h-10 w-10 text-primary" />,
    title: "E-commerce Completo e Escalável",
    price: "R$ 6.500",
    description: "Loja virtual completa com todas as funcionalidades necessárias para vender online.",
    features: [
      "Catálogo de produtos ilimitado",
      "Gestão de estoque",
      "Integração com meios de pagamento",
      "Cálculo de frete automático",
      "Painel administrativo",
      "Relatórios de vendas",
      "Otimização para SEO",
      "Responsivo para todos dispositivos",
    ],
    popular: false,
    buttonText: "Solicitar Orçamento",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Serviços que Ofereço</h2>
          <p className="text-muted-foreground mb-8">
            Escolha o serviço que melhor atende às necessidades do seu projeto. Todos os pacotes podem ser
            personalizados.
          </p>
          <p className="text-sm text-muted-foreground">
            Os preços são valores iniciais e podem variar de acordo com requisitos específicos do projeto. Entre em
            contato para um orçamento personalizado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card
                className={`h-full flex flex-col overflow-hidden ${plan.popular ? "border-primary shadow-lg" : ""}`}
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div className="mb-2">{plan.icon}</div>
                    {plan.popular && (
                      <Badge variant="default" className="ml-2">
                        Mais Popular
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{plan.title}</CardTitle>
                  <div className="mt-2">
                    <span className="text-sm text-muted-foreground block">A partir de</span>
                    <span className="text-3xl font-bold">{plan.price}</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant={plan.popular ? "default" : "outline"}>
                    <a
                      href="https://wa.me/5547991011287?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {plan.buttonText}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mt-16"
        >
          <p className="text-muted-foreground">
            Precisa de um serviço personalizado ou tem um projeto específico em mente?
          </p>
          <Button asChild className="mt-4">
            <a
              href="https://wa.me/5547991011287?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
            >
              Entre em Contato para um Orçamento Personalizado
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
