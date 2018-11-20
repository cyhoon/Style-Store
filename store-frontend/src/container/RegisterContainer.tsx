import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';

import Loading from 'src/components/common/loading';
import RegisterForm from 'src/components/register/form';
import Storage from 'src/lib/storage';
import { registerRequest } from 'src/store/modules/auth';


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
  registerRequest: typeof registerRequest;
};

interface State {
  userEmail: string;
  pw: string;
  nickName: string;
}

class RegisterContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      userEmail: '',
      pw: '',
      nickName: ''
    };
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
      alert('아이디가 중복됩니다');
    } else if (status === 'success') {
      // 토큰과 user 정보도 로컬 저장소에 저장한다.
      Storage.set('token', token);
      Storage.set('user', user);

      this.props.history.push('/');
    }
  }

  public handleChangeUserEmail = (userEmail: string) => {
    this.setState({ userEmail });
  };

  public handleChangeNickName = (nickName: string) => {
    this.setState({ nickName });
  };

  public handleChangePassword = (pw: string) => {
    this.setState({ pw });
  };

  public handleRegister = () => {
    const { userEmail, pw, nickName } = this.state;

    this.props.registerRequest(userEmail, pw, nickName);
  };

  public render() {
    return (
      <div>
        <React.Fragment>
          { this.props.pending ? <Loading /> : null }
          <RegisterForm
            handleChangeUserEmail={this.handleChangeUserEmail}
            handleChangePw={this.handleChangePassword}
            handleChangeNickName={this.handleChangeNickName}
            handleRegister={this.handleRegister}
          />
        </React.Fragment>
      </div>
    );
  }
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
  registerRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RegisterContainer));
