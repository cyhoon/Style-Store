import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import Loading from 'src/components/common/loading';
import LoginForm from 'src/components/login/form';
import { loginRequest } from 'src/store/modules/auth';
import { saveUser } from 'src/store/modules/user';
import Storage from '../lib/storage';

interface Props extends RouteComponentProps<any> {
  // form: React.ReactNode,
  pending: boolean;
  token: string;
  response: {
    status: string;
    description: string;
    user: {
      userEmail: string,
      nickName: string,
      gender: string,
      birthDay: string,
      photoSrc: string,
    };
    token: string;
  },
  loginRequest: typeof loginRequest;
  saveUser: typeof saveUser;
};

interface State {
  userEmail: string;
  pw: string;
};

class LoginContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { userEmail: '', pw: '' };
  }

  public componentWillMount = () => {
    if (Storage.get('token')) { // 토큰이 존재 한다면
      this.props.history.push('/');
    }
  }

  public componentWillReceiveProps = (nextProps: Props) => {
    const { response: { status, user, token }} = nextProps;

    // 로그인 로직 처리
    if (status === 'fail') {
      alert('계정이 조회되지 않습니다');
    } else if (status === 'success') {
      // 토큰과 user 정보도 로컬 저장소에 저장한다.
      Storage.set('token', token);
      Storage.set('user', user);

      this.props.saveUser({ token, user });
      this.props.history.push('/');
    }
  }

  public handleChangeUserEmail = (userEmail: string) => {
    this.setState({ userEmail });
  };

  public handleChangePw = (pw: string) => {
    this.setState({ pw });
  };

  public handleLogin = () => {
    const { userEmail, pw }: State = this.state;
    this.props.loginRequest(userEmail, pw);
  };

  public render() {
    return (
      <React.Fragment>
        { this.props.pending ? <Loading /> : null }
        <LoginForm
          handleChangeUserEmail={this.handleChangeUserEmail}
          handleChangePw={this.handleChangePw}
          handleLogin={this.handleLogin}
        />
      </React.Fragment>
    );
  };
};

const mapStateToProps = ({ auth }: any) => {
  const { pending, token, response } = auth;

  return {
    pending,
    token,
    response
  };
}

const mapDispatchToProps = {
  loginRequest,
  saveUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginContainer));

