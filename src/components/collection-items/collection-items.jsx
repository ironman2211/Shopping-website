import React from 'react';
import "./collection-item.style.scss"
import Button from '../Custom-button/custom-btn.jsx'
import {connect} from 'react-redux'
import {additem} from '../../redux/cart/cart-action.js'

const CollectionItem=({item,addIteam})=>{
 const {imageUrl,name,price}=item;

    return(
<div className="collection-item">
    <div className="image" style={{backgroundImage:`url(${imageUrl})`}}/>
      <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
         
      </div>
      <Button onClick={()=>addIteam(item)} inverted>ADD TO CART</Button>

</div>

)}
const mapDispatchToProps=dispatch=>({
    addIteam:item=>dispatch(additem(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem);