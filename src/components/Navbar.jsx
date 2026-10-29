import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import gsap from './motion/gsap.js'
import Container from './ui/Container.jsx'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    let previousY = window.scrollY

    const updateOnScroll = () => {
      const currentY = window.scrollY
      setIsScrolled(currentY > 24)

      if (
        window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        menuOpen
      ) {
        setIsHidden(false)
      } else if (currentY < 24 || currentY < previousY) {
        setIsHidden(false)
      } else if (currentY > previousY + 2) {
        setIsHidden(true)
      }

      previousY = currentY
    }

    window.addEventListener('scroll', updateOnScroll, { passive: true })
    return () => window.removeEventListener('scroll', updateOnScroll)
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return undefined

    const menuMotion = gsap.matchMedia(navRef)
    menuMotion.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(
        navRef.current.querySelectorAll('.mobile-menu__link'),
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: 'power3.out' },
      )
    })

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    document.body.classList.add('menu-open')

    return () => {
      menuMotion.revert()
      document.removeEventListener('keydown', closeOnEscape)
      document.body.classList.remove('menu-open')
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)
  const headerClassNames = [
    'site-header',
    isHome && !isScrolled ? 'site-header--over-hero' : 'site-header--solid',
    isHidden && !menuOpen ? 'site-header--hidden' : '',
    menuOpen ? 'site-header--menu-open' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={headerClassNames} ref={navRef}>
      <Container className="site-header__inner">
        <NavLink
          className="site-logo"
          to="/"
          aria-label="ADANKI home"
          onClick={closeMenu}
        >
          ADANKI
        </NavLink>
        <nav className="site-nav site-nav--desktop" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/products">Products</NavLink>
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </Container>
      <nav
        className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}
        id="mobile-menu"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <NavLink className="mobile-menu__link" to="/" end onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink className="mobile-menu__link" to="/products" onClick={closeMenu}>
          Products
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
