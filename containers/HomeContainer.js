import Container from '@material-ui/core/Container';
import TodoContainer from './TodoContainer';

const HomeContainer = () => (
  <Container maxWidth="md">
    <TodoContainer />
  </Container>
);

export default HomeContainer;
