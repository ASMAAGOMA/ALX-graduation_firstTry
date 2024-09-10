import React from 'react';
import CuteCupcakeIcon from './CuteCupcakeIcon';

const UserInfo = ({ username }) => (
  <div className="user-info">
    <CuteCupcakeIcon size={32} />
    <span className="username">{username}</span>
  </div>
);

export default UserInfo;