/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import "./style.scss";

export default class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { time: Date.now() };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 100);
    
    // Use this to play audio 
    // var audio = new Audio('https://jamesbvaughan.com/song.mp3');
    // audio.play();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos
    };

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Kitchen Helper App" />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <h1>Kitchen Helper App</h1>
          </section>
          <div> {this.state.time} </div>
          <section className="inner-section">
            <h2>Timer</h2>
            <p>
              Chicken &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
              &emsp; &emsp; &emsp; &emsp; 10:43 Remaining
            </p>
            <p>
              Veggies &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
              &emsp; &emsp; &emsp; &emsp; 5:12 Remaining
            </p>
          </section>
          <section className="inner-section">
            <h2>Audio</h2>
            <p> Now Playing: Cooking with Winter Vegatbles</p>
          </section>
          <section className="inner-section">
            <h2>Appliances</h2>
            <p>
              Oven &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
              &emsp; &emsp; &emsp; &emsp; On
            </p>
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
};
