import soccer from '../images/soccer.jpeg'
import f1 from '../images/F1.png'

import '../styles/general.css'
import '../styles/header.css'
import '../styles/main-page.css'

import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'



const Home = () => {
    return (
    <div className="App">
        <Navbar />
        <div >
            <div className="header-display">
                <h1>Choose a Sport to explore</h1>
            </div>
            <div className="sports-container">
                <Link to="/soccer">
                    <img className="sports-image" src={soccer} /></Link>
                <Link to="/f1">    
                <img className="sports-image" src={f1} /></Link>
            </div>
            <div className="favourite-display">
                <h2>Favourites</h2>
            </div>
        </div>
    </div>
    )
};

export default Home;