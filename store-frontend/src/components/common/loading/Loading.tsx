import * as React from 'react';

import './Loading.scss';

const Loading: React.SFC<{}> = () => {
  return (
    <div className="loader-wrap">
      <div className="loader">
        Loading Bar
      </div>
    </div>
  )
};

export default Loading;
