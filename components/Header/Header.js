import React from 'react';
import styles from './Header.module.css';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Home from '@mui/icons-material/Home'
import School from '@mui/icons-material/School'
import TravelExplore from '@mui/icons-material/TravelExplore'
import RocketLaunch from '@mui/icons-material/RocketLaunch'
import Icon from '@mui/material/Icon';
import Link from '@mui/material/Link';


const HeaderLink = ({icon, label, link}) => (
  <React.Fragment>
    <Icon size='large' color='inherit' children={icon} />
    <Link className={styles.headerLabel} variant='h6' href={'/WG_Professional'+link} sx={{ mr: 2, ml: 0.5, textDecoration: 'none', color: 'inherit' }}>{label}</Link>
  </React.Fragment>
)

const Header = () => (
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
          <HeaderLink icon={<Home/>} label='Home' link='/'/>
          <HeaderLink icon={<School/>} label='Coursework' link='/coursework'/>
          <HeaderLink icon={<TravelExplore/>} label='Experiences' link='/experiences'/>
          <HeaderLink icon={<RocketLaunch/>} label='Aspirations' link='/aspirations'/>
        </Toolbar>
      </AppBar>
    </Box>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
