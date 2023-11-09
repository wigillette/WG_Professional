import React from 'react';
import styles from '../styles/Main.module.css';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Zoom from '@mui/material/Zoom';
import Fade from '@mui/material/Fade';
import Biography from '../shared/data/bio.js';
import RootLayout from '../components/Layout';
import Snackbar from '@mui/material/Snackbar';
const headshot = 'https://media.licdn.com/dms/image/D4D03AQF_Sbojz5642w/profile-displayphoto-shrink_400_400/0/1697126489786?e=1704326400&v=beta&t=aN6qvPthhSKZv7eOZw1ODxUyF2Maj5eUU515xY0UZ9E';
import generalSkills from '../shared/data/generalSkills'
import { Facebook, LinkedIn, GitHub, Send, Download } from '@mui/icons-material';
import Resume from "../shared/documents/WG_Resume.pdf";

export default function Main() {
  const containerRef = React.useRef(null);
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [feedback, setFeedback] = React.useState('');

  return (
    <RootLayout>
      <div className={styles.Home}>
        <Zoom in={true}>
          <Avatar
            alt='William Gillette'
            className={styles.headshot}
            src={headshot}
            sx={{ width: 250, height: 250, margin: '0 auto', marginBottom: '3vh' }}
          />
        </Zoom>
        <Fade in={true}>
          <div>
            <div className={styles.resumeContainer}>
              <a href={Resume} download className={styles.link}>
                <Button variant='contained' sx={{mt: '0.5rem', mb: '1rem'}}><Download/> Curriculum Vitae</Button>
              </a>
            </div>
            <div className={styles.socialMedia}>
              <Typography variant='h6' fontWeight={600} textAlign={'center'} fontFamily={'Open Sans'} mb={'0.5rem'}>wgillette02@gmail.com</Typography>
              <Stack direction={'row'} justifyContent='center'>
                <IconButton className={styles.icon} color="primary" href="https://www.facebook.com/william.gillette.3152" target="_blank" rel="noopener noreferrer">
                  <Facebook/> 
                </IconButton>
                <IconButton className={styles.icon} color="primary" href="https://www.linkedin.com/in/williamcgillette" target="_blank" rel="noopener noreferrer">
                  <LinkedIn/>
                </IconButton>
                <IconButton className={styles.icon} color="primary" href="https://www.github.com/wigillette" target="_blank" rel="noopener noreferrer">
                  <GitHub/>
                </IconButton>
              </Stack>
            </div>
            <div className={styles.generalSkills}>
              <Stack direction={'row'}  justifyContent='center' margin='0 auto' sx={{flexWrap: 'wrap'}}>
                {generalSkills.map((skill) => <Chip key={skill} className={styles.skillChip} variant='outlined' label={skill} sx={{fontFamily: 'Open Sans', margin: 0.5, fontWeight: 500}} />)}
              </Stack>
            </div>
            
            <Divider sx={{margin: '0 auto', marginBottom: '1rem'}}>
              <Typography className={styles.HomeHeader} fontFamily='Roboto Slab' fontSize='2rem' fontWeight={600}>About Me</Typography>
            </Divider>
            <Typography paragraph sx={{fontFamily: 'Open Sans'}}>{Biography}</Typography>
            <Divider sx={{margin: '0 auto', marginBottom: '1rem'}}>
              <Typography className={styles.HomeHeader} fontFamily='Roboto Slab' fontSize='2rem' fontWeight={600}>Contact Me</Typography>
            </Divider>
            <Box component="form" noValidate autoComplete="off">
              <div className={styles.formComponents}>
                <TextField fullWidth required label="Email Address" placeholder="johndoe@example.com" onChange={(e) => setEmail(e.target.value)} sx={{mb: '1rem'}}/>
                <TextField fullWidth required label="Message" placeholder="Enter your message!" onChange={(e) => setMessage(e.target.value)} multiline rows={6} sx={{mb: '1rem'}}/>
                <Button variant="contained" endIcon={<Send/>} onClick={() => {
                  const options = {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({email: email, message: message})
                  }
                  const req = fetch('/api/sendMessage', options);
                  req.then(res => res.json()).then((body) => { console.log(body); setFeedback(body.response)})
                }}>Send</Button>
              </div>
              <Snackbar
                open={feedback != ''}
                autoHideDuration={4000}
                message={feedback}
                onClose={(e)=> setFeedback('')}
              />
            </Box>
          </div>
        </Fade>
      </div>
    </RootLayout>
  );
}