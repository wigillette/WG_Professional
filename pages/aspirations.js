import React from 'react';
import styles from '../styles/Aspirations.module.css';
import RootLayout from '../components/Layout';
import { Parallax } from 'react-parallax';

export default function Aspirations() {
  return (
  <RootLayout>
    <div className={styles.Aspirations}>
      <Parallax blur={{ min: -15, max: 15 }} bgImage='https://i.ibb.co/840fVvg/phikaps.jpg' strength={200} className={styles.parallax}/>
      <Parallax blur={{ min: -15, max: 15 }} bgImage='https://i.ibb.co/840fVvg/phikaps.jpg' strength={200} className={styles.parallax}/>
      <Parallax blur={{ min: -15, max: 15 }} bgImage='https://i.ibb.co/840fVvg/phikaps.jpg' strength={200} className={styles.parallax}/>
    </div>
  </RootLayout>
  )
}