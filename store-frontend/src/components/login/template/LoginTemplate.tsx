import * as classNames from 'classnames/bind';
import * as React from 'react';

import * as styles from './LoginTemplate.scss';

const cx = classNames.bind(styles);

const LoginTemplate: React.SFC<{}> = () => {
  return (
    <div className={cx('hello')}>
      LoginTemplate
    </div>
  )
};

export default LoginTemplate;
