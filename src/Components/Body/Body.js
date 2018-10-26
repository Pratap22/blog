import React from 'react';
import './Body.css';
import Home from './Countries/Home';
import CountryDetail from './CountryDetail';

const Body = ({ path, country }) => {
  return (
    <div className="bodyClass">
      {(() => {
        switch (path) {
          case 'home':
            return <Home />;
          default:
            return <CountryDetail country={country} />;
        }
      })()}
    </div>
  );
};
export default Body;
