import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image';
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
  font-family: ${(props) => props.theme.fonts.main};

  div.grid-cell:nth-of-type(1) {
    width: 100%;
    height: 100%;
  }

  div.grid-cell:nth-of-type(2) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    overflow: hidden;
    div { 
      width: 100%;
    }

  }
  
  @media only screen and (min-width: 901px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;    

    div.grid-cell:nth-of-type(2) > div {
      padding-top: 60px;
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
        <Image src="/axe.svg" height="2000" width="3000" objectFit="responsive" />
      </div>
    </Container>
  );
}
