import React from 'react';
import './index.css';

const PlayerSelect = (props) => {
  const { players, selectedPlayerProfile } = props;
  const handleChange = (event) => {
    if (!event.target.value) return;
    window.location.href = '/player/' + event.target.value;
  }
  return (
    <div className="player-select">
      {!players
        ? <span>Loading</span>
        : <select
            name="player-select"
            className="player-select"
            onChange={handleChange}
            value={selectedPlayerProfile ? selectedPlayerProfile.player_id : ''}
          >
            <option value="">Select a player</option>
            {players.map((player, key) => {
              return <option
                      key={key}
                      value={player.player_id}
                    >
                      {player.first_name} {player.last_name}
                    </option>
            })}
          </select>
      }
    </div>
  )
}

export default PlayerSelect