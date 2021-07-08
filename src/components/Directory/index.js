import React from 'react';
import ShopMen from '../../assets/man_fashion.jpg';
import ShopWomen from '../../assets/woman_fashion.jpg';
import './styles.scss';

const Directory = () => (
  <div className="directory">
    <div className="wrap">
      <div className="item" style={{ backgroundImage: `url(${ShopWomen})` }}>
        <a href="#women">Shop Women&apos;s</a>
      </div>
      <div className="item" style={{ backgroundImage: `url(${ShopMen})` }}>
        <a href="#man">Shop Men&apos;s</a>
      </div>
    </div>
  </div>
);

export default Directory;
