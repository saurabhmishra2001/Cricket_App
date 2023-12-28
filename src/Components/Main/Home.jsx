

import React from "react";
import "./home.css";
import GetSeriesDeetails from "../GetSeriesDetails";
import International from "../International";
import League from "../league";
import TopNews from "../TopNews";

function LiveMatch() {
  return (
    <div className="container">
      <div className="liveMatch">
        <div className="row">
          <div className="col-md-3">
            <div className="league">
              <h5 className="topText align-self-start">International</h5>
              <International />
            </div>
            <div className="league">
              <h5 className="topText align-self-start">Leagues</h5>
              <League />
            </div>
          </div>
          <div className="col-md-6">
            <div className="current_Details">
              <GetSeriesDeetails />
            </div>
          </div>
          <div className="col-md-3">
            <div className="newsDiv">
              <h5 className="news-heading">Top News</h5>
              <TopNews />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveMatch;


