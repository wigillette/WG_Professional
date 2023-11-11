import React from 'react';
import Typography from '@mui/material/Typography';
import RootLayout from '../components/Layout';

const Custom404 = () => {
  return (
    <RootLayout>
        <div>
            <Typography variant='h3' textAlign='center' fontFamily='Roboto Slab' fontWeight={600} mb='2rem'>Page Not Found</Typography>
            <Typography variant='body1' textAlign='center' fontFamily='Open Sans' fontSize='2rem'>The current URL is not a valid route. Please navigate back to the home page.</Typography>
        </div>
    </RootLayout>
  );
};

export default Custom404;
