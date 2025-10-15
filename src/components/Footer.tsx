import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="d-f">
        <div>
          <div><img src="/images/footer-logo.svg" alt="footer-logo" /></div>
          <p className="footer-desc">
            We believe in the power of play to foster creativity, problem-solving skills, and imagination.
          </p>
          <div className="footer-contacts d-f">
            <p className="footer-email">hello@littlelearners.com</p>
            <p className="footer-phone">+91 91813 23 2309</p>
            <p className="footer-location">Somewhere in the World</p>
          </div>
        </div>
        <div className="footer-nav d-f">
          <ul className='footer-list'>
            <li className="footer-list-heading"><Link to="/">Home</Link></li>
            <li>Features</li>
            <li>Our Testimonials</li>
            <li>FAQ</li>
          </ul>
          <ul className='footer-list'>
            <li className="footer-list-heading"><Link to="/about">About Us</Link></li>
            <li>Our Mission</li>
            <li>Our Vission</li>
            <li>Awards and Recognitions</li>
            <li>History</li>
            <li>Teachers</li>
          </ul>
          <ul className='footer-list'>
            <li className="footer-list-heading"><Link to="/academics">Academics</Link></li>
            <li>Special Features</li>
            <li>Gallery</li>
          </ul>
          <ul className='footer-list'>
            <li className="footer-list-heading"><Link to="/contact">Contact Us</Link></li>
            <li>Information</li>
            <li>Map & Direction</li>
          </ul>
        </div>
      </div>
      <div className="footer-info d-f jc-sb align-center">
        <div className="footer-links d-f align-center">
          <a href="" className="d-b">Terms of Service</a>
          <div className="footer-links-divider"></div>
          <a href="" className="d-b">Privacy Policy</a>
          <div className="footer-links-divider"></div>
          <a href="" className="d-b">Cookie Policy</a>
        </div>
        <div className="footer-social d-f">
          <a href="" className="d-b"><img src="/images/facebook.png" alt="Facebook" /></a>
          <a href="" className="d-b"><img src="/images/twitter.png" alt="Twitter" /></a>
          <a href="" className="d-b"><img src="/images/linkedin.png" alt="LinkedIn" /></a>
        </div>
      </div>
      <p className="footer-copyrights">Copyright &copy; [2023] Little Learners Academy. All rights reserved.</p>
    </footer>
  )
}

export default Footer