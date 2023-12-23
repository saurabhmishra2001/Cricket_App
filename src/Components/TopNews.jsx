import React, { useState, useEffect, useRef } from "react";
import "./topNews.css";
import axios from "axios";
import ConfigData from "./config.json";
import moment from "moment/moment";
import { Link } from "react-router-dom/dist";

const AutoScrollComponent = () => {
  const [contentItems, setContentItems] = useState([]);

  const containerRef = useRef(null);

  useEffect(() => {
    const apiData = async () => {
      const contentItems = await axios.get(
        `${ConfigData.backendUrl}/api/v1/news/getNewsList/index`
      );
      setContentItems(contentItems.data.data);
    };
    apiData();
    const container = containerRef.current;
    let animationId;
    let startTime;

    const scroll = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = timestamp - startTime;
      const speed = 0.0001; // Adjust the scrolling speed here

      container.scrollTop += progress * speed;

      if (
        container.scrollTop >=
        container.scrollHeight - container.clientHeight
      ) {
        // Reset to the top when reaching the bottom
        container.scrollTop = 0;
        startTime = timestamp; // Reset the start time
      }

      animationId = requestAnimationFrame(scroll);
    };

    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      startTime = null; // Reset the start time when resuming animation
      animationId = requestAnimationFrame(scroll);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Start the scrolling animation
    animationId = requestAnimationFrame(scroll);

    // Clean up event listeners and animation frame when the component is unmounted
    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="auto-scroll-container" ref={containerRef}>
      {contentItems.map((post) => (

        <Link to={`/news/${post.id}`} key={post.id} className="container">
          <div className="image-section">
            <img
              src={`https://www.cricbuzz.com/a/img/v1/250x150/i1/c${post.imageId}/a.jpg`}
              alt=" "
            />
          </div>
          <div className="news-section">
            <p className="news-hline"><strong>{post.hline}</strong></p>
            <small classname="text-muted">
              {moment(parseInt(post.pubTime)).fromNow("hour") }  ago
            </small>
          </div>
         
       
        </Link>
      ))}
    </div>
  );
};

export default AutoScrollComponent;