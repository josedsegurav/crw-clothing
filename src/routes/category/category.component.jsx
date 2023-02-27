import { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../context/categories.context";
import { useState, useEffect } from "react";

import "./category.styles.scss";
import ProductCard from "../../components/product-card/product.card.component";

function Category() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <Fragment>
    <h2 className="title">{category.toUpperCase()}</h2>
    <div className="category-container">
    
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
    </Fragment>
  );
}

export default Category;
