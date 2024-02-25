import React from 'react'
import styles from "@/app/CSS/service.module.css"

export default function Service() {
    return (
        <div id="aboutSection" className={styles.serviceSection}>
            <div className={styles.sectionIntro}>What I Do? </div>
            <div className={styles.serviceContent}>
                <div className={styles.sectionName}>My Services</div>
                <div className={styles.serviceList}>
                    <div className={styles.singleService}>
                        <div><i className="devicon-devicon-plain"></i></div>
                        Web Development
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                    <div className={styles.singleService}>
                        <div><i className="devicon-trpc-plain"></i></div>
                        Blockchain Development
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
