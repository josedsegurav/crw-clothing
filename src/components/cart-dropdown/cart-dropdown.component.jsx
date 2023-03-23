import { CartDropContainer, EmptyMessage, CartItems } from "./cart-dropdown.styles";

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropContainer>
      <CartItems>
        {
          cartItems.length ? (cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )
          }
      </CartItems>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </CartDropContainer>
  );
}

export default CartDropdown;
