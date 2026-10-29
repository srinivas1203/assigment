import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from './motion/gsap.js'
import Container from './ui/Container.jsx'

const headlineLines = ['A quieter kind', 'of beautiful.']

function Hero() {
  const heroRef = useRef(null)

  useLayoutEffect(() => {
    const motion = gsap.matchMedia(heroRef)

    motion.add('(prefers-reduced-motion: no-preference)', () => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })

      timeline
        .fromTo(
          '.hero__image',
          { scale: 1.15 },
          { scale: 1, duration: 1.6, ease: 'power2.out' },
          0,
        )
        .fromTo(
          '.hero__line-text',
          { yPercent: 110 },
          { yPercent: 0, duration: 1, stagger: 0.16 },
          0.45,
        )
        .fromTo(
          '.hero__copy, .hero__cta',
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.75, stagger: 0.15 },
          1.05,
        )
        .fromTo(
          '.hero__ornament',
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.6 },
          1.2,
        )

      gsap.to('.hero__ornament', {
        y: -8,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.8,
      })
    })

    return () => motion.revert()
  }, [])

  return (
    <section className="hero" ref={heroRef} aria-labelledby="hero-title">
      <img
        className="hero__image"
        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=85"
        alt=""
        width={2400}
        height={1600}
        loading="eager"
        fetchPriority="high"
      />
      <div className="hero__overlay" />
      <Container className="hero__content">
        <p className="hero__eyebrow">Interiors with intention</p>
        <h1 className="hero__title" id="hero-title">
          <span className="visually-hidden">A quieter kind of beautiful.</span>
          <span className="hero__line" aria-hidden="true">
            <span className="hero__line-text">{headlineLines[0]}</span>
          </span>
          <span className="hero__line" aria-hidden="true">
            <span className="hero__line-text">{headlineLines[1]}</span>
          </span>
        </h1>
        <p className="hero__copy">
          Thoughtful spaces, enduring materials, and the beauty of living well.
        </p>
        <Link className="hero__cta" to="/products">
          <span>Explore the collection</span>
          <span className="hero__cta-arrow" aria-hidden="true">↗</span>
        </Link>
      </Container>
      <div className="hero__ornament" aria-hidden="true">
        <span />
      </div>
      <p className="hero__caption">A home, thoughtfully considered</p>
    </section>
  )
}

export default Hero
