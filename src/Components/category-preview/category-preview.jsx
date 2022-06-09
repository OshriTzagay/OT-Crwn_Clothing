import "./category-preview.styles.scss";
import ProductCard from "../Product-Card-Compo/product-card";
import { Link } from "react-router-dom";
export default function CategoryPreview({ title, products }) {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title} className="title">{title.toUpperCase()}</Link>
      </h2>

      <div className="preview">
        {products
          .filter((product, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
