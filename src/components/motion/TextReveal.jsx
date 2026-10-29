import { useEffect, useRef } from 'react'
import gsap from './gsap.js'

function TextReveal({ text, className = '', as = 'span' }) {
  const elementRef = useRef(null)
  const Element = as
  const words = text.split(/(\s+)/)

  useEffect(() => {
    const motion = gsap.matchMedia(elementRef)

    motion.add('(prefers-reduced-motion: no-preference)', () => {
      const wordElements = elementRef.current.querySelectorAll(
        '[data-text-reveal-word]',
      )

      gsap.fromTo(
        wordElements,
        { opacity: 0, yPercent: 110 },
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.75,
          stagger: 0.045,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: elementRef.current,
            start: 'top 88%',
            once: true,
          },
        },
      )
    })

    return () => motion.revert()
  }, [text])

  return (
    <Element ref={elementRef} className={`text-reveal ${className}`.trim()}>
      <span className="visually-hidden">{text}</span>
      <span className="text-reveal__visual" aria-hidden="true">
        {words.map((word, index) =>
          /^\s+$/.test(word) ? (
            word
          ) : (
            <span className="text-reveal__word" key={`${word}-${index}`}>
              <span data-text-reveal-word>{word}</span>
            </span>
          ),
        )}
      </span>
    </Element>
  )
}

export default TextReveal
