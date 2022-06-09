import "./category.styles.scss";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../../contexts/categories-context";
import { useParams } from "react-router-dom"; //Allow to get a dynamic value from the url
import ProductCard from "../../Product-Card-Compo/product-card";
export default function Category() {
  const { categories } = useContext(CategoriesContext);
  const { category } = useParams();
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [categories, category]);
  return (
    <>
      <h2 className="titleOfCategory">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
}
