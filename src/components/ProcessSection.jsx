import { useEffect, useRef } from 'react'
import { processSteps } from '../data/homeSections.js'
import gsap from './motion/gsap.js'
import Reveal from './motion/Reveal.jsx'
import Container from './ui/Container.jsx'
import SectionHeader from './ui/SectionHeader.jsx'

function ProcessSection() {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const motion = gsap.matchMedia(sectionRef)

    motion.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 68%',
            end: 'bottom 72%',
            scrub: true,
          },
        },
      )
    })

    return () => motion.revert()
  }, [])

  return (
    <section className="process-section" ref={sectionRef} id="process">
      <Container>
        <SectionHeader
          className="process-section__heading"
          eyebrow="A clear path forward"
          title="From first thought to feeling at home."
          description="A collaborative process, with space to consider every decision."
        />
        <div className="process-list">
          <span className="process-list__track" aria-hidden="true" />
          <span className="process-list__progress" ref={lineRef} aria-hidden="true" />
          {processSteps.map((step, index) => (
            <Reveal
              as="article"
              className="process-step"
              delay={index * 0.08}
              key={step.number}
            >
              <span className="process-step__number">{step.number}</span>
              <div>
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__description">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ProcessSection
