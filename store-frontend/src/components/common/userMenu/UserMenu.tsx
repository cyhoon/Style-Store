import * as React from 'react';

import './UserMenu.scss';

interface Props {
  handleLogOut(): void;
}

const UserMenu: React.SFC<Props> = ({ handleLogOut }) => {
  return (
    <div className="userMenu">
      <ul className="list">
        <li>내 프로필</li>
        <li onClick={handleLogOut}>로그아웃</li>
      </ul>
    </div>
  );
};

export default UserMenu;
