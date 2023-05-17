/*const API_KEY = "5b0e1949afb946ca8072606ddc5149a9";*/
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
    <div className="Schedule-container">
    <h2 className="Schedule-header">Upcoming Bellator Events</h2>
    {loading ? (
      <p>Loading odds...</p>
    ) : (
      <div className="Schedule-card-container">
              <div className="Schedule-card">
            <h3 className="Schedule-card-title">Bellator Dublin: Eblen vs. Edwards </h3>
            <p className="Schedule-card-description"> September 23rd 2023 </p>
          </div>
          <div className="Schedule-card">
            <h3 className="Schedule-card-title">Bellator 297: Nemkov vs. Romero </h3>
            <p className="Schedule-card-description">June 16th 2023</p>
          </div>
      </div>
    )}
  </div>
;
}
export default Schedule;
