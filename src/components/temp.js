import './DisplayContent.css'
import topscores from '../Data/Data';
import Laligadata from '../Data/Standings';
import topassists from '../Data/Topassists';
import yellowcards from '../Data/YellowCards';
import redcards from '../Data/RedCards';
import { useEffect, useState } from 'react';
import axios from 'axios';
import requests from '../utils/requests';


const DisplayContent = (props) => {
    const { api, tis } = requests;
    const [receiveData, setReceiveData] = useState([])
    const [isLoadingStatus, setisLoadingStatus] = useState(false);
    const [sidebarInfo, setSidebarInfo] = useState(props.sideBarInfo);
    const [season,setSeason]= useState(props.props.yearVal)
    var [header_values, setHeaderValues] = useState(["Team", "Matches Played", "Won", "Lost", "Draw", "Points Scored", "Goal Difference"])
    var [tableInput, setTableInput] = useState([])
    var leagueId = props.league.league_id
    
    var leagueCountry = props.league.country
    // console.log(props.yearVal)
    

    useEffect(() => {
        // console.log(season, leagueId)
        if (sidebarInfo !== props.sideBarInfo) {
            setSidebarInfo(props.sideBarInfo);
            setisLoadingStatus(false);
            setReceiveData([]);
            // console.log(sidebarInfo);
        }
        if ( season!== props.yearVal) {
            setSeason(props.yearVal);
            setisLoadingStatus(false);
            setReceiveData([]);
            // console.log(sidebarInfo);
        }
        if (props.sideBarInfo === "Points Table") {
            var DisplaygetData = async () => {
                if (isLoadingStatus) {
                    // console.log(receiveData)
                    var scores = receiveData.response[0].league.standings[0];
                    var new_data = []
                    scores.map((item) => {
                        var reqData = [item.team.name, item.all.played, item.all.win, item.all.lose, item.all.draw, item.points, item.goalsDiff];
                        new_data.push(reqData)

                    });
                    setTableInput(new_data)
                    // console.log(new_data)
                } else {
                    var value = await api.get(`standings?league=${leagueId}&season=${season}`);
                    setReceiveData(value.data);
                    setisLoadingStatus(true);
                }
            };
            DisplaygetData();
        }
        else if (props.sideBarInfo === "Top Scorers") {
            console.log(isLoadingStatus)
            var DisplaygetData = async () => {
                if (isLoadingStatus) {
                    // console.log(receiveData)
                    var scores = receiveData.response;
                    var new_data = []
                    scores.map((item) => {
                        var reqData = [item.player.name, item.statistics[0].games.appearences, item.statistics[0].goals.total, item.statistics[0].team.name, item.player.nationality];
                        new_data.push(reqData)

                    });
                    setHeaderValues(["Player Name", "Matches Played", "Goals Scored", "Player Team", "Nationality"])
                    setTableInput(new_data)
                } else {
                    var value = await api.get(`players/topscorers?league=${leagueId}&season=${season}`);
                    setReceiveData(value.data);
                    setisLoadingStatus(true);
                }
            };
            DisplaygetData();


        }
        else if (props.sideBarInfo === "Assists") {
            // console.log(isLoadingStatus)
            var DisplaygetData = async () => {
                if (isLoadingStatus) {
                    // console.log(receiveData)
                    var scores = receiveData.response;
                    var new_data = []
                    scores.map((item) => {
                        var reqData = [item.player.name, item.statistics[0].games.appearences, item.statistics[0].goals.assists, item.statistics[0].team.name, item.player.nationality];
                        new_data.push(reqData)

                    });
                    setHeaderValues(["Player Name", "Matches Played", "Assists Provided", "Player Team", "Nationality"])
                    setTableInput(new_data)
                } else {
                    var value = await api.get(`players/topassists?league=${leagueId}&season=${season}`);
                    setReceiveData(value.data);
                    setisLoadingStatus(true);
                }
            };
            DisplaygetData();
        }
        else if (props.sideBarInfo === "Yellow Cards") {
            // console.log(isLoadingStatus)
            var DisplaygetData = async () => {
                if (isLoadingStatus) {
                    // console.log(receiveData)
                    var scores = receiveData.response;
                    var new_data = []
                    scores.map((item) => {
                        var reqData = [item.player.name, item.statistics[0].games.appearences, item.statistics[0].cards.yellow, item.statistics[0].team.name, item.player.nationality];
                        new_data.push(reqData)

                    });
                    setHeaderValues(["GoalKeeper Name", "Matches Played", "Cleensheets", "Player Team", "Nationality"]);
                    setTableInput(new_data)
                } else {
                    var value = await api.get(`players/topyellowcards?league=${leagueId}&season=${season}`);
                    setReceiveData(value.data);
                    setisLoadingStatus(true);
                }
            };
            DisplaygetData();
        }
        else if (props.sideBarInfo === 'Redcards') {
            // console.log(isLoadingStatus)
            var DisplaygetData = async () => {
                if (isLoadingStatus) {
                    // console.log(receiveData)
                    var scores = receiveData.response;
                    var new_data = []
                    scores.map((item) => {
                        var reqData = [item.player.name, item.statistics[0].games.appearences, item.statistics[0].cards.red, item.statistics[0].team.name, item.player.nationality];
                        new_data.push(reqData)

                    });
                    setHeaderValues(["Player Name", "Matches Played", "Cleensheets", "Player Team", "Nationality"]);
                    setTableInput(new_data)
                } else {
                    var value = await api.get(`players/topredcards?league=${leagueId}&season=${season}`);
                    setReceiveData(value.data);
                    setisLoadingStatus(true);
                }
            };
            DisplaygetData();
        }
    }, [isLoadingStatus, props.sideBarInfo,props.yearVal]);

    return (
        <div className="textbox">
            <h2>The {props.sideBarInfo} of the league {props.league.league_name} </h2>
            <table className="points-table">
                <thead>
                    <tr>
                        {
                            header_values.map((item, i) => <th key={i}>{item}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {isLoadingStatus &&
                        tableInput.map((item, idx) => {
                            var row = item
                            return (
                                <tr key={idx} >
                                    {
                                        row.map((cell, i) => <td key={i}>{cell}</td>)
                                    }
                                </tr>
                            );
                        })

                    }
                </tbody>
            </table>
        </div>
    );
};

export default DisplayContent;

