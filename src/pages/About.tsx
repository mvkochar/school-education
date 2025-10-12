import { TeamMember } from '../components'
import TeamMembersList from '../db/TeamMembersList'
import './css/About.css'

const About = () => {
    return (
        <>
            <main className='about-main d-f align-center'>
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
            <section className="about-achievements">
                <p className="page-bl-above">Our Achievements</p>
                <h2 className="page-bl-title">Our Awards and Recognitions</h2>
                <p className="page-bl-desc">
                    Little Learners Academy takes pride in our commitment to delivering
                    high-quality education and outstanding student experiences.
                    We are honored to have received various awards and recognitions
                    for our dedication to early childhood education. These accolades
                    reflect our team's relentless efforts in creating an exceptional
                    learning environment for our students.
                </p>
                <div className="about-achievements-box d-f">
                    <div className="about-achievements-item">
                        <div className='achievements-item-icon'><img src="/images/awards1.png" alt="awards1" /></div>
                        <div className="achievements-item-content">
                            <h3 className="achievements-item-title">Outstanding Early Childhood Education Awar</h3>
                            <p className="achievements-item-desc">
                                Presented by the National Association for the
                                Education of Young Children (NAEYC) in recognition
                                of Little Learners Academy's commitment to delivering
                                exceptional early childhood education and fostering
                                a nurturing learning environment.
                            </p>
                        </div>
                    </div>
                    <div className="about-achievements-item">
                        <div className='achievements-item-icon'><img src="/images/awards2.png" alt="awards2" /></div>
                        <div className="achievements-item-content">
                            <h3 className="achievements-item-title">Innovative STEAM Education Award</h3>
                            <p className="achievements-item-desc">
                                Awarded by the Education Excellence Association
                                for our pioneering efforts in introducing innovative
                                STEAM (Science, Technology, Engineering, Arts, and Mathematics)
                                programs that ignite creativity and critical thinking in young learners.
                            </p>
                        </div>
                    </div>
                    <div className="about-achievements-item">
                        <div className='achievements-item-icon'><img src="/images/awards3.png" alt="awards3" /></div>
                        <div className="achievements-item-content">
                            <h3 className="achievements-item-title">Environmental Stewardship Award</h3>
                            <p className="achievements-item-desc">
                                Received from the Green Earth Society for our dedication
                                to environmental education, sustainable practices, and
                                fostering a love for nature in our students.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="about-achievements-actions d-f jc-sb">
                    <h5 className="actions-name">8 More Awards</h5>
                    <div className="actions-wr d-f">
                        <button className='btn-clear d-b'>
                            <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="56" height="56" rx="7" fill="white" />
                                <rect x="1" y="1" width="56" height="56" rx="7" stroke="#333333" stroke-width="2" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M36.5 29C36.5 29.6213 35.9963 30.125 35.375 30.125H25.4181L28.6547 33.0641C29.1026 33.4947 29.1166 34.2069 28.6859 34.6547C28.2553 35.1026 27.5431 35.1166 27.0953 34.6859L21.8453 29.8109C21.6247 29.5988 21.5 29.306 21.5 29C21.5 28.694 21.6247 28.4012 21.8453 28.1891L27.0953 23.3141C27.5431 22.8834 28.2553 22.8974 28.6859 23.3453C29.1166 23.7931 29.1026 24.5053 28.6547 24.9359L25.4181 27.875L35.375 27.875C35.9963 27.875 36.5 28.3787 36.5 29Z" fill="#333333" />
                            </svg>
                        </button>
                        <button className='btn-clear d-b'>
                            <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="56" height="56" rx="7" fill="white" />
                                <rect x="1" y="1" width="56" height="56" rx="7" stroke="#333333" stroke-width="2" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 29C21.5 28.3787 22.0037 27.875 22.625 27.875H32.5819L29.3453 24.9359C28.8974 24.5053 28.8834 23.7931 29.3141 23.3453C29.7447 22.8974 30.4569 22.8834 30.9047 23.3141L36.1547 28.1891C36.3753 28.4012 36.5 28.694 36.5 29C36.5 29.306 36.3753 29.5988 36.1547 29.8109L30.9047 34.6859C30.4569 35.1166 29.7447 35.1026 29.3141 34.6547C28.8834 34.2069 28.8974 33.4947 29.3453 33.0641L32.5819 30.125H22.625C22.0037 30.125 21.5 29.6213 21.5 29Z" fill="#333333" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
            <section className="about-history">
                <p className="page-bl-above">Our Progressive Journey</p>
                <h2 className="page-bl-title">Our History</h2>
                <p className="page-bl-desc">
                    Founded with a passion for early education in 2005,
                    our kindergarten school boasts a rich history of empowering
                    young learners to reach their potential through innovative
                    teaching methods and a supportive learning environment
                </p>
                <div className="about-history-content d-f">
                    <div className='about-history-line'>
                        <img src="/images/line1.png" alt="line1" />
                    </div>
                    <div className="about-history-box d-f">
                        <div className="about-history-item d-f">
                            <div><img src="/images/history1.png" alt="history1" width={448.31} /></div>
                            <div>
                                <h3 className="history-item-title">Resilience and Future Horizons</h3>
                                <p className="history-item-desc">
                                    Adapting to new challenges, we remained committed
                                    to our mission of providing an exceptional early education.
                                    Looking ahead with optimism, we envision a future filled
                                    with boundless possibilities as we continue shaping the
                                    leaders and thinkers of tomorrow.
                                </p>
                            </div>
                        </div>
                        <div className="about-history-item d-f">
                            <div><img src="/images/history2.png" alt="history2" width={448.31} /></div>
                            <div>
                                <h3 className="history-item-title">Innovation and Technology</h3>
                                <p className="history-item-desc">
                                    Innovation became the driving force behind our kindergarten's
                                    progress from 2016 to 2020. Embracing the latest educational
                                    technologies, we crafted engaging and interactive learning
                                    experiences for our students.
                                </p>
                            </div>
                        </div>
                        <div className="about-history-item d-f">
                            <div><img src="/images/history3.png" alt="history3" width={448.31} /></div>
                            <div>
                                <h3 className="history-item-title">Expansion and Recognition</h3>
                                <p className="history-item-desc">
                                    These years marked as a period of expansion and
                                    recognition for our school. As we extended our
                                    facilities and enhanced our curriculum, we received
                                    accolades for our commitment to quality education and
                                    innovative teaching methodologies.
                                </p>
                            </div>
                        </div>
                        <div className="about-history-item d-f">
                            <div><img src="/images/history4.png" alt="history4" width={448.31} /></div>
                            <div>
                                <h3 className="history-item-title">Inception and Growth</h3>
                                <p className="history-item-desc">
                                    Established in 2005, our kindergarten school
                                    began its journey with a vision to provide
                                    a nurturing space for young minds to explore,
                                    learn, and grow. Over the next five years,
                                    we witnessed significant growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='about-team'>
                <p className="page-bl-above">Our Teachers With Experties</p>
                <h2 className="page-bl-title">Our Team Members</h2>
                <p className="page-bl-desc">
                    At Little Learners Academy, our teaching team is the heart 
                    of our educational journey. We take great pride in employing 
                    highly qualified and passionate educators who possess a deep 
                    understanding of early childhood development. Our teachers 
                    create a warm and engaging atmosphere, encouraging curiosity, 
                    instilling confidence, and fostering a love for learning.
                </p>
                <div className="about-team-box d-f">
                    {
                        TeamMembersList.map((member)=> {
                            return (
                                <TeamMember
                                    key={`team-member${member.id}`}
                                    {...member}
                                />
                            )
                        })
                    }
                </div> 
            </section>
        </>
    )
}

export default About