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
                <div style={{ display: "inline-block" }}>
                    <Image src="https://skillicons.dev/icons?i=cpp,js,ts,html,css,bootstrap,git,mysql,mongodb,express,react,redux,nextjs,nodejs&perline=7&theme=dark" width={0} height={0} alt="NA" objectFit="contain" layout="responsive" />
                    <Image src="https://skillicons.dev/icons?i=solidity,go,ipfs,pinata,truffle,ethereum,hyperledger,etherjs&perline=7&theme=dark" width={500} height={300} alt="NA" />
                    <Image src="https://skillicons.dev/icons?i=jenkins,git,kubernetes,docker,linux,postman,terraform,vercel&perline=7&theme=dark" width={500} height={300} alt="NA" />
                </div>
            </div>
        </div>
    )
}
