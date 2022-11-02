import logo1 from '../images/logo1.png'
import search from '../images/search.svg'


import './header.css'
const Navbar = () => {
    return (
        <div className="header">
            <div className="left-section">
                <img className="page-logo" src={logo1} />
            </div>
            <div className="middle-section"></div>
            <div className="right-section">
                <input className="search-bar" type="text" placeholder="search" />
                <button className="search-button">
                    <img className="search-icon" src={search} />
                    <div className="tooltip">Search</div>
                </button>
            </div>
        </div>
    );
};

export default Navbar;