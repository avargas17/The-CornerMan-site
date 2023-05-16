import React, { useState, useEffect } from "react";
import "./Odds.css";
import axios from 'axios'


/*const API_KEY = "5b0e1949afb946ca8072606ddc5149a9";*/
function Odds() {
  const [odds, setOdds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOdds = async () => {
      try {
        const response = await axios.get(
          '/v4/sports/UFC/odds/?apiKey=77ac5217d4649f080122687ed45187d0&regions=US&markets=h2h'
        );
        setOdds(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOdds();
  }, []);

  return (
    <div className="odds-container">
      <h2 className="odds-header">Freshest Betting Odds</h2>
        <div className="odds-card-container">
          {odds.map((odd) => (
            <div key={odd.FightId} className="odds-card">
              <h3 className="odds-card-title">{odd.Name}</h3>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Odds;
