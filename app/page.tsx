"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero"
import { ServiciosSection } from "@/components/service-section"
import { SobreNosotrosSection } from "@/components/about"
import { GaleriaSection } from "@/components/gallery"
import { ContactoSection } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function LandingPage() {

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Navbar/>
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






