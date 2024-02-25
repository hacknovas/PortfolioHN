import styles from "@/app/CSS/header.module.css"
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <div className={styles.navSection}>
        <h3 className={styles.navName}>
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>Prathamesh Doni</Link>
        </h3>
        <ul className={styles.navSectionList}>
          <li className={styles.navSectionListItems}><Link href="#aboutSection">About</Link></li>
          <li className={styles.navSectionListItems}><Link href="#servicesSection">Services</Link></li>
          <li className={styles.navSectionListItems}><Link href="#skillSection">Skills</Link></li>
          <li className={styles.navSectionListItems}><Link href="#projectSection">Projects</Link></li>
          <li className={styles.navSectionListItems}><Link href="#eduSection">Qualification</Link></li>
        </ul>
      </div>
      <div className={styles.headSection}>
        <ul className={styles.headSectionItems}>
          <Link href="https://www.linkedin.com/in/prathamesh-doni-15aab8209/">
            <div className={styles.headSectionEachItem}>
              <i className='bx bxl-linkedin'></i>
            </div>
          </Link>

          <Link href="https://github.com/hacknovas">
            <div className={styles.headSectionEachItem}>
              <i className='bx bxl-github'></i>
            </div>
          </Link>

          <Link href="">
            <div className={styles.headSectionEachItem}>
              <i className='bx bxl-instagram'></i>
            </div>
          </Link>
        </ul>

        <div className={styles.headSectionIntro}>
          <div>Hello,</div>
          <h1>I'm Prathamesh</h1>
          <h3>Capable of shaping concepts into execution.</h3>
        </div>

        <div className={styles.headSectionConnect}>
          <Link href="#contactMeSection">
            <div className={styles.headSectionEachItem}>
              <i className='bx bxl-gmail'></i>
            </div>
          </Link>
          Ask me..!
        </div>
      </div>
    </div>
  )
}
