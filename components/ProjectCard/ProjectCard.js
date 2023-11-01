import React from 'react';
import styles from './ProjectCard.module.css';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProjectCard({title, date, image, caption, description, tech}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardHeader
        className={styles.cardHeader}
        title={title}
        subheader={date}
      />
      <Stack direction='row' mr={1} ml={1} mb={1} alignContent={'center'} sx={{flexWrap: 'wrap'}}>
        {tech.map((skill) => <Chip color="primary" label={skill} sx={{fontFamily: 'Open Sans', mr: 0.5, mb: 0.5}}/>)}
      </Stack>
      <CardMedia
        component="img"
        height="200"
        image={image}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" fontFamily={'Open Sans'}>
          {caption}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph fontFamily={'Open Sans'}>
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
