import "./css/Contact.css"

const Contact = () => {
    return (
        <>
            <main className="contact-main d-f align-center">
                <div>
                    <p className="page-bl-above">Contact Us</p>
                    <h1 className="page-bl-title">Feel Free To Connect With Us</h1>
                </div>
                <div>
                    <p className="page-bl-desc">
                        We value open communication and are eager to assist you
                        with any inquiries. Feel free to reach out to us through
                        any of the following contact methods
                    </p>
                    <div className="contact-main-box d-f">
                        <div className="contact-main-item d-f align-center">
                            <div><img src="/images/email.png" alt="email" /></div>
                            <p className="desc">hello@littlelearners.com</p>
                        </div>
                        <div className="contact-main-item d-f align-center">
                            <div><img src="/images/phone.png" alt="phone" /></div>
                            <p className="desc">+91 91813 23 2309</p>
                        </div>
                        <div className="contact-main-item d-f align-center">
                            <div><img src="/images/location.png" alt="location" /></div>
                            <p className="desc">Somewhere in the World</p>
                        </div>
                        <div className="contact-main-item d-f align-center">
                            <div><img src="/images/clock.png" alt="clock" /></div>
                            <p className="desc">Office Hours - 9am - 6 pm</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Contact