import { useEffect, useRef } from 'react'
import { statistics } from '../data/homeSections.js'
import gsap from './motion/gsap.js'
import Container from './ui/Container.jsx'

function StatisticsSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const motion = gsap.matchMedia(sectionRef)

    motion.add('(prefers-reduced-motion: no-preference)', () => {
      const counters = sectionRef.current.querySelectorAll('[data-count]')

      counters.forEach((element) => {
        const counter = { value: 0 }
        const value = Number(element.dataset.count)
        const suffix = element.dataset.suffix

        gsap.to(counter, {
          value,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 90%',
            once: true,
          },
          onUpdate: () => {
            element.textContent = `${Math.round(counter.value)}${suffix}`
          },
        })
      })
    })

    return () => motion.revert()
  }, [])

  return (
    <section className="statistics-section" ref={sectionRef}>
      <Container className="statistics-grid">
        {statistics.map((statistic) => (
          <div className="statistic" key={statistic.id}>
            <p className="statistic__number">
              <span data-count={statistic.value} data-suffix={statistic.suffix}>
                {statistic.value}{statistic.suffix}
              </span>
            </p>
            <p className="statistic__label">{statistic.label}</p>
          </div>
        ))}
      </Container>
    </section>
  )
}

export default StatisticsSection
