import { useEffect, useRef } from 'react'
import gsap from './gsap.js'

function ParallaxImage({
  src,
  alt,
  width,
  height,
  className = '',
  distance = 8,
}) {
  const frameRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const motion = gsap.matchMedia(frameRef)

    motion.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(
        imageRef.current,
        { yPercent: -distance },
        {
          yPercent: distance,
          ease: 'none',
          scrollTrigger: {
            trigger: frameRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      )
    })

    return () => motion.revert()
  }, [distance])

  return (
    <figure
      className={`parallax-image ${className}`.trim()}
      ref={frameRef}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
      />
    </figure>
  )
}

export default ParallaxImage
