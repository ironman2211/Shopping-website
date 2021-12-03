import React from 'react';
import './collection-preview.style.scss'
import CollectionItem from '.././collection-items/collection-items.jsx'
const CollectionComponent=({items,title})=> (
   <div className="collection-preview">
     
        <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {
        items.filter((item,index)=>index<4).map((item)=>(
          <CollectionItem key={item.id} item={item}/>
          
        ))

      }
    </div> 
          
          
      
    </div>
    )


export default CollectionComponent;