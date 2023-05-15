import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Event.css';

function Event() {
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          'https://api.sportsdata.io/v3/mma/scores/json/Event/51?key=5b0e1949afb946ca8072606ddc5149a9'
        );
        setEvent(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvent();
  }, []);

  return (
    <div className="event-container">
      {loading ? (
        <p>Loading event information...</p>
      ) : (
        <>
          <h1 className="event-title">{event.Name}</h1>
          <div className="event-details-container">
            <div className="event-details">
              <span className="event-detail-label">Date:</span>
              <span className="event-detail-value">{new Date(event.Date).toDateString()}</span>
            </div>
            <div className="event-details">
              <span className="event-detail-label">Location:</span>
              <span className="event-detail-value">{event.Location}</span>
            </div>
            <div className="event-details">
              <span className="event-detail-label">Venue:</span>
              <span className="event-detail-value">{event.Venue}</span>
            </div>
            <div className="event-details">
              <span className="event-detail-label">Main Event:</span>
              <span className="event-detail-value">{event.Fights[0].FightCardOrder}</span>
            </div>
          </div>
          <div className="event-fights-container">
            {event.Fights.map((fight) => (
              <div key={fight.FightId} className="event-fight">
                <div className="event-fighter-details">
                  <span className="event-fighter-name">{fight.Fighter1}</span>
                  <span className="event-fighter-record">{fight.Fighter1Record}</span>
                </div>
                <div className="event-fight-details">
                  <span className="event-fight-vs">vs</span>
                  <span className="event-fight-weight-class">{fight.WeightClass}</span>
                  <span className="event-fight-round">{fight.ScheduledRounds} rounds</span>
                </div>
                <div className="event-fighter-details">
                  <span className="event-fighter-name">{fight.Fighter2}</span>
                  <span className="event-fighter-record">{fight.Fighter2Record}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Event;

