import React from 'react';
import Welcome from './Welcome';
import UserInfo from './UserInfo';

export default function Header() {
  return (
    <div className="flex justify-between items-center p-7 border-b border-zinc-900">
      <Welcome />
      <UserInfo />
    </div>
  );
}
