import { useState } from 'react'
import { ArrowUpRight, Camera, Pin } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from './ui/Container.jsx'

function Footer() {
  const [message, setMessage] = useState('')

  const handleNewsletterSubmit = (event) => {
    event.preventDefault()
    setMessage('Thank you for your interest. This demo does not store email addresses.')
    event.currentTarget.reset()
  }

  return (
    <footer className="site-footer">
      <Container className="footer-main">
        <div className="footer-brand">
          <Link className="footer-brand__name" to="/" aria-label="ADANKI home">
            ADANKI
          </Link>
          <p>Thoughtful interiors for everyday living.</p>
          <div className="footer-socials" aria-label="Social links">
            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <Camera size={18} strokeWidth={1.5} aria-hidden="true" />
            </a>
            <a
              href="https://www.pinterest.com/"
              aria-label="Pinterest"
              target="_blank"
              rel="noreferrer"
            >
              <Pin size={18} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h2 className="footer-heading">Explore</h2>
          <Link to="/products">The collection</Link>
          <Link to="/#services">Our services</Link>
          <Link to="/#process">Our process</Link>
          <Link to="/#contact">Get in touch</Link>
        </div>

        <div className="footer-newsletter">
          <h2 className="footer-heading">A considered note</h2>
          <p>Occasional ideas for living beautifully, delivered with care.</p>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <label className="visually-hidden" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              placeholder="Your email address"
              autoComplete="email"
              required
            />
            <button type="submit" aria-label="Join the newsletter">
              <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </form>
          <p className="newsletter-message" aria-live="polite">
            {message}
          </p>
        </div>
      </Container>

      <Container className="footer-bottom">
        <p>© {new Date().getFullYear()} ADANKI Studio</p>
        <p>Made with intention.</p>
      </Container>
    </footer>
  )
}

export default Footer
