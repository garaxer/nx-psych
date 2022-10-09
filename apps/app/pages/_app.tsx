import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import styled from '@emotion/styled';
import { Auth0Provider } from '@auth0/auth0-react';
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
        <Auth0Provider  domain={
          process.env.AUTH0_ISSUER_BASE_URL ||
          process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL ||
          ""
        }
        clientId={
          process.env.AUTH0_CLIENT_ID ||
          process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID ||
          ""
        }>
          <Component {...pageProps} />
        </Auth0Provider>
      </Main>
    </>
  );
}

export default CustomApp;
