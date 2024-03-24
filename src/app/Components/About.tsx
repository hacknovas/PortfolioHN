import styles from "@/app/CSS/about.module.css";
import SlideTemplate from "./Animate/SlideTemplate";
import Image from "next/image";

export default function About() {
    return (
        <div id="aboutSection" className={styles.supAboutSection}>
            <div className={styles.sectionIntro}>Who am I? </div>
            <div className={styles.aboutSection}>
                <div className={styles.aboutSLeft}>
                    <SlideTemplate>
                        <div className={styles.aboutText} >
                            <div className={styles.sectionName}>About Me</div>

                            I'm Prathamesh Doni, <br />a Full Stack Developer focusing on both Web 2.0 and Blockchain technologies.
                        </div>
                        <p>
                        Passionate about continuous learning, I thrive in the fast-paced tech world, aiming to create impactful solutions and grow my skills. I'm eager to bring my enthusiasm and expertise to a dynamic team, contributing to exciting and meaningful projects.
                        </p>
                    </SlideTemplate>
                </div>
                <SlideTemplate>
                    <div className={styles.aboutSReftOutside}>
                        <Image className={styles.aboutSReft} src="/Images/profileAbout.jpg" alt="NA" width={340} height={300} ></Image>
                    </div>
                </SlideTemplate>
            </div>
        </div>
    )
}
