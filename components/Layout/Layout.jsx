import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Head from 'next/head';

import Header from '../Header/Header';
import Global from '../../styles/Global';

const Page = styled.div`
  width: 100vw;
  min-width: 280px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

export default function Layout({ children, darkMode, toggleDarkMode }) {
  const [viewportHeight, setViewportHeight] = useState(0);

  // get live value for viewport height to avoid issues using vh units on mobile
  useEffect(() => {
    setViewportHeight(window.innerHeight * 0.01);
    window.addEventListener('resize', () => {
      setViewportHeight(window.innerHeight * 0.01);
    });
  }, []);

  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <Global />
      <Page style={{
        height: `${viewportHeight * 100}px`,
      }}
      >
        <Header
          viewportHeight={viewportHeight}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <div style={{
          height: `calc(${viewportHeight * 100}px - 6.25rem)`,
        }}
        >
          {children}
        </div>
      </Page>
    </>
  );
}
