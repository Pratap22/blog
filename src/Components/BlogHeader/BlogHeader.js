import React from 'react';
import './BlogHeader.css';
import { Dropdown } from 'semantic-ui-react';
import * as Options from './countries';

const BlogHeader = ({ onDropdownChange }) => {
  function collapseFunction() {
    var x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }
  return (
    <div className="nav-bar">
      <div className="countryDropdown flexrow">
        <div className="col-lg-1 col-md-1 col-xs-1 ">
          <img className="globe-size" alt="Globe" src="/img/globe.gif" />
        </div>
        <div className="col-lg-11 col-md-11 col-xs-11 popup menu-item visible col-xs-1 end-xs end-sm end-md end-lg">
          <div className="topnav" id="myTopnav">
            <a>
              <Dropdown
                className="countrycss small"
                placeholder="Asia"
                search
                selection
                options={Options.asiaOptions}
                onChange={onDropdownChange}
              />
            </a>
            <a>
              <Dropdown
                className="countrycss small"
                placeholder="Europe"
                search
                selection
                options={Options.europeOptions}
                onChange={onDropdownChange}
              />
            </a>
            <a>
              <Dropdown
                className="countrycss small"
                placeholder="Africa"
                search
                selection
                options={Options.africaOptions}
                onChange={onDropdownChange}
              />
            </a>
            <a>
              <Dropdown
                className="countrycss1 small"
                placeholder="North America"
                search
                selection
                options={Options.northAmericaOptions}
                onChange={onDropdownChange}
              />
            </a>
            <a>
              <Dropdown
                className="countrycss1 small"
                placeholder="South America"
                search
                selection
                options={Options.southAmericaOptions}
                onChange={onDropdownChange}
              />
            </a>
            <a>
              <Dropdown
                className="countrycss small"
                placeholder="Oceania"
                search
                selection
                options={Options.oceania}
                onChange={onDropdownChange}
              />
            </a>
            <a className="icon" id="iconId" onClick={collapseFunction}>
              &#9776;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogHeader;
