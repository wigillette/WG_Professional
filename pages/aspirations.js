import React from 'react';
import styles from '../styles/Aspirations.module.css';
import RootLayout from '../components/Layout';
import { Parallax } from 'react-parallax';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import aspirationsData from '../shared/data/aspirations';

const ParallaxContainer = ({img, body}) => (
  <div className={styles.parallaxContainer}>
    <Parallax blur={{ min: -20, max: 20 }} bgImage={img} strength={200} className={styles.parallax}>
      <div/>
    </Parallax>
    <Paper className={styles.biography} elevation={3} sx={{margin: '0 auto', padding: '1rem'}}>
      <Typography variant='paragraph' fontFamily='Open Sans'>{body}</Typography>
    </Paper>
  </div>
)

export default function Aspirations() {
  return (
  <RootLayout>
    <Fade in={true}>
      <div className={styles.Aspirations}>
        <Typography variant='h4' fontFamily='Roboto Slab' mb={'1rem'} textAlign='center' fontWeight={600}>Aspirations and Life Goals</Typography>
        {aspirationsData.map((entry, i) => <ParallaxContainer key={i} img={entry.img} body={entry.body}></ParallaxContainer>)}
      </div>
    </Fade>
  </RootLayout>
  )
}