import React from 'react';
import './collection-preview.style.scss'
import CollectionItem from '.././collection-items/collection-items.jsx'
const CollectionComponent=({items,title})=> (
   <div className="collection-preview">
     
        <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {
        items.filter((items,index)=>index<4).map(({id,...othercollectionProps})=>(
          <CollectionItem key={id}{...othercollectionProps}/>
          
        ))

      }
    </div> 
          
          
      
    </div>
    )


export default CollectionComponent;