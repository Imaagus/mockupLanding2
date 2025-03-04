"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"




export function SobreNosotrosSection() {
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
  