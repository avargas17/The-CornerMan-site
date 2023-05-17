import React, { useState, useEffect } from "react";
import "../components/FightSchedule.css";
import axios from 'axios'


/*const API_KEY = "5b0e1949afb946ca8072606ddc5149a9";*/
function Schedule() {
  const [fights, setFights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFights = async () => {
      try {
        const response = await axios.get(
          'https://api.sportsdata.io/v3/mma/scores/json/Schedule/UFC/2023?key=5b0e1949afb946ca8072606ddc5149a9'
        );
        setFights(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFights();
  }, []);

  return (
    <div className="Schedule-container">
      <h2 className="Schedule-header">Upcoming UFC Events</h2>
      {loading ? (
        <p>Loading odds...</p>
      ) : (
        <div className="Schedule-card-container">
          {fights.slice(17, 26).map((fights) => (
            <div key={fights.FightId} className="Schedule-card">
              <h3 className="Schedule-card-title">{fights.Name}</h3>
              <p className="Schedule-card-description">{fights.Day}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Schedule;

