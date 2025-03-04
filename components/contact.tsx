"use client"

import { useRef} from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {  Mail, MapPin, Phone } from "lucide-react"
import { Textarea } from "./ui/textarea"




export function ContactoSection() {
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
  