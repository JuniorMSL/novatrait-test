import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Zap, Target } from "lucide-react"

const reasons = [
  {
    icon: Users,
    title: "Sans jargon, full humain",
    description: "Une communication pédagogique : vous comprenez chaque étape.",
  },
  {
    icon: Zap,
    title: "Résultats concrets et rapides",
    description: "Des livrables immédiatement exploitables & pragmatiques.",
  },
  {
    icon: Target,
    title: "Accompagnement sur-mesure",
    description: "Vous gagnez en autonomie grâce à notre méthode éprouvée.",
  },
]

export function WhyUsSection() {
  return (
    <section id="pourquoi" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Pourquoi Novatrait ?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <reason.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
