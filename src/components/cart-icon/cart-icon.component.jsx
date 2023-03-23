import { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../context/cart.context";

import { CartIconContainer, Shopping, ItemCount } from "./cart-icon.styles";

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartopen = () => setIsCartOpen(!isCartOpen);

    
  return (
    <CartIconContainer onClick={toggleIsCartopen}>
      <Shopping><ShoppingIcon /></Shopping>
      <ItemCount>
        {cartCount}
      </ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
