/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../../styles/live.css";
import ConfigData from "../config.json";

const MatchCard = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const apiData = async () => {
      const type = "live";
      const data = await axios.get(
        `${ConfigData.backendUrl}/api/v1/match/getMatch/${type}`
      );
      setData(data.data);
    };

    apiData();
  }, []);

  return (
    <>
      <Container fluid={true}>
        <Row>
          {data?.data?.map((seriesData) => {
            return (
              <div key={seriesData.seriesName}>
                <div className="heading">
                  <p>{seriesData.seriesName}</p>
                </div>
                {seriesData?.matchInfo?.map((postData) => {
                  return (
                    <span key={postData.matchId}>
                      <Link to={`/matchDetails/${postData.matchId}`}>
                        <div className="container  border-bottom">
                          <div className="row row-cols-2">
                            <div className="col-9 column1">
                              <strong>Venue:</strong>{" "}
                              {postData.venueInfo.ground},
                              {postData.venueInfo.city}
                            </div>
                            <div className="col-3 column2">
                              {" "}
                              {postData.state === "Complete"
                                ? "Result"
                                : "Live"}
                            </div>
                          </div>
                          <div className="row row-cols-2 column3">
                            <div className="col-9">
                              <img
                                src={`https://www.cricbuzz.com/a/img/v1/20x20/i1/c${postData.team1.imageId}/team_flag.jpg`}
                                alt="bcbc"
                              />

                              <span className="col-10">
                                {postData.team1.teamName}
                              </span>
                            </div>
                            <div className="col-3 column4">
                              {postData.team1Score?.inngs1?.runs}
                              {postData.team1Score?.inngs1?.wickets
                                ? `/${postData.team1Score?.inngs1?.wickets}`
                                : 0}{" "}
                              ({postData.team1Score.inngs1?.overs})
                            </div>
                          </div>

                          {/* for team2 */}
                          <div className="row row-cols-2 column3">
                            <div className="col-9">
                              <img
                                src={`https://www.cricbuzz.com/a/img/v1/20x20/i1/c${postData.team2.imageId}/team_flag.jpg`}
                                alt="bcbc"
                              />

                              <span className="col-10">
                                {postData.team2.teamName}
                              </span>
                            </div>
                            <div className="col-3 column4">
                              {postData.team2Score?.inngs1?.runs}
                              {postData.team2Score?.inngs1?.wickets
                                ? `/${postData.team2Score?.inngs1?.wickets}`
                                : 0}{" "}
                              ({postData.team2Score.inngs1?.overs})
                            </div>
                          </div>

                          <div className="col-12 column7">
                            {postData.status}
                          </div>
                        </div>
                      </Link>
                    </span>
                  );
                })}
              </div>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
export default MatchCard;