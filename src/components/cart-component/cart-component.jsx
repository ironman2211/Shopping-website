import React from 'react';
import './cart-component.style.scss';
import {togglecarthidden} from '../../redux/cart/cart-action'
import {connect} from 'react-redux';
import {ReactComponent as Cartlogo} from '../assets/shopping-bag.svg'
import {selctCartItemsCount} from '../../redux/cart/cart-selector'
import { createStructuredSelector } from 'reselect';
const  CartIcon =({togglehidden,iteamQuantity})=>(
    <div className='cart-icon'>
        <Cartlogo className='shopping-icon' onClick={togglehidden}/>
        <span className='item-count'>{iteamQuantity}</span>

    </div>
)
const mapStateToProps=createStructuredSelector({
    iteamQuantity:selctCartItemsCount
})
const mapDispatchToProps=dispatch=>({
    togglehidden:()=>dispatch(togglecarthidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);