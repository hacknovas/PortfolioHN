"use client"
import styles from "@/app/CSS/project.module.css"
import axios from "axios";
import Image from "next/image"
import { useEffect, useState } from "react";
import projectJSON from "@/utils/mydata.myprojects.json"

export default function Project() {

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
        console.log(projectJSON);
        setprojects(projectJSON)
    }

    useEffect(() => {
        loadFun()
    }, [])


    return (
        <div className={styles.projectSection}>
            <div className={styles.sectionIntro}>What I Created? </div>
            <div className={styles.sectionName}>Project Showcase</div>
            <div className={styles.projectSectionDiv}>
                <div className={styles.projectType}>
                    <div >Personal</div>
                    <div>Academic</div>
                </div>
                <div className={styles.projectItems}>

                    {
                        projects?.map((_data: any) => {
                            return <div>
                                <p>{_data.Name}</p>
                                <div>
                                    <Image src={_data.Image} alt="Na" height={100} width={100}></Image>
                                    <div>{_data.Tools}</div>
                                </div>
                                <p>
                                    {_data.Description}
                                </p>
                                <p>{_data.GithubLink}</p>
                            </div>
                        })
                    }

                </div>
                <div className={styles.ScrollButton}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAc5JREFUSEu11UuoTVEcx/HPHaFQlEcpDJAMyFSKifLIwDW4SphIJFLKyDMzZSBSMmOgDHS7dVPqDjxHBmYeSQYmykAp5W3/a5/slrX2PufW2bOzzvr/v//nb40Y8jcyZP+6ADOwG1uxDsvxB+/xAvdxDz9KgbYBtuF67bQt0bc4jKncpRLgfBXpuQHK9xuncDm1yQEu4OwAzptXT+BK8yAF7MREwfklHMCiFnhksglPeneagDl4g8UZB9dwDCvxqHCnZ/a6avxafI+DJuBI3dRcgB+xAe+wAs+woCWTXRhPAZPY3mLUhKyuMylBbuJQCviAJR3NDUjUOMrQBokdWZ8CvmJWH9PzCRsbkKeYn9h9rqZpXgr4gtnTAETT01KFr7kpINJe1QFIo885DxcvsSYF3MGejib3U/9wcbuauP0pYB9uFQCDTFC4GKsyuJsCosGvsDQDCdE7Wk/Ow2pfFrZkGssai/YtBcTvLdVCPSgYh5Dt7djikIrNeJyTit7ZaVzsY5pyV47javOPklyfqWQkVLXrQer5+oWTqZLmStSE78CNPrY7HpyDiN7893VFOBOjtUZF45bVT2aI3vO6XyFqP0sl7QJMsxX/zIYO+AtJ71YZvcQVbwAAAABJRU5ErkJggg==" />
                </div>
            </div>
        </div>
    )
}
