import { CheckoutItemContainer, Image, Name, Quantity, Arrow, Value, Price, Remove } from "./checkout-item.styles";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

function CheckoutItem({ cartItem }) {
  const { addItemToCart, deleteCheckoutItem, removeItem } =
    useContext(CartContext);
  const clearItemHandler = () => removeItem(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const deleteItemHandler = () => deleteCheckoutItem(cartItem);

  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CheckoutItemContainer>
      <Image>
        <img src={imageUrl} alt={`${name}`}></img>
      </Image>

      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={deleteItemHandler}>
          {" "}
          &#10094;{" "}
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>
          &#10095;
        </Arrow>
      </Quantity>

      <Price>{price}</Price>
      <Remove onClick={clearItemHandler}>
        &#10005;
      </Remove>
    </CheckoutItemContainer>
  );
}

export default CheckoutItem;
