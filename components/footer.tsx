export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">Novatrait</h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Simplifiez votre transformation numérique avec notre accompagnement expert et humain.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Cadrage de projet</li>
              <li>Identité digitale</li>
              <li>Diagnostic numérique</li>
              <li>Intégration ERP</li>
              <li>Tableaux de bord</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>contact@novatrait.com</li>
              <li>+1 (514) 123‑4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Novatrait. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
