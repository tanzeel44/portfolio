import styled from 'styled-components';
import { useState, useEffect } from 'react';

import Header from '../Header/Header';

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
    window.addEventListener('resize', () => {
      setViewportHeight(window.innerHeight * 0.01);
    });
  }, []);

  return (
    <Page style={{
      height: 100 * viewportHeight,
    }}
    >
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {children}
    </Page>
  );
}
