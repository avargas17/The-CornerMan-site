import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/Event.css';

function UFCEvent() {
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          'https://api.sportsdata.io/v3/mma/scores/json/Event/303?key=5b0e1949afb946ca8072606ddc5149a9'
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
        <>
        <h1 className="event-title"> Next Event:</h1>
          <h1 className="event-title"> {event.Name}</h1>
          <h1 className="event-details"> Date: {event.DateTime}</h1>
        </>
    </div>
  );
}

export default UFCEvent;