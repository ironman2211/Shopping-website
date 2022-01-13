import React from 'react';
import Collectionsoverview from '../../components/collectionsoverview/collectionsoverview.js';
import { Route } from 'react-router-dom';
import Components from '../collections.page/collection.components.js';
const ShopPages = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={Collectionsoverview} />
      <Route path={`${match.path}/:Id`} component={Components} />
    </div>
  );
};

export default ShopPages;
