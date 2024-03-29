import { useContext } from "react";

import { ProductCardContainer, Footer, Name, Price } from "./product-card.styles";

import { CartContext } from "../../context/cart.context";
import Button, {buttonTypeClasses} from "../button/button.component";

function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name> {name} </Name>
        <Price> {price} </Price>
      </Footer>
      <Button buttonType={buttonTypeClasses.inverted} onClick={addProductToCart} >Add to Cart</Button>
    </ProductCardContainer>
  );
}

export default ProductCard;
