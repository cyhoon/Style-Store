import * as classNames from 'classnames/bind';
import * as React from 'react';
import { Link } from 'react-router-dom';

import * as styles from './LoginTemplate.scss';

const cx = classNames.bind(styles);

interface Props {
  loginFormContainer: React.ReactNode;
}

const LoginTemplate: React.SFC<Props> = ({ loginFormContainer }) => {
  return (
    <div className={cx('login-wrap')}>
      <div className={cx('bg-wrap')} />
      <div className={cx('login-form')}>
        <span className={cx('title')}>Style-Store</span>
        {loginFormContainer}
        <div className={cx('go-signup')}>
          <Link to="/register">회원가입하러가기</Link>
        </div>
      </div>
    </div>
  )
};

export default LoginTemplate;
