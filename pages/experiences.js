import React from 'react';
import styles from '../styles/Experiences.module.css';
import RootLayout from '../components/Layout';
import { ImageList, ImageListItem, Fade, Stack, Grow, Typography } from '@mui/material';
import experienceImages from '../text/experienceImages';
import CustomizedAccordions from '../components/CustomAccordion/CustomAccordion';
import experienceItems from '../text/experienceItems';

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
          <Typography variant='h4' fontFamily='Roboto Slab' fontWeight={600} textAlign={'center'} mb={'1rem'}>Leadership Positions, Awards & Honors, Extracurriculars</Typography>
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
