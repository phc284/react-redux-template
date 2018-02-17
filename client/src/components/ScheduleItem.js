import React from 'react';


const ScheduleItem = ({ game }) => {
  let awayTeam = game.awayTeam['Abbreviation'];
  let awayScore = game.awayScore['#text'];
  let homeTeam = game.homeTeam['Abbreviation'];
  let homeScore = game.homeScore['#text'];

  if (awayTeam === 'DAL') {
    let temp = awayScore;
    awayScore = homeScore;
    homeScore = temp;
  }

  return (
    <div className="schedule-item">
      <div>{awayTeam}</div>
      <div>{awayScore}</div>
      <div>{homeTeam}</div>
      <div>{homeScore}</div>
    </div>
  )
}

export default ScheduleItem;
