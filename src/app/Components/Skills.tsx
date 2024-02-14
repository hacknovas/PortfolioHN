import styles from "@/app/CSS/skill.module.css"
import Image from "next/image"

export default function Skills() {
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
                <Image src="https://skillicons.dev/icons?i=kubernetes,jenkins,git,kubernetes,docker,cpp,html,ipfs,js,linux,mongodb,mysql,nodejs,postman,react,css,express,go,nextjs,bootstrap,redux,solidity,terraform,ts,vercel&perline=7&theme=dark" width={500} height={300} alt="NA" />
            </div>
        </div>
    )
}
