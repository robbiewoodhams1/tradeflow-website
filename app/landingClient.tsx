

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
      <HeroSection/>
      <FeaturesSection/>
      <TestimonialsSection/>
      <AboutSection/>
      <Footer/>
    </div>
  );
}
