import React from 'react';
import './NavBar.css';
import { Icon } from 'semantic-ui-react';

const NavBar = ({ onStateChange, path }) => {
  var x;
  switch (path) {
    case 'np':
      x = 'nepal';
      break;
    case 'in':
      x = 'india';
      break;
    case 'bt':
      x = 'bhutan';
      break;
    default:
      x = 'globe';
  }
  return (
    <div className="countryDropdown flexrow">
      <div className="col-lg-6 col-md-6 col-xs-6">
        <img className="globe-size" alt="Globe" src={`/flag/${x}.gif`} />
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
