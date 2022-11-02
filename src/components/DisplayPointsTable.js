import './DisplayContent.css'
import { useEffect, useState } from 'react';
import requests from '../utils/requests';
const DisplayPointsTable = (props) =>
{
    const { api, tis } = requests;
    const [receiveData, setReceiveData] = useState([])
    const [isLoadingStatus, setisLoadingStatus] = useState(false);
    const [sidebarInfo, setSidebarInfo] = useState(props.sideBarInfo);
    var [header_values, setHeaderValues] = useState(["Team", "Matches Played", "Won", "Lost", "Draw", "Points Scored", "Goal Difference"])
    var [tableInput, setTableInput] = useState([])
    var leagueId = props.league.league_id
    var season = props.yearVal
    var leagueCountry = props.league.country
    // console.log(props.yearVal)
    console.log(season, isLoadingStatus)
    useEffect(()=>{
        if ( season!== props.yearVal) {
            setSeason(props.yearVal);
            setisLoadingStatus(false);
            setReceiveData([]);
            // console.log(sidebarInfo);
        }
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
        

    }, [isLoadingStatus,props.yearVal]);
    

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


export default DisplayPointsTable;
