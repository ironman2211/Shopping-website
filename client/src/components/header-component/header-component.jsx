import React from 'react';
import './header-component.style.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';
 
import CartIcon from '../cart-component/cart-component.jsx';
import Cartdropdown from '../cart-dropdown.components/cart-dropdown.component.jsx';
import { createStructuredSelector } from 'reselect';
import { selectHidden } from '../../redux/cart/cart-selector';
import { selectCurrentUser } from '../../redux/user/user-selector';
import {signOutStart} from '../../redux/user/user-action'
const Header = ({ currentuser, hidden ,signOutStart}) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/contact" className="option">
        CONTACT
      </Link>

      {currentuser ? (
        <div
          className="option"
          onClick={signOutStart}
        >
          SIGN OUT
        </div>
      ) : (
        <Link to="/sign-in" className="option">
          SIGN IN
        </Link>
      )}
      <CartIcon className="cart-icon" />
    </div>

    {hidden ? '' : <Cartdropdown />}
  </div>
);

const mapStateToProp = createStructuredSelector({
  currentuser: selectCurrentUser,
  hidden: selectHidden,
});
const mapDispatchToProps=dispatch=>({
  signOutStart:()=>dispatch(signOutStart())
})

export default connect(mapStateToProp,mapDispatchToProps)(Header);
