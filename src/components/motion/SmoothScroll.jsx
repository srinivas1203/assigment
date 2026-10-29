import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap, { ScrollTrigger } from './gsap.js'

function SmoothScroll() {
  useEffect(() => {
    const motion = gsap.matchMedia()

    motion.add('(prefers-reduced-motion: no-preference)', () => {
      const lenis = new Lenis({ autoRaf: false })
      const updateScrollTrigger = () => ScrollTrigger.update()
      const updateLenis = (time) => {
        // GSAP supplies seconds; Lenis expects elapsed time in milliseconds.
        lenis.raf(time * 1000)
      }

      lenis.on('scroll', updateScrollTrigger)
      gsap.ticker.add(updateLenis)
      gsap.ticker.lagSmoothing(0)
      ScrollTrigger.refresh()

      return () => {
        lenis.off('scroll', updateScrollTrigger)
        gsap.ticker.remove(updateLenis)
        lenis.destroy()
      }
    })

    return () => motion.revert()
  }, [])

  return null
}

export default SmoothScroll
