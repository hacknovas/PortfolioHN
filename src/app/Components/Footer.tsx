import styles from "@/app/CSS/footer.module.css"

export default function Footer() {
    return (
        <div>
            <div id="#contactMeSection" className={styles.contactSection}>
                <div>Contact info
                    <p><i className='bx bxs-map'></i> Pune, India</p>
                    <p>creatives.doni@gmail.com</p>
                    <p><i className='bx bxs-phone'></i>
                        +91 8668260714
                        <br />
                        +91 9028680610
                    </p>
                    <p>Follow me On</p>
                    <i className='bx bxl-linkedin'></i>
                    <i className='bx bxl-github'></i>
                    <i className='bx bxl-instagram'></i>
                </div>

                <div>Contact Me
                    <form >
                        <div>
                            <label htmlFor="Name">Name: </label>
                            <input type="text" name="" id="Name" />
                        </div>
                        <div>
                            <label htmlFor="Phone">Phone</label>
                            <input type="text" name="" id="Phone" />
                            <label htmlFor="Email">Email:</label>
                            <input type="text" name="" id="Email" />
                        </div>
                        <div>
                            <label htmlFor="Message">Your Message:</label>
                            <br /><textarea name="" id="Message" cols={40} rows={8}></textarea>
                        </div>
                    </form>
                </div>
            </div>
            <div>Footer</div>
        </div>
    )
}
