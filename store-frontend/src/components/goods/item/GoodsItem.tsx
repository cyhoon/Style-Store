import * as classNames from 'classnames/bind';
import * as React from 'react';

import Storage from 'src/lib/storage';
import Notice from '../notice';

import * as styles from './GoodsItem.scss';

const cx = classNames.bind(styles);

interface GoodsOptionsProps {
  id: number;
  color: string;
  size: string;
  stock: number;
}

interface Props {
  id: number;
  name: string;
  provider: string;
  price: number;
  options: GoodsOptionsProps[];
  shipping: {
    id: number;
    method: string;
    price: number;
    canBundle: boolean;
  };
  addCart: {
    goodsId: number;
    status: string;
  };
  handleCartAddRequest(goodsId: number, optionsId: number): void;
}

interface State {
  optionsId: number;
  visibleNotice: boolean;
}

class GoodsItem extends React.Component<Props, State> {
  public timerId: any = '';
  public state:State = {
    optionsId: 0,
    visibleNotice: true,
  }

  public handleChangeSelect = (event: React.FormEvent<HTMLSelectElement>) => {
    const optionsId = parseInt(event.currentTarget.value, 10);
    this.setState({ optionsId });
  }

  public handleAddBtn = () => {
    if (!Storage.get('token')) {
      alert('로그인 해 주세요');
      return;
    }

    if (this.state.optionsId === 0) {
      alert('사이즈를 선택해 주세요');
      return;
    }

    this.setState({ visibleNotice: true });
    this.props.handleCartAddRequest(this.props.id, this.state.optionsId);
  }

  public renderNotice = (): any => {
    const { goodsId, status } = this.props.addCart;

    const isRender = goodsId === this.props.id;

    if (!isRender) {
      return;
    }

    if (status === 'FAIL') {
      alert('장바구니 추가 실패');
      return;
    }

    clearTimeout(this.timerId); // 전에 있던 이벤트가 실행되는것을 막기 위해..

    this.timerId = setTimeout(() => {
      this.setState({ visibleNotice: false });
    }, 4000);

    return (
      this.state.visibleNotice ? <Notice /> : null
    );
  }

  public render() {
    const {
      name,
      provider,
      price,
      options
    } = this.props;

    return (
      <div className={cx('goods-item-wrap')}>
        <div className={cx('goods-image')} />
        <div className={cx('goods-description')}>
          <span className={cx('company')}>{provider}</span>
          <span className={cx('name')}>{name}</span>
          <span className={cx('price')}>{price}원</span>
          <div className={cx('size')}>
            <select value={this.state.optionsId} onChange={this.handleChangeSelect}>
              <option value={0} disabled={true}>사이즈와 색상을 선택해 주세요</option>
              {
                options.map(option => {
                  return (
                    <option key={option.id} value={option.id}>{option.size} | {option.color}</option>
                  )
                })
              }
            </select>
          </div>
          { this.renderNotice() }
          <button className={cx('cart-add-btn')} onClick={this.handleAddBtn}>장바구니 추가</button>
        </div>
      </div>
    );
  }
}

export default GoodsItem;
