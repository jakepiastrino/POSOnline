import React, { Component } from 'react';
import NavBar from './components/NavBar';
import MainBody from './components/MainBody';
import FooterBody from './components/FooterBody';
import CartBody from './components/CartBody';

class App extends Component {
  render() {
    return (
      <div id="Wrapper">
          <NavBar />

          <MainBody />

          <FooterBody />

          <CartBody />
      </div>
    );
  }
}

export default App;
