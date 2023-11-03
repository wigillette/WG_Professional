import React from 'react';
import styles from '../styles/Aspirations.module.css';
import RootLayout from '../components/Layout';
import { Parallax } from 'react-parallax';
import Typography from '@mui/material/Typography';
import Track1 from '../text/Track1.jpg'


export default function Aspirations() {
  return (
  <RootLayout>
    <div className={styles.Aspirations}>
      <div className={styles.marathonAspiration}>
        <Parallax blur={{ min: -15, max: 15 }} bgImage={Track1.src} strength={200} className={styles.parallax}/>
        <Typography variant='paragraph' fontFamily='Open Sans'>I want to run marathons blah blah blah</Typography>
      </div>
    </div>
  </RootLayout>
  )
}