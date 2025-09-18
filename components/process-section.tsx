import { Search, Target, Rocket, ArrowRight, CheckCircle } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnostiquer",
    description: "État des lieux précis de votre écosystème numérique pour identifier les leviers de croissance.",
    details: ["Audit complet", "Analyse des processus", "Identification des blocages"],
    image: "/business-analyst-reviewing-digital-processes-and-c.jpg",
  },
  {
    number: "02",
    icon: Target,
    title: "Structurer",
    description: "Plan d'action réaliste, organisé et priorisé selon vos ressources et objectifs.",
    details: ["Roadmap détaillée", "Priorisation des actions", "Budget optimisé"],
    image: "/project-planning-meeting-with-professionals-around.jpg",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Déployer",
    description: "Solutions adaptées avec formation de vos équipes et suivi personnalisé.",
    details: ["Implémentation", "Formation équipes", "Suivi & optimisation"],
    image: "/modern-office-space-with-professionals-working-on-.jpg",
  },
]

export function ProcessSection() {
  return (
    <section id="processus" className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-sm font-medium text-accent">Notre Méthodologie</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Un processus <span className="text-accent">éprouvé</span> en 3 étapes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Notre approche structurée garantit des résultats concrets et mesurables pour votre transformation numérique.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center border-2 border-accent/20">
                    <step.icon className="h-10 w-10 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-accent mb-1">ÉTAPE {step.number}</div>
                    <h3 className="text-3xl font-bold text-foreground">{step.title}</h3>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>

                <div className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>

                {index < steps.length - 1 && (
                  <div className="flex items-center gap-2 text-accent font-medium">
                    <span>Étape suivante</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img src={step.image || "/placeholder.svg"} alt={step.title} className="w-full h-80 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>

                  {/* Floating number */}
                  <div className="absolute top-6 left-6 w-16 h-16 bg-accent rounded-2xl shadow-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent-foreground">{step.number}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-3xl p-8 border border-accent/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">Durée moyenne : 3-6 mois</h3>
            <p className="text-muted-foreground mb-6">Selon la complexité de votre projet et vos objectifs</p>
            <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span>Diagnostic : 2-3 semaines</span>
              </div>
              <ArrowRight className="h-4 w-4" />
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span>Structuration : 1-2 semaines</span>
              </div>
              <ArrowRight className="h-4 w-4" />
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span>Déploiement : 2-4 mois</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
