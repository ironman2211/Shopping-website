import React from 'react';
import SHOP_DATA from './shopdata.js'
import CollectionComponent from '../../components/collection-preview-components/collection-components.jsx';
class ShopPages extends React.Component{

constructor(){
super()
this.state={
    components: SHOP_DATA
}
}

render(){
   const {components}=this.state;

return(
    <div>
        {
            components.map(({id,...otherSectionProps})=>(
                <CollectionComponent key={id} {...otherSectionProps}/>
            ))
        }
    </div>
    )
}


}

export default ShopPages;