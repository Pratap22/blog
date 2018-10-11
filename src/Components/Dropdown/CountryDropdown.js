import React from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';
import * as Options from './countries';
import './countries.css';

const CountryDropdown = ({ onDropdownChange, onStateChange }) => {
  return (
    <div className="countryDropdown">
      <div className="ui button" value="home" tabIndex="0" onClick={onStateChange}>
        <Icon name="home" />
        Home
      </div>
      <Dropdown
        className="countrycss"
        placeholder="Asia"
        search
        selection
        options={Options.asiaOptions}
        onChange={onDropdownChange}
      />
      <Dropdown
        className="countrycss"
        placeholder="Europe"
        search
        selection
        options={Options.europeOptions}
        onChange={onDropdownChange}
      />
      <Dropdown
        className="countrycss"
        placeholder="Africa"
        search
        selection
        options={Options.africaOptions}
        onChange={onDropdownChange}
      />
      <Dropdown
        className="countrycss"
        placeholder="North America"
        search
        selection
        options={Options.northAmericaOptions}
        onChange={onDropdownChange}
      />
      <Dropdown
        className="countrycss"
        placeholder="South America"
        search
        selection
        options={Options.southAmericaOptions}
        onChange={onDropdownChange}
      />
      <Dropdown placeholder="Oceania" search selection options={Options.oceania} onChange={onDropdownChange} />
    </div>
  );
};

export default CountryDropdown;
