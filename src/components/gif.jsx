import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = `https://media4.giphy.com/media/${this.props.id}/giphy.gif?cid=ecf05e47b87g5028bzolfpnl7355rdc1q9krifgxp7xbbr66&rid=giphy.gif&ct=g`;
    return (
      <img src={src} alt="" className="gif"/>
    );
  }
}

export default Gif;
