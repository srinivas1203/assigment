function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <img
          className="product-card__image"
          src={product.image}
          alt={product.name}
          width={900}
          height={1200}
          loading="lazy"
        />
      </div>
      <div className="product-card__details">
        <div>
          <p className="product-card__category">{product.category}</p>
          <h3 className="product-card__name">{product.name}</h3>
          <p className="product-card__description">
            {product.shortDescription}
          </p>
        </div>
        <p className="product-card__price">
          ₹{product.price.toLocaleString('en-IN')}
        </p>
      </div>
      <button className="product-card__button" type="button">
        <span>View Details</span>
        <span className="product-card__button-arrow" aria-hidden="true">
          ↗
        </span>
      </button>
    </article>
  )
}

export default ProductCard
