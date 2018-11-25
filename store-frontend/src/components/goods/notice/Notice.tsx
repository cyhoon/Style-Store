import * as React from 'react';
import { Link } from 'react-router-dom';

import './Notice.scss';

const Notice:React.SFC<{}> = () => {
  return (
    <div className="notice-wrap">
      <span className="description">장바구니에 상품이 추가되었습니다</span>
      <button className="notice-button"><Link to="/cart">장바구니 확인하기</Link></button>
    </div>
  )
};

export default Notice;
