import Navbar from "../components/Navbar";
import '../styles/general.css'
import '../styles/header.css'
import '../styles/main-page.css'



import LaligaImg from '../images/league_images/Laliga.png'
import PriemerLeagueImg from '../images/league_images/PriemerLeague.png'
import BundesligaImg from '../images/league_images/Bundesliga.png'
import League1Img from '../images/league_images/League1.png'
import SeriaAImg from '../images/league_images/seriaA.jpeg'
import { Link } from "react-router-dom";



const Soccer = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div className="header-display">
                    <h1>Choose your Favouite Soccer League</h1>
                </div>
                <div className="sports-container">
                    <Link to={{
                        pathname: "/soccer/soccerleague",
                        search: "?league=Laliga"
                    }}>
                        <img className="sports-image" src={LaligaImg} /></Link>
                    <Link to={{
                        pathname: "/soccer/soccerleague",
                        search: "?league=Priemerleague"
                    }}>
                        <img className="sports-image" src={PriemerLeagueImg} /></Link>
                    <Link to={{
                        pathname: "/soccer/soccerleague",
                        search: "?league=Bundesliga"
                    }}>
                        <img className="sports-image" src={BundesligaImg} /></Link>
                    <Link to={{
                        pathname: "/soccer/soccerleague",
                        search: "?league=League1"
                    }}>
                        <img className="sports-image" src={League1Img} /></Link>
                    <Link to={{
                        pathname: "/soccer/soccerleague",
                        search: "?league=SeriaA"
                    }}>
                        <img className="sports-image" src={SeriaAImg} /></Link>
                </div>
            </div>
        </div>
    );
};

export default Soccer;