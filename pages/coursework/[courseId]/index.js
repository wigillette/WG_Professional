import React from "react";
import RootLayout from "../../../components/Layout.js";
import { useRouter } from "next/router.js";
import styles from "../../../styles/coursePage.module.css";
import {courses, descriptions, portfolios} from "../../../shared/data/courses.js";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import CalendarMonth from "@mui/icons-material/CalendarMonth.js";
import Visibility from "@mui/icons-material/Visibility.js";
import School from '@mui/icons-material/School.js';
import NavigateNext from '@mui/icons-material/NavigateNext.js';
import CustomLink from '../../../components/CustomLink/CustomLink.js';
import Carousel from "../../../components/Carousel/Carousel.js";
import carouselInfo from "../../../shared/data/carousel1Info.js";
import Fade from "@mui/material/Fade";
import Custom404 from "../../404.js";

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
                sx={{ display: 'flex', alignItems: 'center', fontFamily: 'Roboto Slab', fontSize: '0.9rem'}}
                color="text.primary"
            >
                <School sx={{ mr: 0.5 }} fontSize="inherit" />
                {courseId}
            </Typography>
        </Breadcrumbs>
    </div>
)

const coursePage = () => {
    const router = useRouter();
    if (router.query && router.query.courseId && Object.keys(descriptions).includes(router.query.courseId)) {
        const courseId = router.query.courseId;

        return (<RootLayout>
            <Fade in={true}>
                <div className={styles.coursePage}>
                    <CourseBreadcrumb courseId={courseId} />
                    <div>
                        <Typography variant='h5' color='rgb(0,0,0)' sx={{fontFamily: 'Roboto Slab', textAlign: 'center'}} gutterBottom>{`${courseId}: ${getCourseInfo(courseId)[1]}`}</Typography>
                        <Divider variant='middle' light sx={{mb: 1, mt: 1}}/>
                        <Typography variant='body1' color='inherit' sx={{fontFamily: 'Open Sans'}} mb='1rem'>{descriptions[courseId]}</Typography>
                        {Object.keys(portfolios).includes(courseId) && <Button variant='contained' sx={{fontFamily: 'Open Sans'}} startIcon={<Visibility/>} href={`/coursework/${courseId}/Portfolio`}>VIEW PORTFOLIO</Button>}
                    </div>
                    <Carousel images={carouselInfo}/>
                </div>
            </Fade>
        </RootLayout>)
    } else {
        return <Custom404/>
    }
}

export default coursePage;