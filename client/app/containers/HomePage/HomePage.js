/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

export default class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      intervalId: setInterval(this.fetchJSON, 1000)
    };

    // Use this to play audio
    // var audio = new Audio('https://jamesbvaughan.com/song.mp3');
    // audio.play();
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  fetchJSON() {
    fetch('/file.json')
      .then(res => res.json())
      .then((json) => {
        alert(JSON.stringify(json, null, 2))
        this.setState({
          activatedAppliances: json.appliances,
          timeLeftOnTimer: json.timeLeftOnTimer,
          currentSong: json.currentSong,
        });
      });
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Kitchen Helper App" />
        </Helmet>
        <div>
          <section className="card mt-1">
            <div className="card-body">
              <h3 className="card-title">Timer</h3>
              <p className="card-text">
                Chicken &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                &emsp; &emsp; &emsp; &emsp; 10:43 Remaining
                <br />
                Veggies &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                &emsp; &emsp; &emsp; &emsp; 5:12 Remaining
              </p>
            </div>
          </section>
          <section className="card mt-4">
            <div className="card-body">
              <h3 className="card-title">Audio</h3>
              <p className="card-text">
                Now Playing: Cooking with Winter Vegatbles
              </p>
            </div>
          </section>
          <section className="card mt-4">
            <div className="card-body">
              <h3 className="card-title">Appliances</h3>
              <p className="card-text">
                Oven &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                &emsp; &emsp; &emsp; &emsp; On
              </p>
            </div>
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
};
