import { Link } from 'react-router-dom'
import Container from './ui/Container.jsx'

function CallToAction() {
  return (
    <section className="cta-section" id="contact">
      <img
        className="cta-section__image"
        src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2200&q=85"
        alt=""
        width={2200}
        height={1467}
        loading="lazy"
      />
      <div className="cta-section__overlay" />
      <Container className="cta-section__content">
        <p className="cta-section__eyebrow">A home that feels like you</p>
        <h2 className="cta-section__title">Let’s make room for what matters.</h2>
        <Link className="cta-section__button" to="/products">
          <span>Begin a conversation</span>
          <span aria-hidden="true">↗</span>
        </Link>
      </Container>
    </section>
  )
}

export default CallToAction
