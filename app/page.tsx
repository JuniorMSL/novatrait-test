import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { WhyUsSection } from "@/components/why-us-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { TargetAudienceSection } from "@/components/target-audience-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <WhyUsSection />
      <TestimonialSection />
      <TargetAudienceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
