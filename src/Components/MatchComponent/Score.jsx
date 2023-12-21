// Main.js
import React from "react";
import { Table } from "react-bootstrap";

const Score = ({ liveScore }) => {
  const { teams, score, overs, batsmen, bowlers } = liveScore;

  return (
    <div className="Main">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Team</th>
            <th>Score</th>
            <th>Overs</th>
            <th>Batsmen</th>
            <th>Bowlers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{teams}</td>
            <td>{score}</td>
            <td>{overs}</td>
            <td>{batsmen}</td>
            <td>{bowlers}</td>
          </tr>
          <tr>
            <td>{teams}</td>
            <td>{score}</td>
            <td>{overs}</td>
            <td>{batsmen}</td>
            <td>{bowlers}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Score;