import { Button } from "@/components/ui/button"
import { Settings, Palette, Search, Puzzle, BarChart3, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Settings,
    title: "Cadrage de Projet",
    description:
      "Posez des bases solides : analyse fonctionnelle et technique, documentation claire, workflow optimisé.",
    image: "/project-planning-meeting-with-professionals-around.jpg",
    features: ["Analyse fonctionnelle", "Documentation technique", "Workflow optimisé"],
  },
  {
    icon: Palette,
    title: "Identité & Design Digital",
    description: "Votre vitrine professionnelle : logo, charte graphique, UI/UX, responsive et impactant.",
    image: "/designer-working-on-brand-identity-and-website-moc.jpg",
    features: ["Logo & charte graphique", "UI/UX Design", "Responsive design"],
  },
  {
    icon: Search,
    title: "Diagnostic Numérique & Feuille de Route",
    description: "Cartographie de vos process, blocages identifiés, priorisation, roadmap adaptée à votre taille.",
    image: "/business-analyst-reviewing-digital-processes-and-c.jpg",
    features: ["Audit complet", "Identification des blocages", "Roadmap personnalisée"],
  },
  {
    icon: Puzzle,
    title: "Intégration ERP",
    description: "Implémentation personnalisée et pragmatique, centralisation des ventes, stocks, finances.",
    image: "/erp-system-integration-dashboard-showing-sales--in.jpg",
    features: ["Odoo, Zoho, SAP", "Centralisation des données", "Formation équipes"],
  },
  {
    icon: BarChart3,
    title: "Tableaux de Bord & Pilotage",
    description: "Dashboard connecté à votre ERP/compta, indicateurs clés à J+1, alertes automatiques.",
    image: "/executive-dashboard-with-kpis--charts-and-real-tim.jpg",
    features: ["KPIs en temps réel", "Alertes automatiques", "Reporting avancé"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-sm font-medium text-accent">Nos Expertises</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Des solutions <span className="text-accent">sur mesure</span> pour votre croissance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Nous transformons vos défis numériques en opportunités de croissance avec une approche pragmatique et des
            résultats concrets.
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                    <div className="w-12 h-1 bg-accent rounded-full mt-2"></div>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="group bg-transparent">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                </div>
                {/* Floating element */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-2xl shadow-lg flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-accent-foreground" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-3xl p-12 border border-accent/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">Prêt à transformer votre entreprise ?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discutons de vos besoins et découvrons ensemble comment nous pouvons accélérer votre croissance.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Planifier un appel découverte
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
