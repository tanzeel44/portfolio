import Head from 'next/head';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Tanzeel</title>
        <meta name="description" content="Tanzeel ur Rehman's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main />
    </Container>
  );
}
