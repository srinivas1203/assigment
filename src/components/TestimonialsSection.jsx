import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { testimonials } from '../data/homeSections.js'
import gsap from './motion/gsap.js'
import Container from './ui/Container.jsx'
import SectionHeader from './ui/SectionHeader.jsx'

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const quoteRef = useRef(null)
  const activeTestimonial = testimonials[activeIndex]

  useEffect(() => {
    const motion = gsap.matchMedia(quoteRef)

    motion.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' },
      )
    })

    return () => motion.revert()
  }, [activeIndex])

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + testimonials.length) % testimonials.length)
  }

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % testimonials.length)
  }

  return (
    <section className="testimonials-section" id="testimonials">
      <Container>
        <SectionHeader
          className="testimonials-section__heading"
          eyebrow="Kind words"
          title="Good spaces make room for life."
        />
        <div className="testimonial" aria-live="polite">
          <span className="testimonial__quote-mark" aria-hidden="true">“</span>
          <div className="testimonial__content" ref={quoteRef}>
            <blockquote className="testimonial__quote">
              {activeTestimonial.quote}
            </blockquote>
            <p className="testimonial__name">{activeTestimonial.name}</p>
            <p className="testimonial__detail">{activeTestimonial.detail}</p>
          </div>
          <div className="testimonial__controls">
            <button
              className="testimonial__button"
              type="button"
              onClick={showPrevious}
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={18} strokeWidth={1.5} aria-hidden="true" />
            </button>
            <span className="testimonial__count">
              {String(activeIndex + 1).padStart(2, '0')} /{' '}
              {String(testimonials.length).padStart(2, '0')}
            </span>
            <button
              className="testimonial__button"
              type="button"
              onClick={showNext}
              aria-label="Next testimonial"
            >
              <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default TestimonialsSection
