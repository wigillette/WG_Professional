import React from 'react';
import { styled } from '@mui/material/styles';
import styles from '../../../styles/TechnicalProject.module.css'
import RootLayout from '../../../components/Layout';
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CheckCircle from '@mui/icons-material/CheckCircle';
import RunCircle from '@mui/icons-material/RunCircle';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ContentCopy from '@mui/icons-material/ContentCopy';
import allWords from '../../../shared/data/technical-words'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

// Custom Alert
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// Custom Progress Label
const LinearProgressWithLabel = ({value, label}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: '1rem' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <BorderLinearProgress variant="determinate" value={value} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body1" fontWeight={600} color="text.secondary" fontFamily='Open Sans'>{label}</Typography>
      </Box>
    </Box>
  );
}

export default function TechnicalProject() {
  const GAME_TIME = 180; // seconds per game
  const POINTS_PER_CHARACTER = 60; // points per word
  const [gameWords, setGameWords] = React.useState(allWords);
  const [groundWord, setGroundWord] = React.useState('');
  const [encryptedMessage, setEncryptedMessage] = React.useState('');
  const [points, setPoints] = React.useState(0);
  const [feedback, setFeedback] = React.useState(0);
  const [wordsDecoded, setWordsDecoded] = React.useState([]);
  const [gameState, setGameState] = React.useState(0);
  const [guess, setGuess] = React.useState('');
  const [widgetShift, setWidgetShift] = React.useState(0);
  const [widgetInput, setWidgetInput] = React.useState('');
  const [timer, setTimer] = React.useState(GAME_TIME);
  const [isTimerRunning, setIsTimerRunning] = React.useState(false);


  const encrypt = (word, shiftValue) => {
    return word.split('').map((char) => {
      let toReturn = char;
      if (/[a-zA-Z]/.test(char)) {
        const isUpperCase = char === char.toUpperCase();
        const baseCharCode = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        toReturn = String.fromCharCode(((char.charCodeAt(0) - baseCharCode + shiftValue) % 26) + baseCharCode);
      }
      return toReturn;
    }).join('');
  }

  const initLevel = () => {
    if (wordsDecoded.length < gameWords.length) {
      let randomWord = gameWords[Math.floor(Math.random()*gameWords.length)];
      while (randomWord == encryptedMessage || wordsDecoded.includes(randomWord)) {
        randomWord = gameWords[Math.floor(Math.random()*gameWords.length)];
      }
      setGroundWord(randomWord);
      const randomShift = Math.floor(Math.random()*24)+1;
      const encryptedWord = encrypt(randomWord, randomShift);
      setEncryptedMessage(encryptedWord);
    } else {
      setGameState(3); // 3=win, 2=in progress, 1=game over, 0 = not started
    }
  }

  const copy = async (word) => {
    await navigator.clipboard.writeText(word);
  }

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  React.useEffect(() => {
    if (!isTimerRunning || timer <= 0 || gameState != 2) {
      return;
    }
    
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer-1);
    }, 1000);

    return () => {
      clearInterval(interval);
      if (timer <= 1) {
        if (gameState == 2) {
          setGameState(1); // Game over due to timer running out
        }
        setIsTimerRunning(false);
      }
    };
  }, [isTimerRunning, timer]);

  React.useEffect(() => {
    if (wordsDecoded.length > 0) {
      initLevel();
    }
  }, [wordsDecoded])

  const verifyDecryption = () => {
    let isAccurate = guess === groundWord;
    if (isAccurate) {
      setFeedback(2) // 2 = correct, 1 = incorrect
      setWordsDecoded([...wordsDecoded, groundWord]);
      setPoints(points + POINTS_PER_CHARACTER*encryptedMessage.length);
    } else {
      setFeedback(1);
    }
  }

  const initGame = () => {
    const wordsSubset = [];
    for (let i=0; i<10; i++) {
      wordsSubset.push(allWords[Math.floor(Math.random()*allWords.length)]);
    }
    setGameWords(wordsSubset);
    initLevel();
    setGameState(2);
    setIsTimerRunning(true);
  }

  const resetGame = () => {
    setTimer(GAME_TIME)
    setPoints(0);
    setFeedback(0);
    setGameWords(allWords);
    setWordsDecoded([]);
    setGuess('');
    setGroundWord('');
    setEncryptedMessage('');
    setWidgetInput('');
    setWidgetShift(0);
    setGameState(0);
  }

  const CopyButton = ({margin, word}) => (
    <span style={{marginLeft: margin}}>
      <IconButton size='small' color='primary' onClick={() => copy(word)}><ContentCopy/></IconButton>
    </span>
  )

  return (
    <RootLayout>
        <main className={styles.main}>
          <Typography variant='h3' textAlign='center' gutterBottom fontWeight={500} fontSize={'2rem'} fontFamily={'Roboto Slab'}>Caesar Cipher Decryption Race!</Typography>
          <Divider variant='middle' sx={{mb: '1rem'}}/>
          {gameState == 0 ? <Button variant='contained' size='lg' fullWidth endIcon={<RunCircle/>} onClick={initGame} disabled={gameState != 0} sx={{fontSize: '1.25rem'}}>BEGIN</Button> :
            (<Fade in={true}>
            <div className={styles.gameInfo}>
              <LinearProgressWithLabel value={100*(wordsDecoded.length/gameWords.length)} label={`${wordsDecoded.length}/${gameWords.length}`} />
              <Paper elevation={2} sx={{margin: '1rem auto', padding: '1rem'}}>
                <Typography variant='h5' fontFamily='Open Sans' fontWeight='bold' fontSize='1rem' display={'inline-block'} width={'50%'} textAlign='left'><span style={{fontFamily: 'Roboto Slab', fontWeight: '500'}}>Total Points: </span>{points}</Typography>
                <Typography variant='h5' fontFamily='Open Sans' fontWeight='bold' fontSize='1rem' display={'inline-block'} width={'50%'} textAlign='right'><span style={{fontFamily: 'Roboto Slab', fontWeight: '500'}}>Timer: </span>{formatTime(timer)}</Typography>
              </Paper>
              <Snackbar open={feedback != 0} onClose={(e) => setFeedback(0)} autoHideDuration={3000}>
                <Alert severity={feedback == 2 ? 'success' : 'error'}>{feedback == 2 ? 'You have successfully guessed the word!' : 'Try again! That result is incorrect.'}</Alert>
              </Snackbar>
              <Card sx={{margin: '2rem auto'}} elevation={2}>
                <CardHeader title={<Typography variant='h6' fontFamily='Open Sans' fontWeight='600' gutterBottom><span style={{fontFamily: 'Roboto Slab', fontWeight: '500'}}>Encrypted Message: </span>{encryptedMessage}
                  <CopyButton margin={'0.5rem'} word={encryptedMessage}/></Typography>} 
                  subheader={<Typography fontFamily='Open Sans'>Use the Caesar Cipher method to decode the encrypted message!</Typography>}/>
                <CardContent>
                    <TextField variant='outlined' fullWidth label={<Typography fontFamily='Open Sans'>Enter the resulting decrypted message here!</Typography>} onChange={(e) => setGuess(e.target.value)} onKeyDown={
                      (e) => {
                        const keyCode = e.key;
                        if (keyCode === 'Enter') {
                          verifyDecryption();
                        }
                    }
                    } sx={{fontFamily: 'Open Sans'}}/>
                </CardContent>
                <CardActions>
                    <Button variant='contained' startIcon={<CheckCircle/>} onClick={verifyDecryption} sx={{fontFamily: 'Open Sans', fontWeight: '600'}}>VERIFY</Button>
                </CardActions>
              </Card>
              <Paper elevation={2} sx={{margin: '1rem auto', padding: '1rem'}}>
                <Typography fontFamily='Roboto Slab' textAlign='center' fontSize='1.2rem' fontWeight='500' gutterBottom>Caesar Shift Widget</Typography>
                <Slider defaultValue={0} min={0} max={25} marks step={1} valueLabelDisplay='auto' onChange={(e) => setWidgetShift(e.target.value)} sx={{mb: '1rem'}} />
                <Stack direction='row' justifyContent='space-evenly'>
                  <TextField variant='filled' label='Character Input' onChange={(e) => setWidgetInput(e.target.value)} sx={{fontFamily: 'Open Sans'}}/>
                  <div>
                    <TextField variant='filled' label='Post-Shift Output' InputProps={{readOnly: true}} value={encrypt(widgetInput, widgetShift)} sx={{fontFamily: 'Open Sans'}}/>
                    <CopyButton margin={'0.5rem'} word={encrypt(widgetInput, widgetShift)}/>
                  </div>
                </Stack>
              </Paper>
            </div>
            </Fade>)
        }
        {(gameState == 1 || gameState == 3) && 
            <Backdrop sx={{ color: gameState == 2 ? '#66FF00' : "FF0000" }}
              open={gameState == 1 || gameState == 3}
              onClick={resetGame}
            >
              <div>
                <Typography variant='h3' fontFamily='Roboto Slab' fontWeight='bold' textAlign='center' gutterBottom>{gameState == 1 ? 'Game over!' : 'Congratulations! You win!'}</Typography>
                <Typography variant='h4' fontFamily='Open Sans' fontWeight={600} textAlign='center'><span style={{fontWeight: 500, fontFamily: 'Roboto Slab'}}>Final Score: </span>{`${points} Points!`}</Typography>
              </div>
            </Backdrop>
        }
        </main>
    </RootLayout>
  )
}
