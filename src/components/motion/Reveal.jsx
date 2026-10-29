import { useEffect, useRef } from 'react'
import gsap from './gsap.js'

function Reveal({
  as = 'div',
  children,
  className = '',
  delay = 0,
  ...elementProps
}) {
  const elementRef = useRef(null)
  const Element = as

  useEffect(() => {
    const motion = gsap.matchMedia(elementRef)

    motion.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(
        elementRef.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          delay,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: elementRef.current,
            start: 'top 88%',
            once: true,
          },
        },
      )
    })

    return () => motion.revert()
  }, [delay])

  return (
    <Element ref={elementRef} className={className} {...elementProps}>
      {children}
    </Element>
  )
}

export default Reveal
