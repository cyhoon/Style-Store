import * as React from 'react';
import LoginTemplate from 'src/components/login/template';
import LoginContainer from 'src/container/LoginContainer';

const Login: React.SFC<null> = () => {
  return (
    <LoginTemplate
      loginFormContainer={<LoginContainer />}
    />
  );
};

export default Login;
