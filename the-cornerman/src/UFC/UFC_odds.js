import React from 'react';
import '../components/Odds.css';

const BettingOdds = () => {
  const oddsData = [
    {
      home_team: 'Fighter A',
      away_team: 'Fighter B',
      sites: [
        { site_key: 'Bookmaker A', odds: { home: 1.75, away: 2.25 } },
        { site_key: 'Bookmaker B', odds: { home: 1.85, away: 2.15 } },
      ],
    },
    {
      home_team: 'Fighter C',
      away_team: 'Fighter D',
      sites: [
        { site_key: 'Bookmaker C', odds: { home: 1.95, away: 1.85 } },
        { site_key: 'Bookmaker D', odds: { home: 2.10, away: 1.95 } },
      ],
    },
  ];

  return (
    <div className="betting-odds-container">
      <h1 className="heading">Betting Odds</h1>
      {oddsData.map((event, index) => (
        <div key={index} className="event">
          <h2>{event.home_team} vs {event.away_team}</h2>
          {event.sites.map((site, idx) => (
            <div key={idx} className="odds">
              <p className="bookmaker">{site.site_key}</p>
              <div className="odds-container">
                <p className="home-odds">Home: {site.odds.home}</p>
                <p className="away-odds">Away: {site.odds.away}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BettingOdds;

