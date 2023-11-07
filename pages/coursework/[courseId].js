import React from "react";
import RootLayout from "../../components/Layout.js";
import styles from "../../styles/coursePage.module.css";
import {courses, descriptions} from "../../shared/data/courses.js";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CalendarMonth from "@mui/icons-material/CalendarMonth.js";
import School from '@mui/icons-material/School.js';
import NavigateNext from '@mui/icons-material/NavigateNext.js';
import CustomLink from '../../components/CustomLink/CustomLink';
import Carousel from "../../components/Carousel/Carousel.js";
import carouselInfo from "../../shared/data/carousel1Info.js";
import Fade from "@mui/material/Fade";

const getCourseInfo = (courseId) => {
    const semesterData = Object.values(courses).filter((semesterPlan) => {
        const semester = semesterPlan.filter((course) => course.includes(courseId))
        return semester.length > 0;
    })
    const courseData = semesterData[0].filter((courseInfo) => courseInfo.includes(courseId));
    return courseData[0]
}

const CourseBreadcrumb = ({courseId}) => (
    <div key={courseId} className={styles.courseBreadcrumb}>
        <Breadcrumbs separator={<NavigateNext fontSize='small'/>}>
            <CustomLink sx={{ display: 'flex', alignItems: 'center', fontSize: '1rem'}} href="/coursework" mr={0}>
                <CalendarMonth sx={{ mr: 0.5 }} fontSize="inherit" />
                Coursework
            </CustomLink>
            <Typography
                className={styles.currentCoursePage}
                sx={{ display: 'flex', alignItems: 'center', fontFamily: 'Roboto Slab', fontSize: '0.9rem'}}
                color="text.primary"
                >
                <School sx={{ mr: 0.5 }} fontSize="inherit" />
                {courseId}
            </Typography>
        </Breadcrumbs>
    </div>
)

const coursePage = ({ courseInfo }) => {
    const courseId = courseInfo.id;

    return (<RootLayout>
        <Fade in={true}>
            <div className={styles.coursePage}>
                <CourseBreadcrumb courseId={courseId} />
                {Object.keys(descriptions).includes(courseId) ? 
                    <React.Fragment>
                        <Typography variant='h5' color='rgb(0,0,0)' sx={{fontFamily: 'Roboto Slab', textAlign: 'center'}}>{`${courseId}: ${getCourseInfo(courseId)[1]}`}</Typography>
                        <Divider variant='middle' light sx={{mb: 1, mt: 1}}/>
                        <Typography variant='body1' color='inherit' sx={{fontFamily: 'Open Sans'}}>{descriptions[courseId]}</Typography>
                    </React.Fragment>
                    : <Typography variant='body1' color='inherit' sx={{fontFamily: 'Open Sans', textAlign: 'center'}}>Invalid Course Id</Typography>
                }
                <Carousel images={carouselInfo}/>
            </div>
        </Fade>
    </RootLayout>)
}

export const getStaticPaths = async () => {
    const courseInfo = Object.keys(descriptions).map((id) => ({id: id})); // Example
    const paths = courseInfo.map(course => ({
        params: { courseId: course.id }
    }));
    return { paths, fallback: false };
};

export const getStaticProps = async context => {
    const courseId = context.params?.courseId || '';
    // Get post detail via API, file, etc.
    const courseInfo = { id: courseId }; // Example
    return { props: { courseInfo } };
};

export default coursePage;