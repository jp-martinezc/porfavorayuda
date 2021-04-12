import React from 'react';

export default class Job extends React.Component {
    render() {
        return (
          <div>
            {this.renderOffer()}
          </div>
        );
      }

      state = {
        "offer": this.props.offer
      };
      
      //
      
      renderOffer() {
        return (
          <div>
            <h2>{this.state.offer.name}</h2>
            <h3>{this.state.offer.company}</h3>
            <h4>{this.state.offer.salary}</h4>
            <h5>{this.state.offer.city}</h5>
          </div>
        );
      }


}


  