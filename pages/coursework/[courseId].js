import { useRouter } from "next/router";
import RootLayout from "../../components/Layout.js";
import styles from "../../styles/coursePage.module.css";

export default function coursePage() {
    const router = useRouter();
    return (<RootLayout>
        <div className={styles.coursePage}>
        {router.query.courseId} Description
        </div>
    </RootLayout>)
}