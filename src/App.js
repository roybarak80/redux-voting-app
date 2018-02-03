import React, { Component } from 'react';
import { voteReact, voteAngular, voteVuejs } from './actions';
import './app.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
    
  }

  handleVoteReact = () => {
    this.store.dispatch(voteReact());

  }

  handleVoteVuejs = () => {
    
    this.store.dispatch(voteVuejs());

  }

  render() {
    return (
      <div className="App">
        <div className="jumbotron">

          <h2>What is your favorite framework?</h2>
          <h4>Click on the logos to vote</h4>
          <br />
          <div className="row">
            <div className="col-xs-offset-3 col-xs-2">
            <button onClick={this.handleVoteReact}><i className="fab fa-react"/></button>

            </div>
            <div className="col-xs-2">
            <button onClick={this.handleVoteAngular}><i className="fab fa-angular"/></button>

            
            </div>
            <div className="col-xs-2">
            <button onClick={this.handleVoteVuejs}><i className="fab fa-vuejs"/></button>
              
            </div>
          </div>
        



        </div>
      </div>
    );
  }
}


export default App;
