import styles from "@/app/CSS/header.module.css"
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <div className={styles.navSection}>
        <div className={styles.navName}>
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <h3>Prathamesh Doni </h3>
          </Link>
        </div>
        <ul className={styles.navSectionList}>
          <li className={styles.navSectionListItems}><Link href="#aboutSection"><div>About</div></Link></li>
          <li className={styles.navSectionListItems}><Link href="#servicesSection"><div>Services</div></Link></li>
          <li className={styles.navSectionListItems}><Link href="#skillSection"><div>Skills</div></Link></li>
          <li className={styles.navSectionListItems}><Link href="#projectSection"><div>Projects</div></Link></li>
          <li className={styles.navSectionListItems}><Link href="#eduSection"><div>Qualification</div></Link></li>
        </ul>
        <div className={styles.navMenuIcon}>
          <i className='bx bx-menu'></i>
        </div>
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
          <h1>I'm Prathamesh </h1>
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
