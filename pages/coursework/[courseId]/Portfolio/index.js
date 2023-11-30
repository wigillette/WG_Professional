import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../../../styles/Portfolio.module.css';
import RootLayout from '../../../../components/Layout';
import Box from '@mui/system/Box';
import Visibility from "@mui/icons-material/Visibility.js";
import NavigateNext from '@mui/icons-material/NavigateNext';
import School from '@mui/icons-material/School';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { portfolios } from '../../../../shared/data/courses';
import Custom404 from '../../../404';
import Divider from '@mui/material/Divider';
import CustomLink from '../../../../components/CustomLink/CustomLink';
import Folder from '@mui/icons-material/Folder';

const PortfolioBreadcrumb = ({courseId}) => (
    <div key={courseId} className={styles.courseBreadcrumb}>
        <Breadcrumbs separator={<NavigateNext fontSize='small'/>}>
            <CustomLink sx={{ display: 'flex', alignItems: 'center', fontSize: '1rem'}} href="/coursework" mr={0}>
                <CalendarMonth sx={{ mr: 0.5 }} fontSize="inherit" />
                Coursework
            </CustomLink>
            <CustomLink sx={{ display: 'flex', alignItems: 'center', fontSize: '1rem'}} href={`/coursework/${courseId}`} mr={0}>
                <School sx={{ mr: 0.5 }} fontSize="inherit" />
                {courseId}
            </CustomLink>
            <Typography sx={{ display: 'flex', alignItems: 'center', fontFamily: 'Roboto Slab', fontSize: '0.9rem'}} color="text.primary">
                <Folder sx={{ mr: 0.5 }} fontSize="inherit" />
                Portfolio
            </Typography>
        </Breadcrumbs>
    </div>);

const ReportContainer = ({reportName, fileName, projectLink}) => (
	<div className={styles.ReportContainer}>
		<Typography variant='h5' textAlign='center' fontFamily='Roboto Slab' gutterBottom>{reportName}</Typography>
		<div style={{textAlign: 'center', height: '100%'}} >
			<embed className={styles.documentEmbed} src={fileName} type='application/pdf' scale='tofit'></embed>
		</div>
		{projectLink && <Button variant='contained' href={projectLink} startIcon={<Visibility/>} sx={{marginTop: '1rem', fontFamily: 'Open Sans'}}>VIEW PROJECT</Button>}
	</div>
)

const ProjectVideo = ({videoName, url}) => (
    <div className={styles.VideoContainer}>
        <Typography variant='h5' textAlign='center' fontFamily='Roboto Slab' gutterBottom>{videoName}</Typography>
        <iframe className={styles.documentEmbed} src={url} title={videoName} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
)


export default function Portfolio() {
    const router = useRouter();
	return (
		(router.query && router.query.courseId && Object.keys(portfolios).includes(router.query.courseId)) ? 
        (<RootLayout>
			<Box component='section' width='90%' margin={'0 auto'}>
                <PortfolioBreadcrumb courseId={router.query.courseId}/>
                <Divider variant='middle' sx={{mb: '1rem', mt: '1rem'}}/>
				<Typography fontFamily='Roboto Slab' variant='h4' textAlign='center' gutterBottom>{portfolios[router.query.courseId].title}</Typography>
				<Typography fontFamily='Open Sans' variant='body1' textAlign={'center'} gutterBottom>{portfolios[router.query.courseId].description}</Typography>
                {Object.keys(portfolios[router.query.courseId]).includes('videos') && portfolios[router.query.courseId].videos.map((video) => <ProjectVideo videoName={video[0]} url={video[1]}/>)}
				<Stack direction={'row'} justifyContent={'center'} flexWrap={'wrap'}>
					{portfolios[router.query.courseId].documents.map((file) => <ReportContainer key={file[0]} reportName={file[0]} fileName={file[1]} projectLink={file[2]} />)}
				</Stack>
			</Box>
		</RootLayout>) : <Custom404/>
	)
}