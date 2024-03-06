"use client"
import styles from "@/app/CSS/header.module.css"
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [toggle, settoggle] = useState(false)
  return (
    <div>
      <div className={styles.navSection}>
        <div className={styles.navName}>
          <Link href="/" style={{ textDecoration: "none", color: "black" }}>
            <h3>Prathamesh Doni </h3>
          </Link>
        </div>
        <ul id="toggleCSS" className={styles.navSectionList}>
          <li className={styles.navSectionListItems}><Link href="#aboutSection"><div>About</div></Link></li>
          <li className={styles.navSectionListItems}><Link href="#servicesSection"><div>Services</div></Link></li>
          <li className={styles.navSectionListItems}><Link href="#skillSection"><div>Skills</div></Link></li>
          <li className={styles.navSectionListItems}><Link href="#projectSection"><div>Projects</div></Link></li>
          <li className={styles.navSectionListItems}><Link href="#eduSection"><div>Qualification</div></Link></li>
        </ul>
        <div className={styles.navMenuIcon}>
          <i className='bx bx-menu' onClick={() => {
            toggle ? document.querySelector<HTMLElement>("#toggleCSS")!.style.right = "-900px" : document.querySelector<HTMLElement>("#toggleCSS")!.style.right = "0px";
            !toggle ? settoggle(true) : settoggle(false);
          }}></i>
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
          <div><b style={{ opacity: "0.7" }}>Hello</b></div>
          <h1>I'm Prathamesh </h1>
          <h3 style={{ opacity: "0.8" }}>Capable of shaping concepts into execution.</h3>
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
