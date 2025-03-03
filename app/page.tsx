"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, Mail, MapPin, Phone, Menu, X, ArrowRight, Check } from "lucide-react"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center">
              <span className="text-xs text-muted-foreground">LOGO</span>
            </div>
            <span className="text-xl font-bold">Tu Marca</span>
          </div>

          <nav className="hidden md:flex gap-6">
            <Link href="#inicio" className="text-sm font-medium hover:text-primary">
              Inicio
            </Link>
            <Link href="#servicios" className="text-sm font-medium hover:text-primary">
              Servicios
            </Link>
            <Link href="#sobre-nosotros" className="text-sm font-medium hover:text-primary">
              Sobre Nosotros
            </Link>
            <Link href="#galeria" className="text-sm font-medium hover:text-primary">
              Galería
            </Link>
          </nav>

          <div className="hidden md:flex">
          <Link href="#contacto" className="text-sm font-medium hover:text-primary">
            <Button>Contáctanos</Button>
          </Link>
          </div>

          <button className="flex md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="container md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <Link
                href="#inicio"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="#servicios"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="#sobre-nosotros"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nosotros
              </Link>
              <Link
                href="#galeria"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Galería
              </Link>
              <Link
                href="#contacto"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              <Button className="w-full mt-2">Contáctanos</Button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <HeroSection />
        <ServiciosSection />
        <SobreNosotrosSection />
        <GaleriaSection />
        <ContactoSection />
      </main>

      <Footer />
    </div>
  )
}

function HeroSection() {
  return (
    <section id="inicio" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Tu Eslogan Aquí</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Tu Mensaje Principal Va Aquí</h1>
          <p className="text-xl text-muted-foreground">
            Descripción breve de tu empresa o servicio. Destaca los beneficios principales para tus clientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg">
              Comenzar Ahora
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Saber Más
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative h-[350px] w-full rounded-lg bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">Imagen Principal</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ServiciosSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const servicios = [
    {
      titulo: "Servicio 1",
      descripcion: "Descripción breve del servicio. Explica los beneficios principales para el cliente.",
    },
    {
      titulo: "Servicio 2",
      descripcion: "Descripción breve del servicio. Explica los beneficios principales para el cliente.",
    },
    {
      titulo: "Servicio 3",
      descripcion: "Descripción breve del servicio. Explica los beneficios principales para el cliente.",
    },
    {
      titulo: "Servicio 4",
      descripcion: "Descripción breve del servicio. Explica los beneficios principales para el cliente.",
    },
    {
      titulo: "Servicio 5",
      descripcion: "Descripción breve del servicio. Explica los beneficios principales para el cliente.",
    },
    {
      titulo: "Servicio 6",
      descripcion: "Descripción breve del servicio. Explica los beneficios principales para el cliente.",
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Nuestros Servicios</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descripción general de los servicios que ofrece tu empresa. Destaca lo que te hace único.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-background rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{servicio.titulo}</h3>
              <p className="text-muted-foreground">{servicio.descripcion}</p>
              <Button variant="link" className="mt-4 p-0">
                Saber más <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function SobreNosotrosSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="sobre-nosotros" className="py-20">
      <div className="container">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="relative h-[400px] rounded-lg bg-muted flex items-center justify-center"
          >
            <span className="text-muted-foreground">Imagen Sobre Nosotros</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Sobre Nosotros</div>
            <h2 className="text-3xl md:text-4xl font-bold">Tu Historia Aquí</h2>
            <p className="text-muted-foreground">
              Aquí va una breve historia de tu empresa. Cuándo se fundó, por qué existe y cuál es su misión. Comparte
              los valores y la visión que guían a tu empresa.
            </p>
            <p className="text-muted-foreground">
              Explica lo que hace que tu empresa sea única y por qué los clientes deberían elegirte. Destaca la
              experiencia, la calidad y el compromiso con la satisfacción del cliente.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold">100+</h4>
                <p className="text-sm text-muted-foreground">Clientes Satisfechos</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold">10+</h4>
                <p className="text-sm text-muted-foreground">Años de Experiencia</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold">500+</h4>
                <p className="text-sm text-muted-foreground">Proyectos Completados</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold">24/7</h4>
                <p className="text-sm text-muted-foreground">Soporte al Cliente</p>
              </div>
            </div>
            <Button>Conoce al Equipo</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function GaleriaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  const imagenes = Array(6).fill(null)

  return (
    <section id="galeria" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Nuestra Galería</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explora nuestros proyectos y trabajos recientes. Estas imágenes muestran la calidad de nuestro trabajo.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {imagenes.map((_, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative h-[250px] rounded-lg bg-background overflow-hidden border"
            >
              <div className="absolute inset-0 bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">Imagen {index + 1}</span>
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button variant="outline" className="text-white border-white hover:bg-white/20 hover:text-white">
                  Ver Proyecto
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Ver Todos los Proyectos
          </Button>
        </div>
      </div>
    </section>
  )
}

function ContactoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="contacto" className="py-20">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Contáctanos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o quieres comenzar un proyecto? Ponte en contacto con nosotros.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="mt-1 bg-primary/10 p-2 rounded-full">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Dirección</h3>
                <p className="text-muted-foreground">Tu dirección completa aquí, Ciudad, País, Código Postal</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="mt-1 bg-primary/10 p-2 rounded-full">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-muted-foreground">info@tuempresa.com</p>
                <p className="text-muted-foreground">soporte@tuempresa.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="mt-1 bg-primary/10 p-2 rounded-full">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Teléfono</h3>
                <p className="text-muted-foreground">+34 123 456 789</p>
                <p className="text-muted-foreground">+34 987 654 321</p>
              </div>
            </div>

            <div className="pt-4">
              <div className="relative h-[250px] rounded-lg bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">Mapa de Ubicación</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-background p-8 rounded-lg border shadow-sm"
          >
            <h3 className="text-xl font-bold mb-6">Envíanos un Mensaje</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="text-sm font-medium">
                    Nombre
                  </label>
                  <Input id="nombre" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="asunto" className="text-sm font-medium">
                  Asunto
                </label>
                <Input id="asunto" placeholder="Asunto de tu mensaje" />
              </div>

              <div className="space-y-2">
                <label htmlFor="mensaje" className="text-sm font-medium">
                  Mensaje
                </label>
                <Textarea id="mensaje" placeholder="Tu mensaje aquí..." className="min-h-[120px]" />
              </div>

              <Button type="submit" className="w-full">
                Enviar Mensaje
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t py-12 bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                <span className="text-xs text-primary">LOGO</span>
              </div>
              <span className="text-xl font-bold">Tu Marca</span>
            </div>
            <p className="text-muted-foreground">
              Breve descripción de tu empresa. Misión y valores en pocas palabras.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#inicio" className="text-muted-foreground hover:text-primary">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-muted-foreground hover:text-primary">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#sobre-nosotros" className="text-muted-foreground hover:text-primary">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#galeria" className="text-muted-foreground hover:text-primary">
                  Galería
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-muted-foreground hover:text-primary">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Servicio 1
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Servicio 2
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Servicio 3
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Servicio 4
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Servicio 5
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Boletín</h3>
            <p className="text-muted-foreground mb-4">
              Suscríbete a nuestro boletín para recibir las últimas noticias y actualizaciones.
            </p>
            <form className="space-y-2">
              <Input placeholder="Tu email" type="email" />
              <Button className="w-full">Suscribirse</Button>
            </form>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Política de Privacidad
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Términos de Servicio
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

