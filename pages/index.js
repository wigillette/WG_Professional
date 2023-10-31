import React from 'react';
import styles from '../styles/Main.module.css';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import Biography from '../text/bio.js';
import RootLayout from '../components/Layout';
const headshot = 'https://media.licdn.com/dms/image/D4D03AQF_Sbojz5642w/profile-displayphoto-shrink_400_400/0/1697126489786?e=1704326400&v=beta&t=aN6qvPthhSKZv7eOZw1ODxUyF2Maj5eUU515xY0UZ9E';
import Zoom from '@mui/material/Zoom';
import Fade from '@mui/material/Fade';

export default function Main() {
  const containerRef = React.useRef(null);
  return (
    <RootLayout>
      <div className={styles.Home} ref={containerRef}>
        <Zoom in={true}>
          <Avatar
            alt='William Gillette'
            className={styles.headshot}
            src={headshot}
            sx={{ width: 250, height: 250, margin: '0 auto', marginBottom: '3vh' }}
          />
        </Zoom>
        <Fade in={true}>
          <div>
            <Typography className={styles.HomeHeader} sx={{fontFamily: 'Roboto Slab', margin: '0 auto', marginBottom: '3vh', textAlign:'center', fontSize: '2.5vh'}}>Triple Major in Mathematics, Computer Science, and Statistics, Student Athlete, Academic Chair of Phi Kappa Sigma, Lead Tutor in Math/CS/Statistics</Typography>
            <Divider sx={{margin: '0 auto', marginBottom: '3vh'}} />
            <Typography paragraph sx={{fontFamily: 'Open Sans'}}>{Biography}</Typography>
          </div>
        </Fade>
      </div>
    </RootLayout>
  );
}