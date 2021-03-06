import React, { Component } from 'react';
import Country from './Components/Country/Country.js';
import NavBar from './Components/NavBar/NavBar.js';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import countries from './Components/Body/Countries/Countrydata';

const initialState = {
  path: 'home',
  country: {}
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }
  onDropdownChange = (e, drop) => {
    const countryA = countries.filter(country => country.countryCode === drop.value);
    if (countryA.length === 1) {
      this.setState({ path: drop.value, country: countryA[0] });
    }
  };
  onStateChange = () => {
    this.setState({
      path: 'home',
      countryDetail: {}
    });
  };
  render() {
    return (
      <div>
        <NavBar onStateChange={this.onStateChange} />
        <Country onDropdownChange={this.onDropdownChange} />
        <Body path={this.state.path} country={this.state.country} />
        <Footer />
      </div>
    );
  }
}
export default App;
