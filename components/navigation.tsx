"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Rocket } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border/50 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                <Rocket className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Novatrait</h1>
                <p className="text-xs text-muted-foreground -mt-1">Digital Transformation</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a
                href="#services"
                className="text-foreground hover:text-accent transition-all duration-200 font-medium relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a
                href="#processus"
                className="text-foreground hover:text-accent transition-all duration-200 font-medium relative group"
              >
                Processus
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a
                href="#pourquoi"
                className="text-foreground hover:text-accent transition-all duration-200 font-medium relative group"
              >
                Pourquoi nous
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-accent transition-all duration-200 font-medium relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-200 px-6 py-2.5">
              Prenons rendez-vous
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              <a href="#services" className="block px-3 py-2 text-foreground hover:text-accent">
                Services
              </a>
              <a href="#processus" className="block px-3 py-2 text-foreground hover:text-accent">
                Processus
              </a>
              <a href="#pourquoi" className="block px-3 py-2 text-foreground hover:text-accent">
                Pourquoi nous
              </a>
              <a href="#contact" className="block px-3 py-2 text-foreground hover:text-accent">
                Contact
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Prenons rendez-vous
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
