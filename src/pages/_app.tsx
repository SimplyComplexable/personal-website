import React from 'react';
import '@styles/main.css';
import '@styles/typography.css';
import Layout from '@components/Layout';

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
