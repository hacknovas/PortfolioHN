
import styles from "@/app/CSS/about.module.css";
import SlideTemplate from "./Animate/SlideTemplate";

export default function About() {
    return (
        <div id="aboutSection" className={styles.supAboutSection}>
            <div className={styles.sectionIntro}>Who am I? </div>
            <div className={styles.aboutSection}>
                <div className={styles.aboutSLeft}>
                    <SlideTemplate>
                        <div className={styles.aboutText} >
                            <div className={styles.sectionName}>About</div>
                            I'm <br /> Full Stack Developer <br /> primarily Working On Web 2.0 and Blockhain Technology.
                        </div>
                        <p>
                            As a lifelong learner, I'm driven to excel in any tech field<br />And constantly expanding my skills.
                        </p>
                    </SlideTemplate>
                </div>
                <div className={styles.aboutSReft}>
                    imageNA
                </div>
            </div>
        </div>
    )
}
