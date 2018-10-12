import React from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';
import * as Options from './countries';
import './countries.css';

const CountryDropdown = ({ onDropdownChange, onStateChange }) => {
  function collapseFunction() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }
  return (
    <div className="countryDropdown flexrow">
      <div className="col-lg-2 col-md-2 col-sm-2">
        <div className="ui button" value="home" tabIndex="0" onClick={onStateChange}>
          <Icon name="home" />
          Home
        </div>
      </div>
      <div className="col-lg-10 col-md-10 col-sm-10 col-xm-10 end-xs end-sm end-md end-lg">
        <div className="topnav" id="myTopnav">
          <a href="#">
            <Dropdown
              className="countrycss"
              placeholder="Asia"
              search
              selection
              options={Options.asiaOptions}
              onChange={onDropdownChange}
            />
          </a>
          <a href="#">
            <Dropdown
              className="countrycss"
              placeholder="Europe"
              search
              selection
              options={Options.europeOptions}
              onChange={onDropdownChange}
            />
          </a>
          <a href="#">
            <Dropdown
              className="countrycss"
              placeholder="Africa"
              search
              selection
              options={Options.africaOptions}
              onChange={onDropdownChange}
            />
          </a>
          <a href="#">
            <Dropdown
              className="countrycss"
              placeholder="North America"
              search
              selection
              options={Options.northAmericaOptions}
              onChange={onDropdownChange}
            />
          </a>
          <a href="#">
            <Dropdown
              className="countrycss"
              placeholder="South America"
              search
              selection
              options={Options.southAmericaOptions}
              onChange={onDropdownChange}
            />
          </a>
          <a href="#">
            <Dropdown placeholder="Oceania" search selection options={Options.oceania} onChange={onDropdownChange} />
          </a>
          <a href="#" className="icon" id="iconId" onClick={collapseFunction}>
            &#9776;
          </a>
        </div>
      </div>
    </div>
  );
};

export default CountryDropdown;
