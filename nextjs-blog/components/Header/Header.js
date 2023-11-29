import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'

const Header = () => (
  // <React.Fragment>
    <Box sx={{ flexGrow: 1, marginBottom: '3vh' }}>
      <AppBar position="static" color="error">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={styles.headerLabel} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            William Gillette
          </Typography>
          <Button variant="contained" color="primary" sx={{fontFamily: 'Open Sans'}}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>);
    {/* <Toolbar /> */}
  // </React.Fragment>

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
