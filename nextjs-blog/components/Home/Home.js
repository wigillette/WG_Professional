import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import Biography from '../../text/bio.js';

const Home = () => (
  <div className={styles.Home}>
    <Avatar
      alt='William Gillette'
      src='https://avatars.githubusercontent.com/u/71407898?v=4'
      sx={{ width: 250, height: 250, margin: '0 auto', marginBottom: '3vh' }}
    />
    <Typography className={styles.HomeHeader} sx={{fontFamily: 'Roboto Slab', margin: '0 auto', marginBottom: '3vh', textAlign:'center', fontSize: '2.5vh'}}>Triple Major in Mathematics, Computer Science, and Statistics, Student Athlete, Academic Chair of Phi Kappa Sigma, Lead Tutor in Math/CS/Statistics</Typography>
    <Divider sx={{margin: '0 auto', marginBottom: '3vh'}} />
    <Typography sx={{fontFamily: 'Open Sans'}}>{Biography}</Typography>

  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
