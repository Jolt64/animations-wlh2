import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);
   
    this.state = {
      animationName: null,
      navWidth: 0
    };
  }

  toggleSpin = () => {
    this.setState({
      animationName: !this.state.animationName ? 'spin' : null
    })
  }

  closeNav = () => {
    this.setState({
      navWidth: 0
    })
  }

  openNav = () => {
    this.setState({
      navWidth: 250
    })
  }

  render() {
    return (
      <div>
        <div id="mySidenav" className="sidenav" style={{width: this.state.navWidth}}>
          <a href="#/" className="closebtn" onClick={this.closeNav}>&times;</a>
          <a href="#/">About</a>
          <a href="#/">Services</a>
          <a href="#/">Clients</a>
          <a href="#/">Contact</a>
        </div>
        <span style={{fontSize:30, cursor: 'pointer'}} onClick={this.openNav}>&#9776;</span>
        {/* <div id="heart"></div> */}
        {/* <div className="square" style={{animationName: this.state.animationName}} onClick={this.toggleSpin}></div> */}
        {/* <MenuButton handleMouseDown={this.handleMouseDown} />
        <Menu menuVisibility={this.state.visible} handleMouseDown={this.handleMouseDown} /> */}
      </div>
    );
  }
}

export default App;
