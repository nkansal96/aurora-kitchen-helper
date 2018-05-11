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
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
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
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func
};
