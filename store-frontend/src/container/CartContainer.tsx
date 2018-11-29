import * as React from 'react';
import { connect } from 'react-redux';

import * as _ from 'lodash';

import CartWrap from 'src/components/cart/wrap';
import { cartListRequest } from 'src/store/modules/cart';

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

interface CartList {
  cartList: CartObject[];
}

interface Props {
  cartList: {
    status: string;
    data: CartObject[];
  };
  cartListRequest: typeof cartListRequest;
}

interface State {
  cartListWrap: CartList[];
  cartList: CartObject[];
  totalAmount: number;
  productAmount: number[];
  deliveryCharge: number[];
}

class CartContainer extends React.Component<Props, State> {

  public static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    // 여기서는 setState 를 하는 것이 아니라
    // 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴하는 형태로
    // 사용됩니다.
    if (nextProps.cartList.data !== prevState.cartList) {

      return {
        cartList: nextProps.cartList.data
      };
    }

    return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
  }

  constructor(props: Props) {
    super(props);

    this.state = {
      cartListWrap: [],
      cartList: [],
      totalAmount: 0, // 총 결제금액
      productAmount: [], // 상품금액
      deliveryCharge: [] // 유료 배송
    };

    // 입점사 별로 배열을 나눠줘 볼까?
  }

  public componentDidMount = () => {
    this.props.cartListRequest();
  };

  public dataProcessing = (primevalCartList: CartObject[]) => {
    // 1. 입점사 기준으로 데이터를 가공한다.
    const cartListWrap = _.chain(primevalCartList)
        .groupBy('goods.provider')
        .map((value: any) => (value))
        .value();

    // 2. 가공한 데이터를 반복문으로 돌려 총 상품 금액과 배송비를 파악한다.
    let productAmount: number[] = [];
    let deliveryCharge: number[] = [];

    cartListWrap.map((cartList: CartObject[]) => {
      let productAmountData = 0;
      let deliveryChargeData = 0;

      cartList.map((cartData: CartObject) => {
        productAmountData += cartData.goods.price * cartData.quantity;

        const { method, price, canBundle } = cartData.shipping;

        if (method !== "FREE") { // 배송비가 유료라면
          if (!canBundle) { // 배송비 묶음이 불가능이라면
            deliveryChargeData += price;
          } else {
            if (price <= deliveryChargeData) {
              deliveryChargeData = price;
            }
          }
        }
      });

      console.log('product amount: ', productAmountData);
      console.log('deliveryCharge: ', deliveryChargeData);
      productAmount = [...productAmount, productAmountData];
      deliveryCharge = [...deliveryCharge, deliveryChargeData];
      // this.setState({ productAmount: [...this.state.productAmount, productAmount] });
    });

    console.log('product amount: ', productAmount);
    console.log('deliveryCharge: ', deliveryCharge);
  }

  public render = () => {
    this.dataProcessing(this.state.cartList);
    return (
      <div>
        <CartWrap />
      </div>
    );
  };
};

const mapStateToProps = ({ cart }: any) => {
  const { cartList } = cart;

  return {
    cartList,
  };
};

const mapDispatchToProps = {
  cartListRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
