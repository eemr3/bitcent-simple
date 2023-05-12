import { useContext } from 'react';
import Landing from '../components/landing';
import { AuthContext } from '../data/context/AuthContext';
import Finace from '../components/finance';
import Loading from '../components/template/Loading';

export default function Home() {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <Loading />;

  return user ? <Finace /> : <Landing />;
}
