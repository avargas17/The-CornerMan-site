import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../components/FighterSection.css';
import Fighter from "../images/Conor.jpg"

const FighterSection = () => {
  const [fighter, setFighter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.sportsdata.io/v3/mma/scores/json/Fighter/140000003?key=5b0e1949afb946ca8072606ddc5149a9'
        );
        setFighter(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="fighter-info">
      {fighter ? (
        <div>
          <div className="fighter-details">
            <h2 className="fighter-name">Jonathan Haggerty "The General"</h2>
            <div className="fighter-stats">
              <p className="wins">Wins: 6 </p>
              <p className="losses">Losses: 2 </p>
              <p className="draws">Draws: 0 </p>
              <p className="ko-tko">KO/TKO: 1 </p>
              <p className="sub">Submissions: 0 </p>
            </div>
          </div>
        </div>
      ) : (
        <p className="loading">Loading fighter information...</p>
      )}
    </div>
  );
};

export default FighterSection;
