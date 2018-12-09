import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    let url = 'http://localhost:5000/twitter-api/1.1/statuses/home_timeline.json';
    axios.get(url)
      .then(res => {
        const response = res.data;
        console.log(response);
      })
  }

  render() {
    return (
      <div className="App">
        Twitter API
      </div>
    );
  }
}

export default App;
