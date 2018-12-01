import * as classNames from 'classnames/bind';
import * as React from 'react';

import CartItem from '../item';
import CartSummary from '../summary';
import * as styles from './CartList.scss';

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

interface Props {
  cartList: CartObject[];
  productAmount: number;
  deliveryCharge: number;
  handleRemoveCartList(cartId: number): void;
  handleCartChangeQuantity(cartId: number, quantity: number): void;
}

class CartList extends React.Component<Props, {}> {
  public render = () => {
    return (
      <div className={cx('cart-list')}>
        <table className={cx('cart-table')}>
            <thead className={cx('cart-head')}>
              <tr>
                <th>주문상품</th>
                <th>수량</th>
                <th>상품금액</th>
                <th>배송비</th>
                <th>주문관리</th>
              </tr>
            </thead>
            <tbody className={cx('cart-body')}>
              {this.props.cartList.map(cartData => {
                const {
                  id,
                  quantity,
                  goods,
                  options,
                  shipping
                } = cartData;

                return (
                  <CartItem
                    key={id}
                    id={id}
                    quantity={quantity}
                    goods={goods}
                    options={options}
                    shipping={shipping}
                    handleRemoveCartList={this.props.handleRemoveCartList}
                    handleCartChangeQuantity={this.props.handleCartChangeQuantity}
                  />
                )
              })}
            </tbody>
        </table>
        <CartSummary
          productAmount={this.props.productAmount}
          deliveryCharge={this.props.deliveryCharge}
        />
      </div>
    );
  };
};

export default CartList;
