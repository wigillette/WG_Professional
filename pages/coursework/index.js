import React from 'react';
import styles from '../../styles/Coursework.module.css';
import { styled } from '@mui/material/styles';
import RootLayout from '../../components/Layout';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import tableCellClasses from '@mui/material/TableCell';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { relevantCourses } from '../../shared/data/courses';
import CustomLink from '../../components/CustomLink/CustomLink';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projects, projectTech, projectMedia } from '../../shared/data/projects';
import Download from '@mui/icons-material/Download';
import UnofficialTranscript from "../../shared/documents/Unofficial_Transcript.pdf";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: '100%',
    fontFamily: 'Roboto Slab',
    backgroundColor: '#EF5350',
    color: 'white'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '70%',
    fontFamily: 'Open Sans'
  },
}));

const SemesterTable = ({category, courses}) => (
  <React.Fragment>
  <Typography variant='h5' fontFamily={'Roboto Slab'} textAlign={'center'} mb={1}>{`${category}`}</Typography>
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <StyledTableCell>ID</StyledTableCell>
          <StyledTableCell>Title</StyledTableCell>
          <StyledTableCell>Grade</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {courses.map((course) => (
        <TableRow hover key={course[0]}>
          {course.map((courseInfo, i) => (
            <StyledTableCell key={i}>{i==0 ? <CustomLink href={`/coursework/${courseInfo}`} variant={'body2'}>{courseInfo}</CustomLink> : courseInfo}</StyledTableCell>
          ))}
        </TableRow>))
      }
      </TableBody>
    </Table>
  </TableContainer>
  </React.Fragment>
)

export default function Coursework() {
  return (
    <RootLayout>
      <div className={styles.Coursework}>
        <Fade in={true}>
          <div className={styles.overviewContainer}>
            <Typography variant='h5' fontFamily={'Roboto Slab'} fontWeight={600} textAlign='center' mb={'0.5rem'}>Academic Mission</Typography>
            <Typography variant='paragraph' fontFamily={'Open Sans'} textAlign='center' mb={'0.5rem'}>I am pursuing a <b>triple major</b>, graduating in <b>May 2025</b> from <b>Ursinus College</b> with BS degrees in <b>Computer Science</b>, <b>Statistics</b>, and <b>Mathematics</b>. My goal is to pursue a career that enables me to utilize and expand my computer science and analytical skills, furthering my education with a <b>Master's Degree</b> in the future. I am passionate about programming as an analytical tool, and I enjoy collaborating with others to solve challenging problems. Through perpetual diligence and perseverence, I wish to apply and grow my technical skills in a real-world setting, contributing to meaningful projects and outcomes.</Typography>
            <br/>
            <a href={UnofficialTranscript} className={styles.link} download>
              <Button variant='contained' sx={{margin: '0 auto', mt: '1rem'}}><Download/> Unofficial Transcript</Button>
            </a>
          </div>
        </Fade>
        <Fade in={true}>
          <Divider><Typography variant='h5' fontFamily={'Roboto Slab'} fontWeight={600} textAlign='center' mb={'0.5rem'} mt={'0.5rem'}>Project Portfolio</Typography></Divider>
        </Fade>
        <div className={styles.projectsContainer}>
          <Grid container spacing={3}>
            {Object.entries(projects).map((project) => (
              <Grid key={project[0]} item xs={12} sm={6} lg={3}>
                <ProjectCard key={project[0]} title={project[0]} 
                  date={project[1][0]} 
                  image={project[1][1]} 
                  caption={project[1][2]} 
                  description={project[1][3]} 
                  tech={Object.keys(projectTech).includes(project[0]) ? projectTech[project[0]] : []}
                  media={Object.keys(projectMedia).includes(project[0]) ? projectMedia[project[0]] : {}}
                />
              </Grid>
              ))}
          </Grid>
        </div>
        <Divider><Typography variant='h5' fontFamily={'Roboto Slab'} fontWeight={600} mb={'0.5rem'} mt={'0.5rem'}>Relevant Courses:</Typography></Divider>
        <div className={styles.tableContainer}>
          <Fade in={true}>
            <Grid container spacing={3}>
              {Object.keys(relevantCourses).map((category, i) => (
                <Grid item xs={12} sm={4} lg={3} key={i}>
                    <SemesterTable key={i} category={category} courses={relevantCourses[category]} />
                </Grid>
              ))}
            </Grid>
          </Fade>
        </div>
      </div>
    </RootLayout>
  )
}
