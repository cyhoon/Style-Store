import * as classNames from 'classnames/bind';
import * as React from 'react';
import { Link } from 'react-router-dom';

import * as styles from './RegisterTemplate.scss';

const cx = classNames.bind(styles);

interface Props {
  registerFormContainer: React.ReactNode,
}

const RegisterTemplate: React.SFC<Props> = ({ registerFormContainer }) => {
  return (
    <div className={cx('register-wrap')}>
      <div className={cx('bg-wrap')} />
      <div className={cx('register-form')}>
        <span className={cx('title')}>Style-Store</span>
        {registerFormContainer}
        <div className={cx('go-signin')}>
          <Link to="/login">로그인하러가기</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterTemplate;
