import * as classNames from 'classnames/bind';
import * as React from 'react';

import * as styles from './CartItem.scss';

const cx = classNames.bind(styles);

class CartItem extends React.Component {
  public render = () => {
    return (
      <div className={cx('cart-item')}>
        Cart Item
      </div>
    );
  };
};

export default CartItem;
