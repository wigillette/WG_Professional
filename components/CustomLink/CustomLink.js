import React from 'react';
import styles from './CustomLink.module.css';
import { Link } from '@mui/material';

const CustomLink = ({children, href, mr, color, variant, sx}) => (
  <Link className={styles.CustomLink} variant={variant||'h6'} href={href} sx={{ mr: mr||0, textDecoration: 'none', color: color || 'inherit', ...sx }}>
    {children}
  </Link>
);

CustomLink.propTypes = {};

CustomLink.defaultProps = {};

export default CustomLink;
