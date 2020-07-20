import PropTypes from 'prop-types';
import SignIn from '../components/SignIn';

const Home = ({ user }) => (
  <div>
    Hello world!
    {console.log(user)}
    <SignIn />
  </div>
);

Home.propTypes = {
  user: PropTypes.object,
};

export default Home;
