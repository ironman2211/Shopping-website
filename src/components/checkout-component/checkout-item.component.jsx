import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux'
import {clearitemfromcart,additem,removeItem} from '../../redux/cart/cart-action'
const CheackoutItems=({item,clearitemfromcart,removeItem,additem})=>{
    const {imageUrl,name,price,quantity}=item;
   return (
    <div className="checkout-item">
       <div className="image-container">
           <img src={imageUrl} alt={name} />
       </div>
       <span className='name'>{name}</span>
       <span className='quantity'>
           <div className='arrow' onClick={()=>removeItem(item)}>&#10094;</div>
           <div className='value'>{quantity}</div>
           <div className='arrow'  onClick={()=>additem(item)}>&#10095;</div>
           </span>
       <span className='price'>{price}</span>
       <div className='remove-button' onClick={()=>clearitemfromcart(item)}>&#10006;</div>
    </div>
)}
const mapDispatchToProps=dispatch=>({
    clearitemfromcart:(item) => dispatch(clearitemfromcart(item)),
    additem:(item)=>dispatch(additem(item)),
    removeItem:(item)=>dispatch(removeItem(item)),
    
})
export default connect(null,mapDispatchToProps)(CheackoutItems);