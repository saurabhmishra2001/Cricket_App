/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../../styles/live.css";
import ConfigData from "../config.json";
import "../../styles/liveMatch.css";

const Recent = () => {
  const [data, setData] = useState([]);
  const type = "recent";
  useEffect(() => {
    const apiData = async () => {
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
                      <Link
                        to={`/${type}/${postData.matchId}`}
                        
                      >
                        <div className="container text-center border-bottom">
                          <div className="row row-cols-2">
                            <div className="col-9 column1">
                              Venue: {postData.venueInfo.ground},
                              {postData.venueInfo.city}
                            </div>
                            <div className="col-3 column2">
                              {" "}
                              {postData.state === "Complete"
                                ? "Result"
                                : "Live"}
                            </div>
                            <div className="col-9 column3">
                              {postData.team1.teamName}
                            </div>
                            <div className="col-3 column4">
                              {postData.team1Score?.inngs1?.runs}
                              {postData.team1Score?.inngs1?.wickets
                                ? `/${postData.team1Score?.inngs1?.wickets}`
                                : 0}
                            </div>
                            <div className="col-9 column5">
                              {postData.team2.teamName}
                            </div>
                            <div className="col-3 column6">
                              {postData.team2Score?.inngs1?.runs}
                              {postData.team2Score?.inngs1?.wickets
                                ? `/${postData.team2Score?.inngs1?.wickets}`
                                : ""}
                            </div>
                            <div className="col-12 column7">
                              {postData.status}
                            </div>
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
export default Recent;
