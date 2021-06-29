/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import Head from 'next/head';

import '../styles/Fonts.css';
import theme from '../styles/theme';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  // get stored value of dark mode preference from local storage if it exists,
  // initialize to false if not
  useEffect(() => {
    const userStorage = window.localStorage;
    if (!userStorage.dark) {
      userStorage.setItem('dark', darkMode);
    } else {
      setDarkMode(JSON.parse(userStorage.dark));
    }
  }, []);

  // change value of dark mode preference in local storage to match user preference
  useEffect(() => {
    window.localStorage.setItem('dark', darkMode);
  }, [darkMode]);

  return (
    <ThemeProvider theme={darkMode ? theme.dark : theme.light}>
      <Layout darkMode={darkMode} toggleDarkMode={setDarkMode}>
        <Head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css" />
        </Head>
        <Component darkMode={darkMode} {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
