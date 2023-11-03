import React from 'react';
import styles from '../styles/Aspirations.module.css';
import RootLayout from '../components/Layout';
import { Parallax } from 'react-parallax';
import Typography from '@mui/material/Typography';
import Track1 from '../text/Track1.jpg';
import City from '../text/City.JPEG';
import PhiKaps6 from '../text/PhiKaps6.JPG';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';

const ParallaxContainer = ({img, body}) => (
  <div className={styles.parallaxContainer}>
    <Parallax blur={{ min: -30, max: 30 }} bgImage={img} strength={300} className={styles.parallax}/>
    <Paper elevation={3} sx={{width: '75%', margin: '0 auto', padding: '1rem'}}>
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
        <ParallaxContainer img={City.src} body='Through networking and collaboration, I wish to apply my knowledge of software development and data analytics to impact society profoundly, developing tools that benefit the lives of others and contribute to positive outcomes. Facilitating daily tasks through automation to help society become more efficient is a key motivation of mine.'></ParallaxContainer>
        <ParallaxContainer img={Track1.src} body='As an avid runner, I desire to progress my career beyond college, proceeding to race the marathon or perhaps the ultramarathon distances. Maintaining a fit and healthy body not only promotes discipline but is one of my primary core values, and I seek to adhere to that virtue as I progress through adulthood.'></ParallaxContainer>
        <ParallaxContainer img={PhiKaps6.src} body='Finally, from the lens of an Ursinus alumni, I wish to give back to the communities that were significant pieces of my collegiate career. Through philanthropy and networking, I wish to remain in contact with future brothers of Phi Kappa Sigma, providing my knowledge and resources to contribute to maintaining a strong and active brotherhood.'></ParallaxContainer>
      </div>
    </Fade>
  </RootLayout>
  )
}