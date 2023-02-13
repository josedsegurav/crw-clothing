import "./cart-dropdown.styles.scss"

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

function CartDropdown () {
    const { cartItems } = useContext(CartContext);
    return(
        <div className="cart-dropdown-container">
        <div>
        {cartItems.map(item => (<CartItem key={item.id} cartItem={item} /> ))}
        </div>
        <Button>CHECKOUT</Button>
        </div>
    )
};

export default CartDropdown;