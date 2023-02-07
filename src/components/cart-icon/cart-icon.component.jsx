import { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../context/cart.context";

import "./cart-icon.styles.scss"

function CartIcon () {

    const {isCartOpen, setIsCartOpen} = useContext(CartContext);

    const toggleIsCartopen = () => setIsCartOpen(!isCartOpen);
    
return(
    <div className="cart-icon-container" onClick={toggleIsCartopen}>
        <ShoppingIcon className="shopping-icon"></ShoppingIcon>
        <span className="item-count">0</span>
    </div>
)
}

export default CartIcon;