import styles from "../styles/Layout.module.css"
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
        <link rel="icon" href="../public/favicon.ico" />
        </Head>
        <CssBaseline/>
        <Header />
        <main className={styles.container}>{children}</main>
        <Footer />
    </>
  );
};

export default RootLayout;