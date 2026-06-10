import { getProducts } from "../data/products";

import ProductCard from "../components/ProductCard";

export default function Home() {
  const products = getProducts();
  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">Discover Quality Products</h1>
        <p className="home-subtitle">
          Quality items, unbeatable prices, and a seamless shopping experience.
        </p>

        <div className="container">
          <h2 className="page-title">
            Our <span style={{ color: "#007bff" }}>Products</span>
          </h2>
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
