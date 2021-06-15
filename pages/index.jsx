import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';
import Global from '../styles/Global';

import Header from '../components/Header/Header';

const Container = styled.div`
  width: 100vw;
  min-width: 280px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

export default function Home({ darkMode, toggleDarkMode }) {
  return (
    <Container>
      <Global />
      <Head>
        <title>Tanzeel</title>
        <meta name="description" content="Tanzeel ur Rehman's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </main>
    </Container>
  );
}
