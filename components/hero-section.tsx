import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/modern-office-space-with-professionals-working-on-.jpg"
          alt="Professional digital transformation workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mr-4 backdrop-blur-sm border border-accent/20">
                <Rocket className="h-8 w-8 text-accent" />
              </div>
              <div>
                <span className="text-2xl font-bold text-foreground">Novatrait</span>
                <p className="text-sm text-muted-foreground">Transformation Numérique</p>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
              Votre partenaire pour une
              <span className="text-accent block mt-2">transformation numérique</span>
              <span className="text-muted-foreground text-3xl md:text-4xl lg:text-5xl block mt-2">réussie</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl text-pretty leading-relaxed">
              Nous accompagnons les PME et entrepreneurs dans leur digitalisation avec une approche humaine, des
              solutions concrètes et des résultats mesurables.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 shadow-lg"
              >
                Démarrer votre projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 bg-background/80 backdrop-blur-sm border-2"
              >
                <Play className="mr-2 h-5 w-5" />
                Voir notre approche
              </Button>
            </div>

            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>+50 projets réalisés</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Accompagnement personnalisé</span>
              </div>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="relative">
              <img
                src="/professional-business-dashboard-on-laptop-screen-s.jpg"
                alt="Dashboard professionnel"
                className="rounded-2xl shadow-2xl border border-border/50"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-2xl backdrop-blur-sm border border-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">98%</div>
                  <div className="text-xs text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-wider">Découvrir</span>
          <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center animate-bounce">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
