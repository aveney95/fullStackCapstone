import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navigation">
            <div className="nav-container">
            <div>
                    <Link to="/"></Link>
                </div>
                <div className={`menu-links ${isOpen ? 'open' : ''}`}>
                    <Link to="/Login">Login</Link>
                    <Link to="/ProfilePage">Profile</Link>
                    <Link to="/ListingsPage">Search Listings</Link>
               {/* create links to user profile, search listings, and messages */}
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;