import Head from 'next/head';
import styled from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';

import Intro from '../components/Home/Intro';

const Container = styled.div`
  width: 100%;    
  height: 100%;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 50% 50%;
  justify-content: center;
  font-family: 'Red Hat Text', sans-serif;

  div.grid-cell:nth-of-type(1) {
    width: 100%;
    height: 100%;
    font-size: 32px;
    font-weight: 700;
  }

  div.grid-cell:nth-of-type(2) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      flex: 1;
      width: auto;
      height: 100%;
    }
  }
  
  @media only screen and (min-width: 901px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;    

    div.grid-cell:nth-of-type(2) > div {
      width: 100%;
      height: auto;
    }
  }

`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Tanzeel</title>
        <meta name="description" content="Tanzeel ur Rehman's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid-cell">
        <Intro />
      </div>
      <div className="grid-cell">
        <Player
          autoplay
          loop
          src="/lottie/working.json"
        />
      </div>
    </Container>
  );
}
