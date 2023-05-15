import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FighterSection.css';

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
          <h2 className="fighter-name">{fighter.FirstName} {fighter.LastName}</h2> {/* Apply a class to the fighter name */}
          <p className="wins">Wins: {fighter.Wins}</p> {/* Apply a class to the wins */}
          <p className="losses">Losses: {fighter.Losses}</p>
          <p className="Draws">Draws: {fighter.Draws}</p>   
           <p className="Age">Age: {fighter.Age}</p> 
          {/* Add more fighter information as needed */}
        </div>
      ) : (
        <p className="loading">Loading fighter information...</p>
      )}
    </div>
  );
};

export default FighterSection ;
