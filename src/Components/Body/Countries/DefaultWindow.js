import React from 'react';
import '../Body';
import './Common.css';

const Bhutan = () => {
  return (
    <div className="center">
      <div className="ui placeholder segment">
        <div className="ui icon header center-lg">
          <i className="search icon" />
          We don't have blogs matching to your query! Will be adding soon
        </div>
        <div className="inline center-lg">
          <button className="ui grey button large">Request Blog</button>
        </div>
      </div>
    </div>
  );
};
export default Bhutan;
