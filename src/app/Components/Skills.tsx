"use client"
import styles from "@/app/CSS/skill.module.css"
import Image from "next/image"
import { useState } from "react"

export default function Skills() {

    const [web2, setweb2] = useState(["cplusplus", "javascript", "typescript", "html5", "css3", "bootstrap", "mysql", "mongodb", "react", "redux", "nextjs", "nodejs",])
    const [web3, setweb3] = useState(["solidity", "go", "web3js", "hardhat"])
    const [tools, setTools] = useState(["git", "kubernetes", "docker", "jenkins", "linux", "terraform"])

    return (
        <div id="skillSection">
            <div className={styles.sectionIntro}>What I Know? </div>
            <div className={styles.skillSection}>
                <div className={styles.skilllist} >
                    <div className={styles.sectionName}>Skills</div>
                    <div >
                        <div className={styles.skilllistItem}>Web 2.0</div>
                        <div className={styles.skilllistItem}>Web 3.0</div>
                        <div className={styles.skilllistItem}>Tools</div>
                    </div>
                </div>
                <div>
                    <div className={styles.iconsList}>
                        {
                            web2.map((icons: any) => {
                                return (
                                    <i className={`devicon-${icons}-plain colored`}></i>
                                )
                            })
                        }
                    </div>
                    <div className={styles.iconsList}>
                        {
                            web3.map((icons: any) => {
                                return (
                                    <i className={`devicon-${icons}-plain colored`}></i>
                                )
                            })
                        }
                    </div>
                    <div className={styles.iconsList}>
                        {
                            tools.map((icons: any) => {
                                return (
                                    <i className={`devicon-${icons}-plain colored`}></i>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
