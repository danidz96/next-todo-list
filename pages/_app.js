import Head from 'next/head';
import { AuthProvider } from '../contexts/Auth';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  </>
);

export default App;
