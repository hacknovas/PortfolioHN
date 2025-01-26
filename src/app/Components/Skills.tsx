"use client"
import styles from "@/app/CSS/skill.module.css"
import { useState } from "react"

export default function Skills() {

    const [web2, setweb2] = useState(["cplusplus-plain colored", "javascript-plain colored","dotnetcore-plain colored","csharp-plain colored", "typescript-plain colored", "html5-plain-wordmark colored", "css3-plain-wordmark colored", "bootstrap-plain-wordmark colored", "mysql-original colored", "mongodb-plain colored", "react-original colored", "redux-original colored", "nextjs-plain colored", "nodejs-plain-wordmark colored"])
    const [web3, setweb3] = useState(["solidity-plain colored", "hardhat-plain colored"])
    const [tools, setTools] = useState(["git-plain colored", "kubernetes-plain colored", "docker-plain colored", "jenkins-plain colored", "linux-plain colored", "terraform-plain colored", "nginx-original colored", "amazonwebservices-plain-wordmark colored", "mocha-plain colored"])
    const [toggle, settoggle] = useState(false)

    return (
        <div id="skillSection" className={styles.supSkillSection}>
            <div className={styles.sectionIntro}>What I Know? </div>
            <div className={styles.skillSection}>
                <div className={styles.skilllist} >
                    <div className={styles.sectionName}>Skills
                    </div>
                    <div className={styles.skillMenuIcon} onClick={() => {
                        toggle ? document.querySelector<HTMLElement>("#toggleCSS2")!.style.right = "1000px" : document.querySelector<HTMLElement>("#toggleCSS2")!.style.right = "0px";
                        !toggle ? settoggle(true) : settoggle(false);
                    }}>
                        {toggle ?
                            <i className='bx bx-chevron-up'></i> : <i className='bx bx-chevron-down'></i>
                        }
                    </div>
                    <div id="toggleCSS2" className={styles.skillListAll} >
                        <div className={styles.skilllistItem} onClick={() => {
                            document.querySelector<HTMLElement>("#icon1 ")!.style.display = "flex";
                            document.querySelector<HTMLElement>("#icon2 ")!.style.display = "none";
                            document.querySelector<HTMLElement>("#icon3 ")!.style.display = "none";

                            toggle ? document.querySelector<HTMLElement>("#toggleCSS2")!.style.right = "1000px" : document.querySelector<HTMLElement>("#toggleCSS2")!.style.right = "0px";
                            !toggle ? settoggle(true) : settoggle(false);
                        }}>Web 2.0</div>
                        <div className={styles.skilllistItem} onClick={() => {
                            document.querySelector<HTMLElement>("#icon2")!.style.display = "flex";
                            document.querySelector<HTMLElement>("#icon3")!.style.display = "none";
                            document.querySelector<HTMLElement>("#icon1")!.style.display = "none";

                            toggle ? document.querySelector<HTMLElement>("#toggleCSS2")!.style.right = "1000px" : document.querySelector<HTMLElement>("#toggleCSS2")!.style.right = "0px";
                            !toggle ? settoggle(true) : settoggle(false);
                        }}>Web 3.0</div>
                        <div className={styles.skilllistItem} onClick={() => {
                            document.querySelector<HTMLElement>("#icon3")!.style.display = "flex";
                            document.querySelector<HTMLElement>("#icon2")!.style.display = "none";
                            document.querySelector<HTMLElement>("#icon1")!.style.display = "none";

                            toggle ? document.querySelector<HTMLElement>("#toggleCSS2")!.style.right = "1000px" : document.querySelector<HTMLElement>("#toggleCSS2")!.style.right = "0px";
                            !toggle ? settoggle(true) : settoggle(false);
                        }}>Others</div>
                    </div>
                </div>
                <div className={styles.allIconsList}>
                    <div id="icon1" className={styles.iconsList1}>
                        {
                            web2.map((icons: any, i) => {
                                return (
                                    <i className={`devicon-${icons}`} key={i}></i>
                                )
                            })
                        }
                    </div>
                    <div id="icon2" className={styles.iconsList2}>
                        <div className={styles.externalImg}>
                            <img src="/Images/ganache.png" width={50} height={70} alt="" />
                            <img src="/Images/metamask.png" width={60} height={70} alt="" />
                            <img src="/Images/ethereum.png" width={60} height={70} alt="" />
                            <img src="/Images/truffle.png" width={60} height={70} alt="" />
                            <img src="/Images/web3js.png" width={70} height={70} alt="" />
                        </div>
                        {
                            web3.map((icons: any, i) => {
                                return (
                                    <i className={`devicon-${icons}`} key={i}></i>
                                )
                            })

                        }
                    </div>
                    <div className={styles.iconsList3} id="icon3">
                        {
                            tools.map((icons: any, i) => {
                                return (
                                    <i className={`devicon-${icons}`} key={i}></i>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}
