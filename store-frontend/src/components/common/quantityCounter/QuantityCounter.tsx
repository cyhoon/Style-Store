import * as classNames from 'classnames/bind';
import * as React from 'react';

import * as styles from './QuantityCounter.scss';

const cx = classNames.bind(styles);

interface Props {
  quantity: number;
}

const QuantityCounter: React.SFC<Props> = ({
  quantity
}) => {
  return (
    <div className={cx('quantity-counter')}>
      <button className={cx('quantity-button')}>-</button>
      <span className={cx('quantity-view')}>{quantity}</span>
      <button className={cx('quantity-button')}>+</button>
    </div>
  );
};

export default QuantityCounter;
