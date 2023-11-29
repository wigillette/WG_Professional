import React from 'react';
import styles from '../../../../styles/TechnicalProject.module.css'
import RootLayout from '../../../../components/Layout';
import Box from '@mui/system/Box';
import Visibility from "@mui/icons-material/Visibility.js";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Presentation from '../../../../shared/documents/WG_Cryptography_Presentation.pdf';
import AssessmentPlan from '../../../../shared/documents/WG_Cryptography_Assessment_Plan.pdf';
import LightningTalk from '../../../../shared/documents/WG_Cryptography_Lightning_Talk_2.pdf';
import POGILActivity from '../../../../shared/documents/WG_Cryptography_POGIL_Activity.pdf';
import ServiceLearningDraft1 from '../../../../shared/documents/WG_Cryptography_Service_Learning_Draft1.pdf';
import TechnicalProject from '../../../../shared/documents/WG_Cryptography_Technical_Project.pdf';
import UBDWritten from '../../../../shared/documents/WG_Cryptography_UbD_Written.pdf';
import UDLWritten from '../../../../shared/documents/WG_Cryptography_UDL_Written.pdf';
import UnpluggedActivity from '../../../../shared/documents/WG_Cryptography_Unplugged_Activity.pdf';
import SELASCII from '../../../../shared/documents/WG_SEL_ASCII.pdf'
import ServiceLearningDraft2 from '../../../../shared/documents/WG_Cryptography_Service_Learning_Draft2.pdf'


const ReportContainer = ({reportName, fileName, projectLink}) => (
	<div className={styles.ReportContainer}>
		<Typography variant='h5' textAlign='center' fontFamily='Roboto Slab' gutterBottom>{reportName}</Typography>
		<div style={{textAlign: 'center'}} >
			<embed className={styles.documentEmbed} src={fileName} type='application/pdf' scale='tofit'></embed>
		</div>
		{projectLink && <Button variant='contained' href={projectLink} startIcon={<Visibility/>} sx={{marginTop: '1rem', fontFamily: 'Open Sans'}}>VIEW PROJECT</Button>}
	</div>
)


export default function CS471Portfolio() {
	const files = [['Service Learning Project Final Draft', ServiceLearningDraft2], ['Preliminary Talk', LightningTalk], ['Understanding by Design Framework', UBDWritten], ['Universal Design for Learning Principles', UDLWritten], ['Service Learning Project Rough Draft', ServiceLearningDraft1],['Introductory Presentation', Presentation], ['Caesar Shift Technical Project', TechnicalProject, '/coursework/CS-471/Portfolio/TechnicalProject'], ['Caesar Shift Unplugged Activity', UnpluggedActivity], ['Cryptographic Method POGIL Activity', POGILActivity], ['Introductory Cryptography Assessments', AssessmentPlan], ['Social Emotional Learning (SEL) with ASCII Character Encryption', SELASCII]];
	return (
		<RootLayout>
			<Box component='section' width='90%' margin={'0 auto'}>
				<Typography fontFamily='Roboto Slab' variant='h4' textAlign='center' gutterBottom>CS-471 Cryptography Lesson Portfolio</Typography>
				<Typography fontFamily='Open Sans' variant='body1' textAlign={'center'} gutterBottom>Below is a collection of pedagogical activities related to introductory cryptography that I developed during the Fall 2023 semester in my CS-471 course.</Typography>
				<Stack direction={'row'} justifyContent={'center'} flexWrap={'wrap'}>
					{files.map((file) => <ReportContainer key={file[0]} reportName={file[0]} fileName={file[1]} projectLink={file[2]} />)}
				</Stack>
			</Box>
		</RootLayout>
	)
}