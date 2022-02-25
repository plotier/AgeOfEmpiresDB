import { useState, useEffect } from "react";
import axios from "axios";
import '../styles/RatingList.css'

export const RatingList = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    axios
      .get(`https://aoe2.net/api/leaderboard`)
      .then((res) => {
        setLeaderboard(res.data.leaderboard);
      })
  }, []);

  return (
<div className="d-flex">

    <ul className="rankingUl">
    <h5>Player</h5>
      {
        leaderboard.map(item =>
          <li key={item.rank}>{item.name}</li>
        )}
    </ul>

    <ul className="rankingUlWins">
    <h5>Wins</h5>
      {
        leaderboard.map(item =>
          <li key={item.rank}>{item.wins}</li>
        )}
    </ul>
    <ul className="rankingUlWins">
    <h5>Losses</h5>
      {
        leaderboard.map(item =>
          <li key={item.rank}>{item.losses}</li>
        )}
    </ul>
    <ul className="rankingUlWins">
    <h5>Games</h5>
      {
        leaderboard.map(item =>
          <li key={item.rank}>{item.games}</li>
        )}
    </ul>
    <ul className="rankingUlWins">
    <h5>Streak</h5>
      {
        leaderboard.map(item =>
          <li key={item.rank}>{item.streak}</li>
        )}
    </ul>
    </div>
  );
};
