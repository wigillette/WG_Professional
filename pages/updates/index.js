import React from 'react';
import styles from '../../styles/Coursework.module.css';
import RootLayout from '../../components/Layout';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Fade from '@mui/material/Fade';

export default function Updates() {
  return (
    <RootLayout>
        <Fade in={true}>
            <div className={styles.Updates}>
                <Typography variant="h4" textAlign='center' mb='1rem' fontFamily='Roboto Slab' fontWeight={600}>Recent Updates</Typography>
                <Divider sx={{width: '50%', margin: '0 auto'}}/>
            </div>
        </Fade>
    </RootLayout>
  )
}
