import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-items.style.scss';

const MenuItems = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.path}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <small className="subtitle">SHOP NOW</small>
      </div>
    </div>
  );
};

export default withRouter(MenuItems);
