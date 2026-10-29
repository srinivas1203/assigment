import {
  Gem,
  HeartHandshake,
  Leaf,
} from 'lucide-react'
import values from '../data/values.js'
import Reveal from './motion/Reveal.jsx'
import Container from './ui/Container.jsx'
import SectionHeader from './ui/SectionHeader.jsx'

const valueIcons = {
  materials: Leaf,
  craft: Gem,
  guidance: HeartHandshake,
}

function WhyChooseUs() {
  return (
    <section className="values-section" aria-labelledby="values-title">
      <Container>
        <SectionHeader
          className="values-section__heading"
          eyebrow="The ADANKI difference"
          title="Less, but with meaning."
          description="A considered approach to the things we bring into your home."
          titleAs="h2"
          titleId="values-title"
        />
        <div className="values-grid">
          {values.map((value, index) => {
            const Icon = valueIcons[value.icon]

            return (
              <Reveal
                as="article"
                className="value-card"
                delay={index * 0.12}
                key={value.id}
              >
                <Icon
                  className="value-card__icon"
                  size={28}
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
                <h3 className="value-card__title">{value.title}</h3>
                <p className="value-card__description">{value.description}</p>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default WhyChooseUs
