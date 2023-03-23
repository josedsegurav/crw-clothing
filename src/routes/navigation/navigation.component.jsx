import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { NavigationContainer, LogoContainer, NavLink, NavLinks } from "./navigation.styles";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signUserOut } from "../../utils/firebase/firebase.utils";

function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signUserOut}>
              Sign Out
            </NavLink>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          <CartIcon></CartIcon>

        </NavLinks>
        { isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
