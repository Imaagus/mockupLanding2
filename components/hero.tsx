"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight} from "lucide-react"




export function HeroSection() {
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
  