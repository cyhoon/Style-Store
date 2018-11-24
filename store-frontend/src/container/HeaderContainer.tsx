import * as React from 'react';
import { connect } from 'react-redux';
import Header from 'src/components/common/header';
import Storage from 'src/lib/storage';
import { cartCountRequest } from 'src/store/modules/cart';
import { saveUser, userLogout } from 'src/store/modules/user';

interface Props {
  isLogin: boolean;
  user: {
    userEmail: string;
    nickName: string;
    gender: string;
    birthDay: string;
    photoSrc: string;
  };
  cartCount: number;
  cartCountRequest: typeof cartCountRequest;
  saveUser: typeof saveUser;
  userLogout: typeof userLogout;
}

interface State {
  isMenu: boolean;
}

class HeaderContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { isMenu: false };
  }

  public componentDidMount = async () => {
    await this.checkLogin();

    if (this.props.isLogin) {
      this.props.cartCountRequest();
    }
  }

  public checkLogin = () => {
    const token = Storage.get('token');
    const user = Storage.get('user');

    if (token) {
      this.props.saveUser({ token, user });
    }
  }

  public handleLogOut = async () => {
    Storage.remove('token');
    Storage.remove('user');

    await this.props.userLogout();
    window.location.href = "/";
  }

  public handleMenuClick = () => {
    this.setState({ isMenu: !this.state.isMenu });
  };

  public render() {
    return (
      <Header
        isLogin = {this.props.isLogin}
        cartCount = {this.props.cartCount}
        isMenu = {this.state.isMenu}
        handleLogOut = {this.handleLogOut}
        handleMenuClick = {this.handleMenuClick}
      />
    );
  }
};

const mapStateToProps = ({ user: userProfile, cart }: any) => {
  const { isLogin, user } = userProfile;
  const { cartCount } = cart;

  return {
    isLogin,
    user,
    cartCount,
  };
}

const mapDispatchToProps = {
  cartCountRequest,
  saveUser,
  userLogout,
};

export default connect (mapStateToProps, mapDispatchToProps)(HeaderContainer);
