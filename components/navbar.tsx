"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {  Menu, X } from "lucide-react"



export function Navbar () {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div>
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
        </div>
    )
}