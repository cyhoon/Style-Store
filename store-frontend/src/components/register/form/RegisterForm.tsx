import * as classNames from 'classnames/bind';
import * as React from 'react';

import * as styles from './RegisterForm.scss';

const cx = classNames.bind(styles);

interface Props {
  handleChangeUserEmail(value: string): void;
  handleChangePw(value: string): void;
  handleChangeNickName(value: string): void;
  handleRegister(): void;
}

const RegisterForm: React.SFC<Props> = ({ 
  handleChangeUserEmail,
  handleChangePw,
  handleChangeNickName,
  handleRegister
}) => {
  const onChangeUserEmail = (event: React.FormEvent<HTMLInputElement>) => {
    handleChangeUserEmail(event.currentTarget.value);
  };

  const onChangePw = (event: React.FormEvent<HTMLInputElement>) => {
    handleChangePw(event.currentTarget.value);
  };

  const onChangeNickName = (event: React.FormEvent<HTMLInputElement>) => {
    handleChangeNickName(event.currentTarget.value);
  };

  const onRegister = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handleRegister();
  }

  return (
    <div className={cx('register-form-wrap')}>
      <div className={cx('form')}>
        <input type="text" placeholder="이메일을 입력해 주세요" onChange={onChangeUserEmail} />
        <input type="password" placeholder="비밀번호를 입력해 주세요" onChange={onChangePw} />
        <input type="text" placeholder="이름을 입력해 주세요" onChange={onChangeNickName} />
        <button className={cx('register-btn')} onClick={onRegister}>회원가입</button>
      </div>
    </div>
  );
};

export default RegisterForm;
