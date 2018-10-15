import React, { Component } from 'react';
import Country from './Components/Country/Country.js';
import NavBar from './Components/NavBar/NavBar.js';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
const initialState = {
  path: 'home'
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
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
        {/* <Signin />
                <Register /> */}
        <Footer />
      </div>
    );
  }
}
export default App;
