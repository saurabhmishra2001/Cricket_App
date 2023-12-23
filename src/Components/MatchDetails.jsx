import React, { useEffect, useState } from "react";
// import data from "./cricket.json";
import MatchDetailsNav from "./MatchDetailsNav";
import axios from "axios";
import ConfigData from "./config.json";
import { useParams } from "react-router-dom";
import "../styles/News.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import loader from "../img/loader.gif"

function MatchDetails() {
  const [matchData, setMatchData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const apiData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 10));
      const url = `${ConfigData.backendUrl}/api/v1/match/getMatchDetails/${id}`;
      try {
        const matchData = await axios.get(url);
        setMatchData(matchData.data);
      } catch (err) {
        console.log("Api", err);
      }
    };
    apiData();
  }, [id]);

  return (
    <>
      <div className="liveMatch">
        <div className="container">
          <div className="row">
            <div className="col-6 currentMatch">
              <h6>{matchData?.data?.seriesName}</h6>

              <div className="container text-center border-bottom">
                <div className="row row-cols-2">
                  <div className="col-9 column1">{matchData?.data?.title}</div>
                  <div className="col-3 column2"> </div>
                  <div className="col-9 column3">
                    {matchData?.data?.team1?.name}
                  </div>
                  <div className="col-3 column4">
                    {matchData?.data?.team1?.score}
                  </div>
                  <div className="col-9 column5">
                    {matchData?.data?.team2?.name}
                  </div>
                  <div className="col-3 column6">
                    {matchData?.data?.team2?.score}
                  </div>
                  <div className="col-12 column7">
                    {matchData?.data?.status}
                  </div>
                </div>
              </div>
              <p id="battingteamheader">{matchData?.data?.scoreCard?.scoreCard[matchData?.data?.scoreCard?.scoreCard?.length-1].batTeamDetails?.batTeamName}</p>
              <div className="BatsMan">
              
                <table className="scoreCardTable">
                  <tbody>

    
                  <tr className="batter batterCard">
                    <th>Batter</th>
                    <th>R</th>
                    <th>B</th>
                    <th>4</th>
                    <th>6</th>
                    <th>SR</th>
                  </tr>
                  <tr className="tabaledata">
                    <td>{matchData?.data?.batsmanStriker.batName}</td>
                    <td>{matchData?.data?.batsmanStriker.batRuns}</td>
                    <td>{matchData?.data?.batsmanStriker.batBalls}</td>
                    <td>{matchData?.data?.batsmanStriker.batFours}</td>
                    <td>{matchData?.data?.batsmanStriker.batSixes}</td>
                    <td>{matchData?.data?.batsmanStriker.batStrikeRate}</td>
                  </tr>
                  {matchData?.data?.batsmanNonStriker.batName === "" ? (
                    ""
                  ) : (
                    <tr className="tabaledata">
                      <td>{matchData?.data?.batsmanNonStriker.batName}</td>
                      <td>{matchData?.data?.batsmanNonStriker.batRuns}</td>
                      <td>{matchData?.data?.batsmanNonStriker.batBalls}</td>
                      <td>{matchData?.data?.batsmanNonStriker.batFours}</td>
                      <td>{matchData?.data?.batsmanNonStriker.batSixes}</td>
                      <td>
                        {matchData?.data?.batsmanNonStriker.batStrikeRate}
                      </td>
                    </tr>
                  )}
                  <tr className="bowler">
                    <th>Bowler</th>
                    <th>O</th>
                    <th>M</th>
                    <th>R</th>
                    <th>W</th>
                    <th>ECO</th>
                  </tr>
                  <tr className="bowlerDetails border-bottom">
                    <td>{matchData?.data?.bowlerStriker.bowlName}</td>
                    <td>{matchData?.data?.bowlerStriker.bowlOvs}</td>
                    <td>{matchData?.data?.bowlerStriker.bowlMaidens}</td>
                    <td>{matchData?.data?.bowlerStriker.bowlRuns}</td>
                    <td>{matchData?.data?.bowlerStriker.bowlWkts}</td>
                    <td>{matchData?.data?.bowlerStriker.bowlEcon}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-6 topNews">
              <div>
                <div>
                  {matchData?.data && (
                    <MatchDetailsNav myProp={matchData.data} />
                  )}
                  {!matchData?.data && <img src={loader} alt="loading"/>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MatchDetails;