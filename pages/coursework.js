import React from 'react';
import styles from '../styles/Coursework.module.css';
import { styled } from '@mui/material/styles';
import RootLayout from '../components/Layout';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, tableCellClasses, Grid } from '@mui/material';
import courses from '../text/courses';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'maroon',
    color: theme.palette.common.white,
    fontSize: '1.1vw'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '90%',
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
      <TableHead>
        <TableRow>
          <StyledTableCell sx={{fontFamily: 'Roboto Slab'}}>Course ID</StyledTableCell>
          <StyledTableCell sx={{fontFamily: 'Roboto Slab'}}>Title</StyledTableCell>
          <StyledTableCell sx={{fontFamily: 'Roboto Slab'}}>Instructor</StyledTableCell>
          <StyledTableCell sx={{fontFamily: 'Roboto Slab'}}>Grade</StyledTableCell>
          <StyledTableCell sx={{fontFamily: 'Roboto Slab'}}>Credits</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {courses.map((course) => (
        <StyledTableRow key={course[0]}>
          {course.map((courseInfo, i) => (
            <StyledTableCell>{i==0 ? <b>{courseInfo}</b> : courseInfo}</StyledTableCell>
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
            {Object.keys(courses).map((semesterId) => (
              <Grid item xs={6}>
                <SemesterTable semesterLabel={semesterId} courses={courses[semesterId]} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </RootLayout>
  )
}
