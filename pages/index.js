import Head from 'next/head';
import styles from '../styles/Home.module.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';
import { Avatar } from '@mui/material';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Avatar
        alt="William Gillette"
        src='nextjs-blog/images/WillLinkedInB.jpg'
        sx={{ width: 250, height: 250, margin: '0 auto' }}
      />
      <Footer />
    </div>
  );
}
