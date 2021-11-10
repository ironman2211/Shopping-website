import React from 'react';
import { useNavigate } from 'react-router-dom';
import './menu-items.style.scss'

const MenuItems=({title,imageUrl,key,size,linkUrl})=>{
    const navigate=useNavigate();
    
    return(

    <div 
     className={`${size} menu-item`} onClick={()=>{navigate(`${linkUrl}`)}}
      key={key}>
    <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}/>
    <div className="content">
        <h1  className="title">{title.toUpperCase()}</h1>
        <small  className="subtitle">SHOP NOW</small>
    </div>
</div>
)}

export default MenuItems;