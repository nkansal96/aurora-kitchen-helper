/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

export default class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.fetchJSON = this.fetchJSON.bind(this);

    this.state = {
      intervalId: setInterval(this.fetchJSON, 1000),
      activatedAppliances: [],
      minutesLeftOnTimer: null,
      currentSong: null,
    };

    // Use this to play audio
    // var audio = new Audio('https://jamesbvaughan.com/song.mp3');
    // audio.play();
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  fetchJSON() {
    fetch('/data')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          activatedAppliances: data.activatedAppliances,
          minutesLeftOnTimer: data.minutesLeftOnTimer,
          currentSong: data.currentSong,
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
                {this.state.minutesLeftOnTimer
                  ? `${this.state.minutesLeftOnTimer} Minutes Remaining`
                  : 'No timer currently set.'
                }
              </p>
            </div>
          </section>
          <section className="card mt-4">
            <div className="card-body">
              <h3 className="card-title">Audio</h3>
              <p className="card-text">
                {this.state.currentSong
                  ? `Now Playing: ${this.state.currentSong}`
                  : 'No song currently playing.'
                }
              </p>
            </div>
          </section>
          <section className="card mt-4">
            <div className="card-body">
              <h3 className="card-title">Active Appliances</h3>
              <div className="card-text">
                {this.state.activatedAppliances.map(appliance =>
                  <div key={appliance}>{appliance}</div>
                )}
              </div>
            </div>
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
};
