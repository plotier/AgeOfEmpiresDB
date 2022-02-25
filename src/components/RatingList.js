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

    <ul className="rankingUl">
      {
        leaderboard.map(item =>
          <li key={item.rank}>{item.name}</li>
        )}
    </ul>
  );
};
