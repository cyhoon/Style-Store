import * as classNames from 'classnames/bind';
import * as React from 'react';

import * as styles from './QuantityCounter.scss';

const cx = classNames.bind(styles);

interface Props {
  quantity: number;
  onClickQuantityMinus(): void;
  onClickQuantityPlus(): void;
}

const QuantityCounter: React.SFC<Props> = ({
  quantity,
  onClickQuantityPlus,
  onClickQuantityMinus,
}) => {
  return (
    <div className={cx('quantity-counter')}>
      <button className={cx('quantity-button')} onClick={onClickQuantityMinus}>-</button>
      <span className={cx('quantity-view')}>{quantity}</span>
      <button className={cx('quantity-button')} onClick={onClickQuantityPlus}>+</button>
    </div>
  );
};

export default QuantityCounter;
