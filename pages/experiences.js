import React from 'react';
import styles from '../styles/Experiences.module.css';
import RootLayout from '../components/Layout';
import { ImageList, ImageListItem, Fade } from '@mui/material';
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
      <Fade in={true}>
        <div className={styles.Experiences}>
          <ImageList className={styles.experienceImages} variant='quilted' cols={2} rowHeight={100}>
            {experienceImages.map((experience) => 
              (<ImageListItem key={experience.img} cols={experience.cols || 1} rows={experience.rows || 1}>
                <img
                  {...srcset(experience.img, 100, experience.rows, experience.cols)}
                  loading="lazy"
                />
              </ImageListItem>)
            )}
          </ImageList>
          <CustomizedAccordions itemDetails={experienceItems} width={'50%'}/>
        </div>
      </Fade>
    </RootLayout>
  )
}
