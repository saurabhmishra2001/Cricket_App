import React, { useState, useEffect } from "react";
import axios from "axios";
import ConfigData from "./config.json";
import "../styles/international.css";
// import logo from "../img/leagueLogo.jpg";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const International = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiData = async () => {
      const type = "league";
      const data = await axios.get(
        `${ConfigData.backendUrl}/api/v1/series/getSeriesList/${type}`
      );
      setData(data.data);
    };

    apiData();
  }, []);

  return (
    <>
      <Container className="International">
        {data?.data?.map((postData) => {
          const name = postData.name;

          return (
            <>
              <Link className="imgName" key={name}>
                <img className=" rounded-circle img" src="{logo}" alt="logo" />{" "}
                <div className="name ">{name}</div>
              </Link>
            </>
          );
        })}
      </Container>
    </>
  );
};

export default International;