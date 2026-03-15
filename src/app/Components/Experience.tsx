import styles from "@/app/CSS/exp.module.css"

export default function Experience() {
    return (
        <div id="experienceSection" className={styles.experienceSection}>
            <div className={styles.sectionIntro}>What About Professional Experience? </div>
            <div className={styles.educationContent}>
                <div className={styles.sectionName}>Experience</div>
                <div className={styles.educationList}>
                    <div className={styles.singleEXPL}>
                        <b>November 2024 -- Present</b>
                        <h3>Associate Software Engineer</h3>
                        <div>Capgemini, India</div>
                        <p><i className='bx bx-map'></i> Pune, Maharashtra, India</p>
                        <ul>
                            <li>Working as a Full Stack Developer for Aptiv, a global automotive technology company.</li>
                            <li>Developing and maintaining enterprise applications using C#, VB.NET, and SQL-based databases (SQL Server, MySQL, PL/SQL).</li>
                            <li>Managing and supporting multiple Supply Chain Management (SCM) applications to ensure smooth logistics operations and 24/7 system availability.</li>
                            <li>Collaborating with business stakeholders to understand requirements and deliver effective technical solutions.</li>
                        </ul>
                    </div>

                    <div className={styles.singleEMPTYL}></div>
                    <div className={styles.singleEMPTYR}></div>

                    <div className={styles.singleEXPR}>
                        <b>August 2022 -- September 2022</b>
                        <h3>Full Stack Developer </h3>
                        <div>Edunet Foundation</div>
                        <p><i className='bx bx-map'></i> Remote</p>
                        <ul>
                            <li>Developed a product comparison website, managing the full lifecycle from data collection and preprocessing to generating user-focused comparison results.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
