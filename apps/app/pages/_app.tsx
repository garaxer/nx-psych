import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import styled from '@emotion/styled';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;


function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Craig&apos;s Counselling</title>
      </Head>
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  );
}

export default CustomApp;
