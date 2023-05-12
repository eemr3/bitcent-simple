import { IconBrandGoogle } from '@tabler/icons-react';
import MenuItem from './MenuItem';
import { useContext } from 'react';
import { AuthContext } from '../../../data/context/AuthContext';

export default function Menu() {
  const { loginGoogle } = useContext(AuthContext);

  return (
    <div>
      <MenuItem
        onClick={loginGoogle}
        className="bg-gradient-to-r from-indigo-600 to-cyan-600"
      >
        <div className="flex items-center gap-2">
          <IconBrandGoogle size={15} />
          <span>Login</span>
        </div>
      </MenuItem>
    </div>
  );
}
