import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';
import { Grid, Link, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footer}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <Link href="https://www.facebook.com/william.gillette.3152" target="_blank" rel="noopener noreferrer">
              <FacebookIcon className={styles.icon} /> 
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://www.linkedin.com/williamcgillette" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className={styles.icon} />
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://www.github.com/wigillette" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className={styles.icon} />
            </Link>
          </Grid>
        </Grid>
        <Typography className={styles.crLabel} variant="body2" align="center">
          © {new Date().getFullYear()} William Gillette
        </Typography>
      </footer>
    </div>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
