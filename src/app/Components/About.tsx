
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
                            I love learning and always aim to improve in the fast-paced tech world. My goal is to create solutions that matter and keep growing my skills. Let's team up and discover the endless possibilities of tech!
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