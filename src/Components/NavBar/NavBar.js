import React from 'react';
import './NavBar.css';
import { Icon } from 'semantic-ui-react';

const NavBar = ({ onStateChange }) => {
  return (
    <div className="countryDropdown flexrow">
      <div className="col-lg-6 col-md-6 col-xs-6">
        <img className="globe-size" alt="Globe" src="/flag/globe.gif" />
      </div>
      <div className="col-lg-6 col-md-6 col-xs-6 end-xs end-md end-lg home">
        <div className="ui extra-small button" value="home" tabIndex="0" onClick={onStateChange}>
          <Icon name="home" />
          Home
        </div>
      </div>
    </div>
  );
};

export default NavBar;
