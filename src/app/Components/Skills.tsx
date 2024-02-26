"use client"
import styles from "@/app/CSS/skill.module.css"
import { useState } from "react"

export default function Skills() {

    const [web2, setweb2] = useState(["cplusplus", "javascript", "typescript", "html5", "css3", "bootstrap", "mysql", "mongodb", "react", "redux", "nextjs", "nodejs"])
    const [web3, setweb3] = useState(["ethereum","solidity", "hardhat"])
    const [tools, setTools] = useState(["git", "kubernetes", "docker", "jenkins", "linux", "terraform", "nginx"])

    return (
        <div id="skillSection">
            <div className={styles.sectionIntro}>What I Know? </div>
            <div className={styles.skillSection}>
                <div className={styles.skilllist} >
                    <div className={styles.sectionName}>Skills</div>
                    <div >
                        <div className={styles.skilllistItem} onClick={() => {
                            document.querySelector<HTMLElement>("#icon1 ")!.style.display = "flex";
                            document.querySelector<HTMLElement>("#icon2 ")!.style.display = "none";
                            document.querySelector<HTMLElement>("#icon3 ")!.style.display = "none";
                        }}>Web 2.0</div>
                        <div className={styles.skilllistItem} onClick={() => {
                            document.querySelector<HTMLElement>("#icon2")!.style.display = "flex";
                            document.querySelector<HTMLElement>("#icon3")!.style.display = "none";
                            document.querySelector<HTMLElement>("#icon1")!.style.display = "none";
                        }}>Web 3.0</div>
                        <div className={styles.skilllistItem} onClick={() => {
                            document.querySelector<HTMLElement>("#icon3")!.style.display = "flex";
                            document.querySelector<HTMLElement>("#icon2")!.style.display = "none";
                            document.querySelector<HTMLElement>("#icon1")!.style.display = "none";
                        }}>Tools</div>
                    </div>
                </div>
                <div className={styles.allIconsList}>
                    <div id="icon1" className={styles.iconsList1}>
                        {
                            web2.map((icons: any, i) => {
                                return (
                                    <i className={`devicon-${icons}-plain colored`} key={i}></i>
                                )
                            })
                        }
                    </div>
                    <div id="icon2" className={styles.iconsList2}>
                        {
                            web3.map((icons: any, i) => {
                                return (
                                    <i className={`devicon-${icons}-plain colored`} key={i}></i>
                                )
                            })
                        }
                    </div>
                    <div className={styles.iconsList3} id="icon3">
                        {
                            tools.map((icons: any, i) => {
                                return (
                                    <i className={`devicon-${icons}-plain colored`} key={i}></i>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

// etherjs,solidity,web3js,hardhat,truffle,ganache,remixIDE