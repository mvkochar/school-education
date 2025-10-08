import './css/About.css'

const About = () => {
    return (
        <>
            <main className='about-main d-f'>
                <div>
                    <p className="page-bl-above">Overview</p>
                    <h1 className="page-bl-title">Welcome to Little Learners <br /> Academy</h1>
                </div>
                <p className="page-bl-desc">
                    A leading kinder garden school dedicated to providing
                    a nurturing and stimulating environment for young learners.
                    With a commitment to excellence in early education, we believe
                    in shaping curious minds and building a strong foundation for
                    a lifelong love of learning. Our holistic approach fosters intellectual,
                    social, emotional, and physical development, ensuring that each child
                    reaches their full potential.
                </p>
            </main>
            <section className='about-mission'>
                <p className="page-bl-above">Mission & Visions</p>
                <h2 className="page-bl-title">Our Mission & Visions</h2>
                <p className="page-bl-desc">
                    We are here to provide a nurturing and inclusive environment
                    where young minds can thrive, fostering a love for learning
                    and personal growth.
                </p>
                <div className="about-mission-box d-f">
                    <div className="about-mission-item">
                        <div className="d-f jc-sb align-center">
                            <h3 className="mission-item-title">Mission</h3>
                            <div><img src="/images/mission.png" alt="mission" /></div>
                        </div>
                        <p className="mission-item-desc">
                            At Little Learners Academy, our mission is to inspire a passion
                            for learning and empower young minds to become confident, compassionate,
                            and creative individuals. We strive to create a safe and inclusive space
                            where children thrive academically, socially, and emotionally, setting
                            the stage for a successful educational journey.
                        </p>
                    </div>
                    <div className="about-mission-item">
                        <div className="d-f jc-sb align-center">
                            <h3 className="mission-item-title">Vision</h3>
                            <div><img src="/images/vision.png" alt="vision" /></div>
                        </div>
                        <p className="mission-item-desc">
                            Our vision is to be a beacon of educational excellence, where children
                            are encouraged to explore, discover, and express their unique talents.
                            We aim to foster a generation of lifelong learners equipped with critical
                            thinking, empathy, and a deep appreciation for diversity.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About