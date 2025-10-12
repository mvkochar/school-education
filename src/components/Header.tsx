import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className="header-top">
                <div className="header-top-grab d-f">
                    <p className="grab-name">Admission is Open, Grab your seat now</p>
                    <a href="" className="d-b">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.6001 11.9999C3.6001 11.5029 4.00304 11.0999 4.5001 11.0999L17.2656 11.0999L12.2763 6.3487C11.918 6.00418 11.9068 5.43445 12.2513 5.07615C12.5959 4.71786 13.1656 4.70669 13.5239 5.0512L20.1239 11.3512C20.3004 11.5209 20.4001 11.7551 20.4001 11.9999C20.4001 12.2448 20.3004 12.479 20.1239 12.6487L13.5239 18.9487C13.1656 19.2932 12.5959 19.282 12.2513 18.9237C11.9068 18.5655 11.918 17.9957 12.2763 17.6512L17.2656 12.8999L4.5001 12.8999C4.00304 12.8999 3.6001 12.497 3.6001 11.9999Z" fill="#262626" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="header-bar d-f jc-sb">
                <div className="header-logo"><img src="/images/logo.svg" alt="Logo" /></div>
                <nav>
                    <ul className="header-nav d-f">
                        <li className="header-nav-item"><Link to="/">Home</Link></li>
                        <li className="header-nav-item"><Link to="/about">About Us</Link></li>
                        <li className="header-nav-item"><Link to="/academics">Academics</Link></li>
                        <li className="header-nav-item"><a href="">Admissions</a></li>
                        <li className="header-nav-item"><a href="">Student Life</a></li>
                        <li className="header-nav-item header-contact"><a href="">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header