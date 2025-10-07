import { FaqItem } from '../components'
import FaqItemsList from '../db/FaqItemsList'
import './css/Home.css'

const Home = () => {
  return (
    <>
      <main className='home-main d-f align-center'>
        <div><img src="/images/home-main.png" alt="home-main" /></div>
        <div>
          <p className="home-main-above">Welcome to Little Learners Academy</p>
          <h1 className="home-main-title">Where Young Minds Blossom and <span>Dreams Take Flight.</span> </h1>
          <p className="home-main-desc">
            Our kinder garden school provides a nurturing and stimulating
            environment, fostering a love for learning that lasts a lifetime.
            Join us as we embark on an exciting educational journey together!
          </p>
          <div className="home-main-stats d-f jc-sb">
            <dl>
              <dt>+7000</dt>
              <dd>Students Passed Out</dd>
            </dl>
            <dl>
              <dt>+37</dt>
              <dd>Awards & Recognitions</dd>
            </dl>
            <dl>
              <dt>+15</dt>
              <dd>Experience Educators</dd>
            </dl>
          </div>
        </div>

      </main>
      <section className='home-benefits'>
        <p className="page-bl-above">Children Deserve Bright Future</p>
        <h2 className="page-bl-title">Our Benefits</h2>
        <p className="page-bl-desc">
          With a dedicated team of experienced educators, state-of-the-art facilities,
          and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.
        </p>
        <div className="home-benefits-box d-f">
          <div className="home-benefits-item">
            <div className="benefits-item-icon"><img src="/images/benefits1.png" alt="benefits1" /></div>
            <div className="benefits-item-content">
              <h3 className="benefits-item-title">Holistic Learning Approach</h3>
              <p className="benefits-item-desc">
                Our curriculum focuses on nurturing cognitive, social,
                emotional, and physical development, ensuring a well-rounded education.
              </p>
            </div>
          </div>
          <div className="home-benefits-item">
            <div className="benefits-item-icon"><img src="/images/benefits2.png" alt="benefits2" /></div>
            <div className="benefits-item-content">
              <h3 className="benefits-item-title">Experienced Educators</h3>
              <p className="benefits-item-desc">
                Our passionate and qualified teachers create
                a supportive and stimulating learning environment.
              </p>
            </div>
          </div>
          <div className="home-benefits-item">
            <div className="benefits-item-icon"><img src="/images/benefits3.png" alt="benefits3" /></div>
            <div className="benefits-item-content">
              <h3 className="benefits-item-title">Nurturing Environment</h3>
              <p className="benefits-item-desc">
                We prioritize safety and provide
                a warm and caring atmosphere for every child.
              </p>
            </div>
          </div>
          <div className="home-benefits-item">
            <div className="benefits-item-icon"><img src="/images/benefits4.png" alt="benefits4" /></div>
            <div className="benefits-item-content">
              <h3 className="benefits-item-title">Play-Based Learning</h3>
              <p className="benefits-item-desc">
                We believe in the power of play to foster creativity,
                problem-solving skills, and imagination.
              </p>
            </div>
          </div>
          <div className="home-benefits-item">
            <div className="benefits-item-icon"><img src="/images/benefits5.png" alt="benefits5" /></div>
            <div className="benefits-item-content">
              <h3 className="benefits-item-title">Individualized Attention</h3>
              <p className="benefits-item-desc">
                Our small class sizes enable personalized attention, catering
                to each child's unique needs.
              </p>
            </div>
          </div>
          <div className="home-benefits-item">
            <div className="benefits-item-icon"><img src="/images/benefits6.png" alt="benefits6" /></div>
            <div className="benefits-item-content">
              <h3 className="benefits-item-title">Parent Involvement</h3>
              <p className="benefits-item-desc">
                We foster a strong parent-school partnership
                to ensure seamless communication and collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-testimonials">
        <p className="page-bl-above">Their Happy Words 🤗</p>
        <h2 className="page-bl-title">Our Testimonials</h2>
        <p className="page-bl-desc">
          Our testimonials are heartfelt reflections of the nurturing environment
          we provide, where children flourish both academically and emotionally.
        </p>
        <div className="home-testimonials-content d-f align-cnenter">
          <button className="btn-clear d-b">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="46" height="46" rx="7" fill="white" />
              <rect x="1" y="1" width="46" height="46" rx="7" stroke="#333333" stroke-width="2" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M30 24C30 24.4971 29.5971 24.9 29.1 24.9H21.1345L23.7238 27.2512C24.0821 27.5958 24.0933 28.1655 23.7487 28.5238C23.4042 28.8821 22.8345 28.8933 22.4762 28.5487L18.2762 24.6487C18.0997 24.4791 18 24.2448 18 24C18 23.7552 18.0997 23.5209 18.2762 23.3512L22.4762 19.4512C22.8345 19.1067 23.4042 19.1179 23.7487 19.4762C24.0933 19.8345 24.0821 20.4042 23.7238 20.7487L21.1345 23.1L29.1 23.1C29.5971 23.1 30 23.5029 30 24Z" fill="#333333" />
            </svg>
          </button>
          <div className="home-testimonials-box d-f">
            <div className="home-testimonials-item">
              <div><img src="/images/testimonials-author1.png" alt="testimonials-author1" /></div>
              <p className="testimonials-item-author">Jennifer B</p>
              <div className="testimonials-item-rating d-f">
                {
                  [1, 2, 3, 4, 5].map((val) => {
                    return (
                      <div key={val}><img src="/images/star.png" alt="star" /></div>
                    )
                  })
                }
              </div>
              <p className="testimonials-item-desc">
                Little Learners Academy has been a second home for my child.
                The caring staff and engaging programs have made her excited
                to go to school every day!
              </p>
            </div>
            <div className="home-testimonials-item">
              <div><img src="/images/testimonials-author2.png" alt="testimonials-author2" /></div>
              <p className="testimonials-item-author">David K</p>
              <div className="testimonials-item-rating d-f">
                {
                  [1, 2, 3, 4, 5].map((val) => {
                    return (
                      <div key={val}><img src="/images/star.png" alt="star" /></div>
                    )
                  })
                }
              </div>
              <p className="testimonials-item-desc">
                Little Learners Academy has been a second home for my child.
                The caring staff and engaging programs have made her excited
                to go to school every day!
              </p>
            </div>
            <div className="home-testimonials-item">
              <div><img src="/images/testimonials-author3.png" alt="testimonials-author3" /></div>
              <p className="testimonials-item-author">Emily L</p>
              <div className="testimonials-item-rating d-f">
                {
                  [1, 2, 3, 4, 5].map((val) => {
                    return (
                      <div key={val}><img src="/images/star.png" alt="star" /></div>
                    )
                  })
                }
              </div>
              <p className="testimonials-item-desc">
                My son's social and academic growth has been remarkable
                since joining Little Learners Academy. I am grateful for
                the supportive and dedicated teachers.
              </p>
            </div>
          </div>
          <button className="btn-clear d-b">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="46" height="46" rx="7" fill="white" />
              <rect x="1" y="1" width="46" height="46" rx="7" stroke="#333333" stroke-width="2" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18 24C18 23.5029 18.4029 23.1 18.9 23.1H26.8655L24.2762 20.7487C23.9179 20.4042 23.9067 19.8345 24.2513 19.4762C24.5958 19.1179 25.1655 19.1067 25.5238 19.4512L29.7238 23.3512C29.9003 23.5209 30 23.7552 30 24C30 24.2448 29.9003 24.4791 29.7238 24.6487L25.5238 28.5487C25.1655 28.8933 24.5958 28.8821 24.2513 28.5238C23.9067 28.1655 23.9179 27.5958 24.2762 27.2512L26.8655 24.9H18.9C18.4029 24.9 18 24.4971 18 24Z" fill="#333333" />
            </svg>
          </button>
        </div>
      </section>
      <section className='home-faq'>
        <p className="page-bl-above">Solutions For The Doubts</p>
        <h2 className="page-bl-title">Frequently Asked Questions</h2>
        <p className="page-bl-desc">
          Find all the essential information you need in our FAQ section,
          designed to address the most frequently asked questions and
          help you make informed decisions for your child's education.
        </p>
        <div className="home-faq-box d-f">
          {
            FaqItemsList.map((faq) => {
              return (
                <FaqItem
                  key={`faq${faq.id}`}
                  {...faq}
                />
              )
            })
          }
        </div>
      </section>
      <section className='home-pages'>
        <p className="page-bl-above">Explore More</p>
        <h2 className="page-bl-title">Navigate through our Pages</h2>
        <p className="page-bl-desc">
          Your gateway to discovering a wealth of valuable information about our kindergarten school,
          Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school
        </p>
        <div className="home-pages-box d-f">
          <div className="home-pages-item">
            <h3 className="pages-item-title">About Us</h3>
            <div><img src="/images/divider1.png" alt="divider1.png" /></div>
            <p className="pages-item-desc">
              Discover our Mission, Values, and our unwavering commitment to providing
              the best learning experience for your child. Learn about our passionate
              educators and our engaging approach to early education.
            </p>
            <div className="pages-item-more d-f">
              <p className="more-name">Learn More</p>
              <a href="" className="d-b">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 15C4.5 14.3787 5.00368 13.875 5.625 13.875L21.5819 13.875L15.3453 7.93593C14.8974 7.50529 14.8834 6.79312 15.3141 6.34525C15.7447 5.89738 16.4569 5.88342 16.9047 6.31406L25.1547 14.1891C25.3753 14.4012 25.5 14.694 25.5 15C25.5 15.306 25.3753 15.5988 25.1547 15.8109L16.9047 23.6859C16.4569 24.1166 15.7447 24.1026 15.3141 23.6547C14.8834 23.2069 14.8974 22.4947 15.3453 22.0641L21.5819 16.125L5.625 16.125C5.00368 16.125 4.5 15.6213 4.5 15Z" fill="#262626" />
                </svg>
              </a>
            </div>
          </div>
          <div className="home-pages-item">
            <h3 className="pages-item-title">Academics</h3>
            <div><img src="/images/divider1.png" alt="divider1.png" /></div>
            <p className="pages-item-desc">
              Delve into our comprehensive academic programs designed to stimulate young minds,
              foster creativity, and encourage a love for learning. Explore our well-rounded
              curriculum that nurtures both intellectual and social development.
            </p>
            <div className="pages-item-more d-f">
              <p className="more-name">Learn More</p>
              <a href="" className="d-b">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 15C4.5 14.3787 5.00368 13.875 5.625 13.875L21.5819 13.875L15.3453 7.93593C14.8974 7.50529 14.8834 6.79312 15.3141 6.34525C15.7447 5.89738 16.4569 5.88342 16.9047 6.31406L25.1547 14.1891C25.3753 14.4012 25.5 14.694 25.5 15C25.5 15.306 25.3753 15.5988 25.1547 15.8109L16.9047 23.6859C16.4569 24.1166 15.7447 24.1026 15.3141 23.6547C14.8834 23.2069 14.8974 22.4947 15.3453 22.0641L21.5819 16.125L5.625 16.125C5.00368 16.125 4.5 15.6213 4.5 15Z" fill="#262626" />
                </svg>
              </a>
            </div>
          </div>
          <div className="home-pages-item">
            <h3 className="pages-item-title">Student Life</h3>
            <div><img src="/images/divider1.png" alt="divider1.png" /></div>
            <p className="pages-item-desc">
              Peek into the vibrant and enriching world of Student Life at Little Learners Academy.
              Discover the array of extracurricular activities, arts and crafts, sports, and social
              events that make our school experience truly memorable.
            </p>
            <div className="pages-item-more d-f">
              <p className="more-name">Learn More</p>
              <a href="" className="d-b">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 15C4.5 14.3787 5.00368 13.875 5.625 13.875L21.5819 13.875L15.3453 7.93593C14.8974 7.50529 14.8834 6.79312 15.3141 6.34525C15.7447 5.89738 16.4569 5.88342 16.9047 6.31406L25.1547 14.1891C25.3753 14.4012 25.5 14.694 25.5 15C25.5 15.306 25.3753 15.5988 25.1547 15.8109L16.9047 23.6859C16.4569 24.1166 15.7447 24.1026 15.3141 23.6547C14.8834 23.2069 14.8974 22.4947 15.3453 22.0641L21.5819 16.125L5.625 16.125C5.00368 16.125 4.5 15.6213 4.5 15Z" fill="#262626" />
                </svg>
              </a>
            </div>
          </div>
          <div className="home-pages-item">
            <h3 className="pages-item-title">Admissions</h3>
            <div><img src="/images/divider1.png" alt="divider1.png" /></div>
            <p className="pages-item-desc">
              Learn about our Enrollment Process and how to secure your child's 
              place at Little Learners Academy. Find information about our admission 
              requirements, application deadlines, and available spaces.
            </p>
            <div className="pages-item-more d-f">
              <p className="more-name">Learn More</p>
              <a href="" className="d-b">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 15C4.5 14.3787 5.00368 13.875 5.625 13.875L21.5819 13.875L15.3453 7.93593C14.8974 7.50529 14.8834 6.79312 15.3141 6.34525C15.7447 5.89738 16.4569 5.88342 16.9047 6.31406L25.1547 14.1891C25.3753 14.4012 25.5 14.694 25.5 15C25.5 15.306 25.3753 15.5988 25.1547 15.8109L16.9047 23.6859C16.4569 24.1166 15.7447 24.1026 15.3141 23.6547C14.8834 23.2069 14.8974 22.4947 15.3453 22.0641L21.5819 16.125L5.625 16.125C5.00368 16.125 4.5 15.6213 4.5 15Z" fill="#262626" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home