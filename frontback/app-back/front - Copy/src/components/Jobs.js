import React from 'react';
import Job from "./Job";
import signup from "./signup";

export default class Jobs extends React.Component {

  

  componentDidMount() {
    const url = "/offers";
    fetch(url)
      .then(res => {
        return res.json();
      }).then(offers => {
        this.setState({ offers })
      })
  }

  state = {
    "offers": []
  };

  render() {
    return (
      <div>
        {this.state.offers.map((e, i) => <Job key={i} offer={e} />)}
      </div>
    );
  }
}
signup.Signup();