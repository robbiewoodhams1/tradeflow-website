import {
  Header,
  HeroSection,
  FeaturesSection,
  TestimonialsSection,
  AboutSection,
  Footer
} from '@/components'

export default function LandingClient() {
  return (
    <div className="w-full flex flex-col">
      <Header />

      <section id="home">
        <HeroSection />
      </section>

      <section id="features">
        <FeaturesSection />
      </section>

      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}
