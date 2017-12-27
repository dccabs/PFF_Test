import React from 'react';
import './index.css';

const PlayerTable = (props) => {
  const { selectedPlayerProfile, selectedPlayerStats } = props;

  const weekHeader = <tr>
                      <td>Week</td>
                      <td>Home</td>
                      <td>Away</td>
                      <td>Completions</td>
                      <td>Attempts</td>
                      <td>Comp. %</td>
                      <td>Yards</td>
                      <td>TD</td>
                      <td>Ints</td>
                      <td>Rating</td>
                    </tr>;

  const weekRow = key => {
    const {
      attempts,
      away_team,
      completions,
      home_team,
      interceptions,
      touchdowns,
      week,
      yards
    } = selectedPlayerStats[key];

    const getCompletionPercentage = () => {
      const c = parseInt(completions, 10);
      const a = parseInt(attempts, 10);
      const per = c/a * 100;
      return parseInt(per, 10);
    }

    const getPasserRating = () => {
      const a = ((completions/attempts) - .3) * 5;
      const b = ((yards/attempts) - 3) * .25;
      const c = (touchdowns/attempts) * 20;
      const d = 2.375 - ((interceptions/attempts) * 25);
      const rating = ((a+b+c+d)/6) * 100;
      return rating.toFixed(1);
    }


    return <tr key={key}>
            <td>{week}</td>
            <td>{home_team}</td>
            <td>{away_team}</td>
            <td>{completions}</td>
            <td>{attempts}</td>
            <td>{getCompletionPercentage()}</td>
            <td>{yards}</td>
            <td>{touchdowns}</td>
            <td>{interceptions}</td>
            <td>{getPasserRating()}</td>
          </tr>;
  }

  return (
    <div>
      <h3>
        {selectedPlayerProfile.first_name} {selectedPlayerProfile.last_name} Game By Game Stats
      </h3>
      <table className="player-table">
        <thead className="player-table__header">
          {weekHeader}
        </thead>
        <tbody>
          {Object.keys(selectedPlayerStats).map(weekIndex => {
            return weekRow(weekIndex)
          })}
        </tbody>
      </table>
    </div>
  )
}

export default PlayerTable