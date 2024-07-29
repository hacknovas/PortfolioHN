"use client"
import styles from "@/app/CSS/project.module.css"
import axios from "axios";
import Image from "next/image"
import { Key, useEffect, useState } from "react";
import projectJSON from "@/utils/mydata.myprojects.json"

export default function Project() {
    const [tag, settag] = useState<string>("Personal")
    type projectS = {
        Image: string,
        Name: string,
        Description: string,
        Tools: string[],
        GithubLink: string,
    }

    const [projects, setprojects] = useState<projectS[]>();

    useEffect(() => {
        setprojects(projectJSON);
    }, [])

    return (
        <div id="projectSection" className={styles.projectSection}>
            <div className={styles.sectionIntro}>What I Created? </div>
            <div className={styles.projectSectionDiv}>
                <div className={styles.sectionName}>Project Showcase</div>
                <div className={styles.projectType}>
                    <div onClick={() => {
                        settag("Personal");

                    }} >Personal</div>
                    <div onClick={() => {
                        settag("Academic");
                    }}>Academic</div>
                </div>
                <div className={styles.projectItems} >
                    {
                        projects?.map((_data: any, i) => {
                            return (
                                _data.tag == tag ?
                                    <div className={styles.projectSingleItem} key={i}>
                                        <div>
                                            <div>
                                                <b>{_data.Name}</b>
                                            </div>
                                            <div style={{ display: "flex", columnGap: "20px" }} >
                                                <Image src={_data.Image} alt="Na" width={300} height={150} style={{ borderRadius: "2px", boxShadow: "1px 2px 4px black", border: "4px solid white" }}
                                                    objectFit="contain"
                                                ></Image>
                                                <div style={{ display: "flex", flexDirection: "column", paddingLeft: "10px", overflowY: "scroll", height: "140px", rowGap: "6px" }}>
                                                    {
                                                        _data.Tools.map((icons: any, j: Key | null | undefined) => {
                                                            return (
                                                                <i className={`devicon-${icons}`} key={j} ></i>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        <div style={{ borderRight: "1px dotted grey", padding: "10px" }} className={styles.partionline}>

                                        </div>

                                        <div>
                                            <div style={{ opacity: "0.7", textWrap: "wrap" }} dangerouslySetInnerHTML={{ __html: _data.Description }}>

                                                {/* {_data.Description.substr(0, 90) + "..."} */}
                                            </div>
                                            <div style={{ textAlign: "end" }}>
                                                <a href={_data.GithubLink} target="_blank" style={{ textDecoration: "none", color: "black" }}>

                                                    <i className={`devicon-${"github"}-plain colored`}>
                                                        <b style={{ fontSize: "large" }}>GitHub</b>
                                                    </i>

                                                </a>
                                            </div>
                                        </div>
                                    </div> : null
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
