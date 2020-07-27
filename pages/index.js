import UserNotLogged from '../components/UserNotLogged';
import { useAuth } from '../hooks/useAuth';
import HomeContainer from '../containers/HomeContainer';

const Home = () => {
  const [user] = useAuth();
  return <>{user ? <HomeContainer /> : <UserNotLogged />}</>;
};

export default Home;
