import { Card, CardContent } from "@/components/ui/card"
import { Building2, Calculator, Laptop, Users, TrendingUp, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const audiences = [
  {
    icon: Building2,
    title: "Dirigeants de PME",
    subtitle: "50-500 employés",
    description:
      "Vous dirigez une PME en croissance et souhaitez structurer vos processus digitaux pour accompagner votre développement. Vous cherchez des solutions concrètes et pragmatiques.",
    challenges: [
      "Manque de visibilité sur les performances",
      "Processus manuels chronophages",
      "Difficultés de pilotage",
    ],
    image: "/modern-office-space-with-professionals-working-on-.jpg",
  },
  {
    icon: Calculator,
    title: "Responsables financiers",
    subtitle: "DAF & Contrôleurs de gestion",
    description:
      "Vous êtes en quête de visibilité et de contrôle sur vos données financières. Vous souhaitez automatiser vos reportings et disposer d'outils d'aide à la décision.",
    challenges: ["Consolidation manuelle des données", "Manque de temps réel", "Reporting complexe"],
    image: "/executive-dashboard-with-kpis--charts-and-real-tim.jpg",
  },
  {
    icon: Laptop,
    title: "Structures digitales débutantes",
    subtitle: "En transformation numérique",
    description:
      "Votre entreprise débute sa transformation digitale et vous avez besoin d'un accompagnement complet, depuis le diagnostic jusqu'à la mise en œuvre des solutions.",
    challenges: ["Manque d'expertise interne", "Budget limité", "Résistance au changement"],
    image: "/business-analyst-reviewing-digital-processes-and-c.jpg",
  },
]

const stats = [
  { number: "200+", label: "PME accompagnées", icon: Users },
  { number: "95%", label: "Taux de satisfaction", icon: TrendingUp },
  { number: "3 mois", label: "Délai moyen de mise en œuvre", icon: Shield },
]

export function TargetAudienceSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="h-4 w-4" />
            Nos clients
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            À qui s'adresse <span className="text-primary">Novatrait</span> ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Nous accompagnons les entreprises qui souhaitent accélérer leur transformation digitale avec des solutions
            concrètes et mesurables.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {audiences.map((audience, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={audience.image || "/placeholder.svg"}
                  alt={audience.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-3">
                    <audience.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{audience.title}</h3>
                  <p className="text-accent text-sm font-medium">{audience.subtitle}</p>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed mb-6">{audience.description}</p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">Défis courants :</h4>
                  <ul className="space-y-2">
                    {audience.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Vous vous reconnaissez ?</h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Découvrez comment nous pouvons vous accompagner dans votre transformation digitale avec des solutions
              adaptées à vos enjeux spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
              >
                Découvrir notre offre
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 bg-transparent"
              >
                Demander un diagnostic gratuit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
