import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import Head from 'next/head';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';

const RootLayout = ({ children }) => {
  return (
    <>
        <Head>
        <title>William Gillette Biography</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <CssBaseline/>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
  );
};

export default RootLayout;