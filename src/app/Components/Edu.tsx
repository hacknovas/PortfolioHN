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
                            <h3>Graduation</h3>
                            <h4>Bachelors in Computer Engineering  </h4>
                            <p>CGPA: 9.30</p>
                            <p>Core Subjects: DSA / DBMS / OS / Networking</p>
                        </div>
                        <div className={styles.singleEDU}>
                            <b>2018 - 2020</b>
                            <h3>High School</h3>
                            <h4></h4>
                            <p>Percentage: 78%</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa corporis quidem dolor, architecto praesentium.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
