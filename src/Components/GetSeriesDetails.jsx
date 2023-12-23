//import { useState } from "react";
import { useState } from "react";
import React from "react";
import "../styles/seriesDetails.css";
import Upcoming from "./MatchComponents/upcoming";
import Recent from "./MatchComponents/Recent";
import Live from "./MatchComponents/Live";
import { Link } from "react-router-dom";
import "./getSeriesDetails.css";

function GetSeriesDeetails() {
  const [data, setData] = useState(Live);

  return (
    <>
      <div className="today">
        <ul className="ListOfNavs">
          <li className="live active">
            <Link
              className="liveText"
              onClick={() => setData(() => <Live key="live" />)}
            >
              Live
            </Link>
          </li>
          <li className="upcomingmatch">
            <Link
              className="upcomingmatchText "
              onClick={() => setData(() => <Upcoming key="upcoming" />)}
            >
              Upcoming <span className="sr-only"></span>
            </Link>
          </li>
          <li className="recent">
            <Link
              className="recentText"
              onClick={() => setData(() => <Recent key="recent" />)}
            >
              Recent
            </Link>
          </li>
        </ul>
        <div className="MatchCard">{data}</div>
      </div>
    </>
  );
}

export default GetSeriesDeetails;