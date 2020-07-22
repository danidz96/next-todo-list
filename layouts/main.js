import Header from './header';
import Page from './page';

const MainLayout = ({ children }) => (
  <>
    <div>
      <Header />
      <Page>{children}</Page>
    </div>
  </>
);

export default MainLayout;
