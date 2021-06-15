/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

import '../styles/Fonts.css';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? theme.dark : theme.light}>
      <Component
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        {...pageProps}
      />
    </ThemeProvider>
  );
}

export default MyApp;
