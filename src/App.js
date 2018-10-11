import React, { Component } from 'react';
import CountryDropdown from './Components/Dropdown/CountryDropdown';
import BlogHeader from './Components/BlogHeader/BlogHeader.js';
import Body from './Components/Body/Body';

const initialState = {
  value: '',
  country: '',
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
        <BlogHeader />
        <CountryDropdown onDropdownChange={this.onDropdownChange} onStateChange={this.onStateChange} />
        <Body path={this.state.path} />
        {/* <Signin />
                <Register /> */}
        <footer className="measure center bottom"> Website Designed by Pratap Sharma</footer>
      </div>
    );
  }
}
export default App;
