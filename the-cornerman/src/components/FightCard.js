import React from 'react';
import "./FightCard.css"
const FightCard = () => {
  const fights = [
    {
      bout: 'Main Event',
      fighter1: {
        name: 'Max Holloway',
        record: '22-6-0',
      },
      fighter2: {
        name: 'Arnold Allen',
        record: '18-1-0',
        img: 'MvsA.jpeg'
      },
    },
    {
      bout: 'Co-Main Event',
      fighter1: {
        name: 'Rose Namajunas',
        record: '9-4-0',
      },
      fighter2: {
        name: 'Joanna Jedrzejczyk',
        record: '16-4-0',
      },
    },
    {
      bout: 'Featured Fight',
      fighter1: {
        name: 'Israel Adesanya',
        record: '20-1-0',
        
      },
      fighter2: {
        name: 'Robert Whittaker',
        record: '23-5-0',
      },
    },
  ];

  return (
    <div className="fight-card">
      {fights.map((fight, index) => (
        <div className="fight" key={index}>
          <div className="bout">{fight.bout}</div>
          <div className="fighter">
            <div className="name">{fight.fighter1.name}</div>
            <div className="record">Record: {fight.fighter1.record}</div>
          </div>
          <div className="fighter">
            <div className="name">{fight.fighter2.name}</div>
            <div className="record">Record: {fight.fighter2.record}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FightCard;