import * as classNames from 'classnames/bind';
import * as React from 'react';

import * as styles from './LoginForm.scss';

const cx = classNames.bind(styles);

const LoginForm = () => {
  return (
    <div className={cx('login-form-wrap')}>
      <div className={cx('form')}>
        <input type="text" placeholder="이메일을 입력해 주세요" />
        <input type="password" placeholder="비밀번호를 입력해 주세요" />
        <button className={cx('login-btn')}>로그인</button>
      </div>
    </div>
  );
};

export default LoginForm;
