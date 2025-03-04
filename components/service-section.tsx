"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"



export function ServiciosSection() {
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