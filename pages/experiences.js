import React from 'react';
import styles from '../styles/Experiences.module.css';
import RootLayout from '../components/Layout';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Stack from '@mui/material/Stack';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography';
import CustomizedAccordions from '../components/CustomAccordion/CustomAccordion';
import {experienceItems, experienceImages} from '../shared/data/experiences';

function srcset(image, size, rows=1, cols=1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Experiences() {
  return (
    <RootLayout>
      <Grow in={true}>
        <div className={styles.Experiences}>
          <Typography variant='h5' fontFamily='Roboto Slab' fontWeight={600} textAlign={'center'} mb={'1rem'}>Leadership, Extracurriculars, Honors</Typography>
          <Stack direction={'row'}>
              <div className={styles.experienceImages}>
                <ImageList  variant='quilted' cols={2} rowHeight={225}>
                  {experienceImages.map((experience) => 
                    (<ImageListItem key={experience.img} cols={experience.cols || 1} rows={experience.rows || 1}>
                      <img
                        {...srcset(experience.img, 225, experience.rows, experience.cols)}
                        loading="lazy"
                      />
                    </ImageListItem>)
                  )}
                </ImageList>
              </div>
              <div className={styles.experienceAccordion}>
                  <CustomizedAccordions itemDetails={experienceItems}/>
              </div>
          </Stack>
        </div>
      </Grow>
    </RootLayout>
  )
}
