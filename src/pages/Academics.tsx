import './css/Academics.css'

const Academics = () => {
    const nums = [1, 2, 3, 4]

    return (
        <>
            <main className='academics-main d-f align-center'>
                <div>
                    <p className="page-bl-above">Academics</p>
                    <h1 className="page-bl-title">Nurturing Young Minds for Success</h1>
                </div>
                <p className="page-bl-desc">
                    Welcome to our Academics page, where we take pride
                    in providing a comprehensive and stimulating educational
                    experience for your child. Our kindergarten school's academic
                    program is thoughtfully designed to foster a love for learning
                    while building a strong foundation of essential skills and knowledge.
                    From language arts and mathematics to science and social studies,
                    our curriculum is carefully crafted to spark curiosity and encourage
                    active exploration.
                </p>
            </main>
            <section className='academics-features'>
                <p className="page-bl-above">Our Features</p>
                <h2 className="page-bl-title">Our Special Features</h2>
                <p className="page-bl-desc">
                    Our kinder garden school provides a nurturing and stimulating environment,
                    fostering a love for learning that lasts a lifetime. Join us as we embark
                    on an exciting educational journey together!
                </p>
                <div className="academics-features-box d-f">
                    <div className="academics-features-item">
                        <div className='features-item-icon'>
                            <img src="/images/academics-features/1.png" alt="academics-features1" />
                        </div>
                        <div className="features-item-content">
                            <h3 className="features-item-title">Thematic Learning</h3>
                            <p className="features-item-desc">
                                Our curriculum is centered around engaging themes
                                that capture children's imaginations. Each theme
                                integrates multiple subjects, making learning enjoyable and relevant.
                            </p>
                        </div>
                    </div>
                    <div className="academics-features-item">
                        <div className='features-item-icon'>
                            <img src="/images/academics-features/2.png" alt="academics-features2" />
                        </div>
                        <div className="features-item-content">
                            <h3 className="features-item-title">STEAM Education</h3>
                            <p className="features-item-desc">
                                We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics)
                                programs that promote hands-on exploration, critical thinking, and problem-solving skills.
                            </p>
                        </div>
                    </div>
                    <div className="academics-features-item">
                        <div className='features-item-icon'>
                            <img src="/images/academics-features/3.png" alt="academics-features3" />
                        </div>
                        <div className="features-item-content">
                            <h3 className="features-item-title">Language Immersion</h3>
                            <p className="features-item-desc">
                                Through language immersion programs, children have
                                the opportunity to learn a second language, enhancing
                                cognitive development and global awareness.
                            </p>
                        </div>
                    </div>
                    <div className="academics-features-item">
                        <div className='features-item-icon'>
                            <img src="/images/academics-features/4.png" alt="academics-features4" />
                        </div>
                        <div className="features-item-content">
                            <h3 className="features-item-title">Art and Creativity</h3>
                            <p className="features-item-desc">
                                Art is celebrated at Little Learners Academy. Our art-focused
                                activities encourage self-expression, creativity, and the
                                appreciation of various art forms.
                            </p>
                        </div>
                    </div>
                    <div className="academics-features-item">
                        <div className='features-item-icon'>
                            <img src="/images/academics-features/5.png" alt="academics-features5" />
                        </div>
                        <div className="features-item-content">
                            <h3 className="features-item-title">Outdoor Education</h3>
                            <p className="features-item-desc">
                                Our expansive outdoor learning spaces provide a stimulating
                                environment for children to explore nature, fostering a connection
                                with the environment.
                            </p>
                        </div>
                    </div>
                    <div className="academics-features-item">
                        <div className='features-item-icon'>
                            <img src="/images/academics-features/6.png" alt="academics-features6" />
                        </div>
                        <div className="features-item-content">
                            <h3 className="features-item-title">Play-Based Learning</h3>
                            <p className="features-item-desc">
                                Play is an integral part of early childhood education.
                                Our play-based approach enhances social skills, emotional
                                development, and imaginative thinking.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='academics-learn'>
                <p className="page-bl-above">Our features</p>
                <h2 className="page-bl-title">What Students Learn</h2>
                <p className="page-bl-desc">
                    At Little Learners Academy, we strive to cultivate
                    a love for learning and equip children with essential
                    skills for their future success. Our academic programs
                    cover a wide range of subjects, allowing students to develop
                    a strong foundation and discover their interests. Some key areas
                    of learning include
                </p>
                <div className="academics-learn-box d-f">
                    <div className="academics-learn-item">
                        <div><img src="/images/subjects/1.png" alt="subjects1" /></div>
                        <h3 className="learn-item-title">Language Arts</h3>
                        <p className="learn-item-desc">
                            Reading, writing, storytelling, and communication skills.
                        </p>
                    </div>
                    <div className="academics-learn-item">
                        <div><img src="/images/subjects/2.png" alt="subjects2" /></div>
                        <h3 className="learn-item-title">Mathematics</h3>
                        <p className="learn-item-desc">
                            Number sense, basic operations, problem-solving, and logic.
                        </p>
                    </div>
                    <div className="academics-learn-item">
                        <div><img src="/images/subjects/3.png" alt="subjects3" /></div>
                        <h3 className="learn-item-title">Science</h3>
                        <p className="learn-item-desc">
                            Exploring the natural world through hands-on experiments and investigations.
                        </p>
                    </div>
                    <div className="academics-learn-item">
                        <div><img src="/images/subjects/4.png" alt="subjects4" /></div>
                        <h3 className="learn-item-title">Social Studies</h3>
                        <p className="learn-item-desc">
                            Cultivating an understanding of diverse cultures and communities.
                        </p>
                    </div>
                    <div className="academics-learn-item">
                        <div><img src="/images/subjects/5.png" alt="subjects5" /></div>
                        <h3 className="learn-item-title">Arts and Crafts</h3>
                        <p className="learn-item-desc">
                            Encouraging creativity through various art forms and crafts.
                        </p>
                    </div>
                    <div className="academics-learn-item">
                        <div><img src="/images/subjects/6.png" alt="subjects6" /></div>
                        <h3 className="learn-item-title">Physical Education</h3>
                        <p className="learn-item-desc">
                            Promoting physical fitness, coordination, and teamwork.
                        </p>
                    </div>
                </div>
            </section>
            <section className='academics-gallery'>
                <p className="page-bl-above">Our Gallery</p>
                <p className="page-bl-title">Our Rooms Gallery</p>
                <p className="page-bl-desc">
                    Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school.
                </p>
                <div className="academics-gallery-tabs d-f">
                    <button className='tab-btn tab-btn__active'>All</button>
                    <button className='tab-btn'>Classrooms</button>
                    <button className='tab-btn'>Library</button>
                    <button className='tab-btn'>Science Lab</button>
                    <button className='tab-btn'>Computer Lab</button>
                    <button className='tab-btn'>Garden and Nature Area</button>
                </div>
                <div className="academy-gallery-box d-f">
                    <div>
                        <div className="gallery-bl-pics d-f">
                            {
                                nums.map((num) => {
                                    return (
                                        <div key={`classrooms${num}`}>
                                            <img src={`/images/gallery/classrooms/${num}.png`} alt={`classrooms${num}`} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="gallery-bl-content">
                            <div className="d-f jc-sb align-center">
                                <h3 className="gallery-bl-title">Classrooms</h3>
                                <div className="gallery-bl-actions d-f">
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
                            <p className="gallery-bl-desc">
                                Our well-equipped classrooms are designed to provide
                                a nurturing and stimulating learning environment.
                                Each classroom is thoughtfully arranged to inspire creativity,
                                curiosity, and engagement.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="gallery-bl-pics d-f">
                            {
                                nums.map((num) => {
                                    return (
                                        <div key={`library${num}`}>
                                            <img src={`/images/gallery/classrooms/${num}.png`} alt={`classrooms${num}`} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="gallery-bl-content">
                            <div className="d-f jc-sb align-center">
                                <h3 className="gallery-bl-title">Library</h3>
                                <div className="gallery-bl-actions d-f">
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
                            <p className="gallery-bl-desc">
                                Our expansive library is a treasure trove of books,
                                fostering a love for reading and supporting students'
                                literacy development.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="gallery-bl-pics d-f">
                            {
                                nums.map((num) => {
                                    return (
                                        <div key={`library${num}`}>
                                            <img src={`/images/gallery/science-lab/${num}.png`} alt={`classrooms${num}`} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="gallery-bl-content">
                            <div className="d-f jc-sb align-center">
                                <h3 className="gallery-bl-title">Science Lab</h3>
                                <div className="gallery-bl-actions d-f">
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
                            <p className="gallery-bl-desc">
                                Our hands-on science lab allows students to conduct experiments
                                and explore scientific concepts in a fun and interactive way.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="gallery-bl-pics d-f">
                            {
                                nums.map((num) => {
                                    return (
                                        <div key={`library${num}`}>
                                            <img src={`/images/gallery/computer-lab/${num}.png`} alt={`classrooms${num}`} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="gallery-bl-content">
                            <div className="d-f jc-sb align-center">
                                <h3 className="gallery-bl-title">Computer Lab</h3>
                                <div className="gallery-bl-actions d-f">
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
                            <p className="gallery-bl-desc">
                                Equipped with age-appropriate technology, the computer lab
                                enhances students' digital literacy and computational skills
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="gallery-bl-pics d-f">
                            {
                                nums.map((num) => {
                                    return (
                                        <div key={`library${num}`}>
                                            <img src={`/images/gallery/garden-area/${num}.png`} alt={`classrooms${num}`} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="gallery-bl-content">
                            <div className="d-f jc-sb align-center">
                                <h3 className="gallery-bl-title">Garden and Nature Area</h3>
                                <div className="gallery-bl-actions d-f">
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
                            <p className="gallery-bl-desc">
                                Our garden and nature area offer an opportunity 
                                for children to connect with nature and learn 
                                about plants and the environment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Academics