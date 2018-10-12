import React from 'react';
import './Body.css';
import India from './Countries/India';
import Home from './Countries/Home';
import Nepal from './Countries/Nepal';
import Bhutan from './Countries/Bhutan';

const Body = ({ path }) => {
  return (
    <div className="bodyClass">
      {(() => {
        console.log(path);
        switch (path) {
          case 'home':
            return <Home />;
          case 'in':
            return <India />;
          case 'np':
            return <Nepal />;
          case 'bt':
            return <Bhutan />;
        }
      })()}
    </div>
  );
};
export default Body;
