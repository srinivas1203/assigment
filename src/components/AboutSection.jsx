import ParallaxImage from './motion/ParallaxImage.jsx'
import TextReveal from './motion/TextReveal.jsx'
import Reveal from './motion/Reveal.jsx'
import Container from './ui/Container.jsx'
import SectionHeader from './ui/SectionHeader.jsx'

function AboutSection() {
  return (
    <section className="about-section" aria-labelledby="about-title">
      <Container className="about-section__grid">
        <ParallaxImage
          className="about-section__image"
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
          alt="Sunlit living room with natural materials and considered furnishings"
          width={1600}
          height={1200}
          distance={6}
        />
        <div className="about-section__content">
          <SectionHeader
            eyebrow="Our point of view"
            title="A slower, more thoughtful way to make a home."
            titleAs="h2"
            titleId="about-title"
          />
          <TextReveal
            as="p"
            className="about-section__statement"
            text="We believe a room should feel collected, not decorated."
          />
          <Reveal as="p" className="about-section__copy" delay={0.12}>
            ADANKI brings together enduring forms, natural textures, and the
            small details that make a space unmistakably yours. Every piece is
            chosen to live with you, and to live well.
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection
