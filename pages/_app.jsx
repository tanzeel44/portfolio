/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';

import '../styles/Fonts.css';
import theme from '../styles/theme';
import Header from '../components/Header/Header';

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const userStorage = window.localStorage;
    if (!userStorage.dark) {
      userStorage.setItem('dark', darkMode);
    } else {
      setDarkMode(JSON.parse(userStorage.dark));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('dark', darkMode);
  }, [darkMode]);

  return (
    <ThemeProvider theme={darkMode ? theme.dark : theme.light}>
      <Component
        darkMode={darkMode}
        toggleDarkMode={setDarkMode}
        {...pageProps}
      />
    </ThemeProvider>
  );
}

export default MyApp;
