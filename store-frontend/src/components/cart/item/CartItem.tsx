import * as classNames from 'classnames/bind';
import * as React from 'react';

import * as styles from './CartItem.scss';

const cx = classNames.bind(styles);

interface Props {
  id: number;
  quantity: number;
  goods: {
    id: number;
    name: string;
    provider: string;
    price: number;
  },
  options: {
    id: number;
    color: string;
    size: string;
    stock: number;
  },
  shipping: {
    id: number;
    method: string;
    price: number;
    canBundle: boolean;
  }
}

const CartItem: React.SFC<Props> = ({
  id,
  quantity,
  goods,
  options,
  shipping
}) => {

  const shippingRender = () => {
    if (shipping.method === 'FREE') {
      return '무료배송';
    }

    return shipping.price + '원';
  }

  return (
    <tr className={cx('cart-item')}>
      <td className={cx('info-wrap')}>
        <div className={cx('info')}>
          <span className={cx('name')}>{goods.name}</span>
          <span className={cx('options')}>색상: {options.color} / 사이즈: {options.size}</span>
        </div>
      </td>
      <td><span className={cx('price')}>{goods.price}원</span></td>
      <td>
        <span className={cx('shipping-price')}>{ shippingRender() }</span>
      </td>
      <td>삭제</td>
    </tr>
  )
}

export default CartItem;
