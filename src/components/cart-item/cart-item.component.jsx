import { CartItemContainer, ItemDetails, Name } from "./cart-item.styles"

function CartItem({ cartItem }) {
    
    const {name, imageUrl, price, quantity} = cartItem

    return (
        <CartItemContainer >
            <img src={imageUrl} alt={`${name}`} ></img>
            <ItemDetails >
            <Name> {name} </Name>
            <span className="price"> {quantity} X ${price} </span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;