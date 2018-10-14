import React from 'react';
import './countries.css';
import { Icon } from 'semantic-ui-react';

const CountryDropdown = ({ onStateChange }) => {
  return (
    <div className="countryDropdown flexrow">
      <div className="col-lg-1 col-md-1 col-xs-1 ">
        <div className="ui extra-small button" value="home" tabIndex="0" onClick={onStateChange}>
          <Icon name="home" />
          Home
        </div>
      </div>
    </div>
  );
};

export default CountryDropdown;
