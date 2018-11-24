import * as classNames from 'classnames/bind';
import * as React from 'react';

import HeaderContainer from 'src/container/HeaderContainer';
import * as styles from './HomeTemplate.scss';

const cx = classNames.bind(styles);

const HomeTemplate: React.SFC<{}> = () => {
  return (
    <div className={cx('home-template')}>
      <HeaderContainer />
      <div className={cx('main-wrap')}>
        main wrap
      </div>
    </div>
  );
};

export default HomeTemplate;
