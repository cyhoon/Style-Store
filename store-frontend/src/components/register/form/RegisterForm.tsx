import * as classNames from 'classnames/bind';
import * as React from 'react';

import * as styles from './RegisterForm.scss';

const cx = classNames.bind(styles);

const RegisterForm: React.SFC<{}> = () => {
  return (
    <div className={cx('register-form-wrap')}>
      <div className={cx('form')}>
        <input type="text" placeholder="이메일을 입력해 주세요" />
        <input type="password" placeholder="비밀번호를 입력해 주세요" />
        <input type="text" placeholder="이름을 입력해 주세요" />
        <button className={cx('register-btn')}>회원가입</button>
      </div>
    </div>
  );
};

export default RegisterForm;
