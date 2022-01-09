import React from 'react';
import './cart-dropdown.style.scss';
import { connect } from 'react-redux';
import Button from '../Custom-button/custom-btn.jsx';
import CartIteam from '../cart-iteam.component/cart-iteam.componen';
import { selectCartItems } from '../../redux/cart/cart-selector';
import { createStructuredSelector } from 'reselect';
import { togglecarthidden } from '../../redux/cart/cart-action';
// import { Navigate } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
const Cartdropdown = ({ items, dispatch, history }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.length ? (
          items.map(item => <CartIteam key={item.id} item={item} />)
        ) : (
          <div className="cart-empty">Cart is empty</div>
        )}
      </div>
      <Button
        onClick={() => {
          history.push('/checkout');
          dispatch(togglecarthidden());
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
};
const mapStateToProp = createStructuredSelector({
  items: selectCartItems,
});

export default withRouter(connect(mapStateToProp)(Cartdropdown));
