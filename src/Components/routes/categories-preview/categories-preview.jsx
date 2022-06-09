import { useContext, useEffect } from "react";
import { CategoriesContext } from "../../../contexts/categories-context";
import CategoryPreview from "../../category-preview/category-preview";
export default function CategoriesPreview() {
  const { categories } = useContext(CategoriesContext);
  useEffect(() => {
    console.log(categories);
  }, []);
  return (
    <>
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
}
