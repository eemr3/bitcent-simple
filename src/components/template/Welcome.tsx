import { useContext } from 'react';
import { fakeUser } from '../../data/constants/fakeUser';
import { AuthContext } from '../../data/context/AuthContext';

export default function Welcome() {
  const { user } = useContext(AuthContext);
  return (
    <div className="text-3xl font-black">
      Olá <span className="hidden sm:inline">{user?.name?.split(' ')[0]}</span> 👋
    </div>
  );
}
