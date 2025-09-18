import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, ArrowRight } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Prêt à digitaliser avec confiance ?</h2>
        <p className="text-xl mb-12 text-primary-foreground/80 text-pretty">
          Un échange simple et sans engagement pour démarrer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-primary-foreground text-primary">
            <CardHeader>
              <Mail className="h-8 w-8 mx-auto mb-4 text-accent" />
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">contact@novatrait.com</p>
            </CardContent>
          </Card>

          <Card className="bg-primary-foreground text-primary">
            <CardHeader>
              <Phone className="h-8 w-8 mx-auto mb-4 text-accent" />
              <CardTitle>Téléphone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">+1 (514) 123‑4567</p>
            </CardContent>
          </Card>
        </div>

        <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4">
          Prenez rendez-vous
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}
