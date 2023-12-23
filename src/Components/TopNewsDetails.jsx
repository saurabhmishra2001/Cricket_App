import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom/dist";
import ConfigData from "./config.json";
import axios from "axios";
import "./topNewsDetails.css";
import moment from "moment/moment";
import loader from "../img/loader.gif";

function TopNewsDetails() {
  const { id } = useParams();
  const [contentItems, setContentItems] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiData = async () => {
      const url = `${ConfigData.backendUrl}/api/v1/news/getNewsDetails/${id}`;
      try {
        const contentItems = await axios.get(url);
        await new Promise((resolve) => setTimeout(resolve, 10));

        setContentItems(contentItems.data.data[0]);
      } catch (err) {
        console.log("Api", err);
      } finally {
        setLoading(false);
      }
    };
    apiData();
  }, [id]);

  console.log("contentItems", contentItems);

  if (loading) {
    return <img src={loader} alt="loading"/>;
  } else {
    return (
      <div className="container">
        <div className=" mb-3">
          <div className="news-context">
            <span>{contentItems.context}</span>
          </div>
          <div className="news-headline">
            <h3>{contentItems.headline}</h3>
          </div>
          <div className="news-context">
            by{" "}
            <span>
              {contentItems.source} published on{" "}
              {moment(parseInt(contentItems.lastUpdatedTime)).format(
                "ddd, MMM DD, YYYY, hh:mm A"
              )}
            </span>
          </div>
          <div className="news-image">
            <img
              src={`https://www.cricbuzz.com/a/img/v1/695x396/i1/c${contentItems.coverImage.id}/a.jpg`}
              alt="..."
            />
          </div>

          <div className="card-body">
            {contentItems.content.map((news) => (
              <>
               
                {news?.content?.hasFormat ? (
                  <p className="card-text"><strong>{news?.content?.contentValue.replace(/@B0\$|(@B1\$)|(@B2\$)|(@B3\$)|(@B4\$)|(@B5\$)/g, '')}</strong></p>
                ) : (
                  <p className="card-text">{news?.content?.contentValue.replace(/@B0\$|(@B1\$)|(@B2\$)|(@B3\$)|(@B4\$)|(@B5\$)/g, '')}</p>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TopNewsDetails;