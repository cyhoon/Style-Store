import * as classNames from 'classnames/bind';
import * as React from 'react';

import QuantityCounter from 'src/components/common/quantityCounter';

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
  },
  handleRemoveCartList(cartId: number): void;
  handleCartChangeQuantity(cartId: number, quantity: number): void;
}

const CartItem: React.SFC<Props> = ({
  id,
  quantity,
  goods,
  options,
  shipping,
  handleRemoveCartList,
  handleCartChangeQuantity,
}) => {

  const shippingRender = () => {
    if (shipping.method === 'FREE') {
      return '무료배송';
    }

    return shipping.price + '원';
  }

  const onClickRemoveButton = () => {
    handleRemoveCartList(id);
  }

  const onClickQuantityPlus = () => {
    const nextQuantity = quantity + 1;
    handleCartChangeQuantity(id, nextQuantity);
  };

  const onClickQuantityMinus = () => {
    const nextQuantity = quantity - 1;
    if (nextQuantity <= 0) { return; }
    handleCartChangeQuantity(id, nextQuantity);
  };

  return (
    <tr className={cx('cart-item')}>
      <td className={cx('info-wrap')}>
        <div className={cx('info')}>
          <span className={cx('name')}>{goods.name}</span>
          <span className={cx('options')}>색상: {options.color} / 사이즈: {options.size}</span>
        </div>
      </td>
      <td>
        <QuantityCounter
          quantity={quantity}
          onClickQuantityPlus={onClickQuantityPlus}
          onClickQuantityMinus={onClickQuantityMinus}
        />
      </td>
      <td><span className={cx('price')}>{goods.price * quantity}원</span></td>
      <td>
        <span className={cx('shipping-price')}>{ shippingRender() }</span>
      </td>
      <td>
        <div className={cx('button-wrap')}>
          <button className={cx('purchase-btn')}>바로구매</button>
          <button className={cx('remove-btn')} onClick={onClickRemoveButton}>삭제</button>
        </div>
      </td>
    </tr>
  )
}

export default CartItem;
