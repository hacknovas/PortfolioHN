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
                            <b>2020 - 2024</b>
                            <h3>B.E in Computer Engineering</h3>
                            <div>VPKBIET, Baramati</div>
                            <p>CGPA:  9.05</p>
                        </div>
                        <div className={styles.singleEDU}>
                            <b>2019 - 2020</b>
                            <h3>Class XII (MSBSHSE)</h3>
                            <div>S.S.M.V, Pune</div>
                            <p>Percentage: 78% </p>
                            <p></p>
                        </div>
                        <div className={styles.singleEDU}>
                            <b>2017 - 2018</b>
                            <h3>Class X (MSBSHSE)</h3>
                            <div>S.S.M.V, Pune</div>
                            <p>Percentage: 90% </p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
