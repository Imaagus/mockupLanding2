"use client "
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
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
  
  