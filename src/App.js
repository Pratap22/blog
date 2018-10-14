import React, { Component } from 'react';
import CountryDropdown from './Components/Dropdown/CountryDropdown';
import BlogHeader from './Components/BlogHeader/BlogHeader.js';
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
        <BlogHeader onDropdownChange={this.onDropdownChange} />
        <CountryDropdown onStateChange={this.onStateChange} />
        <Body path={this.state.path} />
        {/* <Signin />
                <Register /> */}
        <Footer />
      </div>
    );
  }
}
export default App;
