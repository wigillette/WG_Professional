import { useRouter } from "next/router";
import RootLayout from "../../components/Layout.js";
import styles from "../../styles/coursePage.module.css";
import courseDescriptions from "../../text/courseDescriptions.js";

export default function coursePage() {
    const router = useRouter();
    return (<RootLayout>
        <div className={styles.coursePage}>

        {Object.keys(courseDescriptions).includes(router.query.courseId) ? router.query.courseId+': '+courseDescriptions[router.query.courseId] : 'Invalid Course Id'}
        </div>
    </RootLayout>)
}