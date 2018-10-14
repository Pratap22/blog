import React from 'react';
import '../Body';
import './Common.css';

const Home = () => {
  return (
    <div>
      <div className="flexrow">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xm-12 center-xm">
          <img alt="Home" className="image-size" src="/img/in1.jpg" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xm-12 center-xm">
          <img alt="Home" className="image-size" src="/img/in2.jpg" />
        </div>
      </div>
    </div>
  );
};
export default Home;
