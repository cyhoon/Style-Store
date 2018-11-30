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

type CartList = CartObject[];

interface Props {
  providerList: {
    status: string;
    data: CartList[];
  };
  cartListRequest: typeof cartListRequest;
}

interface State {
  providerList: [];
  totalAmount: number;
  productAmount: number[];
  deliveryCharge: number[];
}

class CartContainer extends React.Component<Props, State> {

  public static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    // 여기서는 setState 를 하는 것이 아니라
    // 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴하는 형태로
    // 사용됩니다.
    if (nextProps.providerList.data !== prevState.providerList) {

      return {
        providerList: nextProps.providerList.data
      };
    }

    return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
  }

  constructor(props: Props) {
    super(props);

    this.state = {
      providerList: [],
      totalAmount: 0, // 총 결제금액
      productAmount: [], // 상품금액
      deliveryCharge: [] // 유료 배송
    };

    // 입점사 별로 배열을 나눠줘 볼까?
  }

  public componentDidMount = () => {
    this.props.cartListRequest();
  };

  public dataProcessing = (providerList: CartList[]) => {
    // 총 상품 금액과 배송비를 파악한다.
    let productAmount: number[] = [];
    let deliveryCharge: number[] = [];

    providerList.map((cartList: CartObject[]) => {
      let productAmountData = 0;
      let deliveryChargeData = 0;

      cartList.map((cartData: CartObject) => {
        productAmountData += cartData.goods.price * cartData.quantity;

        const { method, price, canBundle } = cartData.shipping;

        if (method !== "FREE") { // 배송비가 유료라면
          if (!canBundle) { // 배송비 묶음이 불가능이라면
            deliveryChargeData += price;
          } else {
            if (price <= deliveryChargeData || deliveryChargeData === 0) {
              deliveryChargeData = price;
            }
          }
        }
      });

      productAmount = [...productAmount, productAmountData];
      deliveryCharge = [...deliveryCharge, deliveryChargeData];
    });

    return {
      productAmount,
      deliveryCharge
    };
  }

  public render = () => {
    const { productAmount, deliveryCharge } = this.dataProcessing(this.state.providerList);

    return (
      <div>
        <CartWrap
          providerList={this.state.providerList}
          productAmount={productAmount}
          deliveryCharge={deliveryCharge}
        />
      </div>
    );
  };
};

const mapStateToProps = ({ cart }: any) => {
  const { providerList } = cart;

  return {
    providerList,
  };
};

const mapDispatchToProps = {
  cartListRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
