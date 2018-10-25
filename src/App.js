import React, { Component } from 'react';
import Country from './Components/Country/Country.js';
import NavBar from './Components/NavBar/NavBar.js';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import data from './data';

const initialState = {
  path: 'home'
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
    console.log(data.continents[0].name);
  }
  onDropdownChange = (e, drop) => {
    this.setState({ path: drop.value });
  };
  onStateChange = () => {
    this.setState({
      path: 'home'
    });
  };
  render() {
    return (
      <div>
        <NavBar onStateChange={this.onStateChange} />
        <Country onDropdownChange={this.onDropdownChange} />
        <Body path={this.state.path} />
        <Footer />
      </div>
    );
  }
}
export default App;
