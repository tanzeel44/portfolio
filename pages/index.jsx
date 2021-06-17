import Head from 'next/head';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;    
  height: 100%;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  display: grid;
  grid-template-columns: 100%;

  div:nth-of-type(1) {
    width: 100%;
    background-color: #babaff;
  }

  div:nth-of-type(2) {
    background-color: #100772;
  }
  
  @media only screen and (min-width: 902px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;    
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
      <div />
      <div />
    </Container>
  );
}
