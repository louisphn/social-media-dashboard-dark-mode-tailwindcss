import Head from 'next/head';
import Header from '../components/common/Header';
import CardContainer from '../components/common/CardContainer';

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative pointer-events-none	py-24 w-screen flex flex-col items-center">
        <CardContainer kind={'profile'} />
        <h2 className="w-11/12 my-2 text-3xl text-text-light dark:text-text-dark font-bold">
          Overview - Today
        </h2>
        <CardContainer kind={'overview'} />
      </main>
    </>
  );
};

export default Home;
