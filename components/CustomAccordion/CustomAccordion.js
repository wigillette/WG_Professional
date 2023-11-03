import * as React from 'react';
import styles from './CustomAccordion.module.css';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={1} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions({itemDetails}) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange =
    (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Box>
      {itemDetails.map((details, i) => (
        <Accordion key={details.name} expanded={expanded === `panel${i+1}`} onChange={handleChange(`panel${i+1}`)}>
          <AccordionSummary aria-controls={`panel${i+1}d-content`} id={`panel${i+1}d-header`}>
            <Typography variant='body1' fontFamily='Roboto Slab' >{details.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {details.desc.map((sub, i) => (
              <React.Fragment key={i}>
                <Typography fontFamily='Open Sans' variant='paragraph'>
                  {sub}
                </Typography>
                {i != details.desc.length-1 && <br/>}
                {i != details.desc.length-1 && <br/>}
              </React.Fragment>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}