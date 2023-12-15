import React from "react";

function Home() {
  return (
    <div className="LiveMatch">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="league">
              <h5 className="topText align-self-start">International</h5>
            </div>
            <div className="league">
              <h5 className="topText align-self-start">League</h5>
            </div>
            <div className="col-6"></div>
            <div className="col-3">
              <div className="newsDiv">
                <h5>Top News</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
