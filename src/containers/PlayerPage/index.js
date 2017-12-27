import React, { Component } from 'react';
import axios from 'axios';
import PlayerTable from '../../components/playerTable'
import PlayerSelect from '../../components/playerSelect'
import '../../font-awesome/css/font-awesome.min.css';
import './index.css';

class PlayerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    axios.get('http://web.profootballfocus.com.s3-website-us-east-1.amazonaws.com/quarterbacks.json', {mode: 'no-cors'})
    .then(response => {
      this.setState({data: response.data});
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    const { params } = this.props.match;
    const { id } = params;
    const { data } = this.state;
    let selectedPlayer = {};
    let playerList = {}

    // if no data then do not filter stats
    if (data) {
      const { statistics, players } = data;

      const selectedPlayerProfile = players.filter(qb => {
        return qb.player_id === parseInt(id, 10);
      });
      const selectedPlayerStats = statistics.filter(week => {
        return week.player_id === parseInt(id, 10);
      });

      selectedPlayer = {
        selectedPlayerStats,
        selectedPlayerProfile: selectedPlayerProfile[0]
      }

      playerList = {
        players,
        selectedPlayerProfile: selectedPlayerProfile[0]
      }
    }

    return (
      <div className="player-page">
        <div>
          <PlayerSelect {...playerList} />
        </div>
        <div>
          { !data
            ? <i className="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i>
            : <PlayerTable {...selectedPlayer} />
          }
        </div>
      </div>
    );
  }
}

export default PlayerPage;