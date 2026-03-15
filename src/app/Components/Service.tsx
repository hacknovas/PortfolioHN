import React from 'react'
import styles from "@/app/CSS/service.module.css"

export default function Service() {
    return (
        <div id="servicesSection" className={styles.serviceSection}>
            <div className={styles.sectionIntro}>What I Do? </div>
            <div className={styles.serviceContent}>
                <div className={styles.sectionName}>My Services</div>
                <div className={styles.serviceList}>
                    <div className={styles.singleService}>
                        <div><i className="devicon-html5-plain"></i></div>
                        <h3>Software Development</h3>
                        <div>Building reliable and scalable software solutions using modern technologies, focusing on performance, maintainability, and real-world business requirements.</div>
                    </div>
                    <div className={styles.singleService}>
                        <div><i className="devicon-codepen-original colored"></i></div>
                        <h3>Backend & API Development</h3>
                        <div>Designing secure and scalable backend systems using .NET, Node.js, and RESTful APIs to power modern web and mobile applications.</div>
                    </div>
                    <div className={styles.singleService}>
                        <div><i className="devicon-devicon-plain"></i></div>
                        <h3>Web  Development</h3>
                        <div>Whether you're envisioning a simple portfolio site or a complex e-commerce platform, I have the expertise to bring your vision to life.</div>
                    </div>
                    <div className={styles.singleService}>
                        <div><i className="devicon-trpc-plain"></i></div>
                        <h3>Blockchain Development</h3>
                        <div>I specialize in crafting secure, transparent, and customized decentralized applications (DApps) to fit your unique requirements.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
