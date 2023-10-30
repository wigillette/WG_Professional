import React from 'react';
import styles from '../../styles/Coursework.module.css';
import { styled } from '@mui/material/styles';
import RootLayout from '../../components/Layout';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, tableCellClasses, Grid, Link } from '@mui/material';
import courses from '../../text/courses';
import termGPAs from '../../text/termGPAs';
import CustomLink from '../../components/CustomLink/CustomLink';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: '1.1vw',
    fontFamily: 'Roboto Slab',
    backgroundColor: '#EF5350',
    color: 'white'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '70%',
    fontFamily: 'Open Sans'
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const SemesterTable = ({semesterLabel, courses}) => (
  <React.Fragment>
  <Typography variant='h5' sx={{fontFamily: 'Roboto Slab', fontWeight: '600', mb: 1}}>{semesterLabel}</Typography>
  <TableContainer component={Paper}>
    <Table>
      <caption className={styles.tableCaption}>{`Term GPA: ${Object.keys(termGPAs).includes(semesterLabel) ? termGPAs[semesterLabel] : 'N/A'}`}</caption>
      <TableHead>
        <TableRow>
          <StyledTableCell>ID</StyledTableCell>
          <StyledTableCell>Title</StyledTableCell>
          <StyledTableCell>Instructor</StyledTableCell>
          <StyledTableCell>Grade</StyledTableCell>
          <StyledTableCell>Credits</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {courses.map((course) => (
        <StyledTableRow key={course[0]}>
          {course.map((courseInfo, i) => (
            <StyledTableCell key={i}>{i==0 ? <CustomLink href={`/coursework/${courseInfo}`} variant={'body2'}>{courseInfo}</CustomLink> : courseInfo}</StyledTableCell>
          ))}
        </StyledTableRow>))
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
        <div className={styles.tableContainer}>
          <Grid container spacing={3}>
            {Object.keys(courses).map((semesterId, i) => (
              <Grid item xs={6}>
                <SemesterTable key={i} semesterLabel={semesterId} courses={courses[semesterId]} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </RootLayout>
  )
}
