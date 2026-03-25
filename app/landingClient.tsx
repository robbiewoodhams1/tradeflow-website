import {
  Header,
  HeroSection,
  StatsBar,
  FeaturesSection,
  HowItWorksSection,
  TestimonialsSection,
  AboutSection,
  CTASection,
  Footer,
} from '@/components';

export default function LandingClient() {
  return (
    <div className="w-full flex flex-col">
      <Header />

      <section id="home">
        <HeroSection />
      </section>

      <StatsBar />

      <section id="features">
        <FeaturesSection />
      </section>

      <section id="how-it-works">
        <HowItWorksSection />
      </section>

      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <CTASection />

      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}
