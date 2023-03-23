import { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../context/categories.context";
import { useState, useEffect } from "react";

import { CategoryContainer, Title } from "./category.styles";
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
    <Title>{category.toUpperCase()}</Title>
    <CategoryContainer>
    
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </CategoryContainer>
    </Fragment>
  );
}

export default Category;
