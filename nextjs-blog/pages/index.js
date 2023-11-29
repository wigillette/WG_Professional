import Head from 'next/head';
import styles from '../styles/Main.module.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';
import Home from "../components/Home/Home.js";
import Honors from "../components/Honors/Honors.js";
import Interests from "../components/Interests/Interests.js";
import Coursework from "../components/Coursework/Coursework.js";
import CssBaseline from '@mui/material/CssBaseline';
import { Router, Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

export default function Main() {
  return (
    <div className={styles.container}>
      <CssBaseline />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Router>
        {/* React Router */}
        <Link component={<RouterLink to={'/home'}/>}>Home</Link>
        <Link component={<RouterLink to={'/coursework'}/>}>Course Work</Link>
        <Link component={<RouterLink to={'/honors'}/>}>Honors</Link>
        <Link component={<RouterLink to={'/interests'}/>}>Interests</Link>
      </Router>
      <Home />
      <Footer />
    </div>
  );
}
