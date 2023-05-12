import { createContext, useEffect, useState } from 'react';
import { service } from '../../logic/core';
import User from '../../logic/core/user/user';

interface IAuthentication {
  loading: boolean;
  user: User | null;
  loginGoogle: () => Promise<User | null>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<IAuthentication>({
  loading: true,
  user: null,
  loginGoogle: async () => null,
  logout: async () => {},
});

interface ProviderProps {
  children: React.ReactNode;
}

export function AuthProvider(props: ProviderProps) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const cancel = service.authService.toMonitor(function (user) {
      setUser(user);
      setLoading(false);
    });
    return () => cancel();
  }, []);

  const loginGoogle = async (): Promise<User | null> => {
    const response = await service.authService.loginGoogle();
    setUser(response);
    return response;
  };

  const logout = async (): Promise<void> => {
    await service.authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        loginGoogle,
        logout,
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
