import React from 'react';
import './cart-component.style.scss';
import {togglecarthidden} from '../../redux/cart/cart-action'
import {connect} from 'react-redux';
import {ReactComponent as Cartlogo} from '../assets/shopping-bag.svg'

const  CartIcon =({togglehidden})=>(
    <div className='cart-icon'>
        <Cartlogo className='shopping-icon' onClick={togglehidden}/>
        <span className='item-count'>0</span>

    </div>
)
const mapDispatchToProps=dispatch=>({
    togglehidden:()=>dispatch(togglecarthidden())
})

export default connect(null,mapDispatchToProps)(CartIcon);