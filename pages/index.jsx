import Head from 'next/head';

import Header from '../components/Header/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tanzeel</title>
        <meta name="description" content="Tanzeel ur Rehman's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header/>
      </main>
    </div>
  );
}
