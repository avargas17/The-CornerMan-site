import React, { useState, useEffect } from "react";
import "../components/FightSchedule.css";
import axios from 'axios'
function Schedule() {
    const [odds, setOdds] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchOdds = async () => {
        try {
          const response = await axios.get(
            'https://api.sportsdata.io/v3/mma/scores/json/Schedule/ONE/2023?key=5b0e1949afb946ca8072606ddc5149a9'
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
        <h2 className="Schedule-header">Upcoming One Championship Events</h2>
        {loading ? (
          <p>Loading odds...</p>
        ) : (
          <div className="Schedule-card-container">
        <div className="Schedule-card">
        <h3 className="Schedule-card-title">ONE Friday Fights 17: Bangkok </h3>
        <p className="Schedule-card-description"> 5 - 19 - 2023 </p>
      </div>
      <div className="Schedule-card">
        <h3 className="Schedule-card-title">ONE Fight Night 11: Eblem vs. Meshikov </h3>
        <p className="Schedule-card-description"> 6 - 19 - 2023  </p>
      </div>
      <div className="Schedule-card">
        <h3 className="Schedule-card-title">ONE Fight Nigth 12: Bangkok</h3>
        <p className="Schedule-card-description"> 7 - 15 - 2023 </p>
      </div>
  </div>
)}
</div>
);
}
export default Schedule;
