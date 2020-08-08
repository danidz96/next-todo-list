import { CircularProgress } from '@material-ui/core';
import UserNotLogged from '../components/UserNotLogged';
import { useAuth } from '../hooks/useAuth';
import HomeContainer from '../containers/HomeContainer';

const ApplicationLoader = () => (
  <div className="loading-container">
    <h2>Loading Application...</h2>
    <CircularProgress size={68} />
    <style jsx>
      {`
        .loading-container {
          width: 100%;
          height: 70vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}
    </style>
  </div>
);

const Home = () => {
  const [user, loading] = useAuth();
  return (
    <>
      {loading ? (
        <ApplicationLoader />
      ) : user ? (
        <HomeContainer />
      ) : (
        <UserNotLogged />
      )}
    </>
  );
};

export default Home;
