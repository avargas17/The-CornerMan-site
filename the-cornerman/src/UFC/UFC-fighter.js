import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FighterSection.css';
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
            <h2 className="fighter-name">{fighter.FirstName} {fighter.LastName}</h2>
            <p className="wins">Wins: {fighter.Wins}</p>
            <p className="losses">Losses: {fighter.Losses}</p>
            <p className="draws">Draws: {fighter.Draws}</p>
            <p className="ko-tko">KO/TKO: {fighter.TechnicalKnockouts}</p>
            <p className="sub">Submissions: {fighter.Submissions}</p>
            {/* Add more fighter information as needed */}
          </div>
          <div className="fighter-image">
            <img src={Fighter} alt="Fighter" />
          </div>
        </div>
      ) : (
        <p className="loading">Loading fighter information...</p>
      )}
    </div>
  );
};

export default FighterSection;