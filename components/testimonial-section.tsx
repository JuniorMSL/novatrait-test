import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Grâce à Novatrait, notre déploiement ERP a été fluide et sans stress — en moins de trois mois, nous étions opérationnels.",
    author: "Marie Dubois",
    role: "Directrice Financière",
    company: "TechStart Solutions",
    image: "/placeholder.svg?key=marie-dubois",
    rating: 5,
  },
  {
    quote:
      "L'approche humaine et pragmatique de Novatrait nous a permis de digitaliser nos processus sans bouleverser nos équipes.",
    author: "Pierre Martin",
    role: "CEO",
    company: "Innovex Industries",
    image: "/placeholder.svg?key=pierre-martin",
    rating: 5,
  },
  {
    quote:
      "Nos tableaux de bord nous donnent enfin une vision claire de notre activité. Un investissement qui se rentabilise rapidement.",
    author: "Sophie Laurent",
    role: "Directrice Générale",
    company: "GreenTech Consulting",
    image: "/placeholder.svg?key=sophie-laurent",
    rating: 5,
  },
]

export function TestimonialSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-sm font-medium text-accent">Témoignages Clients</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Ils nous font <span className="text-accent">confiance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Découvrez comment nous avons accompagné nos clients dans leur transformation numérique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-accent/20"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                <Quote className="h-8 w-8 text-accent mb-4 opacity-50" />

                <blockquote className="text-lg font-medium text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <cite className="font-semibold text-foreground not-italic">{testimonial.author}</cite>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-accent font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction client</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">3 mois</div>
              <div className="text-sm text-muted-foreground">Délai moyen</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support dédié</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
