import { Armchair, Lamp, PanelsTopLeft } from 'lucide-react'
import { services } from '../data/homeSections.js'
import Reveal from './motion/Reveal.jsx'
import Container from './ui/Container.jsx'
import SectionHeader from './ui/SectionHeader.jsx'

const serviceIcons = {
  design: PanelsTopLeft,
  furnishing: Armchair,
  styling: Lamp,
}

function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <Container>
        <SectionHeader
          className="services-section__heading"
          eyebrow="How we can help"
          title="A considered eye, at every scale."
          description="From a single room to a complete home, we make the process feel personal and clear."
        />
        <div className="services-list">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon]

            return (
              <Reveal
                as="article"
                className="service-card"
                delay={index * 0.1}
                key={service.id}
                tabIndex={0}
              >
                <span className="service-card__number">{service.number}</span>
                <Icon
                  className="service-card__icon"
                  size={28}
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
                <div className="service-card__content">
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__description">
                    {service.description}
                  </p>
                </div>
                <span className="service-card__mark" aria-hidden="true">↗</span>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default ServicesSection
