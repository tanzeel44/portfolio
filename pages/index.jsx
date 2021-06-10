import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import Global from '../styles/Global';
import theme from '../styles/theme';

import Header from '../components/Header/Header';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <div>
          <Global />
          <Head>
            <title>Tanzeel</title>
            <meta name="description" content="Tanzeel ur Rehman's Portfolio" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <Header />
          </main>
        </div>
      </>
    </ThemeProvider>
  );
}
