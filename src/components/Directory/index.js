import React from 'react';
import ShopMen from '../../assets/man_fashion.jpg';
import ShopWomen from '../../assets/woman_fashion.jpg';
import './styles.scss';

const Directory = () => (
  <div className="directory">
    <div className="wrap">
      <div className="item" style={{ backgroundImage: `url(${ShopWomen})` }}>
        <button type="button">
          <a className="text-danger" href="/women">
            Shop Women&apos;s
          </a>
        </button>
      </div>
      <div className="item" style={{ backgroundImage: `url(${ShopMen})` }}>
        <button type="button">
          <a className="text-danger" href="/man">
            Shop Men&apos;s
          </a>
        </button>
      </div>
    </div>
  </div>
);

export default Directory;
