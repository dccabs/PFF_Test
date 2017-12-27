import React, { Component } from 'react';
import PlayerSelect from '../../components/playerSelect'
import axios from 'axios';

class HomePage extends Component {
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
    const { data } = this.state;
    let playerList = {}

    // if no data then do not filter stats
    if (data) {
      const { players } = data;

      playerList = {
        players,
        selectedPlayerProfile: null
      }
    }
    return (
      <div className="homepage">
        <PlayerSelect {...playerList} />
      </div>
    );
  }
}

export default HomePage;