import { useContext } from 'react';
import { AuthContext } from '../../data/context/AuthContext';

export default function UserInfo() {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="flex items-center gap-3 cursor-pointer" onClick={logout}>
      <div className="flex flex-col select-none text-right">
        <span className="text-sm font-bold text-zinc-200">{user?.name}</span>
        <span className="text-xs text-zinc-400">{user?.email}</span>
      </div>
    </div>
  );
}
