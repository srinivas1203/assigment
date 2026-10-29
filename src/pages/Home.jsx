import Hero from '../components/Hero.jsx'
import AboutSection from '../components/AboutSection.jsx'
import FeaturedProducts from '../components/FeaturedProducts.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import ServicesSection from '../components/ServicesSection.jsx'
import ProcessSection from '../components/ProcessSection.jsx'
import StatisticsSection from '../components/StatisticsSection.jsx'
import TestimonialsSection from '../components/TestimonialsSection.jsx'
import CallToAction from '../components/CallToAction.jsx'

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturedProducts />
      <WhyChooseUs />
      <ServicesSection />
      <ProcessSection />
      <StatisticsSection />
      <TestimonialsSection />
      <CallToAction />
    </>
  )
}

export default Home
