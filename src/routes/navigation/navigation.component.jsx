import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import "./navigation.styles.scss";
import { UserContext } from "../../context/user.context";
import { signUserOut } from "../../utils/firebase/firebase.utils";

function Navigation() {
  
  const{ currentUser } = useContext(UserContext);


  return (  
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {
            currentUser ? (
              <span className="nav-link" onClick={signUserOut} >Sign Out</span>
            ) : (
              <Link className="nav-link" to="/auth">
            Sign In
          </Link>
            ) 
            
          }

          
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
