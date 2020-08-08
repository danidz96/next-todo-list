import Container from '@material-ui/core/Container';
import TodoContainer from './TodoContainer';
import { useAuth } from '../hooks/useAuth';

const HomeContainer = () => {
  const [user, loading] = useAuth();

  return (
    <Container maxWidth="md">
      {loading ? <>dasdasd</> : <TodoContainer />}
    </Container>
  );
};

export default HomeContainer;
