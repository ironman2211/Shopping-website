import React from 'react';
import './cart-dropdown.style.scss';
import { connect } from 'react-redux';
import Button from '../Custom-button/custom-btn.jsx' 
import CartIteam from '../cart-iteam.component/cart-iteam.componen'
import {selectCartItems} from '../../redux/cart/cart-selector'
import {createStructuredSelector} from 'reselect'
import {togglecarthidden} from '../../redux/cart/cart-action'
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Cartdropdown=({items,dispatch})=>{
    const navigate = useNavigate();
    
   return (
    <div className='cart-dropdown'>
   <div  className='cart-items'>
   {items.length?items.map(item =>(
       <CartIteam key={item.id} item={item}/>
   )):(<div className='cart-empty'>Cart is empty</div>)
}
   </div>
   <Button onClick={()=>{navigate('/checkout')
   dispatch(togglecarthidden())
  
}}>GO TO CHECKOUT</Button>
    
    </div>
)}
const mapStateToProp=createStructuredSelector({
    items:selectCartItems
})


export default connect(mapStateToProp)(Cartdropdown);