import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FightSchedule.css';

function FightSchedule() {
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fight-schedule-container">
      <h1 className="title">Upcoming Fights</h1>
      <div className="fight-grid">
        {fights.slice(0, 6).map((fight) => (
          <div key={fight.FightId} className="fight-container">
            <div className="fight-details">
              <span className="event-name">{fight.EventName}</span>
              <span className="fighter-names">
                {fight.Fighter1} vs {fight.Fighter2}
              </span>
              <span className="weight-class">{fight.WeightClass}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FightSchedule;

