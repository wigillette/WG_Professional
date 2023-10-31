import React from 'react';
import styles from '../../styles/Coursework.module.css';
import { styled } from '@mui/material/styles';
import RootLayout from '../../components/Layout';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, tableCellClasses, Grid, Fade, Divider } from '@mui/material';
import relevantCourses from '../../text/relevantCourses';
import CustomLink from '../../components/CustomLink/CustomLink';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projects, projectTech } from '../../text/projects';

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

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

const SemesterTable = ({category, courses}) => (
  <React.Fragment>
  <Typography variant='h5' fontFamily={'Roboto Slab'} textAlign={'center'} mb={1}>{`${category}`}</Typography>
  <TableContainer component={Paper}>
    <Table>
      {/* <caption className={styles.tableCaption}>{`Term GPA: ${Object.keys(termGPAs).includes(category) ? termGPAs[semesterLabel] : 'N/A'}`}</caption> */}
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
        <Typography variant='h5' fontFamily={'Roboto Slab'} fontWeight={600} textAlign='center' sx={{margin: '0 auto'}}>Independent Research and Project Portfolio</Typography>
        <div className={styles.projectsContainer}>
          <Grid container spacing={3}>
            {Object.entries(projects).map((project) => (
              <Grid key={project[0]} item xs={6} sm={4} lg={3}>
                <ProjectCard title={project[0]} 
                  date={project[1][0]} 
                  image={project[1][1]} 
                  caption={project[1][2]} 
                  description={project[1][3]} 
                  tech={projectTech[project[0]] || []}
                />
              </Grid>
              ))}
          </Grid>
        </div>
        <Divider><Typography variant='h5' fontFamily={'Roboto Slab'} fontWeight={600} mb={2}>Relevant Courses:</Typography></Divider>
        <div className={styles.tableContainer}>
          <Fade in={true}>
            <Grid container spacing={3}>
              {Object.keys(relevantCourses).map((category, i) => (
                <Grid item xs={12} sm={4} lg={3}>
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
