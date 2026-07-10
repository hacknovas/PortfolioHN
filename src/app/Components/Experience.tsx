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
                        <h3>Senior Software Engineer</h3>
                        <div>Capgemini, India</div>
                        <p><i className='bx bx-map'></i> Pune, Maharashtra, India</p>
                        <ul>
                            <li>Working as a Full Stack Developer for Aptiv and Versigent client, contributing to the support, enhancement, and development of enterprise applications.</li>
                            <li>Currently building and maintaining C# and VB.NET solutions and services using SQL, PL/SQL and MySQL databases.</li>
                            <li>Delivering end-to-end features and enhancements, including development, testing, deployment, and production support.</li>
                            <li>Gained experience working with and enhancing legacy enterprise applications. Improved application stability through bug fixes, enhancements and codebase optimization.</li>
                            <li>Experience in Windows Services and Scheduled Jobs which automate and streamline data processing.</li>
                            <li>Managing multiple Supply Chain Management (SCM) applications to streamline logistics and ensure 24/7 operational availability. </li>
                            <li>Collaborating with business stakeholders and cross-functional teams to analyze requirements, troubleshoot issues, and deliver effective technical solutions, including application integrations.</li>
                            <li>Played a key role in the transition of 12+ Source-to-Pay (S2P) enterprise applications from TCS to Capgemini, contributing to a seamless client onboarding.</li>
                            <li>Took ownership of Knowledge Transfer (KT) sessions, documenting application architecture, business workflows, and integration points for multiple applications.</li>
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
