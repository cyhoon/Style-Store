import * as classNames from 'classnames/bind';
import * as React from 'react';

import * as styles from './CartList.scss';

const cx = classNames.bind(styles);

class CartList extends React.Component<{}, {}> {
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
              <tr>
                <td>베이직 후드 티셔츠</td>
                <td>493,000원</td>
                <td>무료배송</td>
                <td>삭제</td>
              </tr>
            </tbody>
        </table>
      </div>
    );
  };
};

export default CartList;
