import React from "react";
import { useRouter } from "next/router.js";
import RootLayout from "../../components/Layout.js";
import styles from "../../styles/coursePage.module.css";
import courseDescriptions from "../../text/courseDescriptions.js";
import courses from "../../text/courses.js";
import { Breadcrumbs, Divider, Typography, Link } from "@mui/material";
import { CalendarMonth, School, NavigateNext } from "@mui/icons-material";


const getCourseInfo = (courseId) => {
    const semesterData = Object.values(courses).filter((semesterPlan) => {
        const semester = semesterPlan.filter((course) => course.includes(courseId))
        return semester.length > 0;
    })
    const courseData = semesterData[0].filter((courseInfo) => courseInfo.includes(courseId));
    return courseData[0]
}

const CourseBreadcrumb = ({courseId}) => (
    <div className={styles.courseBreadcrumb}>
        <Breadcrumbs separator={<NavigateNext fontSize='small'/>}>
            <Link className={styles.breadcrumbLink} sx={{ display: 'flex', alignItems: 'center', fontFamily: 'Roboto Slab', textDecoration: 'none' }}
                color="inherit"
                href="/coursework"
                >
                <CalendarMonth sx={{ mr: 0.5 }} fontSize="inherit" />
                Coursework
            </Link>
            <Typography
                sx={{ display: 'flex', alignItems: 'center', fontFamily: 'Roboto Slab' }}
                color="text.primary"
                >
                <School sx={{ mr: 0.5 }} fontSize="inherit" />
                {courseId}
            </Typography>
        </Breadcrumbs>
    </div>
)

export default function coursePage({ params, searchParams }) {
    const router = useRouter();
    const courseId = router.query.courseId;

    return (<RootLayout>
        <div className={styles.coursePage}>
            <CourseBreadcrumb courseId={courseId} />
            {Object.keys(courseDescriptions).includes(courseId) ? 
                <React.Fragment>
                    <Typography variant='h5' color='rgb(0,0,0)' sx={{fontFamily: 'Roboto Slab', textAlign: 'center'}}>{`${courseId}: ${getCourseInfo(courseId)[1]}`}</Typography>
                    <Divider variant='middle' light sx={{mb: 1, mt: 1}}/>
                    <Typography variant='body1' color='inherit' sx={{fontFamily: 'Open Sans'}}>{courseDescriptions[courseId]}</Typography>
                </React.Fragment>
                : <Typography variant='body1' color='inherit' sx={{fontFamily: 'Open Sans', textAlign: 'center'}}>Invalid Course Id</Typography>
            }
        </div>
    </RootLayout>)
}