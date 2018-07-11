import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className="topQuote">
          Every once in a while, a new technology, an old problem, and a big idea turn into an innovation.
        <div style={{paddingTop:"10px"}}>
          - Dean Kamen
        </div>
      </div>
    );
  }
}

export default Header;
