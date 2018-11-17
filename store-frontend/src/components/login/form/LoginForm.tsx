import * as classNames from 'classnames/bind';
import * as React from 'react';

import * as styles from './LoginForm.scss';

const cx = classNames.bind(styles);

interface Props {
  handleChangeUserEmail(value: string): void;
  handleChangePw(value: string): void;
  handleLogin(): void;
}

const LoginForm: React.SFC<Props> = ({ handleChangeUserEmail, handleChangePw, handleLogin }) => {

  const onChangeUserEmail = (event: React.FormEvent<HTMLInputElement>) => {
    handleChangeUserEmail(event.currentTarget.value);
  };

  const onChangePw = (event: React.FormEvent<HTMLInputElement>) => {
    handleChangePw(event.currentTarget.value);
  };

  const onLoginClick = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handleLogin();
  }

  return (
    <div className={cx('login-form-wrap')}>
      <div className={cx('form')}>
        <input type="text" placeholder="이메일을 입력해 주세요" onChange={onChangeUserEmail} />
        <input type="password" placeholder="비밀번호를 입력해 주세요" onChange={onChangePw} />
        <button className={cx('login-btn')} onClick={onLoginClick} >로그인</button>
      </div>
    </div>
  );
};

export default LoginForm;
