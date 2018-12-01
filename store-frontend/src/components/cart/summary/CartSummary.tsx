import * as classNames from 'classnames/bind'
import * as React from 'react';

import * as styles from './CartSummary.scss';

const cx = classNames.bind(styles);

interface Props {
  productAmount: number;
  deliveryCharge: number;
}

const CartSummary: React.SFC<Props> = ({
  productAmount,
  deliveryCharge
}) => {
  return (
    <div className={cx('cart-summary')}>
      <span className={cx('summary-text')}>상품 {productAmount}원 + 배송 {deliveryCharge}원 = {productAmount + deliveryCharge}원</span>
    </div>
  );
};

export default CartSummary;
