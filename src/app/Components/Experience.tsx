import styles from "@/app/CSS/exp.module.css"

export default function Experience() {
    return (
        <div id="experienceSection" className={styles.experienceSection}>
            <div className={styles.sectionIntro}>What About Professional Experience? </div>
            <div className={styles.educationContent}>
                <div className={styles.sectionName}>Experience</div>
                <div className={styles.educationList}>
                    <div className={styles.singleEXPL}>
                        <b>October 2024 -- Present</b>
                        <h3>Software Engineer</h3>
                        <div>Capgemini, India</div>
                        <p><i className='bx bx-map'></i> Pune, Maharashtra, India</p>
                    </div>

                    <div></div>
                    <div></div>

                    <div className={styles.singleEXPR}>
                        <b>August 2022 -- September 2022</b>
                        <h3>Full Stack Developer </h3>
                        <div>Edunet Foundation</div>
                        <p><i className='bx bx-map'></i> Remote</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
