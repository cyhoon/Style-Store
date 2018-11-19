import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';

import Loading from 'src/components/common/loading';
import RegisterForm from 'src/components/register/form';


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
};

class RegisterContainer extends React.Component<Props, {}> {
  public render() {
    return (
      <div>
        <React.Fragment>
          { this.props.pending ? <Loading /> : null }
          <RegisterForm
            // handleChangeUserEmail={this.handleChangeUserEmail}
            // handleChangePw={this.handleChangePw}
            // handleLogin={this.handleLogin}
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
  // registerReuqest,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RegisterContainer));
