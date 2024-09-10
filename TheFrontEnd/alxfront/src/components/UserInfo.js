import React from 'react';
import CuteCupcakeIcon from './CuteCupcakeIcon';

const UserInfo = ({ username }) => (
  <div className="user-info">
    <div className="cupcake-icon-wrapper">
      <CuteCupcakeIcon size={64} />
    </div>
    <span className="username">{username}</span>
  </div>
);

export default UserInfo;