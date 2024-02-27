"use client"
import styles from "@/app/CSS/project.module.css"
import axios from "axios";
import Image from "next/image"
import { Key, useEffect, useState } from "react";
import projectJSON from "@/utils/mydata.myprojects.json"

export default function Project() {
    const [tag, settag] = useState<string>("Personal")
    type projectS = {
        _id: {
            $oid: string
        },
        Image: string,
        Name: string,
        Description: string,
        Tools: string[],
        GithubLink: string,
        __v: Number
    }

    const [projects, setprojects] = useState<projectS[]>();


    function loadFun() {
        setprojects(projectJSON)
    }

    useEffect(() => {
        loadFun()
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
                <div className={styles.projectItems}>
                    {
                        projects?.map((_data: any, i) => {
                            return (
                                _data.tag == tag ?
                                    <div className={styles.projectSingleItem} key={i}>
                                        <div>
                                            <b>{_data.Name}</b>
                                        </div>
                                        <div>
                                            <Image src={_data.Image} alt="Na" width={300} height={150} ></Image>
                                        </div>
                                        <div style={{ textAlign: "center", padding: "2% 0" }}>
                                            {
                                                _data.Tools.map((icons: any, j: Key | null | undefined) => {
                                                    return (
                                                        <i className={`devicon-${icons}-plain colored`} key={j}></i>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div style={{ opacity: "0.7" }}>
                                            {_data.Description.substr(0, 90) + "..."}
                                        </div>
                                        <div>
                                            <a href={_data.GithubLink} target="_blank" style={{ textDecoration: "none", color: "white" }}>
                                                <i className={`devicon-${"github"}-plain colored`}></i>
                                            </a>
                                        </div>
                                    </div> : null
                            )
                        })
                    }
                </div>
                <div className={styles.ScrollButton}>
                    <i className='bx bxs-chevron-right-circle'></i>
                </div>
            </div>
        </div>
    )
}
