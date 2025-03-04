"use client"

import { useRef} from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"




export function GaleriaSection() {
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