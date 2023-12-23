import React, { useState } from "react";
import "../styles/MatchDetailsNav.css";
import { Link } from "react-router-dom";

import ScoreCard from "../components/MatchDetailsNavValues/ScoreCard";
import Squard from "../components/MatchDetailsNavValues/Squard";
import Stats from "../components/MatchDetailsNavValues/Stats";
import MatchFact from "../components/MatchDetailsNavValues/MatchFact";
import Highlights from "../components/MatchDetailsNavValues/Highlights";
import Commentary from "./MatchDetailsNavValues/Commentary";
// import "../styles/commentary.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MatchDetailsNav(props) {
  const [dataValue, setDataValue] = useState(
    <Commentary data={props.myProp} />
  );

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav MatchNav1 border-bottom">
            <div className="col-2">
              <div>
                <Link
                  className="comentry1"
                  onClick={() =>
                    setDataValue(() => <Commentary data={props.myProp} />)
                  }
                >
                  Commentry
                </Link>
              </div>
            </div>
            <div className="col-2">
              <Link
                className="scorecard1"
                onClick={() => setDataValue(() => <ScoreCard data={props.myProp} />)}
              >
                Scorecard
              </Link>
            </div>
            <div className="col-2">
              <Link
                className="squard1"
                onClick={() => setDataValue(() => <Squard data={props.myProp}/>)}
              >
                Squard
              </Link>
            </div>
            <div className="col-2">
              <Link
                className="highlights1"
                onClick={() => setDataValue(() => <Highlights data={props.myProp}/>)}
              >
                Highlights
              </Link>
            </div>
            <div className="col-2">
              <Link
                className="stats1"
                onClick={() => setDataValue(() => <Stats data={props.myProp}/>)}
              >
                Stats
              </Link>
            </div>
            <div className="col-2">
              <Link
                className="venue1"
                onClick={() => setDataValue(() => <MatchFact data={props.myProp}/>)}
              >
                MatchFact
              </Link>
            </div>
          </ul>
        </div>
      </nav>
      <div>{dataValue}</div>
    </div>
  );
}

export default MatchDetailsNav;