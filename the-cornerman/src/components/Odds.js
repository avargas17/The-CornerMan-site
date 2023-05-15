import React, { useState, useEffect } from "react";
import "./Odds.css";
import axios from 'axios'


const API_KEY = "5b0e1949afb946ca8072606ddc5149a9";
function Odds() {
  const [odds, setOdds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOdds = async () => {
      try {
        const response = await axios.get(
          'https://api.sportsdata.io/v3/mma/scores/json/Schedule/UFC/2023?key=5b0e1949afb946ca8072606ddc5149a9'
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
      <h2 className="odds-header">Upcoming MMA Betting Odds</h2>
      {loading ? (
        <p>Loading odds...</p>
      ) : (
        <div className="odds-card-container">
          {odds.slice(0, 8).map((odd) => (
            <div key={odd.FightId} className="odds-card">
              <h3 className="odds-card-title">{odd.Name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Odds;
