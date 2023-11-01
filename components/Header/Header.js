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
import CustomLink from '../CustomLink/CustomLink';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';

const HeaderLink = ({icon, label, link}) => (
  <CustomLink mr={2} href={link}>
    <Typography variant='h6' className={styles.headerLinkLabel} sx={{fontFamily: 'Roboto Slab'}}><Icon size='large' color='inherit' children={icon}></Icon>{' '+label}</Typography>
  </CustomLink>
)

const Header = () => {
  const [state, setState] = React.useState({panelOpen: false})
  const icons = [<Home/>, <School/>, <TravelExplore/>, <RocketLaunch/>]
  const togglePanel = (isOpen) => (event) => {
    if (event.type !== 'keydown' || (event.key !== 'Tab' && event.key !== 'Shift')) {
      setState({ ...state, panelOpen: isOpen });
    }
  };

  return (
    <React.Fragment>
      
      <Box sx={{ flexGrow: 1, marginBottom: '3vh' }}>
        <AppBar position="static" color="error">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              className={styles.mobileMenu}
              aria-label="menu"
              onClick={togglePanel(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            
            <Typography className={styles.headerLabel} variant="h6" component="div" sx={{ flexGrow: 1 }}>William Gillette</Typography>
            <HeaderLink icon={<Home/>} label='Home' link='/'/>
            <HeaderLink icon={<School/>} label='Coursework' link='/coursework'/>
            <HeaderLink icon={<TravelExplore/>} label='Experiences' link='/experiences'/>
            <HeaderLink icon={<RocketLaunch/>} label='Aspirations' link='/aspirations'/>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={state.panelOpen} onClose={togglePanel(false)} >
        <Box
          onClick={togglePanel(false)}
          onKeyDown={togglePanel(false)}
          sx={{margin: 2}}
        >
          <Typography variant={'h3'} fontFamily={'Roboto Slab'} margin={'0 auto'} fontSize={'100%'} width={'100%'}>William C. Gillette</Typography>

          <List>
            {['Home', 'Coursework', 'Experiences', 'Aspirations'].map((text, i) => (
            <ListItem key={text} disablePadding>
              <ListItemButton href={i==0 ? '/' : `/${text.toLowerCase()}`}>
                <ListItemIcon>
                  {icons[i]}
                </ListItemIcon>
                <ListItemText primary={text} className={styles.panelText} />
              </ListItemButton>
            </ListItem>
            ))}
            <Divider sx={{mt: 2, mb: 2}} />
          </List>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
