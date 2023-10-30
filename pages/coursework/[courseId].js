import { useRouter } from "next/router";


export default function coursePage() {
    const router = useRouter();
    return (<RootLayout>
        <div className={styles.coursePage}>
        {router.query.courseId} Description
        </div>
    </RootLayout>)
}