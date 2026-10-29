import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import products from '../data/products.js'
import Reveal from './motion/Reveal.jsx'
import Container from './ui/Container.jsx'
import ProductCard from './ui/ProductCard.jsx'
import SectionHeader from './ui/SectionHeader.jsx'

function FeaturedProducts() {
  return (
    <section className="featured-section" aria-labelledby="featured-title">
      <Container>
        <div className="featured-section__heading">
          <SectionHeader
            eyebrow="Selected pieces"
            title="Made to make a room."
            titleAs="h2"
            titleId="featured-title"
          />
          <Reveal className="featured-section__action" delay={0.15}>
            <Link className="brass-link" to="/products">
              <span>View all</span>
              <ArrowUpRight size={17} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
        <div className="product-grid">
          {products.slice(0, 4).map((product, index) => (
            <Reveal
              className="product-grid__item"
              delay={index * 0.08}
              key={product.id}
            >
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FeaturedProducts
