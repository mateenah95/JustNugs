import React from 'react';

import Router from './Router';

import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user: null
    }
    this.signinUser = this.signinUser.bind(this);
    this.signoutUser = this.signoutUser.bind(this);
  }

  signinUser(newUser){
    this.setState({user: newUser});
  }

  signoutUser(){
    this.setState({user: null})
  }

  render(){
    return (
      <Router user={this.state.user} signinUser={this.signinUser} signoutUser={this.signoutUser} />
    )
  }
}

export default App;
