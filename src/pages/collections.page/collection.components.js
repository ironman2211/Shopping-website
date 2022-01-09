import React from 'react';
import CollectionItem from '../../components/collection-items/collection-items.jsx';
import '../../components/collection-items/collection-item.style.scss';
import './collection.styles.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop-selector.js';
const Components = ({ collection }) => {
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToprops = (state, { match }) => {
  return { collection: selectCollection(match.params.Id)(state) };
};
export default connect(mapStateToprops)(Components);
