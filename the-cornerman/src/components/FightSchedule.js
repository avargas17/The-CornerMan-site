import React, { useState, useEffect } from "react";
import "./FightSchedule.css";
import axios from 'axios'

function formatDate(dateString) {
  const dateObj = new Date(dateString);
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  return `${month} - ${day} - ${year}`;
}
/*const API_KEY = "5b0e1949afb946ca8072606ddc5149a9";*/
function Schedule() {
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
    <div className="Schedule-container">
      <h2 className="Schedule-header">Upcoming UFC Events</h2>
      {loading ? (
        <p>Loading odds...</p>
      ) : (
        <div className="Schedule-card-container">
          {odds.slice(17, 26).map((odd) => (
            <div key={odd.FightId} className="Schedule-card">
              <h3 className="Schedule-card-title">{odd.Name}</h3>
              <p className="Schedule-card-description">{formatDate(odd.Day)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Schedule;

