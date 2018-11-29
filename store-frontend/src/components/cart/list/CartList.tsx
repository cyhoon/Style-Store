import * as classNames from 'classnames/bind';
import * as React from 'react';

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
}

class CartList extends React.Component<Props, {}> {
  public render = () => {
    return (
      <div className={cx('cart-list')}>
        <table className={cx('cart-table')}>
            <thead className={cx('cart-head')}>
              <tr>
                <th>주문상품</th>
                <th>상품금액</th>
                <th>배송비</th>
                <th>주문관리</th>
              </tr>
            </thead>
            <tbody className={cx('cart-body')}>
              {this.props.cartList.map(cartData => {
                return (
                  <tr key={cartData.id}>
                    <td>{cartData.goods.name}</td>
                    <td>{cartData.goods.price}</td>
                    <td>
                      { cartData.shipping.method === 'FREE' ? '무료': '유료'}
                    </td>
                    <td>삭제</td>
                  </tr>
                )
              })}
            </tbody>
        </table>
      </div>
    );
  };
};

export default CartList;
