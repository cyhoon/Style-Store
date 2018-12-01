import * as classNames from 'classnames/bind';
import * as React from 'react';

import CartList from '../list';
import CartResult from '../result';
import * as styles from './CartWrap.scss';

const cx = classNames.bind(styles);

interface CartObject {
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

type CartListData = CartObject[];

interface Props {
  providerList: CartListData[];
  productAmount: number[];
  deliveryCharge: number[];
  handleRemoveCartList(cartId: number): void;
  handleCartChangeQuantity(cartId: number, quantity: number): void;
}

const CartWrap: React.SFC<Props> = ({
  providerList,
  productAmount,
  deliveryCharge,
  handleRemoveCartList,
  handleCartChangeQuantity,
}) => {

  const getAllProductAmount = (): number => {
    let allProductAmount = 0;

    productAmount.map(data => allProductAmount += data );
    return allProductAmount;
  };

  const getAllDeliveryCharge = (): number => {
    let allDeliveryCharge = 0;

    deliveryCharge.map(data => allDeliveryCharge += data );
    return allDeliveryCharge;
  }

  return (
    <div className={cx('cart-wrap')}>
      <div className={cx('cart-list-wrap')}>
        {providerList.map((cartList: CartObject[], index: number) => {
          return (
            <CartList
              key={index}
              cartList={cartList}
              productAmount={productAmount[index]}
              deliveryCharge={deliveryCharge[index]}
              handleRemoveCartList={handleRemoveCartList}
              handleCartChangeQuantity={handleCartChangeQuantity}
            />
          )
        })}
      </div>
      <div className={cx('cart-result-wrap')}>
        <CartResult
          allProductAmount={getAllProductAmount()}
          allDeliveryCharge={getAllDeliveryCharge()}
        />
      </div>
    </div>
  );
};

export default CartWrap;
