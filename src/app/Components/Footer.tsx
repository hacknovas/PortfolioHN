import styles from "@/app/CSS/footer.module.css"

export default function Footer() {
    return (
        <div>
            <div id="#contactMeSection" className={styles.contactSection}>
                <div className={styles.contactInfo}>
                    <h3>Contact info</h3>
                    <p><i className='bx bxs-map'></i> Pune, India</p>
                    <p><i className='bx bxs-envelope'></i> creatives.doni@gmail.com</p>
                    <p><i className='bx bxs-phone'></i>
                        <p>
                            +91 8668260714
                            <br />
                            +91 9028680610
                        </p>
                    </p>
                    <p>Follow me On</p>
                    <div>
                        <i className='bx bxl-linkedin'></i>
                        <i className='bx bxl-github'></i>
                        <i className='bx bxl-instagram'></i>
                    </div>
                </div>

                <div className={styles.contactMe}>
                    <h3>Contact Me</h3>
                    <form >
                        <div>
                            <label htmlFor="Name">Name: </label>
                            <input type="text" name="" id="Name" />
                        </div>
                        <div>
                            <label htmlFor="Email">Email: </label>
                            <input type="email" name="" id="Email" />
                            <label htmlFor="Phone">Phone: </label>
                            <input type="text" name="" id="Phone" />
                        </div>
                        <div>
                            <label htmlFor="Message">Your Message:</label>
                            <br /><textarea name="" id="Message" cols={40} rows={8}></textarea>
                        </div>
                        <div>
                            <button type="submit" disabled>Submit</button>
                        </div>
                    </form>

                </div>
            </div>
            <div>Footer</div>
        </div>
    )
}
