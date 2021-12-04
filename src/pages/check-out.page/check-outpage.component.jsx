import React from 'react';
import './check-out.style.scss';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems,selectTotal} from '../../redux/cart/cart-selector'
import CheackoutItems from '../../components/checkout-component/checkout-item.component'
const CheckOutpage=({cartItems,total})=>(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className='header-block'>Product</div>
            <div className='header-block'>Description</div>
            <div className='header-block'>Quantity</div>
            <div className='header-block'>Price</div>
            <div className='header-block'>Remove</div>
        </div>
        {cartItems.map((cartItem) =><CheackoutItems key={cartItem.id} item={cartItem}/>)}
        <div className='total'>TOTAL ${total}</div>
    </div>
)

const mapStateToProp=createStructuredSelector({
    cartItems:selectCartItems,
    total:selectTotal

})
export default connect(mapStateToProp)(CheckOutpage);