import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DisplayContent from './DisplayContent';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Yearfilter from './YearFilter';



const Soccerleague = () => {

    const [sidebarValue,setSidebarValue]=useState("Points Table");
    const [changeSidebar,setChangeSidebar]=useState(false);
    const [YearOption,setYearOption]=useState("2022");

    let currPath = useLocation();
    let league_name = currPath.search.split("=")[1];
    
    if (league_name === "Laliga") {
        var league_info = { league_id: 140, season: 2022, country: "Spain" ,league_name:"Laliga"}
    }
    else if (league_name === "Priemerleague") {
        var league_info = { league_id: 39, season: 2022, country: "England",league_name:"Priemerleague" }
    }
    else if (league_name === "Bundesliga") {
        var league_info = { league_id: 78, season: 2022, country: "Germany" ,league_name:"Bundesliga"}
    }
    else if (league_name === "League1") {
        var league_info = { league_id: 61, season: 2022, country: "France" ,league_name:"League1"}
    }
    else if (league_name === "SeriaA") {
        var league_info = { league_id: 135, season: 2022, country: "Italy",league_name:"SeriaA"}
    }
    const getOperation = (operation) => {
        setSidebarValue("");
        setSidebarValue(operation)
    }
    const getYearValue = (yearSelected) =>{
        setYearOption("");
        // console.log(yearSelected)
        setYearOption(yearSelected)
    }

    return (
        <div>
            <Navbar />
            <Sidebar getOperation = {getOperation} />
            <Yearfilter getYearValue ={getYearValue}/>
            {sidebarValue && <DisplayContent league = {league_info} sideBarInfo = {sidebarValue} yearVal ={YearOption} />}
        </div>
    );
};

export default Soccerleague;