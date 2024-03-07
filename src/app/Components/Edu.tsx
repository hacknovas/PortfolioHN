import styles from "@/app/CSS/edu.module.css"

export default function Edu() {
    return (
        <div id="eduSection" className={styles.educationSection}>
            <div className={styles.sectionIntro}>What About Academic Performance? </div>
            <div className={styles.educationContent}>
                <div className={styles.sectionName}>Qualification</div>
                <div className={styles.educationList}>
                    <div className={styles.educationMark}>
                        <div className={styles.singleEDU}>
                            <b>2020 - Present</b>
                            <h3>Bachelors in Computer Engineering</h3>
                            <p>CGPA: <br /><b> 9.30</b></p>
                            <p>Core Subjects: <br /><b> DSA / DBMS / OS / Networking</b></p>
                        </div>
                        <div className={styles.singleEDU}>
                            <b>2018 - 2020</b>
                            <h3>High School (H.S.C)</h3>
                            <p>Percentage: <br /><b>78%</b></p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
