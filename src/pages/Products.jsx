import { Search } from 'lucide-react'
import Container from '../components/ui/Container.jsx'
import Reveal from '../components/motion/Reveal.jsx'
import TextReveal from '../components/motion/TextReveal.jsx'
import ProductCard from '../components/ui/ProductCard.jsx'
import products from '../data/products.js'

const categories = [
  'All',
  'Living Room',
  'Dining',
  'Bedroom',
  'Office',
  'Lighting',
  'Kitchen',
  'Decor',
]

function Products() {
  return (
    <section className="products-page">
      <Container>
        <div className="products-page__heading">
          <Reveal as="p" className="eyebrow">
            The collection
          </Reveal>
          <TextReveal
            as="h1"
            className="products-page__title"
            text="Objects for the considered home."
          />
          <Reveal as="p" className="products-page__description" delay={0.1}>
            Enduring forms, natural materials, and pieces made to live with.
          </Reveal>
        </div>

        <div className="products-toolbar">
          <nav className="category-filters" aria-label="Product categories">
            {categories.map((category, index) => (
              <span
                className={`category-chip${index === 0 ? ' category-chip--active' : ''}`}
                key={category}
                aria-current={index === 0 ? 'true' : undefined}
              >
                {category}
              </span>
            ))}
          </nav>
          <label className="product-search">
            <span className="visually-hidden">Search products</span>
            <input
              type="search"
              placeholder="Search the collection"
              readOnly
              aria-label="Search the collection"
            />
            <Search size={18} strokeWidth={1.5} aria-hidden="true" />
          </label>
        </div>

        <div className="product-grid products-page__grid">
          {products.map((product, index) => (
            <Reveal
              className="product-grid__item"
              delay={(index % 4) * 0.08}
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

export default Products
