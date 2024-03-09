"use client"
import styles from "@/app/CSS/footer.module.css"
import axios from "axios";
import Link from "next/link"
import { useState } from "react"

export default function Footer() {

    const [Name, setName] = useState<String>();
    const [Phone, setPhone] = useState<String>();
    const [Message, setMessage] = useState<String>();
    const [Email, setEmail] = useState<String>();

    const connecthandler = async (e: any) => {
        e.preventDefault();
        try {
            const req = await axios.post("api/connectme", { Name, Phone, Message, Email }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })


        } catch (error) {
            alert(error);
        }
    }

    return (
        <div className={styles.lastFooterSection}>
            <div id="contactMeSection" className={styles.contactSection}>
                <div className={styles.contactInfo}>
                    <h3>Contact info</h3>
                    <div><i className='bx bxs-map'></i> Pune, India</div>
                    <div><i className='bx bxs-envelope'></i> creatives.doni@gmail.com</div>
                    <div><i className='bx bxs-phone'></i>
                        <div>
                            +91 8668260714
                            <br />
                            +91 9028680610
                        </div>
                    </div>
                    <p>Follow me On</p>
                    <div>
                        <Link href="https://www.linkedin.com/in/prathamesh-doni-15aab8209/">
                            <i className='bx bxl-linkedin'></i>
                        </Link>

                        <Link href="https://github.com/hacknovas">
                            <i className='bx bxl-github'></i>
                        </Link>

                        <Link href="">
                            <i className='bx bxl-instagram'></i>
                        </Link>
                    </div>
                </div>

                <div className={styles.contactMe}>
                    <h3>Contact Me</h3>
                    <form onSubmit={connecthandler}>
                        <div>
                            <label htmlFor="Name">Name: </label>
                            <input type="text" name="Name" id="Name" onChange={(e) => {
                                setName(e.target.value)
                            }} />
                        </div>
                        <div>
                            <label htmlFor="Email">Email: </label>
                            <input type="email" name="Email" id="Email" onChange={(e) => {
                                setEmail(e.target.value)
                            }} /><br />
                            <label htmlFor="Phone">Phone: </label>
                            <input type="text" name="Phone" id="Phone" onChange={(e) => {
                                setPhone(e.target.value)
                            }} />
                        </div>
                        <div>
                            <label htmlFor="Message">Your Message:</label>
                            <br /><textarea name="Message" id="Message" cols={40} rows={8} onChange={(e) => {
                                setMessage(e.target.value)
                            }}></textarea>
                        </div>
                        <div>
                            <button type="submit" style={{ padding: "7px " }}>Submit</button>
                        </div>
                    </form>

                </div>
            </div>

            <div className={styles.footerSection}>
                build by <Link href="https://www.github.com/hacknovas">
                    @Prathamesh Doni
                </Link>

            </div>
        </div>
    )
}
