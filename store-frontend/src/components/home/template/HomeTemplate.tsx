import * as classNames from 'classnames/bind';
import * as React from 'react';

import Header from 'src/components/common/header';
import * as styles from './HomeTemplate.scss';

const cx = classNames.bind(styles);

const HomeTemplate: React.SFC<{}> = () => {
  return (
    <div className={cx('home-template')}>
      <Header />
      <div className={cx('main-wrap')}>
        main wrap
      </div>
    </div>
  );
};

export default HomeTemplate;
